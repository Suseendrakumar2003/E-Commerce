import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Rating,
  IconButton,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import Design1 from "../Assets/design 1.png"; 
import Design2 from "../Assets/sculpture 1.png"; 
import Design3 from "../Assets/brothers 1.png"; 

const flashDeals = [
  {
    title: "Abstract Canvas",
    artist: "Maria Santos",
    rating: 4.8,
    price: "$299",
    oldPrice: "$399",
    image: Design1,
  },
  {
    title: "Modern Sculpture",
    artist: "David Chen",
    rating: 4.9,
    price: "$299",
    oldPrice: "$399",
    image: Design2,
  },
  {
    title: "Vintage Print",
    artist: "Elena Rodriguez",
    rating: 4.7,
    price: "$299",
    oldPrice: "$399",
    image: Design3,
  },
];

const CountdownBox = ({ value }) => (
  <Box
    sx={{
      backgroundColor: "#000",
      color: "#fff",
      px: 2,
      py: 1,
      fontSize: "16px",
      fontWeight: "bold",
      borderRadius: "4px",
      minWidth: "40px",
      textAlign: "center",
    }}
  >
    {value}
  </Box>
);

const FlashSaleSection = () => {
  return (
    <Box sx={{ px: { xs: 2, md: 8 }, py: 6, background: "#fcf8f7" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 4 }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600, // Slightly bolder
            fontSize: "1.5rem", // Match the larger font size
            color: "#111",
          }}
        >
          Flash Sale
        </Typography>
        <Box
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
              fontSize: "0.85rem", // Smaller font to match the image
              textTransform: "none",
              mr: 0.5,
            }}
          >
            View All Deals
          </Typography>
          <span style={{ fontSize: "1rem", color: "#111" }}>→</span>
        </Box>
      </Box>

      <Grid container spacing={4}>
        {/* Flash sale cards */}
        <Grid item xs={12} md={9}>
          <Grid container spacing={3}>
            {flashDeals.map((item, i) => (
              <Grid item xs={12} sm={4} key={i}>
                <Card elevation={0}>
                  <Box sx={{ position: "relative" }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={item.image}
                      alt={item.title}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        top: 8,
                        left: 8,
                        background: "#000",
                        color: "#fff",
                        px: 1,
                        fontSize: "12px",
                      }}
                    >
                      SALE
                    </Box>
                    <Box
                      sx={{
                        position: "absolute",
                        top: 8,
                        right: 8,
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                      }}
                    >
                      <IconButton size="small" sx={{ bgcolor: "#fff" }}>
                        <FavoriteBorderIcon fontSize="small" />
                      </IconButton>
                      <IconButton size="small" sx={{ bgcolor: "#fff" }}>
                        <VisibilityOutlinedIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  </Box>
                  <CardContent sx={{ pb: 1 }}>
                    <Typography
                      fontSize="14px"
                      fontWeight="500"
                      sx={{ mb: 0.5 }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      fontSize="12px"
                      color="text.secondary"
                      sx={{ mb: 1 }}
                    >
                      {item.artist}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                      <Rating
                        name="read-only"
                        value={item.rating}
                        precision={0.1}
                        size="small"
                        readOnly
                      />
                      <Typography fontSize="12px" sx={{ ml: 1 }}>
                        {item.rating}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <Box sx={{ display: "flex", alignItems: "baseline", gap: 1 }}>
                        <Typography sx={{ fontWeight: 600, fontSize: "15px" }}>
                          {item.price}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "13px",
                            color: "gray",
                            textDecoration: "line-through",
                          }}
                        >
                          {item.oldPrice}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          border: "1px solid #111",
                          px: 2,
                          py: 0.5,
                          fontSize: "12px",
                          cursor: "pointer",
                          "&:hover": { backgroundColor: "#f5f5f5" },
                        }}
                      >
                        Add to Cart
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Right-side deal info */}
        <Grid item xs={12} md={3}>
          <Box sx={{ p: 2 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 500,
                fontSize: "1.25rem", // Match the size in the image
                mb: 1,
              }}
            >
              Deals Of The Month
            </Typography>
            <Typography
              sx={{
                fontSize: "12px", // Smaller font to match the image
                color: "gray",
                mt: 1,
                mb: 3, // More space before the button
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
              dui ultricies sollicitudin aliquam sem.
            </Typography>
            <Box
              sx={{
                border: "1px solid #111",
                px: 3,
                py: 1,
                fontSize: "14px",
                textAlign: "center",
                cursor: "pointer",
                "&:hover": { backgroundColor: "#f5f5f5" },
                mb: 4, // Space before the countdown
              }}
            >
              Buy Now
            </Box>

            <Typography
              sx={{
                mt: 2,
                mb: 1,
                fontSize: "12px", // Smaller font to match the image
                textTransform: "uppercase", // Match the uppercase style
              }}
            >
              Hurry, Before It’s Too Late!
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <CountdownBox value="23" />
              <Typography sx={{ fontSize: "16px" }}>:</Typography>
              <CountdownBox value="45" />
              <Typography sx={{ fontSize: "16px" }}>:</Typography>
              <CountdownBox value="20" />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FlashSaleSection;