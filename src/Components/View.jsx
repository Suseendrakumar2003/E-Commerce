import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Typography, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import wallImage from "../Assets/Wall.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "@fontsource/raleway/400.css";
import "@fontsource/raleway/700.css";
import fallbackImage from "../Assets/artwork 1.png";

const View = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const artwork = state?.artwork;

  // Debugging: Log on mount
  useEffect(() => {
    console.log("View component mounted");
    console.log("Wall image:", wallImage);
    console.log("Navigation state:", state);
    console.log("Artwork image:", artwork?.image);
  }, [artwork, state]);

  if (!artwork || !artwork.image) {
    return (
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 4,
          bgcolor: "rgba(255, 255, 255, 0.8)",
          zIndex: 10,
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontFamily: '"Raleway", sans-serif', textAlign: "center" }}
        >
          No artwork selected or image not found
        </Typography>
      </Box>
    );
  }

  return (
    <>
      {/* Global style to prevent scrolling */}
      <style jsx global>{`
        html,
        body {
          margin: 0;
          padding: 0;
          overflow: hidden;
          height: 100%;
        }
      `}</style>
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          backgroundImage: `url(${wallImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          bgcolor: "#f0f0f0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          top: 0,
          left: 0,
          overflow: "visible",
          zIndex: 1,
        }}
      >
        {/* Back Button */}
        <IconButton
          onClick={() => navigate(-1)}
          sx={{
            position: "absolute",
            top: 20,
            left: 20,
            bgcolor: "rgba(255, 255, 255, 0.8)",
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
            zIndex: 20,
          }}
        >
          <ArrowBackIcon />
        </IconButton>

        {/* Artwork Image */}
        <motion.img
          src={artwork.image || fallbackImage}
          alt="Artwork"
          onError={(e) => console.error("Image failed to load:", e)}
          style={{
            position: "fixed",
            top:"70px",
            transform: "translate(-50%, -50%)",
            width: "200px",
            height: "227px",
            objectFit: "cover",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            borderRadius: "0px",
            cursor: "grab",
            userSelect: "none",
            zIndex: 10,
          }}
          drag
          dragConstraints={{
            top: -window.innerHeight / 2,
            bottom: window.innerHeight / 2,
            left: -window.innerWidth / 2,
            right: window.innerWidth / 2,
          }}
          dragMomentum={false}
          whileDrag={{ cursor: "grabbing" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Measuring Line Scale (6 ft) */}
        <Box
          sx={{
            position: "absolute",
            bottom: "420px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 15,
          }}
        >
          <Box
            sx={{
              width: "400px",
              position: "relative",
              display: "flex",
              alignItems: "center",
              top: "60px",
            }}
          >
            {/* Left vertical marker */}
            <Box
              sx={{
                width: "2px",
                height: "8px",
                bgcolor: "#666",
                position: "absolute",
                left: 0,
              }}
            />
            {/* Horizontal line */}
            <Box
              sx={{
                height: "2px",
                width: "100%",
                bgcolor: "#666",
              }}
            />
            {/* Right vertical marker */}
            <Box
              sx={{
                width: "2px",
                height: "8px",
                bgcolor: "#666",
                position: "absolute",
                right: 0,
              }}
            />
            {/* Label */}
            <Typography
              variant="body2"
              sx={{
                position: "absolute",
                top: "-30px",
                left: "50%",
                transform: "translateX(-50%)",
                fontSize: "16px",
                color: "#666",
                fontWeight: "normal",
                fontFamily: '"Raleway", sans-serif',
              }}
            >
              6 ft
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default View;
