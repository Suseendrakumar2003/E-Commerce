import { Routes, Route } from 'react-router-dom';
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
import CategorySection from './Pages/CategorySection';
import './App.css';

function HomePage() {
  return (
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
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/paintings" element={<PaintingPage />} />
        <Route path="/view" element={<View />} />
      </Routes>
    </>
  );
}

export default App;