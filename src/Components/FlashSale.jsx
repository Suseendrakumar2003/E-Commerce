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
import { useCart } from "./CartContext";
import Design1 from "../Assets/design 1.png";
import Design2 from "../Assets/sculpture 1.png";
import Design3 from "../Assets/brothers 1.png";
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

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.2, duration: 0.6, ease: "easeOut" },
  }),
  hover: {
    scale: 1.05,
    boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.2)",
    transition: { duration: 0.3 },
  },
};

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
  const { addToCart } = useCart();

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
    const scrollInterval = setInterval(scroll, 50);
    return () => clearInterval(scrollInterval);
  }, [isScrolling]);

  const handleAddToCart = (item) => {
    addToCart({
      title: item.title,
      artist: item.artist,
      price: item.price,
      image: item.image,
    });
    console.log(`Added ${item.title} to cart`);
  };

  const handleCardClick = (path) => navigate(path);
  const handleViewAll = () => navigate("/flash-deals");
  const handleBuyNow = () => navigate("/shop");
  const handleFavorite = (title) => console.log(`Favorited ${title}`);
  const handleView = (item) => navigate("/view", { state: { artwork: item } });

  return (
    <Box sx={{ px: { xs: 2, md: 4 }, py: 6, backgroundColor: "#f5f2ef" }}>
      <motion.div variants={headerVariants} initial="hidden" animate="visible">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
            padding: 1,
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, fontFamily: '"Raleway", sans-serif' }}
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
                color: "#65635F",
                fontFamily: '"Raleway", sans-serif',
                marginRight: "50px",
              }}
            >
              View All Deals
            </Typography>
          </Box>
        </Box>
      </motion.div>

      <Grid container spacing={2}>
        <Grid item xs={12} md={9}>
          <Box
            ref={scrollRef}
            sx={{
              display: "flex",
              overflowX: "auto",
              scrollBehavior: "smooth",
              gap: 2,
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
                    borderRadius: 0,
                    boxShadow: "none",
                    width: { xs: 200, sm: 256 },
                    height: 424,
                    border: "1px solid",
                    borderColor: "grey.300",
                    display: "flex",
                    flexDirection: "column",
                    cursor: "pointer",
                  }}
                  onClick={() => handleCardClick(item.path)}
                >
                  <Box sx={{ position: "relative", flexShrink: 0 }}>
                    <CardMedia
                      component="img"
                      height="256"
                      image={item.image}
                      alt={item.title}
                      sx={{ objectFit: "cover", width: "100%" }}
                      loading="lazy"
                      onError={(e) =>
                        (e.target.src = "/path/to/placeholder.jpg")
                      }
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        top: 8,
                        left: 8,
                        background: "rgba(0, 0, 0, 0.7)",
                        color: "#fff",
                        px: 1,
                        py: 0.5,
                        fontSize: "12px",
                        fontFamily: '"Raleway", sans-serif',
                        borderRadius: "4px",
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
                      }}
                    >
                      <IconButton
                        sx={{
                          backgroundColor: "white",
                          "&:hover": { backgroundColor: "#f0f0f0" },
                          width: 32,
                          height: 32,
                          borderRadius: "50%",
                          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleFavorite(item.title);
                        }}
                        aria-label={`Add ${item.title} to favorites`}
                      >
                        <FavoriteBorderIcon fontSize="small" />
                      </IconButton>
                      <IconButton
                        sx={{
                          backgroundColor: "white",
                          "&:hover": { backgroundColor: "#f0f0f0" },
                          width: 32,
                          height: 32,
                          borderRadius: "50%",
                          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleView(item);
                        }}
                        aria-label={`View details of ${item.title}`}
                      >
                        <VisibilityIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  </Box>
                  <CardContent
                    sx={{
                      textAlign: "left",
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      p: 2,
                    }}
                  >
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          fontFamily: '"Raleway", sans-serif',
                          fontSize: "18px",
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          fontFamily: '"Raleway", sans-serif',
                          fontSize: "14px",
                          mt: 0.5,
                        }}
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
                          sx={{
                            ml: 1,
                            fontFamily: '"Raleway", sans-serif',
                            fontSize: "12px",
                          }}
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
                          sx={{ fontWeight: 700, fontSize: "18px" }}
                        >
                          ${item.price}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "gray",
                            textDecoration: "line-through",
                            fontSize: "14px",
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
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-end" },
              width: { xs: "100%", md: "329px" },
              height: { xs: "auto", md: "394px" },
              p: 0,
              gap: "1rem", // Adjusted gap for better spacing
              mt: { xs: 4, md: 0 },
              marginLeft: "150px",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                fontSize: "30px",
                mt: 2,

                fontFamily: '"Raleway", sans-serif',
              }}
            >
              Deals Of The Month
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                color: "gray",
                mb: 3,
                fontFamily: '"Raleway", sans-serif',
                textAlign: { xs: "center", md: "right" },
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque duis ultrices sollicitudin aliquam sem.
            </Typography>
            <Button
              variant="contained" // Changed to contained to support background color
              sx={{
                backgroundColor: "#fff", // Black background as requested
                color: "#000", // White text for contrast
                border: "1px solid #111", // Kept the border style
                px: 3,
                py: 1,
                mt: 0,
                mb: 4,
                fontSize: "14px",
                fontFamily: '"Raleway", sans-serif',
                "&:hover": {
                  backgroundColor: "Red", // Slightly lighter black on hover for contrast
                  border: "1px solid #111",
                },
              }}
              onClick={handleBuyNow}
            >
              Buy Now
            </Button>
            <Typography
              sx={{
                mt: 3,
                mb: 2,
                fontSize: "12px",
                textTransform: "uppercase",
                fontFamily: '"Raleway", sans-serif',
                textAlign: { xs: "center", md: "right" },
              }}
            >
              Hurry, Before It’s Too Late!
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 1,
                justifyContent: { xs: "center", md: "flex-end" },
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
