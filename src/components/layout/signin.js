import React from "react";
import {Col, Container, Row, Form, Button} from "react-bootstrap"
import {Link} from "react-router-dom"
import re from "../../images/re.png"
import './signin.css'
const SignIn = () =>{
    return<div className="body">
       <div className="container">
  <div className="left">
    <h1>Sign In</h1>
    
    <form>
      <label for="email">Email</label>
      <input type="email" name="name" id="email" /> 
      
      <label for="password">Password</label>
      <input type="password" name="password" id="password" />
                
      <div className="accept">
        <input type="checkbox" id="terms" />
        <label for="terms">Remember me</label>
      </div>
          
      <input className="button" type="button" value="Sign In" />
    </form>
     
  </div>
  
  <div className="right">
    <img src={re} className="ig img"></img>
  </div>
  
</div>
    </div>
};

export default SignIn;