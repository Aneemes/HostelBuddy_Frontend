import React from "react";
import {Col, Container, Row, Form, Button} from "react-bootstrap"
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import re from "../../images/re.png"
import './signup.css'
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
          navigate("/")
        } catch (err) {
          dispatch({ type: "REGISTER_FAILURE", payload: err.response.data });
        }
    };

    console.log(user);

    return<div>
        <Container className ="mt-5">
            <Row>
                <Col lg={4} md = {6} sm ={12} className="  ">
                    {/* <img className ="icon-img center" src = {pic} alt="icon"/> */}
                    <Form>
                    <h1 className="shadow-sm text  mt-5 p-3 text-center rounded">User Register</h1>
                        
                    <Form.Group controlId="formBasicEmail" >
                            <Form.Label>Username:</Form.Label>                       
                            <Form.Control type = "text" placeholder="Enter your username" id="username" onChange={handleChange}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail" className="mt-3" >
                            <Form.Label>Email:</Form.Label> 
                            <Form.Control type = "email" placeholder="Enter your email" id="email" onChange={handleChange}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword" className="mt-3">
                            <Form.Label>Password:</Form.Label> 
                            <Form.Control type = "password" placeholder="Enter your Password" id="password" onChange={handleChange}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword" className="mt-3">
                            <Form.Label>Conform Password :</Form.Label> 
                            <Form.Control type = "password" placeholder="Enter your Password Again " />
                        </Form.Group>

                        <Button disabled={loading} onClick={handleClick} variant=" button  mt-3 center" type ="submit">Proceed</Button>

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