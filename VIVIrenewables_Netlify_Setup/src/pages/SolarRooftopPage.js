import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import solarImage from "../assets/images/Solarrooftop1.jpg"; // Import your image
import backgroundImage from "../assets/images/Solarrooftop2.webp";
import headerImage from "../assets/images/Solarrooftop3.webp"; // New banner image

const SolarRooftopPage = () => {
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
    flexDirection: "column", // Stack elements vertically
    alignItems: "flex-start",
    justifyContent: "center",
    //textAlign: "center",
    color: "white",
    //paddingLeft: "9%", // Move text slightly left
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
      background: "rgba(36, 82, 63, 0.4)", // Semi-transparent blue overlay
      backdropFilter: "blur(5px)", // Blur effect
    }}
  ></div>

  {/* Page Titles (Above the Blur Effect) */}
  <div style={{ position: "relative", zIndex: 1, paddingLeft:"8%" }}>
    <h5 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
      SERVICES
    </h5>
    <h5 style={{ color:"green", fontSize: "1.5rem", fontWeight: "500" }}>
      SOLAR ROOFTOP PV POWER PROJECTS
    </h5>
  </div>
</div>

      <Container className="my-5">
        {/* Solar Rooftop PV Power Projects Section */}
        <h2 className="text-center text-success">SOLAR ROOFTOP PV POWER PROJECTS</h2>
        <hr className="mx-auto" style={{ width: "50%", borderTop: "2px solid green" }} />
        <p className="text-center">
          A solar pump is a result of photovoltaic technology converting solar energy into electricity,
          helping the motor and pump to run. The power generates ample amounts of energy to draw water
          from the borewell, river, lake, or pond to the lands.
        </p>

        {/* Process Section */}
        <h2 className="text-center text-success mt-5">PROCESS</h2>
        <hr className="mx-auto" style={{ width: "50%", borderTop: "2px solid green" }} />
        <p className="text-center">
          To understand more scientifically, the execution of the whole process starts with the photovoltaic
          cells in solar modules that convert sunlight into Direct Current (DC) electrical energy. This DC energy
          is then fed to the Motor Pump Set via Pump Controller in case of DC pumps or via Variable Frequency Drive (VFD)
          in case of AC pumps (VFD controls the speed of the motor). The pumping system is a combination of an impeller
          and a motor; the impeller propels water movement, and the motor drives the pump. The water finally is propelled
          out of the borewell/river/lake/pond through the pipe so that water can then be fed to the fields for irrigation
          and other purposes.
        </p>

        {/* Solar Energy Image */}
        <div className="text-center mt-4">
          <img 
            src={solarImage} 
            alt="Solar Energy Electric Water Pump" 
            className="img-fluid" 
            style={{ maxWidth: "80%", height: "auto" }}
          />
        </div>

        {/* New Section - Additional Text After Image */}
        <p className="text-center mt-4">
          Even though the water output varies during the day depending upon varying solar irradiance, yet it does not cause major issues
          and gives various benefits in return; to count a few of the perks, the solar pump sets us free from the high expenses of diesel
          and helps higher yield during the daytime when crops get all the necessary ingredients – sunlight and water!
        </p>

        {/* WHY TO CHOOSE IT Section */}
        <div 
          className="why-to-choose-it text-center mt-5 p-5" 
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
          }}
        >
          <h2 className="fw-bold">WHY TO CHOOSE IT</h2>
          <hr className="mx-auto" style={{ width: "50%", borderTop: "2px solid white" }} />
          <p>
            It helps people to output water across all seasons to cultivate multiple crops every year all at the cost 
            of the one-time investment and then zero running costs (free sunlight) for many years to come! It makes it 
            easier for farmers to cultivate the land during the daytime rather than at night when the grid remains erratic. 
            Even the drip and sprinkler systems can be connected with the solar system to further improve crop yield.
          </p>
          <p>
            The hardest part of any system is the maintenance; the solar system needs no maintenance except regular 
            cleaning of the modules. As there are no consumables, therefore it adds to the ease of operation. As the 
            water can be harnessed at any time of the day, the user can plan their other activities independently which 
            might add to the relief. Not only is it a relief to the people but also the environment as it contributes 
            to the reduction of carbon emissions and pollution.
          </p>
        </div>

        {/* HOW TO OPERATE / MUST KNOW BEFORE USING Section */}
        <div className="mt-5 mx-auto text-center" style={{ maxWidth: "900px" }}>
          <h2 className="text-center text-success">HOW TO OPERATE / MUST KNOW BEFORE USING</h2>
          <hr className="mx-auto" style={{ width: "50%", borderTop: "2px solid green" }} />
          <p className="text-center" style={{ fontSize: "14px" }}>
            Before using, it is necessary for the user to check the connections and cables periodically for any damages and reports.
            Apart from that, one must always operate the controller with dry hands due to the obvious risk of electric shock.
          </p>

          {/* Tips List in Two Columns */}
          <Row className="mt-4">
            <Col md={6}>
              <p style={{ fontSize: "14px" }}><FaCheckCircle className="text-success" /> By setting the tracker to the suggested position, you can get the most accurate results.</p>
              <p style={{ fontSize: "14px" }}><FaCheckCircle className="text-success" /> After sunset, when operating in manual mode, modules must be brought to a stow position.</p>
              <p style={{ fontSize: "14px" }}><FaCheckCircle className="text-success" /> Keeping the controller box locked is a mandatory step that needs to be followed.</p>
              <p style={{ fontSize: "14px" }}><FaCheckCircle className="text-success" /> The only thing every user must be careful about is not to replace any modules.</p>
            </Col>

            <Col md={6}>
              <p style={{ fontSize: "14px" }}><FaCheckCircle className="text-success" /> One must remain mindful of checking the systems after storms and heavy rains.</p>
              <p style={{ fontSize: "14px" }}><FaCheckCircle className="text-success" /> After sunset, modules must be brought to a stow position which is parallel to the earth.</p>
              <p style={{ fontSize: "14px" }}><FaCheckCircle className="text-success" /> Lastly, one must understand that not everything depends on your power system.</p>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default SolarRooftopPage;
