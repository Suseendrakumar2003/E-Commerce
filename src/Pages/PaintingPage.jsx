import React, { useState } from 'react';
import {
  Box, Grid, Typography, Slider, Checkbox, FormControlLabel,
  Card, CardMedia, CardContent, CardActions, Button, Rating,
  Pagination, Drawer, IconButton, Chip, IconButton as IconButtonMui,
  Select, MenuItem, FormControl
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FilterListIcon from '@mui/icons-material/FilterList';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ShareIcon from '@mui/icons-material/Share';
import GridViewIcon from '@mui/icons-material/GridView';
import ListIcon from '@mui/icons-material/List';

// Images (ensure these match the screenshot content)
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

const paintings = [
  { title: "Abstract Harmony", artist: "Maria Santos", price: 540, rating: 4.5, image: r1c1, status: "Sale" },
  { title: "Urban Dreams", artist: "John Doe", price: 820, rating: 4.0, image: r1c2 },
  { title: "Coastal Breeze", artist: "Elena Rodriguez", price: 650, rating: 5.0, image: r1c3, status: "Out of Stock" },
  { title: "Morning Vista", artist: "Thomas Miller", price: 320, rating: 4.0, image: r2c1 },
  { title: "City Lights", artist: "Sarah Johnson", price: 480, rating: 4.5, image: r2c2 },
  { title: "Forest Path", artist: "Michael Brown", price: 380, rating: 4.0, image: r2c3 },
  { title: "Desert Sunset", artist: "Lisa Wong", price: 560, rating: 5.0, image: r3c1 },
  { title: "Ocean Waves", artist: "Robert Davis", price: 440, rating: 4.5, image: r3c2 },
  { title: "Autumn Colors", artist: "Jennifer Lane", price: 300, rating: 4.0, image: r3c3, status: "Sale" },
  { title: "Night Sky", artist: "Emma Wilson", price: 350, rating: 4.5, image: r4c1 },
  { title: "Spring Garden", artist: "James Anderson", price: 420, rating: 4.0, image: r4c2 },
  { title: "Winter Landscape", artist: "Amelia Carter", price: 580, rating: 5.0, image: r4c3 },
];

const FilterSection = ({ priceRange, handlePriceChange }) => (
  <Box sx={{
    width: 256,
    height: 'auto',
    bgcolor: '#FBF6F4',
    borderRadius: 2,
    p: 2,
    fontFamily: 'Arial',
    overflow: 'auto',
  }}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
      <Typography fontWeight="bold">Filters</Typography>
      <Typography variant="body2" color="primary" sx={{ cursor: 'pointer' }}>Clear All</Typography>
    </Box>

    <Typography fontWeight={600} fontSize={14}>Price Range</Typography>
    <Slider
      value={priceRange}
      onChange={handlePriceChange}
      min={0}
      max={1000}
      sx={{ mt: 1 }}
    />
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography variant="body2">$0</Typography>
      <Typography variant="body2">$1000</Typography>
    </Box>

    <Box sx={{ mt: 3 }}>
      <Typography fontWeight={600} fontSize={14} gutterBottom>Brands</Typography>
      <FormControlLabel control={<Checkbox size="small" />} label="Gallery One" />
      <FormControlLabel control={<Checkbox size="small" />} label="Modern Arts" />
      <FormControlLabel control={<Checkbox size="small" />} label="Art House" />
      <FormControlLabel control={<Checkbox size="small" />} label="Classic Studio" />
    </Box>

    <Box sx={{ mt: 3 }}>
      <Typography fontWeight={600} fontSize={14} gutterBottom>Customer Rating</Typography>
      {[4.5, 4, 3, 2].map((rating, i) => (
        <FormControlLabel
          key={i}
          control={<Checkbox size="small" />}
          label={
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Rating value={rating} readOnly size="small" precision={0.5} />
              <Typography variant="body2" sx={{ ml: 0.5 }}>& up</Typography>
            </Box>
          }
        />
      ))}
    </Box>

    <Box sx={{ mt: 3 }}>
      <Typography fontWeight={600} fontSize={14} gutterBottom>Availability</Typography>
      <FormControlLabel control={<Checkbox size="small" />} label="In Stock" />
      <FormControlLabel control={<Checkbox size="small" />} label="On Sale" />
      <FormControlLabel control={<Checkbox size="small" />} label="New Arrivals" />
    </Box>
  </Box>
);

const PaintingPage = () => {
  const [priceRange, setPriceRange] = useState([200, 1000]);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [sortBy, setSortBy] = useState('Popularity');
  const [viewMode, setViewMode] = useState('grid');

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleViewModeChange = (mode) => {
    setViewMode(mode);
  };

  // Sort paintings based on the selected sort option
  const sortedPaintings = [...paintings].sort((a, b) => {
    if (sortBy === 'Price: Low to High') {
      return a.price - b.price;
    } else if (sortBy === 'Price: High to Low') {
      return b.price - a.price;
    } else {
      // Default to Popularity (e.g., by rating)
      return b.rating - a.rating;
    }
  });

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', p: 4, gap: 4 }}>
      {/* Sidebar for desktop */}
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <FilterSection priceRange={priceRange} handlePriceChange={handlePriceChange} />
      </Box>

      {/* Filter drawer for mobile */}
      <IconButton
        onClick={() => setOpenDrawer(true)}
        sx={{ display: { xs: 'block', md: 'none' }, position: 'fixed', top: 20, left: 20, zIndex: 2000 }}
      >
        <FilterListIcon />
      </IconButton>
      <Drawer anchor="left" open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <FilterSection priceRange={priceRange} handlePriceChange={handlePriceChange} />
      </Drawer>

      {/* Products */}
      <Box sx={{ flex: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, maxWidth: '912px' }}>
          <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
            <Typography sx={{ fontSize: '24px', fontWeight: 'bold', display: 'inline' }}>
              Paintings
            </Typography>
            <Typography sx={{ fontSize: '14px', color: 'text.secondary', display: 'inline', ml: 1 }}>
              (12 products)
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
                    bgcolor: '#f5f5f5',
                    borderRadius: 1,
                    '.MuiOutlinedInput-notchedOutline': { border: 'none' },
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
                borderRadius: 1,
              }}
            >
              <GridViewIcon fontSize="small" />
            </IconButtonMui>
            <IconButtonMui
              onClick={() => handleViewModeChange('list')}
              sx={{
                bgcolor: viewMode === 'list' ? '#000' : '#fff',
                color: viewMode === 'list' ? '#fff' : '#000',
                border: '1px solid #ccc',
                borderRadius: 1,
              }}
            >
              <ListIcon fontSize="small" />
            </IconButtonMui>
          </Box>
        </Box>

        {viewMode === 'grid' ? (
          <Grid container spacing={3}>
            {sortedPaintings.map((painting, index) => (
              <Grid item key={index}>
                <Card
                  sx={{
                    width: 320,
                    height: 520,
                    border: '1px solid #ccc',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                    borderRadius: 2,
                    boxShadow: 1,
                  }}
                >
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia
                      component="img"
                      sx={{
                        width: 320,
                        height: 370,
                        objectFit: 'cover',
                        borderRadius: '8px 8px 0 0',
                      }}
                      image={painting.image}
                      alt={painting.title}
                    />
                    {painting.status && (
                      <Chip
                        label={painting.status}
                        sx={{
                          position: 'absolute',
                          top: 10,
                          left: 10,
                          bgcolor: painting.status === "Sale" ? '#FFD700' : '#D3D3D3',
                          color: painting.status === "Sale" ? '#000' : '#000',
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
                      <IconButtonMui size="small" sx={{ bgcolor: 'white', boxShadow: 1 }}>
                        <FavoriteBorderIcon fontSize="small" />
                      </IconButtonMui>
                      <IconButtonMui size="small" sx={{ bgcolor: 'white', boxShadow: 1 }}>
                        <VisibilityIcon fontSize="small" />
                      </IconButtonMui>
                      <IconButtonMui size="small" sx={{ bgcolor: 'white', boxShadow: 1 }}>
                        <ShareIcon fontSize="small" />
                      </IconButtonMui>
                    </Box>
                  </Box>
                  <CardContent sx={{ p: 2, pb: 1 }}>
                    <Typography variant="h6" sx={{ fontSize: '1.1rem', mb: 0.5 }}>
                      {painting.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                      {painting.artist}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                      <Rating value={painting.rating} readOnly precision={0.5} size="small" />
                      <Typography variant="body2" sx={{ ml: 0.5 }}>
                        {painting.rating}
                      </Typography>
                    </Box>
                  </CardContent>
                  <CardActions sx={{ p: 2, pt: 0, justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                      ${painting.status === "Sale" ? Math.round(painting.price * 0.75) : painting.price}
                      {painting.status === "Sale" && (
                        <Typography
                          component="span"
                          variant="body2"
                          color="text.secondary"
                          sx={{ textDecoration: 'line-through', ml: 1 }}
                        >
                          ${painting.price}
                        </Typography>
                      )}
                    </Typography>
                    <Button
                      variant="contained"
                      startIcon={<AddShoppingCartIcon />}
                      sx={{ bgcolor: '#000', color: '#fff', '&:hover': { bgcolor: '#333' } }}
                      size="small"
                      disabled={painting.status === "Out of Stock"}
                    >
                      Add to Cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {sortedPaintings.map((painting, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  width: '100%',
                  height: 200,
                  border: '1px solid #ccc',
                  borderRadius: 2,
                  boxShadow: 1,
                  position: 'relative',
                }}
              >
                {/* Image Section */}
                <Box sx={{ position: 'relative', width: 160, height: 180, m: 1 }}>
                  <CardMedia
                    component="img"
                    sx={{
                      width: 160,
                      height: 180,
                      objectFit: 'cover',
                      borderRadius: 2,
                    }}
                    image={painting.image}
                    alt={painting.title}
                  />
                  {painting.status && (
                    <Chip
                      label={painting.status}
                      sx={{
                        position: 'absolute',
                        top: 10,
                        left: 10,
                        bgcolor: painting.status === "Sale" ? '#FFD700' : '#D3D3D3',
                        color: painting.status === "Sale" ? '#000' : '#000',
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
                    <IconButtonMui size="small" sx={{ bgcolor: 'white', boxShadow: 1 }}>
                      <FavoriteBorderIcon fontSize="small" />
                    </IconButtonMui>
                    <IconButtonMui size="small" sx={{ bgcolor: 'white', boxShadow: 1 }}>
                      <VisibilityIcon fontSize="small" />
                    </IconButtonMui>
                    <IconButtonMui size="small" sx={{ bgcolor: 'white', boxShadow: 1 }}>
                      <ShareIcon fontSize="small" />
                    </IconButtonMui>
                  </Box>
                </Box>

                {/* Text and Button Section */}
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', p: 2 }}>
                  <Typography variant="h6" sx={{ fontSize: '1.1rem', mb: 0.5 }}>
                    {painting.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                    {painting.artist}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                    <Rating value={painting.rating} readOnly precision={0.5} size="small" />
                    <Typography variant="body2" sx={{ ml: 0.5 }}>
                      {painting.rating}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                      ${painting.status === "Sale" ? Math.round(painting.price * 0.75) : painting.price}
                      {painting.status === "Sale" && (
                        <Typography
                          component="span"
                          variant="body2"
                          color="text.secondary"
                          sx={{ textDecoration: 'line-through', ml: 1 }}
                        >
                          ${painting.price}
                        </Typography>
                      )}
                    </Typography>
                    <Button
                      variant="contained"
                      startIcon={<AddShoppingCartIcon />}
                      sx={{ bgcolor: '#000', color: '#fff', '&:hover': { bgcolor: '#333' } }}
                      size="small"
                      disabled={painting.status === "Out of Stock"}
                    >
                      Add to Cart
                    </Button>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        )}

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Pagination count={3} color="primary" />
        </Box>
      </Box>
    </Box>
  );
};

export default PaintingPage;