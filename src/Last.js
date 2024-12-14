import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "bootstrap/dist/js/bootstrap.min.js";
import React from "react";

const Last = () => {
  return (
    <>
      <section className="features-section container mt-5">
        <h2 className="text-center mb-4">Enjoy unparalleled features & exceptional flexibility.</h2>
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3 feature-grid">
          <div className="col">
            <div className="feature-card">Change Schedule</div>
          </div>
          <div className="col">
            <div className="feature-card">Change Employee Data</div>
          </div>
          <div className="col">
            <div className="feature-card">Scalable Employee</div>
          </div>
          <div className="col">
            <div className="feature-card">Performance Tuning</div>
          </div>
          <div className="col">
            <div className="feature-card2">Choose how you give salary</div>
          </div>
          <div className="col">
            <div className="feature-card2">Reduce Salary when late</div>
          </div>
          <div className="col">
            <div className="feature-card2">Fully Responsive</div>
          </div>
          <div className="col">
            <div className="feature-card2">Trending technology</div>
          </div>
          <div className="col">
            <div className="feature-card">Easy to Customize</div>
          </div>
          <div className="col">
            <div className="feature-card">Customize extra hour bonuses</div>
          </div>
          <div className="col">
            <div className="feature-card">Easy to read Table and Graphics</div>
          </div>
          <div className="col">
            <div className="feature-card">Regular Updates</div>
          </div>
        </div>
      </section>

      <section className="pricing-section container text-center">
        <h2>111,476+ Startups & many large companies as well</h2>
        <div className="row mt-4">
          <div className="col-md-3">
            <div className="pricing-card">
              <h4>Beginner pack</h4>
              <p>Use for single month subscription</p>
              <div className="price">Rp. 50k <small>/month</small></div>
              <ul className="feature-list">
                <li><FontAwesomeIcon icon={faCheck} /> 7 RFID cards</li>
                <li><FontAwesomeIcon icon={faCheck} /> Kantorku web system</li>
                <li><FontAwesomeIcon icon={faX} /> RFID Machine (Add-ons)</li>
              </ul>
              <p>Good For Small Company</p>
              <button className="btn btn-primary">Purchase Now</button>
            </div>
          </div>
          <div className="col-md-3">
            <div className="pricing-card border-primary">
              <h4>Medium pack <small><span className="badge bg-primary">Popular</span></small></h4>
              <p>Use for single month subscription with an RFID machine</p>
              <div className="price">Rp. 300k <small>/month</small></div>
              <ul className="feature-list">
                <li><FontAwesomeIcon icon={faCheck} /> 15 RFID cards</li>
                <li><FontAwesomeIcon icon={faCheck} /> Kantorku web system</li>
                <li><FontAwesomeIcon icon={faCheck} /> 1 RFID Machine</li>
              </ul>
              <p>Great for developing Company</p>
              <button className="btn btn-primary">Purchase Now</button>
            </div>
          </div>
          <div className="col-md-3">
            <div className="pricing-card">
              <h4>Super pack</h4>
              <p>Use for single month subscription with super deal</p>
              <div className="price">Rp. 500k <small>/month</small></div>
              <ul className="feature-list">
                <li><FontAwesomeIcon icon={faCheck} /> 50 RFID cards</li>
                <li><FontAwesomeIcon icon={faCheck} /> Kantorku web system</li>
                <li><FontAwesomeIcon icon={faCheck} /> 2 RFID Machines</li>
              </ul>
              <p>Super deal for medium-range Company</p>
              <button className="btn btn-primary">Purchase Now</button>
            </div>
          </div>
          <div className="col-md-3">
            <div className="pricing-card">
              <h4>Custom pack</h4>
              <p>Customize your purchase with this pack!</p>
              <div className="price">Rp. 10k <small>/month (from)</small></div>
              <ul className="feature-list">
                <li><FontAwesomeIcon icon={faCheck} /> Choose RFID card quantity</li>
                <li><FontAwesomeIcon icon={faCheck} /> Custom name web system</li>
                <li><FontAwesomeIcon icon={faCheck} /> Choose RFID machine quantity</li>
              </ul>
              <p>Customizable add-ons to scale</p>
              <button className="btn btn-primary">Purchase Now</button>
            </div>
          </div>
        </div>
        <div className="payment-logos">
          <img src="img/payment.png" width="80%" alt="Payment Options" />
        </div>
        <small className="text-muted">Secured payment with PayPal & Razorpay</small>
      </section>

      <section className="faq-section container">
        <h3 className="text-center">Frequently Asked Questions</h3>
        <div className="accordion mt-4" id="faqAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="faqOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                What is included with my purchase?
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                Each package includes access to the Kantorku web system and other features as described above.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="faqTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                Are there any recurring fees?
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                Yes, the pricing is based on a monthly subscription model.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="faqThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                Can I use the template on multiple businesses?
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                Templates are licensed for single business use only.
              </div>
            </div>
          </div>
        </div>
      </section>

  
      <section className="hero-section container my-5" id="memberlogin">
        <h1>Manage your employee <br />attendance more efficiently</h1>
        <br />
        <div className="d-flex justify-content-left">
          <a href="#" className="btn btn-primary">Member Login</a>
          <a href="#" className="btn btn-outline-primary">Become a Member</a>
        </div>
      </section>
    </>
  );
};

export default Last;