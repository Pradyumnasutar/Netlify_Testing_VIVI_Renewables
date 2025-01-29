import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import solar1 from '../assets/2manwithsolarplates.jpg';
import solar2 from '../assets/Gardensolar.jpg';
import solar3 from '../assets/homeSolar.jpg';
import CustomerInquiryForm from '../components/CustomerInquiryForm';

const HomePage = () => {
  return (
    <div>
      <h1 className="text-center my-4">Welcome</h1>

      {/* Carousel with custom class */}
      <Carousel className="custom-carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={solar1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First Slide</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={solar2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second Slide</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={solar3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third Slide</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Customer Inquiry Form Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Customer Inquiry</h2>
        <CustomerInquiryForm />
      </Container>
    </div>
  );
};

export default HomePage;
