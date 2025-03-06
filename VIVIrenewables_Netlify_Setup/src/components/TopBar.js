import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa"; // Import icons
import "../assets/CSS/TopBar.css"; // Create this CSS file for styling

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="contact-container">
        <div className="contact-info">
          <FaPhone /> <span>Call Us: 7040010890</span>
        </div>
        <div className="email-info">
          <FaEnvelope /> <span>contact@vivirenewables.com</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
