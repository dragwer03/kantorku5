import React from "react";

const Discover = () => {
  return (
    <section id="discover">
      <div className="container py-5">
        <div className="bg-lavender">
          <br />
          <div className="text-left">
            <h2 className="section-title">Discover Powerful Dozens of <br />Useful Features</h2>
          </div>

          <div className="row g-4">
            <div className="col-12 col-md-6 col-lg-3">
              <img src="img/line1.png" alt="Feature 1" className="img-fluid feature-image" />
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <img src="img/line2.png" alt="Feature 2" className="img-fluid feature-image" />
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <img src="img/line3.png" alt="Feature 3" className="img-fluid feature-image" />
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <img src="img/line4.png" alt="Feature 4" className="img-fluid feature-image" />
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-12 col-md-4">
              <p className="feature-desc">
                <strong>High Customizability:</strong> Tailor the dashboard to your exact needs. Customize schedules, salaries, and more for each employee.
              </p>
            </div>
            <div className="col-12 col-md-4">
              <p className="feature-desc">
                <strong>Powerful Data Analytics:</strong> Gain valuable insights and make data-driven decisions with advanced analytics tools.
              </p>
            </div>
            <div className="col-12 col-md-4">
              <p className="feature-desc">
                <strong>Interactive Graphs & Charts:</strong> Visualize complex data with beautiful, interactive graphs and charts.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="testimonials-section container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="judul">What our clients<br /> think about us?</h1>
            <p>Our users' feedback is a testament to our commitment to quality and user satisfaction. Read what they have to say about their journey with us.</p>
          </div>
          <div className="col-md-6">
            <div className="testimonial-card">
              <h5>Features Availability</h5>
              <div className="d-flex align-items-center mt-3">
                <img src="https://via.placeholder.com/50" alt="Client" className="client-image me-3" />
                <strong>Jenny Wilson</strong>
              </div>
              <p className="mt-3">Since I joined Kantorku, managing employee attendance lists has become easy. Kantorku helps my family to give the correct salary to all of our employees!</p>
              <div className="pagination-controls">
                <button className="btn btn-outline-secondary btn-sm me-2">&lt;</button>
                <span>1 / 5</span>
                <button className="btn btn-outline-secondary btn-sm ms-2">&gt;</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Discover;
