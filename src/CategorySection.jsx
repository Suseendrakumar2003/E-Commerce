// import { Box, Typography, Grid, Card, CardMedia, CardContent, Button } from "@mui/material";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import image1 from "../src/Assets/Painting.png";
// import image2 from "../src/Assets/Sculptures.png";
// import image3 from "../src/Assets/Photography.png";
// import image4 from "../src/Assets/Digital Art.png";

// const categories = [
//   {
//     title: "Paintings",
//     image: image1,
//   },
//   {
//     title: "Sculptures",
//     image: image2,
//   },
//   {
//     title: "Photography",
//     image: image3,
//   },
//   {
//     title: "Digital Art",
//     image: image4,
//   },
// ];

// const ShopByCategory = () => {
//   return (
//     <Box sx={{ px: { xs: 2, md: 8 }, py: 6 }}>
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           mb: 4,
//         }}
//       >
//         <Typography variant="h5" sx={{ fontWeight: 500 }}>
//           Shop by Category
//         </Typography>

//         <Button
//           endIcon={<ArrowForwardIcon />}
//           sx={{
//             color: "#111",
//             fontSize: "14px",
//             textTransform: "none",
//             "&:hover": { backgroundColor: "transparent", textDecoration: "underline" },
//           }}
//         >
//           View All
//         </Button>
//       </Box>

//       <Grid container spacing={3}>
//         {categories.map((category, index) => (
//           <Grid item xs={12} sm={6} md={3} key={index}>
//             <Card
//               elevation={0}
//               sx={{
//                 cursor: "pointer",
//                 transition: "transform 0.3s ease",
//                 "&:hover": {
//                   transform: "translateY(-4px)",
//                 },
//               }}
//             >
//               <CardMedia
//                 component="img"
//                 height="180"
//                 image={category.image}
//                 alt={category.title}
//               />
//               <CardContent sx={{ textAlign: "center", pt: 1 }}>
//                 <Typography variant="body1" sx={{ fontSize: "15px", fontWeight: 400 }}>
//                   {category.title}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default ShopByCategory;


import { Box, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import image1 from "../src/Assets/Painting.png";
import image2 from "../src/Assets/Sculptures.png";
import image3 from "../src/Assets/Photography.png";
import image4 from "../src/Assets/Digital Art.png";

const categories = [
  {
    title: "Paintings",
    image: image1,
  },
  {
    title: "Sculptures",
    image: image2,
  },
  {
    title: "Photography",
    image: image3,
  },
  {
    title: "Digital Art",
    image: image4,
  },
];

const ShopByCategory = () => {
  return (
    <Box sx={{ px: { xs: 2, md: 8 }, py: 6 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600, // Slightly bolder to match the image
            fontSize: "1.5rem", // Match the larger font size
            color: "#111",
          }}
        >
          Shop by Category
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          <Typography
            sx={{
              color: "#111",
              fontSize: "0.85rem", // Smaller font to match the image
              textTransform: "none",
              mr: 0.5,
            }}
          >
            View All
          </Typography>
          <ArrowForwardIcon sx={{ fontSize: "1rem", color: "#111" }} />
        </Box>
      </Box>

      <Grid container spacing={3}>
        {categories.map((category, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              elevation={0}
              sx={{
                cursor: "pointer",
              }}
            >
              <CardMedia
                component="img"
                height="200" // Slightly taller to match the image proportions
                image={category.image}
                alt={category.title}
              />
              <CardContent sx={{ textAlign: "center", pt: 2, pb: 0 }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "0.9rem", // Smaller font to match the image
                    fontWeight: 400, // Lighter weight
                    color: "#555", // Slightly lighter color
                  }}
                >
                  {category.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ShopByCategory;