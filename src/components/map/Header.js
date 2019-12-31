import React, { useState } from 'react';
import trackdimg from '../../img/trackd.png';
import engineimg from '../../img/engine-icon.png';

const Header = () => {
  return (
    <header className="map-header d-none d-lg-block">
      <nav className="navbar justify-content-between">
        <ul className="navbar-nav flex-row align-items-center">
          <li className="nav-item">
            <a href="#">
              <img src={trackdimg} alt="trackd" />
            </a>
          </li>
          <li className="nav-item">
            <a href="#">
              <i className="fa fa-globe" />
              &nbsp;&nbsp; Monitoring
            </a>
          </li>
          <li className="nav-item">
            <a href="#">
              <i className="fa fa-flag" /> &nbsp;&nbsp;Tracks
            </a>
          </li>
          <li className="nav-item">
            <a href="#">
              <i className="fa fa-comment" /> &nbsp;&nbsp;Reports
            </a>
          </li>
          <li className="nav-item">
            <a href="#">
              <i className="fa fa-street-view" /> &nbsp;&nbsp;Geofences
            </a>
          </li>
          <li className="nav-item">
            <a href="#">
              <i className="fa fa-clock-o" /> &nbsp;&nbsp;Notification
            </a>
          </li>
          <li className="nav-item">
            <a href="#">
              <i className="fa fa-user" /> Users
            </a>
          </li>
          <li className="nav-item">
            <a href="#">
              <img src={engineimg} alt="engine-icon" /> Units
            </a>
          </li>
        </ul>

        <ul className="navbar-nav flex-row align-items-center">
          <li className="nav-item">
            <a href="#">
              <i className="fas fa-ruler-triangle" />
            </a>
          </li>
          <li className="nav-item">
            <a href="#">
              <i className="fa fa-ellipsis-v" aria-hidden="true" />
            </a>
          </li>
          <li className="nav-item">
            <a href="#">Murray McC</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
