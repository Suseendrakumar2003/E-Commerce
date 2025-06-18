import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Slider,
  Checkbox,
  FormControlLabel,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Rating,
  Drawer,
  IconButton,
  Chip,
  Select,
  MenuItem,
  FormControl,
  Pagination,
  PaginationItem,
  Snackbar,
  Alert,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import FilterListIcon from "@mui/icons-material/FilterList";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityIcon from "@mui/icons-material/Visibility";
import BarChartIcon from "@mui/icons-material/BarChart";
import GridViewIcon from "@mui/icons-material/GridView";
import ListIcon from "@mui/icons-material/List";
import { motion } from "framer-motion";
import LimitedEditionBanner from "../Components/LimitedEditionBanner";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";
import CarouselSlider from "../Components/CarouselSlider";
import { useCart } from "../Components/CartContext";

// Images
import r1c1 from "../Assets/Bird.jpg";
import r1c2 from "../Assets/Butterfly.jpg";
import r1c3 from "../Assets/Duck.jpg";
import r2c1 from "../Assets/Home.jpg";
import r2c2 from "../Assets/House.jpg";
import r2c3 from "../Assets/Nature.jpg";
import r3c1 from "../Assets/Owl.png";
import r3c2 from "../Assets/Rainbow.jpg";
import r3c3 from "../Assets/Sparrow.jpg";
import r4c1 from "../Assets/Subway.jpg";
import r4c2 from "../Assets/tradition.jpg";
import r4c3 from "../Assets/Facepaint.jpg";

// Drawings data
const drawings = [
  {
    title: "Bird",
    artist: "Emma Stone",
    price: 150,
    rating: 4.8,
    image: r1c1,
    status: "Sale",
    brand: "SketchWorks",
    isNew: false,
  },
  {
    title: "Butterfly",
    artist: "Liam Gray",
    price: 200,
    rating: 4.5,
    image: r1c2,
    brand: "DrawCraft",
    isNew: false,
  },
  {
    title: "Duck",
    artist: "Ava Lee",
    price: 180,
    rating: 5.0,
    image: r1c3,
    status: "Out of Stock",
    brand: "ArtVibe",
    isNew: true,
  },
  {
    title: "Street",
    artist: "Noah Brown",
    price: 120,
    rating: 4.0,
    image: r2c1,
    brand: "SketchWorks",
    isNew: false,
  },
  {
    title: "Home",
    artist: "Sophie Kim",
    price: 250,
    rating: 4.7,
    image: r2c2,
    brand: "DrawCraft",
    isNew: true,
  },
  {
    title: "Nature",
    artist: "Henry Adams",
    price: 170,
    rating: 4.2,
    image: r2c3,
    brand: "ArtVibe",
    isNew: false,
  },
  {
    title: "Owl",
    artist: "Isabella Cruz",
    price: 190,
    rating: 4.9,
    image: r3c1,
    brand: "SketchWorks",
    isNew: false,
  },
  {
    title: "Rainbow",
    artist: "James Carter",
    price: 210,
    rating: 4.6,
    image: r3c2,
    brand: "DrawCraft",
    isNew: true,
  },
  {
    title: "Sparrow",
    artist: "Olivia Green",
    price: 140,
    rating: 4.3,
    image: r3c3,
    status: "Sale",
    brand: "ArtVibe",
    isNew: false,
  },
  {
    title: "SubWay Path",
    artist: "Jacob Lee",
    price: 230,
    rating: 4.8,
    image: r4c1,
    brand: "SketchWorks",
    isNew: false,
  },
  {
    title: "Tradition",
    artist: "Maria Santos",
    price: 160,
    rating: 4.4,
    image: r4c2,
    brand: "DrawCraft",
    isNew: true,
  },
  {
    title: "Face-Drawing",
    artist: "Elena Ruiz",
    price: 200,
    rating: 5.0,
    image: r4c3,
    brand: "ArtVibe",
    isNew: false,
  },
];

// Animation variants for cards
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

// Animation variants for the header
const headerVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// Animation variants for the heart icon
const heartVariants = {
  unfavorited: { scale: 1, color: "#000", transform: "translateY(2px)" },
  favorited: {
    scale: [1, 1.2, 1],
    color: "#ff0000",
    transition: { duration: 0.3 },
    transform: "translateY(2px)",
  },
};

const FilterSection = ({
  maxPrice,
  handlePriceChange,
  brands,
  handleBrandChange,
  ratings,
  handleRatingChange,
  availability,
  handleAvailabilityChange,
  handleClearAll,
}) => (
  <Box
    sx={{
      width: 256,
      height: 796,
      bgcolor: "#FBF6F4",
      borderRadius: 0,
      p: 3,
      lineHeight: "0px",
      fontFamily: "Arial",
      overflow: "auto",
      boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.05)",
      position: { md: "sticky" },
      top: { md: 10 },
    }}
  >
    <Box sx={{ mb: 2 }}>
      <Typography
        variant="body2"
        sx={{
          fontSize: "0.9rem",
          color: "#333",
          "& a": { color: "#1976d2", textDecoration: "none" },
        }}
      >
        <Link to="/">Home</Link> / Drawings
      </Typography>
    </Box>
    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
      <Typography fontWeight="bold" sx={{ fontSize: "1.2rem", color: "#333" }}>
        Filters
      </Typography>
      <Typography
        variant="body2"
        color="primary"
        onClick={handleClearAll}
        sx={{ cursor: "pointer", fontWeight: 500, lineHeight: "0px" }}
      >
        Clear All
      </Typography>
    </Box>
    <Typography
      fontWeight={600}
      fontSize={14}
      sx={{ mb: 1, color: "#444", lineHeight: "4px" }}
    >
      Price Range
    </Typography>
    <Slider
      value={maxPrice}
      onChange={handlePriceChange}
      min={0}
      max={1000}
      sx={{
        mt: 1,
        color: "#000",
        "& .MuiSlider-thumb": { borderRadius: "50%", width: 16, height: 16 },
        "& .MuiSlider-track": { borderRadius: 10, height: 4 },
        "& .MuiSlider-rail": { borderRadius: 10, height: 4 },
      }}
    />
    <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
      <Typography variant="body2" sx={{ color: "#666" }}>
        $0
      </Typography>
      <Typography variant="body2" sx={{ color: "#666" }}>
        ${maxPrice}
      </Typography>
    </Box>
    <Box sx={{ mt: 3 }}>
      <Typography
        fontWeight={600}
        fontSize={14}
        gutterBottom
        sx={{ color: "#444", lineHeight: "20px" }}
      >
        Brands
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {["SketchWorks", "DrawCraft", "ArtVibe"].map((brand, i) => (
          <FormControlLabel
            key={i}
            control={
              <Checkbox
                size="small"
                checked={brands[brand]}
                onChange={() => handleBrandChange(brand)}
                sx={{ color: "#000", "&.Mui-checked": { color: "#1976d2" } }}
              />
            }
            label={brand}
            sx={{
              "& .MuiTypography-root": { fontSize: "0.9rem", color: "#555" },
              mb: 0.5,
            }}
          />
        ))}
      </Box>
    </Box>
    <Box sx={{ mt: 3 }}>
      <Typography
        fontWeight={600}
        fontSize={14}
        gutterBottom
        sx={{ color: "#444", lineHeight: "20px" }}
      >
        Customer Rating
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {[4.5, 4, 3, 2].map((rating, i) => (
          <FormControlLabel
            key={i}
            control={
              <Checkbox
                size="small"
                checked={ratings[rating]}
                onChange={() => handleRatingChange(rating)}
                sx={{ color: "#000", "&.Mui-checked": { color: "#1976d2" } }}
              />
            }
            label={
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Rating value={rating} readOnly size="small" precision={0.5} />
                <Typography variant="body2" sx={{ ml: 0.5, color: "#555" }}>
                  & up
                </Typography>
              </Box>
            }
            sx={{ mb: 0.5 }}
          />
        ))}
      </Box>
    </Box>
    <Box sx={{ mt: 3 }}>
      <Typography
        fontWeight={600}
        fontSize={14}
        gutterBottom
        sx={{ color: "#444" }}
      >
        Availability
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {["In Stock", "On Sale", "New Arrivals"].map((option, i) => (
          <FormControlLabel
            key={i}
            control={
              <Checkbox
                size="small"
                checked={availability[option]}
                onChange={() => handleAvailabilityChange(option)}
                sx={{ color: "#000", "&.Mui-checked": { color: "#1976d2" } }}
              />
            }
            label={option}
            sx={{
              "& .MuiTypography-root": { fontSize: "0.9rem", color: "#555" },
              mb: 0.5,
            }}
          />
        ))}
      </Box>
    </Box>
  </Box>
);

const DrawingsPage = () => {
  const [maxPrice, setMaxPrice] = useState(1000);
  const [brands, setBrands] = useState({
    SketchWorks: false,
    DrawCraft: false,
    ArtVibe: false,
  });
  const [ratings, setRatings] = useState({
    4.5: false,
    4: false,
    3: false,
    2: false,
  });
  const [availability, setAvailability] = useState({
    "In Stock": false,
    "On Sale": false,
    "New Arrivals": false,
  });
  const [openDrawer, setOpenDrawer] = useState(false);
  const [sortBy, setSortBy] = useState("Popularity");
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [favoritedDrawings, setFavoritedDrawings] = useState({});
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const filteredDrawings = drawings.filter((drawing) => {
    const discountedPrice =
      drawing.status === "Sale"
        ? Math.round(drawing.price * 0.75)
        : drawing.price;
    if (discountedPrice > maxPrice) return false;

    const selectedBrands = Object.keys(brands).filter((brand) => brands[brand]);
    if (selectedBrands.length > 0 && !selectedBrands.includes(drawing.brand))
      return false;

    const selectedRatings = Object.keys(ratings)
      .filter((rating) => ratings[rating])
      .map((rating) => parseFloat(rating));
    if (
      selectedRatings.length > 0 &&
      !selectedRatings.some((rating) => drawing.rating >= rating)
    )
      return false;

    const inStock = availability["In Stock"];
    const onSale = availability["On Sale"];
    const newArrivals = availability["New Arrivals"];
    const availabilityFilters = [];
    if (inStock) availabilityFilters.push(drawing.status !== "Out of Stock");
    if (onSale) availabilityFilters.push(drawing.status === "Sale");
    if (newArrivals) availabilityFilters.push(drawing.isNew);
    if (
      availabilityFilters.length > 0 &&
      !availabilityFilters.every((condition) => condition)
    )
      return false;

    return true;
  });

  const itemsPerPage = 12;
  const totalPages = Math.ceil(filteredDrawings.length / itemsPerPage);

  const handlePriceChange = (event, newValue) => setMaxPrice(newValue);
  const handleBrandChange = (brand) =>
    setBrands((prev) => ({ ...prev, [brand]: !prev[brand] }));
  const handleRatingChange = (rating) =>
    setRatings((prev) => ({ ...prev, [rating]: !prev[rating] }));
  const handleAvailabilityChange = (option) =>
    setAvailability((prev) => ({ ...prev, [option]: !prev[option] }));
  const handleClearAll = () => {
    setMaxPrice(1000);
    setBrands({
      SketchWorks: false,
      DrawCraft: false,
      ArtVibe: false,
    });
    setRatings({ 4.5: false, 4: false, 3: false, 2: false });
    setAvailability({
      "In Stock": false,
      "On Sale": false,
      "New Arrivals": false,
    });
  };
  const handleSortChange = (event) => setSortBy(event.target.value);
  const handleViewModeChange = (mode) => setViewMode(mode);
  const handlePageChange = (event, page) => setCurrentPage(page);
  const handleViewClick = (drawing) =>
    navigate("/view", { state: { artwork: drawing } });
  const handleFavoriteClick = (drawingTitle) => {
    setFavoritedDrawings((prev) => ({
      ...prev,
      [drawingTitle]: !prev[drawingTitle],
    }));
  };
  const handleAddToCart = (drawing) => {
    const discountedPrice =
      drawing.status === "Sale"
        ? Math.round(drawing.price * 0.75)
        : drawing.price;
    const cartItem = {
      title: drawing.title,
      artist: drawing.artist,
      price: discountedPrice,
      image: drawing.image,
      quantity: 1,
    };
    addToCart(cartItem);
    setSnackbarOpen(true);
  };
  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") return;
    setSnackbarOpen(false);
  };

  const sortedDrawings = [...filteredDrawings].sort((a, b) => {
    if (sortBy === "Price: Low to High") {
      const priceA = a.status === "Sale" ? Math.round(a.price * 0.75) : a.price;
      const priceB = b.status === "Sale" ? Math.round(b.price * 0.75) : b.price;
      return priceA - priceB;
    } else if (sortBy === "Price: High to Low") {
      const priceA = a.status === "Sale" ? Math.round(a.price * 0.75) : a.price;
      const priceB = b.status === "Sale" ? Math.round(b.price * 0.75) : b.price;
      return priceB - priceA;
    } else {
      return b.rating - a.rating;
    }
  });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedDrawings = sortedDrawings.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <Box sx={{ display: "flex", flexDirection: "column", bgcolor: "#f5f5f5" }}>
      <CarouselSlider />
      <Box sx={{ display: "flex", flexDirection: "row", p: 4, gap: 4 }}>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <FilterSection
            maxPrice={maxPrice}
            handlePriceChange={handlePriceChange}
            brands={brands}
            handleBrandChange={handleBrandChange}
            ratings={ratings}
            handleRatingChange={handleRatingChange}
            availability={availability}
            handleAvailabilityChange={handleAvailabilityChange}
            handleClearAll={handleClearAll}
          />
        </Box>
        <IconButton
          onClick={() => setOpenDrawer(true)}
          sx={{
            display: { xs: "block", md: "none" },
            position: "fixed",
            top: 20,
            left: 20,
            zIndex: 2000,
            bgcolor: "#fff",
            boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: 0,
          }}
        >
          <FilterListIcon sx={{ color: "#1976d2" }} />
        </IconButton>
        <Drawer
          anchor="left"
          open={openDrawer}
          onClose={() => setOpenDrawer(false)}
          sx={{ "& .MuiDrawer-paper": { borderRadius: 0 } }}
        >
          <FilterSection
            maxPrice={maxPrice}
            handlePriceChange={handlePriceChange}
            brands={brands}
            handleBrandChange={handleBrandChange}
            ratings={ratings}
            handleRatingChange={handleRatingChange}
            availability={availability}
            handleAvailabilityChange={handleAvailabilityChange}
            handleClearAll={handleClearAll}
          />
        </Drawer>
        <Box sx={{ flex: 1 }}>
          <motion.div
            variants={headerVariants}
            initial="hidden"
            animate="visible"
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 3,
                maxWidth: 912,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "baseline" }}>
                <Typography
                  sx={{
                    fontSize: 24,
                    fontWeight: "bold",
                    display: "inline",
                    color: "#333",
                  }}
                >
                  Drawings
                </Typography>
                <Typography
                  sx={{
                    fontSize: 14,
                    color: "text.secondary",
                    display: "inline",
                    ml: 1,
                  }}
                >
                  ({filteredDrawings.length} products)
                </Typography>
              </Box>
              <Box sx={{ flex: 1 }} />
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1, mr: -100 }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    sx={{ fontSize: 14, color: "text.secondary", mr: 1 }}
                  >
                    Sort by:
                  </Typography>
                  <FormControl sx={{ minWidth: 120 }}>
                    <Select
                      value={sortBy}
                      onChange={handleSortChange}
                      sx={{
                        height: 32,
                        fontSize: 16,
                        bgcolor: "#fff",
                        borderRadius: 0,
                        boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.05)",
                        ".MuiOutlinedInput-notchedOutline": { border: "none" },
                      }}
                    >
                      <MenuItem value="Popularity">Popularity</MenuItem>
                      <MenuItem value="Price: Low to High">
                        Price: Low to High
                      </MenuItem>
                      <MenuItem value="Price: High to Low">
                        Price: High to Low
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <IconButton
                  onClick={() => handleViewModeChange("grid")}
                  sx={{
                    bgcolor: viewMode === "grid" ? "#000" : "#fff",
                    color: viewMode === "grid" ? "#fff" : "#000",
                    border: "1px solid #ccc",
                    borderRadius: 0,
                  }}
                >
                  <GridViewIcon fontSize="small" />
                </IconButton>
                <IconButton
                  onClick={() => handleViewModeChange("list")}
                  sx={{
                    bgcolor: viewMode === "list" ? "#000" : "#fff",
                    color: viewMode === "list" ? "#fff" : "#000",
                    border: "1px solid #ccc",
                    borderRadius: 0,
                  }}
                >
                  <ListIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>
          </motion.div>
          {paginatedDrawings.length === 0 ? (
            <Typography sx={{ textAlign: "center", color: "#666", mt: 4 }}>
              No drawings match your filters.
            </Typography>
          ) : viewMode === "grid" ? (
            <Grid container spacing={3}>
              {paginatedDrawings.map((drawing, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    custom={index}
                  >
                    <Card
                      sx={{
                        width: 320,
                        height: 520,
                        border: "1px solid #e0e0e0",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        position: "relative",
                        borderRadius: 0,
                        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.05)",
                        bgcolor: "#fff",
                      }}
                    >
                      <Box sx={{ position: "relative" }}>
                        <CardMedia
                          component="img"
                          sx={{
                            width: 320,
                            height: 370,
                            objectFit: "cover",
                            borderRadius: 0,
                          }}
                          image={drawing.image}
                          alt={drawing.title}
                        />
                        {drawing.status && (
                          <Chip
                            label={drawing.status}
                            sx={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%)",
                              bgcolor: "transparent",
                              color: "white",
                              fontSize: 16,
                              fontWeight: 500,
                              borderRadius: 0,
                            }}
                          />
                        )}
                        <Box
                          sx={{
                            position: "absolute",
                            top: 10,
                            right: 10,
                            display: "flex",
                            flexDirection: "column",
                            gap: 1,
                          }}
                        >
                          {[
                            {
                              icon: "Favorite",
                              action: () => handleFavoriteClick(drawing.title),
                            },
                            {
                              icon: "Visibility",
                              action: () => handleViewClick(drawing),
                            },
                            { icon: "BarChart", action: () => {} },
                          ].map(({ icon, action }, i) => (
                            <IconButton
                              key={i}
                              size="small"
                              onClick={action}
                              sx={{
                                bgcolor: "white",
                                boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.1)",
                                borderRadius: "50%",
                                width: 32,
                                height: 32,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                transform: "translateY(6px)",
                              }}
                            >
                              {icon === "Favorite" && (
                                <motion.div
                                  variants={heartVariants}
                                  animate={
                                    favoritedDrawings[drawing.title]
                                      ? "favorited"
                                      : "unfavorited"
                                  }
                                >
                                  {favoritedDrawings[drawing.title] ? (
                                    <FavoriteIcon fontSize="small" />
                                  ) : (
                                    <FavoriteBorderIcon fontSize="small" />
                                  )}
                                </motion.div>
                              )}
                              {icon === "Visibility" && (
                                <VisibilityIcon fontSize="small" />
                              )}
                              {icon === "BarChart" && (
                                <BarChartIcon fontSize="small" />
                              )}
                            </IconButton>
                          ))}
                        </Box>
                      </Box>
                      <CardContent sx={{ p: 2, pb: 1 }}>
                        <Typography
                          variant="h6"
                          sx={{
                            fontSize: "1.1rem",
                            mb: 0.5,
                            color: "#333",
                            fontWeight: 600,
                          }}
                        >
                          {drawing.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ mb: 0.5 }}
                        >
                          {drawing.artist}
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            mb: 0.5,
                          }}
                        >
                          <Rating
                            value={drawing.rating}
                            readOnly
                            precision={0.5}
                            size="small"
                          />
                          <Typography
                            variant="body2"
                            sx={{ ml: 0.5, color: "#555" }}
                          >
                            {drawing.rating}
                          </Typography>
                        </Box>
                      </CardContent>
                      <CardActions
                        sx={{
                          p: 2,
                          pt: 0,
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 1 }}
                        >
                          {drawing.status === "Sale" && (
                            <Box
                              sx={{
                                width: 43,
                                height: 20,
                                bgcolor: "#000",
                                color: "#fff",
                                borderRadius: "4px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                position: "absolute",
                                top: 340,
                              }}
                            >
                              <Typography
                                variant="body2"
                                sx={{ fontSize: "0.75rem", fontWeight: 500 }}
                              >
                                Sale
                              </Typography>
                            </Box>
                          )}
                          <Typography
                            variant="body1"
                            sx={{ fontWeight: "bold", color: "#333" }}
                          >
                            $
                            {drawing.status === "Sale"
                              ? Math.round(drawing.price * 0.75)
                              : drawing.price}
                          </Typography>
                          {drawing.status === "Sale" && (
                            <Typography
                              variant="body1"
                              sx={{
                                color: "#65635F",
                                textDecoration: "line-through",
                              }}
                            >
                              ${drawing.price}
                            </Typography>
                          )}
                        </Box>
                        <Button
                          variant="contained"
                          sx={{
                            bgcolor: "#000",
                            color: "#fff",
                            borderRadius: 0,
                            fontWeight: 500,
                            "&:disabled": { bgcolor: "#ccc", color: "#666" },
                          }}
                          size="small"
                          disabled={drawing.status === "Out of Stock"}
                          onClick={() => handleAddToCart(drawing)}
                        >
                          Add to Cart
                        </Button>
                      </CardActions>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          ) : (
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {paginatedDrawings.map((drawing, index) => (
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                >
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      height: 200,
                      border: "1px solid #e0e0e0",
                      borderRadius: 0,
                      boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.05)",
                      position: "relative",
                      bgcolor: "white",
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        width: 160,
                        height: 180,
                        m: 1,
                      }}
                    >
                      <CardMedia
                        component="img"
                        sx={{
                          width: 160,
                          height: 180,
                          objectFit: "cover",
                          borderRadius: 0,
                        }}
                        image={drawing.image}
                        alt={drawing.title}
                      />
                      {drawing.status && (
                        <Chip
                          label={drawing.status}
                          sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            bgcolor: "transparent",
                            color: "white",
                            fontWeight: 500,
                            fontSize: 16,
                            borderRadius: 0,
                          }}
                        />
                      )}
                    </Box>
                    <Box
                      sx={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        p: 2,
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: "1.1rem",
                          mb: 0.5,
                          color: "#333",
                          fontWeight: 600,
                        }}
                      >
                        {drawing.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 0.5 }}
                      >
                        {drawing.artist}
                      </Typography>
                      <Box
                        sx={{ display: "flex", alignItems: "center", mb: 0.5 }}
                      >
                        <Rating
                          value={drawing.rating}
                          readOnly
                          precision={0.5}
                          size="small"
                        />
                        <Typography
                          variant="body2"
                          sx={{ ml: 0.5, color: "#555" }}
                        >
                          {drawing.rating}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          mt: 1,
                        }}
                      >
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 1 }}
                        >
                          {drawing.status === "Sale" && (
                            <Box
                              sx={{
                                width: 43,
                                height: 20,
                                bgcolor: "#000",
                                color: "#fff",
                                borderRadius: "4px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                position: "absolute",
                                top: 105,
                              }}
                            >
                              <Typography
                                variant="body2"
                                sx={{ fontSize: "0.75rem", fontWeight: 500 }}
                              >
                                Sale
                              </Typography>
                            </Box>
                          )}
                          <Typography
                            variant="body1"
                            sx={{ fontWeight: "bold", color: "#333" }}
                          >
                            $
                            {drawing.status === "Sale"
                              ? Math.round(drawing.price * 0.75)
                              : drawing.price}
                          </Typography>
                          {drawing.status === "Sale" && (
                            <Typography
                              variant="body1"
                              sx={{
                                color: "#65635F",
                                textDecoration: "line-through",
                              }}
                            >
                              ${drawing.price}
                            </Typography>
                          )}
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-end",
                            gap: 1,
                          }}
                        >
                          <Box sx={{ display: "flex", gap: 1 }}>
                            {[
                              {
                                icon: "Favorite",
                                action: () =>
                                  handleFavoriteClick(drawing.title),
                              },
                              {
                                icon: "Visibility",
                                action: () => handleViewClick(drawing),
                              },
                              { icon: "BarChart", action: () => {} },
                            ].map(({ icon, action }, i) => (
                              <IconButton
                                key={i}
                                size="small"
                                onClick={action}
                                sx={{
                                  position: "relative",
                                  top: "-80px",
                                  bgcolor: "white",
                                  boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.1)",
                                  borderRadius: "50%",
                                  width: 32,
                                  height: 32,
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                {icon === "Favorite" && (
                                  <motion.div
                                    variants={heartVariants}
                                    animate={
                                      favoritedDrawings[drawing.title]
                                        ? "favorited"
                                        : "unfavorited"
                                    }
                                  >
                                    {favoritedDrawings[drawing.title] ? (
                                      <FavoriteIcon fontSize="small" />
                                    ) : (
                                      <FavoriteBorderIcon fontSize="small" />
                                    )}
                                  </motion.div>
                                )}
                                {icon === "Visibility" && (
                                  <VisibilityIcon fontSize="small" />
                                )}
                                {icon === "BarChart" && (
                                  <BarChartIcon fontSize="small" />
                                )}
                              </IconButton>
                            ))}
                          </Box>
                          <Button
                            variant="contained"
                            sx={{
                              position: "relative",
                              top: "-10px",
                              width: 106,
                              height: 36,
                              bgcolor: "#000",
                              color: "#fff",
                              borderRadius: 0,
                              fontWeight: 400,
                              fontSize: "12px",
                              "&:disabled": { bgcolor: "#ccc", color: "#666" },
                            }}
                            size="small"
                            disabled={drawing.status === "Out of Stock"}
                            onClick={() => handleAddToCart(drawing)}
                          >
                            Add to Cart
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </motion.div>
              ))}
            </Box>
          )}
          {sortedDrawings.length > 0 && (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
              <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
                renderItem={(item) => (
                  <PaginationItem
                    {...item}
                    sx={{
                      borderRadius: 0,
                      margin: "0 2px",
                      "&.Mui-selected": {
                        backgroundColor: "#000",
                        color: "#fff",
                      },
                      "& .MuiPaginationItem-ellipsis": {
                        display: "flex",
                        alignItems: "center",
                        height: "32px",
                      },
                    }}
                  />
                )}
              />
            </Box>
          )}
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 0, p: 0 }}>
        <LimitedEditionBanner />
        <Newsletter />
        <Footer />
      </Box>
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

export default DrawingsPage;
