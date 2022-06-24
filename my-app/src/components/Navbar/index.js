import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import './index.css';

const Navbar = () => {
  return (
    <>
   <Nav>
      <div className="image"><img src="Photo/OIP (1).jpg"   width="80px" height="80px" alt=""/ >
      <span className="font">CITY HOSPITAL</span></div>
        <NavMenu>
        <NavLink to="/" activeStyle><i class="fa fa-fw fa-home"></i>
            Home 
          </NavLink>
          <NavLink to="/Login" activeStyle><i class="fa fa-fw fa-user"></i>
            Admin Login
          </NavLink>
          <NavLink to="/Appointment" activeStyle><i class="fa fa-calendar"></i>
            Appointment
          </NavLink>
         
          
        </NavMenu>
      </Nav>
    </>
  );
};
export default Navbar;