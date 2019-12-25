import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <>
      <div className="navbar-absolute header-top">
        <nav className="navbar navbar-expand-lg navbar-transparent justify-content-between mb-0">
          <div className="container"> 
        <ul className="left-side navbar-nav">
           <li className="nav-item">
                        <a href="#" className="nav-link"><img src="img/pdt-logo.png" className="logo2"/></a>
           </li>
           </ul>
          <ul className="navbar-nav right-side">
            <li className="nav-item"><a className="nav-link" href="#"><i className="fa fa-clock-o"></i></a></li>
            <li className="nav-item"><a className="nav-link" href="#"><i className="fa fa-star"></i></a></li> 
            <li className="nav-item"><a className="nav-link" href="#"><i className="fa fa-home"></i></a></li> 
            <div className="dropdown d-none d-lg-block">
              <button className="btn btn-transparent dropdown-toggle" type="button" data-toggle="collapse" data-target="#dropdownMenuButton" aria-controls="dropdownMenuButton">
                <i className="fa fa-user"></i> &nbsp;&nbsp; Murray McC</button>
              <div className="dropdown-menu" id="dropdownMenuButton">
                <a className="dropdown-item" href="#">Profile</a>
                <a className="dropdown-item" href="#">Settings</a>
                <a className="dropdown-item" href="/login">Logout</a>
              </div>
            </div>   
          </ul>
        </div>
        </nav>
      <nav className="navbar navbar-expand-lg mb-0 bg-blackt">
        <div className="container">
          <button className="navbar-toggler pull-left" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon icon-bar"></span>
            <span className="navbar-toggler-icon icon-bar"></span>
            <span className="navbar-toggler-icon icon-bar"></span>
          </button>
          <div className="dropdown pull-right d-lg-none d-md-block">
            <button className="btn btn-transparent dropdown-toggle" type="button" data-toggle="collapse" data-target="#dropdownMenuButtonm" aria-controls="dropdownMenuButtonm">
              <i className="fa fa-user"></i> &nbsp;&nbsp; Murray McC</button>
            <div className="dropdown-menu" id="dropdownMenuButtonm">
              <a className="dropdown-item" href="#">Profile</a>
              <a className="dropdown-item" href="#">Settings</a>
              <a className="dropdown-item" href="/login">Logout</a>
            </div>
          </div>  
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                Inspections
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                Site Info
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                Reports
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                Analytics
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                Support &nbsp;&nbsp;<i className="fa fa-phone"></i>
                </a>
              </li>
              <li className="nav-item"><a href="" className="nav-link">feedback &nbsp;&nbsp; <i className="fa fa-comment"></i></a></li>
            </ul>
            
          </div>
        </div>
      </nav>
      </div>
      </>
    );
};
export default Header;
