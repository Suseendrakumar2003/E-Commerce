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
          fontWeight: 600, // Slightly bolder to match the image
          fontSize: "1.5rem", // Larger font size
          color: "#111", // Darker color
          mb: 1,
        }}
      >
        Featured Galleries
      </Typography>
      <Typography
        align="center"
        sx={{
          color: "#666", // Slightly darker gray to match the image
          fontSize: "0.9rem", // Smaller font size
          fontWeight: 400, // Lighter weight
          mb: 4,
        }}
      >
        Discover exceptional artworks from our partner galleries and renowned art institutions worldwide
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {galleryImages.map((src, i) => (
          <Grid item xs={6} sm={3} key={i} sx={{ textAlign: "center" }}>
            <Box
              component="img"
              src={src}
              alt={`Gallery ${i + 1}`}
              sx={{
                width: "100%",
                height: "auto",
                maxHeight: "120px", // Slightly smaller to match the image proportions
                objectFit: "cover",
                borderRadius: 0, // No border radius to match the image
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