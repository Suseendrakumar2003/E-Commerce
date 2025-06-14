// src/ProductCard.jsx
import React from "react";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { useCart } from "./CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      title: product.title,
      artist: product.artist,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  };

  return (
    <Card sx={{ width: 250, m: 2 }}>
      <CardMedia component="img" height="140" image={product.image} alt={product.title} />
      <CardContent>
        <Typography variant="h6">{product.title}</Typography>
        <Typography variant="body2">{product.artist}</Typography>
        <Typography variant="body1" fontWeight="bold">
          ${product.price}
        </Typography>
        <Button variant="outlined" onClick={handleAddToCart} sx={{ mt: 1 }}>
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
