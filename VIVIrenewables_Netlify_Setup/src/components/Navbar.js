import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/vivirenewablesLogo.jpg'; // Ensure correct path
import '../assets/CSS/Navbar.css'; // Ensure CSS is linked

const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container fluid>
        {/* Logo on the left corner */}
        <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">
          <img src={logo} alt="VIVI Renewables" className="navbar-logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="navlink">HOME</Nav.Link>
            <Nav.Link as={Link} to="/about" className="navlink">ABOUT US</Nav.Link>
            <Nav.Link as={Link} to="/services" className="navlink">SERVICES</Nav.Link>
            <Nav.Link as={Link} to="/products" className="navlink">PRODUCTS</Nav.Link>
            <Nav.Link as={Link} to="/inquiry" className="navlink">CONTACT US</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
