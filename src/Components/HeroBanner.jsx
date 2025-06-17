// import { useState, useEffect } from 'react';
// import { Box, Typography, Button, IconButton } from '@mui/material';
// import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import banner1 from '../Assets/HeroBanner.png';
// // import banner2 from '../Assets/HeroBanner.png';
// // import banner3 from '../Assets/HeroBanner.png';
// import "@fontsource/raleway/400.css";
// import "@fontsource/raleway/700.css";



// const banners = [
//   banner1, 
//   banner1,
//   banner1,
// ];

// const HeroBanner = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const navigate = useNavigate();

//   // Automatic slide transition every 5 seconds
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % banners.length);
//     }, 5000); // 5 seconds

//     // Cleanup timer on component unmount
//     return () => clearInterval(timer);
//   }, []);

//   // Handle left arrow click
//   const handlePrevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
//   };

//   // Handle right arrow click
//   const handleNextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % banners.length);
//   };

//   // Handle dot click
//   const handleDotClick = (index) => {
//     setCurrentSlide(index);
//   };

//   // Handle Shop Now button click
//   const handleShopNow = () => {
//     navigate('/shop');
//   };

//   return (
//     <Box
//       sx={{
//         position: "relative",
//         width: "100%",
//         height: { xs: "80vh", md: "650px" },
//         backgroundImage: `url(${banners[currentSlide]})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         textAlign: "center",
//       }}
//     >
//       {/* Left Arrow */}
//       <IconButton
//         sx={{
//           position: "absolute",
//           left: 20,
//           top: "55%",
//           transform: "translateY(-50%)",
//           backgroundColor: "white",
//           boxShadow: 1,
//           "&:hover": { backgroundColor: "#eee" },
//         }}
//         onClick={handlePrevSlide}
//       >
//         <ArrowBackIosNew fontSize="small" />
//       </IconButton>

//       {/* Right Arrow */}
//       <IconButton
//         sx={{
//           position: "absolute",
//           right: 20,
//           top: "55%",
//           transform: "translateY(-50%)",
//           backgroundColor: "white",
//           boxShadow: 1,
//           "&:hover": { backgroundColor: "#eee" },
//         }}
//         onClick={handleNextSlide}
//       >
//         <ArrowForwardIos fontSize="small" />
//       </IconButton>

//       {/* Text Content */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           position: "absolute",
//           top: "45%",
//         }}
//       >
//         <Typography
//           variant="h2"
//           sx={{
//             fontWeight: "550",
//             fontFamily: '"Raleway", sans-serif',
//             mb: 1,
//             color: "#222",

//             fontSize: { xs: "2rem", md: "2rem" },
//             letterSpacing: "0.05em",
//           }}
//         >
//           Flash Sale
//         </Typography>

//         <Typography
//           variant="body1"
//           sx={{
//             mb: 3,
//             maxWidth: "420px",
//             mx: "auto",
//             color: "#333",
//             fontSize: "1rem",
//             fontWeight: 500,
//             fontFamily: '"Raleway", sans-serif',
//           }}
//         >
//           Discover exceptional artworks from talented artists worldwide
//         </Typography>

//         <Button
//           variant="contained"
//           sx={{
//             backgroundColor: "black",
//             color: "white",
//             textTransform: "none",
//             px: 4,
//             py: 1,
//             fontSize: "0.85rem",
//             borderRadius: 0,
//             boxShadow: "none",
//             "&:hover": {
//               backgroundColor: "#222",
//             },
//           }}
//           onClick={handleShopNow}
//         >
//           Shop Now
//         </Button>

//         {/* Carousel Dots */}
//         <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
//           {banners.map((_, index) => (
//             <Box
//               key={index}
//               sx={{
//                 top: 500,
//                 mt: 20 ,
//                 width: 10,
//                 height: 10,
//                 backgroundColor: currentSlide === index ? "#000" : "#ccc",
//                 borderRadius: "50%",
//                 cursor: "pointer",
//               }}
//               onClick={() => handleDotClick(index)}
//             />
//           ))}
//         </Box>
//       </motion.div>
//     </Box>
//   );
// };

// export default HeroBanner;

import { useState, useEffect } from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import banner1 from '../Assets/HeroBanner.png';
// import banner2 from '../Assets/HeroBanner.png';
// import banner3 from '../Assets/HeroBanner.png';
import "@fontsource/raleway/400.css";
import "@fontsource/raleway/700.css";

const banners = [
  banner1,
  banner1,
  banner1,
];

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  // Automatic slide transition every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000); // 5 seconds

    // Cleanup timer on component unmount
    return () => clearInterval(timer);
  }, []);

  // Handle left arrow click
  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  // Handle right arrow click
  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  // Handle dot click
  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  // Handle Shop Now button click
  const handleShopNow = () => {
    navigate('./flashSale'); // Navigate to Flash Sale component
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "80vh", md: "650px" },
        backgroundImage: `url(${banners[currentSlide]})`,
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
          top: "55%",
          transform: "translateY(-50%)",
          backgroundColor: "white",
          boxShadow: 1,
          "&:hover": { backgroundColor: "#eee" },
        }}
        onClick={handlePrevSlide}
      >
        <ArrowBackIosNew fontSize="small" />
      </IconButton>

      {/* Right Arrow */}
      <IconButton
        sx={{
          position: "absolute",
          right: 20,
          top: "55%",
          transform: "translateY(-50%)",
          backgroundColor: "white",
          boxShadow: 1,
          "&:hover": { backgroundColor: "#eee" },
        }}
        onClick={handleNextSlide}
      >
        <ArrowForwardIos fontSize="small" />
      </IconButton>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "absolute",
          top: "45%",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "550",
            fontFamily: '"Raleway", sans-serif',
            mb: 1,
            color: "#222",
            fontSize: { xs: "2rem", md: "2rem" },
            letterSpacing: "0.05em",
          }}
        >
          Flash Sale
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 3,
            maxWidth: "420px",
            mx: "auto",
            color: "#333",
            fontSize: "1rem",
            fontWeight: 500,
            fontFamily: '"Raleway", sans-serif',
          }}
        >
          Discover exceptional artworks from talented artists worldwide
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "black",
            color: "white",
            textTransform: "none",
            px: 4,
            py: 1,
            fontSize: "0.85rem",
            borderRadius: 0,
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "#222",
            },
          }}
          onClick={handleShopNow}
        >
          Shop Now
        </Button>

        {/* Carousel Dots */}
        <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
          {banners.map((_, index) => (
            <Box
              key={index}
              sx={{
                width: 10,
                height: 10,
                backgroundColor: currentSlide === index ? "#000" : "#ccc",
                borderRadius: "50%",
                cursor: "pointer",
              }}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </Box>
      </motion.div>
    </Box>
  );
};

export default HeroBanner;