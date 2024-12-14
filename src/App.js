import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Feature from "./Featurex";
import Discover from "./Discover";
import Last from "./Last";
import Footerx from "./Footerx";
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./App.css";

function Home() {
  return (
    <>
      <Navbar />
      <main className="py-7 position-relative">
        <HeroSection />
        <Feature />
        <Discover />
        <Last />
      </main>
      <Footerx />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
