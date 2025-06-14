import React from "react";
import { Box, Typography, Link, IconButton, Grid } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import logo from "../Assets/logo.png";

// Common text styles
const textStyles = {
  fontFamily: "Inter",
  fontWeight: 400,
  fontSize: 16,
  lineHeight: "24px",
  letterSpacing: 0,
};

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#fff",
        color: "#000",
        px: 4,
        py: 5,
        mt: 6,
      }}
    >
      <Grid container spacing={4} justifyContent="space-between">
        {/* Logo / Brand */}
        <Grid item xs={12} md={3}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <img width="30px" src={logo} alt="Cultured Kid Logo" />
            <Typography
              variant="h6"
              sx={{
                ml: 1,
                ...textStyles,
              }}
            >
              Cultured Kid
            </Typography>
          </Box>
          <Typography
            variant="body2"
            color="grey.600"
            sx={{
              lineHeight: 1.5,
              ...textStyles,
            }}
          >
            Capturing eternal moments with passion and <br />
            creativity. Your trusted partner for wedding and <br />
            candid photography in Coimbatore.
          </Typography>
          <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
            <IconButton
              href="https://www.facebook.com/"
              sx={{ color: "#000", width: "40px" }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              href="https://www.instagram.com/"
              sx={{ color: "#000", width: "40px" }}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              href="https://twitter.com/"
              sx={{ color: "#000", width: "40px" }}
            >
              <TwitterIcon />
            </IconButton>
          </Box>
        </Grid>

        {/* Categories */}
        <Grid item xs={12} md={2}>
          <Typography
            variant="body1"
            fontWeight="bold"
            gutterBottom
            sx={textStyles}
          >
            Categories
          </Typography>
          <Box display="flex" flexDirection="column" gap={1}>
            <Link href="#" underline="hover" color="grey.600" sx={textStyles}>
              Paintings
            </Link>
            <Link href="#" underline="hover" color="grey.600" sx={textStyles}>
              Sculptures
            </Link>
            <Link href="#" underline="hover" color="grey.600" sx={textStyles}>
              Photography
            </Link>
            <Link href="#" underline="hover" color="grey.600" sx={textStyles}>
              Digital Art
            </Link>
          </Box>
        </Grid>

        {/* Shop */}
        <Grid item xs={12} md={2}>
          <Typography
            variant="body1"
            fontWeight="bold"
            gutterBottom
            sx={textStyles}
          >
            Shop
          </Typography>
          <Box display="flex" flexDirection="column" gap={1}>
            <Link href="#" underline="hover" color="grey.600" sx={textStyles}>
              Shipping Info
            </Link>
            <Link href="#" underline="hover" color="grey.600" sx={textStyles}>
              Returns
            </Link>
          </Box>
        </Grid>

        {/* Support */}
        <Grid item xs={12} md={2}>
          <Typography
            variant="body1"
            fontWeight="bold"
            gutterBottom
            sx={textStyles}
          >
            Support
          </Typography>
          <Box display="flex" flexDirection="column" gap={1}>
            <Link href="#" underline="hover" color="grey.600" sx={textStyles}>
              Help Center
            </Link>
            <Link href="#" underline="hover" color="grey.600" sx={textStyles}>
              Contact Us
            </Link>
          </Box>
        </Grid>

        {/* Company */}
        <Grid item xs={12} md={2}>
          <Typography
            variant="body1"
            fontWeight="bold"
            gutterBottom
            sx={textStyles}
          >
            Company
          </Typography>
          <Box display="flex" flexDirection="column" gap={1}>
            <Link href="#" underline="hover" color="grey.600" sx={textStyles}>
              About Us
            </Link>
            <Link href="#" underline="hover" color="grey.600" sx={textStyles}>
              Careers
            </Link>
            <Link href="#" underline="hover" color="grey.600" sx={textStyles}>
              Press
            </Link>
            <Link href="#" underline="hover" color="grey.600" sx={textStyles}>
              Blog
            </Link>
          </Box>
        </Grid>

        {/* Legal */}
        <Grid item xs={12} md={1}>
          <Typography
            variant="body1"
            fontWeight="bold"
            gutterBottom
            sx={textStyles}
          >
            Legal
          </Typography>
          <Box display="flex" flexDirection="column" gap={1}>
            <Link href="#" underline="hover" color="grey.600" sx={textStyles}>
              Privacy Policy
            </Link>
            <Link href="#" underline="hover" color="grey.600" sx={textStyles}>
              Terms of Service
            </Link>
          </Box>
        </Grid>
      </Grid>
      <br />
      <hr color="#c0c0c0" />

      {/* Copyright */}
      <Box textAlign="center" mt={4} color="grey.600">
        <Typography variant="caption" sx={textStyles}>
          © {new Date().getFullYear()} Artistry. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
