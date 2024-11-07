import React, { useState, useEffect } from 'react';

const QuizMaster = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState(Array(8).fill(''));
    const [timer, setTimer] = useState(60); // Timer in seconds

    const questions = [
        {
            question: "In the end, Maya decided __ leave with Raj",
            options: ["of", "to", "with", "none"]
        },
        {
            question: "What is the capital of France?",
            options: ["London", "Paris", "Berlin", "none"]
        },
        {
            question: "How many continents are there?",
            options: ["5", "6", "7", "none"]
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Earth", "Mars", "Jupiter", "none"]
        },
        {
            question: "What is the largest ocean on Earth?",
            options: ["Atlantic", "Pacific", "Indian", "none"]
        },
        {
            question: "Which gas do plants absorb from the atmosphere?",
            options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "none"]
        },
        {
            question: "What is the boiling point of water?",
            options: ["0°C", "100°C", "50°C", "none"]
        },
        {
            question: "Who wrote 'Romeo and Juliet'?",
            options: ["William Shakespeare", "Jane Austen", "Mark Twain", "none"]
        }
    ];

    useEffect(() => {
        // Timer countdown
        const countdown = setInterval(() => {
            setTimer((prev) => {
                if (prev <= 1) {
                    clearInterval(countdown);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(countdown); // Cleanup on component unmount
    }, []);

    const handleAnswerChange = (questionIndex, answer) => {
        const updatedAnswers = [...selectedAnswers];
        updatedAnswers[questionIndex] = answer;
        setSelectedAnswers(updatedAnswers);
    };

    const nextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const prevQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    return (
        <div className="quiz-container">
            <header>
                <div className="logo">
                    <h1>QuizMaster</h1>
                </div>
                <div className="timer">
                    Time Left: <span id="timer">{Math.floor(timer / 60)}:{String(timer % 60).padStart(2, '0')}</span>
                </div>
            </header>

            <div className="main">
                <div className="hero">
                    <h2>Question {currentQuestion + 1}</h2>
                    <p>{questions[currentQuestion].question}</p>
                    <div className="options">
                        {questions[currentQuestion].options.map((option, index) => (
                            <label key={index}>
                                <input
                                    type="radio"
                                    name={`answer${currentQuestion}`}
                                    value={option}
                                    checked={selectedAnswers[currentQuestion] === option}
                                    onChange={() => handleAnswerChange(currentQuestion, option)}
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                    <div className="buttons">
                        {currentQuestion > 0 && (
                            <button className="button" onClick={prevQuestion}>Previous</button>
                        )}
                        {currentQuestion < questions.length - 1 && (
                            <button className="button" onClick={nextQuestion}>Next</button>
                        )}
                    </div>
                </div>
            </div>

            <footer>
                <p>&copy; 2024 QuizMaster. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default QuizMaster;
