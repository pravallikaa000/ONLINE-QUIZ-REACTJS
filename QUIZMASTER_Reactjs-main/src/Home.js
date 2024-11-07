import React from "react";
import "./Home.css";

const Home = () => {
  const startQuiz = () => {
    const loggedIn = localStorage.getItem("loggedIn");
    window.location.href = loggedIn ? "/quiz" : "/login";
  };

  const profileOpen = () => {
    const loggedIn = localStorage.getItem("loggedIn");
    window.location.href = loggedIn ? "/profile" : "/login";
  };

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="logo">
          <h1>QuizMaster</h1>
        </div>
        <nav>
          <ul>
            <li><a onClick={() => (window.location.href = "/login")}>Sign In</a></li>
            <li><a onClick={() => (window.location.href = "/register")}>Sign Up</a></li>
            <li><a onClick={profileOpen}>Profile</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h2>Welcome to QuizMaster - Test Your Knowledge!</h2>
        <p>Challenge yourself with fun and exciting quizzes on various topics.</p>
        <p>Join our community and improve your skills.</p>
        <p>Earn rewards and see how you rank against others!</p>
        <button className="start-btn" onClick={startQuiz}>Get Started</button>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose QuizMaster?</h2>
        <div className="feature-item">
          <h3>Wide Range of Topics</h3>
          <p>Explore quizzes on a variety of subjects like Science, History, Technology, and more.</p>
        </div>
        <div className="feature-item">
          <h3>Track Your Progress</h3>
          <p>Create your profile, take quizzes, and track your scores.</p>
        </div>
        <div className="feature-item">
          <h3>Compete with Friends</h3>
          <p>Join leaderboards and compete to see who ranks highest.</p>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 QuizMaster. All Rights Reserved.</p>
        <ul className="footer-links">
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/terms">Terms of Use</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </footer>
    </div>
  );
};

export default Home;
