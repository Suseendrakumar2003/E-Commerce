// import {
//   Box,
//   Typography,
//   Grid,
//   Card,
//   CardMedia,
//   CardContent,
//   Rating,
//   IconButton,
// } from "@mui/material";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
// import Design1 from "../Assets/design 1.png"; 
// import Design2 from "../Assets/sculpture 1.png"; 
// import Design3 from "../Assets/brothers 1.png"; 

// const flashDeals = [
//   {
//     title: "Abstract Canvas",
//     artist: "Maria Santos",
//     rating: 4.8,
//     price: "$299",
//     oldPrice: "$399",
//     image: Design1,
//   },
//   {
//     title: "Modern Sculpture",
//     artist: "David Chen",
//     rating: 4.9,
//     price: "$299",
//     oldPrice: "$399",
//     image: Design2,
//   },
//   {
//     title: "Vintage Print",
//     artist: "Elena Rodriguez",
//     rating: 4.7,
//     price: "$299",
//     oldPrice: "$399",
//     image: Design3,
//   },
// ];

// const CountdownBox = ({ value }) => (
//   <Box
//     sx={{
//       backgroundColor: "#000",
//       color: "#fff",
//       px: 2,
//       py: 1,
//       fontSize: "16px",
//       fontWeight: "bold",
//       borderRadius: "4px",
//       minWidth: "40px",
//       textAlign: "center",
//     }}
//   >
//     {value}
//   </Box>
// );

// const FlashSaleSection = () => {
//   return (
//     <Box sx={{ px: { xs: 2, md: 8 }, py: 6, background: "#fcf8f7" }}>
//       <Box sx={{ display: "flex", justifyContent: "space-between", mb: 4 }}>
//         <Typography
//           variant="h5"
//           sx={{
//             fontWeight: 600, // Slightly bolder
//             fontSize: "1.5rem", // Match the larger font size
//             color: "#111",
//           }}
//         >
//           Flash Sale
//         </Typography>
//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             cursor: "pointer",
//             "&:hover": { textDecoration: "underline" },
//           }}
//         >
//           <Typography
//             sx={{
//               color: "#111",
//               fontSize: "0.85rem", // Smaller font to match the image
//               textTransform: "none",
//               mr: 0.5,
//             }}
//           >
//             View All Deals
//           </Typography>
//           <span style={{ fontSize: "1rem", color: "#111" }}>→</span>
//         </Box>
//       </Box>

//       <Grid container spacing={4}>
//         {/* Flash sale cards */}
//         <Grid item xs={12} md={9}>
//           <Grid container spacing={3}>
//             {flashDeals.map((item, i) => (
//               <Grid item xs={12} sm={4} key={i}>
//                 <Card elevation={0}>
//                   <Box sx={{ position: "relative" }}>
//                     <CardMedia
//                       component="img"
//                       height="200"
//                       image={item.image}
//                       alt={item.title}
//                     />
//                     <Box
//                       sx={{
//                         position: "absolute",
//                         top: 8,
//                         left: 8,
//                         background: "#000",
//                         color: "#fff",
//                         px: 1,
//                         fontSize: "12px",
//                       }}
//                     >
//                       SALE
//                     </Box>
//                     <Box
//                       sx={{
//                         position: "absolute",
//                         top: 8,
//                         right: 8,
//                         display: "flex",
//                         flexDirection: "column",
//                         gap: 1,
//                       }}
//                     >
//                       <IconButton size="small" sx={{ bgcolor: "#fff" }}>
//                         <FavoriteBorderIcon fontSize="small" />
//                       </IconButton>
//                       <IconButton size="small" sx={{ bgcolor: "#fff" }}>
//                         <VisibilityOutlinedIcon fontSize="small" />
//                       </IconButton>
//                     </Box>
//                   </Box>
//                   <CardContent sx={{ pb: 1 }}>
//                     <Typography
//                       fontSize="14px"
//                       fontWeight="500"
//                       sx={{ mb: 0.5 }}
//                     >
//                       {item.title}
//                     </Typography>
//                     <Typography
//                       fontSize="12px"
//                       color="text.secondary"
//                       sx={{ mb: 1 }}
//                     >
//                       {item.artist}
//                     </Typography>
//                     <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
//                       <Rating
//                         name="read-only"
//                         value={item.rating}
//                         precision={0.1}
//                         size="small"
//                         readOnly
//                       />
//                       <Typography fontSize="12px" sx={{ ml: 1 }}>
//                         {item.rating}
//                       </Typography>
//                     </Box>
//                     <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
//                       <Box sx={{ display: "flex", alignItems: "baseline", gap: 1 }}>
//                         <Typography sx={{ fontWeight: 600, fontSize: "15px" }}>
//                           {item.price}
//                         </Typography>
//                         <Typography
//                           sx={{
//                             fontSize: "13px",
//                             color: "gray",
//                             textDecoration: "line-through",
//                           }}
//                         >
//                           {item.oldPrice}
//                         </Typography>
//                       </Box>
//                       <Box
//                         sx={{
//                           border: "1px solid #111",
//                           px: 2,
//                           py: 0.5,
//                           fontSize: "12px",
//                           cursor: "pointer",
//                           "&:hover": { backgroundColor: "#f5f5f5" },
//                         }}
//                       >
//                         Add to Cart
//                       </Box>
//                     </Box>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Grid>

//         {/* Right-side deal info */}
//         <Grid item xs={12} md={3}>
//           <Box sx={{ p: 2 }}>
//             <Typography
//               variant="h6"
//               sx={{
//                 fontWeight: 500,
//                 fontSize: "1.25rem", // Match the size in the image
//                 mb: 1,
//               }}
//             >
//               Deals Of The Month
//             </Typography>
//             <Typography
//               sx={{
//                 fontSize: "12px", // Smaller font to match the image
//                 color: "gray",
//                 mt: 1,
//                 mb: 3, // More space before the button
//               }}
//             >
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
//               dui ultricies sollicitudin aliquam sem.
//             </Typography>
//             <Box
//               sx={{
//                 border: "1px solid #111",
//                 px: 3,
//                 py: 1,
//                 fontSize: "14px",
//                 textAlign: "center",
//                 cursor: "pointer",
//                 "&:hover": { backgroundColor: "#f5f5f5" },
//                 mb: 4, // Space before the countdown
//               }}
//             >
//               Buy Now
//             </Box>

//             <Typography
//               sx={{
//                 mt: 2,
//                 mb: 1,
//                 fontSize: "12px", // Smaller font to match the image
//                 textTransform: "uppercase", // Match the uppercase style
//               }}
//             >
//               Hurry, Before It’s Too Late!
//             </Typography>
//             <Box sx={{ display: "flex", gap: 1 }}>
//               <CountdownBox value="23" />
//               <Typography sx={{ fontSize: "16px" }}>:</Typography>
//               <CountdownBox value="45" />
//               <Typography sx={{ fontSize: "16px" }}>:</Typography>
//               <CountdownBox value="20" />
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default FlashSaleSection;


// import { useState, useEffect, useRef } from 'react';
// import {
//   Box,
//   Typography,
//   Grid,
//   Card,
//   CardMedia,
//   CardContent,
//   Rating,
//   IconButton,
// } from '@mui/material';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import Design1 from '../Assets/design 1.png';
// import Design2 from '../Assets/sculpture 1.png';
// import Design3 from '../Assets/brothers 1.png';

// const flashDeals = [
//   {
//     title: 'Abstract Canvas',
//     artist: 'Maria Santos',
//     rating: 4.8,
//     price: '$299',
//     oldPrice: '$399',
//     image: Design1,
//     path: '/product/abstract-canvas',
//   },
//   {
//     title: 'Modern Sculpture',
//     artist: 'David Chen',
//     rating: 4.9,
//     price: '$299',
//     oldPrice: '$399',
//     image: Design2,
//     path: '/product/modern-sculpture',
//   },
//   {
//     title: 'Vintage Print',
//     artist: 'Elena Rodriguez',
//     rating: 4.7,
//     price: '$299',
//     oldPrice: '$399',
//     image: Design3,
//     path: '/product/vintage-print',
//   },
// ];

// const CountdownBox = ({ value, label }) => (
//   <Box sx={{ textAlign: 'center' }}>
//     <Box
//       sx={{
//         backgroundColor: '#000',
//         color: '#fff',
//         px: 2,
//         py: 1,
//         fontSize: '16px',
//         fontWeight: 'bold',
//         borderRadius: '4px',
//         minWidth: '40px',
//         textAlign: 'center',
//       }}
//     >
//       {value}
//     </Box>
//     <Typography sx={{ fontSize: '10px', color: '#111', mt: 0.5 }}>{label}</Typography>
//   </Box>
// );

// const FlashSaleSection = () => {
//   const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });
//   const [isHovering, setIsHovering] = useState(false);
//   const scrollRef = useRef(null);
//   const navigate = useNavigate();

//   // Countdown timer logic
//   useEffect(() => {
//     const endTime = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 hours from now
//     const updateTimer = () => {
//       const now = new Date().getTime();
//       const distance = endTime - now;

//       if (distance <= 0) {
//         setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
//         return;
//       }

//       const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//       const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//       const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//       setTimeLeft({ hours, minutes, seconds });
//     };

//     const timer = setInterval(updateTimer, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   // Auto-scroll logic
//   useEffect(() => {
//     if (isHovering || !scrollRef.current) return;

//     const scrollContainer = scrollRef.current;
//     const scrollSpeed = 1; // Pixels per frame
//     const scrollInterval = 30; // Milliseconds per frame

//     const scroll = () => {
//       if (scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight) {
//         scrollContainer.scrollTop = 0; // Reset to top
//       } else {
//         scrollContainer.scrollTop += scrollSpeed;
//       }
//     };

//     const interval = setInterval(scroll, scrollInterval);
//     return () => clearInterval(interval);
//   }, [isHovering]);

//   // Navigation handlers
//   const handleViewAll = () => {
//     navigate('/deals');
//   };

//   const handleCardClick = (path) => {
//     navigate(path);
//   };

//   const handleAddToCart = (title) => {
//     console.log(`Added ${title} to cart`);
//     // Add to cart logic here (e.g., dispatch to Redux or API call)
//   };

//   const handleBuyNow = () => {
//     navigate('/shop');
//   };

//   const handleFavorite = (title) => {
//     console.log(`Added ${title} to favorites`);
//     // Add to favorites logic here
//   };

//   const handleViewDetails = (title) => {
//     console.log(`Viewing details for ${title}`);
//     // View details logic here
//   };

//   return (
//     <Box sx={{ px: { xs: 2, md: 8 }, py: 6, background: '#fcf8f7' }}>
//       <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
//         <Typography
//           variant="h5"
//           sx={{
//             fontWeight: 600,
//             fontSize: '1.5rem',
//             color: '#111',
//           }}
//         >
//           Flash Sale
//         </Typography>
//         <Box
//           sx={{
//             display: 'flex',
//             alignItems: 'center',
//             cursor: 'pointer',
//             '&:hover': { textDecoration: 'underline' },
//           }}
//           onClick={handleViewAll}
//         >
//           <Typography
//             sx={{
//               color: '#111',
//               fontSize: '0.85rem',
//               textTransform: 'none',
//               mr: 0.5,
//             }}
//           >
//             View All Deals
//           </Typography>
//           <span style={{ fontSize: '1rem', color: '#111' }}>→</span>
//         </Box>
//       </Box>

//       <Grid container spacing={4}>
//         {/* Flash sale cards */}
//         <Grid item xs={12} md={9}>
//           <Box
//             ref={scrollRef}
//             sx={{
//               maxHeight: '400px', // Adjust height as needed
//               overflowY: 'auto',
//               '&::-webkit-scrollbar': { display: 'none' }, // Hide scrollbar
//               scrollbarWidth: 'none', // Firefox
//               msOverflowStyle: 'none', // IE
//             }}
//             onMouseEnter={() => setIsHovering(true)}
//             onMouseLeave={() => setIsHovering(false)}
//           >
//             <Grid container spacing={3}>
//               {flashDeals.map((item, i) => (
//                 <Grid item xs={12} sm={4} key={i}>
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.4, delay: i * 0.1 }}
//                   >
//                     <Card
//                       elevation={0}
//                       sx={{ cursor: 'pointer', '&:hover': { boxShadow: '0 4px 8px rgba(0,0,0,0.1)' } }}
//                       onClick={() => handleCardClick(item.path)}
//                     >
//                       <Box sx={{ position: 'relative' }}>
//                         <CardMedia
//                           component="img"
//                           height="200"
//                           image={item.image}
//                           alt={item.title}
//                         />
//                         <Box
//                           sx={{
//                             position: 'absolute',
//                             top: 8,
//                             left: 8,
//                             background: '#000',
//                             color: '#fff',
//                             px: 1,
//                             fontSize: '12px',
//                           }}
//                         >
//                           SALE
//                         </Box>
//                         <Box
//                           sx={{
//                             position: 'absolute',
//                             top: 8,
//                             right: 8,
//                             display: 'flex',
//                             flexDirection: 'column',
//                             gap: 1,
//                           }}
//                         >
//                           <IconButton
//                             size="small"
//                             sx={{ bgcolor: '#fff' }}
//                             onClick={(e) => {
//                               e.stopPropagation(); // Prevent card click
//                               handleFavorite(item.title);
//                             }}
//                           >
//                             <FavoriteBorderIcon fontSize="small" />
//                           </IconButton>
//                           <IconButton
//                             size="small"
//                             sx={{ bgcolor: '#fff' }}
//                             onClick={(e) => {
//                               e.stopPropagation(); // Prevent card click
//                               handleViewDetails(item.title);
//                             }}
//                           >
//                             <VisibilityOutlinedIcon fontSize="small" />
//                           </IconButton>
//                         </Box>
//                       </Box>
//                       <CardContent sx={{ pb: 1 }}>
//                         <Typography fontSize="14px" fontWeight="500" sx={{ mb: 0.5 }}>
//                           {item.title}
//                         </Typography>
//                         <Typography fontSize="12px" color="text.secondary" sx={{ mb: 1 }}>
//                           {item.artist}
//                         </Typography>
//                         <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
//                           <Rating
//                             name="read-only"
//                             value={item.rating}
//                             precision={0.1}
//                             size="small"
//                             readOnly
//                           />
//                           <Typography fontSize="12px" sx={{ ml: 1 }}>
//                             {item.rating}
//                           </Typography>
//                         </Box>
//                         <Box
//                           sx={{
//                             display: 'flex',
//                             alignItems: 'center',
//                             justifyContent: 'space-between',
//                           }}
//                         >
//                           <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1 }}>
//                             <Typography sx={{ fontWeight: 600, fontSize: '15px' }}>
//                               {item.price}
//                             </Typography>
//                             <Typography
//                               sx={{
//                                 fontSize: '13px',
//                                 color: 'gray',
//                                 textDecoration: 'line-through',
//                               }}
//                             >
//                               {item.oldPrice}
//                             </Typography>
//                           </Box>
//                           <Box
//                             sx={{
//                               border: '1px solid #111',
//                               px: 2,
//                               py: 0.5,
//                               fontSize: '12px',
//                               cursor: 'pointer',
//                               '&:hover': { backgroundColor: '#f5f5f5' },
//                             }}
//                             onClick={(e) => {
//                               e.stopPropagation(); // Prevent card click
//                               handleAddToCart(item.title);
//                             }}
//                           >
//                             Add to Cart
//                           </Box>
//                         </Box>
//                       </CardContent>
//                     </Card>
//                   </motion.div>
//                 </Grid>
//               ))}
//             </Grid>
//           </Box>
//         </Grid>

//         {/* Right-side deal info */}
//         <Grid item xs={12} md={3}>
//           <Box sx={{ p: 2 }}>
//             <Typography
//               variant="h6"
//               sx={{
//                 fontWeight: 500,
//                 fontSize: '1.25rem',
//                 mb: 1,
//               }}
//             >
//               Deals Of The Month
//             </Typography>
//             <Typography
//               sx={{
//                 fontSize: '12px',
//                 color: 'gray',
//                 mt: 1,
//                 mb: 3,
//               }}
//             >
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
//               dui ultricies sollicitudin aliquam sem.
//             </Typography>
//             <Box
//               sx={{
//                 border: '1px solid #111',
//                 px: 3,
//                 py: 1,
//                 fontSize: '14px',
//                 textAlign: 'center',
//                 cursor: 'pointer',
//                 '&:hover': { backgroundColor: '#f5f5f5' },
//                 mb: 4,
//               }}
//               onClick={handleBuyNow}
//             >
//               Buy Now
//             </Box>

//             <Typography
//               sx={{
//                 mt: 2,
//                 mb: 1,
//                 fontSize: '12px',
//                 textTransform: 'uppercase',
//               }}
//             >
//               Hurry, Before It’s Too Late!
//             </Typography>
//             <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
//               <CountdownBox value={String(timeLeft.hours).padStart(2, '0')} label="Hours" />
//               <Typography sx={{ fontSize: '16px' }}>:</Typography>
//               <CountdownBox value={String(timeLeft.minutes).padStart(2, '0')} label="Mins" />
//               <Typography sx={{ fontSize: '16px' }}>:</Typography>
//               <CountdownBox value={String(timeLeft.seconds).padStart(2, '0')} label="Secs" />
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default FlashSaleSection;


import { useState, useEffect, useRef } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Rating,
  IconButton,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Design1 from '../Assets/design 1.png';
import Design2 from '../Assets/sculpture 1.png';
import Design3 from '../Assets/brothers 1.png';

// Extended flash deals with 10 items (placeholders for additional images)
const flashDeals = [
  { title: 'Abstract Canvas', artist: 'Maria Santos', rating: 4.8, price: '$299', oldPrice: '$399', image: Design1, path: '/product/abstract-canvas' },
  { title: 'Modern Sculpture', artist: 'David Chen', rating: 4.9, price: '$299', oldPrice: '$399', image: Design2, path: '/product/modern-sculpture' },
  { title: 'Vintage Print', artist: 'Elena Rodriguez', rating: 4.7, price: '$299', oldPrice: '$399', image: Design3, path: '/product/vintage-print' },
  { title: 'Digital Artwork', artist: 'Liam Brown', rating: 4.6, price: '$249', oldPrice: '$349', image: Design1, path: '/product/digital-artwork' },
  { title: 'Portrait Painting', artist: 'Sophie Lee', rating: 4.8, price: '$319', oldPrice: '$419', image: Design2, path: '/product/portrait-painting' },
  { title: 'Ceramic Vase', artist: 'James Kim', rating: 4.5, price: '$199', oldPrice: '$299', image: Design3, path: '/product/ceramic-vase' },
  { title: 'Abstract Print', artist: 'Emma Davis', rating: 4.7, price: '$279', oldPrice: '$379', image: Design1, path: '/product/abstract-print' },
  { title: 'Wooden Sculpture', artist: 'Noah Patel', rating: 4.9, price: '$349', oldPrice: '$449', image: Design2, path: '/product/wooden-sculpture' },
  { title: 'Landscape Photo', artist: 'Olivia Smith', rating: 4.6, price: '$229', oldPrice: '$329', image: Design3, path: '/product/landscape-photo' },
  { title: 'Mixed Media Art', artist: 'Ava Johnson', rating: 4.8, price: '$299', oldPrice: '$399', image: Design1, path: '/product/mixed-media-art' },
];

const CountdownBox = ({ value }) => (
  <Box
    sx={{
      backgroundColor: '#000',
      color: '#fff',
      px: 2,
      py: 1,
      fontSize: '16px',
      fontWeight: 'bold',
      borderRadius: '4px',
      minWidth: '40px',
      textAlign: 'center',
    }}
  >
    {value}
  </Box>
);

const FlashSaleSection = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });
  const [isScrolling, setIsScrolling] = useState(true);
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  // Countdown timer for 24 hours
  useEffect(() => {
    const endTime = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 hours from now
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Auto-scroll effect
  useEffect(() => {
    if (!isScrolling || !scrollRef.current) return;

    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const scroll = () => {
      scrollAmount += 1; // Adjust speed by changing increment
      if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollAmount = 0; // Reset to start
      }
      scrollContainer.scrollLeft = scrollAmount;
    };

    const scrollInterval = setInterval(scroll, 30); // Smooth scroll every 30ms

    return () => clearInterval(scrollInterval);
  }, [isScrolling]);

  // Handle card click
  const handleCardClick = (path) => {
    navigate(path);
  };

  // Handle Add to Cart
  const handleAddToCart = (title) => {
    navigate('/cart', { state: { item: title } });
    console.log(`Added ${title} to cart`);
  };

  // Handle View All Deals
  const handleViewAll = () => {
    navigate('/flash-deals');
  };

  // Handle Buy Now
  const handleBuyNow = () => {
    navigate('/shop');
  };

  // Handle Favorite and View actions (placeholders)
  const handleFavorite = (title) => {
    console.log(`Favorited ${title}`);
  };

  const handleView = (title) => {
    navigate(`/product/${title.toLowerCase().replace(/\s/g, '-')}`);
  };

  return (
    <Box sx={{ px: { xs: 2, md: 8 }, py: 6, background: '#fcf8f7' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            fontSize: '1.5rem',
            color: '#111',
          }}
        >
          Flash Sale
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            '&:hover': { textDecoration: 'underline' },
          }}
          onClick={handleViewAll}
        >
          <Typography
            sx={{
              color: '#111',
              fontSize: '0.85rem',
              textTransform: 'none',
              mr: 0.5,
            }}
          >
            View All Deals
          </Typography>
          <span style={{ fontSize: '1rem', color: '#111' }}>→</span>
        </Box>
      </Box>

      <Grid container spacing={9}>
        {/* Flash sale cards */}
        <Grid item xs={12} md={9}>
          <Box
            ref={scrollRef}
            sx={{
              display: 'flex',
              overflowX: 'auto',
              scrollBehavior: 'smooth',
              gap: 3,
              pb: 2,
              width: '900px', // Fixed width for left section
              '&::-webkit-scrollbar': { display: 'none' }, // Hide scrollbar
            }}
            onMouseEnter={() => setIsScrolling(false)}
            onMouseLeave={() => setIsScrolling(true)}
          >
            {flashDeals.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Card
                  elevation={0}
                  sx={{
                    width: '256px',
                    height: '424px',
                    border: '1px solid #e0e0e0',
                    cursor: 'pointer',
                    '&:hover': { boxShadow: '0 4px 8px rgba(0,0,0,0.1)' },
                  }}
                  onClick={() => handleCardClick(item.path)}
                >
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={item.image}
                      alt={item.title}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 8,
                        left: 8,
                        background: '#000',
                        color: '#fff',
                        px: 1,
                        fontSize: '12px',
                      }}
                    >
                      SALE
                    </Box>
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                      }}
                    >
                      <IconButton
                        size="small"
                        sx={{ bgcolor: '#fff' }}
                        onClick={(e) => { e.stopPropagation(); handleFavorite(item.title); }}
                      >
                        <FavoriteBorderIcon fontSize="small" />
                      </IconButton>
                      <IconButton
                        size="small"
                        sx={{ bgcolor: '#fff' }}
                        onClick={(e) => { e.stopPropagation(); handleView(item.title); }}
                      >
                        <VisibilityOutlinedIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  </Box>
                  <CardContent sx={{ pb: 1 }}>
                    <Typography fontSize="14px" fontWeight="500" sx={{ mb: 0.5 }}>
                      {item.title}
                    </Typography>
                    <Typography fontSize="12px" color="text.secondary" sx={{ mb: 1 }}>
                      {item.artist}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Rating
                        name="read-only"
                        value={item.rating}
                        precision={0.1}
                        size="small"
                        readOnly
                      />
                      <Typography fontSize="12px" sx={{ ml: 1 }}>
                        {item.rating}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1 }}>
                        <Typography sx={{ fontWeight: 600, fontSize: '15px' }}>
                          {item.price}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: '13px',
                            color: 'gray',
                            textDecoration: 'line-through',
                          }}
                        >
                          {item.oldPrice}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          border: '1px solid #111',
                          px: 2,
                          py: 0.5,
                          fontSize: '12px',
                          cursor: 'pointer',
                          '&:hover': { backgroundColor: '#f5f5f5' },
                        }}
                        onClick={(e) => { e.stopPropagation(); handleAddToCart(item.title); }}
                      >
                        Add to Cart
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>
        </Grid>

        {/* Right-side deal info */}
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              width: '319px',
              height: '374px',
              position: 'absolute',
              left: '1017px',
              p: 2,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 500,
                fontSize: '1.25rem',
                mb: 1,
              }}
            >
              Deals Of The Month
            </Typography>
            <Typography
              sx={{
                fontSize: '12px',
                color: 'gray',
                mt: 1,
                mb: 3,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
              dui ultricies sollicitudin aliquam sem.
            </Typography>
            <Box
              sx={{
                border: '1px solid #111',
                px: 3,
                py: 1,
                fontSize: '14px',
                textAlign: 'center',
                cursor: 'pointer',
                '&:hover': { backgroundColor: '#f5f5f5' },
                mb: 4,
              }}
              onClick={handleBuyNow}
            >
              Buy Now
            </Box>

            <Typography
              sx={{
                mt: 2,
                mb: 1,
                fontSize: '12px',
                textTransform: 'uppercase',
              }}
            >
              Offer Closes Soon!
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <CountdownBox value={String(timeLeft.hours).padStart(2, '0')} />
              <Typography sx={{ fontSize: '16px' }}>:</Typography>
              <CountdownBox value={String(timeLeft.minutes).padStart(2, '0')} />
              <Typography sx={{ fontSize: '16px' }}>:</Typography>
              <CountdownBox value={String(timeLeft.seconds).padStart(2, '0')} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FlashSaleSection;