import React, { useState } from "react";
import "./HomeAttendancePage.css";

function HomeAttendancePage({ onSignOut, onViewReport }) {
  const [signedIn, setSignedIn] = useState(false);
  const [checkInTime, setCheckInTime] = useState(null);

  const handleSignIn = () => {
    setCheckInTime(now);
    setSignedIn(true);
  };

  const handleSignOut = () => {
    setSignedIn(false);
    onSignOut();
  };

  return (
    <div className="container">
      <div className="home-attendance">
        {signedIn ? (<div>
          <button onClick={handleSignOut}>Sign Out</button>
          <p>Check-in time: {checkInTime.toLocaleTimeString()}</p>
        </div>
        ) : (
          <button onClick={handleSignIn}>Sign In</button>
        )}
        <button onClick={onViewReport}>View Report</button>
      </div>
    </div>
  );
}

export default HomeAttendancePage;
