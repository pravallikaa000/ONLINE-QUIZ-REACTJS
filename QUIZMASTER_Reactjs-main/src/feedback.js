import React from 'react';
import './feedback.css';  // Include your styles here

function App() {
    // Handle the profile open function
    const Profileopen = () => {
        alert("Profile button clicked!"); // Replace with actual functionality
    };

    // Handle quiz start functionality
    const startQuiz = () => {
        alert("Quiz Started!");
    };

    return (
        <div>
            {/* Header */}
            <header>
                <div className="logo">
                    <h1>QuizMaster</h1>
                </div>
                <nav>
                    <ul>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/register">Register</a></li>
                        <li><a href="javascript:void(0);" onClick={Profileopen}>Profile</a></li>
                    </ul>
                </nav>
            </header>

            {/* Main Content (Homepage) */}
            <main>
                <section className="hero">
                    {/* Scrolling Text */}
                    <div className="scrolling-text">
                        <p>Welcome to the Ultimate Online Quiz Platform!</p>
                    </div>
            
                    <p>Test your knowledge, challenge friends, and track your scores!</p>
                    
                    {/* Guide Section */}
                    <div className="guide">
                        <h3>How to Take the Quiz</h3>
                        <ol>
                            <li><span className="step-icon">🔐</span> Login or Register if you haven't done so.</li>
                            <li><span className="step-icon">📚</span> Select the quiz category you want to participate in.</li>
                            <li><span className="step-icon">📝</span> Read the questions carefully and choose the correct answer.</li>
                            <li><span className="step-icon">✔</span> Submit your answers to see your score!</li>
                            <li><span className="step-icon">🏅</span> Check your scores and challenge yourself to improve!</li>
                        </ol>
                    </div>
            
                    {/* Start Quiz Button */}
                    <button className="start-btn" onClick={startQuiz}>Start Quiz</button>
                </section>
            </main>

            {/* Footer */}
            <footer>
                <p>&copy; 2024 QuizMaster. All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default App;