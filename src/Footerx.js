import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footerx = () => {
  return (
    <footer className="footer-section">
      <div className="footer-links">
        <div>
          <h5>Company and team</h5>
          <ul className="list-unstyled">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Newsroom</a></li>
            <li><a href="#">Join Our Team</a></li>
            <li><a href="#">Support Center</a></li>
          </ul>
        </div>
        <div>
          <h5>Features</h5>
          <ul className="list-unstyled">
            <li><a href="#">Edit Employee</a></li>
            <li><a href="#">Edit Schedule</a></li>
            <li><a href="#">Edit Salary</a></li>
            <li><a href="#">Edit Bonus/Cuts</a></li>
            <li><a href="#">Make one-time event or holiday leave</a></li>
          </ul>
        </div>
        <div>
          <h5>Follow us</h5>
          <div className="social-icons">
            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
        </div>
      </div>
      
      <div className="footer-note d-flex justify-content-between align-items-center">
        <p className="mb-0">All rights reserved by Kantorku.</p>
        <p className="mb-0">Produced by Kantorku.</p>
      </div>
    </footer>
  );
};

export default Footerx;
