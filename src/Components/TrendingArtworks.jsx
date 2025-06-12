// // src/components/TrendingArtworks.jsx
// import React from 'react';
// import {
//   Box,
//   Typography,
//   Grid,
//   Card,
//   CardMedia,
//   CardContent,
//   IconButton,
//   Button,
// } from '@mui/material';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// const trendingProducts = [
//   {
//     title: 'Golden Hour',
//     price: '₹7,200',
//     image: '/images/trending1.jpg',
//   },
//   {
//     title: 'Cultural Vibe',
//     price: '₹5,800',
//     image: '/images/trending2.jpg',
//   },
//   {
//     title: 'Retro Bloom',
//     price: '₹6,400',
//     image: '/images/trending3.jpg',
//   },
// ];

// const TrendingArtworks = () => {
//   return (
//     <Box sx={{ px: 4, py: 6 }}>
//       <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
//         <Typography variant="h6" fontWeight="bold">
//           Trending Artworks
//         </Typography>
//         <Typography variant="body2" sx={{ cursor: 'pointer' }}>
//           View All &rarr;
//         </Typography>
//       </Box>

//       <Grid container spacing={3}>
//         {trendingProducts.map((product, idx) => (
//           <Grid item xs={12} sm={6} md={4} key={idx}>
//             <Card sx={{ borderRadius: 2 }}>
//               <Box sx={{ position: 'relative' }}>
//                 <CardMedia
//                   component="img"
//                   height="200"
//                   image={product.image}
//                   alt={product.title}
//                 />
//                 <IconButton
//                   sx={{
//                     position: 'absolute',
//                     top: 10,
//                     right: 10,
//                     background: 'white',
//                     '&:hover': { background: '#eee' },
//                   }}
//                 >
//                   <FavoriteBorderIcon />
//                 </IconButton>
//               </Box>
//               <CardContent>
//                 <Typography variant="subtitle1" fontWeight="medium">
//                   {product.title}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary" mb={1}>
//                   {product.price}
//                 </Typography>
//                 <Button
//                   variant="outlined"
//                   startIcon={<ShoppingCartIcon />}
//                   size="small"
//                   sx={{ borderRadius: 5 }}
//                 >
//                   Add to Cart
//                 </Button>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default TrendingArtworks;


import React from "react";
import { Box, Typography, Button, Grid, Card, CardMedia, CardContent, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import artwork1 from "../Assets/artwork 1.png";
import artwork2 from "../Assets/artwork 2.png";
import artwork3 from "../Assets/artwork 3.png";
import artwork4 from "../Assets/artwork 4.png";

const artworks = [
  {
    title: "Ocean Waves",
    artist: "Thomas Miller",
    type: "Oil on canvas, 2023",
    price: "$450",
    rating: 4.9,
    image: artwork1
  },
  {
    title: "City Lights",
    artist: "Sarah Johnson",
    type: "Acrylic on wood, 2023",
    price: "$320",
    rating: 4.6,
    image: artwork2
  },
  {
    title: "Forest Path",
    artist: "Michael Brown",
    type: "Watercolor, 2023",
    price: "$380",
    rating: 4.8,
    image: artwork3
  },
  {
    title: "Desert Sunset",
    artist: "Lisa Wang",
    type: "Digital art, 2023",
    price: "$290",
    rating: 4.7,
    image: artwork4
  }
];

const TrendingArtworks = () => {
  return (
    <Box sx={{ px: 6, py: 6, backgroundColor: "#F9F6F3" }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="h5" fontWeight="600">Trending Artworks</Typography>
        <Typography variant="body2" sx={{ cursor: "pointer" }}>View All &gt;</Typography>
      </Box>

      <Grid container spacing={3}>
        {artworks.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ borderRadius: 2, boxShadow: 1 }}>
              <Box position="relative">
                <CardMedia component="img" height="180" image={item.image} alt={item.title} />
                <Box position="absolute" top={10} right={10} display="flex" flexDirection="column" gap={1}>
                  <IconButton size="small" sx={{ backgroundColor: "#fff" }}><FavoriteBorderIcon fontSize="small" /></IconButton>
                  <IconButton size="small" sx={{ backgroundColor: "#fff" }}><MoreVertIcon fontSize="small" /></IconButton>
                </Box>
              </Box>
              <CardContent>
                <Typography fontWeight={600}>{item.title}</Typography>
                <Typography fontSize={13} color="text.secondary">{item.artist}</Typography>
                <Typography fontSize={13} color="text.secondary" mb={1}>{item.type}</Typography>
                <Typography fontSize={14} fontWeight={600}>{item.price}</Typography>
                <Button variant="contained" size="small" sx={{ mt: 1, backgroundColor: "black", "&:hover": { backgroundColor: "#333" } }}>
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
