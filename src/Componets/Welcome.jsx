import React from 'react';
import { Link } from 'react-router-dom';
// import './WelcomePage.css'; // Import custom CSS for styling

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h1>Welcome to Our E-Commerce Store!</h1>
        <p>Explore the best deals on electronics and more.</p>
        <div className="welcome-buttons">
          {/* <Link to="/" className="btn btn-primary">Shop Now</Link> */}
          <Link to="/home" className="btn btn-primary">Shop Now</Link>

        </div>
      </div>
    </div>
  );
};

export default Welcome;

