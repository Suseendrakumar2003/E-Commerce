import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  InputAdornment,
  IconButton,
  Checkbox,
  FormControlLabel,
  Divider,
  Link,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Logo from "../Assets/kit.png";
import Google from "../Assets/google.png";
import Facebook from "../Assets/facebook.png";
import StarIcon from "../Assets/stars.png";

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!/\S+@\S+\.\S+/.test(email)) errs.email = "Email is not valid";
    if (password.length < 6)
      errs.password = "Password must be at least 6 characters";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) navigate("/home");
  };

  const handleSignUpClick = () => {
    navigate("/create-account");
  };

  return (
    <Box minHeight="100vh" bgcolor="#fafafa">
      {/* Top Bar */}
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
          Don’t have an account?{" "}
          <Link
            component="button"
            onClick={handleSignUpClick}
            sx={{ color: "blue", textDecoration: "none" }}
            aria-label="Sign up for a new account"
          >
            Sign Up
          </Link>
        </Typography>
      </Box>

      {/* Login Form */}
      <Box display="flex" justifyContent="center" mt={4} px={2}>
        <Paper
          elevation={3}
          sx={{ width: "100%", maxWidth: 400, p: 4, borderRadius: 3 }}
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            <img
              src={StarIcon}
              alt="Star icon"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://cdn-icons-png.flaticon.com/512/616/616489.png";
              }}
              style={{
                width: 50,
                height: 50,
                marginBottom: 10,
                objectFit: "cover",
                borderRadius: 12,
                boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                backgroundColor: "#fff",
              }}
            />
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Welcome Back
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, color: "#666" }}>
              Sign in to your ArtMarket account
            </Typography>
          </Box>

          <Button
            fullWidth
            variant="outlined"
            startIcon={<img src={Google} alt="Google logo" width={18} />}
            sx={{
              mb: 1,
              backgroundColor: "#FFFFFF",
              borderColor: "#ccc",
              textTransform: "none",
              color: "#000",
              fontWeight: 500,
              borderRadius: 2,
            }}
            onClick={() => window.open("https://accounts.google.com", "_blank")}
            aria-label="Sign in with Google"
          >
            Continue with Google
          </Button>

          <Button
            fullWidth
            variant="outlined"
            startIcon={<img src={Facebook} alt="Facebook logo" width={18} />}
            sx={{
              mb: 2,
              backgroundColor: "#FFFFFF",
              borderColor: "#ccc",
              textTransform: "none",
              color: "#000",
              fontWeight: 500,
              borderRadius: 2,
            }}
            onClick={() =>
              window.open("https://www.facebook.com/login", "_blank")
            }
            aria-label="Sign in with Facebook"
          >
            Continue with Facebook
          </Button>

          <Divider sx={{ my: 2 }}>or</Divider>

          <form onSubmit={handleSubmit} noValidate>
            <Typography variant="body2" fontWeight="bold" sx={{ mb: 0.5 }}>
              Email Address
            </Typography>
            <TextField
              fullWidth
              placeholder="Enter your email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!errors.email}
              helperText={errors.email}
              sx={{
                mb: 2,
                "& .MuiInputBase-root": {
                  borderRadius: 2,
                  backgroundColor: "#F9F9F9",
                },
              }}
              aria-required="true"
            />

            <Typography variant="body2" fontWeight="bold" sx={{ mb: 0.5 }}>
              Password
            </Typography>
            <TextField
              fullWidth
              placeholder="Enter your password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!errors.password}
              helperText={errors.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                mb: 2,
                "& .MuiInputBase-root": {
                  borderRadius: 2,
                  backgroundColor: "#F9F9F9",
                },
              }}
              aria-required="true"
            />

            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              sx={{ mb: 2 }}
            >
              <FormControlLabel
                control={<Checkbox />}
                label="Remember me"
                sx={{ "& .MuiTypography-root": { fontSize: "0.875rem" } }}
              />
              <Link
                href="#"
                variant="body2"
                sx={{ color: "#161412", textDecoration: "none" }}
                aria-label="Forgot password"
              >
                Forgot password?
              </Link>
            </Box>

            <Button
              variant="contained"
              type="submit"
              fullWidth
              sx={{
                backgroundColor: "#000",
                color: "#fff",
                borderRadius: 2,
                textTransform: "none",
                fontWeight: 600,
              }}
              aria-label="Sign in"
            >
              Sign In
            </Button>
          </form>

          <Typography variant="body2" textAlign="center" mt={2} color="#65635F">
            Don’t have an account?{" "}
            <Link
              component="button"
              onClick={handleSignUpClick}
              sx={{ color: "#161412", textDecoration: "none" }}
              aria-label="Sign up for a new account"
            >
              Sign up
            </Link>
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default LoginPage;
