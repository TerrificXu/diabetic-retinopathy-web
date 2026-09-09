import React, { useState, useEffect } from "react";
import axios from "axios";

const PredictionForm = ({ model }) => {
    const [features, setFeatures] = useState([]);
    const [inputValues, setInputValues] = useState({});
    const [prediction, setPrediction] = useState(null);

// —— 在文件顶部，加上这个映射表 ——
const featureLabels = {
  // 基础实验室指标
  "hba1c":                      "HbA1c",
  "creatinine":                 "Creatinine",
  "hematocrit":                 "Hematocrit",
  "bun":                        "Blood Urea Nitrogen (BUN)",
  "albumin":                    "Albumin",
  "calcium":                    "Calcium",
  "sodium":                     "Sodium",
  "anion_gap":                  "Anion Gap",
  "alt":                        "Alanine Aminotransferase (ALT)",
  "bilirubin":                  "Bilirubin",
  "chloride":                   "Chloride",
  "potassium":                  "Potassium",
  "glucose":                    "Glucose",
  "hemoglobin":                 "Hemoglobin",
  // 衍生/别名字段
  "age":                        "Age",
  "age_in_years":               "Age",
  "alanine.aminotransferase...sgpt": "Alanine Aminotransferase (ALT)",
  "albumin..serum":             "Albumin",
  "alkaline.phosphatase..serum":"Alkaline Phosphatase (ALP)",
  "anion.gap..blood":           "Anion Gap",
  "aspartate.aminotransferase": "Aspartate Aminotransferase (AST)",
  "bilirubin.total.serum.or.plasma.mass.volume": "Bilirubin",
  "blood.urea.nitrogen":        "Blood Urea Nitrogen (BUN)",
  "calcium..serum":             "Calcium",
  "chloride..serum":            "Chloride",
  "creatinine..serum.quantitative":"Creatinine",
  "glucose..serum.plasma.quantitative":"Glucose",
  "mean.corpuscular.hemoglobin.concentration": "Mean Corpuscular Hemoglobin Concentration (MCHC)",
  "mean.corpuscular.volume":     "Mean Corpuscular Volume (MCV)",
  "platelet.count":             "Platelet Count",
  "red.blood.cell.count":       "Red Blood Cell Count (RBC)",
  "white.blood.cell.count":     "White Blood Cell Count (WBC)",
  // 风险因子
  "neph":                       "Nephropathy (Neph)",
  "nephropathy":                "Nephropathy (Neph)",
  "neu":                        "Neuropathy (Neu)",
  "neuropathy":                 "Neuropathy (Neu)",
  // 其它
  "gender":                     "Gender",
  "race":                       "Race",
};


    useEffect(() => {
        if (model) {
            axios
                .get(`http://127.0.0.1:5000/get_features?model_name=${model}`)
                .then((response) => {
                    if (response.data && response.data.features) {
                        setFeatures(response.data.features);
                        setInputValues((prev) => {
                            const newValues = {};
                            response.data.features.forEach((f) => {
                                newValues[f] = prev[f] ?? "";
                            });
                            return newValues;
                        });
                    }
                })
                .catch((error) => {
                    console.error("Error fetching features:", error);
                    setFeatures([]);
                });
        } else {
            setFeatures([]);
        }
    }, [model]);

    // 更新后的 getPlaceholder 函数：包括原有 4 个特征及 RuleFit 模型额外的 8 个特征输入提示
    const getPlaceholder = (feature) => {
        const lowerFeature = feature.toLowerCase();
        if (lowerFeature === "creatinine") {
            return 'Enter a value between 0.0 and 20.0 (mg/dL)';
        } else if (lowerFeature === "hba1c") {
            return 'Enter a value between 0.0 and 20.0 (%)';
        } else if (lowerFeature === "bun") {
            return 'Enter a value between 0.0 and 100.0 (mg/dL)';
        } else if (lowerFeature === "anion_gap") {
            return 'Enter a value between 0.0 and 30.0 (mEq/L)';
        }
        if (model === "RuleFit") {
            if (lowerFeature === "hematocrit") {
                return 'Enter a value between 0.0 and 100.0 (%)';
            } else if (lowerFeature === "albumin") {
                return 'Enter a value between 0.0 and 10.0 (g/dL)';
            } else if (lowerFeature === "calcium") {
                return 'Enter a value between 0.0 and 20.0 (mg/dL)';
            } else if (lowerFeature === "sodium") {
                return 'Enter a value between 100.0 and 200.0 (mEq/L)';
            } else if (lowerFeature === "alt") {
                return 'Enter a value between 0.0 and 100.0 (U/L)';
            } else if (lowerFeature === "bilirubin") {
                return 'Enter a value between 0.0 and 5.0 (mg/dL)';
            } else if (lowerFeature === "chloride") {
                return 'Enter a value between 0.0 and 200.0 (mEq/L)';
            } else if (lowerFeature === "potassium") {
                return 'Enter a value between 0.0 and 10.0 (mEq/L)';
            }
        }

        // 新增 Elaborative XGBoost 的 4 个特征提示
        if (model === "Elaborative XGBoost") {
            const lf = lowerFeature;
            if (lf === "glucose")    return 'Enter a value between 0.0 and 1000.0 (mg/dL)';
            if (lf === "hemoglobin") return 'Enter a value between 0.0 and 30.0 (g/dL)';
            if (lf === "albumin")    return 'Enter a value between 0.0 and 15.0 (g/dL)';
            if (lf === "age")        return 'Enter an integer value greater than 0 (in years)';
        }

        // 新增 Two-level Ensemble 的特征提示
        if (model === "Two-level Ensemble") {

            if (feature === "AGE_IN_YEARS")        return 'Enter an integer value greater than 0 (in years)';
            if (feature === "Alanine.Aminotransferase...SGPT")    return 'Enter a value between 0.0 and 100.0 (IU/L)';
            if (feature === "Albumin..Serum")    return 'Enter a value between 0.0 and 15.0 (g/dL)';
            if (feature === "Alkaline.Phosphatase..Serum") return 'Enter a value between 0.0 and 300.0 (IU/L)';
            if (feature === "Anion.Gap..Blood") return 'Enter a value between 0.0 and 30.0 (mEq/L)';
            if (feature === "Aspartate.Aminotransferase") return 'Enter a value between 0.0 and 100.0 (U/L)';
            if (feature === "Bilirubin.Total.Serum.or.Plasma.Mass.Volume") return 'Enter a value between 0.0 and 5.0 (mg/dL)';
            if (feature === "Blood.Urea.Nitrogen") return 'Enter a value between 0.0 and 100.0 (mg/dL)';
            if (feature === "Calcium..Serum") return 'Enter a value between 0.0 and 20.0 (mg/dL)';
            if (feature === "Chloride..Serum") return 'Enter a value between 0.0 and 200.0 (mEq/L)';
            if (feature === "Creatinine..Serum.Quantitative") return 'Enter a value between 0.0 and 20.0 (mg/dL)';
            if (feature === "Glucose..Serum.Plasma.Quantitative") return 'Enter a value between 0.0 and 1000.0 (mg/dL)';
            if (feature === "Hematocrit") return 'Enter a value between 0.0 and 100.0 (%)';
            if (feature === "Hemoglobin") return 'Enter a value between 0.0 and 30.0 (g/dL)';
            if (feature === "Mean.Corpuscular.Hemoglobin.Concentration") return 'Enter a value between 0.0 and 100.0 (g/dL)';
            if (feature === "Mean.Corpuscular.Volume") return 'Enter a value between 0.0 and 200.0 (fL)';
            if (feature === "Platelet.Count") return 'Enter a value between 0.0 and 1000.0 (×10\u00B3/L)';
            if (feature === "Potassium..Serum") return 'Enter a value between 0.0 and 10.0 (mEq/L)';
            if (feature === "Red.Blood.Cell.Count") return 'Enter a value between 0.0 and 10.0 (×10\u2076/L)';
            if (feature === "Sodium..Serum") return 'Enter a value between 100.0 and 200.0 (mEq/L)';
            if (feature === "White.Blood.Cell.Count") return 'Enter a value between 0.0 and 100.0 (×10\u00B3/L)';
        }

        return "";
    };

    const handleChange = (event) => {
        setInputValues({
            ...inputValues,
            [event.target.name]: event.target.value,
        });
    };

    const handleSelectChange = (event) => {
        handleChange(event);
        const wrapper = event.target.parentNode; // select-wrapper
        if (event.target.value !== "") {
            wrapper.classList.add("has-value");
        } else {
            wrapper.classList.remove("has-value");
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!model) {
            alert("Please select a model");
            return;
        }
        const featureValues = features.map((f) =>
            parseFloat(inputValues[f]) || 0
        );
        try {
            const response = await axios.post("http://127.0.0.1:5000/predict", {
                model,
                features: featureValues,
            });
            if (response.data && response.data.prediction !== undefined) {
                setPrediction(response.data.prediction);
            } else {
                setPrediction("Unable to obtain prediction result");
            }
        } catch (error) {
            console.error("Error making prediction:", error);
            setPrediction("Prediction failed");
        }
    };



    return (
        <div className="prediction-form-container">
            <h2 className="enter-features">Enter Features</h2>
            {features.length > 0 ? (
                <form onSubmit={handleSubmit}>
                    {features.map((feature, index) => {
                        // 用映射表拿展示名，找不到就用原始 feature
                        const lower = feature.toLowerCase();
                        const displayLabel = featureLabels[lower] || feature;
                        const lowerFeature = feature.toLowerCase();
                        const extraStyle =
                            index === features.length - 1 ? { marginBottom: "2rem" } : {};
                        if (
                            lowerFeature === "neu" ||
                            lowerFeature === "neph" ||
                            lowerFeature === "neuropathy" ||
                            lowerFeature === "nephropathy"
                        ) {
                            return (
                                <div key={index} className="feature-group" style={extraStyle}>
                                    <label>{displayLabel}:</label>
                                    <div
                                        className="select-wrapper"
                                        data-placeholder='Select "Yes" or "No"'
                                    >
                                        <select
                                            name={feature}
                                            value={inputValues[feature]}
                                            onChange={handleSelectChange}
                                            required
                                        >
                                            <option value="" disabled hidden></option>
                                            <option value="1">Yes</option>
                                            <option value="0">No</option>
                                        </select>
                                    </div>
                                </div>
                            );
                        } else if (lowerFeature === "gender") {
                            return (
                                <div key={index} className="feature-group" style={extraStyle}>
                                    <label>{displayLabel}:</label>
                                    <div
                                        className="select-wrapper"
                                        data-placeholder='Select your gender'
                                    >
                                        <select
                                            name={feature}
                                            value={inputValues[feature]}
                                            onChange={handleSelectChange}
                                            required
                                        >
                                            <option value="" disabled hidden></option>
                                            <option value="0">Female</option>
                                            <option value="1">Male</option>
                                            <option value="2">Unknown</option>
                                        </select>
                                    </div>
                                </div>
                            );
                        } else if (lowerFeature === "race") {
                            return (
                                <div key={index} className="feature-group" style={extraStyle}>
                                    <label>{displayLabel}:</label>
                                    <div
                                        className="select-wrapper"
                                        data-placeholder='Select your race'
                                    >
                                        <select
                                            name={feature}
                                            value={inputValues[feature]}
                                            onChange={handleSelectChange}
                                            required
                                        >
                                            <option value="" disabled hidden></option>
                                            <option value="0">African American</option>
                                            <option value="1">Asian</option>
                                            <option value="2">Biracial</option>
                                            <option value="3">Caucasian</option>
                                            <option value="4">Hispanic</option>
                                            <option value="5">Eastern Indian</option>
                                            <option value="6">Native American</option>
                                            <option value="8">Pacific Islander</option>
                                            <option value="7">Other</option>
                                        </select>
                                    </div>
                                </div>
                            );
                        } else {
                            return (
                                <div key={index} className="feature-group" style={extraStyle}>
                                    <label>{displayLabel}:</label>
                                    <input
                                        type="number"
                                        name={feature}
                                        value={inputValues[feature]}
                                        onChange={handleChange}
                                        required
                                        placeholder={getPlaceholder(feature)}
                                    />
                                </div>
                            );
                        }
                    })}
                    <button type="submit" className="contact-submit">
                        Predict
                    </button>
                </form>
            ) : (
                <p>Please select a model first</p>
            )}

            <hr className="prediction-divider" />

            <h3 className="prediction-result-title">Prediction Result:</h3>
            <div className="prediction-result-value">
                {prediction !== null
                    ? (() => {
                        // 如果后端返回的是字符串，也用 == 而不是 ===
                        if (prediction == 1) return "High Risk of DR!";
                        if (prediction == 0) return "Low Risk of DR!";
                        // 否则可能是错误信息
                        return prediction;
                    })()
                : "Waiting for input..."}
            </div>

            <div className="prediction-result-arcs">
                <svg className="arc-svg first-arc-svg" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M26,10 Q60,0 95,10" stroke="#f15a22" fill="none" strokeWidth="2" />
                </svg>
                <svg className="arc-svg second-arc-svg" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M67,10 Q78,7 90,10" stroke="#f15a22" fill="none" strokeWidth="2" />
                </svg>
            </div>
        </div>
    );
};

export default PredictionForm;
