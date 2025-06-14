import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HeroBanner from './Components/HeroBanner';
import CategorySection from './Pages/CategorySection.jsx';
import FlashSale from './Components/FlashSale';
import FeaturedGalleries from './Components/FeaturedGalleries';
import TrendingArtworks from './Components/TrendingArtworks';
import LimitedEditionBanner from './Components/LimitedEditionBanner';
import Newsletter from './Components/Newsletter';
import Footer from './Components/Footer';
import PaintingPage from './Pages/PaintingPage.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Page Route */}
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
        {/* Paintings Page Route */}
        <Route path="/paintings" element={<PaintingPage />} />
      </Routes>
    </Router>
  );
}

export default App;