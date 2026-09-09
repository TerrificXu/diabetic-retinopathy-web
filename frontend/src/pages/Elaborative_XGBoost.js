import React, { useState } from "react";
import PredictionForm from "../components/PredictionForm";
import "./Elaborative_XGBoost.css";
import ssrnLogo from "../assets/SSRN.png";

const ElaborativeXGBoost = () => {
    const [selectedModel] = useState("Elaborative XGBoost");

    return (
        <div className="elaborative-xgboost-page">
            <div className="layout-container">
                {/* 左侧部分 */}
                <div className="orientation-left">
                    <h1 className="left-title">{selectedModel}</h1>
                    <p className="subtitle">
                        The model employs a novel elaborative learning framework that integrates PubMed-derived medical domain knowledge via a TF-RCR metric and incorporates human cognitive limitations to select eight clinically interpretable features, achieving high-accuracy diabetic retinopathy screening using routine lab results.
                    </p>
                    <PredictionForm model={selectedModel} />
                </div>

                {/* 右侧部分 */}
                <div className="orientation-right">
                    {/* 访问论文区块 */}
                    <a
                        className="sidebar-section clickable-section"
                        href="https://dx.doi.org/10.2139/ssrn.4950302"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="arrow-icon arrow-white"></div>
                        <div className="content-wrapper">
                            <img src={ssrnLogo} alt="SSRN" className="ssrn-logo" />
                            <div className="waiver-text">ACCESS FULL ARTICLE</div>
                            <div className="doi-text">https://dx.doi.org/10.2139/ssrn.4950302</div>
                        </div>
                    </a>

                    {/* 联系作者区块 */}
                    <div className="sidebar-section contact-section">
                        <div className="orange-bar"></div>
                        <div className="content-wrapper">
                            <h2>Contact the Researcher</h2>
                            <p>Enrico Laoh</p>
                            <p>
                                143 ATRC<br />
                                Stillwater, OK 74078
                            </p>
                            <p>
                                <a className="phone-email" href="tel:9097013862">(909) 701-3862</a>
                                <br />
                                <a className="phone-email" href="mailto:elaoh@okstate.edu">
                                    elaoh@okstate.edu
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* 支持单位 */}
                    <div className="sidebar-section to-be-edited-section">
                        <div className="orange-bar"></div>
                        <div className="content-wrapper">
                            <h2 className="supported-by">Supported by</h2>
                            <h2 className="sponsor">
                                National Institutes of Health,<br />
                                Oklahoma State University.
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ElaborativeXGBoost;
