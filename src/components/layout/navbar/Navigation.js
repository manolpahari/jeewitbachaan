import React from 'react';
import logo from './JB-logo-large.png';
import {Nav, Navbar} from 'react-bootstrap';


const Navigation = () => {
  return (
    <div>
      <Navbar bg="white" expand="lg" fixed="top" className="nav-menu">
        <Navbar.Brand href="#home">
          <img
          src={logo}
          width="200"
          height="70"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#contact" className="contact"><li>CONTACT US</li></Nav.Link>
            <Nav.Link href="#search" className="search"><li>SEARCH</li></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Navigation;
