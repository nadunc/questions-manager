import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';

export default function TopNavBar() {
  return (
    <Navbar className="top-nav-bar" expand="lg">
      <Navbar.Brand>
        <Link to={routes.HOME}>LOGO</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#">
            <FontAwesomeIcon icon={faBell} />
          </Nav.Link>

          <Nav.Link href="#">Menu</Nav.Link>

          <Nav.Link href="#">
            <FontAwesomeIcon icon={faBars} />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
