import { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Rating,
  IconButton,
  Button,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import Design1 from "../Assets/design 1.png";
import Design2 from "../Assets/sculpture 1.png";
import Design3 from "../Assets/brothers 1.png";

// Import the font (Google Fonts - Raleway)
import "@fontsource/raleway/400.css";
import "@fontsource/raleway/700.css";

const flashDeals = [
  {
    title: "Abstract Canvas",
    artist: "Maria Santos",
    rating: 4.8,
    price: 299,
    oldPrice: 399,
    image: Design1,
    path: "/product/abstract-canvas",
  },
  {
    title: "Modern Sculpture",
    artist: "David Chen",
    rating: 4.9,
    price: 299,
    oldPrice: 399,
    image: Design2,
    path: "/product/modern-sculpture",
  },
  {
    title: "Vintage Print",
    artist: "Elena Rodriguez",
    rating: 4.7,
    price: 299,
    oldPrice: 399,
    image: Design3,
    path: "/product/vintage-print",
  },
  {
    title: "Digital Artwork",
    artist: "Liam Brown",
    rating: 4.6,
    price: 249,
    oldPrice: 349,
    image: Design1,
    path: "/product/digital-artwork",
  },
  {
    title: "Portrait Painting",
    artist: "Sophie Lee",
    rating: 4.8,
    price: 319,
    oldPrice: 419,
    image: Design2,
    path: "/product/portrait-painting",
  },
  {
    title: "Ceramic Vase",
    artist: "James Kim",
    rating: 4.5,
    price: 199,
    oldPrice: 299,
    image: Design3,
    path: "/product/ceramic-vase",
  },
  {
    title: "Abstract Print",
    artist: "Emma Davis",
    rating: 4.7,
    price: 279,
    oldPrice: 379,
    image: Design1,
    path: "/product/abstract-print",
  },
  {
    title: "Wooden Sculpture",
    artist: "Noah Patel",
    rating: 4.9,
    price: 349,
    oldPrice: 449,
    image: Design2,
    path: "/product/wooden-sculpture",
  },
  {
    title: "Landscape Photo",
    artist: "Olivia Smith",
    rating: 4.6,
    price: 229,
    oldPrice: 329,
    image: Design3,
    path: "/product/landscape-photo",
  },
  {
    title: "Mixed Media Art",
    artist: "Ava Johnson",
    rating: 4.8,
    price: 299,
    oldPrice: 399,
    image: Design1,
    path: "/product/mixed-media-art",
  },
];

// Animation variants for the card
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
  hover: {
    scale: 1.05,
    boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.2)",
    transition: { duration: 0.3 },
  },
};

// Animation variants for the header
const headerVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const CountdownBox = ({ value }) => (
  <Box
    sx={{
      backgroundColor: "#000",
      color: "#fff",
      px: 2,
      py: 1,
      fontSize: "16px",
      fontWeight: "bold",
      borderRadius: "4px",
      minWidth: "40px",
      textAlign: "center",
    }}
  >
    {value}
  </Box>
);

const FlashSaleSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });
  const [isScrolling, setIsScrolling] = useState(true);
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const endTime = new Date().getTime() + 24 * 60 * 60 * 1000;
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime - now;
      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setTimeLeft({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!isScrolling || !scrollRef.current) return;
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;
    const scroll = () => {
      scrollAmount += 1;
      if (
        scrollAmount >=
        scrollContainer.scrollWidth - scrollContainer.clientWidth
      ) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
    };
    const scrollInterval = setInterval(scroll, 30);
    return () => clearInterval(scrollInterval);
  }, [isScrolling]);

  const handleAddToCart = (item) => {
    console.log(`Clicked Add to Cart for ${item.title}`);
  };

  const handleCardClick = (path) => navigate(path);
  const handleViewAll = () => navigate("/flash-deals");
  const handleBuyNow = () => navigate("/shop");
  const handleFavorite = (title) => console.log(`Favorited ${title}`);
  const handleView = (item) => navigate("/view", { state: { artwork: item } });

  return (
    <Box sx={{ px: { xs: 2, md: 10 }, py: 6, backgroundColor: "#f5f2ef" }}>
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
              fontFamily: '"Raleway", sans-serif',
            }}
          >
            Flash Sale
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              cursor: "pointer",
            }}
            onClick={handleViewAll}
          >
            <Typography
              variant="body1"
              sx={{
                color: "Black",
                cursor: "pointer",
                fontFamily: '"Raleway", sans-serif',
              }}
            >
              View All Deals
            </Typography>
            <span style={{ fontSize: "1rem", color: "#1976d2" }}>→</span>
          </Box>
        </Box>
      </motion.div>

      <Grid container spacing={3}>
        <Grid item xs={12} md={9}>
          <Box
            ref={scrollRef}
            sx={{
              display: "flex",
              overflowX: "auto",
              scrollBehavior: "smooth",
              gap: 3,
              pb: 2,
              width: "900px",
              "&::-webkit-scrollbar": { display: "none" },
            }}
            onMouseEnter={() => setIsScrolling(false)}
            onMouseLeave={() => setIsScrolling(true)}
          >
            {flashDeals.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                custom={index}
              >
                <Card
                  sx={{
                    position: "relative",
                    borderRadius: 0,
                    boxShadow: 0,
                    width: 290,
                    height: 454,
                    border: "1px solid",
                    borderColor: "grey.300",
                    display: "flex",
                    flexDirection: "column",
                    cursor: "pointer",
                  }}
                  onClick={() => handleCardClick(item.path)}
                >
                  {/* Image Section */}
                  <Box sx={{ position: "relative", flexShrink: 0 }}>
                    <CardMedia
                      component="img"
                      height="256"
                      image={item.image}
                      alt={item.title}
                      sx={{ objectFit: "cover", width: "100%" }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        top: 8,
                        left: 8,
                        background: "#000",
                        color: "#fff",
                        px: 1,
                        fontSize: "12px",
                        fontFamily: '"Raleway", sans-serif',
                      }}
                    >
                      SALE
                    </Box>
                    <Box
                      sx={{
                        position: "absolute",
                        top: 8,
                        right: 8,
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                        width: "33px",
                        height: "auto",
                      }}
                    >
                      <IconButton
                        sx={{
                          backgroundColor: "white",
                          "&:hover": { backgroundColor: "#f0f0f0" },
                          width: "33px",
                          height: "33px",
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleFavorite(item.title);
                        }}
                      >
                        <FavoriteBorderIcon />
                      </IconButton>
                      <IconButton
                        sx={{
                          backgroundColor: "white",
                          "&:hover": { backgroundColor: "#f0f0f0" },
                          width: "33px",
                          height: "33px",
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleView(item);
                        }}
                      >
                        <VisibilityIcon />
                      </IconButton>
                    </Box>
                  </Box>

                  {/* Card Content */}
                  <CardContent
                    sx={{
                      textAlign: "left",
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: "bold",
                          fontFamily: '"Raleway", sans-serif',
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ fontFamily: '"Raleway", sans-serif' }}
                      >
                        {item.artist}
                      </Typography>
                      <Box
                        sx={{ display: "flex", alignItems: "center", mt: 1 }}
                      >
                        <Rating
                          name="read-only"
                          value={item.rating}
                          precision={0.1}
                          readOnly
                          size="small"
                        />
                        <Typography
                          variant="body2"
                          sx={{ ml: 1, fontFamily: '"Raleway", sans-serif' }}
                        >
                          {item.rating}
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mt: 2,
                      }}
                    >
                      <Box
                        sx={{ display: "flex", alignItems: "baseline", gap: 1 }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: "bold",
                          
                          }}
                        >
                          ${item.price}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "gray",
                            textDecoration: "line-through",
                            
                          }}
                        >
                          ${item.oldPrice}
                        </Typography>
                      </Box>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#000",
                          borderRadius: 0,
                          "&:hover": { backgroundColor: "#333" },
                          fontFamily: '"Raleway", sans-serif',
                          fontWeight: 700,
                          fontSize: "12px",
                          px: 2,
                          py: 0.5,
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAddToCart(item);
                        }}
                      >
                        Add to Cart
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={3}
          ml={8.72}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Box
            sx={{
              width: "319px",
              height: "374px",
              p: 2,
              textAlign: "right",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 500,
                fontSize: "1.25rem",
                mb: 1,
                fontFamily: '"Raleway", sans-serif',
                textAlign: "right",
              }}
            >
              Deals Of The Month
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                color: "gray",
                mt: 1,
                mb: 3,
                fontFamily: '"Raleway", sans-serif',
                textAlign: "right",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque
              duis ultrices sollicitudin
            </Typography>
            <Box
              sx={{
                border: "1px solid #111",
                px: 3,
                py: 1,
                fontSize: "14px",
                textAlign: "center",
                cursor: "pointer",
                "&:hover": { backgroundColor: "#f5f5f5" },
                mb: 4,
                fontFamily: '"Raleway", sans-serif',
                display: "inline-block",
              }}
              onClick={handleBuyNow}
            >
              Buy Now
            </Box>
            <Typography
              sx={{
                mt: 2,
                mb: 1,
                fontSize: "12px",
                textTransform: "uppercase",
                fontFamily: '"Raleway", sans-serif',
                textAlign: "right",
              }}
            >
              Offer Closes Soon!
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 1,
                justifyContent: "flex-end",
              }}
            >
              <CountdownBox value={String(timeLeft.hours).padStart(2, "0")} />
              <Typography sx={{ fontSize: "16px" }}>:</Typography>
              <CountdownBox value={String(timeLeft.minutes).padStart(2, "0")} />
              <Typography sx={{ fontSize: "16px" }}>:</Typography>
              <CountdownBox value={String(timeLeft.seconds).padStart(2, "0")} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FlashSaleSection;
