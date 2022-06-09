import React from "react";
import {Col, Container, Row, Form, Button} from "react-bootstrap"
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Navbar from "../navbar/Navbar";
import re from "../../images/lo.png"
import './signin.css'

const SignIn = () =>{
  const [credentials, setCredentinals] = useState({
    username: undefined,
    password: undefined,
  })

  const navigate = useNavigate()

  const { user, loading, error, dispatch } = useContext(AuthContext);

  const handleChange = (e)=>{
      setCredentinals(prev=>({...prev, [e.target.id]: e.target.value }))
  }

  const handleClick = async (e) => {
      e.preventDefault();
      dispatch({ type: "LOGIN_START" });
      try {
        const res = await axios.post("http://localhost:8000/api/auth/login/", credentials);
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
        navigate("/")
      } catch (err) {
        dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
      }
  };

  console.log(user);
    return<div><Navbar />
    <div class="body">
       <div class="container">
  <div class="left">
    <h1>Sign In</h1>
    
    <form>
      <label for="username">Username</label>
      <input type="text" name="username" id="username" onChange={handleChange} /> 
      
      <label for="password">Password</label>
      <input type="password" name="password" id="password" onChange={handleChange} />
                
      <div class="accept">
        <input type="checkbox" id="terms" />
        <label for="terms">Remember me</label>
      </div>
          
      <Button disabled={loading} onClick={handleClick} class="button" type="submit">Sign In</Button>
      {error && <span>{error.message}</span>}
    </form>
     
  </div>
  
  <div class="right">
    <img src={re} class="ig img"></img>
  </div>
  
</div>
    </div>
    </div>
};

export default SignIn;