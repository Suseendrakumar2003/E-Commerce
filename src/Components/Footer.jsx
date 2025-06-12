// src/components/Footer.jsx
import React from 'react';
import { Box, Typography, Link, IconButton, Grid } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#000',
        color: '#fff',
        px: 4,
        py: 5,
        mt: 6,
      }}
    >
      <Grid container spacing={4} justifyContent="space-between">
        {/* Logo / Brand */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Artistry
          </Typography>
          <Typography variant="body2" color="grey.400">
            Bringing you exclusive and timeless art.
          </Typography>
        </Grid>

        {/* Links */}
        <Grid item xs={12} md={4}>
          <Box display="flex" flexDirection="column" gap={1}>
            <Link href="#" underline="hover" color="inherit">
              About Us
            </Link>
            <Link href="#" underline="hover" color="inherit">
              Contact
            </Link>
            <Link href="#" underline="hover" color="inherit">
              Terms & Conditions
            </Link>
            <Link href="#" underline="hover" color="inherit">
              Privacy Policy
            </Link>
          </Box>
        </Grid>

        {/* Social Media */}
        <Grid item xs={12} md={4}>
          <Typography variant="body1" gutterBottom>
            Follow us
          </Typography>
          <Box>
            <IconButton href="#" sx={{ color: 'white' }}>
              <InstagramIcon />
            </IconButton>
            <IconButton href="#" sx={{ color: 'white' }}>
              <TwitterIcon />
            </IconButton>
            <IconButton href="#" sx={{ color: 'white' }}>
              <FacebookIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* Copyright */}
      <Box textAlign="center" mt={4} color="grey.500">
        <Typography variant="caption">
          © {new Date().getFullYear()} Artistry. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
