import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import madeinIndia from '../assets/IndiaFlag.png';
const FooterComponent = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <Container>
        <Row>
          {/* Left Side: Logo, Contact Info, and Social Media */}
          <Col md={4} className="mb-4">
            <h4>ViVi Renewables</h4>
            <p>Rooftop solar made simple. We don't just sell solar — we give you peace of mind.</p>
            <p>
              <strong>Contact Us:</strong><br />
              Phone: <a href="tel:+919830003000" className="text-light">98 3000 3000</a><br />
              Email: <a href="mailto:contact@vivirenewables.com" className="text-light">contact@vivirenewables.com</a>
            </p>
            <div>
              <a href="https://facebook.com/SolarSquare" className="text-light mx-2">Facebook</a>
              <a href="https://youtube.com/SolarSquare" className="text-light mx-2">YouTube</a>
              <a href="https://instagram.com/SolarSquare" className="text-light mx-2">Instagram</a>
              <a href="https://linkedin.com/SolarSquare" className="text-light mx-2">LinkedIn</a>
            </div>
          </Col>

          {/* Middle Side: Solutions */}
          <Col md={2} className="mb-4">
            <h5>Our Solutions</h5>
            <ListGroup>
              <ListGroup.Item className="bg-dark text-light border-0 p-1">
                Homes
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark text-light border-0 p-1">
                Commercial
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark text-light border-0 p-1">
                Housing Society
              </ListGroup.Item>
            </ListGroup>
          </Col>

          {/* Right Side: Quick Links */}
          <Col md={2} className="mb-4">
            <h5>Quick Links</h5>
            <ListGroup>
              <ListGroup.Item className="bg-dark text-light border-0 p-1">
                <a href="/" className="text-light">About Us</a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark text-light border-0 p-1">
                <a href="/" className="text-light">SolarPro Partner</a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark text-light border-0 p-1">
                <a href="/" className="text-light">Sitemap</a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark text-light border-0 p-1">
                <a href="/" className="text-light">Careers</a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark text-light border-0 p-1">
                <a href="/" className="text-light">On-Grid Solar</a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark text-light border-0 p-1">
                <a href="/" className="text-light">Off-Grid Solar</a>
              </ListGroup.Item>
            </ListGroup>
          </Col>

          {/* Address Section */}
          <Col md={4} className="mb-4">
            <h5>Address</h5>
            <p>1st floor, Standford Building, S.V. Road & Juhu Lane Junction,</p>
            <p>Above Mahindra Showroom, Zalawad Nagar, Ganga Vihar,</p>
            <p>Andheri West, Mumbai, Maharashtra 400058</p>
          </Col>
        </Row>
        <hr className="text-light" />
        <Row className="text-center">
  <Col className="d-flex justify-content-start">
  <p>
      Proudly made in India{' '}
      <img src={madeinIndia} alt="India Flag" style={{ width: '30px', verticalAlign: 'middle' }} />
    </p>
  </Col>
  <Col className="d-flex justify-content-end">
    <p>&copy;{new Date().getFullYear()} ViVi Renewables. All Rights Reserved.</p>
  </Col>
</Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;
