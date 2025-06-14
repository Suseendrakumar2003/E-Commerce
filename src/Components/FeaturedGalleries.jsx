import { Box, Typography, Grid } from "@mui/material";
import gallery1 from "../Assets/gallery1.png";
import gallery2 from "../Assets/gallery2.png";
import gallery3 from "../Assets/gallery3.png";
import gallery4 from "../Assets/gallery4.png";

const galleryImages = [gallery1, gallery2, gallery3, gallery4];

const FeaturedGalleries = () => {
  return (
    <Box sx={{ px: { xs: 2, md: 8 }, py: 6 }}>
      <Typography
        variant="h5"
        align="center"
        sx={{
           fontFamily: '"Optima", serif',
          fontWeight: 400,
          fontSize: "30px",
          color: "#111",
          mb: 1,
          lineHeight: "36px",
          letterSpacing: "0%",
        }}
      >
        Featured Galleries
      </Typography>
      <Typography
        align="center"
        sx={{
          color: "#666",
          fontSize: "16px",
          fontWeight: 400,
          mb: 4,
          lineHeight: "24px",
          letterSpacing: "0%",
        }}
      >
        Discover exceptional artworks from our partner galleries and renowned
        art institutions worldwide
      </Typography>

      <Grid container spacing={26} justifyContent="center">
        {galleryImages.map((src, i) => (
          <Grid item xs={6} sm={3} key={i} sx={{ textAlign: "center" }}>
            <Box
              component="img"
              src={src}
              alt={`Gallery ${i + 1}`}
              sx={{
                width: "120px",
                height: "60px",
                maxHeight: "120px", 
                objectFit: "cover",
                borderRadius: 0, 
              }}
            />
            <Typography
              sx={{
                fontSize: "0.85rem", // Smaller font to match the image
                mt: 1,
                color: "#111", // Darker color
                cursor: "pointer",
                "&:hover": { textDecoration: "underline" }, // Hover effect to match typical link behavior
              }}
            >
              Explore Now
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedGalleries;
