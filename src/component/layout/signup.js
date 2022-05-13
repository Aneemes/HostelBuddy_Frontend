import React from "react";
import {Col, Container, Row, Form, Button} from "react-bootstrap"
import {Link} from "react-router-dom"
import re from "../../images/re.png"
import './signup.css'
const SignUp = () =>{
    return<div>
        <Container className ="mt-5">
            <Row>
                <Col lg={4} md = {6} sm ={12} className="  ">
                    {/* <img className ="icon-img center" src = {pic} alt="icon"/> */}
                    <Form>
                    <h1 className="shadow-sm text  mt-5 p-3 text-center rounded">User Register</h1>
                        
                    <Form.Group controlId="formBasicEmail" >
                            <Form.Label>Full Name:</Form.Label>                       
                            <Form.Control type = "text" placeholder="Enter your Fullname" />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail" className="mt-3" >
                            <Form.Label>Email:</Form.Label> 
                            <Form.Control type = "email" placeholder="Enter your email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword" className="mt-3">
                            <Form.Label>Password:</Form.Label> 
                            <Form.Control type = "password" placeholder="Enter your Password" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword" className="mt-3">
                            <Form.Label>Conform Password :</Form.Label> 
                            <Form.Control type = "password" placeholder="Enter your Password Again " />
                        </Form.Group>

                        <Button variant=" button  mt-3 center" type ="submit">Proceed</Button>

                         <Link to ="/"> Back to Login page </Link>

                        
                    </Form>
                </Col >
                <Col lg = {8} md = {6} sm = {12}>
                    <img className="w-100" src ={re} alt=""/>
                </Col>
            </Row>
       
                
        </Container>
    </div>
};

export default SignUp;