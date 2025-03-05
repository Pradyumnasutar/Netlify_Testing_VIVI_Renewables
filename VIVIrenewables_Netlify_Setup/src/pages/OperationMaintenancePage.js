import React from "react";
import { Container } from "react-bootstrap";
import { FaCheckCircle, FaBroom, FaDollarSign, FaClock, FaEye } from "react-icons/fa";
import solarImage from "../assets/images/operationmaintenance1.jpg"; // Ensure the image path is correct

const OperationMaintenancePage = () => {
  return (
    <div>
      {/* Top Section: Importance of O&M */}
      <Container className="my-5 text-center">
        <h2 className="text-success">IMPORTANCE OF O&M</h2>
        <hr className="section-divider" />
        <p className="section-text">
          If you are missing out on Operations and Maintenance (O&M), then you probably need to rethink the promised results that this system provides you with. 
          Operations and Maintenance (O&M) is an integral part of any Rooftop Solar PV System. O&M is responsible for increasing the plant’s lifetime and maintaining 
          efficiency as long as the system works. You might not recognize the importance of efficiency and machine life, but when it comes to safety, it becomes undeniable. 
          Since an RTPV system is an electrical system with both AC and DC components usually at appreciably high voltages, safety also becomes a prime concern for which 
          proper O&M must be performed. By ensuring O&M at appropriate time intervals, one can minimize losses and increase energy production from the plant. 
          O&M mainly applies to rooftop plants, but some of these are equally applicable to larger ground-mounted plants as well.
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
                "After sunset, when operating in manual mode, modules must be brought to a stow position which is parallel to the earth. Also, be careful and check safety ropes for damages and immediately replace them when needed.",
                "Keeping the controller box locked is a mandatory step that needs to be followed. Let the professionals take charge if the controller or actuator is not working.",
                "The only thing every user must be careful about is not to replace any modules with modules of other make or rating and not to open the connections between the modules. The junction box must not be operated by an untrained person as it might cause long-term issues and losses.",
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
          Before coming to us as a provider, the system also has things to give out apart from the regular action. It provides you with annual reports & circulation 
          to the user on performance of their power plant. And, even before that, they are provided with the plant performance analysis on a monthly basis.
        </p>
        <p className="section-text">
          From our side, REI INFRA gives out all tools & tackles required for cleaning. We are also quick solution makers, if there is any troubleshooting of the plant in case 
          of any abnormal behaviour/any breakdown, our representative will reach the site within 24 hours and the fault should be resolved within 48 hours apart 
          from the issues related to replacement of modules & inverters.
        </p>
        <p className="section-text">
          There is also constant coordination with vendors and suppliers for under-warranty replacement/rectification of defects in inverters, PV modules, cables, 
          electrical and mechanical equipment as well as for any installed parts!
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

          /* Overlay with Blur Effect */
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
