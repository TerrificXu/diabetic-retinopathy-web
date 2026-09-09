# app.py

import os
import smtplib
from email.mime.text import MIMEText
from email.header import Header
from email.utils import formataddr
from flask import Flask, render_template, request, jsonify
from forms import generate_form_fields
from helper import load_model, predict
from flask_cors import CORS

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your_secret_key'
CORS(app)

# 模型目录与支持的扩展名
MODEL_PATH = "models/"
supported_ext = ('.pkl', '.json')
models = {}

# 递归扫描 models/ 目录下的所有文件
for root, _, files in os.walk(MODEL_PATH):
    for filename in files:
        if not filename.lower().endswith(supported_ext) or filename.lower() == 'scaler.pkl':
            continue
        filepath = os.path.join(root, filename)
        name = os.path.splitext(filename)[0]
        try:
            models[name] = load_model(filepath)
            print(f"✔ Loaded model: {name} (from {filepath})")
        except ValueError as ve:
            print(f"⚠ Skipping unsupported or corrupted model {filepath}: {ve}")
        except Exception as e:
            print(f"⚠ Error loading model {filepath}: {e}")

# SMTP 配置（请根据实际情况更新）
app.config["SMTP_SERVER"]   = os.getenv("SMTP_SERVER",   "smtp.gmail.com")
app.config["SMTP_PORT"]     = int(os.getenv("SMTP_PORT", 587))
app.config["SMTP_USERNAME"] = os.getenv("SMTP_USERNAME", "your_username@gmail.com")
app.config["SMTP_PASSWORD"] = os.getenv("SMTP_PASSWORD", "your_password")
app.config["SMTP_USE_TLS"]  = os.getenv("SMTP_USE_TLS", "True").lower() == "true"
app.config["SENDER_EMAIL"]  = os.getenv("SENDER_EMAIL", "your_sender_email@gmail.com")

@app.route('/send_email', methods=['POST'])
def send_email():
    data = request.get_json()
    if not data:
        return jsonify({"error": "No data provided"}), 400

    recipient  = data.get("recipient")
    user_email = data.get("user_email")
    subject    = data.get("subject", "DR Prediction Result")
    email_body = data.get("body", "")

    msg = MIMEText(email_body, "plain", "utf-8")
    msg["Subject"] = Header(subject, "utf-8")
    msg["From"]    = formataddr(("Diabetic Retinopathy Prediction", app.config["SENDER_EMAIL"]))
    msg["To"]      = recipient
    msg["Reply-To"] = user_email

    try:
        server = smtplib.SMTP(app.config["SMTP_SERVER"], app.config["SMTP_PORT"])
        server.ehlo()
        if app.config["SMTP_USE_TLS"]:
            server.starttls()
        server.login(app.config["SMTP_USERNAME"], app.config["SMTP_PASSWORD"])
        server.sendmail(app.config["SENDER_EMAIL"], [recipient], msg.as_string())
        server.quit()
        return jsonify({"success": True}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/', methods=['GET', 'POST'])
def index():
    model_name = request.form.get('model', '')
    feature_names = []
    if model_name in models and hasattr(models[model_name], 'feature_names'):
        feature_names = models[model_name].feature_names

    form_class = generate_form_fields(feature_names)
    form = form_class()
    # 重新填充下拉列表
    form.model.choices = [('', 'Please select a model')] + [(name, name) for name in models.keys()]

    if form.validate_on_submit():
        try:
            selected = form.model.data
            # 按 feature_names 长度依次取值
            features = [
                getattr(form, f'feature_{i+1}').data
                for i in range(len(feature_names))
            ]
            prediction = predict(models[selected], features)
            if prediction is None:
                return jsonify({"error": "Prediction failed"}), 500
            return jsonify({"prediction": int(prediction)})
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    return render_template('index.html', form=form)

@app.route('/result')
def result():
    model_name = request.args.get('model_name')
    prediction = request.args.get('prediction')
    return render_template('result.html', model_name=model_name, prediction=prediction)

@app.route('/models')
def model_list():
    return jsonify({"models": list(models.keys())})

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/get_features', methods=['GET'])
def get_features():
    model_name = request.args.get('model_name', '')
    if model_name in models and hasattr(models[model_name], 'feature_names'):
        return jsonify({"features": list(models[model_name].feature_names)})
    return jsonify({"features": []})

from flask import request, jsonify

@app.route('/predict', methods=['POST'])
def predict_api():
    data = request.get_json()
    if not data:
        return jsonify({"error": "No data provided"}), 400

    model_name = data.get('model')
    features   = data.get('features')

    # 1) 校验
    if model_name not in models:
        return jsonify({"error": f"Model '{model_name}' not found"}), 400
    if not isinstance(features, list):
        return jsonify({"error": "Features must be a list"}), 400

    # 2) 调用我们在 helper.py 里的 predict
    try:
        pred = predict(models[model_name], features)
        if pred is None:
            raise ValueError("Prediction returned None")
        # 直接返回 0 或 1 的整数
        return jsonify({"prediction": int(pred)}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
