import React from "react";

import "./contact.css";
import { Button, Navbar} from "react-bootstrap";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Navber from "../partials/Navber";
import Footer from "../partials/Footer";

const Contact = () => {
  const apiURL = process.env.REACT_APP_API_URL;
  const[name, setName] = useState("");
  const[email, setEmail] = useState("");
  const[message, setMessage] = useState("");
  const history = useHistory();

  useEffect(()=>{
    getUserDetails();
  })

  const getUserDetails =async()=>{
    const result = JSON.parse(localStorage.getItem("user"));
    setName(result?.username)
    setEmail(result?.email)
    
  }

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const contact = { name, email, message }
      console.log(contact)
      await axios.post(`${apiURL}/api/contact`, contact);
      history.push('/contact')
      window.location.reload(false);
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
  <div >
    <Navber/>
    <div className="contact-formm contact-form-wrapper d-flex justify-content-center body">
      <form action="#" class="contact-form">
        <h5 class="title">Contact us</h5>
        <p class="description">Feel free to contact us if you need any assistance, any help or another question.
        </p>
        <div>
          <input 
          value= {name}                      
          onChange={(e)=>
            setName({
              name: e.target.value,
            })
          }
          type="text" class="form-control rounded border-white mb-3 form-input" id="name" placeholder="Name" required />
        </div>
        <div>
          <input 
          value= {email}                      
          onChange={(e)=>
            setEmail({
              email: e.target.value,
            })
          }
          type="email" class="form-control rounded border-white mb-3 form-input" placeholder="Email" required />
        </div>
        <div>
          <input 
          onChange={(e)=>
            setMessage({
              message: e.target.value,
            })
          }
          type="text" class="form-control rounded border-white mb-3 form-input" placeholder="message" id ="message-field"required />
        </div>
        {/* <div>
          <textarea  
                           
          onChange={ (e)=>setMessage({
            message: e.target.value,
          })}
          id="message" class="form-control rounded border-white mb-3 form-input" rows="5" cols="30" placeholder="Message" required/>
        </div> */}
        <Button onClick={handleClick}  type="submit"
         className="w-full px-4 py-2 text-center text-white font-semibold cursor-pointer"
         style={{ background: "#303031" }}
        >Submit</Button>
        
      </form>
    </div>
    <Footer/>
  </div>
  );
};
export default Contact;