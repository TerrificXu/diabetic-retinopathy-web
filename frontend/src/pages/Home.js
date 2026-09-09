import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

// 请根据实际路径调整下面的 import
import diabetic2 from "../assets/Diabetic 2.jpg";
import retinopathy2 from "../assets/Retinopathy 2.jpg";

const Home = () => {
    return (
        <div className="home-container">

            {/* ====== 第一块 ====== */}
            <section className="section top-section">
                {/* 左侧：Orientation and Enrollment，占 6/10 */}
                <div className="orientation-left">
                    <h1>Diabetic Retinopathy</h1>
                    <p className="subtitle">Program in progress</p>
                    <p className="description_1">
                        Welcome to the IEM Diabetic Retinopathy Prediction program dedicated to advancing early detection for Diabetic Retinopathy—a leading cause of vision loss among individuals with diabetes. Diabetic Retinopathy occurs when high blood sugar levels damage the blood vessels in the retina, potentially leading to blindness if not diagnosed and treated in time. Leveraging the power of machine learning, our predictive models analyze patients' electronic health records to identify early signs of this condition with remarkable accuracy. By integrating cutting-edge algorithms and clinical insights, we aim to support healthcare professionals in making timely, data-driven decisions to protect and preserve vision.
                    </p>
                    {/* 点击后跳转到当前页面内 id 为 "housing" 的区域 */}
                    <a href="#housing" className="primary-button"><strong>VIEW PREDICTION MODELS</strong></a>
                </div>

                {/* 右侧：Ready to join the OSU class of 2029?，占 3/10 */}
                <div className="orientation-right">
                    <div className="dark-box">
                        <h2 className="white-title">Ready to join the diabetic retinopathy prediction program?</h2>
                        <p className="dark-box-text">
                            Learn how our advanced machine learning prediction models can help protect the vision from diabetic retinopathy.
                        </p>
                        {/* 使用 Link 跳转到 Contact 页面 id 为 "questions" */}
                        <Link to="/contact#questions" className="enroll-link">
                            <strong>→ SUBMIT MY INQUIRY FORM</strong>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ====== 第四块 ====== */}
            <section id="housing" className="section housing-section">
                <div className="image-block">
                    <img src={diabetic2} alt="Housing" />
                </div>
                <div className="text-block">
                    <h1>Elaborative XGBoost</h1>

                    <p className="description">
                        The Elaborative XGBoost model couples machine-learning efficiency with domain-expert wisdom to create a diabetic-retinopathy screener that clinicians can instantly trust. Using a new TF-RCR bibliometric metric to mine PubMed, the framework narrows the input to just eight routinely ordered variables, thus keeping the feature set within the ‘7 ± 2’ cognitive limit while mirroring known risk factors. An adaptive recursive-feature-elimination loop embedded in an elaborative learning pipeline then balances interpretability and power, culminating in an XGBoost classifier. The model gives primary-care teams, especially in underserved areas, a cost-effective, evidence-aligned tool for early diabetic-retinopathy detection and timely referral.
                    </p>
                    {/* 点击后跳转到 /models/Elaborative_XGBoost 页面 */}
                    <Link to="/models/Elaborative_XGBoost" className="primary-button"><strong>PREDICT NOW</strong></Link>
                </div>
            </section>

            {/* ====== 第五块 ====== */}
            <section className="section aid-section">
                <div className="text-block">
                    <h1>Two-level Ensemble</h1>

                    <p className="description">
                        The optimized two-level ensemble learning model leverages routine laboratory test results to achieve state-of-the-art accuracy in diabetic retinopathy prediction. In the model's first level, individual base models are optimized through internal hyperparameter tuning and stacking. Their refined predictions are then intelligently combined by a second-level meta-learner to generate the final diagnosis. Designed for clinical practicality, it eliminates dependency on specialized retinal imaging equipment, enabling low-cost, early detection in resource-constrained settings. This computationally efficient approach empowers healthcare providers with a robust, non-invasive screening tool to identify high-risk patients.
                    </p>

                    {/* 点击后跳转到 /models/Two-level_Ensemble 页面 */}
                    <Link to="/models/Two-level_Ensemble" className="primary-button"><strong>PREDICT NOW</strong></Link>

                </div>
                <div className="image-block">
                    <img src={retinopathy2} alt="Financial Aid" />
                </div>
            </section>

        </div>
    );
};

export default Home;
