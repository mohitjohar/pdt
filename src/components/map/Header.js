import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import trackdimg from '../../img/trackd.png';
import engineimg from '../../img/engine-icon.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <header className="map-header">
      <Navbar color="transparent" dark expand="md">
        <NavbarBrand href>
          <img src={trackdimg} alt="trackd" />
        </NavbarBrand>
        {/* <NavbarToggler /> */}
        <button className="navbar-toggler" onClick={toggle}>
          <span className="sr-only">Toggle navigation</span>
          <span className="navbar-toggler-icon icon-bar" />
          <span className="navbar-toggler-icon icon-bar" />
          <span className="navbar-toggler-icon icon-bar" />
        </button>
        <Collapse isOpen={isOpen} navbar className="mobi-nav">
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href>
                <i className="fa fa-globe" />
                &nbsp;&nbsp; Monitoring
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href>
                <i className="fa fa-flag" /> &nbsp;&nbsp;Tracks
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href>
                <i className="fa fa-comment" /> &nbsp;&nbsp;Reports
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href>
                <i className="fa fa-street-view" /> &nbsp;&nbsp;Geofences
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href>
                <i className="fa fa-clock-o" /> &nbsp;&nbsp;Notification
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href>
                <i className="fa fa-user" /> &nbsp;&nbsp;Users
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href>
                <img src={engineimg} alt="engine-icon" /> Units
              </NavLink>
            </NavItem>
          </Nav>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href>
                <i className="fa fa-exclamation-triangle" />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href>
                <i className="fa fa-ellipsis-v" aria-hidden="true" />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href>Murray McC</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
