import { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import image1 from "../Assets/Painting.png";
import image2 from "../Assets/Sculptures.png";
import image3 from "../Assets/Photography.png";
import image4 from "../Assets/Digital Art.png";
// TODO: Add unique images for remaining categories
// import image5 from '../Assets/Drawings.png';
// import image6 from '../Assets/MixedMedia.png';
// import image7 from '../Assets/Prints.png';
// import image8 from '../Assets/Ceramics.png';
// import image9 from '../Assets/Textiles.png';
// import image10 from '../Assets/Installations.png';

// Uncomment the line below once you have the SVG file in your Assets directory
// import { ReactComponent as CustomArrowIcon } from '../Assets/arrow-icon.svg';

// Placeholder SVG for the bold, black, right-pointing arrow

const categories = [
  { title: "Paintings", image: image1, path: "/category/paintings" },
  { title: "Sculptures", image: image2, path: "/category/sculptures" },
  { title: "Photography", image: image3, path: "/category/photography" },
  { title: "Digital Art", image: image4, path: "/category/digital-art" },
  { title: "Drawings", image: image1, path: "/category/drawings" }, // TODO: Replace with unique image
  { title: "Mixed Media", image: image2, path: "/category/mixed-media" }, // TODO: Replace with unique image
  { title: "Prints", image: image3, path: "/category/prints" }, // TODO: Replace with unique image
  { title: "Ceramics", image: image4, path: "/category/ceramics" }, // TODO: Replace with unique image
  { title: "Textiles", image: image1, path: "/category/textiles" }, // TODO: Replace with unique image
  { title: "Installations", image: image2, path: "/category/installations" }, // TODO: Replace with unique image
];

const ShopByCategory = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const handleToggleView = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleCardClick = (path) => {
    navigate(path);
  };

  const displayedCategories = isExpanded ? categories : categories.slice(0, 4);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
  };

  return (
    <Box sx={{ px: { xs: 2, md: 8 }, py: 6 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Optima, sans-serif", // Fallback to sans-serif if Optima is unavailable
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "30px",
            lineHeight: "36px",
            color: "#161412",
          }}
        >
          Shop by Category
        </Typography>

        <button
          style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            background: "none",
            border: "none",
            padding: 0,
          }}
          onClick={handleToggleView}
          aria-label={
            isExpanded ? "Show fewer categories" : "Show all categories"
          }
        >
          <Typography
            sx={{
              color: "#111",
              fontSize: "0.85rem",
              mr: 0.5,
            }}
          >
            {isExpanded ? "Show Less" : "View All"}
          </Typography>
          <ArrowForwardIos
            sx={{
              fontSize: "1.1rem",
              cursor: "pointer",
              color: "black",
            }}
          />
          {/* Replace with imported SVG once available */}
        </button>
      </Box>

      <Grid container spacing={7} sx={{ transition: "all 0.3s ease" }}>
        <AnimatePresence>
          {displayedCategories.map((category) => (
            <Grid item xs={12} sm={6} md={3} key={category.title}>
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Card
                  elevation={0}
                  sx={{
                    cursor: "pointer",
                    borderRadius: 0, // Card border radius set to 0
                    transition: "box-shadow 0.3s ease, transform 0.3s ease",
                    "&:hover": {
                      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                      transform: "translateY(-4px)",
                    },
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${category.title} category`}
                  onClick={() => handleCardClick(category.path)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleCardClick(category.path);
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      height: { xs: 150, sm: 200 },
                      objectFit: "cover",
                      borderRadius: 0, // Image border radius set to 0
                    }}
                    image={category.image || "/path/to/placeholder.png"} // Fallback image
                    alt={category.title}
                    loading="lazy" // Lazy-load images for performance
                  />
                  <CardContent sx={{ textAlign: "left", pt: 0, pb: 0 }}>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: "18px",
                        fontWeight: 400,
                        color: "#555",
                        lineHeight: "28px",
                      }}
                    >
                      {category.title}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </AnimatePresence>
      </Grid>
    </Box>
  );
};

export default ShopByCategory;
