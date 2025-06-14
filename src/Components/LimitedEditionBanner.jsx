import React, { useState, useEffect } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { motion } from "framer-motion";

// Import the images from the Assets folder
import image1 from "../Assets/Painting.png";
import image2 from "../Assets/Sculptures.png";
import image3 from "../Assets/Photography.png";
import image4 from "../Assets/Digital Art.png";

// Array of images and corresponding titles for the carousel
const carouselItems = [
  {
    image: image1,
    title: "Ocean Waves",
    description:
      "A vibrant painting capturing the dynamic beauty of ocean waves.",
  },
  {
    image: image2,
    title: "City Lights",
    description: "A stunning sculpture reflecting the glow of urban nightlife.",
  },
  {
    image: image3,
    title: "Forest Path",
    description: "A breathtaking photograph of a serene forest trail.",
  },
  {
    image: image4,
    title: "Desert Sunset",
    description:
      "A digital artwork showcasing the vivid hues of a desert dusk.",
  },
];

// Animation variants for text section
const textVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// Animation variants for navigation arrows
const arrowVariants = {
  initial: { scale: 1, opacity: 0.8 },
  hover: { scale: 1.2, opacity: 1, transition: { duration: 0.2 } },
  tap: { scale: 0.9, transition: { duration: 0.1 } },
};

// Animation variants for pagination dots
const dotVariants = {
  active: {
    scale: 1.2,
    backgroundColor: "#000",
    transition: { duration: 0.3 },
  },
  inactive: {
    scale: 1,
    backgroundColor: "#e0e0e0",
    transition: { duration: 0.3 },
  },
};

// Animation variants for container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, ease: "easeIn" } },
};

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
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Carousel Section */}
      <Box
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        sx={{
          width: "100%",
          bgcolor: "#fff",
          py: { xs: 6, md: 10 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: { xs: "auto", md: "500px" },
        }}
      >
        <Box
          sx={{
            maxWidth: "1100px",
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: 2, md: 4 },
            position: "relative",
            px: { xs: 2, md: 0 },
          }}
        >
          {/* Image */}
          <Box
            component={motion.img}
            src={carouselItems[activeIndex].image}
            alt={carouselItems[activeIndex].title}
            sx={{
              width: { xs: "100%", md: "479px" },
              height: { xs: "auto", md: "359px" },
              maxWidth: "479px",
              borderRadius: 0,
              objectFit: "cover",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            key={activeIndex}
          />

          {/* Navigation Arrows */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: { xs: "100%", md: "auto" },
              position: { xs: "static", md: "absolute" },
              top: { md: "50%" },
              transform: { md: "translateY(-50%)" },
              left: { md: "calc(-50px + 8px)" },
              right: { md: "8px" },
              px: { xs: 2, md: 0 },
              mt: { xs: 2, md: 0 },
              gap: 5,
            }}
          >
            <IconButton
              component={motion.button}
              variants={arrowVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              onClick={handlePrev}
              sx={{
                bgcolor: "rgba(255, 255, 255, 0.8)",
                "&:hover": { bgcolor: "rgba(255, 255, 255, 1)" },
              }}
            >
              <ArrowBackIosNew />
            </IconButton>
            <IconButton
              component={motion.button}
              variants={arrowVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              onClick={handleNext}
              sx={{
                bgcolor: "rgba(255, 255, 255, 0.8)",
                "&:hover": { bgcolor: "rgba(255, 255, 255, 1)" },
              }}
            >
              <ArrowForwardIos />
            </IconButton>
          </Box>

          {/* Text Section */}
          <Box
            component={motion.div}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            key={`text-${activeIndex}`}
            sx={{
              textAlign: { xs: "center", md: "left" },
              mt: { xs: 4, md: 0 },
              ml: { md: 2 },
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              maxWidth: { xs: "100%", md: "400px" },
            }}
          >
            <Typography
              variant="overline"
              sx={{
                fontWeight: "bold",
                backgroundColor: "#f2f2f2",
                px: 2,
                py: 0.5,
                borderRadius: 1,
                display: "inline-block",
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
              {carouselItems[activeIndex].description}
            </Typography>

            <Typography variant="h6" fontWeight="bold">
              $599{" "}
              <Typography
                component="span"
                variant="body2"
                sx={{ color: "gray", ml: 1 }}
              >
                USD
              </Typography>
            </Typography>

            <Button
              variant="contained"
              sx={{
                mt: 2,
                bgcolor: "#000",
                px: 4,
                py: 1.5,
                fontWeight: "bold",
                "&:hover": { bgcolor: "#333" },
                alignSelf: { xs: "center", md: "flex-start" },
              }}
            >
              CLAIM YOURS
            </Button>
          </Box>
        </Box>

        {/* Pagination Dots */}
        <Box display="flex" justifyContent="center" mt={10} gap={3}>
          {carouselItems.map((_, index) => (
            <Box
              key={index}
              component={motion.div}
              variants={dotVariants}
              animate={index === activeIndex ? "active" : "inactive"}
              sx={{
                width: index === activeIndex ? 50 : 30,
                height: 4,
                bgcolor: index === activeIndex ? "#000" : "#e0e0e0",
                borderRadius: 10,
                cursor: "pointer",
              }}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default LimitedEditionBanner;
