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
  MenuItem,
  Select,
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
  const [mobile, setMobile] = useState("");
  const [countryCode, setCountryCode] = useState("+91");

  const handleTogglePassword = () => setShowPassword((prev) => !prev);
  const handleToggleConfirmPassword = () =>
    setShowConfirmPassword((prev) => !prev);

  const isPasswordStrong =
    password.length >= 8 &&
    /\d/.test(password) &&
    /[A-Z]/.test(password) &&
    /[!@#$%^&*(),.?":{}|<>]/.test(password);

  const doPasswordsMatch = password === confirmPassword;

  const calculatePasswordStrength = () => {
    let strength = 0;
    if (password.length >= 8) strength += 40;
    if (/\d/.test(password)) strength += 20;
    if (/[A-Z]/.test(password)) strength += 20;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength += 20;
    return strength;
  };

  const passwordStrength = calculatePasswordStrength();

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

  // Prevent pasting in Confirm Password field
  const handlePaste = (e) => {
    e.preventDefault();
  };

  return (
    <Box sx={{ bgcolor: "#fff", minHeight: "100vh", py: 5 }}>
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
        <Typography
          variant="h5"
          fontWeight={600}
          sx={{
            position: "absolute",
            width: 308,
            top: 24,
            left: 403,
            textAlign: "center",
          }}
        >
          Create Account
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            position: "absolute",
            width: 515,
            top: 57,
            left: 292,
            textAlign: "center",
          }}
        >
          Join ArtMarket and discover amazing artworks
        </Typography>

        <Stepper
          activeStep={0}
          alternativeLabel
          sx={{
            position: "absolute",
            width: 269,
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

        <Box sx={{ position: "absolute", top: 140, left: 192, display: "flex", gap: 2 }}>
          <Button
            variant="outlined"
            startIcon={<GoogleIcon />}
            sx={buttonStyle}
            onClick={() => window.open("https://accounts.google.com", "_blank")}
          >
            Google
          </Button>
          <Button
            variant="outlined"
            startIcon={<FacebookIcon />}
            sx={buttonStyle}
            onClick={() => window.open("https://www.facebook.com/login", "_blank")}
          >
            Facebook
          </Button>
        </Box>

        <Box sx={{ position: "absolute", top: 215, left: 192, display: "flex", alignItems: "center", width: 716 }}>
          <Box sx={{ flexGrow: 1, height: "1px", bgcolor: "grey.500" }} />
          <Typography variant="body2" color="grey.500" sx={{ mx: 2 }}>or</Typography>
          <Box sx={{ flexGrow: 1, height: "1px", bgcolor: "grey.500" }} />
        </Box>

        <TextField {...inputProps} label="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} sx={{ ...inputPosition(277, 192) }} />
        <TextField {...inputProps} label="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} sx={{ ...inputPosition(277, 560) }} />
        <TextField {...inputProps} label="Email" value={email} onChange={(e) => setEmail(e.target.value)} sx={{ ...inputPosition(355, 192), width: 578 }} />

        {/* Mobile with Country Code */}
        <Box sx={{ position: "absolute", top: 433, left: 192, display: "flex", gap: 2 }}>
          <Select
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            sx={{
              width: 100,
              height: 40,
              borderRadius: "8px",
              fontSize: "0.875rem",
            }}
          >
            <MenuItem value="+91">🇮🇳 +91</MenuItem>
            <MenuItem value="+1">🇺🇸 +1</MenuItem>
            <MenuItem value="+44">🇬🇧 +44</MenuItem>
            <MenuItem value="+61">🇦🇺 +61</MenuItem>
            <MenuItem value="+81">🇯🇵 +81</MenuItem>
            <MenuItem value="+49">🇩🇪 +49</MenuItem>
            <MenuItem value="+33">🇫🇷 +33</MenuItem>
            <MenuItem value="+39">🇮🇹 +39</MenuItem>
            <MenuItem value="+86">🇨🇳 +86</MenuItem>
            <MenuItem value="+82">🇰🇷 +82</MenuItem>
            <MenuItem value="+7">🇷🇺 +7</MenuItem>
            <MenuItem value="+34">🇪🇸 +34</MenuItem>
            <MenuItem value="+55">🇧🇷 +55</MenuItem>
            <MenuItem value="+971">🇦🇪 +971</MenuItem>
            <MenuItem value="+880">🇧🇩 +880</MenuItem>
            <MenuItem value="+94">🇱🇰 +94</MenuItem>
            <MenuItem value="+92">🇵🇰 +92</MenuItem>
            <MenuItem value="+62">🇮🇩 +62</MenuItem>
            <MenuItem value="+234">🇳🇬 +234</MenuItem>
            <MenuItem value="+27">🇿🇦 +27</MenuItem>
          </Select>

          <TextField
            {...inputProps}
            label="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            sx={{ width: 465, ...inputProps.sx }}
          />

          <Button variant="contained" sx={verifyButtonStyle}>
            Verify
          </Button>
        </Box>

        {/* Password */}
        <Box sx={{ position: "absolute", top: 511, left: 192 }}>
          <TextField
            {...inputProps}
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            InputProps={{
              ...inputProps.InputProps,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePassword}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{ width: 716, ...inputProps.sx }}
          />
          <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
            <LinearProgress
              variant="determinate"
              value={passwordStrength}
              sx={{
                flexGrow: 1,
                height: 5,
                mr: 1,
                borderRadius: 5,
                bgcolor: "grey.200",
                "& .MuiLinearProgress-bar": {
                  bgcolor: passwordStrength >= 100 ? "green" : "grey.400",
                },
              }}
            />
            <Typography variant="caption" color={passwordStrength >= 100 ? "green" : "text.secondary"}>
              {passwordStrength >= 100 ? "Strong" : "Weak"}
            </Typography>
          </Box>
          <Typography variant="caption" color="text.secondary">
            8+ chars, 1 number, 1 capital letter, 1 special character
          </Typography>
        </Box>

        {/* Confirm Password */}
        <Box sx={{ position: "absolute", top: 625, left: 192 }}>
          <TextField
            {...inputProps}
            label="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onPaste={handlePaste}
            type={showConfirmPassword ? "text" : "password"}
            error={!doPasswordsMatch && confirmPassword.length > 0}
            helperText={
              !doPasswordsMatch && confirmPassword.length > 0
                ? "Passwords do not match"
                : " "
            }
            InputProps={{
              ...inputProps.InputProps,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleToggleConfirmPassword}>
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{ width: 716, ...inputProps.sx }}
          />
        </Box>

        {/* Continue Button */}
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
            !firstName || !lastName || !email || !isPasswordStrong || !doPasswordsMatch
          }
        >
          Continue to Address
        </Button>
      </Box>
    </Box>
  );
};

export default CreateAccount;

// Reusable styles
const inputProps = {
  required: true,
  size: "small",
  sx: {
    "& .MuiInputBase-root": {
      borderRadius: "8px",
      height: "40px",
    },
  },
  InputProps: {
    style: { fontSize: "0.875rem", fontWeight: 400 },
  },
};

const buttonStyle = {
  width: 352,
  height: 40,
  textTransform: "none",
  borderColor: "grey.300",
  borderWidth: "1px",
  color: "black",
  bgcolor: "#f5f5f5",
  borderRadius: "8px",
};

const verifyButtonStyle = {
  width: 120,
  height: 40,
  bgcolor: "black",
  color: "white",
  textTransform: "none",
  borderRadius: "8px",
  "&:hover": { bgcolor: "#333" },
};

const inputPosition = (top, left) => ({
  position: "absolute",
  top: top,
  left: left,
  width: 348,
});