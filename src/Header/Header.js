import React from 'react';
import {  Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
   const activeStyle={
    fontWeight: "bold",
    color: "red"
   }
    return (
        <div className="header">
            <h1 className="title">Learning Management System</h1>
         
            
            <Navbar className="navbar" bg="dark" variant="dark">
            <Nav className="nav-container">
            <NavLink  className="nav" to="/home" activeStyle={activeStyle}>Home</NavLink>
             <NavLink className="nav" to="/about" activeStyle={activeStyle}>About</NavLink>
            <NavLink className="nav" to="/Service" activeStyle={activeStyle}>Services</NavLink>
            <NavLink className="nav" to="/analytic" activeStyle={activeStyle}>Analytics</NavLink>
          </Nav>
  </Navbar>
        </div>
    );
};

export default Header;