import React from 'react';
import logo from './JB-logo-large.png';
import {Nav, Navbar} from 'react-bootstrap';


const Navigation = ({ onRouteChange, toggleModal }) => {
  return (
    <div>
      <Navbar bg="white" expand="lg" fixed="top" className="nav-menu">
        <Navbar.Brand>
          <img
          src={logo}
          width="200"
          height="70"
          className="d-inline-block align-top pointer"
          onClick={ ()=>onRouteChange('home') }
          alt="React Bootstrap logo"
        />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link  className="contact"><li onClick={() => toggleModal('contact')}>CONTACT US</li></Nav.Link>
            {/* <Nav.Link  className="search"><li onClick={toggleModal}>SEARCH</li></Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Navigation;
