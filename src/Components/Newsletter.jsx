// // src/components/Newsletter.jsx
// import React from 'react';
// import { Box, Typography, TextField, Button } from '@mui/material';

// const Newsletter = () => {
//   return (
//     <Box
//       sx={{
//         px: 4,
//         py: 6,
//         mt: 6,
//         backgroundColor: '#f7f7f7',
//         textAlign: 'center',
//         borderRadius: 3,
//         mx: 4,
//       }}
//     >
//       <Typography variant="h5" fontWeight="bold" gutterBottom>
//         Get 10% Off Your First Order
//       </Typography>
//       <Typography variant="body1" color="text.secondary" mb={3}>
//         Subscribe to our newsletter and stay updated on new collections and exclusive offers.
//       </Typography>
//       <Box
//         sx={{
//           display: 'flex',
//           justifyContent: 'center',
//           gap: 2,
//           flexWrap: 'wrap',
//         }}
//       >
//         <TextField
//           label="Enter your email"
//           variant="outlined"
//           sx={{ width: '300px', backgroundColor: 'white', borderRadius: 1 }}
//         />
//         <Button
//           variant="contained"
//           sx={{
//             backgroundColor: 'black',
//             color: 'white',
//             px: 4,
//             borderRadius: 5,
//             '&:hover': { backgroundColor: '#222' },
//           }}
//         >
//           Subscribe
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default Newsletter;


import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const NewsletterSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#111",
        color: "#fff",
        py: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography variant="h5" fontWeight="500" gutterBottom>
        Stay Updated
      </Typography>
      <Typography
        variant="body2"
        sx={{ maxWidth: 500, color: "#ccc", mb: 4 }}
      >
        Subscribe to our newsletter and be the first to know about new arrivals,
        exclusive collections, and special offers
      </Typography>

      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
        }}
        onSubmit={(e) => {
          e.preventDefault();
          // Add your submit logic here
        }}
      >
        <TextField
          placeholder="Enter your email address"
          variant="outlined"
          size="small"
          sx={{
            bgcolor: "#fff",
            borderRadius: 1,
            width: { xs: "100%", sm: "300px" },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            bgcolor: "#666",
            color: "#fff",
            px: 4,
            "&:hover": {
              bgcolor: "#444",
            },
          }}
        >
          Subscribe
        </Button>
      </Box>
    </Box>
  );
};

export default NewsletterSection;
