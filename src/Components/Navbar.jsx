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
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";

const navItems = [
  { name: "PAINTINGS", path: "/paintings" },
  { name: "DRAWINGS", path: "/view" },
  { name: "SCULPTURE", path: "/view" },
  { name: "ARTISTS", path: "/home" },
];

const Navbar = ({ onCartClick }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [showSearch, setShowSearch] = useState(false);

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
    window.open("/login", "_blank"); // Navigate to /login in a new tab
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={navVariants}>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: "#ffffff",
          color: "#000",
          px: { xs: 2, md: 4 },
          py: 1,
        }}
      >
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 500,
                fontSize: "1rem",
                fontFamily: "sans-serif",
                letterSpacing: "0.05em",
              }}
            >
              <img src={logo} alt="logo" width="33px" height="20px" /> cultured
              kid.
            </Typography>
          </Box>

          {/* Right Section */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {!isMobile && (
              <Box sx={{ display: "flex", gap: 3, mr: 2 }}>
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <Typography
                      component={Link}
                      to={item.path}
                      sx={{
                        fontSize: "0.75rem",
                        fontWeight: 400,
                        letterSpacing: "0.12em",
                        cursor: "pointer",
                        transition: "0.3s",
                        "&:hover": { color: "#666" },
                        textDecoration: "none",
                        color: "inherit",
                      }}
                    >
                      {item.name}
                    </Typography>
                  </motion.div>
                ))}
              </Box>
            )}

            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              {/* Search Bar */}
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
                        color: "#333",
                      }}
                      autoFocus
                      aria-label="Search artworks"
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Search Icon */}
              <motion.div whileHover="hover" variants={iconVariants}>
                <IconButton
                  size="small"
                  onClick={() => setShowSearch((prev) => !prev)}
                  aria-label="Toggle search bar"
                >
                  <SearchIcon sx={{ fontSize: 18 }} />
                </IconButton>
              </motion.div>

              {/* Cart Icon */}
              <motion.div whileHover="hover" variants={iconVariants}>
                <IconButton
                  size="small"
                  onClick={onCartClick}
                  aria-label="View cart"
                >
                  <ShoppingCartOutlinedIcon sx={{ fontSize: 18 }} />
                </IconButton>
              </motion.div>

              {/* Profile Icon */}
              <motion.div whileHover="hover" variants={iconVariants}>
                <IconButton
                  size="small"
                  onClick={handleProfileClick}
                  aria-label="Go to login page in new tab"
                >
                  <PersonOutlineIcon sx={{ fontSize: 18 }} />
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
