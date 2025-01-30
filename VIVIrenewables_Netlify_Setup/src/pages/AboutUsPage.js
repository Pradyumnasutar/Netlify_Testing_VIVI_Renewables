// src/pages/AboutUsPage.js
import React from 'react';
import { Container, Row, Col, Button, Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import testimonialImg1 from '../assets/testimonial1.jpg'; // Sample image for customer testimonials
// import testimonialImg2 from '../assets/testimonial2.jpg';
import '../assets/CSS/AboutUs.css';

const AboutUsPage = () => {
  return (
    <Container className="my-5">
    {/* Page Title */}
    <div className="ms-3">
      <h1 className="text-center mb-4">About Us</h1>
      <p className="text-center">We are dedicated to providing high-quality rooftop solar installation services, helping homes and businesses embrace the power of renewable energy.</p>
    </div>

    {/* Mission and Vision Section */}
    <Row className="my-5">
    <Col md={6} className="mb-4">
    <div className="testimonial-box p-4 border rounded">
        <h3>Our Mission</h3>
        <p>
          Our mission is to make solar energy accessible to everyone by providing efficient, cost-effective, and sustainable rooftop solar solutions. We strive to empower individuals and businesses to harness the power of the sun while reducing their carbon footprint.
        </p>
        </div>
        </Col>
        <Col md={6} className="mb-4">
        <div className="testimonial-box p-4 border rounded">
        <h3>Our Vision</h3>
        <p>
          We envision a world where solar energy is the primary source of power, creating a cleaner, greener future for generations to come. Our commitment is to lead the way in solar innovation, driving positive change across India and beyond.
        </p>
        </div>
        </Col>
    </Row>

    {/* Our Values Section */}
    <Row className="my-5">
      <Col md={12}>
        <h3>Our Core Values</h3>
        <ul>
          <li><strong>Integrity:</strong> We maintain transparency and honesty in everything we do.</li>
          <li><strong>Innovation:</strong> We embrace the latest technology to deliver superior solutions.</li>
          <li><strong>Sustainability:</strong> We are committed to promoting clean, renewable energy.</li>
          <li><strong>Customer-Centricity:</strong> Our customers' satisfaction is at the heart of our business.</li>
        </ul>
      </Col>
    </Row>

    {/* Company History Section */}
    <Row className="my-5">
      <Col md={12}>
        <h3>Our Journey</h3>
        <p>
          Founded in 2024, we have been at the forefront of the solar energy revolution in India. Over the years, we've successfully installed thousands of rooftop solar panels, helping our clients reduce their energy costs while contributing to environmental sustainability. With a team of passionate professionals, we continue to innovate and expand our services to meet the growing demand for clean energy solutions.
        </p>
      </Col>
    </Row>

   {/* Testimonials Section */}
<Row className="my-5 testimonials">
  <Col md={12}>
    <h3>What Our Customers Say</h3>
    <Row>
      {/* Testimonial 1 */}
      <Col md={6} className="mb-4">
        <div className="testimonial-box p-4 border rounded">
          {/* <img src={testimonialImg1} alt="Customer 1" style={{ width: '80px', height: '80px', borderRadius: '50%' }} /> */}
          <h5 className="mt-3">Kishor Pande</h5>
          <p><em>"The team at ViVi Renewables made the solar installation process incredibly easy and efficient. The savings on my electricity bills have been amazing!"</em></p>
        </div>
      </Col>
      {/* Testimonial 2 */}
      <Col md={6} className="mb-4">
        <div className="testimonial-box p-4 border rounded">
          {/* <img src={testimonialImg2} alt="Customer 2" style={{ width: '80px', height: '80px', borderRadius: '50%' }} /> */}
          <h5 className="mt-3">Sandesh Shelar</h5>
          <p><em>"I am really impressed with the service and quality of work. The team was very professional, and the installation was completed on time."</em></p>
        </div>
      </Col>
    </Row>
  </Col>
</Row>


    {/* FAQ Section */}
    <Row className="my-5">
      <Col md={12}>
        <h3>Frequently Asked Questions (FAQs)</h3>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>What are the benefits of installing solar panels?</Accordion.Header>
            <Accordion.Body>
              Solar panels help reduce electricity bills, increase the value of your property, and contribute to a cleaner environment by reducing your carbon footprint.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>How long does it take to install a solar system?</Accordion.Header>
            <Accordion.Body>
              On average, solar panel installations take 1-3 days, depending on the size of the system and the complexity of the setup.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>What maintenance is required for solar panels?</Accordion.Header>
            <Accordion.Body>
              Solar panels require minimal maintenance. Regular cleaning of the panels and occasional checks by professionals ensure their optimal performance.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Are there financing options available?</Accordion.Header>
            <Accordion.Body>
              Yes, we offer flexible financing options, including zero-cost EMI plans to make solar energy more affordable for everyone.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Col>
    </Row>

    {/* Call-to-Action Section */}
    <Row className="my-5 text-center">
      <Col md={12}>
        <h3>Ready to Make the Switch to Solar?</h3>
        <p>Contact us today to get a free consultation and explore how solar energy can benefit you.</p>
        <Button as={Link} to="/inquiry" variant="primary">Get in Touch</Button>
      </Col>
    </Row>
  </Container>
  );
};

export default AboutUsPage;
