import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";



const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();

  const handleSubmit = () => {    
    if (username === 'gaurav' && password === '1234'){
      localStorage.setItem('logged In', true);
      navigate('/homeattendance'); 
    } 
    // else { 
    //   alert('Invalid Username or Password!  Please try again.');
    // }
  };

  function handleclick(){
    if(username === '' && password === ''){
      alert('Enter username and paswword!!');
      }else if (username ===''){
        alert(`Username can't be empty `);
      } else if (password ==="") {
        alert(`Password can't be empty `);
      }else if(username === 'admin' && password==='admin'){
        navigate('/admin');
      }};


  return (
    <>
    <div className="login">
      <h1>Login Page</h1>
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
        <div className="buttons">
          <button onClick={handleclick}>Login</button> 
          <Link to={'/register'}><button>Register</button></Link>
        </div>
      </form>
    </div>
    </>
  );
};

export default Login;
