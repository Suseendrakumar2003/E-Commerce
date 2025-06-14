import React from "react";
import Slider from "react-slick";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from "../Assets/hero.png"; // ✅ Make sure this file is inside the src/Assets folder

const slides = [
  {
    date: "September 12-22",
    title: "Enjoy free home delivery in this summer",
    subtitle: "Designer Dresses - Pick from trendy Designer Dress.",
    backgroundImage: image,
  },
  {
    date: "October 01-10",
    title: "New Autumn Arrivals on Sale",
    subtitle: "Best Styles - Shop the latest fashion wear.",
    backgroundImage: image,
  },
  {
    date: "November 5-15",
    title: "Winter Collection 2025 Now Live",
    subtitle: "Grab your favorite designer coats & jackets.",
    backgroundImage: image,
  },
];

const ArrowLeft = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      top: "50%",
      left: 40,
      transform: "translateY(-50%)",
      zIndex: 1,
      backgroundColor: "white",
      width: 50,
      height: 50,
      "&:hover": { backgroundColor: "#eee" },
      color: "#666666",
    }}
  >
    <ArrowBackIos />
  </IconButton>
);

const ArrowRight = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      top: "50%",
      right: 40,
      transform: "translateY(-50%)",
      zIndex: 1,
      backgroundColor: "white",
      width: 50,
      height: 50,
      "&:hover": { backgroundColor: "#eee" },
      color: "#666666",
    }}
  >
    <ArrowForwardIos />
  </IconButton>
);

const CarouselSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000, // 5 seconds
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
  };

  return (
    <Box sx={{ position: "relative", width: "100%", height: "90vh", overflow: "hidden" }}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Box
            key={index}
            sx={{
              height: "90vh",
              backgroundImage: `url(${slide.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                bottom: "10%",
                left: "50%",
                transform: "translateX(-50%)",
                textAlign: "center",
                px: 3,
              }}
            >
              <Typography sx={{ color: "#999999", mb: 2, fontSize: "16px" }}>
                {slide.date}
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  color: "#000000",
                  mb: 2,
                }}
              >
                {slide.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#333333",
                  fontSize: "18px",
                  mb: 3,
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
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  fontSize: "16px",
                  "&:hover": {
                    backgroundColor: "#222",
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
