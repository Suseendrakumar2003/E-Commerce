// import React from "react";
// import {
//   Box,
//   Typography,
//   Grid,
//   Card,
//   CardMedia,
//   CardContent,
//   Button,
//   IconButton,
//   Rating,
// } from "@mui/material";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// // Import the images from the Assets folder
// import artwork1 from "../Assets/artwork 1.png";
// import artwork2 from "../Assets/artwork 2.png";
// import artwork3 from "../Assets/artwork 3.png";
// import artwork4 from "../Assets/artwork 4.png";

// // Import the font (Google Fonts - Raleway)
// import "@fontsource/raleway/400.css";
// import "@fontsource/raleway/700.css";

// const artworks = [
//   {
//     title: "Ocean Waves",
//     artist: "Thomas Miller",
//     medium: "Oil on canvas",
//     year: 2023,
//     rating: 4.9,
//     price: 450,
//     image: artwork1,
//   },
//   {
//     title: "City Lights",
//     artist: "Sarah Johnson",
//     medium: "Acrylic on wood",
//     year: 2023,
//     rating: 4.6,
//     price: 320,
//     image: artwork2,
//   },
//   {
//     title: "Forest Path",
//     artist: "Michael Brown",
//     medium: "Watercolor",
//     year: 2023,
//     rating: 4.8,
//     price: 380,
//     image: artwork3,
//   },
//   {
//     title: "Desert Sunset",
//     artist: "Lisa Wang",
//     medium: "Digital art",
//     year: 2023,
//     rating: 4.7,
//     price: 290,
//     image: artwork4,
//   },
// ];

// // Animation variants for the card
// const cardVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: (index) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: index * 0.2,
//       duration: 0.6,
//       ease: "easeOut",
//     },
//   }),
//   hover: {
//     scale: 1.05,
//     boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.2)",
//     transition: { duration: 0.3 },
//   },
// };

// // Animation variants for the header
// const headerVariants = {
//   hidden: { opacity: 0, x: -50 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
// };

// const TrendingArtworks = () => {
//   const navigate = useNavigate(); // Initialize useNavigate

//   // Handle navigation to View.jsx with artwork data
//   const handleViewClick = (artwork) => {
//     navigate("/view", { state: { artwork } });
//   };

//   return (
//     <Box sx={{ padding: 10, backgroundColor: "#f5f2ef" }}>
//       {/* Header Section with Animation */}
//       <motion.div variants={headerVariants} initial="hidden" animate="visible">
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             mb: 6,
//           }}
//         >
//           <Typography
//             variant="h4"
//             sx={{
//               fontWeight: 100,
//               fontFamily: '"Raleway", sans-serif',
//             }}
//           >
//             Trending Artworks
//           </Typography>
//           <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//             <Typography
//               variant="body1"
//               sx={{
//                 color: "#1976d2",
//                 cursor: "pointer",
//               }}
//               onClick={() => navigate("/paintings")} // Navigate to /paintings
//             >
//               View All
//             </Typography>
//             <ArrowForwardIcon
//               sx={{
//                 color: "#1976d2",
//                 fontSize: "1.2rem",
//               }}
//             />
//           </Box>
//         </Box>
//       </motion.div>

//       {/* Artworks Grid */}
//       <Grid
//         container
//         spacing={3}
//         sx={{
//           alignItems: "center",
//           justifyContent: "space-between",
//         }}
//       >
//         {artworks.map((artwork, index) => (
//           <Grid item xs={12} sm={6} md={3} key={index} component="div">
//             <motion.div
//               variants={cardVariants}
//               initial="hidden"
//               animate="visible"
//               whileHover="hover"
//               custom={index}
//             >
//               <Card
//                 sx={{
//                   position: "relative",
//                   borderRadius: 0,
//                   boxShadow: 0,
//                   width: 290,
//                   height: 454,
//                   border: "1px solid",
//                   borderColor: "grey.300",
//                   display: "flex",
//                   flexDirection: "column",
//                 }}
//               >
//                 {/* Image Section */}
//                 <Box sx={{ position: "relative", flexShrink: 0 }}>
//                   <CardMedia
//                     component="img"
//                     height="256"
//                     image={artwork.image}
//                     alt={artwork.title}
//                     sx={{ objectFit: "cover", width: "100%" }}
//                   />
//                   {/* Icons on the Image */}
//                   <Box
//                     sx={{
//                       position: "absolute",
//                       top: 8,
//                       right: 8,
//                       display: "flex",
//                       flexDirection: "column",
//                       gap: 1,
//                       width: "33px",
//                       height: "auto",
//                     }}
//                   >
//                     <IconButton
//                       sx={{
//                         backgroundColor: "white",
//                         "&:hover": { backgroundColor: "#f0f0f0" },
//                         width: "33px",
//                         height: "33px",
//                       }}
//                     >
//                       <FavoriteBorderIcon />
//                     </IconButton>
//                     <IconButton
//                       onClick={() => handleViewClick(artwork)} // Navigate on click
//                       sx={{
//                         backgroundColor: "white",
//                         "&:hover": { backgroundColor: "#f0f0f0" },
//                         width: "33px",
//                         height: "33px",
//                       }}
//                     >
//                       <VisibilityIcon />
//                     </IconButton>
//                   </Box>
//                 </Box>

//                 {/* Card Content */}
//                 <CardContent
//                   sx={{
//                     textAlign: "left",
//                     flexGrow: 1,
//                     display: "flex",
//                     flexDirection: "column",
//                     justifyContent: "space-between",
//                   }}
//                 >
//                   <Box>
//                     <Typography
//                       variant="h6"
//                       sx={{
//                         fontWeight: "bold",
//                         fontFamily: '"Raleway", sans-serif',
//                       }}
//                     >
//                       {artwork.title}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                       {artwork.artist}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                       {artwork.medium}, {artwork.year}
//                     </Typography>
//                     <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
//                       <Rating
//                         value={artwork.rating}
//                         precision={0.1}
//                         readOnly
//                         size="small"
//                       />
//                       <Typography variant="body2" sx={{ ml: 1 }}>
//                         {artwork.rating}
//                       </Typography>
//                     </Box>
//                   </Box>
//                   <Box
//                     sx={{
//                       display: "flex",
//                       justifyContent: "space-between",
//                       alignItems: "center",
//                       mt: 2,
//                     }}
//                   >
//                     <Typography variant="h6" sx={{ fontWeight: "bold" }}>
//                       ${artwork.price}
//                     </Typography>
//                     <Button
//                       variant="contained"
//                       sx={{
//                         backgroundColor: "#000",
//                         borderRadius: 0,
//                         "&:hover": { backgroundColor: "#333" },
//                         fontFamily: '"Raleway", sans-serif',
//                         fontWeight: 700,
//                       }}
//                     >
//                       Add to Cart
//                     </Button>
//                   </Box>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default TrendingArtworks;


import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  IconButton,
  Rating,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Components/CartContext"; // Import useCart hook

// Import the images from the Assets folder
import artwork1 from "../Assets/artwork 1.png";
import artwork2 from "../Assets/artwork 2.png";
import artwork3 from "../Assets/artwork 3.png";
import artwork4 from "../Assets/artwork 4.png";

// Import the font (Google Fonts - Raleway)
import "@fontsource/raleway/400.css";
import "@fontsource/raleway/700.css";

const artworks = [
  {
    title: "Ocean Waves",
    artist: "Thomas Miller",
    medium: "Oil on canvas",
    year: 2023,
    rating: 4.9,
    price: 450,
    image: artwork1,
  },
  {
    title: "City Lights",
    artist: "Sarah Johnson",
    medium: "Acrylic on wood",
    year: 2023,
    rating: 4.6,
    price: 320,
    image: artwork2,
  },
  {
    title: "Forest Path",
    artist: "Michael Brown",
    medium: "Watercolor",
    year: 2023,
    rating: 4.8,
    price: 380,
    image: artwork3,
  },
  {
    title: "Desert Sunset",
    artist: "Lisa Wang",
    medium: "Digital art",
    year: 2023,
    rating: 4.7,
    price: 290,
    image: artwork4,
  },
];

// Animation variants for the card
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
  hover: {
    scale: 1.05,
    boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.2)",
    transition: { duration: 0.3 },
  },
};

// Animation variants for the header
const headerVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const TrendingArtworks = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const { addToCart } = useCart(); // Use the cart context

  // Handle navigation to View.jsx with artwork data
  const handleViewClick = (artwork) => {
    navigate("/view", { state: { artwork } });
  };

  // Handle adding to cart
  const handleAddToCart = (artwork) => {
    const cartItem = {
      title: artwork.title,
      artist: artwork.artist,
      price: artwork.price,
      image: artwork.image,
    };
    addToCart(cartItem);
  };

  return (
    <Box sx={{ padding: 10, backgroundColor: "#f5f2ef" }}>
      {/* Header Section with Animation */}
      <motion.div variants={headerVariants} initial="hidden" animate="visible">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 6,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 100,
              fontFamily: '"Raleway", sans-serif',
            }}
          >
            Trending Artworks
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography
              variant="body1"
              sx={{
                color: "#1976d2",
                cursor: "pointer",
              }}
              onClick={() => navigate("/paintings")} // Navigate to /paintings
            >
              View All
            </Typography>
            <ArrowForwardIcon
              sx={{
                color: "#1976d2",
                fontSize: "1.2rem",
              }}
            />
          </Box>
        </Box>
      </motion.div>

      {/* Artworks Grid */}
      <Grid
        container
        spacing={3}
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {artworks.map((artwork, index) => (
          <Grid item xs={12} sm={6} md={3} key={index} component="div">
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              custom={index}
            >
              <Card
                sx={{
                  position: "relative",
                  borderRadius: 0,
                  boxShadow: 0,
                  width: 290,
                  height: 454,
                  border: "1px solid",
                  borderColor: "grey.300",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Image Section */}
                <Box sx={{ position: "relative", flexShrink: 0 }}>
                  <CardMedia
                    component="img"
                    height="256"
                    image={artwork.image}
                    alt={artwork.title}
                    sx={{ objectFit: "cover", width: "100%" }}
                  />
                  {/* Icons on the Image */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 8,
                      right: 8,
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                      width: "33px",
                      height: "auto",
                    }}
                  >
                    <IconButton
                      sx={{
                        backgroundColor: "white",
                        "&:hover": { backgroundColor: "#f0f0f0" },
                        width: "33px",
                        height: "33px",
                      }}
                    >
                      <FavoriteBorderIcon />
                    </IconButton>
                    <IconButton
                      onClick={() => handleViewClick(artwork)} // Navigate on click
                      sx={{
                        backgroundColor: "white",
                        "&:hover": { backgroundColor: "#f0f0f0" },
                        width: "33px",
                        height: "33px",
                      }}
                    >
                      <VisibilityIcon />
                    </IconButton>
                  </Box>
                </Box>

                {/* Card Content */}
                <CardContent
                  sx={{
                    textAlign: "left",
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        fontFamily: '"Raleway", sans-serif',
                      }}
                    >
                      {artwork.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {artwork.artist}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {artwork.medium}, {artwork.year}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                      <Rating
                        value={artwork.rating}
                        precision={0.1}
                        readOnly
                        size="small"
                      />
                      <Typography variant="body2" sx={{ ml: 1 }}>
                        {artwork.rating}
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mt: 2,
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      ${artwork.price}
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#000",
                        borderRadius: 0,
                        "&:hover": { backgroundColor: "#333" },
                        fontFamily: '"Raleway", sans-serif',
                        fontWeight: 700,
                      }}
                      onClick={() => handleAddToCart(artwork)} // Add to cart on click
                    >
                      Add to Cart
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TrendingArtworks;