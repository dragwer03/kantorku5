import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Predefined credentials
  const validCredentials = {
    username: 'admin',
    password: 'admin'
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === validCredentials.username && password === validCredentials.password) {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  if (isLoggedIn) {
    return <Navigate to="/admin" replace />;
  }

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
            <p className="Signin-subtitle">Your Admin Dashboard</p>
          </div>

          <div className="social-buttons">
            <a href="#" className="social-button no-underline">
              <img src="img/google.png" alt="Google" className="social-icon no-underline" />
              <span className="text-[10px]"><small>Sign up with Google</small></span>
            </a>
            <a href="#" className="social-button no-underline">
              <img src="img/fb.png" alt="Facebook" className="social-icon no-underline" />
              <span className="text-[10px]"><small>Sign up with Facebook</small></span>
            </a>
          </div>

          <div className="divider">
            <span className="divider-text">or Sign in with</span>
          </div>

          {error && <p style={{ color: 'red' }}>{error}</p>}

          <form className="Signin-form" onSubmit={handleLogin}>
            <div className="form-inputs">
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="form-input"
                placeholder="Username"
                required
              />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input"
                placeholder="Password"
                required
              />
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
