from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, FloatField, SubmitField
from wtforms.validators import DataRequired, InputRequired

def generate_form_fields(feature_names):
    """根据特征名称动态生成表单"""
    class DynamicPredictionForm(FlaskForm):
        model = SelectField(
            '选择模型',
            choices=[('', 'Please select a model')],
            validators=[DataRequired(message="请选择模型")]
        )
        submit = SubmitField('Predict')

    # 动态添加特征字段
    for i, feature_name in enumerate(feature_names):
        setattr(
            DynamicPredictionForm,
            f'feature_{i+1}',
            FloatField(feature_name, validators=[InputRequired()])
        )

    return DynamicPredictionForm

