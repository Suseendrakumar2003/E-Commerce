
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
import PaintingPage from './Pages/PaintingPage';
import View from './Components/View';
import CategorySection from './Components/CategorySection';
import RegistrationAddress from './Pages/RegistrationAddress';



export default function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';

  return (
    <>
      {!isLoginPage && <Navbar />}
      <Routes>
        <Route path="/" element={<LoginPage />} />
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
        <Route path="/paintings" element={<PaintingPage />} />
        <Route path="/view" element={<View />} />
        <Route path="/register-address" element={<RegistrationAddress />} />
      </Routes>
    </>
  );
}