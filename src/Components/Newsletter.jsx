import React from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import { motion } from "framer-motion";

// Animation variants for container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, ease: "easeIn" } },
};

// Animation variants for title
const titleVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// Animation variants for description
const descriptionVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.2 },
  },
};

// Animation variants for form
const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.4 },
  },
};

// Animation variants for button hover
const buttonVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.2 } },
};

const Newsletter = () => {
  return (
    <Box
      component={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Newsletter Section */}
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#111",
          color: "#fff",
          py: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography
          component={motion.div}
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          variant="h5"
          fontWeight="500"
          gutterBottom
        >
          Stay Updated
        </Typography>
        <Typography
          component={motion.div}
          variants={descriptionVariants}
          initial="hidden"
          animate="visible"
          variant="body2"
          sx={{ maxWidth: 500, color: "#ccc", mb: 4 }}
        >
          Subscribe to our newsletter and be the first to know about new
          arrivals, exclusive collections, and special offers
        </Typography>
        <Box
          component={motion.form}
          variants={formVariants}
          initial="hidden"
          animate="visible"
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
            component={motion.button}
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
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
    </Box>
  );
};

export default Newsletter;
