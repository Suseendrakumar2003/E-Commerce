// import React, { useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Box,
//   Typography,
//   IconButton,
//   useMediaQuery,
//   useTheme,
//   InputBase,
// } from "@mui/material";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link } from "react-router-dom";
// import logo from "../Assets/logo.png";

// const navItems = [
//   { name: "PAINTINGS", path: "/paintings" },
//   { name: "DRAWINGS", path: "/view" },
//   { name: "SCULPTURE", path: "/view" },
//   { name: "ARTISTS", path: "/home" },
// ];

// const Navbar = ({ onCartClick }) => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));
//   const [showSearch, setShowSearch] = useState(false);

//   const navVariants = {
//     hidden: { y: -60, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   const iconVariants = {
//     hover: { scale: 1.1, transition: { type: "spring", stiffness: 300 } },
//   };

//   const searchVariants = {
//     hidden: { width: 0, opacity: 0 },
//     visible: {
//       width: 200,
//       opacity: 1,
//       transition: { duration: 0.4, ease: "easeInOut" },
//     },
//     exit: {
//       width: 0,
//       opacity: 0,
//       transition: { duration: 0.3, ease: "easeInOut" },
//     },
//   };

//   const handleProfileClick = () => {
//     window.open("/login", "_blank"); // Navigate to /login in a new tab
//   };

//   return (
//     <motion.div initial="hidden" animate="visible" variants={navVariants}>
//       <AppBar
//         position="fixed"
//         elevation={0}
//         sx={{
//           backgroundColor: "#ffffff",
//           color: "#000",
//           px: { xs: 2, md: 6 },
//           py: 3,
//         }}
//       >
//         <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
//           {/* Logo */}
//           <Box sx={{ display: "flex", alignItems: "center" }}>
//             <Typography
//               variant="h6"
//               sx={{
//                 fontWeight: 500,
//                 fontSize: "1rem",
//                 fontFamily: "sans-serif",
//                 letterSpacing: "0.05em",
//               }}
//             >
//               <img src={logo} alt="logo" width="33px" height="20px" /> cultured
//               kid.
//             </Typography>
//           </Box>

//           {/* Right Section */}
//           <Box sx={{ display: "flex", alignItems: "center" }}>
//             {!isMobile && (
//               <Box sx={{ display: "flex", gap: 5, mr: 4 }}>
//                 {navItems.map((item, index) => (
//                   <motion.div
//                     key={item.name}
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.2 + index * 0.1 }}
//                   >
//                     <Typography
//                       component={Link}
//                       to={item.path}
//                       sx={{
//                         fontSize: "0.75rem",
//                         fontWeight: 400,
//                         letterSpacing: "0.12em",
//                         cursor: "pointer",
//                         transition: "0.3s",
//                         "&:hover": { color: "#666" },
//                         textDecoration: "none",
//                         color: "inherit",
//                       }}
//                     >
//                       {item.name}
//                     </Typography>
//                   </motion.div>
//                 ))}
//               </Box>
//             )}

//             <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 , marginRight: "20px" }}>
//               {/* Search Bar */}
//               <AnimatePresence>
//                 {showSearch && (
//                   <motion.div
//                     key="search"
//                     variants={searchVariants}
//                     initial="hidden"
//                     animate="visible"
//                     exit="exit"
//                     style={{
//                       background: "#f0f0f0",
//                       borderRadius: "4px",
//                       overflow: "hidden",
//                       paddingLeft: 8,
//                       paddingRight: 8,
//                       display: "flex",
//                       alignItems: "center",
//                     }}
//                   >
//                     <InputBase
//                       placeholder="Search..."
//                       sx={{
//                         fontSize: "0.85rem",
//                         width: "100%",
//                         color: "#333",
//                       }}
//                       autoFocus
//                       aria-label="Search artworks"
//                     />
//                   </motion.div>
//                 )}
//               </AnimatePresence>

//               {/* Search Icon */}
//               <motion.div whileHover="hover" variants={iconVariants}>
//                 <IconButton
//                   size="medium"
//                   onClick={() => setShowSearch((prev) => !prev)}
//                   aria-label="Toggle search bar"
//                 >
//                   <svg
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
//                       fill="currentColor"
//                     />
//                   </svg>
//                 </IconButton>
//               </motion.div>

//               {/* Cart Icon */}
//               <motion.div whileHover="hover" variants={iconVariants}>
//                 <IconButton
//                   size="medium"
//                   onClick={onCartClick}
//                   aria-label="View cart"
//                 >
//                   <svg
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M7 18C5.9 18 5 18.9 5 20C5 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM1 2V4H3L6.6 11.59L5.25 14.03C5.09 14.31 5 14.64 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.28 15 7.17 14.89 7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.58 17.3 11.97L20.88 5.48C20.96 5.34 21 5.17 21 5C21 4.45 20.55 4 20 4H5.21L4.27 2H1ZM17 18C15.9 18 15 18.9 15 20C15 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z"
//                       fill="currentColor"
//                     />
//                   </svg>
//                 </IconButton>
//               </motion.div>

//               {/* Profile Icon */}
//               <motion.div whileHover="hover" variants={iconVariants}>
//                 <IconButton
//                   size="medium"
//                   onClick={handleProfileClick}
//                   aria-label="Go to login page in new tab"
//                 >
//                   <svg
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
//                       fill="currentColor"
//                     />
//                   </svg>
//                 </IconButton>
//               </motion.div>
//             </Box>
//           </Box>
//         </Toolbar>
//       </AppBar>
//     </motion.div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  useMediaQuery,
  useTheme,
  InputBase,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "../Assets/logo.png";

const navItems = [
  { name: "PAINTINGS", path: "/paintings" },
  { name: "DRAWINGS", path: "/drawings" },
  { name: "SCULPTURE", path: "/sculpture" },
  { name: "ARTISTS", path: "/artists" },
];

const Navbar = ({ onCartClick }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();

  const navVariants = {
    hidden: { y: -60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const iconVariants = {
    hover: { scale: 1.1, transition: { type: "spring", stiffness: 300 } },
  };

  const searchVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: 200,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    exit: {
      width: 0,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const handleProfileClick = () => {
    window.open("/login", "_blank");
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={navVariants}>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: "#ffffff",
          color: "#000000", // Ensure AppBar text color is black
          px: { xs: 2, md: 6 },
          py: 3,
        }}
      >
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h6"
              component={Link}
              to="/home"
              aria-label="Go to homepage"
              sx={{
                fontWeight: 500,
                fontSize: "1rem",
                fontFamily: "sans-serif",
                letterSpacing: "0.05em",
                textDecoration: "none",
                color: "#000000", // Set logo text to black
                display: "flex",
                alignItems: "center",
              }}
            >
              <img src={logo} alt="logo" width="33px" height="20px" /> cultured
              kid.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {!isMobile && (
              <Box sx={{ display: "flex", gap: 5, mr: 4 }}>
                {navItems.map((item, index) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      <Typography
                        component={Link}
                        to={item.path}
                        aria-current={isActive ? "page" : undefined}
                        sx={{
                          fontSize: "0.75rem",
                          fontWeight: isActive ? 600 : 400,
                          letterSpacing: "0.12em",
                          cursor: "pointer",
                          transition: "0.3s",
                          color: "#000000", // Set all nav items to black
                          textDecoration: isActive ? "underline" : "none",
                          "&:hover": {
                            color: "#000000", // Keep black on hover
                          },
                        }}
                      >
                        {item.name}
                      </Typography>
                    </motion.div>
                  );
                })}
              </Box>
            )}

            <Box sx={{ display: "flex", alignItems: "center", gap: 3.5 }}>
              <AnimatePresence>
                {showSearch && (
                  <motion.div
                    key="search"
                    variants={searchVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    style={{
                      background: "#f0f0f0",
                      borderRadius: "4px",
                      overflow: "hidden",
                      paddingLeft: 8,
                      paddingRight: 8,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <InputBase
                      placeholder="Search..."
                      sx={{
                        fontSize: "0.85rem",
                        width: "100%",
                        color: "#000000", // Set search bar text to black
                      }}
                      autoFocus
                      aria-label="Search artworks"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              <motion.div whileHover="hover" variants={iconVariants}>
                <IconButton
                  size="medium"
                  onClick={() => setShowSearch((prev) => !prev)}
                  aria-label="Toggle search bar"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
                      fill="#000000" // Set search icon to black
                    />
                  </svg>
                </IconButton>
              </motion.div>
              <motion.div whileHover="hover" variants={iconVariants}>
                <IconButton
                  size="medium"
                  onClick={onCartClick}
                  aria-label="View cart"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 18C5.9 18 5 18.9 5 20C5 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM1 2V4H3L6.6 11.59L5.25 14.03C5.09 14.31 5 14.64 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.28 15 7.17 14.89 7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.58 17.3 11.97L20.88 5.48C20.96 5.34 21 5.17 21 5C21 4.45 20.55 4 20 4H5.21L4.27 2H1ZM17 18C15.9 18 15 18.9 15 20C15 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z"
                      fill="#000000" // Set cart icon to black
                    />
                  </svg>
                </IconButton>
              </motion.div>
              <motion.div whileHover="hover" variants={iconVariants}>
                <IconButton
                  size="medium"
                  onClick={handleProfileClick}
                  aria-label="Go to login page in new tab"
                >
                  <PersonOutlineIcon sx={{ fontSize: 20}} />
                </IconButton>
              </motion.div>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </motion.div>
  );
};

export default Navbar;