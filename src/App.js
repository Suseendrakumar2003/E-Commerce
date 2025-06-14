import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HeroBanner from "./Components/HeroBanner";
import CategorySection from "./Components/CategorySection";
import FlashSale from "./Components/FlashSale";
import FeaturedGalleries from "./Components/FeaturedGalleries";
import TrendingArtworks from "./Components/TrendingArtworks";
import LimitedEditionBanner from "./Components/LimitedEditionBanner";
import Newsletter from "./Components/Newsletter";
import Footer from "./Components/Footer";
import View from "./Components/View";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
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
      <Route path="/view" element={<View />} />
    </Routes>
  );
}

export default App;