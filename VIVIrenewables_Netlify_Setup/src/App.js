import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopBar from './components/TopBar'; // Import TopBar component
import NavbarComponent from './components/Navbar';
import FooterComponent from './components/Footer';

import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ServicePage from './pages/ServicePage';
import ProductsPage from './pages/ProductsPage';
import CustomerInquiryPage from './components/CustomerInquiryForm';
import OpenPowerAccessService from './pages/OpenPowerAccessService';
import EISPage from './pages/EISPage';
import SolarRooftopPage from './pages/SolarRooftopPage';
import OperationMaintenancePage from './pages/OperationMaintenancePage';

function App() {
  return (
    <Router>
      <TopBar /> {/* Top bar with Call Us and Email */}
      <NavbarComponent /> {/* Navbar below the top bar */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/inquiry" element={<CustomerInquiryPage />} />
        <Route path="/openpowerservice" element={<OpenPowerAccessService />} />
        <Route path="/eis-service" element={<EISPage />} />
        <Route path="/solar-rooftop" element={<SolarRooftopPage />} />
        <Route path="/operation-maintenance" element={<OperationMaintenancePage />} />
      </Routes>
      <FooterComponent /> {/* Footer at the bottom of every page */}
    </Router>
  );
}

export default App;
