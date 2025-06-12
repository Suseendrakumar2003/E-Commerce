// src/components/CategorySection.jsx
import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardActionArea } from '@mui/material';

const categories = [
  { title: 'Paintings', image: '/images/category-painting.jpg' },
  { title: 'Sculptures', image: '/images/category-sculpture.jpg' },
  { title: 'Photography', image: '/images/category-photo.jpg' },
  { title: 'Digital Art', image: '/images/category-digital.jpg' },
];

const CategorySection = () => {
  return (
    <Box sx={{ px: 4, py: 6 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h6" fontWeight="bold">
          Shop by Category
        </Typography>
        <Typography variant="body2" sx={{ cursor: 'pointer' }}>
          View All &rarr;
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {categories.map((cat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ borderRadius: 2 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="180"
                  image={cat.image}
                  alt={cat.title}
                />
              </CardActionArea>
            </Card>
            <Typography variant="body1" mt={1} align="center">
              {cat.title}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategorySection;
