import "./Register.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Register = ({ handleRegister }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === '' || password===''|| email === ''|| phone ==='') return alert('All Fields are mandetory!');
    navigate("/");
    alert('Login to your account');
    // handleRegister(username, password);
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
        <input
          type="email"
          placeholder="Email ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone No."
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <div className="buttons">
          <Link to={"/"}>
            <button type="submit">Login</button>
          </Link>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
