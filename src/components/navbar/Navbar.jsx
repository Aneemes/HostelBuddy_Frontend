import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import logo from "../../images/logo.png";
import "./navbar.css";
import {
  faBed,
  faCalendarDays,
  faCar,
  faHome,
  faPhone,
  faUser,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={logo} alt='logo' className='logo'/>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/' activeStyle>
          <FontAwesomeIcon icon={faHome} className="bed" />
            Home
          </NavLink>
          <NavLink to='/services' activeStyle>
          <FontAwesomeIcon icon={faBed} className="bed" />
            Stay
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
          <FontAwesomeIcon icon={faPhone} className="bed" />
            Contact Us
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
          <FontAwesomeIcon icon={faUser} className="bed" />
            About us
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink> <NavBtnLink to='/signup'>Sign Up</NavBtnLink>
        </NavBtn>
        
      </Nav>
    </>
  );
};

export default Navbar;