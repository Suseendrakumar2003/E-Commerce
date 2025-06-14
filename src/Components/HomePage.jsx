
import Navbar from './Navbar';
import HeroBanner from './HeroBanner';
import CategorySection from './CategorySection';
import FlashSale from './FlashSale';
import FeaturedGalleries from './FeaturedGalleries';
import TrendingArtworks from './TrendingArtworks';
import LimitedEditionBanner from './LimitedEditionBanner';
import Newsletter from './Newsletter';
import Footer from "./Footer";


const HomePage = () => {
  return (
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
  );
};

export default HomePage;
