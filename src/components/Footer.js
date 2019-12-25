import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () =>{
    return (
        <>
        <ul className="pull-left navbar-nav">
      <li className="nav-item">
      <Link to="/"> Supports Integration With <img src="img/saplogo.png" className="logosap" alt="saplogo"/></Link>
      </li>
    </ul>
      <ul className="pull-right navbar-nav">
        <li className="nav-item">
        <Link to="/">Powered by <img src="img/logo.png" className="logo1" alt="logopowered"/></Link>
        </li>
        
      </ul>
      </>
    );
}

export default Footer;
