import React from 'react';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="Signin-page">
      <header className="header">
        <button className="menu-button">☰</button>
        <h1 className="logo">Kantorku</h1>
      </header>

      <main className="main-content">
        <section className="Signin-section">  
          <div className="text-center">
            <h2 className="Signin-title">Welcome to Kantorku</h2>
            <p className="Signin-subtitle">Your Admin Dasboard</p>
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
            <span className="divider-text">or Signin with</span>
          </div>

          <form className="Signin-form" action="/Signin" method="POST">
            <input type="hidden" name="_token" value="6ifcpvg7puAZCFqj5ixQBEuEExt11vA0m7eNRXDs" />
            <div className="form-inputs">
              
              <input id="username" name="username" type="text" required className="form-input" placeholder="Username" />
              <input id="password" name="password" type="password" required className="form-input" placeholder="Password" />
             
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
              Sign In
            </button>
          </form>

          <p className="login-link">
            New to Kantorku? <a href="/signup">signup</a>
          </p>
        </section>
      </main>
    </div>
  );
};

export default LoginPage;
