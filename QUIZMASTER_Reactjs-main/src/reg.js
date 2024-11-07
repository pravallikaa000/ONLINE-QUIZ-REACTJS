import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css"; // Assuming you have a CSS file for styling

function RegistrationApp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [generatedCaptcha, setGeneratedCaptcha] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaExpired, setCaptchaExpired] = useState(false);
  const [countdown, setCountdown] = useState(120);
  const [passwordStrength, setPasswordStrength] = useState("");
  const [passwordStrengthClass, setPasswordStrengthClass] = useState("");

  useEffect(() => {
    generateCaptcha();
    startCountdown();

    return () => clearInterval(countdownInterval);
  }, []);

  const generateCaptcha = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      captcha += chars.charAt(randomIndex);
    }
    setGeneratedCaptcha(captcha);
    setCaptchaExpired(false);

    setTimeout(() => setCaptchaExpired(true), 120000); // 2 minutes
  };

  const startCountdown = () => {
    let remainingSeconds = 120;
    const countdownInterval = setInterval(() => {
      setCountdown(remainingSeconds);
      remainingSeconds -= 1;

      if (remainingSeconds < 0) {
        setCaptchaExpired(true);
        clearInterval(countdownInterval);
      }
    }, 1000);
  };

  const checkPasswordStrength = () => {
    let strength = "";

    if (
      password.length >= 5 &&
      password.length <= 15 &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /\d/.test(password) &&
      !/[;.:]/.test(password)
    ) {
      strength = "Strong";
      setPasswordStrengthClass("strong");
    } else if (password.length < 5) {
      strength = "Weak";
      setPasswordStrengthClass("weak");
    } else {
      strength = "Moderate";
      setPasswordStrengthClass("moderate");
    }
    setPasswordStrength(strength);
  };

  const validate = (e) => {
    e.preventDefault();

    if (!username || !/^[0-9]/.test(username) || username.length < 10) {
      alert("Username must start with a digit and contain at least 10 digits");
      return false;
    }

    if (!password || password.length < 5 || password.length > 15) {
      alert("Password must be between 5 to 15 characters");
      return false;
    }

    if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/\d/.test(password)) {
      alert("Password must contain uppercase, lowercase, and a number");
      return false;
    }

    if (/[;.:]/.test(password)) {
      alert("Password cannot contain the symbols ; . :");
      return false;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return false;
    }

    if (captchaInput !== generatedCaptcha) {
      alert("CAPTCHA code is incorrect");
      return false;
    }

    // Send registration data to the server
    const registrationData = {
      username,
      password,
    };

    axios
      .post("/register", registrationData)
      .then((response) => {
        alert(response.data.message);
      })
      .catch((error) => {
        alert("Registration failed: " + error.response.data.message);
      });

    return true;
  };

  return (
    <div className="app">
      {/* Header */}
      <header>
        <div className="logo">
          <h1>QuizMaster</h1>
        </div>
        <nav>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="login.html">Login</a></li>
            <li><a href="profile.html">Profile</a></li>
          </ul>
        </nav>
      </header>

      {/* Registration Form */}
      <div className="login-box">
        <h2>Registration</h2>
        <form onSubmit={validate}>
          <i className="fa fa-user avatar"></i>
          <input
            type="text"
            placeholder="Example: 211FA04001"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              checkPasswordStrength();
            }}
            required
          />
          <div className={`password-strength ${passwordStrengthClass}`}>
            {passwordStrength}
          </div>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <div className="highlighted-captcha">CAPTCHA: {generatedCaptcha}</div>
          <input
            type="text"
            placeholder="Enter CAPTCHA"
            value={captchaInput}
            onChange={(e) => setCaptchaInput(e.target.value)}
            required
          />
          <div className="countdown">
            <i className="fa fa-clock-o"></i>
            {!captchaExpired ? (
              <span>{countdown} seconds remaining</span>
            ) : (
              <span>CAPTCHA expired! Refresh to regenerate.</span>
            )}
          </div>
          <button type="submit">Register</button>
          <button onClick={() => window.location.href = 'login.html'}>Login</button>
        </form>
      </div>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 QuizMaster. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default RegistrationApp;
