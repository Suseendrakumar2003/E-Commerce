// src/components/TrendingArtworks.jsx
import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Button,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const trendingProducts = [
  {
    title: 'Golden Hour',
    price: '₹7,200',
    image: '/images/trending1.jpg',
  },
  {
    title: 'Cultural Vibe',
    price: '₹5,800',
    image: '/images/trending2.jpg',
  },
  {
    title: 'Retro Bloom',
    price: '₹6,400',
    image: '/images/trending3.jpg',
  },
];

const TrendingArtworks = () => {
  return (
    <Box sx={{ px: 4, py: 6 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h6" fontWeight="bold">
          Trending Artworks
        </Typography>
        <Typography variant="body2" sx={{ cursor: 'pointer' }}>
          View All &rarr;
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {trendingProducts.map((product, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Card sx={{ borderRadius: 2 }}>
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.title}
                />
                <IconButton
                  sx={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    background: 'white',
                    '&:hover': { background: '#eee' },
                  }}
                >
                  <FavoriteBorderIcon />
                </IconButton>
              </Box>
              <CardContent>
                <Typography variant="subtitle1" fontWeight="medium">
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={1}>
                  {product.price}
                </Typography>
                <Button
                  variant="outlined"
                  startIcon={<ShoppingCartIcon />}
                  size="small"
                  sx={{ borderRadius: 5 }}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TrendingArtworks;
