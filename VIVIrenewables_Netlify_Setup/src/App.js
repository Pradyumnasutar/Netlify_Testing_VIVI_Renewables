import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/Navbar';

import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ServicePage from './pages/ServicePage';
import ProductsPage from './pages/ProductsPage';
import CustomerInquiryPage from './components/CustomerInquiryForm';
import FooterComponent from './components/Footer';
import OpenPowerAccessService from './pages/OpenPowerAccessService';
import EISPage from './pages/EISPage';
import SolarRooftopPage from './pages/SolarRooftopPage';
import OperationMaintenancePage from './pages/OperationMaintenancePage';
import Test22 from './pages/Test22';

function App() {
  return (
    <Router>
      <NavbarComponent />  {/* Navbar at the top */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/inquiry" element={<CustomerInquiryPage />} />
        <Route path="/openpowerservice" element={<OpenPowerAccessService />} />
        <Route path="/eis-service" element={<EISPage />} />
        <Route path="/solar-rooftop" element={<SolarRooftopPage />} />
        {/* <Route path="/operation-maintenance" element={<OperationMaintenancePage />} /> */}
        <Route path="/test22" element={<Test22 />} />
      </Routes>
      <FooterComponent />  {/* Footer at the bottom of every page */}
    </Router>
  );
}

export default App;
