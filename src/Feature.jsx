import React from "react";

const Feature = () => {
  return (
    <section id="Features-Section">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h5 className="text-secondary">Introducing Kantorku RFID Attendance System</h5>
          <p className="text-secondary">Where attendance logging becomes seamless</p>
        </div>

        <div className="row g-4">
          <div className="col-md-6 col-lg-4">
            <div className="feature-box bg-peach">
              <img src="./img/tas.png" alt="Scalable Icon" className="feature-icon judul2" ></img>
              <h5>Scalable</h5>
              <p>No matter how much your employee, We got you!</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="feature-box bg-lavender">
              <h2 className="judul">Digital System</h2>
              <p>Integrating Radio Frequency Identification Card to online database, Displaying useful Dashboard to company managers</p>
              <img src="./img/laptop.png" alt="Dashboard" className="img-fluid mt-3" ></img>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="feature-box bg-mint">
              <img src="./img/talk.png" alt="Compensation Friendly Icon" className="feature-icon judul2" ></img>
              <h5>Compensation Friendly</h5>
              <p>Automatic yet editable by account holder (company manager)</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4" id="top">
            <div className="feature-box bg-light-blue">
              <h5 className="judul">Ready to Use System</h5>
              <p>Instantly deployable attendance system for your company.</p>
              <img src="./img/laptop-separo.png" alt="System Video" className="img-fluid mt-3" ></img>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="bg-white">
            </div>
          </div>

          <div className="col-md-6 col-lg-4" id="top">
            <div className="feature-box bg-peach judul2">
              <img src="./img/bookmark.png" alt="CIA Icon" className="feature-icon" ></img>
              <h5>CIA</h5>
              <p>Ensures confidentiality, integrity and availability of data</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
