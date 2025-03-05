import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import solar1 from "../assets/3d-solar-panel-system.jpg";

import solar01 from "../assets/rooftop-slider-9-1.jpg";
import solar2 from "../assets/commercial_solar.jpg";
import solar02 from "../assets/solarcleaning.jpg";
import solar3 from "../assets/homeSolar.jpg";
import solar03 from "../assets/gera-plaza.jpg";
import CustomerInquiryForm from "../components/CustomerInquiryForm";
import ServicePage from "./ServicePage";
// import solarInstallationImg from "../assets/images/engineer.jpg"; // Update the path to your actual image
//import maintenanceImg from "../assets/images/rooftopAidesign.webp"; // Update the path to your actual image
//import transmitionImg from "../assets/images/transmitionline2.jpg";
//import cleaningImg from "../assets/images/solar-panels.jpg";
import collectEnergyImg from "../assets/collectEnergy.png"; // Example image
import convertPowerImg from "../assets/convertPower.png"; // Example image
import transmitPowerImg from "../assets/transmitPower.png"; // Example image
import readyImg from "../assets/readyPower.png"; // Example image
import "../assets/CSS/Home.css";

const HomePage = () => {
  const whatsappNumber = "+917040010890"; // Replace with your WhatsApp number
  const message = "Hello, I am interested in your solar services!"; // Default message

  // WhatsApp link
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
  return (
    <div>
      {/* <h1 className="text-center my-4"> A pioneering and leading solar company in India</h1> */}
      {/* Carousel with custom class */}
      <Carousel className="custom-carousel">
        <Carousel.Item>
          <img className="d-block w-100" src={solar1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={solar01} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={solar03} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={solar2} alt="Forth slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={solar02} alt="Fifth slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={solar3} alt="Sixth slide" />
        </Carousel.Item>
      </Carousel>

      {/* New Section with Heading and Paragraph */}
      <Container className="my-5">
        <h1 className="text-center my-4">
          We Are India’s Leading Rooftop Solar Panel Company
        </h1>
        <p>
          ViVi Renewables has close to 3 decades of experience as a leader and
          innovator in the renewable energy space. Our varied expertise includes
          all major components of solar power systems and solutions. Our aim is
          to be a solar energy brand that evokes trust, confidence, and
          reliability. We guide customers into taking the right decisions for
          all their solar energy needs.
        </p>
      </Container>

      {/* Our Services Section */}
      {/* <Container className="my-5">
        <h2 className="text-center mb-4 ourservicehead">OUR SERVICES</h2>
        <Row>
          
          <Col md={4} className="mb-4 d-flex justify-content-center" style={{ height: "18rem"}}>
            <Card className="text-center h-100 card-hover">
              <Card.Img
                variant="top"
                src={solarInstallationImg}
                alt="Solar Installation"
                className="card-img-fixed"
              />
              <Card.Body className="card-body-hover" style={{ height: "90%" }}>
                <Card.Title className="card-title mt-2">
                  Open Power Access Service
                </Card.Title>
                <Card.Text className="card-text">
                  Under the Open Power Access Services, we offer a comprehensive
                  range of services to all HT consumers for arranging cheaper
                  power under Intra/Interstate.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          

          <Col md={4} className="mb-4 d-flex justify-content-center" style={{ height: "18rem" }}>
            <Card className="text-center h-100 card-hover">
              <Card.Img
                variant="top"
                src={transmitionImg}
                alt="Solar Installation"
                className="card-img-fixed"
              />
              <Card.Body className="card-body-hover" style={{ height: "90%" }}>
                <Card.Title className="card-title mt-2">
                  Electrical Infrastructure Services (EIS)
                </Card.Title>
                <Card.Text className="card-text">
                  We provide top-notch electrical infrastructure solutions,
                  ensuring safe and efficient energy distribution for your
                  needs.{" "}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          

          <Col md={4} className="mb-4 d-flex justify-content-center" style={{ height: "18rem" }}>
            <Card className="text-center h-100 card-hover">
              <Card.Img
                variant="top"
                src={maintenanceImg}
                alt="Solar Installation"
                className="card-img-fixed"
              />
              <Card.Body className="card-body-hover" style={{ height: "90%" }}>
                <Card.Title className="card-title mt-2">
                  Solar Rooftop PV Power Projects
                </Card.Title>
                <Card.Text className="card-text">
                  We specialize in designing and implementing high-efficiency
                  solar rooftop PV power projects for sustainable energy
                  solutions.{" "}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4 d-flex justify-content-center" style={{ height: "18rem" }}>
            <Card className="text-center h-100 card-hover">
              <Card.Img
                variant="top"
                src={cleaningImg}
                alt="Solar Installation"
                className="card-img-fixed"
              />
              <Card.Body className="card-body-hover" style={{ height: "90%" }}>
                <Card.Title className="card-title mt-2">
                  Operation & Maintenance
                </Card.Title>
                <Card.Text className="card-text">
                Our team offers expert maintenance and repair services to ensure your solar panels are always functioning at their best.{" "}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container> */}

      <ServicePage />

      {/* Floating WhatsApp Icon */}
      <a
        href={whatsappLink} // Link to WhatsApp API with pre-filled message
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#25D366", // WhatsApp green color
          borderRadius: "50%",
          padding: "15px",
          width: "60px", // Set a fixed width
          height: "60px", // Set a fixed height
          fontSize: "30px",
          color: "white",
          display: "flex", // Use flexbox to center the icon
          alignItems: "center", // Vertically center the icon
          justifyContent: "center", // Horizontally center the icon
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          zIndex: 9999,
        }}
      >
        <FaWhatsapp />
      </a>

      {/* Solar Energy Works Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4">How Solar Energy Works</h2>
        <Row className="d-flex justify-content-center">
          {/* Step 1: Collect the Energy */}
          <Col md={3} className="text-center mb-4">
            <div className="q_circle_outer">
              <span className="q_circle_inner">
                <span
                  className="q_circle_inner2"
                  style={{
                    backgroundColor: "#e0e0e0",
                    borderColor: "#e0e0e0",
                    borderWidth: "1px",
                  }}
                >
                  <img
                    src={collectEnergyImg}
                    alt="Collect the Energy"
                    className="q_image_in_circle"
                    style={{
                      width: "120px",
                      height: "120px",
                      objectFit: "contain",
                    }}
                  />
                </span>
              </span>
              <div className="q_circle_text_holder">
                <h4 className="q_circle_title">Collect the Energy</h4>
                <p className="q_circle_text">
                  Solar panels collect energy from the sun through PV modules.
                </p>
              </div>
            </div>
          </Col>

          {/* Step 2: Convert the Power */}
          <Col md={3} className="text-center mb-4">
            <div className="q_circle_outer">
              <span className="q_circle_inner">
                <span
                  className="q_circle_inner2"
                  style={{
                    backgroundColor: "#e0e0e0",
                    borderColor: "#e0e0e0",
                    borderWidth: "1px",
                  }}
                >
                  <img
                    src={convertPowerImg}
                    alt="Convert the Power"
                    className="q_image_in_circle"
                    style={{
                      width: "120px",
                      height: "120px",
                      objectFit: "contain",
                    }}
                  />
                </span>
              </span>
              <div className="q_circle_text_holder">
                <h4 className="q_circle_title">Convert the Power</h4>
                <p className="q_circle_text">
                  The inverter converts DC to AC current.
                </p>
              </div>
            </div>
          </Col>

          {/* Step 3: Transmit the Power */}
          <Col md={3} className="text-center mb-4">
            <div className="q_circle_outer">
              <span className="q_circle_inner">
                <span
                  className="q_circle_inner2"
                  style={{
                    backgroundColor: "#e0e0e0",
                    borderColor: "#e0e0e0",
                    borderWidth: "1px",
                  }}
                >
                  <img
                    src={transmitPowerImg}
                    alt="Transmit the Power"
                    className="q_image_in_circle"
                    style={{
                      width: "120px",
                      height: "120px",
                      objectFit: "contain",
                    }}
                  />
                </span>
              </span>
              <div className="q_circle_text_holder">
                <h4 className="q_circle_title">Transmit the Power</h4>
                <p className="q_circle_text">
                  Transmit the power from the solar station to the electrical
                  grid.
                </p>
              </div>
            </div>
          </Col>

          {/* Step 4: It's Ready */}
          <Col md={3} className="text-center mb-4">
            <div className="q_circle_outer">
              <span className="q_circle_inner">
                <span
                  className="q_circle_inner2"
                  style={{
                    backgroundColor: "#e0e0e0",
                    borderColor: "#e0e0e0",
                    borderWidth: "1px",
                  }}
                >
                  <img
                    src={readyImg}
                    alt="It's Ready"
                    className="q_image_in_circle"
                    style={{
                      width: "120px",
                      height: "120px",
                      objectFit: "contain",
                    }}
                  />
                </span>
              </span>
              <div className="q_circle_text_holder">
                <h4 className="q_circle_title">It's Ready</h4>
                <p className="q_circle_text">
                  Now it’s transmitted to the end user’s usage.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Customer Inquiry Form Section */}
      <Container className="my-0">
        {/* <h2 className="text-center mb-4">Connect with Our Solar Advisor</h2> */}
        <CustomerInquiryForm />
      </Container>
    </div>
  );
};

export default HomePage;
