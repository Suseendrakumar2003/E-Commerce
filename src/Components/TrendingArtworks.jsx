import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  IconButton,
  Rating,
  Snackbar,
  Alert,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Components/CartContext";

// Import the images from the Assets folder
import artwork1 from "../Assets/artwork 1.png";
import artwork2 from "../Assets/artwork 2.png";
import artwork3 from "../Assets/artwork 3.png";
import artwork4 from "../Assets/artwork 4.png";

// Import fonts
import "@fontsource/inter";

const artworks = [
  {
    title: "Ocean Waves",
    artist: "Thomas Miller",
    medium: "Oil on canvas",
    year: 2023,
    rating: 4.9,
    price: 450,
    image: artwork1,
    description:
      "A vibrant depiction of crashing ocean waves under a stormy sky.",
    usersPurchased: 120,
    itemsSold: 85,
  },
  {
    title: "City Lights",
    artist: "Sarah Johnson",
    medium: "Acrylic on wood",
    year: 2023,
    rating: 4.6,
    price: 320,
    image: artwork2,
    description: "An abstract representation of a bustling city at night.",
    usersPurchased: 95,
    itemsSold: 60,
  },
  {
    title: "Forest Path",
    artist: "Michael Brown",
    medium: "Watercolor",
    year: 2023,
    rating: 4.8,
    price: 380,
    image: artwork3,
    description: "A serene watercolor of a quiet path through a lush forest.",
    usersPurchased: 110,
    itemsSold: 75,
  },
  {
    title: "Desert Sunset",
    artist: "Lisa Wang",
    medium: "Digital art",
    year: 2023,
    rating: 4.7,
    price: 290,
    image: artwork4,
    description:
      "A digital artwork capturing the warm hues of a desert sunset.",
    usersPurchased: 80,
    itemsSold: 50,
  },
];

// Animation variants for the header
const headerVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const TrendingArtworks = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [flippedCards, setFlippedCards] = useState({});
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // Handle navigation to View.jsx with artwork data
  const handleViewClick = (artwork) => {
    navigate("/view", { state: { artwork } });
  };

  // Handle adding to cart
  const handleAddToCart = (artwork) => {
    const cartItem = {
      title: artwork.title,
      artist: artwork.artist,
      price: artwork.price,
      image: artwork.image,
    };
    addToCart(cartItem);
    setSnackbarOpen(true); // Show the snackbar alert
  };

  // Handle snackbar close
  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  // Toggle flip state on card click
  const handleCardClick = (index) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <Box sx={{ padding: 10, backgroundColor: "#f5f2ef" }}>
      {/* Header Section with Animation */}
      <motion.div variants={headerVariants} initial="hidden" animate="visible">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 6,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 100,
              fontFamily: '"Optima", "Raleway", sans-serif',
            }}
          >
            Trending Artworks
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography
              variant="body1"
              sx={{
                cursor: "pointer",
                fontSize: "14px",
                color: "#65635F",
              }}
              onClick={() => navigate("/paintings")}
            >
              View All
            </Typography>
            <ArrowForwardIos
              sx={{
                fontSize: "1.1rem",
                cursor: "pointer",
                color: "black",
              }}
            />
          </Box>
        </Box>
      </motion.div>

      {/* Artworks Grid */}
      <Grid
        container
        spacing={3}
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {artworks.map((artwork, index) => (
          <Grid item xs={12} sm={6} md={3} key={index} component="div">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.2,
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              <Box
                sx={{
                  width: 290,
                  height: 454,
                  margin: "1rem auto",
                  perspective: "1000px",
                  cursor: "pointer",
                }}
                onClick={() => handleCardClick(index)}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    transition: "transform 0.6s",
                    transformStyle: "preserve-3d",
                    transform: flippedCards[index]
                      ? "rotateY(180deg)"
                      : "rotateY(0deg)",
                  }}
                >
                  {/* Front Side */}
                  <Card
                    sx={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      backfaceVisibility: "hidden",
                      boxSizing: "border-box",
                      background: "#FFFFFF",
                      border: "1px solid rgba(101, 99, 95, 0.2)",
                      borderRadius: 0,
                      boxShadow: "none",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {/* Image Section */}
                    <Box sx={{ position: "relative", flexShrink: 0 }}>
                      <CardMedia
                        component="img"
                        sx={{
                          width: 288,
                          height: 256,
                          objectFit: "cover",
                          position: "relative",
                          left: 1,
                          top: 1,
                        }}
                        image={artwork.image}
                        alt={artwork.title}
                      />
                      {/* Icons on the Image */}
                      <Box
                        sx={{
                          position: "absolute",
                          top: 12,
                          right: 8,
                          display: "flex",
                          flexDirection: "column",
                          gap: 1,
                          width: 33,
                        }}
                      >
                        <IconButton
                          sx={{
                            width: 33,
                            height: 32,
                            background: "#FFFFFF",
                            boxShadow:
                              "0px 2px 4px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.1)",
                            borderRadius: "50%",
                            "&:hover": { background: "#f0f0f0" },
                            padding: 0,
                          }}
                        >
                          <FavoriteBorderIcon
                            sx={{ width: 16, height: 16, color: "#000" }}
                          />
                        </IconButton>
                        <IconButton
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent card flip
                            handleViewClick(artwork);
                          }}
                          sx={{
                            width: 33,
                            height: 32,
                            background: "#FFFFFF",
                            boxShadow:
                              "0px 2px 4px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.1)",
                            borderRadius: "50%",
                            "&:hover": { background: "#f0f0f0" },
                            padding: 0,
                          }}
                        >
                          <VisibilityIcon
                            sx={{ width: 16, height: 16, color: "#000" }}
                          />
                        </IconButton>
                      </Box>
                    </Box>

                    {/* Card Content */}
                    <CardContent
                      sx={{
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        position: "relative",
                        padding: "16px",
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{
                            fontFamily: '"Optima", "Raleway", sans-serif',
                            fontWeight: 400,
                            fontSize: "18px",
                            lineHeight: "28px",
                            color: "#161412",
                          }}
                        >
                          {artwork.title}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: '"Inter", sans-serif',
                            fontWeight: 400,
                            fontSize: "14px",
                            lineHeight: "20px",
                            color: "#65635F",
                            mt: "4px",
                          }}
                        >
                          {artwork.artist}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: '"Inter", sans-serif',
                            fontWeight: 400,
                            fontSize: "12px",
                            lineHeight: "16px",
                            color: "#65635F",
                            mt: "4px",
                          }}
                        >
                          {artwork.medium}, {artwork.year}
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            mt: "12px",
                          }}
                        >
                          <Rating
                            value={artwork.rating}
                            precision={0.1}
                            readOnly
                            size="small"
                            sx={{
                              "& .MuiRating-icon": {
                                width: 17,
                                height: 16,
                                mr: "3px",
                              },
                            }}
                          />
                          <Typography
                            sx={{
                              fontFamily: '"Inter", sans-serif',
                              fontWeight: 400,
                              fontSize: "12px",
                              lineHeight: "16px",
                              color: "#65635F",
                              ml: "8px",
                            }}
                          >
                            {artwork.rating}
                          </Typography>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          mt: "14px",
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: '"Inter", sans-serif',
                            fontWeight: 400,
                            fontSize: "18px",
                            lineHeight: "28px",
                            color: "#161412",
                          }}
                        >
                          ${artwork.price}
                        </Typography>
                        <Button
                          variant="contained"
                          sx={{
                            width: 110,
                            height: 36,
                            background: "#161412",
                            borderRadius: 0,
                            boxShadow: "none",
                            padding: "8px",
                            "&:hover": { background: "#333" },
                            fontFamily: '"Inter", sans-serif',
                            fontWeight: 400,
                            fontSize: "14px",
                            color: "#FFFFFF",
                            textTransform: "none",
                          }}
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent card flip
                            handleAddToCart(artwork);
                          }}
                        >
                          Add to Cart
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>

                  {/* Back Side */}
                  <Box
                    sx={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      backfaceVisibility: "hidden",
                      boxSizing: "border-box",
                      background: "#616161",
                      border: "1px solid rgba(101, 99, 95, 0.2)",
                      borderRadius: 0,
                      transform: "rotateY(180deg)",
                      display: "flex",
                      flexDirection: "column",
                      padding: "16px",
                    }}
                  >
                    <Box
                      sx={{
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{
                            fontFamily: '"Optima", "Raleway", sans-serif',
                            fontWeight: 600,
                            fontSize: "18px",
                            lineHeight: "28px",
                            color: "#fff",
                            letterSpacing: "0.02em",
                          }}
                        >
                          {artwork.title}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: '"Inter", sans-serif',
                            fontWeight: 400,
                            fontSize: "13px",
                            lineHeight: "20px",
                            color: "#fff",
                            mt: "6px",
                            fontStyle: "italic",
                          }}
                        >
                          By {artwork.artist}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: '"Inter", sans-serif',
                            fontWeight: 400,
                            fontSize: "12px",
                            lineHeight: "16px",
                            color: "#fff",
                            mt: "6px",
                            backgroundColor: "#757575",
                            padding: "4px 8px",
                            borderRadius: "4px",
                            display: "inline-block",
                          }}
                        >
                          {artwork.medium}, {artwork.year}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: '"Inter", sans-serif',
                            fontWeight: 400,
                            fontSize: "12px",
                            lineHeight: "18px",
                            color: "#fff",
                            mt: "10px",
                            opacity: 0.9,
                          }}
                        >
                          {artwork.description}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: '"Inter", sans-serif',
                            fontWeight: 600,
                            fontSize: "12px",
                            lineHeight: "16px",
                            color: "#fff",
                            mt: "10px",
                          }}
                        >
                          Purchased by {artwork.usersPurchased} users
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: '"Inter", sans-serif',
                            fontWeight: 500,
                            fontSize: "12px",
                            lineHeight: "16px",
                            color: "#fff",
                            mt: "6px",
                          }}
                        >
                          {artwork.itemsSold} items sold
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            mt: "12px",
                          }}
                        >
                          <Rating
                            value={artwork.rating}
                            precision={0.1}
                            readOnly
                            size="small"
                            sx={{
                              "& .MuiRating-iconFilled": {
                                width: 17,
                                height: 16,
                                mr: "3px",
                                color: "#FFD700",
                              },
                              "& .MuiRating-iconEmpty": {
                                width: 17,
                                height: 16,
                                mr: "3px",
                                color: "#FFD700",
                              },
                            }}
                          />
                          <Typography
                            sx={{
                              fontFamily: '"Inter", sans-serif',
                              fontWeight: 400,
                              fontSize: "12px",
                              lineHeight: "16px",
                              color: "#fff",
                              ml: "8px",
                              textDecoration: "underline",
                            }}
                          >
                            {artwork.rating}
                          </Typography>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          mt: "14px",
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: '"Inter", sans-serif',
                            fontWeight: 400,
                            fontSize: "18px",
                            lineHeight: "28px",
                            color: "#fff",
                          }}
                        >
                          ${artwork.price}
                        </Typography>
                        <Button
                          variant="contained"
                          sx={{
                            width: 110,
                            height: 36,
                            background: "#fff",
                            color: "#333",
                            "&:hover": { background: "#e0e0e0" },
                            borderRadius: 0,
                            padding: "8px",
                            fontFamily: '"Inter", sans-serif',
                            fontWeight: 400,
                            fontSize: "14px",
                            textTransform: "none",
                          }}
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent card flip
                            handleViewClick(artwork);
                          }}
                        >
                          View
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Snackbar for Add to Cart Alert */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Item added to cart successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default TrendingArtworks;
