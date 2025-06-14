import React from "react";
import { Box, Typography, Link, Grid } from "@mui/material";
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

// Social media icon styles
const socialIconStyles = {
  width: 60,
  height: 60,
  backgroundColor: "#fff",
  textAlign: "center",
  lineHeight: "60px",
  fontSize: 28,
  margin: "0 8px",
  display: "block",
  borderRadius: "50%",
  position: "relative",
  overflow: "hidden",
  border: "3px solid #fff",
  zIndex: 1,
  textDecoration: "none",
  "& .icon": {
    position: "relative",
    color: "#262626",
    transition: "0.5s",
    zIndex: 3,
  },
  "&:hover .icon": {
    color: "#fff",
    transform: "rotateY(360deg)",
  },
  "&:before": {
    content: '""',
    position: "absolute",
    top: "100%",
    left: 0,
    width: "100%",
    height: "100%",
    background: "#000",
    transition: "0.5s",
    zIndex: 2,
  },
  "&:hover:before": {
    top: 0,
  },
};

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#fff",
        color: "#000",
        px: { xs: 2, md: 4 },
        py: 5,
        mt: 6,
      }}
    >
      <Grid container spacing={4} justifyContent="space-between">
        {/* Left Side: Logo / Brand */}
        <Grid item xs={12} md={4}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <img width="30px" src={logo} alt="Cultured Kid Logo" />
            <Typography
              variant="h6"
              sx={{
                ml: 1,
                ...textStyles,
                fontWeight: 600,
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
            Capturing eternal moments with passion and <br /> creativity. Your
            trusted partner for wedding and <br />
            candid photography in Coimbatore.
          </Typography>
          <Box sx={{ display: "flex", gap: 0, mt: 2,ml:"-5.5%"}}>
            <Link
              href="https://www.facebook.com/"
              sx={socialIconStyles}
              aria-label="Facebook"
            >
              <FacebookIcon className="icon" />
            </Link>
            <Link
              href="https://www.instagram.com/"
              sx={socialIconStyles}
              aria-label="Instagram"
            >
              <InstagramIcon className="icon" />
            </Link>
            <Link
              href="https://twitter.com/"
              sx={socialIconStyles}
              aria-label="Twitter"
            >
              <TwitterIcon className="icon" />
            </Link>
          </Box>
        </Grid>

        {/* Right Side: Categories */}
        <Grid item xs={12} md={6} >
          <Grid container spacing={20}>
            {/* Shop */}
            <Grid item xs={6} sm={3}>
              <Typography
                variant="body1"
                fontWeight="bold"
                gutterBottom
                sx={textStyles}
              >
                Shop
              </Typography>
              <Box display="flex" flexDirection="column" gap={1}>
                <Link
                  href="#"
                  underline="hover"
                  color="grey.600"
                  sx={textStyles}
                >
                  Paintings
                </Link>
                <Link
                  href="#"
                  underline="hover"
                  color="grey.600"
                  sx={textStyles}
                >
                  Sculptures
                </Link>
                <Link
                  href="#"
                  underline="hover"
                  color="grey.600"
                  sx={textStyles}
                >
                  Photography
                </Link>
                <Link
                  href="#"
                  underline="hover"
                  color="grey.600"
                  sx={textStyles}
                >
                  Digital Art
                </Link>
              </Box>
            </Grid>

            {/* Support */}
            <Grid item xs={6} sm={3}>
              <Typography
                variant="body1"
                fontWeight="bold"
                gutterBottom
                sx={textStyles}
              >
                Support
              </Typography>
              <Box display="flex" flexDirection="column" gap={1}>
                <Link
                  href="#"
                  underline="hover"
                  color="grey.600"
                  sx={textStyles}
                >
                  Help Center
                </Link>
                <Link
                  href="#"
                  underline="hover"
                  color="grey.600"
                  sx={textStyles}
                >
                  Shipping Info
                </Link>
                <Link
                  href="#"
                  underline="hover"
                  color="grey.600"
                  sx={textStyles}
                >
                  Returns
                </Link>
                <Link
                  href="#"
                  underline="hover"
                  color="grey.600"
                  sx={textStyles}
                >
                  Contact Us
                </Link>
              </Box>
            </Grid>

            {/* Company */}
            <Grid item xs={6} sm={3}>
              <Typography
                variant="body1"
                fontWeight="bold"
                gutterBottom
                sx={textStyles}
              >
                Company
              </Typography>
              <Box display="flex" flexDirection="column" gap={1}>
                <Link
                  href="#"
                  underline="hover"
                  color="grey.600"
                  sx={textStyles}
                >
                  About Us
                </Link>
                <Link
                  href="#"
                  underline="hover"
                  color="grey.600"
                  sx={textStyles}
                >
                  Careers
                </Link>
                <Link
                  href="#"
                  underline="hover"
                  color="grey.600"
                  sx={textStyles}
                >
                  Press
                </Link>
                <Link
                  href="#"
                  underline="hover"
                  color="grey.600"
                  sx={textStyles}
                >
                  Blog
                </Link>
              </Box>
            </Grid>

            {/* Legal */}
            <Grid item xs={6} sm={3}>
              <Typography
                variant="body1"
                fontWeight="bold"
                gutterBottom
                sx={textStyles}
              >
                Legal
              </Typography>
              <Box display="flex" flexDirection="column" gap={1}>
                <Link
                  href="#"
                  underline="hover"
                  color="grey.600"
                  sx={textStyles}
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  underline="hover"
                  color="grey.600"
                  sx={textStyles}
                >
                  Terms of Service
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Box sx={{ mt: 4 }}>
        <hr style={{ borderColor: "#c0c0c0" }} />
      </Box>

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
