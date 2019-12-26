import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  // const logout = () =>{
  //   p.history.push('/login');
  // }

  return (
    <>
      <div className="navbar-absolute header-top">
        <nav className="navbar navbar-expand-lg navbar-transparent justify-content-between mb-0">
          <div className="container">
            <ul className="left-side navbar-nav">
              <li className="nav-item">
                <Link to="#">
                  <img src="img/pdt-logo.png" className="logo2" alt="logo" />
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav right-side">
              <li className="nav-item">
                <Link to="#">
                  <i className="fa fa-clock-o" />
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#">
                  <i className="fa fa-star" />
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/dashboard">
                  <i className="fa fa-home" />
                </Link>
              </li>
              <div className="dropdown d-none d-lg-block">
                <button
                  className="btn btn-transparent dropdown-toggle"
                  type="button"
                  data-toggle="collapse"
                  data-target="#dropdownMenuButton"
                  aria-controls="dropdownMenuButton"
                >
                  <i className="fa fa-user" /> &nbsp;&nbsp; Murray McC
                </button>
                <div className="dropdown-menu" id="dropdownMenuButton">
                  <Link to="#">Profile</Link>
                  <Link to="#">Settings</Link>
                  <Link to="/login">Logout</Link>
                </div>
              </div>
            </ul>
          </div>
        </nav>
        <nav className="navbar navbar-expand-lg mb-0 bg-blackt">
          <div className="container">
            <button
              className="navbar-toggler pull-left"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="navbar-toggler-icon icon-bar" />
              <span className="navbar-toggler-icon icon-bar" />
              <span className="navbar-toggler-icon icon-bar" />
            </button>
            <div className="dropdown pull-right d-lg-none d-md-block">
              <button
                className="btn btn-transparent dropdown-toggle"
                type="button"
                data-toggle="collapse"
                data-target="#dropdownMenuButtonm"
                aria-controls="dropdownMenuButtonm"
              >
                <i className="fa fa-user" /> &nbsp;&nbsp; Murray McC
              </button>
              <div className="dropdown-menu" id="dropdownMenuButtonm">
                <Link to="#">Profile</Link>
                <Link to="#">Settings</Link>
                <Link to="/login">Logout</Link>
              </div>
            </div>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <Link to="/inspections">Inspections</Link>
                </li>
                <li className="nav-item">
                  <Link to="/map">Site Info</Link>
                </li>
                <li className="nav-item">
                  <Link to="#">Reports</Link>
                </li>
                <li className="nav-item">
                  <Link to="#">Analytics</Link>
                </li>
                <li className="nav-item">
                  <Link to="#">
                    Support &nbsp;&nbsp;
                    <i className="fa fa-phone" />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#">
                    feedback &nbsp;&nbsp; <i className="fa fa-comment" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Header;
