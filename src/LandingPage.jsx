import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <div className="logo">Kantorku</div>
        <nav className="nav">
          <a href="#features">Features</a>
          <a href="#solutions">Solutions</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
          <button className="login-button">Login</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">
          Most powerful & friendly <span>Attendance System</span>
        </h1>
        <p className="hero-subtitle">
          Streamline attendance management with ease.
        </p>
        <div className="hero-actions">
          <button className="primary-button">Sign Up</button>
          <button className="secondary-button">Learn More</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="feature">
          <h3>Scalable</h3>
          <p>Perfect for businesses of any size.</p>
        </div>
        <div className="feature">
          <h3>Digital System</h3>
          <p>Seamless digital attendance solutions.</p>
        </div>
        <div className="feature">
          <h3>Compensation Friendly</h3>
          <p>Automatically calculate employee benefits.</p>
        </div>
        <div className="feature">
          <h3>Ready to Use</h3>
          <p>Instantly set up for your organization.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Kantorku. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
