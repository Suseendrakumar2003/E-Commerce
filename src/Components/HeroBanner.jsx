import { useState, useEffect } from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import banner from '../Assets/HeroBanner.png';

// Array of banner images (extend this with more images as needed)
const banners = [
  banner, // Reuse HeroBanner.png; add more images here, e.g., banner2, banner3
  banner,
  banner,
];

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  // Automatic slide transition every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000); // 5 seconds

    // Cleanup timer on component unmount
    return () => clearInterval(timer);
  }, []);

  // Handle left arrow click
  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  // Handle right arrow click
  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  // Handle dot click
  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  // Handle Shop Now button click
  const handleShopNow = () => {
    navigate('/shop');
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: '80vh', md: '90vh' },
        backgroundImage: `url(${banners[currentSlide]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      {/* Left Arrow */}
      <IconButton
        sx={{
          position: 'absolute',
          left: 20,
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: 'white',
          boxShadow: 1,
          '&:hover': { backgroundColor: '#eee' },
        }}
        onClick={handlePrevSlide}
      >
        <ArrowBackIosNew fontSize="small" />
      </IconButton>

      {/* Right Arrow */}
      <IconButton
        sx={{
          position: 'absolute',
          right: 20,
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: 'white',
          boxShadow: 1,
          '&:hover': { backgroundColor: '#eee' },
        }}
        onClick={handleNextSlide}
      >
        <ArrowForwardIos fontSize="small" />
      </IconButton>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: '600',
            mb: 1,
            color: '#222',
            textTransform: 'uppercase',
            fontSize: { xs: '1.5rem', md: '2rem' },
            letterSpacing: '0.05em',
          }}
        >
          Flash Sale
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 3,
            maxWidth: '420px',
            mx: 'auto',
            color: '#333',
            fontSize: '0.9rem',
            fontWeight: 400,
          }}
        >
          Discover exceptional artworks from talented{' '}
          <Box component="span" sx={{ color: '#ce2c44', fontWeight: 500 }}>
            artists worldwide
          </Box>
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: 'black',
            color: 'white',
            textTransform: 'none',
            px: 3,
            py: 0.8,
            fontSize: '0.85rem',
            borderRadius: 0,
            boxShadow: 'none',
            '&:hover': {
              backgroundColor: '#222',
            },
          }}
          onClick={handleShopNow}
        >
          Shop Now
        </Button>

        {/* Carousel Dots */}
        <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
          {banners.map((_, index) => (
            <Box
              key={index}
              sx={{
                width: 8,
                height: 8,
                backgroundColor: currentSlide === index ? '#000' : '#ccc',
                borderRadius: '50%',
                cursor: 'pointer',
              }}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </Box>
      </motion.div>
    </Box>
  );
};

export default HeroBanner;