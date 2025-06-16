import React from "react";
import HeroBanner from "../Components/HeroBanner";
import CategorySection from "../Components/CategorySection";
import FlashSale from "../Components/FlashSale";
import FeaturedGalleries from "../Components/FeaturedGalleries";
import TrendingArtworks from "../Components/TrendingArtworks";
import LimitedEditionBanner from "../Components/LimitedEditionBanner";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <CategorySection />
      <FlashSale />
      <FeaturedGalleries />
      <TrendingArtworks />
      <LimitedEditionBanner />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
