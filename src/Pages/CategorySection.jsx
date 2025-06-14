import { Box, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from 'react-router-dom';
import image1 from "../Assets/Painting.png";
import image2 from "../Assets/Sculptures.png";
import image3 from "../Assets/Photography.png";
import image4 from "../Assets/Digital Art.png";

const categories = [
  {
    title: "Paintings",
    image: image1,
  },
  {
    title: "Sculptures",
    image: image2,
  },
  {
    title: "Photography",
    image: image3,
  },
  {
    title: "Digital Art",
    image: image4,
  },
];

const ShopByCategory = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ px: { xs: 2, md: 8 }, py: 6 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            fontSize: "1.5rem",
            color: "#111",
          }}
        >
          Shop by Category
        </Typography>

        <Box
          onClick={() => navigate('/paintings')}
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          <Typography
            sx={{
              color: "#111",
              fontSize: "0.85rem",
              textTransform: "none",
              mr: 0.5,
            }}
          >
            View All
          </Typography>
          <ArrowForwardIcon sx={{ fontSize: "1rem", color: "#111" }} />
        </Box>
      </Box>

      <Grid container spacing={3}>
        {categories.map((category, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              elevation={0}
              sx={{
                cursor: "pointer",
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={category.image}
                alt={category.title}
              />
              <CardContent sx={{ textAlign: "center", pt: 2, pb: 0 }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "0.9rem",
                    fontWeight: 400,
                    color: "#555",
                  }}
                >
                  {category.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ShopByCategory;