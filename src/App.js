import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HeroBanner from './Components/HeroBanner';
import FlashSale from './Components/FlashSale';
import FeaturedGalleries from './Components/FeaturedGalleries';
import TrendingArtworks from './Components/TrendingArtworks';
import LimitedEditionBanner from './Components/LimitedEditionBanner';
import Newsletter from './Components/Newsletter';
import Footer from './Components/Footer';
import PaintingPage from './Pages/PaintingPage.jsx';
import View from './Components/View';
import CategorySection from './Components/CategorySection';
import RegistrationAddress from './Pages/RegistrationAddress'; // ✅ Add this route
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
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
        <Route path="/register-address" element={<RegistrationAddress />} /> {/* ✅ NEW ROUTE */}
      </Routes>
    </>
  );
}

export default App;
