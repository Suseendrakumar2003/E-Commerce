// src/components/HeroBanner.jsx
import React from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const HeroBanner = () => {
  return (
    <Box
      sx={{
        height: '400px',
        width: '100%',
        background: 'linear-gradient(to right, #f9f9f9, #f2f2f2)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 4
      }}
    >
      {/* Arrows */}
      <IconButton
        sx={{ position: 'absolute', left: 20, top: '50%', transform: 'translateY(-50%)' }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      <Box sx={{ textAlign: 'center', maxWidth: '600px' }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Flash Sale
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Discover exceptional artworks from talented artists worldwide
        </Typography>
        <Button
          variant="contained"
          color="inherit"
          sx={{
            backgroundColor: 'black',
            color: 'white',
            '&:hover': {
              backgroundColor: '#222'
            }
          }}
        >
          Shop Now
        </Button>
      </Box>

      <IconButton
        sx={{ position: 'absolute', right: 20, top: '50%', transform: 'translateY(-50%)' }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default HeroBanner;
