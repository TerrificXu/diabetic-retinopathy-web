import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Elaborative_XGBoost from "./pages/Elaborative_XGBoost";
import Two_level_Ensemble from "./pages/Two-level_Ensemble";
import Models from "./pages/Models";
import Contact from "./pages/Contact";
import Members from "./pages/Members";

function App() {
    return (
        <Router>
            {/* 每次路由 change 都会 scrollTo(0,0) */}
            <ScrollToTop />

            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/models/Elaborative_XGBoost" element={<Elaborative_XGBoost />} />
                <Route path="/models/Two-level_Ensemble" element={<Two_level_Ensemble />} />
                <Route path="/models" element={<Models />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/members" element={<Members />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
