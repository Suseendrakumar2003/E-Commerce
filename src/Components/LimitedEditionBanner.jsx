// src/components/LimitedEditionBanner.jsx
import React from 'react';
import { Box, Typography, Button, Grid, CardMedia } from '@mui/material';

const LimitedEditionBanner = () => {
  return (
    <Box
      sx={{
        px: 4,
        py: 8,
        backgroundColor: '#f0f0f0',
        borderRadius: 3,
        mx: 4,
        mt: 4
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight="bold" mb={2}>
            Limited Edition Drop
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={3}>
            Explore a unique selection of artworks released exclusively for a short time.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'black',
              color: 'white',
              borderRadius: 5,
              px: 3,
              '&:hover': { backgroundColor: '#222' }
            }}
          >
            Shop Now
          </Button>
        </Grid>

        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <CardMedia
            component="img"
            image="/images/limited-drop.jpg"
            alt="Limited Edition"
            sx={{ borderRadius: 2, maxHeight: 280 }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default LimitedEditionBanner;
