# helper.py

import os
import pickle
import joblib
import torch
import numpy as np

class CompositeModel:
    """
    将模型和它专属的 scaler 组合，提供 sklearn-like 接口。
    仅用于 Two-level Ensemble（外部 scaler 文件）。
    """
    def __init__(self, model, scaler):
        self.model = model
        self.scaler = scaler
        # 优先取模型自带的 feature_names
        if hasattr(model, 'feature_names') and model.feature_names:
            self.feature_names = list(model.feature_names)
        # 再退回到 scaler.feature_names_in_
        elif hasattr(scaler, 'feature_names_in_'):
            self.feature_names = list(scaler.feature_names_in_)
        else:
            self.feature_names = []

    def predict(self, X):
        X_np = np.asarray(X)
        if X_np.ndim == 1:
            X_np = X_np.reshape(1, -1)
        X_scaled = self.scaler.transform(X_np)
        return self.model.predict(X_scaled)

    def predict_proba(self, X):
        X_np = np.asarray(X)
        if X_np.ndim == 1:
            X_np = X_np.reshape(1, -1)
        X_scaled = self.scaler.transform(X_np)
        return self.model.predict_proba(X_scaled)


def load_model(file_path):
    """
    加载单个模型文件：
      - JSON (.json)：XGBoost，用 XGBClassifier 接口加载并写入 feature_names
      - Pickle (.pkl/.joblib)：只有文件名中包含 “two[- ]level ensemble” 时，配合同目录下的 scaler.pkl 变成 CompositeModel
      - PyTorch (.pt/.pth)：torch.load
    """
    ext = os.path.splitext(file_path)[1].lower()
    dirname = os.path.dirname(file_path)
    basename = os.path.basename(file_path).lower()

    # 1) XGBoost JSON
    if ext == '.json':
        import xgboost as xgb
        model = xgb.XGBClassifier()
        model.load_model(file_path)
        booster = model.get_booster()
        model.feature_names = booster.feature_names
        print(f"✔ Loaded XGBClassifier from JSON: {file_path}")
        return model

    # 2) sklearn/RuleFit (.pkl, .joblib)
    if ext in ('.pkl', '.joblib'):
        # 尝试用 joblib/pickle 加载模型
        try:
            model = joblib.load(file_path)
            print(f"✔ Loaded model with joblib: {file_path}")
        except Exception:
            with open(file_path, 'rb') as f:
                model = pickle.load(f)
            print(f"✔ Loaded model with pickle: {file_path}")

        # 判断是否为 Two-level Ensemble
        # 兼容 “two level ensemble” 或 “two-level ensemble” 的文件名
        normalized = basename.replace('-', ' ')
        if normalized.startswith('two level ensemble'):
            scaler_path = os.path.join(dirname, 'scaler.pkl')
            if os.path.exists(scaler_path):
                try:
                    scaler = joblib.load(scaler_path)
                except Exception:
                    with open(scaler_path, 'rb') as f:
                        scaler = pickle.load(f)
                print(f"✔ Loaded external scaler for Two-level Ensemble: {scaler_path}")
                return CompositeModel(model, scaler)
            else:
                print(f"⚠ 未找到专属 scaler.pkl：{scaler_path}，返回原始模型")

        # 普通单文件模型
        return model

    # 3) PyTorch (.pt, .pth)
    if ext in ('.pt', '.pth'):
        model = torch.load(file_path, map_location=torch.device('cpu'))
        print(f"✔ Loaded PyTorch model: {file_path}")
        return model

    # 不支持的格式
    raise ValueError(f"Unsupported model format: {file_path}")



def predict(model, features):
    """
    统一的预测接口，接收列表或一维数组，返回 0/1。
    """
    try:
        X = np.array(features, dtype=float).reshape(1, -1)
        # XGBoost
        if hasattr(model, 'get_booster'):
            raw = model.predict(X)
        # sklearn-like
        elif hasattr(model, 'predict'):
            raw = model.predict(X)
        else:
            raise ValueError("模型不支持 predict 方法")
        score = float(np.array(raw).flatten()[0])
        return 1 if score > 0.5 else 0
    except Exception as e:
        print(f"❌ 预测失败: {e}")
        return None
