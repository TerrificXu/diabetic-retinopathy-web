import React from "react";
import "./Footer.css";
import officeImage from "../assets/office.jpg";
import fbIcon from "../assets/Layer 1 Facebook.png";
import xIcon from "../assets/Layer 2 X.png";
import igIcon from "../assets/Layer 3 Instagram.png";
import liIcon from "../assets/Layer 4 LinkedIn.png";

const Footer = () => {
    return (
        <footer className="main-footer" id="footer">
            {/* Back to Top 按钮 */}
            <div className="back-to-top-parent">
                <a href="#top" className="back-to-top">▲ BACK TO TOP</a>
            </div>

            <div className="footer-container">
                {/* 上半部分：左右两列 */}
                <div className="footer-top">
                    {/* 左侧：学院信息、图片、地址等 */}
                    <div className="footer-top-left">
                        <h2 className="footer-college-title">
                            SCHOOL OF INDUSTRIAL ENGINEERING AND MANAGEMENT
                        </h2>
                        <div className="footer-info-container">
                            <img
                                src={officeImage}
                                alt="CEAT building"
                                className="footer-office-img"
                            />
                            <div className="footer-address">
                                <p>
                                    <a
                                        href="https://go.okstate.edu/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Oklahoma State University
                                    </a>
                                </p>
                                <p>
                                    322 Engineering North<br />
                                    Oklahoma State University<br />
                                    Stillwater, OK 74078{" "}
                                    <a
                                        href="https://maps.app.goo.gl/PJKXL9aqKriUxVb98"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        (map)
                                    </a>
                                </p>
                                <p>
                                    <a href="tel:4057446055">(405) 744-6055</a> |{" "}
                                    <a href="mailto:tieming.liu@okstate.edu">Contact Us</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 右侧：Follow CEAT、News、Links、图标 */}
                    <div className="footer-top-right">
                        <h2 className="footer-follow-title">Follow CEAT</h2>
                        <ul className="footer-follow-links">
                            <li>
                                <a href="https://news.okstate.edu/colleges/college-of-engineering-architecture-and-technology/">
                                    News
                                </a>
                            </li>
                            <li>
                                <a href="/newsletter-signup.html">Newsletter Signup</a>
                            </li>
                            <li>
                                <a href="https://social.okstate.edu">Social Media Directory</a>
                            </li>
                        </ul>
                        <div className="footer-social-icons">
                            <a
                                href="https://www.facebook.com/OSUCEAT/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={fbIcon}
                                    alt="Facebook"
                                    className="social-icon-img"
                                />
                            </a>
                            <a
                                href="https://twitter.com/OSU_CEAT"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={xIcon}
                                    alt="X"
                                    className="social-icon-img"
                                />
                            </a>
                            <a
                                href="https://www.instagram.com/osu_ceat/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={igIcon}
                                    alt="Instagram"
                                    className="social-icon-img"
                                />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/osu-ceat-18798813a/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={liIcon}
                                    alt="LinkedIn"
                                    className="social-icon-img"
                                />
                            </a>
                        </div>
                    </div>
                </div>



                {/* 下半部分：OSU Logo + 链接 + 版权声明 */}
                <div className="footer-bottom">
                    <div className="footer-bottom-left">
                        <a href="https://go.okstate.edu/" className="footer-osu-logo">
                            <img
                                src="https://digitalassets.okstate.edu/m/5edd2b756cf31c9c/original/Logo-Web-Ready.svg"
                                alt="OSU Logo"
                            />
                        </a>
                    </div>
                    <div className="footer-bottom-right">
                        <div className="footer-links-group">
                            <div className="footer-first-line">
                                <span>
                                    © 2025 Oklahoma State University. All rights reserved. Developed by&nbsp;
                                    <a
                                        href="https://www.linkedin.com/in/yingfanxu/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="developer-link"
                                    >
                                        Yingfan Xu
                                    </a>.
                                </span>
                            </div>
                            <div className="footer-second-line">
                                <a href="https://accessibility.okstate.edu/">Accessibility Services</a>
                                <a href="https://safety.okstate.edu">Campus Safety</a>
                                <a href="https://community.okstate.edu">Access &amp; Community Impact</a>
                                <a href="https://eeo.okstate.edu/">EEO Statement</a>
                                <a href="https://secure.ethicspoint.com/domain/media/en/gui/10933/index.html">Ethics Point</a>
                                <a href="https://go.okstate.edu/tos/privacy.html">Privacy Notice</a>
                                <a href="https://go.okstate.edu/tos/">Terms of Service</a>
                                <a href="https://trademarks.okstate.edu/">Trademarks</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

