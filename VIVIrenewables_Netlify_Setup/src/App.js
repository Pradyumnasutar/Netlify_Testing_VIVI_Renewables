import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import CustomerInquiryPage from './components/CustomerInquiryForm';

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        {/* <Route path="/services" element={<ServicesPage />} />
        <Route path="/products" element={<ProductsPage />} /> */}
        <Route path="/inquiry" element={<CustomerInquiryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
