import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import solarInstallationImg from '../assets/solar-panels-installed.jpg'; // Replace with actual image paths
import solarCleaningImg from '../assets/solarcleaning.jpg'; // Replace with actual image paths
import solarMaintenanceImg from '../assets/solarMaintenance.jpg'; // Replace with actual image paths

const ServicePage = () => {
  return (
    <div>
      {/* Header Section */}
      <Container className="my-5">
        <h1 className="text-center mb-4">Our Services</h1>
        <p className="text-center">
          At ViVi Renewables, we offer top-notch rooftop solar panel solutions to help you harness clean and sustainable energy. 
          Explore our range of services that bring efficiency and reliability to your solar energy needs.
        </p>
      </Container>

      {/* Services Section */}
      <Container>
        <Row>
          {/* Solar Installation Card */}
          <Col md={4} className="mb-4">
            <Card className="text-center h-100">
              <Card.Img 
                variant="top" 
                src={solarInstallationImg} 
                alt="Solar Installation" 
                className="card-img-fixed" 
              />
              <Card.Body>
                <Card.Title>Solar Installation</Card.Title>
                <Card.Text>
                  We specialize in professional rooftop solar panel installation services that ensure optimal performance and savings.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Solar Cleaning Card */}
          <Col md={4} className="mb-4">
            <Card className="text-center h-100">
              <Card.Img 
                variant="top" 
                src={solarCleaningImg} 
                alt="Solar Cleaning" 
                className="card-img-fixed" 
              />
              <Card.Body>
                <Card.Title>Solar Panel Cleaning</Card.Title>
                <Card.Text>
                  We offer thorough cleaning services to maximize your solar panel's energy output and prolong its life.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Solar Maintenance Card */}
          <Col md={4} className="mb-4">
            <Card className="text-center h-100">
              <Card.Img 
                variant="top" 
                src={solarMaintenanceImg} 
                alt="Solar Maintenance" 
                className="card-img-fixed" 
              />
              <Card.Body>
                <Card.Title>Solar Panel Maintenance</Card.Title>
                <Card.Text>
                  Our experts provide maintenance services to ensure that your solar panels continue to operate at peak efficiency.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Footer Section */}
      <Container className="my-5 text-center">
        <p>
          For inquiries, feel free to <strong>Contact Us</strong> and one of our experts will assist you.
        </p>
        <a href="mailto:contact@vivirenewables.com" className="btn btn-primary">
          Contact Us
        </a>
      </Container>
    </div>
  );
};

export default ServicePage;
