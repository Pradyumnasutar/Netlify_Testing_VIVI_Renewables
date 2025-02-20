import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { FaSolarPanel, FaWater, FaStreetView, FaPlug } from "react-icons/fa"; // Import icons for each product
import { FaArrowUpFromWaterPump } from "react-icons/fa6";
// Import images
import solarPlateImage from "../assets/images/diffsolarplates.jpg"; // Replace with your actual image path
import waterHeatingImage from "../assets/images/waterheatingsolar.jpg"; // Replace with your actual image path
import streetLightImage from "../assets/images/streetsolar.jpg"; // Replace with your actual image path
import solarInverterImage from "../assets/images/solarInverter.jpg"; // Replace with your actual image path
import solarPumpImage from "../assets/images/solar-pump.png";
import "../assets/CSS/Products.css";

const ProductsPage = () => {
  return (
    <Container className="my-5">
      <div className="ms-3">
        <h1 className="text-center mb-4 ourservicehead">OUR PRODUCTS</h1>
      </div>
      <Row>
        {/* Solar Plate Card */}
        <Col md={4} sm={6} className="mb-4 d-flex justify-content-center">
          <Card className="shadow-sm card-hover">
            <Card.Img variant="top" src={solarPlateImage} alt="Solar Plate" />
            <Card.Body className="text-center">
              <FaSolarPanel
                size={50}
                color="#28a745"
                className="d-flex justify-content-center mx-auto"
              />
              <Card.Title className="mt-3">Solar Plate</Card.Title>
              <Card.Text>
                High-efficiency solar panels that help harness renewable energy
                to power your home or business.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Water Heating Solar Card */}
        <Col md={4} sm={6} className="mb-4 d-flex justify-content-center">
          <Card className="shadow-sm card-hover">
            <Card.Img
              variant="top"
              src={waterHeatingImage}
              alt="Water Heating Solar"
            />
            <Card.Body className="text-center">
              <FaWater
                size={50}
                color="#28a745"
                className="d-flex justify-content-center mx-auto"
              />
              <Card.Title className="mt-3">Water Heating Solar</Card.Title>
              <Card.Text>
                Energy-efficient solar water heaters designed to provide hot
                water using the sun's renewable energy.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Street and Outdoor Light Card */}
        <Col md={4} sm={6} className="mb-4 d-flex justify-content-center">
          <Card className="shadow-sm card-hover">
            <Card.Img
              variant="top"
              src={streetLightImage}
              alt="Street and Outdoor Light"
            />
            <Card.Body className="text-center">
              <FaStreetView
                size={50}
                color="#28a745"
                className="d-flex justify-content-center mx-auto"
              />
              <Card.Title className="mt-3">Street & Outdoor Lights</Card.Title>
              <Card.Text>
                Solar-powered street and outdoor lights that provide reliable
                lighting for public spaces and homes.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Solar Inverters Card */}
        <Col md={4} sm={6} className="mb-4 d-flex justify-content-center">
          <Card className="shadow-sm card-hover">
            <Card.Img
              variant="top"
              src={solarInverterImage}
              alt="Solar Inverters"
            />
            <Card.Body className="text-center">
              <FaPlug
                size={50}
                color="#28a745"
                className="d-flex justify-content-center mx-auto"
              />
              <Card.Title className="mt-3">Solar Inverters</Card.Title>
              <Card.Text>
                Our solar inverters efficiently convert DC energy from solar
                panels into AC power for your home.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Solar Pump Card */}
        <Col md={4} sm={6} className="mb-4 d-flex justify-content-center">
          <Card className="shadow-sm card-hover">
            <Card.Img variant="top" src={solarPumpImage} alt="Solar Pump" />
            <Card.Body className="text-center">
              <FaArrowUpFromWaterPump
                size={50}
                color="#28a745"
                className="d-flex justify-content-center mx-auto"
              />
              <Card.Title className="mt-3">Solar Pump</Card.Title>
              <Card.Text>
                Our Solar Water Pump harnesses solar energy to efficiently pump
                water for agricultural, domestic, and industrial use, ensuring a
                sustainable and cost-effective solution.
              </Card.Text>

              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductsPage;
