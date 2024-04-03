import "./Register.css";
import {Link} from 'react-router-dom';
import React, { useState } from "react";

const Register = ({ handleRegister }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate and register new user
    handleRegister(username, password);
  };

  return (
    <div className="register">
      <h2>Register Page</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="email" placeholder="Email ID" />
        <input type="text" placeholder="Phone No." />
        <div className="buttons">
          <Link to={"/"}><button type="submit">Login</button></Link>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
