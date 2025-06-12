// src/components/FlashSale.jsx
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

const products = [
  {
    title: 'Abstract Blend',
    price: '₹6,000',
    image: '/images/flash1.jpg',
  },
  {
    title: 'Nature Ink Art',
    price: '₹4,500',
    image: '/images/flash2.jpg',
  },
  {
    title: 'Color Rush',
    price: '₹5,200',
    image: '/images/flash3.jpg',
  },
];

const FlashSale = () => {
  return (
    <Box sx={{ px: 4, py: 6 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h6" fontWeight="bold">
          Flash Sale
        </Typography>
        <Typography variant="body2" sx={{ cursor: 'pointer' }}>
          View All &rarr;
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {products.map((product, idx) => (
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

export default FlashSale;
