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
