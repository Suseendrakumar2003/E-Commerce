import React from "react";
import Slider from "react-slick";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from "../Assets/image.png";

const slides = [
  {
    date: "September 12-22",
    title: "Enjoy free home delivery in this summer",
    subtitle: "Designer Dresses - Pick from trendy Designer Dress.",
    backgroundImage: image
  },
  {
    date: "October 01-10",
    title: "New Autumn Arrivals on Sale",
    subtitle: "Best Styles - Shop the latest fashion wear.",
    backgroundImage: image
  },
  {
    date: "November 5-15",
    title: "Winter Collection 2025 Now Live",
    subtitle: "Grab your favorite designer coats & jackets.",
    backgroundImage: image
  }
];

const ArrowLeft = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      top: "50%",
      left: 20,
      transform: "translateY(-50%)",
      zIndex: 1,
      backgroundColor: "white",
      "&:hover": { backgroundColor: "#eee" }
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
      right: 20,
      transform: "translateY(-50%)",
      zIndex: 1,
      backgroundColor: "white",
      "&:hover": { backgroundColor: "#eee" }
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
    autoplaySpeed: 2000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />
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
              display: "flex",
              alignItems: "center",
              pl: { xs: 4, md: 12 },
              color: "#000"
            }}
          >
            <Box maxWidth="500px">
              <Typography variant="subtitle2" sx={{ mb: 1, color: "#777" }}>
                {slide.date}
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, lineHeight: 1.3 }}>
                {slide.title}
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                {slide.subtitle}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#000",
                  color: "#fff",
                  textTransform: "none",
                  px: 3,
                  py: 1,
                  fontWeight: "bold",
                  "&:hover": { backgroundColor: "#222" }
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
