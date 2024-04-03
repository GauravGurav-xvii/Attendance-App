import React, { useState } from "react";
import "./HomeAttendancePage.css";
import date from 'date-and-time';


function HomeAttendancePage({ onSignOut, onViewReport }) {
  const [signedIn, setSignedIn] = useState(false);
  const [checkInTime, setCheckInTime] = useState(null);

const now = new Date();
const pattern = date.compile('YYYY/MM/DD HH:mm:ss');

  

  const handleSignIn = () => {
    setCheckInTime();
    setSignedIn(true);
  };

  const handleSignOut = () => {
    setSignedIn(false);
    onSignOut();
  };

  return (
    <div className="container">
      <div className="home-attendance">
        {signedIn ? (<>
            {date.format(now, pattern)}
          <button onClick={handleSignOut}>Sign Out</button>
        </>
        ) : (
            <>
            {date.format(now, pattern)}
            <button onClick={handleSignIn}>Sign In</button>
            </>
        )}
        <button onClick={onViewReport}>View Report</button>
      </div>
    </div>
  );
}

export default HomeAttendancePage;
