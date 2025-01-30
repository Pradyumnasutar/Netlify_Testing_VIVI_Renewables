import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/Navbar';

import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ServicePage from './pages/ServicePage';
import CustomerInquiryPage from './components/CustomerInquiryForm';
import FooterComponent from './components/Footer';

function App() {
  return (
    <Router>
      <NavbarComponent />  {/* Navbar at the top */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        {/* Uncomment these lines when services and products pages are available */}
        <Route path="/services" element={<ServicePage />} />
        {/* <Route path="/products" element={<ProductsPage />} /> */}
        <Route path="/inquiry" element={<CustomerInquiryPage />} />
      </Routes>
      <FooterComponent />  {/* Footer at the bottom of every page */}
    </Router>
  );
}

export default App;
