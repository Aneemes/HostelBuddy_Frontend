import React from "react";
import {Col, Container, Row, Form, Button} from "react-bootstrap"
import { Routes, Route, Link } from "react-router-dom";
import re from "../../images/lo.png"
import './signin.css'

const SignIn = () =>{
    return<div>
        <Container className ="mt-5">
            <Row>
                <Col lg={4} md = {6} sm ={12} className=" mt-5">
                   
                    <Form>
                    
                    <h1 className="shadow-sm text  mt-5  p-5 text-center rounded">User Login</h1>
                     {/* <img className ="icon-img center" src = {pic} alt="icon"/> */}
                        
                  

                        <Form.Group controlId="formBasicEmail" className="mt-3" >
                            <Form.Label>Email:</Form.Label> 
                            <Form.Control type = "email" placeholder="Enter your email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword" className="mt-3">
                            <Form.Label>Password:</Form.Label> 
                            <Form.Control type = "password" placeholder="Enter your Password" />
                        </Form.Group>

                        

                        <Button variant=" btn-block mt-3 center button" type ="submit">Login</Button>

                        <div>
                            <p>Dont have an account ? 
                            <Link to ="/signup"> Create an Account</Link>
                            </p>  
                            <a href="#" className=""> <small className="reset ml-2"> Forgot Password?</small></a>
                            
                        </div>
                        
                    </Form>
                </Col >
                <Col lg = {8} md = {6} sm = {12}>
                    <img className="w-100" src ={re} alt=""/>
                </Col>
            </Row>
       
                
        </Container>
    </div>
};

export default SignIn;