import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Components
import LoginPage from './Components/LoginPage';
import Navbar from './Components/Navbar';
import HeroBanner from './Components/HeroBanner';
import FlashSale from './Components/FlashSale';
import FeaturedGalleries from './Components/FeaturedGalleries';
import TrendingArtworks from './Components/TrendingArtworks';
import LimitedEditionBanner from './Components/LimitedEditionBanner';
import Newsletter from './Components/Newsletter';
import Footer from './Components/Footer';
import View from './Components/View';
import CategorySection from './Components/CategorySection';
import PaintingPage from './Pages/PaintingPage';
import RegistrationAddress from './Pages/RegistrationAddress';

import './App.css';

export default function App() {
  const location = useLocation();

  // Show Navbar on all pages except Login page
  const isLoginPage = location.pathname === '/';

  return (
    <>
      {!isLoginPage && <Navbar />}

      <Routes>
        {/* ✅ This is the login page shown first */}
        <Route path="/" element={<LoginPage />} />

        {/* ✅ This is shown after login (on /home route) */}
        <Route
          path="/home"
          element={
            <>
              <HeroBanner />
              <CategorySection />
              <FlashSale />
              <FeaturedGalleries />
              <TrendingArtworks />
              <LimitedEditionBanner />
              <Newsletter />
              <Footer />
            </>
          }
        />

        {/* Other routes */}
        <Route path="/paintings" element={<PaintingPage />} />
        <Route path="/view" element={<View />} />
        <Route path="/register-address" element={<RegistrationAddress />} />
      </Routes>
    </>
  );
}
