import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Col, Row, Card ,Container} from 'react-bootstrap';
import emailjs from 'emailjs-com'; // use emailjs-com package
// import '../assets/CSS/CustomerInquiryForm.css';

const CustomerInquiryForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Check the form data in the console

    // Send the form data to EmailJS
    emailjs.send('service_8f0s8iq', 'template_aedry76', data, 'MpRF9puTlKdQdac8Y')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          alert('Your inquiry has been submitted successfully!');
          window.location.reload();
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('There was an issue submitting your inquiry. Please try again.');
          window.location.reload();
        }
      );

  };

  return (
    <Container className="my-5">
        <h2 className="text-center mb-4">Connect with Our Solar Advisor</h2>
      {/* Wrapper for background image */}
      <div className="background-wrapper">
        {/* Overlay for opacity */}
        
        <div className="background-overlay"></div>

        {/* The form content */}
        <div className="d-flex justify-content-center align-items-center min-vh-100 form-content-wrapper">
          <Card className="shadow-lg p-4" style={{ width: '100%', maxWidth: '600px' }}>
        <Form id="inquiryForm" onSubmit={handleSubmit(onSubmit)}>
          <Row className="mb-3">
            <Col md={12}>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  {...register('name', { required: "Name is required" })}
                  isInvalid={!!errors.name}
                  placeholder="Enter your name"
                />
                <Form.Control.Feedback type="invalid">Name is required</Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={12}>
              <Form.Group controlId="contactNumber">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control
                  type="text"
                  {...register('contactNumber', { required: "Contact number is required" })}
                  isInvalid={!!errors.contactNumber}
                  placeholder="Enter your contact number"
                />
                <Form.Control.Feedback type="invalid">Contact number is required</Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={12}>
              <Form.Group controlId="email">
                <Form.Label>Email ID</Form.Label>
                <Form.Control
                  type="email"
                  {...register('email', { required: "Email is required" })}
                  isInvalid={!!errors.email}
                  placeholder="Enter your email"
                />
                <Form.Control.Feedback type="invalid">Email is required</Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={12}>
              <Form.Group controlId="monthlyBill">
                <Form.Label>Average Monthly Bill (₹)</Form.Label>
                <Form.Control
                  type="number"
                  {...register('monthlyBill', { required: "Monthly bill is required" })}
                  isInvalid={!!errors.monthlyBill}
                  placeholder="Enter your monthly bill"
                />
                <Form.Control.Feedback type="invalid">Monthly bill is required</Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={12}>
              <Form.Group controlId="roofArea">
                <Form.Label>Roof Area (in sqft)</Form.Label>
                <Form.Control
                  type="number"
                  {...register('roofArea', { required: "Roof area is required" })}
                  isInvalid={!!errors.roofArea}
                  placeholder="Enter roof area in sqft"
                />
                <Form.Control.Feedback type="invalid">Roof area is required</Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={12}>
              <Form.Group controlId="pincode">
                <Form.Label>Pincode</Form.Label>
                <Form.Control
                  type="text"
                  {...register('pincode', { required: "Pincode is required" })}
                  isInvalid={!!errors.pincode}
                  placeholder="Enter your pincode"
                />
                <Form.Control.Feedback type="invalid">Pincode is required</Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Button variant="primary" type="submit" className="w-100">
            Submit Inquiry
          </Button>
        </Form>
      </Card>
    </div>
    </div>
    </Container>
  );
};

export default CustomerInquiryForm;
