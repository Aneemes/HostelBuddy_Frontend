import React from "react";
import {Col, Container, Row, Form, Button} from "react-bootstrap";
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import re from "../../images/re.png";
import Navbar from "../navbar/Navbar";
import './signup.css';

const SignUp = () =>{
  const [credentials, setCredentinals] = useState({
    username: undefined,
    email:undefined,
    password: undefined,
  })

  const navigate = useNavigate()

  const { user, loading, error, dispatch } = useContext(AuthContext);

  const handleChange = (e)=>{
      setCredentinals(prev=>({...prev, [e.target.id]: e.target.value }))
  }

  const handleClick = async (e) => {
      e.preventDefault();
      dispatch({ type: "REGISTER_START" });
      try {
        const res = await axios.post("http://localhost:8000/api/auth/register/", credentials);
        dispatch({ type: "REGISTER_SUCCESS", payload: res.data.details });
        navigate("/login")
      } catch (err) {
        dispatch({ type: "REGISTER_FAILURE", payload: err.response.data });
      }
  };

  console.log(user);

    return<div>
      <Navbar />
    <div class="body">
      
       <div class="container">
  <div class="left">
    <h1>Sign Up</h1>
    <p>create a new account</p>
    <form>
    <label for="username">Username</label>
      <input type="username" name="username" id="username" onChange={handleChange}/> 

      <label for="email">Email</label>
      <input type="email" name="name" id="email" onChange={handleChange}/> 
      
      <label for="password">Password</label>
      <input type="password" name="password" id="password" onChange={handleChange}/>
      
      <div class="accept">
        <input type="checkbox" id="terms" />
        <label for="terms">I agree to the <a href="#">terms of service</a></label>
      </div>
          
      <Button disabled={loading} onClick={handleClick} class="button button-signup" type="submit">Register</Button>
      <span class="alert">{error && <span>{error.message}</span>}</span>
    </form>
     
  </div>
  
  <div class="right">
    <img src={re} class="ig img"></img>
  </div>
  
</div>
    </div>
    </div>
};

export default SignUp;