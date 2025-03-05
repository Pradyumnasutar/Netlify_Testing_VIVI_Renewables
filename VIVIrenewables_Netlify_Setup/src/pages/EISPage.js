import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaArrowsAlt, FaAward, FaClock } from "react-icons/fa"; // Icons for the section

function EISPage (){
  return (
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
          Development Projects in residential, commercial, and industrial projects. This is why we hold the ‘A-Class Electrical 
          Licence’ that enables us to provide Turnkey Electrical and Civil Infrastructure support exclusively in the field of the 
          renewable energy industry. We build from scratch; therefore, REI-INFRA does trading of all electrical equipment and materials 
          like Energy Metres, CTs, PTs, MS or HDGI Poles, Channels, Fabrication material, Insulators, Isolators, Line Conductors, Cables, 
          Transformers, and everything that might fall in your count!
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
        
        <Row className="justify-content-center mt-4">
          <Col md={8}>
            <p>
              We will provide you with it all. Apart from the quality, we also get the spotlight due to the vast services we provide in 
              each field! There is hardly anything that you would not find from us. Also, if you are looking for simple, affordable, and 
              augmentation work in your existing Switchyards and Substations, you still can count upon us. Not only that, but we also 
              provide you with all types of earthing materials and their installation. Not only that, we empower you by enabling you to 
              access the power sale and purchase by providing ABT/SEM Metering work. NET Metering and Solar Generation Supply and 
              Installation under Net metering Policy is another field of our mastery.
            </p>
          </Col>
        </Row>
      </motion.section>

      {/* What Makes Us Different Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-5"
      >
        <h2 className="text-success">WHAT MAKES US DIFFERENT?</h2>
        <p className="px-3">
          Apart from the versatility, quality, and rapidness in providing our services, we also have mastery in every aspect of 
          each service that we provide to all the generations of the system. We also bring you ease at all costs despite the age 
          of the machine.
        </p>
        
        <Row className="justify-content-center my-4">
          {/* Versatility */}
          <Col md={4} className="text-center">
            <FaArrowsAlt size={50} className="text-success" />
            <h4 className="mt-2 text-success">VERSATILITY</h4>
            <p>Providing all necessary mechanicals required for services and installations.</p>
          </Col>

          {/* Quality */}
          <Col md={4} className="text-center">
            <FaAward size={50} className="text-success" />
            <h4 className="mt-2 text-success">QUALITY</h4>
            <p>Ensuring high-standard materials and equipment for long-lasting solutions.</p>
          </Col>

          {/* Rapidness */}
          <Col md={4} className="text-center">
            <FaClock size={50} className="text-success" />
            <h4 className="mt-2 text-success">RAPIDNESS</h4>
            <p>Delivering efficient and timely solutions with expertise.</p>
          </Col>
        </Row>

        <p className="px-3">
          The line we exceed is by providing mechanicals required for our services and your installations. This, along with the 
          surety of quality, also gives long life to our consumers' product results. To specify, we trade LT HT & EHV Electrical 
          Equipment like Transformers, Energy Metres, CTs, PTs, Insulators, Isolators, Conductors, MS & HDGI poles, Channels, 
          Fabrication material, Earthing material, and various other electrical equipment.
        </p>
      </motion.section>
    </Container>
  );
};

export default EISPage;
