import { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import image1 from '../Assets/Painting.png';
import image2 from '../Assets/Sculptures.png';
import image3 from '../Assets/Photography.png';
import image4 from '../Assets/Digital Art.png';

// Extended categories array with 10 items
const categories = [
  { title: 'Paintings', image: image1, path: '/category/paintings' },
  { title: 'Sculptures', image: image2, path: '/category/sculptures' },
  { title: 'Photography', image: image3, path: '/category/photography' },
  { title: 'Digital Art', image: image4, path: '/category/digital-art' },
  { title: 'Drawings', image: image1, path: '/category/drawings' },
  { title: 'Mixed Media', image: image2, path: '/category/mixed-media' },
  { title: 'Prints', image: image3, path: '/category/prints' },
  { title: 'Ceramics', image: image4, path: '/category/ceramics' },
  { title: 'Textiles', image: image1, path: '/category/textiles' },
  { title: 'Installations', image: image2, path: '/category/installations' },
];

const ShopByCategory = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  // Toggle inline expansion only
  const handleToggleView = () => {
    setIsExpanded((prev) => !prev);
    // ❌ Removed navigation
  };

  const handleCardClick = (path) => {
    navigate(path);
  };

  const displayedCategories = isExpanded ? categories : categories.slice(0, 4);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
  };

  return (
    <Box sx={{ px: { xs: 2, md: 8 }, py: 6 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 4,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 400,
            fontSize: '30px',
            color: '#111',
          }}
        >
          Shop by Category
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            '&:hover': { textDecoration: 'underline' },
          }}
          onClick={handleToggleView}
        >
          <Typography
            sx={{
              color: '#111',
              fontSize: '0.85rem',
              mr: 0.5,
            }}
          >
            {isExpanded ? 'Show Less' : 'View All'}
          </Typography>
          <ArrowForwardIcon sx={{ fontSize: '1rem', color: '#111' }} />
        </Box>
      </Box>

      <Grid container spacing={7}>
        <AnimatePresence>
          {displayedCategories.map((category) => (
            <Grid item xs={12} sm={6} md={3} key={category.title}>
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
              >
                <Card
                  elevation={0}
                  sx={{
                    cursor: 'pointer',
                    '&:hover': { boxShadow: '0 4px 8px rgba(0,0,0,0.1)' },
                  }}
                  onClick={() => handleCardClick(category.path)}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={category.image}
                    alt={category.title}
                  />
                  <CardContent sx={{ textAlign: 'left', pt: 1, pb: 0 }}>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: '18px',
                        fontWeight: 400,
                        color: '#555',
                        lineHeight: '28px',
                      }}
                    >
                      {category.title}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </AnimatePresence>
      </Grid>
    </Box>
  );
};

export default ShopByCategory;
