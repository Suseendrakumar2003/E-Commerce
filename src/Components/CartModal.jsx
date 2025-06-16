import React from "react";
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Button,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCart } from "./CartContext"; // Import the useCart hook

const CartModal = ({ open, onClose }) => {
  const { cart, updateQuantity, removeItem } = useCart(); // Use CartContext

  const subtotal = (cart ?? []).reduce((acc, item) => {
    const price =
      typeof item.price === "string"
        ? parseFloat(item.price.replace("$", ""))
        : item.price;
    return acc + price * item.quantity;
  }, 0);

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box
        sx={{
          width: 460,
          p: 3,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#fff",
        }}
      >
        {/* Top Section */}
        <Box>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: 600,
                color: "#161412",
              }}
            >
              Shopping Cart
            </Typography>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Typography variant="body2" sx={{ mt: 0.5, mb: 2 }}>
            {cart.length} items
          </Typography>

          {/* Cart Items */}
          {cart.map((item) => {
            const price =
              typeof item.price === "string"
                ? parseFloat(item.price.replace("$", ""))
                : item.price;

            return (
              <Box
                key={item.title}
                sx={{
                  mb: 2,
                  display: "flex",
                  gap: 2,
                  p: 1.5,
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                }}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  width={60}
                  height={60}
                  style={{ objectFit: "cover", borderRadius: "4px" }}
                />

                {/* Title, Artist, Quantity */}
                <Box flexGrow={1}>
                  <Typography variant="subtitle2" sx={{ color: "#161412" }}>
                    {item.title}
                  </Typography>
                  <Typography variant="caption">{item.artist}</Typography>

                  {/* Quantity Controller Box */}
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    mt={1}
                    sx={{
                      backgroundColor: "#F4F4F2",
                      borderRadius: "6px",
                      width: "fit-content",
                      px: 1,
                    }}
                  >
                    <IconButton
                      size="small"
                      onClick={() => updateQuantity(item.title, -1)}
                    >
                      <RemoveIcon fontSize="small" />
                    </IconButton>
                    <Typography mx={1}>{item.quantity}</Typography>
                    <IconButton
                      size="small"
                      onClick={() => updateQuantity(item.title, 1)}
                    >
                      <AddIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </Box>

                {/* Delete and Price - Aligned Left */}
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                  minWidth={80}
                >
                  <IconButton onClick={() => removeItem(item.title)} sx={{ p: 0 }}>
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                  <Typography
                    sx={{
                      color: "#161412",
                      fontWeight: 600,
                      fontSize: "15px",
                      mt: 0.5,
                    }}
                  >
                    ${(price * item.quantity).toFixed(2)}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#65635F",
                      fontSize: "13px",
                      mt: "2px",
                    }}
                  >
                    ${price.toFixed(2)} each
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>

        {/* Bottom Section */}
        <Box>
          <Divider sx={{ mb: 2 }} />

          <Box display="flex" justifyContent="space-between" mb={1}>
            <Typography sx={{ color: "#65635F" }}>Subtotal</Typography>
            <Typography sx={{ color: "#161412", fontWeight: "bold" }}>
              ${subtotal.toFixed(2)}
            </Typography>
          </Box>

          <Box display="flex" justifyContent="space-between" mb={1}>
            <Typography sx={{ color: "#65635F" }}>Shipping</Typography>
            <Typography sx={{ color: "#65635F" }}>
              Calculated at checkout
            </Typography>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Box display="flex" justifyContent="space-between" mb={2}>
            <Typography variant="h6" sx={{ color: "#161412" }}>
              Total
            </Typography>
            <Typography variant="h6" sx={{ color: "#161412" }}>
              ${subtotal.toFixed(2)}
            </Typography>
          </Box>

          {/* Buttons */}
          <Button
            fullWidth
            variant="contained"
            sx={{
              mb: 1,
              backgroundColor: "#161412",
              textTransform: "none",
            }}
            onClick={() => alert("Proceeding to checkout!")}
          >
            Secure Checkout
          </Button>

          <Button
            fullWidth
            variant="outlined"
            onClick={onClose}
            sx={{
              color: "#161412",
              borderColor: "#161412",
              textTransform: "none",
            }}
          >
            Continue Shopping
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default CartModal;