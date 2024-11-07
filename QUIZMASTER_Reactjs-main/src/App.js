import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'; // Adjust path as necessary
import Quiz from './Quiz'; // Adjust path as necessary
import Login from './login'; // Adjust path as necessary
import Profile from './Profile'; // Adjust path as necessary
import Register from './reg'; // Adjust path as necessary
function App() {
  return (
    <Router>
      <Routes>
        {/* Make sure Home is the first route */}
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/reg" element={<Register />} /> 
        {/* Catch-all route for undefined paths */}
      </Routes>
    </Router>
  );
}

export default App;
