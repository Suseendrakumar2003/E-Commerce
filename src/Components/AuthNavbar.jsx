import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Logo from "../Assets/kit.png";

const AuthNavbar = () => {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate("/create-account"); // Redirect to create-account since login is removed
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      px={4}
      py={2}
      sx={{ backgroundColor: "#FFFFFF" }}
    >
      <img
        src={Logo}
        alt="ArtMarket logo"
        style={{ height: "50px", maxWidth: "160px", objectFit: "contain" }}
      />
      <Typography fontSize={14} color="#65635F">
        Already have an account?{" "}
        <Link
          component="button"
          onClick={handleSignInClick}
          sx={{ color: "blue", textDecoration: "none" }}
          aria-label="Sign in to existing account"
        >
          Sign In
        </Link>
      </Typography>
    </Box>
  );
};

export default AuthNavbar;
