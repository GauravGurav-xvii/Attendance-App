import React, { useState } from "react";
import "./Login.css";
// import Navbar from "../../component/Navbar/Navbar";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
    <div className="login">
      <h1>Login Page</h1>
      <form>
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
        <div className="buttons">
          <Link to={'/homeattendance'}><button type="submit">Login</button></Link>
          <Link to={'/register'}><button type="submit">Register</button></Link>
        </div>
      </form>
    </div>
    </>
  );
};

export default Login;
