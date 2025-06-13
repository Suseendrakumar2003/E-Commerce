import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import { motion } from 'framer-motion';

// Import the images from the Assets folder (same as TrendingArtworks)
import artwork1 from '../Assets/artwork 1.png';
import artwork2 from '../Assets/artwork 2.png';
import artwork3 from '../Assets/artwork 3.png';
import artwork4 from '../Assets/artwork 4.png';

// Array of images and corresponding titles for the carousel
const carouselItems = [
  { image: artwork1, title: 'Ocean Waves' },
  { image: artwork2, title: 'City Lights' },
  { image: artwork3, title: 'Forest Path' },
  { image: artwork4, title: 'Desert Sunset' },
];

const LimitedEditionBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Automatic transition every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 5000); // 5000ms = 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Handle navigation
  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: '#fff',
        py: 6,
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center',
        height:'618px'
      }}
    >
      <Box
        sx={{
          maxWidth: '1100px',
          width: '100%',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Left Navigation */}
        <IconButton onClick={handlePrev}>
          <ArrowBackIosNew />
        </IconButton>

        {/* Image */}
        <Box
          component={motion.img}
          src={carouselItems[activeIndex].image}
          alt={carouselItems[activeIndex].title}
          sx={{
            width:"479px",
            height:"359px",
            borderRadius: 0,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
          key={activeIndex} // Key ensures animation triggers on image change
        />

        {/* Right Navigation */}
        <IconButton onClick={handleNext}>
          <ArrowForwardIos />
        </IconButton>

        {/* Text Section */}
        <Box
          sx={{
            textAlign: { xs: 'center', md: 'left' },
            mt: { xs: 4, md: 0 },
            ml: { md: 4 },
            flex: 1,
          }}
        >
          <Typography
            variant="overline"
            sx={{
              fontWeight: 'bold',
              backgroundColor: '#f2f2f2',
              px: 2,
              py: 0.5,
              borderRadius: 1,
              display: 'inline-block',
            }}
          >
            LIMITED EDITION
          </Typography>

          <Typography variant="h5" fontWeight="bold" mt={2}>
            {carouselItems[activeIndex].title}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            mt={1}
            mb={2}
            maxWidth="400px"
          >
            Limited to 50 pieces worldwide. Experience unmatched performance and style.
          </Typography>

          <Typography variant="h6" fontWeight="bold">
            $599{' '}
            <Typography
              component="span"
              variant="body2"
              sx={{ color: 'gray', ml: 1 }}
            >
              USD
            </Typography>
          </Typography>

          <Button
            variant="contained"
            sx={{
              mt: 2,
              bgcolor: '#000',
              px: 4,
              py: 1.5,
              fontWeight: 'bold',
              '&:hover': { bgcolor: '#333' },
            }}
          >
            CLAIM YOURS
          </Button>
        </Box>
      </Box>

      {/* Pagination Dots */}
      <Box display="flex" justifyContent="center" mt={4} gap={2}>
        {carouselItems.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: index === activeIndex ? 30 : 12,
              height: 4,
              bgcolor: index === activeIndex ? '#000' : '#e0e0e0',
              borderRadius: 10,
              cursor: 'pointer',
            }}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default LimitedEditionBanner;