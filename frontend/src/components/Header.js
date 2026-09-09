import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.css";
import buildingImage from "../assets/building.jpg";

const Header = () => {
    const location = useLocation();
    // 如果当前路径以 "/models" 开头，就认为下拉菜单中的链接有被激活
    const isModelsActive = location.pathname.startsWith("/models");

    return (
        <header className="site-header">
            {/* 顶部快速链接区域 */}
            <div className="top-bar">
                <div className="top-bar-left">
                    <a href="https://go.okstate.edu/" className="logo">
                        <img
                            src="https://digitalassets.okstate.edu/m/5edd2b756cf31c9c/original/Logo-Web-Ready.svg"
                            alt="OSU Logo"
                        />
                    </a>
                    <a href="https://ceat.okstate.edu/iem/" className="site-title">
            <span className="line1">
              College of Engineering, Architecture and Technology
            </span>
                        <br />
                        <span className="line2">
              Industrial Engineering & Management
            </span>
                    </a>
                </div>
                <div className="top-bar-right">
                    <ul className="quick-links">
                        <li>
                            <a href="https://ceat.okstate.edu/iem/people/current-phd-students.html">
                                Current Students
                            </a>
                        </li>
                        <li>
                            <a href="https://ceat.okstate.edu/iem/people/faculty-staff.html">
                                Faculty/Staff
                            </a>
                        </li>
                        <li>
                            <a href="https://my.okstate.edu">myOKSTATE</a>
                        </li>
                        <li>
                            <a href="https://directory.okstate.edu">Directory</a>
                        </li>
                    </ul>
                    <a href="https://go.okstate.edu/apply/" className="apply-button">
                        APPLY
                    </a>
                </div>
            </div>

            {/* 房屋图片背景 */}
            <div
                className="hero-banner"
                style={{ backgroundImage: `url(${buildingImage})` }}
            >
                <div className="overlay"></div>
                <div className="header-banner">
                    <span className="banner-line1">Prediction:</span>
                    <span className="banner-line2">Diabetic Retinopathy</span>
                </div>
            </div>

            {/* 主导航区域 */}
            <nav className="main-nav">
                <div className="nav-text-container">
                    <ul>
                        <li>
                            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                                About the Program
                            </NavLink>
                        </li>
                        <li className="dropdown">
                            <a
                                href="#"
                                onClick={e => e.preventDefault()}
                                className={isModelsActive ? "active" : ""}
                            >
                                Model Selection ▼
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <NavLink to="/models/Elaborative_XGBoost" className={({ isActive }) => (isActive ? "active" : "")}>
                                        Elaborative XGBoost
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/models/Two-level_Ensemble" className={({ isActive }) => (isActive ? "active" : "")}>
                                        Two-level Ensemble
                                    </NavLink>
                                </li>

                            </ul>
                        </li>
                        <li>
                            <NavLink to="/members" className={({ isActive }) => (isActive ? "active" : "")}>
                                Group Members
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
