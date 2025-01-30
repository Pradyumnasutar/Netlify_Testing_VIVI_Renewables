import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/vivirenewablesLogo.jpg';

const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="lg">
      {/* Adding space to the left of the Navbar.Brand */}
      <Navbar.Brand as={Link} to="/" className="ms-3">
        <img src={logo} alt="VIVI Renewables" style={{ height: '50px' }} /> {/* You can adjust the height as needed */}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        {/* Align the links to the right using ms-auto and add margin to the left of each Nav.Link */}
        <Nav className="ms-auto">
        <Nav.Link as={Link} to="/" className="ms-3">Home</Nav.Link>
          <Nav.Link as={Link} to="/about" className="ms-3">About Us</Nav.Link>
          <Nav.Link as={Link} to="/services" className="ms-3">Services</Nav.Link>
          <Nav.Link as={Link} to="/products" className="ms-3">Products</Nav.Link>
          <Nav.Link as={Link} to="/inquiry" className="ms-3">Customer Inquiry</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
