// src/components/Navbar.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const Navbar = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ px: 4 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo */}
        <Typography variant="h6" fontWeight="bold" color="black">
          <span style={{ fontWeight: 'bold' }}>ck.</span> cultured kid.
        </Typography>

        {/* Nav Links */}
        <Box sx={{ display: 'flex', gap: 4 }}>
          {['Paintings', 'Drawings', 'Sculpture', 'Artists'].map((item) => (
            <Typography key={item} variant="body2" sx={{ cursor: 'pointer', color: 'black' }}>
              {item}
            </Typography>
          ))}
        </Box>

        {/* Icons */}
        <Box>
          <IconButton><Badge badgeContent={2} color="error"><ShoppingCartIcon /></Badge></IconButton>
          <IconButton><PersonOutlineIcon /></IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
