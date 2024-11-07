import React, { useState } from 'react';

// Profile Component
const Profile = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  
  const handleNameChange = (e) => setName(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement profile update logic (e.g., API call)
    alert('Profile updated successfully!');
  };

  return (
    <div>
      {/* Header */}
      <header style={styles.header}>
        <div className="logo">
          <h1>QuizMaster</h1>
        </div>
        <nav>
          <ul style={styles.navList}>
            <li><a href="/">Home</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>
            <li><a href="/profile">Profile</a></li>
          </ul>
        </nav>
      </header>

      {/* Profile Container */}
      <div style={styles.profileContainer}>
        <h2>User Profile</h2>
        <form onSubmit={handleSubmit} style={styles.profileForm}>
          {/* Profile Picture */}
          <img
            src="https://via.placeholder.com/100"
            alt="Profile Picture"
            style={styles.profilePic}
          />
          
          {/* Username */}
          <label htmlFor="name">Username</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
            required
            style={styles.input}
          />
          
          {/* Change Password */}
          <label htmlFor="password">Change Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter new password"
            style={styles.input}
          />
          
          {/* Update Button */}
          <button type="submit" style={styles.button}>Update Profile</button>
        </form>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>&copy; 2024 QuizMaster. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#003366', // Dark blue
    color: 'white',
    padding: '15px 20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  navList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
  },
  profileContainer: {
    width: '100%',
    maxWidth: '700px',
    margin: '50px auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  profileForm: {
    display: 'flex',
    flexDirection: 'column',
  },
  profilePic: {
    display: 'block',
    margin: '0 auto 20px',
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid #003366',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  button: {
    padding: '10px',
    backgroundColor: '#003366',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  footer: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#003366',
    color: 'white',
    position: 'fixed',
    bottom: '0',
    width: '100%',
  },
};

export default Profile;
