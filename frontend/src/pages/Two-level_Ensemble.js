import React, { useState } from "react";
import PredictionForm from "../components/PredictionForm";
import "./Two-level_Ensemble.css";
import googleDriveLogo from "../assets/Google Drive.png";

const TwoLevelEnsemble = () => {
    const [selectedModel] = useState("Two-level Ensemble");

    return (
        <div className="two-level-ensemble-page">
            <div className="layout-container">
                {/* 左侧 */}
                <div className="orientation-left">
                    <h1 className="left-title">{selectedModel}</h1>
                    <p className="subtitle">
                        The model employs a two-level ensemble learning framework with internal stacking optimization and meta-learning to achieve high predictive accuracy for diabetic retinopathy screening using routine laboratory results.
                    </p>
                    <PredictionForm model={selectedModel} />
                </div>

                {/* 右侧 */}
                <div className="orientation-right">
                    <a
                        className="sidebar-section clickable-section"
                        href="https://drive.google.com/file/d/1mczp2XbZ9AR1iCrZgnpREWaxDrHUcec5/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="arrow-icon arrow-white"></div>
                        <div className="content-wrapper">
                            <img src={googleDriveLogo} alt="Google Drive" className="drive-logo" />
                            <div className="waiver-text">ACCESS FULL ARTICLE</div>
                            <div className="doi-text">https://drive.google.com</div>
                        </div>
                    </a>

                    <div className="sidebar-section contact-section">
                        <div className="orange-bar"></div>
                        <div className="content-wrapper">
                            <h2>Contact the Researcher</h2>
                            <p>Mahyar Mahmoudi</p>
                            <p>
                                143 ATRC<br />
                                Stillwater, OK 74078
                            </p>
                            <p>
                                <a className="phone-email" href="tel:4084664764">(408) 466-4764</a><br />
                                <a className="phone-email" href="mailto:mahyar.mahmoudi@okstate.edu">
                                    mahyar.mahmoudi@okstate.edu
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="sidebar-section to-be-edited-section">
                        <div className="orange-bar"></div>
                        <div className="content-wrapper">
                            <h2 className="supported-by">Supported by</h2>
                            <h2 className="sponsor">
                                National Institutes of Health,<br/>
                                Oklahoma State University,<br/>
                                OptoAI LLC.
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TwoLevelEnsemble;
