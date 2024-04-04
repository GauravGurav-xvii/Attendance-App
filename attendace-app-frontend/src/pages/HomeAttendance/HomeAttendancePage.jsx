// HomeAttendancePage.jsx
import React, { useState, useEffect } from 'react';
import './HomeAttendancePage.css'; // Import CSS file for styling
import {Link } from "react-router-dom";

const HomeAttendancePage = ({ handleSignIn, handleSignOut, hasSignedIn, viewReport }) => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []); 

  
    const handleSignInOut = () => {
      setIsLoggedIn(prevState => !prevState);
    };

  return (
    <div className="home-attendance-container">
      <h2>Home Attendance Page</h2>
      <div className="current-date-time">
        <div className="date">{currentDateTime.toLocaleDateString()}</div>
        <div className="time">{currentDateTime.toLocaleTimeString()}</div>
      </div>
      <button className="attendance-button" onClick={handleSignInOut}>
        {isLoggedIn ? 'Sign Out' : 'Sign In'}
      </button>
      <Link to={"/viewreport"}><button className="report-button" onClick={viewReport}>View Report</button></Link>
    </div>
  );
};
export default HomeAttendancePage;


