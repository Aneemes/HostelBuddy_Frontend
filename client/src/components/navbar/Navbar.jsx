import React from 'react';
import {
  NavDropdown
} from 'react-bootstrap';
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
import { useContext } from "react";
import { AuthContext, logout } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={logo} alt='logo' class='logo'/>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/' activeStyle>
          <FontAwesomeIcon icon={faHome} class="bed" />
            Home
          </NavLink>
          <NavLink to='/services' activeStyle>
          <FontAwesomeIcon icon={faBed} class="bed" />
            Stay
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
          {/* <FontAwesomeIcon icon={faPhone} class="bed" /> */}
            Contact Us
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
          {/* <FontAwesomeIcon icon={faUser} class="bed" /> */}
            About us
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        {user ? user.username &&
        //  <NavBtn onClick={(e) => logout()} > Logout </NavBtn>
        <NavDropdown title={user.username} id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Edit User</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4"> <NavBtn onClick={(e) => logout()} > Logout </NavBtn></NavDropdown.Item>
        </NavDropdown>
         : (
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink> <NavBtnLink to='/signup'>Sign Up</NavBtnLink>
        </NavBtn>
        )}
      </Nav>
    </>
  );
};
export default Navbar;