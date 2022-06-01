import React from "react";
import {Col, Container, Row, Form, Button} from "react-bootstrap"
import {Link} from "react-router-dom"
import re from "../../images/re.png"
import Navbar from "../navbar/Navbar";
import './signup.css'
const SignUp = () =>{
    return<div>
      <Navbar />
    <div className="body">
      
       <div className="container">
  <div className="left">
    <h1>Sign Up</h1>
    <p>create a new account</p>
    <form>
      <label for="email">Email</label>
      <input type="email" name="name" id="email" /> 
      
      <label for="password">Password</label>
      <input type="password" name="password" id="password" />
      
      <label for="confirm">Confirm Password</label>
      <input type="password" name="confirm" id="confirm" />
      
      <div className="accept">
        <input type="checkbox" id="terms" />
        <label for="terms">I agree to the <a href="#">terms of service</a></label>
      </div>
          
      <input className="button" type="button" value="Sign Up" />
    </form>
     
  </div>
  
  <div className="right">
    <img src={re} className="ig img"></img>
  </div>
  
</div>
    </div>
    </div>
};

export default SignUp;