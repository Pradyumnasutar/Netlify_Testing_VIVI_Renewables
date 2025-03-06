import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaArrowsAlt, FaAward, FaClock } from "react-icons/fa";
import headerImage from "../assets/images/eispage1.jpg"; // Add your image path

function EISPage (){
  return (
    <>
      {/* Header Section with Background Image and Blur Effect */}
      <div
        className="header-banner"
        style={{
          position: "relative",
          backgroundImage: `url(${headerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          color: "white",
          overflow: "hidden",
        }}
      >
        {/* Blue Blur Effect Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(59, 88, 77, 0.4)", // Semi-transparent blue overlay
            backdropFilter: "blur(2px)", // Blur effect
          }}
        ></div>

        {/* Page Titles */}
        <div style={{ position: "relative", zIndex: 1, paddingLeft: "8%" }}>
          <h2 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>SERVICES</h2>
          <h4 style={{ color: "green", fontSize: "1.5rem", fontWeight: "500" }}>
            ELECTRICAL INFRASTRUCTURE SERVICES
          </h4>
        </div>
      </div>

      {/* Main Content Section */}
      <Container fluid className="my-5">
        {/* Our Stand Section */}
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center py-5"
        >
          <h2 className="text-success">OUR STAND</h2>
          <p className="px-3">
            REI-INFRA with all its capabilities provides the best Turnkey Solutions to all LT HT & EHV Electrical Infrastructure & 
            Development Projects in residential, commercial, and industrial projects.
          </p>
        </motion.section>

        {/* How We Help Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-white py-5 help-section"
        >
          <h2>HOW WE HELP?</h2>
          <h4 className="mt-3">DO YOU HAVE ANY TYPES OF NEW SWITCHYARDS AND SUBSTANCES?</h4>
          <h5 className="mt-2">OR</h5>
          <h4>ARE YOU LOOKING FOR AN LT HT & EHV DISTRIBUTION AND TRANSMISSION LINE MATERIAL SUPPLY AND INSTALLATION WORK?</h4>
        </motion.section>

        {/* What Makes Us Different Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center py-5"
        >
          <h2 className="text-success">WHAT MAKES US DIFFERENT?</h2>
          <Row className="justify-content-center my-4">
            <Col md={4} className="text-center">
              <FaArrowsAlt size={50} className="text-success" />
              <h4 className="mt-2 text-success">VERSATILITY</h4>
              <p>Providing all necessary mechanicals required for services and installations.</p>
            </Col>

            <Col md={4} className="text-center">
              <FaAward size={50} className="text-success" />
              <h4 className="mt-2 text-success">QUALITY</h4>
              <p>Ensuring high-standard materials and equipment for long-lasting solutions.</p>
            </Col>

            <Col md={4} className="text-center">
              <FaClock size={50} className="text-success" />
              <h4 className="mt-2 text-success">RAPIDNESS</h4>
              <p>Delivering efficient and timely solutions with expertise.</p>
            </Col>
          </Row>
        </motion.section>
      </Container>
    </>
  );
};

export default EISPage;
