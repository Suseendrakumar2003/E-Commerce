import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
  InputAdornment,
  Stepper,
  Step,
  StepLabel,
  LinearProgress,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleTogglePassword = () => setShowPassword((prev) => !prev);
  const handleToggleConfirmPassword = () =>
    setShowConfirmPassword((prev) => !prev);

  const isPasswordStrong =
    password.length >= 8 && /\d/.test(password) && /[A-Z]/.test(password);
  const doPasswordsMatch = password === confirmPassword;

  const calculatePasswordStrength = () => {
    let strength = 0;
    if (password.length >= 8) strength += 40;
    if (/\d/.test(password)) strength += 30;
    if (/[A-Z]/.test(password)) strength += 30;
    return strength;
  };

  const handleContinue = () => {
    if (
      firstName &&
      lastName &&
      email &&
      isPasswordStrong &&
      doPasswordsMatch
    ) {
      navigate("/register-address");
    }
  };

  return (
    <Box sx={{ bgcolor: "#fff", minHeight: "100vh", py: 5 }}>
      {/* Main Form Container */}
      <Box
        sx={{
          maxWidth: 1100,
          bgcolor: "#fff",
          mx: "auto",
          p: 4,
          borderRadius: 4,
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          position: "relative",
          minHeight: 800,
        }}
      >
        {/* Create Account Title */}
        <Typography
          variant="h5"
          fontWeight={600}
          sx={{
            position: "absolute",
            width: 308,
            height: 28,
            top: 24,
            left: 403,
            textAlign: "center",
            lineHeight: "28px",
          }}
        >
          Create Account
        </Typography>

        {/* Join ArtMarket Subtitle */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            position: "absolute",
            width: 515,
            height: 20,
            top: 57,
            left: 292,
            textAlign: "center",
            lineHeight: "20px",
          }}
        >
          Join ArtMarket and discover amazing artworks
        </Typography>

        {/* Stepper (Account and Address) */}
        <Stepper
          activeStep={0}
          alternativeLabel
          sx={{
            position: "absolute",
            width: 269,
            height: 28,
            top: 97,
            left: 416,
          }}
        >
          <Step key="Account">
            <StepLabel
              StepIconComponent={() => (
                <Box
                  sx={{
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    backgroundColor: "black",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  1
                </Box>
              )}
            >
              Account
            </StepLabel>
          </Step>
          <Step key="Address">
            <StepLabel
              StepIconComponent={() => (
                <Box
                  sx={{
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    backgroundColor: "grey.300",
                    color: "grey.600",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  2
                </Box>
              )}
            >
              Address
            </StepLabel>
          </Step>
        </Stepper>

        {/* Social Login Buttons */}
        <Box
          sx={{
            position: "absolute",
            top: 140,
            left: 192,
            display: "flex",
            gap: 2,
          }}
        >
          <Button
            variant="outlined"
            startIcon={<GoogleIcon />}
            sx={{
              width: 352,
              height: 40,
              textTransform: "none",
              borderColor: "grey.300",
              borderWidth: "1px",
              color: "black",
              bgcolor: "#f5f5f5",
              borderRadius: "8px",
            }}
            onClick={() => window.open("https://accounts.google.com", "_blank")}
            aria-label="Sign up with Google"
          >
            Google
          </Button>
          <Button
            variant="outlined"
            startIcon={<FacebookIcon />}
            sx={{
              width: 352,
              height: 40,
              textTransform: "none",
              borderColor: "grey.300",
              borderWidth: "1px",
              color: "black",
              bgcolor: "#f5f5f5",
              borderRadius: "8px",
            }}
            onClick={() =>
              window.open("https://www.facebook.com/login", "_blank")
            }
            aria-label="Sign up with Facebook"
          >
            Facebook
          </Button>
        </Box>

        {/* "or" Text with Horizontal Lines */}
        <Box
          sx={{
            position: "absolute",
            top: 215,
            left: 192,
            display: "flex",
            alignItems: "center",
            width: 716,
          }}
        >
          <Box sx={{ flexGrow: 1, height: "1px", bgcolor: "grey.500" }} />
          <Typography
            variant="body2"
            color="grey.500"
            sx={{
              width: 20,
              height: 18,
              textAlign: "center",
              lineHeight: "18px",
              mx: 2,
            }}
          >
            or
          </Typography>
          <Box sx={{ flexGrow: 1, height: "1px", bgcolor: "grey.500" }} />
        </Box>

        {/* Form Fields */}
        <TextField
          label="First Name"
          required
          size="small"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="John"
          sx={{
            position: "absolute",
            width: 348,
            height: 40,
            top: 277,
            left: 192,
            "& .MuiInputBase-root": {
              borderRadius: "8px",
              height: "40px",
              borderWidth: "1px",
            },
          }}
          InputProps={{
            style: { fontSize: "0.875rem", fontWeight: 400 },
          }}
          aria-required="true"
        />
        <TextField
          label="Last Name"
          required
          size="small"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Doe"
          sx={{
            position: "absolute",
            width: 348,
            height: 40,
            top: 277,
            left: 560,
            "& .MuiInputBase-root": {
              borderRadius: "8px",
              height: "40px",
              borderWidth: "1px",
            },
          }}
          InputProps={{
            style: { fontSize: "0.875rem", fontWeight: 400 },
          }}
          aria-required="true"
        />
        <TextField
          label="Email"
          required
          size="small"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="john@example.com"
          sx={{
            position: "absolute",
            width: 593,
            height: 40,
            top: 355,
            left: 192,
            "& .MuiInputBase-root": {
              borderRadius: "8px",
              height: "40px",
              borderWidth: "1px",
            },
          }}
          InputProps={{
            style: { fontSize: "0.875rem", fontWeight: 400 },
          }}
          aria-required="true"
        />
        <Box
          sx={{
            position: "absolute",
            top: 433,
            left: 192,
            display: "flex",
            gap: 2,
          }}
        >
          <TextField
            label="Mobile Number"
            required
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">+91</InputAdornment>
              ),
            }}
            sx={{
              width: 593,
              height: 40,
              "& .MuiInputBase-root": {
                borderRadius: "8px",
                height: "40px",
                borderWidth: "1px",
              },
            }}
            InputProps={{
              style: { fontSize: "0.875rem", fontWeight: 400 },
            }}
            aria-required="true"
          />
          <Button
            variant="contained"
            sx={{
              width: 120,
              height: 40,
              bgcolor: "black",
              color: "white",
              textTransform: "none",
              borderRadius: "8px",
              "&:hover": { bgcolor: "#333" },
            }}
            aria-label="Verify mobile number"
          >
            Verify
          </Button>
        </Box>
        <Box sx={{ position: "absolute", top: 511, left: 192 }}>
          <TextField
            label="Password"
            type={showPassword ? "text" : "password"}
            required
            size="small"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleTogglePassword}
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
              width: 716,
              height: 40,
              "& .MuiInputBase-root": {
                borderRadius: "8px",
                height: "40px",
                borderWidth: "1px",
              },
            }}
            aria-required="true"
          />
          <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
            <LinearProgress
              variant="determinate"
              value={calculatePasswordStrength()}
              sx={{
                flexGrow: 1,
                height: 5,
                borderRadius: 5,
                mr: 1,
                bgcolor: "grey.200",
                "& .MuiLinearProgress-bar": {
                  bgcolor:
                    calculatePasswordStrength() >= 100 ? "green" : "grey.400",
                },
              }}
            />
            <Typography
              variant="caption"
              color={
                calculatePasswordStrength() >= 100 ? "green" : "text.secondary"
              }
            >
              {calculatePasswordStrength() >= 100 ? "Strong" : "Weak"}
            </Typography>
          </Box>
          <Typography variant="caption" color="text.secondary">
            8+ chars, 1 number, 1 capital letter
          </Typography>
        </Box>
        <Box sx={{ position: "absolute", top: 625, left: 192 }}>
          <TextField
            label="Confirm Password"
            type={showConfirmPassword ? "text" : "password"}
            required
            size="small"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleToggleConfirmPassword}
                    edge="end"
                    aria-label={
                      showConfirmPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={!doPasswordsMatch && confirmPassword.length > 0}
            helperText={
              !doPasswordsMatch && confirmPassword.length > 0
                ? "Passwords do not match"
                : " "
            }
            sx={{
              width: 716,
              height: 40,
              "& .MuiInputBase-root": {
                borderRadius: "8px",
                height: "40px",
                borderWidth: "1px",
              },
            }}
            aria-required="true"
          />
        </Box>
        <Button
          variant="contained"
          sx={{
            position: "absolute",
            width: 716,
            height: 44,
            top: 727,
            left: 192,
            textTransform: "none",
            fontWeight: "bold",
            bgcolor: "#4d4d4d",
            color: "white",
            borderRadius: "8px",
            "&:hover": { bgcolor: "#333" },
          }}
          onClick={handleContinue}
          disabled={
            !firstName ||
            !lastName ||
            !email ||
            !isPasswordStrong ||
            !doPasswordsMatch
          }
          aria-label="Continue to address form"
        >
          Continue to Address
        </Button>
      </Box>
    </Box>
  );
};

export default CreateAccount;