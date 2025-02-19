import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
// import { PiPhoneCallLight } from "react-icons/pi";
import "../assets/CSS/Footer.css";
import madeinIndia from "../assets/IndiaFlag.png";
import Phone from "../assets/logos/phone.png";
import Email from "../assets/logos/email.png";
import Location from "../assets/logos/location1.png";

const FooterComponent = () => {
  return (
    <footer className="footercontainer">
      <Container>
        <Row>
          {/* Left Side: Logo, Contact Info, and Social Media */}
          <Col md={4} className="mb-4">
            <div className="container footerhead">
              <h3 className="vivi-center">ViVi</h3>
              <h3>Renewables</h3>
            </div>

            <p>
              Vivi Renewables is a Professional consultancy firm engaged in
              business of Renewable Power & Electrical Infra Projects.
            </p>
          </Col>

          {/* Middle Side: Solutions */}
          <Col md={4} className="mb-4">
            <h5>Our Solutions</h5>
            <ListGroup>
              <ListGroup.Item className="border-0 p-1 listgroupitem">
                Homes
              </ListGroup.Item>
              <ListGroup.Item className="border-0 p-1 listgroupitem">
                Commercial
              </ListGroup.Item>
              <ListGroup.Item className="border-0 p-1 listgroupitem">
                Housing Society
              </ListGroup.Item>
            </ListGroup>
          </Col>

          {/* Right Side: Quick Links */}
          {/* <Col md={2} className="mb-4 mr-5">
            <h5>Quick Links</h5>
            <ListGroup>
              <ListGroup.Item className="bg-dark text-light border-0 p-1">
                <a href="/" className="text-light">
                  About Us
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark text-light border-0 p-1">
                <a href="/" className="text-light">
                  SolarPro Partner
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark text-light border-0 p-1">
                <a href="/" className="text-light">
                  Sitemap
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-dark text-light border-0 p-1">
                <a href="/" className="text-light">
                  Careers
                </a>
              </ListGroup.Item>
            </ListGroup>
          </Col> */}

          {/* Address Section */}
          <Col md={4} className="mb-4 ps-">
            <div>
              <h5>Contact</h5>
              <ul
                className="p-0"
                style={{ listStyle: "none", textAlign: "", padding: 0 }}
              >
                {/* Location */}
                <li
                  style={{
                    display: "flex",
                    alignItems: "",
                    justifyContent: "",
                    marginBottom: "8px",
                  }}
                >
                  <img
                    src={Location}
                    alt="Location Icon"
                    style={{ width: "6%", height: "2rem", marginRight: "6px" }}
                  />
                  <p style={{ margin: 0 }}>
                    Yugandhar Appartment, <br />
                    Pathare Wasti, <br />
                    Lohegaon, Pune, Maharashtra 411047
                  </p>
                </li>

                {/* Phone */}
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "",
                    marginBottom: "8px",
                  }}
                >
                  <img
                    src={Phone}
                    alt="Phone Icon"
                    style={{ width: "6%", height: "auto", marginRight: "6px" }}
                  />
                  <p style={{ margin: 0 }}>
                    Phone:{" "}
                    <a href="tel:+919226961194" className="text-light">
                      92 2696 1194
                    </a>
                  </p>
                </li>

                {/* Email */}
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "",
                  }}
                >
                  <img
                    src={Email}
                    alt="Email Icon"
                    style={{ width: "6%", height: "auto", marginRight: "6px" }}
                  />
                  <p style={{ margin: 0 }}>
                    Email:{" "}
                    <a
                      href="mailto:contact@vivirenewables.com"
                      className="text-light"
                    >
                      contact@vivirenewables.com
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </Col>
        </Row>

        <hr className="text-light" />

        <Row className="text-center">
          <Col className="d-flex justify-content-start">
            {/* <p>
              Proudly made in India{' '}
              <img src={madeinIndia} alt="India Flag" style={{ width: '30px', verticalAlign: 'middle' }} />
            </p> */}

            <div className="social-icons">
              <a
                href="https://facebook.com/"
                className="mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://youtube.com/"
                className="mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>
              <a
                href="https://instagram.com/"
                className="mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com/"
                className="mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </Col>
          <Col className="d-flex justify-content-end">
            <p>
              &copy;{new Date().getFullYear()} ViVi Renewables.{" "}
              <img
                src={madeinIndia}
                alt="India Flag"
                style={{ width: "30px", verticalAlign: "middle" }}
              />{" "}
              All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;
