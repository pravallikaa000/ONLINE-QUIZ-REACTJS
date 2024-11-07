import React, { useState, useEffect } from 'react';
import './login.css'; // If you prefer to use an external CSS file

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [backgroundImages] = useState(['for.avif', 'for2.avif', 'for3.avif']);
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackgroundIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [backgroundImages]);

  const updateBackground = () => {
    const imageUrl = backgroundImages[currentBackgroundIndex];
    document.body.style.background = `url(${imageUrl}) center/cover no-repeat`;
  };

  useEffect(() => {
    updateBackground();
  }, [currentBackgroundIndex]);

  const validate = () => {
    if (username === '') {
      setErrorMessage('Please enter your name');
      return false;
    }

    if (!/^[0-9]/.test(username)) {
      setErrorMessage('Username must start with a digit');
      return false;
    }

    if (username.length < 10) {
      setErrorMessage('Username must contain at least 10 digits');
      return false;
    }

    if (password === '') {
      setErrorMessage('Please enter your password');
      return false;
    }

    if (password.length < 5 || password.length > 15) {
      setErrorMessage('Password must be 5 to 15 characters only');
      return false;
    }

    if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/\d/.test(password)) {
      setErrorMessage('Password must contain at least one uppercase letter, one lowercase letter, and one digit');
      return false;
    }

    if (/[;.:]/.test(password)) {
      setErrorMessage('Password cannot contain the symbols ; . :');
      return false;
    }

    return true;
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if (validate()) {
      // Make your API call here, for now we're just alerting the success message
      alert('Login successful!');
      // Redirect to quiz page
      window.location.href = 'quiz.html';
    }
  };

  return (
    <div>
      <header>
        <div className="logo">
          <h1>QuizMaster</h1>
        </div>
        <nav>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="/register">Register</a></li>
            <li><a href="/profile">Profile</a></li>
          </ul>
        </nav>
      </header>

      <div className="login-container show-animation">
        <h2>QuizMaster Login</h2>
        <i className="fa fa-graduation-cap graduation-cap"></i>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="username"
            name="username"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            name="password"
            placeholder="Password"
            required
          />
          <div className="error-message">{errorMessage}</div>
          <button type="submit" id="button">Login</button>
          <br /> Don't Have An Account?
          <a href="/register">Register Now</a>
        </form>
      </div>

      <footer>
        <p>&copy; 2024 QuizMaster Portal. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Login;
