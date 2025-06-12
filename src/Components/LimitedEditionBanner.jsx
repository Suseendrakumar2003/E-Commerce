// // src/components/LimitedEditionBanner.jsx
// import React from 'react';
// import { Box, Typography, Button, Grid, CardMedia } from '@mui/material';

// const LimitedEditionBanner = () => {
//   return (
//     <Box
//       sx={{
//         px: 4,
//         py: 8,
//         backgroundColor: '#f0f0f0',
//         borderRadius: 3,
//         mx: 4,
//         mt: 4
//       }}
//     >
//       <Grid container spacing={4} alignItems="center">
//         {/* Text Section */}
//         <Grid item xs={12} md={6}>
//           <Typography variant="h4" fontWeight="bold" mb={2}>
//             Limited Edition Drop
//           </Typography>
//           <Typography variant="body1" color="text.secondary" mb={3}>
//             Explore a unique selection of artworks released exclusively for a short time.
//           </Typography>
//           <Button
//             variant="contained"
//             sx={{
//               backgroundColor: 'black',
//               color: 'white',
//               borderRadius: 5,
//               px: 3,
//               '&:hover': { backgroundColor: '#222' }
//             }}
//           >
//             Shop Now
//           </Button>
//         </Grid>

//         {/* Image Section */}
//         <Grid item xs={12} md={6}>
//           <CardMedia
//             component="img"
//             image="/images/limited-drop.jpg"
//             alt="Limited Edition"
//             sx={{ borderRadius: 2, maxHeight: 280 }}
//           />
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default LimitedEditionBanner;


import React from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { motion } from "framer-motion";
import limitedEditionImg from "../Assets/LimitedEd.png"; // Add your image here

const LimitedEditionBanner = () => {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#fff",
        py: 6,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          maxWidth: "1100px",
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Left Navigation */}
        <IconButton>
          <ArrowBackIosNew />
        </IconButton>

        {/* Image */}
        <Box
          component={motion.img}
          src={limitedEditionImg}
          alt="Limited Edition Art"
          sx={{
            width: { xs: "80%", md: "40%" },
            borderRadius: 2,
          }}
          whileHover={{ scale: 1.02 }}
        />

        {/* Right Navigation */}
        <IconButton>
          <ArrowForwardIos />
        </IconButton>

        {/* Text Section */}
        <Box
          sx={{
            textAlign: { xs: "center", md: "left" },
            mt: { xs: 4, md: 0 },
            ml: { md: 4 },
            flex: 1,
          }}
        >
          <Typography
            variant="overline"
            sx={{
              fontWeight: "bold",
              backgroundColor: "#f2f2f2",
              px: 2,
              py: 0.5,
              borderRadius: 1,
              display: "inline-block",
            }}
          >
            LIMITED EDITION
          </Typography>

          <Typography variant="h5" fontWeight="bold" mt={2}>
            Digital Art
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            mt={1}
            mb={2}
            maxWidth="400px"
          >
            Limited to 50 pieces worldwide. Experience unmatched performance and style.
          </Typography>

          <Typography variant="h6" fontWeight="bold">
            ₹599{" "}
            <Typography
              component="span"
              variant="body2"
              sx={{ color: "gray", ml: 1 }}
            >
              USD
            </Typography>
          </Typography>

          <Button
            variant="contained"
            sx={{
              mt: 2,
              bgcolor: "#000",
              px: 4,
              py: 1.5,
              fontWeight: "bold",
              "&:hover": { bgcolor: "#333" },
            }}
          >
            CLAIM YOURS
          </Button>
        </Box>
      </Box>

      {/* Pagination Dots */}
      <Box display="flex" justifyContent="center" mt={4} gap={2}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Box
            key={index}
            sx={{
              width: index === 0 ? 30 : 12,
              height: 4,
              bgcolor: index === 0 ? "#000" : "#e0e0e0",
              borderRadius: 10,
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default LimitedEditionBanner;
