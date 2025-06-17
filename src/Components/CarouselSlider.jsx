import React from "react";
import Slider from "react-slick";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
<<<<<<< HEAD
import "@fontsource/inter"; // Use Inter font
import image from "../Assets/hero.png"; // Replace with your image path
=======
import image from "../Assets/hero.png"; 
>>>>>>> 49a9fc7 (i push my changes code)

const slides = [
  {
    date: "September 12-22",
    title: "Enjoy free home\ndelivery in this summer",
    subtitle: "Designer Dresses - Pick from trendy Designer Dress.",
    backgroundImage: image,
  },
  {
    date: "October 01-10",
    title: "New Autumn Arrivals\non Sale",
    subtitle: "Best Styles - Shop the latest fashion wear.",
    backgroundImage: image,
  },
  {
    date: "November 5-15",
    title: "Winter Collection 2025\nNow Live",
    subtitle: "Grab your favorite designer coats & jackets.",
    backgroundImage: image,
  },
];

// Custom Arrows
const ArrowLeft = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      top: "50%",
      left: 75,
      transform: "translateY(-50%)",
      zIndex: 1,
      backgroundColor: "white",
      border: "2px solid #666666",
      width: 50,
      height: 50,
      color: "#666666",
      "&:hover": { backgroundColor: "#f5f5f5" },
    }}
  >
    <ArrowBackIos fontSize="small" />
  </IconButton>
);

const ArrowRight = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      top: "50%",
      right: 75,
      transform: "translateY(-50%)",
      zIndex: 1,
      backgroundColor: "white",
      border: "2px solid #666666",
      width: 50,
      height: 50,
      color: "#666666",
      "&:hover": { backgroundColor: "#f5f5f5" },
    }}
  >
    <ArrowForwardIos fontSize="small" />
  </IconButton>
);

const CarouselSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
  };

  return (
    <Box sx={{ position: "relative", width: "100%", height: "60vh", overflow: "hidden", fontFamily: "Inter, sans-serif" }}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Box
            key={index}
            sx={{
              height: "60vh",
              backgroundImage: `url(${slide.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              pl: "12%",
              pr: "10%",
              pt: "22vh", // Balanced vertical start
            }}
          >
            <Box sx={{ maxWidth: 480 }}>
              <Typography
                sx={{
                  color: "#999999",
                  fontSize: "14px",
                  mb: 2.5,
                  fontWeight: 500,
                }}
              >
                {slide.date}
              </Typography>

              <Typography
                sx={{
                  fontSize: "30px",
                  fontWeight: 700,
                  color: "#000000",
                  whiteSpace: "pre-line",
                  lineHeight: 1.4,
                  mb: 3,
                }}
              >
                {slide.title}
              </Typography>

              <Typography
                sx={{
                  color: "#444444",
                  fontSize: "14px",
                  mb: 4,
                  fontWeight: 400,
                }}
              >
                {slide.subtitle}
              </Typography>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#000",
                  color: "#fff",
                  textTransform: "none",
                  fontSize: "14px",
                  fontWeight: 600,
                  px: 4,
                  py: 1.3,
                  borderRadius: 0,
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "#222",
                    boxShadow: "none",
                  },
                }}
              >
                Get Started
              </Button>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default CarouselSlider;
