import React from 'react';
import { Carousel, Container, Row, Col,Card } from 'react-bootstrap';
import solar1 from '../assets/homesollar.jpg';
import solar01 from '../assets/residentialsolar.jpg';
import solar2 from '../assets/Gardensolar.jpg';
import solar02 from '../assets/solarcleaning.jpg';
import solar3 from '../assets/homeSolar.jpg';
import CustomerInquiryForm from '../components/CustomerInquiryForm';
import solarInstallationImg from '../assets/2manwithsolarplates.jpg'; // Update the path to your actual image
import maintenanceImg from '../assets/solarMaintenance.jpg'; // Update the path to your actual image
import cleaningImg from '../assets/solar-panel-cleaning-service.jpg';
import collectEnergyImg from '../assets/collectEnergy.png'; // Example image
import convertPowerImg from '../assets/convertPower.png'; // Example image
import transmitPowerImg from '../assets/transmitPower.png'; // Example image
import readyImg from '../assets/readyPower.png'; // Example image


const HomePage = () => {
  return (
    <div>
      
      {/* <h1 className="text-center my-4"> A pioneering and leading solar company in India</h1> */}
      {/* Carousel with custom class */}
      <Carousel className="custom-carousel">
      <Carousel.Item>
          <img
            className="d-block w-100"
            src={solar01}
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3>First Slide</h3> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={solar1}
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3>First Slide</h3> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={solar2}
            alt="Second slide"
          />
          <Carousel.Caption>
            {/* <h3>Second Slide</h3> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={solar02}
            alt="Second slide"
          />
          <Carousel.Caption>
            {/* <h3>Second Slide</h3> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={solar3}
            alt="Third slide"
          />
          <Carousel.Caption>
            {/* <h3>Third Slide</h3> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      

{/* New Section with Heading and Paragraph */}
<Container className="my-5">
        <h1 className="text-center my-4">We Are India’s Leading Rooftop Solar Panel Company</h1>
        <p>
          ViVi Renewables has close to 3 decades of experience as a leader and innovator in the renewable energy space. 
          Our varied expertise includes all major components of solar power systems and solutions. 
          Our aim is to be a solar energy brand that evokes trust, confidence, and reliability. 
          We guide customers into taking the right decisions for all their solar energy needs.
        </p>
      </Container>

{/* Our Services Section */}
<Container className="my-5">
      <h2 className="text-center mb-4">Our Services</h2>
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
                We provide top-quality rooftop solar installation services that help you harness the power of the sun efficiently and affordably.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

{/* Cleaning Card */}
<Col md={4} className="mb-4">
          <Card className="text-center h-100">
            <Card.Img 
              variant="top" 
              src={cleaningImg} 
              alt="Cleaning" 
              className="card-img-fixed" 
            />
            <Card.Body>
              <Card.Title>Cleaning</Card.Title>
              <Card.Text>
                We offer professional cleaning services to keep your solar panels clean and operating at maximum efficiency.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Maintenance & Repair Card */}
        <Col md={4} className="mb-4">
          <Card className="text-center h-100">
            <Card.Img 
              variant="top" 
              src={maintenanceImg} 
              alt="Maintenance & Repair" 
              className="card-img-fixed" 
            />
            <Card.Body>
              <Card.Title>Maintenance & Repair</Card.Title>
              <Card.Text>
                Our team offers expert maintenance and repair services to ensure your solar panels are always functioning at their best.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        
      </Row>
    </Container>

{/* Solar Energy Works Section */}
    <Container className="my-5">
      <h2 className="text-center mb-4">How Solar Energy Works</h2>
      <Row className="d-flex justify-content-center">
        {/* Step 1: Collect the Energy */}
        <Col md={3} className="text-center mb-4">
          <div className="q_circle_outer">
            <span className="q_circle_inner">
              <span className="q_circle_inner2" style={{ backgroundColor: '#e0e0e0', borderColor: '#e0e0e0', borderWidth: '1px' }}>
                <img src={collectEnergyImg} alt="Collect the Energy" className="q_image_in_circle" style={{ width: '120px', height: '120px', objectFit: 'contain' }} />
              </span>
            </span>
            <div className="q_circle_text_holder">
              <h4 className="q_circle_title">Collect the Energy</h4>
              <p className="q_circle_text">Solar panels collect energy from the sun through PV modules.</p>
            </div>
          </div>
        </Col>

        {/* Step 2: Convert the Power */}
        <Col md={3} className="text-center mb-4">
          <div className="q_circle_outer">
            <span className="q_circle_inner">
              <span className="q_circle_inner2" style={{ backgroundColor: '#e0e0e0', borderColor: '#e0e0e0', borderWidth: '1px' }}>
                <img src={convertPowerImg} alt="Convert the Power" className="q_image_in_circle" style={{ width: '120px', height: '120px', objectFit: 'contain' }} />
              </span>
            </span>
            <div className="q_circle_text_holder">
              <h4 className="q_circle_title">Convert the Power</h4>
              <p className="q_circle_text">The inverter converts DC to AC current.</p>
            </div>
          </div>
        </Col>

        {/* Step 3: Transmit the Power */}
        <Col md={3} className="text-center mb-4">
          <div className="q_circle_outer">
            <span className="q_circle_inner">
              <span className="q_circle_inner2" style={{ backgroundColor: '#e0e0e0', borderColor: '#e0e0e0', borderWidth: '1px' }}>
                <img src={transmitPowerImg} alt="Transmit the Power" className="q_image_in_circle" style={{ width: '120px', height: '120px', objectFit: 'contain' }} />
              </span>
            </span>
            <div className="q_circle_text_holder">
              <h4 className="q_circle_title">Transmit the Power</h4>
              <p className="q_circle_text">Transmit the power from the solar station to the electrical grid.</p>
            </div>
          </div>
        </Col>

        {/* Step 4: It's Ready */}
        <Col md={3} className="text-center mb-4">
          <div className="q_circle_outer">
            <span className="q_circle_inner">
              <span className="q_circle_inner2" style={{ backgroundColor: '#e0e0e0', borderColor: '#e0e0e0', borderWidth: '1px' }}>
                <img src={readyImg} alt="It's Ready" className="q_image_in_circle" style={{ width: '120px', height: '120px', objectFit: 'contain' }} />
              </span>
            </span>
            <div className="q_circle_text_holder">
              <h4 className="q_circle_title">It's Ready</h4>
              <p className="q_circle_text">Now it’s transmitted to the end user’s usage.</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>

      {/* Customer Inquiry Form Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Connect with Our Solar Advisor</h2>
        <CustomerInquiryForm />
      </Container>
    </div>
  );
};

export default HomePage;
