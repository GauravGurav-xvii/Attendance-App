
import React from 'react';
import './UserAttendancePage.css'; // Import CSS file for styling
import { Link } from 'react-router-dom';

function UserAttendanceReport() {

  const attendanceDetails = [
    { date: '2024-04-01', name: 'John Doe', signInTime: '09:00 AM', signOutTime: '06:00 PM', status: 'Present', remarks: '' },
    { date: '2024-04-02', name: 'John Doe', signInTime: '', signOutTime: '', status: 'Absent', remarks: 'Sick leave' },
    { date: '2024-04-03', name: 'John Doe', signInTime: '09:15 AM', signOutTime: '05:45 PM', status: 'Present', remarks: '' },
    { date: '2024-04-04', name: 'John Doe', signInTime: '09:30 AM', signOutTime: '06:15 PM', status: 'Present', remarks: '' },
    { date: '2024-04-05', name: 'John Doe', signInTime: '09:10 AM', signOutTime: '06:05 PM', status: 'Present', remarks: '' },
    { date: '2024-04-06', name: 'John Doe', signInTime: '09:05 AM', signOutTime: '06:30 PM', status: 'Present', remarks: '' },
    { date: '2024-04-07', name: 'John Doe', signInTime: '09:20 AM', signOutTime: '06:00 PM', status: 'Present', remarks: '' },
    { date: '2024-04-08', name: 'John Doe', signInTime: '', signOutTime: '', status: 'Absent', remarks: 'Personal leave' }
  ];
  
  

  return (
    <div className="user-attendance-report">
      <h2>User Attendance Report</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Sign In Time</th>
            <th>Sign Out Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {attendanceDetails.map((detail, index) => (
            <tr key={index}>
              <td>{detail.date}</td>
              <td>{detail.signInTime}</td>
              <td>{detail.signOutTime}</td>
              <td>{detail.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to={"/"}><button>Back To Home</button></Link>
    </div>
  );
}

export default UserAttendanceReport;
