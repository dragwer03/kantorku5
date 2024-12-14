import React from 'react';
import './SignUpPage.css';

const SignUpPage = () => {
  return (
    <div className="signup-page">
      <header className="header">
        <button className="menu-button">☰</button>
        <h1 className="logo">Kantorku</h1>
      </header>

      <main className="main-content">
        <section className="signup-section">  
             <div className="text-center">
              <h2 className="signup-title">Welcome to Kantorku</h2>
              <p className="signup-subtitle">Create an account to get started</p>
            </div>
            <div className="social-buttons">
              <a href="#" className="social-button  no-underline">
                <img src="img/google.png" alt="Google" className="social-icon  no-underline" />
                <span className="text-[10px]"> <small>Sign up with Google</small></span>
              </a>
              <a href="#" className="social-button  no-underline">
                <img src="img/fb.png" alt="Facebook" className="social-icon  no-underline" />
                <span className="text-[10px]"><small>Sign up with Facebook</small></span>
              </a>
            </div>

            <div className="divider">
              <span className="divider-text">or signup with</span>
            </div>

            <form className="signup-form" action="/signup" method="POST">
              <input type="hidden" name="_token" value="6ifcpvg7puAZCFqj5ixQBEuEExt11vA0m7eNRXDs" />
              <div className="form-inputs">
                <input id="email" name="email" type="email" required className="form-input" placeholder="Email Address" />
                <input id="username" name="username" type="text" required className="form-input" placeholder="Username" />
                <input id="password" name="password" type="password" required className="form-input" placeholder="Password" />
                <input id="password_confirmation" name="password_confirmation" type="password" required className="form-input" placeholder="Confirm Password" />
              </div>

              <div className="form-options">
                <div className="remember-me">
                  <input id="remember" name="remember" type="checkbox" className="checkbox" />
                  <label htmlFor="remember" className="checkbox-label">
                    Remember this device
                  </label>
                </div>
                <a href="#" className="forgot-password">Forgot your password?</a>
              </div>

              <button type="submit" className="submit-button">
                Sign Up
              </button>
            </form>

            <p className="login-link">
              Already have an account? <a href="/login">Log In</a>
            </p>
        
        </section>
      </main>
    </div>
  );
};

export default SignUpPage;
