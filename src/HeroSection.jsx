import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
const HeroSection = () => {
  return (
    <section className="py-1 position-relative" id="landing-section">
      <div id="landing-background-image" className="position-absolute top-0 start-0 w-100 h-100"></div>
      <div className="container text-center position-relative">
        <h2 className="display-6 fw-bold text-dark mb-3">Most powerful & friendly</h2>
        <h2 className="display-6 fw-bold text-primary mb-4 juduaatas">Attendance System</h2>
        <p className="lead text-muted mb-5 juduaatas">52.589.+ Startup & Companies Using our Software</p>
        <div className="d-flex justify-content-center gap-3">
            <a href="" className="btn btn-primary btn-lg">Sign Up</a>
            <a href="" className="btn btn-lg btn-outline-secondary d-flex align-items-center">
              <FontAwesomeIcon icon={faPlay} className="me-2" />
              See How it works
            </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
