import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
// import solarInstallationImg from '../assets/solar-panels-installed.jpg'; // Replace with actual image paths
// import solarCleaningImg from '../assets/solarcleaning.jpg'; // Replace with actual image paths
// import solarMaintenanceImg from '../assets/solarMaintenance.jpg'; // Replace with actual image paths
import solarInstallationImg from "../assets/images/engineer.jpg"; // Update the path to your actual image
import maintenanceImg from "../assets/images/rooftopAidesign.webp"; // Update the path to your actual image
import transmitionImg from "../assets/images/transmitionline2.jpg";
import cleaningImg from "../assets/images/solar-panels.jpg";

import "../assets/CSS/ServicePage.css";
const ServicePage = () => {
  return (
    <div>
      {/* Header Section */}
      <Container className="my-5">
        <h1 className="text-center mb-4 ourservicehead">OUR SERVICES</h1>
        <p className="text-center">
          At ViVi Renewables, we offer top-notch rooftop solar panel solutions
          to help you harness clean and sustainable energy. Explore our range of
          services that bring efficiency and reliability to your solar energy
          needs.
        </p>
      </Container>

      {/* Services Section */}
      <Container>
        {/* <Row>
          
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
        </Row> */}

        <Row>
          {/* Solar Installation Card */}
          <Col
            md={4}
            className="mb-4 d-flex justify-content-center"
            id="cardcol"
          >
            <Card className="text-center h-100 card-hover">
              <Card.Img
                variant="top"
                src={solarInstallationImg}
                alt="Solar Installation"
                className="card-img-fixed"
                id="cardimg"
              />
              <Card.Body className="card-body-hover" id="cardbody">
                <Card.Title className="card-title mt-0">
                  Open Power Access Service
                </Card.Title>
                <Card.Text className="card-text text-wrap">
                  Under the Open Power Access Services, we offer a comprehensive
                  range of services to all HT consumers for arranging 
                  cheaper power under Intra/Interstate.
                </Card.Text>
                <a
                  href="/openpowerservice"
                  className="text-danger fw-bold mt-0 d-block"
                >
                  Explore More →
                </a>
              </Card.Body>
            </Card>
          </Col>

          {/* Cleaning Card */}

          <Col
            md={4}
            className="mb-4 d-flex justify-content-center"
            id="cardcol"
          >
            <Card className="text-center h-100 card-hover">
              <Card.Img
                variant="top"
                src={transmitionImg}
                alt="Solar Installation"
                className="card-img-fixed"
                id="cardimg"
              />
              <Card.Body className="card-body-hover" id="cardbody">
                <Card.Title className="card-title mt-0">
                  Electrical Infrastructure Services (EIS)
                </Card.Title>
                <Card.Text className="card-text">
                  We provide top-notch electrical infrastructure solutions,
                  ensuring safe and efficient energy distribution for your
                  needs.{" "}
                </Card.Text>
                <a href="/eis-service" className="text-danger fw-bold mt-0 d-block">Explore More →</a>
              </Card.Body>
            </Card>
          </Col>
          {/* Maintenance & Repair Card */}

          <Col
            md={4}
            className="mb-4 d-flex justify-content-center"
            id="cardcol"
          >
            <Card className="text-center h-100 card-hover">
              <Card.Img
                variant="top"
                src={maintenanceImg}
                alt="Solar Installation"
                className="card-img-fixed"
                id="cardimg"
              />
              <Card.Body className="card-body-hover" id="cardbody">
                <Card.Title className="card-title mt-0">
                  Solar Rooftop PV Power Projects
                </Card.Title>
                <Card.Text className="card-text">
                  We specialize in designing and implementing high-efficiency
                  solar rooftop PV power projects for sustainable energy
                  solutions.{" "}
                </Card.Text>
                <a href="/solar-rooftop" className="text-danger fw-bold mt-0 d-block">Explore More →</a>
              </Card.Body>
            </Card>
          </Col>

          <Col
            md={4}
            className="mb-4 d-flex justify-content-center"
            id="cardcol"
          >
            <Card className="text-center h-100 card-hover">
              <Card.Img
                variant="top"
                src={cleaningImg}
                alt="Solar Installation"
                className="card-img-fixed"
                id="cardimg"
              />
              <Card.Body className="card-body-hover" id="cardbody">
                <Card.Title className="card-title mt-0">
                  Operation & Maintenance
                </Card.Title>
                <Card.Text className="card-text">
                  Our team offers expert maintenance and repair services to
                  ensure your solar panels are always functioning at their best.{" "}
                </Card.Text>
                <a href="/operation-maintenance" className="text-danger fw-bold mt-0 d-block">Explore More →</a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Footer Section */}
      {/* <Container className="my-5 text-center">
        <p>
          For inquiries, feel free to <strong>Contact Us</strong> and one of our experts will assist you.
        </p>
        <a href="mailto:contact@vivirenewables.com" className="btn btn-primary">
          Contact Us
        </a>
      </Container> */}
    </div>
  );
};

export default ServicePage;
