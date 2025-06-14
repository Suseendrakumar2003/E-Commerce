import React, { useState } from 'react';
import {
  Box, Grid, Typography, Slider, Checkbox, FormControlLabel,
  Card, CardMedia, CardContent, CardActions, Button, Rating,
  Drawer, IconButton, Chip, IconButton as IconButtonMui,
  Select, MenuItem, FormControl, Pagination, PaginationItem
} from '@mui/material';
import { Link } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FilterListIcon from '@mui/icons-material/FilterList';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import BarChartIcon from '@mui/icons-material/BarChart';
import GridViewIcon from '@mui/icons-material/GridView';
import ListIcon from '@mui/icons-material/List';
import { motion } from 'framer-motion';

// Images
import r1c1 from '../Assets/r1c1.png';
import r1c2 from '../Assets/r1c2.png';
import r1c3 from '../Assets/r1c3.png';
import r2c1 from '../Assets/r2c1.png';
import r2c2 from '../Assets/r2c2.png';
import r2c3 from '../Assets/r2c3.png';
import r3c1 from '../Assets/r3c1.png';
import r3c2 from '../Assets/r3c2.png';
import r3c3 from '../Assets/r3c3.png';
import r4c1 from '../Assets/r4c1.png';
import r4c2 from '../Assets/r4c2.png';
import r4c3 from '../Assets/r4c3.png';

// Painting data
const paintings = [
  { title: "Abstract Harmony", artist: "Maria Santos", price: 540, rating: 4.5, image: r1c1, status: "Sale", brand: "Gallery One", isNew: false },
  { title: "Urban Dreams", artist: "John Doe", price: 820, rating: 4.0, image: r1c2, brand: "Modern Arts", isNew: false },
  { title: "Coastal Breeze", artist: "Elena Rodriguez", price: 650, rating: 5.0, image: r1c3, status: "Out of Stock", brand: "Art House", isNew: true },
  { title: "Morning Vista", artist: "Thomas Miller", price: 320, rating: 4.0, image: r2c1, brand: "Classic Studio", isNew: false },
  { title: "City Lights", artist: "Sarah Johnson", price: 480, rating: 4.5, image: r2c2, brand: "Gallery One", isNew: true },
  { title: "Forest Path", artist: "Michael Brown", price: 380, rating: 4.0, image: r2c3, brand: "Modern Arts", isNew: false },
  { title: "Desert Sunset", artist: "Lisa Wong", price: 560, rating: 5.0, image: r3c1, brand: "Art House", isNew: false },
  { title: "Ocean Waves", artist: "Robert Davis", price: 440, rating: 4.5, image: r3c2, brand: "Classic Studio", isNew: true },
  { title: "Autumn Colors", artist: "Jennifer Lane", price: 300, rating: 4.0, image: r3c3, status: "Sale", brand: "Gallery One", isNew: false },
  { title: "Night Sky", artist: "Emma Wilson", price: 350, rating: 4.5, image: r4c1, brand: "Modern Arts", isNew: false },
  { title: "Spring Garden", artist: "James Anderson", price: 420, rating: 4.0, image: r4c2, brand: "Art House", isNew: true },
  { title: "Winter Landscape", artist: "Amelia Carter", price: 580, rating: 5.0, image: r4c3, brand: "Classic Studio", isNew: false },
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
  hover: {
    scale: 1.02,
    boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)",
    transition: { duration: 0.3 },
  },
};

// Animation variants for the header
const headerVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
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
      height: 'auto',
      bgcolor: '#FBF6F4',
      borderRadius: 0,
      p: 3,
      fontFamily: 'Arial',
      overflow: 'auto',
      boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
    }}
  >
    {/* Breadcrumb Navigation */}
    <Box sx={{ mb: 2 }}>
      <Typography
        variant="body2"
        sx={{
          fontSize: '0.9rem',
          color: '#333',
          '& a': {
            color: '#1976d2',
            textDecoration: 'none',
            '&:hover': { textDecoration: 'underline' },
          },
        }}
      >
        <Link to="/">Home</Link> / Paintings
      </Typography>
    </Box>

    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
      <Typography fontWeight="bold" sx={{ fontSize: '1.2rem', color: '#333' }}>
        Filters
      </Typography>
      <Typography
        variant="body2"
        color="#65635F"
        onClick={handleClearAll}
        sx={{
          cursor: 'pointer',
          fontWeight: 500,
          '&:hover': { color: '#000', textDecoration: 'underline' },
        }}
      >
        Clear All
      </Typography>
    </Box>

    <Typography fontWeight={600} fontSize={14} sx={{ mb: 1, color: '#444' }}>
      Price Range
    </Typography>
    <Slider
      value={maxPrice}
      onChange={handlePriceChange}
      min={0}
      max={1000}
      sx={{
        mt: 1,
        color: '#000',
        '& .MuiSlider-thumb': {
          transition: 'all 0.3s ease',
          borderRadius: '50%',
          width: 16,
          height: 16,
        },
        '& .MuiSlider-track': {
          transition: 'all 0.3s ease',
          borderRadius: 10,
          height: 4,
        },
        '& .MuiSlider-rail': {
          borderRadius: 10,
          height: 4,
        },
      }}
    />
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
      <Typography variant="body2" sx={{ color: '#666' }}>
        $0
      </Typography>
      <Typography variant="body2" sx={{ color: '#666' }}>
        ${maxPrice}
      </Typography>
    </Box>

    <Box sx={{ mt: 3 }}>
      <Typography fontWeight={600} fontSize={14} gutterBottom sx={{ color: '#444' }}>
        Brands
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {['Gallery One', 'Modern Arts', 'Art House', 'Classic Studio'].map((brand, i) => (
          <FormControlLabel
            key={i}
            control={
              <Checkbox
                size="small"
                checked={brands[brand]}
                onChange={() => handleBrandChange(brand)}
                sx={{
                  color: '#000',
                  '&.Mui-checked': { color: '#1976d2' },
                }}
              />
            }
            label={brand}
            sx={{
              '& .MuiTypography-root': {
                fontSize: '0.9rem',
                color: '#555',
                transition: 'color 0.3s ease',
                '&:hover': { color: '#1976d2' },
              },
              mb: 0.5,
            }}
          />
        ))}
      </Box>
    </Box>

    <Box sx={{ mt: 3 }}>
      <Typography fontWeight={600} fontSize={14} gutterBottom sx={{ color: '#444' }}>
        Customer Rating
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {[4.5, 4, 3, 2].map((rating, i) => (
          <FormControlLabel
            key={i}
            control={
              <Checkbox
                size="small"
                checked={ratings[rating]}
                onChange={() => handleRatingChange(rating)}
                sx={{
                  color: '#000',
                  '&.Mui-checked': { color: '#1976d2' },
                }}
              />
            }
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Rating value={rating} readOnly size="small" precision={0.5} />
                <Typography
                  variant="body2"
                  sx={{
                    ml: 0.5,
                    color: '#555',
                    transition: 'color 0.3s ease',
                    '&:hover': { color: '#1976d2' },
                  }}
                >
                  & up
                </Typography>
              </Box>
            }
            sx={{
              '& .MuiTypography-root': { transition: 'color 0.3s ease' },
              mb: 0.5,
            }}
          />
        ))}
      </Box>
    </Box>

    <Box sx={{ mt: 3 }}>
      <Typography fontWeight={600} fontSize={14} gutterBottom sx={{ color: '#444' }}>
        Availability
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {['In Stock', 'On Sale', 'New Arrivals'].map((option, i) => (
          <FormControlLabel
            key={i}
            control={
              <Checkbox
                size="small"
                checked={availability[option]}
                onChange={() => handleAvailabilityChange(option)}
                sx={{
                  color: '#000',
                  '&.Mui-checked': { color: '#1976d2' },
                }}
              />
            }
            label={option}
            sx={{
              '& .MuiTypography-root': {
                fontSize: '0.9rem',
                color: '#555',
                transition: 'color 0.3s ease',
                '&:hover': { color: '#1976d2' },
              },
              mb: 0.5,
            }}
          />
        ))}
      </Box>
    </Box>
  </Box>
);

const PaintingPage = () => {
  const [maxPrice, setMaxPrice] = useState(1000);
  const [brands, setBrands] = useState({
    "Gallery One": false,
    "Modern Arts": false,
    "Art House": false,
    "Classic Studio": false,
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
  const [sortBy, setSortBy] = useState('Popularity');
  const [viewMode, setViewMode] = useState('grid');
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 12;
  const totalPages = 10;

  const handlePriceChange = (event, newValue) => {
    setMaxPrice(newValue);
  };

  const handleBrandChange = (brand) => {
    setBrands((prev) => ({
      ...prev,
      [brand]: !prev[brand],
    }));
  };

  const handleRatingChange = (rating) => {
    setRatings((prev) => ({
      ...prev,
      [rating]: !prev[rating],
    }));
  };

  const handleAvailabilityChange = (option) => {
    setAvailability((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));
  };

  const handleClearAll = () => {
    setMaxPrice(1000);
    setBrands({
      "Gallery One": false,
      "Modern Arts": false,
      "Art House": false,
      "Classic Studio": false,
    });
    setRatings({
      4.5: false,
      4: false,
      3: false,
      2: false,
    });
    setAvailability({
      "In Stock": false,
      "On Sale": false,
      "New Arrivals": false,
    });
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleViewModeChange = (mode) => {
    setViewMode(mode);
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  // Filter paintings
  const filteredPaintings = paintings.filter((painting) => {
    const discountedPrice = painting.status === "Sale" ? Math.round(painting.price * 0.75) : painting.price;
    if (discountedPrice > maxPrice) return false;

    const selectedBrands = Object.keys(brands).filter((brand) => brands[brand]);
    if (selectedBrands.length > 0 && !selectedBrands.includes(painting.brand)) return false;

    const selectedRatings = Object.keys(ratings)
      .filter((rating) => ratings[rating])
      .map((rating) => parseFloat(rating));
    if (selectedRatings.length > 0) {
      const matchesRating = selectedRatings.some((rating) => painting.rating >= rating);
      if (!matchesRating) return false;
    }

    const inStock = availability["In Stock"];
    const onSale = availability["On Sale"];
    const newArrivals = availability["New Arrivals"];
    const availabilityFilters = [];

    if (inStock) availabilityFilters.push(painting.status !== "Out of Stock");
    if (onSale) availabilityFilters.push(painting.status === "Sale");
    if (newArrivals) availabilityFilters.push(painting.isNew);

    if (availabilityFilters.length > 0 && !availabilityFilters.every((condition) => condition)) return false;

    return true;
  });

  // Sort paintings
  const sortedPaintings = [...filteredPaintings].sort((a, b) => {
    if (sortBy === 'Price: Low to High') {
      const priceA = a.status === "Sale" ? Math.round(a.price * 0.75) : a.price;
      const priceB = b.status === "Sale" ? Math.round(b.price * 0.75) : b.price;
      return priceA - priceB;
    } else if (sortBy === 'Price: High to Low') {
      const priceA = a.status === "Sale" ? Math.round(a.price * 0.75) : a.price;
      const priceB = b.status === "Sale" ? Math.round(b.price * 0.75) : b.price;
      return priceB - priceA;
    } else {
      return b.rating - a.rating;
    }
  });

  // Paginate paintings
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedPaintings = sortedPaintings.slice(startIndex, startIndex + itemsPerPage);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', p: 4, gap: 4, bgcolor: '#f5f5f5' }}>
      {/* Sidebar for desktop */}
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
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

      {/* Filter drawer for mobile with transition */}
      <IconButton
        onClick={() => setOpenDrawer(true)}
        sx={{
          display: { xs: 'block', md: 'none' },
          position: 'fixed',
          top: 20,
          left: 20,
          zIndex: 2000,
          bgcolor: '#fff',
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
          borderRadius: 0,
          '&:hover': { bgcolor: '#f0f0f0' },
          transition: 'all 0.3s ease',
        }}
      >
        <FilterListIcon sx={{ color: '#1976d2' }} />
      </IconButton>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            transition: 'transform 0.3s ease-in-out',
            borderRadius: 0,
          },
        }}
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

      {/* Products */}
      <Box sx={{ flex: 1 }}>
        <motion.div variants={headerVariants} initial="hidden" animate="visible">
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, maxWidth: '912px' }}>
            <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
              <Typography sx={{ fontSize: '24px', fontWeight: 'bold', display: 'inline', color: '#333' }}>
                Paintings
              </Typography>
              <Typography sx={{ fontSize: '14px', color: 'text.secondary', display: 'inline', ml: 1 }}>
                ({filteredPaintings.length} products)
              </Typography>
            </Box>
            <Box sx={{ flex: 1 }} />
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mr: '-100px' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography sx={{ fontSize: '14px', color: 'text.secondary', mr: 1 }}>
                  Sort by:
                </Typography>
                <FormControl sx={{ minWidth: 120 }}>
                  <Select
                    value={sortBy}
                    onChange={handleSortChange}
                    sx={{
                      height: '32px',
                      fontSize: '16px',
                      bgcolor: '#fff',
                      borderRadius: 0,
                      boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.05)',
                      '.MuiOutlinedInput-notchedOutline': { border: 'none' },
                      transition: 'all 0.3s ease',
                      '&:hover': { bgcolor: '#f0f0f0' },
                    }}
                  >
                    <MenuItem value="Popularity">Popularity</MenuItem>
                    <MenuItem value="Price: Low to High">Price: Low to High</MenuItem>
                    <MenuItem value="Price: High to Low">Price: High to Low</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <IconButtonMui
                onClick={() => handleViewModeChange('grid')}
                sx={{
                  bgcolor: viewMode === 'grid' ? '#000' : '#fff',
                  color: viewMode === 'grid' ? '#fff' : '#000',
                  border: '1px solid #ccc',
                  borderRadius: 0,
                  transition: 'all 0.3s ease',
                  '&:hover': { bgcolor: viewMode === 'grid' ? '#333' : '#f0f0f0' },
                }}
              >
                <GridViewIcon fontSize="small" />
              </IconButtonMui>
              <IconButtonMui
                onClick={() => handleViewModeChange('list')}
                sx={{
                  bgcolor: viewMode === 'list' ? '#1976d2' : '#fff',
                  color: viewMode === 'list' ? '#fff' : '#000',
                  border: '1px solid #ccc',
                  borderRadius: 0,
                  transition: 'all 0.3s ease',
                  '&:hover': { bgcolor: viewMode === 'list' ? '#1565c0' : '#f0f0f0' },
                }}
              >
                <ListIcon fontSize="small" />
              </IconButtonMui>
            </Box>
          </Box>
        </motion.div>

        {paginatedPaintings.length === 0 ? (
          <Typography sx={{ textAlign: 'center', color: '#666', mt: 4 }}>
            No paintings match your filters.
          </Typography>
        ) : viewMode === 'grid' ? (
          <Grid container spacing={3}>
            {paginatedPaintings.map((painting, index) => (
              <Grid item key={index}>
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  custom={index}
                >
                  <Card
                    sx={{
                      width: 320,
                      height: 520,
                      border: '1px solid #e0e0e0',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      position: 'relative',
                      borderRadius: 0,
                      boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
                      transition: 'box-shadow 0.3s ease',
                      bgcolor: '#fff',
                    }}
                  >
                    <Box sx={{ position: 'relative' }}>
                      <CardMedia
                        component="img"
                        sx={{
                          width: 320,
                          height: 370,
                          objectFit: 'cover',
                          borderRadius: 0,
                          transition: 'transform 0.3s ease',
                          '&:hover': { transform: 'scale(1.03)' },
                        }}
                        image={painting.image}
                        alt={painting.title}
                      />
                      {painting.status && (
                        <Chip
                          label={painting.status}
                          sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            bgcolor: 'transparent',
                            color: 'white',
                            fontSize: '16px',
                            fontWeight: 500,
                            transition: 'background-color 0.3s ease',
                            borderRadius: 0,
                          }}
                        />
                      )}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 10,
                          right: 10,
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 1,
                        }}
                      >
                        {['FavoriteBorderIcon', 'VisibilityIcon', 'BarChartIcon'].map((icon, i) => (
                          <IconButtonMui
                            key={i}
                            size="small"
                            sx={{
                              bgcolor: 'white',
                              boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.1)',
                              transition: 'all 0.3s ease',
                              '&:hover': { bgcolor: '#f0f0f0', transform: 'scale(1.1)' },
                              borderRadius: '50%',
                            }}
                          >
                            {icon === 'FavoriteBorderIcon' && <FavoriteBorderIcon fontSize="small" />}
                            {icon === 'VisibilityIcon' && <VisibilityIcon fontSize="small" />}
                            {icon === 'BarChartIcon' && <BarChartIcon fontSize="small" />}
                          </IconButtonMui>
                        ))}
                      </Box>
                    </Box>
                    <CardContent sx={{ p: 2, pb: 1 }}>
                      <Typography variant="h6" sx={{ fontSize: '1.1rem', mb: 0.5, color: '#333', fontWeight: 600 }}>
                        {painting.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                        {painting.artist}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                        <Rating value={painting.rating} readOnly precision={0.5} size="small" />
                        <Typography variant="body2" sx={{ ml: 0.5, color: '#555' }}>
                          {painting.rating}
                        </Typography>
                      </Box>
                    </CardContent>
                    <CardActions sx={{ p: 2, pt: 0, justifyContent: 'space-between', alignItems: 'center' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#333' }}>
                          ${painting.status === "Sale" ? Math.round(painting.price * 0.75) : painting.price}
                        </Typography>
                        {painting.status === "Sale" && (
                          <Typography variant="body1" sx={{ color: '#65635F', textDecoration: 'line-through' }}>
                            ${painting.price}
                          </Typography>
                        )}
                      </Box>
                      <Button
                        variant="contained"
                        sx={{
                          bgcolor: '#000',
                          color: '#fff',
                          borderRadius: 0,
                          fontWeight: 500,
                          transition: 'all 0.3s ease',
                          '&:hover': { bgcolor: '#333', transform: 'scale(1.05)' },
                          '&:disabled': { bgcolor: '#ccc', color: '#666' },
                        }}
                        size="small"
                        disabled={painting.status === "Out of Stock"}
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
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {paginatedPaintings.map((painting, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                custom={index}
              >
                <Box
                  sx={{
                    display: 'flex',
                    width: '100%',
                    height: 200,
                    border: '1px solid #e0e0e0',
                    borderRadius: 0,
                    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
                    position: 'relative',
                    bgcolor: 'white',
                    transition: 'box-shadow 0.3s ease',
                  }}
                >
                  <Box sx={{ position: 'relative', width: 160, height: 180, m: 1 }}>
                    <CardMedia
                      component="img"
                      sx={{
                        width: 160,
                        height: 180,
                        objectFit: 'cover',
                        borderRadius: 0,
                        transition: 'transform 0.3s ease',
                        '&:hover': { transform: 'scale(1.03)' },
                      }}
                      image={painting.image}
                      alt={painting.title}
                    />
                    {painting.status && (
                      <Chip
                        label={painting.status}
                        sx={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          bgcolor: 'transparent',
                          color: 'white',
                          fontWeight: 500,
                          fontSize: '16px',
                          transition: 'background-color 0.3s ease',
                          borderRadius: 0,
                        }}
                      />
                    )}
                  </Box>
                  <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', p: 2 }}>
                    <Typography variant="h6" sx={{ fontSize: '1.1rem', mb: 0.5, color: '#333', fontWeight: 600 }}>
                      {painting.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                      {painting.artist}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                      <Rating value={painting.rating} readOnly precision={0.5} size="small" />
                      <Typography variant="body2" sx={{ ml: 0.5, color: '#555' }}>
                        {painting.rating}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        {painting.status === "Sale" && (
                          <Box
                            sx={{
                              width: 43,
                              height: 20,
                              bgcolor: '#000',
                              color: '#fff',
                              borderRadius: '4px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              mixBlendMode: 'hard-light',
                              mb: 0.5,
                              position: 'absolute',
                              top: '105px',
                            }}
                          >
                            <Typography variant="body2" sx={{ fontSize: '0.75rem', fontWeight: 500 }}>
                              Sale
                            </Typography>
                          </Box>
                        )}
                        <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#333' }}>
                          ${painting.status === "Sale" ? Math.round(painting.price * 0.75) : painting.price}
                        </Typography>
                        {painting.status === "Sale" && (
                          <Typography variant="body1" sx={{ color: '#65635F', textDecoration: 'line-through' }}>
                            ${painting.price}
                          </Typography>
                        )}
                      </Box>
                      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 1 }}>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                          {['FavoriteBorderIcon', 'VisibilityIcon', 'BarChartIcon'].map((icon, i) => (
                            <IconButtonMui
                              key={i}
                              size="small"
                              sx={{
                                position: 'relative',
                                top: '-80px',
                                bgcolor: 'white',
                                boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.1)',
                                transition: 'all 0.3s ease',
                                '&:hover': { bgcolor: '#f0f0f0', transform: 'scale(1.1)' },
                                borderRadius: '50%',
                              }}
                            >
                              {icon === 'FavoriteBorderIcon' && <FavoriteBorderIcon fontSize="small" />}
                              {icon === 'VisibilityIcon' && <VisibilityIcon fontSize="small" />}
                              {icon === 'BarChartIcon' && <BarChartIcon fontSize="small" />}
                            </IconButtonMui>
                          ))}
                        </Box>
                        <Button
                          variant="contained"
                          sx={{
                            position: 'relative',
                            top: '-10px',
                            width: '106px',
                            height: '36px',
                            bgcolor: '#000',
                            color: '#fff',
                            borderRadius: 0,
                            fontWeight: 400,
                            fontSize: '12px',
                            transition: 'all 0.3s ease',
                            '&:hover': { bgcolor: '#333', transform: 'scale(1.05)' },
                            '&:disabled': { bgcolor: '#ccc', color: '#666' },
                          }}
                          size="small"
                          disabled={painting.status === "Out of Stock"}
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

        {/* Pagination */}
        {sortedPaintings.length > 0 && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              renderItem={(item) => (
                <PaginationItem
                  {...item}
                  sx={{
                    borderRadius: 0,
                    margin: '0 2px',
                    '&.Mui-selected': {
                      backgroundColor: '#000',
                      color: '#fff',
                      '&:hover': {
                        backgroundColor: '#333',
                      },
                    },
                    '&:hover': {
                      backgroundColor: '#f0f0f0',
                    },
                    '& .MuiPaginationItem-ellipsis': {
                      display: 'flex',
                      alignItems: 'center',
                      height: '32px',
                    },
                  }}
                />
              )}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default PaintingPage;