// src/components/Newsletter.jsx
import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const Newsletter = () => {
  return (
    <Box
      sx={{
        px: 4,
        py: 6,
        mt: 6,
        backgroundColor: '#f7f7f7',
        textAlign: 'center',
        borderRadius: 3,
        mx: 4,
      }}
    >
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Get 10% Off Your First Order
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={3}>
        Subscribe to our newsletter and stay updated on new collections and exclusive offers.
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 2,
          flexWrap: 'wrap',
        }}
      >
        <TextField
          label="Enter your email"
          variant="outlined"
          sx={{ width: '300px', backgroundColor: 'white', borderRadius: 1 }}
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: 'black',
            color: 'white',
            px: 4,
            borderRadius: 5,
            '&:hover': { backgroundColor: '#222' },
          }}
        >
          Subscribe
        </Button>
      </Box>
    </Box>
  );
};

export default Newsletter;
