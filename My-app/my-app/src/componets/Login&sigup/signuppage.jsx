import React, { useState } from 'react';
import './Signup.css';

function Signup() {
  const [email, setEmail] = useState('');
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your own logic to handle the signup form submission
  };

  return (
    <div className="signup-page">
      <div className="signup-form-container">
        <div className="instagram-logo">
          <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="Instagram Logo" />
        </div>
        <p>Sign up to see  photos and videos from your friends!

        </p>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="text" placeholder="Full name" value={fullname} onChange={(e) => setFullname(e.target.value)} />
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">Sign up</button>
        </form> 
        <div className="login-container">
        <p>Have an account? <a href="#">Log in</a></p>
      </div>
        <div className="terms">
          By signing up, you agree to our <a href="#">Terms</a>, <a href="#">Data Policy</a>, and <a href="#">Cookies Policy</a>.
        </div>
      </div>
     
    </div>
  );
}

export default Signup;
