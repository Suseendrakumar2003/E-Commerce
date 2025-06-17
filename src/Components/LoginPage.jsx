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
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [resetErrors, setResetErrors] = useState({});

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

  const handleResetPassword = (e) => {
    e.preventDefault();
    const errs = {};
    if (!/\S+@\S+\.\S+/.test(resetEmail)) {
      errs.email = "Valid email is required";
    }
    if (newPassword.length < 6) {
      errs.newPassword = "Password must be at least 6 characters";
    }
    if (newPassword !== confirmPassword) {
      errs.confirmPassword = "Passwords do not match";
    }
    setResetErrors(errs);
    if (Object.keys(errs).length === 0) {
      alert("Password reset successful!");
      setIsForgotPassword(false);
      setResetEmail("");
      setNewPassword("");
      setConfirmPassword("");
      setResetErrors({});
    }
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
        <Box display="flex" alignItems="center" gap={1.5}>
          <img
            src={StarIcon}
            alt="Star icon"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://cdn-icons-png.flaticon.com/512/616/616489.png";
            }}
            style={{
              width: 28,
              height: 28,
              objectFit: "cover",
              borderRadius: 6,
              backgroundColor: "#fff",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          />

          <img
            src={Logo}
            alt="ArtMarket logo"
            style={{
              height: "50px",
              maxWidth: "160px",
              objectFit: "contain",
            }}
          />
        </Box>

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

      {/* Form Card */}
      <Box display="flex" justifyContent="center" mt={4} px={2}>
        <Paper
          elevation={3}
          sx={{ width: "100%", maxWidth: 400, p: 4, borderRadius: 3 }}
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              {isForgotPassword ? "Reset Password" : "Welcome Back"}
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, color: "#666" }}>
              {isForgotPassword
                ? "Set your new password for ArtMarket"
                : "Sign in to your ArtMarket account"}
            </Typography>
          </Box>

          {!isForgotPassword && (
            <>
              <Button
                fullWidth
                variant="outlined"
                startIcon={<img src={Google} alt="Google" width={18} />}
                sx={{
                  mb: 1,
                  backgroundColor: "#FFFFFF",
                  borderColor: "#ccc",
                  textTransform: "none",
                  color: "#000",
                  fontWeight: 500,
                  borderRadius: 2,
                }}
                onClick={() =>
                  window.open("https://accounts.google.com", "_blank")
                }
                aria-label="Sign in with Google"
              >
                Continue with Google
              </Button>

              <Button
                fullWidth
                variant="outlined"
                startIcon={<img src={Facebook} alt="Facebook" width={18} />}
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
            </>
          )}

          {!isForgotPassword ? (
            <form onSubmit={handleSubmit} noValidate>
              <Typography variant="body2" fontWeight="bold" sx={{ mb: 0.5 }}>
                Email Address
              </Typography>
              <TextField
                fullWidth
                placeholder="Enter your email"
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
                        aria-label={showPassword ? "Hide password" : "Show password"}
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
                  component="button"
                  onClick={() => setIsForgotPassword(true)}
                  sx={{ color: "#161412", textDecoration: "none" }}
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
              >
                Sign In
              </Button>
            </form>
          ) : (
            <form onSubmit={handleResetPassword}>
              <TextField
                fullWidth
                label="Email"
                placeholder="Enter your email"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
                error={!!resetErrors.email}
                helperText={resetErrors.email}
                sx={{
                  mb: 2,
                  "& .MuiInputBase-root": {
                    borderRadius: 2,
                    backgroundColor: "#F9F9F9",
                  },
                }}
              />
              <TextField
                fullWidth
                label="New Password"
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                error={!!resetErrors.newPassword}
                helperText={resetErrors.newPassword}
                sx={{
                  mb: 2,
                  "& .MuiInputBase-root": {
                    borderRadius: 2,
                    backgroundColor: "#F9F9F9",
                  },
                }}
              />
              <TextField
                fullWidth
                label="Confirm Password"
                type="password"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                error={!!resetErrors.confirmPassword}
                helperText={resetErrors.confirmPassword}
                sx={{
                  mb: 2,
                  "& .MuiInputBase-root": {
                    borderRadius: 2,
                    backgroundColor: "#F9F9F9",
                  },
                }}
              />
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
              >
                Reset Password
              </Button>

              <Typography variant="body2" textAlign="center" mt={2}>
                <Link
                  component="button"
                  onClick={() => setIsForgotPassword(false)}
                  sx={{ color: "#161412", textDecoration: "none" }}
                >
                  Back to Login
                </Link>
              </Typography>
            </form>
          )}
        </Paper>
      </Box>
    </Box>
  );
};

export default LoginPage;
