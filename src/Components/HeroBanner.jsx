// import { Box, Typography, Button, IconButton } from "@mui/material";
// import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
// import { motion } from "framer-motion";
// import banner from "../Assets/HeroBanner.png";

// const HeroBanner = () => {
//   return (
//     <Box
//       sx={{
//         position: "relative",
//         width: "100%",
//         height: { xs: "80vh", md: "90vh" },
//         backgroundImage: banner, // place your banner image in public/assets
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         textAlign: "center"
//       }}
//     >
//       {/* Left Arrow */}
//       <IconButton
//         sx={{
//           position: "absolute",
//           left: 20,
//           top: "50%",
//           transform: "translateY(-50%)",
//           backgroundColor: "white",
//           boxShadow: 1,
//           "&:hover": { backgroundColor: "#eee" },
//         }}
//       >
//         <ArrowBackIosNew fontSize="small" />
//       </IconButton>

//       {/* Right Arrow */}
//       <IconButton
//         sx={{
//           position: "absolute",
//           right: 20,
//           top: "50%",
//           transform: "translateY(-50%)",
//           backgroundColor: "white",
//           boxShadow: 1,
//           "&:hover": { backgroundColor: "#eee" },
//         }}
//       >
//         <ArrowForwardIos fontSize="small" />
//       </IconButton>

//       {/* Text Content */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <Typography
//           variant="h4"
//           sx={{
//             fontWeight: "500",
//             mb: 1,
//             color: "#222",
//           }}
//         >
//           Flash Sale
//         </Typography>

//         <Typography
//           variant="body1"
//           sx={{
//             mb: 2,
//             maxWidth: "420px",
//             mx: "auto",
//             color: "#333",
//           }}
//         >
//           Discover exceptional artworks from talented{" "}
//           <Box component="span" sx={{ color: "#ce2c44", fontWeight: 500 }}>
//             artists worldwide
//           </Box>
//         </Typography>

//         <Button
//           variant="contained"
//           sx={{
//             backgroundColor: "black",
//             color: "white",
//             textTransform: "none",
//             px: 4,
//             py: 1.2,
//             fontSize: "14px",
//             borderRadius: 0,
//             boxShadow: "none",
//             "&:hover": {
//               backgroundColor: "#222",
//             },
//           }}
//         >
//           Shop Now
//         </Button>
//       </motion.div>
//     </Box>
//   );
// };

// export default HeroBanner;


import { Box, Typography, Button, IconButton } from "@mui/material";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { motion } from "framer-motion";
import banner from "../Assets/HeroBanner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "80vh", md: "90vh" },
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      {/* Left Arrow */}
      <IconButton
        sx={{
          position: "absolute",
          left: 20,
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "white",
          boxShadow: 1,
          "&:hover": { backgroundColor: "#eee" },
        }}
      >
        <ArrowBackIosNew fontSize="small" />
      </IconButton>

      {/* Right Arrow */}
      <IconButton
        sx={{
          position: "absolute",
          right: 20,
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "white",
          boxShadow: 1,
          "&:hover": { backgroundColor: "#eee" },
        }}
      >
        <ArrowForwardIos fontSize="small" />
      </IconButton>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "600", // Slightly bolder
            mb: 1,
            color: "#222",
            textTransform: "uppercase", // Match the all-caps style
            fontSize: { xs: "1.5rem", md: "2rem" }, // Adjust font size
            letterSpacing: "0.05em", // Add slight spacing for style
          }}
        >
          Flash Sale
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 3, // Increased margin to space out the button
            maxWidth: "420px",
            mx: "auto",
            color: "#333",
            fontSize: "0.9rem", // Smaller font to match the image
            fontWeight: 400, // Lighter weight
          }}
        >
          Discover exceptional artworks from talented{" "}
          <Box component="span" sx={{ color: "#ce2c44", fontWeight: 500 }}>
            artists worldwide
          </Box>
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "black",
            color: "white",
            textTransform: "none",
            px: 3, // Slightly smaller padding
            py: 0.8, // Adjust height
            fontSize: "0.85rem", // Smaller font size
            borderRadius: 0,
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "#222",
            },
          }}
        >
          Shop Now
        </Button>

        {/* Carousel Dots */}
        <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
          <Box
            sx={{
              width: 8,
              height: 8,
              backgroundColor: "#000",
              borderRadius: "50%",
            }}
          />
          <Box
            sx={{
              width: 8,
              height: 8,
              backgroundColor: "#ccc",
              borderRadius: "50%",
            }}
          />
          <Box
            sx={{
              width: 8,
              height: 8,
              backgroundColor: "#ccc",
              borderRadius: "50%",
            }}
          />
        </Box>
      </motion.div>
    </Box>
  );
};

export default HeroBanner;