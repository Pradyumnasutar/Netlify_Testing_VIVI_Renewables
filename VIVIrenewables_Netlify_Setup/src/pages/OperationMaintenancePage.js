import React from "react";
import { Container } from "react-bootstrap";
import { FaCheckCircle, FaBroom, FaDollarSign, FaClock, FaEye } from "react-icons/fa";
import headerImage from "../assets/images/operationmaintenance2.webp"; // Use the correct image path
import solarImage from "../assets/images/operationmaintenance1.jpg"; // Ensure the image path is correct

function OperationMaintenancePage(){
  return (
    <div>
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
            background: "rgba(58, 39, 119, 0.4)", // Semi-transparent blue overlay
            backdropFilter: "blur(3px)", // Blur effect
          }}
        ></div>

        {/* Page Titles */}
        <div style={{ position: "relative", zIndex: 1, paddingLeft: "8%" }}>
          <h2 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>SERVICES</h2>
          <h4 style={{ color: "green", fontSize: "1.5rem", fontWeight: "700" }}>
            OPERATION & MAINTENANCE SERVICES
          </h4>
        </div>
      </div>

      {/* Top Section: Importance of O&M */}
      <Container className="my-5 text-center">
        <h2 className="text-success">IMPORTANCE OF O&M</h2>
        <hr className="section-divider" />
        <p className="section-text">
          If you are missing out on Operations and Maintenance (O&M), then you probably need to rethink the promised results that this system provides you with. 
          O&M is an integral part of any Rooftop Solar PV System, ensuring efficiency and safety.
        </p>
      </Container>

      {/* Background Image Section with Blur Overlay */}
      <div className="background-section">
        <Container className="d-flex justify-content-between align-items-center">
          {/* Left Blue Box with Icons */}
          <div className="left-box">
            <ul className="icon-list">
              <li>
                <FaBroom className="icon" />
                <span>CLEANING</span>
              </li>
              <li>
                <FaDollarSign className="icon" />
                <span>SAVE MONEY</span>
              </li>
              <li>
                <FaClock className="icon" />
                <span>SAVE TIME</span>
              </li>
              <li>
                <FaEye className="icon" />
                <span>REMOTE MONITORING</span>
              </li>
            </ul>
          </div>

          {/* Right Dark Blue Box */}
          <div className="content-box">
            <h2 className="text-white text-center">EASE OF USE / THINGS TO CONSIDER</h2>
            <hr className="separator" />

            {/* Bullet Points */}
            <ul className="bullet-list">
              {[
                "By setting the tracker to the suggested position, you can get the most accurate results.",
                "After sunset, modules must be brought to a stow position parallel to the earth.",
                "Keeping the controller box locked is mandatory. Let professionals handle issues.",
                "Users must not replace modules or open connections without proper training.",
              ].map((item, index) => (
                <li key={index} className="list-item">
                  <FaCheckCircle className="icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </div>

      {/* New Section: Why Us / What We Provide */}
      <Container className="my-5 text-center">
        <h2 className="text-success">WHY US / WHAT WE PROVIDE</h2>
        <hr className="section-divider" />
        <p className="section-text">
          We provide annual reports, plant performance analysis, and quick troubleshooting. Our team ensures fast response within 24 hours and resolution within 48 hours.
        </p>
      </Container>

      {/* CSS Styles */}
      <style>
        {`
          .section-divider {
            width: 80px;
            border-top: 3px solid green;
            margin: 10px auto 20px;
          }

          .section-text {
            font-size: 14px;
            max-width: 900px;
            margin: 0 auto;
            color: #555;
          }

          .background-section {
            position: relative;
            background-image: url(${solarImage});
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 50px 0;
          }

          .background-section::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 32, 91, 0.4); /* Faint Blue Overlay */
            backdrop-filter: blur(2px); /* Blur Effect */
            z-index: 1;
          }

          .left-box {
            position: relative;
            background-color: rgba(0, 32, 91, 0.9);
            padding: 20px;
            border-radius: 10px;
            max-width: 250px;
            color: #fff;
            z-index: 2;
          }

          .icon-list {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .icon-list li {
            display: flex;
            align-items: center;
            padding: 10px 0;
          }

          .icon-list .icon {
            color: #4CAF50;
            font-size: 20px;
            margin-right: 10px;
          }

          .content-box {
            position: relative;
            background-color: rgba(0, 32, 91, 0.9);
            padding: 30px;
            border-radius: 10px;
            max-width: 800px;
            color: #fff;
            z-index: 2;
          }

          .separator {
            width: 80px;
            border-top: 3px solid #4CAF50;
            margin-bottom: 20px;
          }

          .bullet-list {
            list-style: none;
            padding: 0;
          }

          .bullet-list .list-item {
            display: flex;
            align-items: start;
            margin-bottom: 10px;
          }

          .bullet-list .icon {
            color: #4CAF50;
            font-size: 18px;
            margin-right: 8px;
          }

          @media (max-width: 992px) {
            .background-section {
              flex-direction: column;
              text-align: center;
            }
            .left-box {
              max-width: 100%;
              margin-bottom: 20px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default OperationMaintenancePage;
