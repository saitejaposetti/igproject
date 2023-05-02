import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your own logic to handle the login form submission
  };

  return (
    <div className="login-page">
      <div className="login-form-container">
        <div className="instagram-logo">
          <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="Instagram Logo" />
        </div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="username or email" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">Log In</button>
        </form>
        <div className="signup-container">
        <p>Don't have an account? <a href="#">Sign up</a></p>
      </div>
        <div className="forgot-password">
          <a href="#">Forgot password?</a>
        </div>
      </div>
      
    </div>
  );
}

export default Login;
