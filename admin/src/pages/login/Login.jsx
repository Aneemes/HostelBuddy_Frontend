import React from "react";
import {Col, Container, Row, Form, Button} from "react-bootstrap"
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import re from "../../images/admi.png"
import './login.scss'

const Login = () =>{
    const [credentials, setCredentinals] = useState({
        username: undefined,
        password: undefined,
    })

    const { user, loading, error, dispatch } = useContext(AuthContext);

    const navigate = useNavigate()



    const handleChange = (e)=>{
        setCredentinals(prev=>({...prev, [e.target.id]: e.target.value }))
    }

    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
          const res = await axios.post("/auth/login", credentials);
            if(res.data.isAdmin){
                dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
                navigate("/")
            }else{
                dispatch({ 
                    type: "LOGIN_FAILURE", 
                    payload: {message:"You're not authenticated"},
            });
            }
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
        }
    };

    console.log(user);

    return(<div>
        <Container className ="mt-5">
            <Row>
            
                   
                    <Form>
                    
                    <h1 className="shadow-sm text  mt-5  p-5 text-center rounded">Admin Login</h1>
                     <img className ="icon-img center" src = {re} alt="icon"/>
                        <Form.Group controlId="formBasicEmail" className="mt-3" >
                            <Form.Label >Username:</Form.Label> <br></br>
                            <Form.Control type = "text" placeholder="Enter your username" id="username" onChange={handleChange} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword" className="mt-3">
                            <Form.Label >Password:</Form.Label> <br></br>
                            <Form.Control type = "password" placeholder="Enter your Password" id="password" onChange={handleChange}/>
                        </Form.Group>

                        <Button disabled={loading} onClick={handleClick} variant=" btn-block mt-3 center button" type ="submit" className="lButton">Login</Button>
                        {error && <span>{error.message}</span>}
                        <div>
                            <p>Dont have an account ? 
                            <Link to ="/signup"> Create an Account</Link>
                            </p>  
                            <a href="#" className=""> <small className="reset ml-2"> Forgot Password?</small></a>
                            
                        </div>
                        
                    </Form>
               
                {/* <Col lg = {8} md = {6} sm = {12}>
                    <img className="w-100" src ={re} alt=""/>
                </Col> */}
            </Row>
       
                
        </Container>
    </div>
    );
};

export default Login;


