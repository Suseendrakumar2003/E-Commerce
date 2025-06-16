import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel,
  Button,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";

const RegistrationAddress = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    addressType: "Home",
    pincode: "400001",
    addressLine1: "",
    addressLine2: "",
    area: "",
    country: "India",
    city: "",
    state: "",
    landmark: "",
    language: "English",
    selectedInterests: [],
    saveAsDefault: true,
    receiveOffers: true,
    acceptedTerms: false,
  });

  const [errors, setErrors] = useState({
    addressType: "",
    pincode: "",
    addressLine1: "",
    country: "",
    city: "",
    state: "",
    acceptedTerms: "",
  });

  const addressTypes = ["Home", "Work", "Other"];
  const states = ["Tamil Nadu", "Kerala", "Karnataka", "Maharashtra", "Delhi"];
  const languages = ["English", "Hindi", "Tamil", "Kannada", "Malayalam"];
  const interests = [
    "Home & Kitchen",
    "Toys",
    "Electronics",
    "Fashion",
    "Books",
    "Sports",
    "Beauty",
    "Automotive",
    "Health",
  ];

  const validateForm = () => {
    let newErrors = {
      addressType: "",
      pincode: "",
      addressLine1: "",
      country: "",
      city: "",
      state: "",
      acceptedTerms: "",
    };
    let isValid = true;

    if (!formData.addressType) {
      newErrors.addressType = "Address Type is required";
      isValid = false;
    }
    if (!formData.pincode) {
      newErrors.pincode = "Pincode is required";
      isValid = false;
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = "Pincode must be a 6-digit number";
      isValid = false;
    }
    if (!formData.addressLine1) {
      newErrors.addressLine1 = "Address Line 1 is required";
      isValid = false;
    }
    if (!formData.country) {
      newErrors.country = "Country is required";
      isValid = false;
    }
    if (!formData.city) {
      newErrors.city = "City is required";
      isValid = false;
    }
    if (!formData.state) {
      newErrors.state = "State is required";
      isValid = false;
    }
    if (!formData.acceptedTerms) {
      newErrors.acceptedTerms = "You must agree to the Terms & Conditions";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleInterestToggle = (interest) => {
    setFormData((prev) => {
      const selected = [...prev.selectedInterests];
      const index = selected.indexOf(interest);
      if (index === -1) {
        selected.push(interest);
      } else {
        selected.splice(index, 1);
      }
      return { ...prev, selectedInterests: selected };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Submitted data: ", formData);
      alert("Registration completed successfully!");
      navigate("/home");
    }
  };

  const handleBackClick = () => {
    navigate("/create-account");
  };

  return (
    <Box
      sx={{
        bgcolor: "#FAFAFA",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      {/* Main Form Container */}
      <Box
        sx={{
          width: "800px",
          minHeight: "1070px",
          bgcolor: "#FFFFFF",
          border: "1px solid rgba(101, 99, 95, 0.1)",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.08)",
          borderRadius: "12px",
          position: "relative",
          padding: "40px",
          boxSizing: "border-box",
        }}
      >
        {/* Create Account Title */}
        <Typography
          sx={{
            fontFamily: "Inter",
            fontWeight: 700,
            fontSize: "24px",
            lineHeight: "28px",
            color: "#161412",
            textAlign: "center",
            mt: "24px",
          }}
        >
          Create Account
        </Typography>

        {/* Join ArtMarket Subtitle */}
        <Typography
          sx={{
            fontFamily: "Inter",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "20px",
            color: "#65635F",
            textAlign: "center",
            mt: "8px",
          }}
        >
          Join ArtMarket and discover amazing artworks
        </Typography>

        {/* Stepper (Account and Address) */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: "24px",
            gap: "16px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Box
              sx={{
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                backgroundColor: "#161412",
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "12px",
                fontWeight: 500,
                fontFamily: "Inter",
              }}
            >
              1
            </Box>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: "11px",
                lineHeight: "16px",
                color: "#161412",
              }}
            >
              Account
            </Typography>
          </Box>
          <Box sx={{ width: "50px", height: "2px", bgcolor: "#161412" }} />
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Box
              sx={{
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                backgroundColor: "#161412",
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "12px",
                fontWeight: 500,
                fontFamily: "Inter",
              }}
            >
              2
            </Box>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: "11px",
                lineHeight: "16px",
                color: "#161412",
              }}
            >
              Address
            </Typography>
          </Box>
        </Box>

        {/* Form */}
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: "40px" }}>
          {/* Shipping Address & Preferences with Back Button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 600,
                fontSize: "18px",
                lineHeight: "27px",
                color: "#161412",
              }}
            >
              Shipping Address & Preferences
            </Typography>
            <Box
              onClick={handleBackClick}
              sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            >
              <ArrowBackIcon sx={{ color: "#65635F", fontSize: "20px" }} />
              <Typography
                sx={{
                  ml: "8px",
                  color: "#65635F",
                  fontSize: "12px",
                  fontWeight: 400,
                  fontFamily: "Inter",
                  lineHeight: "18px",
                }}
              >
                Back
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: "32px" }}>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "21px",
                color: "#161412",
              }}
            >
              Primary Shipping Address
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: "20px", mt: "24px" }}>
            <FormControl
              size="small"
              error={!!errors.addressType}
              sx={{
                width: "348px",
                "& .MuiInputBase-root": {
                  height: 40,
                  background: "#F4F4F2",
                  border: "1px solid rgba(101, 99, 95, 0.2)",
                  borderRadius: "8px",
                  fontFamily: "Inter",
                  fontSize: 14,
                  fontWeight: 400,
                  color: "#000000",
                },
                "& .MuiInputLabel-root": {
                  fontFamily: "Inter",
                  fontSize: 12,
                  fontWeight: 500,
                  color: "#161412",
                  lineHeight: "18px",
                  transform: "translate(0, -18px)",
                },
              }}
            >
              <InputLabel>Address Type *</InputLabel>
              <Select
                name="addressType"
                value={formData.addressType}
                onChange={handleChange}
                label="Address Type *"
                IconComponent={() => (
                  <KeyboardArrowDownIcon sx={{ color: "#000000" }} />
                )}
              >
                {addressTypes.map((type) => (
                  <MenuItem
                    key={type}
                    value={type}
                    sx={{
                      fontFamily: "Inter",
                      fontSize: 14,
                      fontWeight: 400,
                      color: "#000000",
                    }}
                  >
                    {type}
                  </MenuItem>
                ))}
              </Select>
              {errors.addressType && (
                <Typography
                  variant="caption"
                  color="error"
                  sx={{ mt: 0.5, fontFamily: "Inter", fontSize: 10 }}
                >
                  {errors.addressType}
                </Typography>
              )}
            </FormControl>

            <TextField
              label="Pincode / ZIP *"
              name="pincode"
              required
              value={formData.pincode}
              onChange={handleChange}
              size="small"
              error={!!errors.pincode}
              helperText={errors.pincode}
              sx={{
                width: "348px",
                "& .MuiInputBase-root": {
                  height: 40,
                  background: "#F4F4F2",
                  border: "1px solid rgba(101, 99, 95, 0.2)",
                  borderRadius: "8px",
                  fontFamily: "Inter",
                  fontSize: 14,
                  fontWeight: 400,
                  color: "#000000",
                },
                "& .MuiInputLabel-root": {
                  fontFamily: "Inter",
                  fontSize: 12,
                  fontWeight: 500,
                  color: "#161412",
                  lineHeight: "18px",
                  transform: "translate(0, -18px)",
                },
                "& .MuiFormHelperText-root": {
                  color: "error.main",
                  mt: 0.5,
                  fontFamily: "Inter",
                  fontSize: 10,
                },
              }}
              InputProps={{
                style: {
                  fontSize: "0.875rem",
                  fontWeight: 400,
                  color: "#000000",
                },
              }}
            />
          </Box>

          <TextField
            label="Address Line 1 *"
            name="addressLine1"
            required
            value={formData.addressLine1}
            onChange={handleChange}
            placeholder="House number, building name"
            size="small"
            error={!!errors.addressLine1}
            helperText={errors.addressLine1}
            sx={{
              width: "100%",
              mt: "24px",
              "& .MuiInputBase-root": {
                height: 40,
                background: "#F4F4F2",
                border: "1px solid rgba(101, 99, 95, 0.2)",
                borderRadius: "8px",
                fontFamily: "Inter",
                fontSize: 14,
                fontWeight: 400,
                color: "#000000",
              },
              "& .MuiInputLabel-root": {
                fontFamily: "Inter",
                fontSize: 12,
                fontWeight: 500,
                color: "#161412",
                lineHeight: "18px",
                transform: "translate(0, -18px)",
              },
              "& .MuiFormHelperText-root": {
                color: "error.main",
                mt: 0.5,
                fontFamily: "Inter",
                fontSize: 10,
              },
            }}
            InputProps={{
              style: {
                fontSize: "0.875rem",
                fontWeight: 400,
                color: formData.addressLine1 ? "#000000" : "#999999",
              },
            }}
          />

          <TextField
            label="Address Line 2"
            name="addressLine2"
            value={formData.addressLine2}
            onChange={handleChange}
            placeholder="Street, area, landmark (optional)"
            size="small"
            sx={{
              width: "100%",
              mt: "24px",
              "& .MuiInputBase-root": {
                height: 40,
                background: "#F4F4F2",
                border: "1px solid rgba(101, 99, 95, 0.2)",
                borderRadius: "8px",
                fontFamily: "Inter",
                fontSize: 14,
                fontWeight: 400,
                color: "#000000",
              },
              "& .MuiInputLabel-root": {
                fontFamily: "Inter",
                fontSize: 12,
                fontWeight: 500,
                color: "#161412",
                lineHeight: "18px",
                transform: "translate(0, -18px)",
              },
            }}
            InputProps={{
              style: {
                fontSize: "0.875rem",
                fontWeight: 400,
                color: formData.addressLine2 ? "#000000" : "#999999",
              },
            }}
          />

          <TextField
            label="Area / Locality"
            name="area"
            value={formData.area}
            onChange={handleChange}
            placeholder="Enter area, locality"
            size="small"
            sx={{
              width: "100%",
              mt: "24px",
              "& .MuiInputBase-root": {
                height: 40,
                background: "#F4F4F2",
                border: "1px solid rgba(101, 99, 95, 0.2)",
                borderRadius: "8px",
                fontFamily: "Inter",
                fontSize: 14,
                fontWeight: 400,
                color: "#000000",
              },
              "& .MuiInputLabel-root": {
                fontFamily: "Inter",
                fontSize: 12,
                fontWeight: 500,
                color: "#161412",
                lineHeight: "18px",
                transform: "translate(0, -18px)",
              },
            }}
            InputProps={{
              style: {
                fontSize: "0.875rem",
                fontWeight: 400,
                color: formData.area ? "#000000" : "#999999",
              },
            }}
          />

          <Box sx={{ display: "flex", gap: "20px", mt: "24px" }}>
            <FormControl
              size="small"
              error={!!errors.country}
              sx={{
                width: "348px",
                "& .MuiInputBase-root": {
                  height: 40,
                  background: "#F4F4F2",
                  border: "1px solid rgba(101, 99, 95, 0.2)",
                  borderRadius: "8px",
                  fontFamily: "Inter",
                  fontSize: 14,
                  fontWeight: 400,
                  color: "#000000",
                },
                "& .MuiInputLabel-root": {
                  fontFamily: "Inter",
                  fontSize: 12,
                  fontWeight: 500,
                  color: "#161412",
                  lineHeight: "18px",
                  transform: "translate(0, -18px)",
                },
              }}
            >
              <InputLabel>Country *</InputLabel>
              <Select
                name="country"
                value={formData.country}
                onChange={handleChange}
                label="Country *"
                IconComponent={() => (
                  <KeyboardArrowDownIcon sx={{ color: "#000000" }} />
                )}
              >
                <MenuItem
                  value="India"
                  sx={{
                    fontFamily: "Inter",
                    fontSize: 14,
                    fontWeight: 400,
                    color: "#000000",
                  }}
                >
                  India
                </MenuItem>
              </Select>
              {errors.country && (
                <Typography
                  variant="caption"
                  color="error"
                  sx={{ mt: 0.5, fontFamily: "Inter", fontSize: 10 }}
                >
                  {errors.country}
                </Typography>
              )}
            </FormControl>

            <FormControl
              size="small"
              error={!!errors.state}
              sx={{
                width: "348px",
                "& .MuiInputBase-root": {
                  height: 40,
                  background: "#F4F4F2",
                  border: "1px solid rgba(101, 99, 95, 0.2)",
                  borderRadius: "8px",
                  fontFamily: "Inter",
                  fontSize: 14,
                  fontWeight: 400,
                  color: formData.state ? "#000000" : "#999999",
                },
                "& .MuiInputLabel-root": {
                  fontFamily: "Inter",
                  fontSize: 12,
                  fontWeight: 500,
                  color: "#161412",
                  lineHeight: "18px",
                  transform: "translate(0, -18px)",
                },
              }}
            >
              <InputLabel>State / Province *</InputLabel>
              <Select
                name="state"
                value={formData.state}
                onChange={handleChange}
                label="State / Province *"
                IconComponent={() => (
                  <KeyboardArrowDownIcon sx={{ color: "#000000" }} />
                )}
              >
                <MenuItem
                  value=""
                  disabled
                  sx={{
                    fontFamily: "Inter",
                    fontSize: 14,
                    fontWeight: 400,
                    color: "#999999",
                  }}
                >
                  Select state
                </MenuItem>
                {states.map((s) => (
                  <MenuItem
                    key={s}
                    value={s}
                    sx={{
                      fontFamily: "Inter",
                      fontSize: 14,
                      fontWeight: 400,
                      color: "#000000",
                    }}
                  >
                    {s}
                  </MenuItem>
                ))}
              </Select>
              {errors.state && (
                <Typography
                  variant="caption"
                  color="error"
                  sx={{ mt: 0.5, fontFamily: "Inter", fontSize: 10 }}
                >
                  {errors.state}
                </Typography>
              )}
            </FormControl>
          </Box>

          <Box sx={{ display: "flex", gap: "20px", mt: "24px" }}>
            <TextField
              label="City *"
              name="city"
              required
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter city"
              size="small"
              error={!!errors.city}
              helperText={errors.city}
              sx={{
                width: "348px",
                "& .MuiInputBase-root": {
                  height: 40,
                  background: "#F4F4F2",
                  border: "1px solid rgba(101, 99, 95, 0.2)",
                  borderRadius: "8px",
                  fontFamily: "Inter",
                  fontSize: 14,
                  fontWeight: 400,
                  color: "#000000",
                },
                "& .MuiInputLabel-root": {
                  fontFamily: "Inter",
                  fontSize: 12,
                  fontWeight: 500,
                  color: "#161412",
                  lineHeight: "18px",
                  transform: "translate(0, -18px)",
                },
                "& .MuiFormHelperText-root": {
                  color: "error.main",
                  mt: 0.5,
                  fontFamily: "Inter",
                  fontSize: 10,
                },
              }}
              InputProps={{
                style: {
                  fontSize: "0.875rem",
                  fontWeight: 400,
                  color: formData.city ? "#000000" : "#999999",
                },
              }}
            />

            <TextField
              label="Landmark"
              name="landmark"
              value={formData.landmark}
              onChange={handleChange}
              placeholder="Near by location"
              size="small"
              sx={{
                width: "348px",
                "& .MuiInputBase-root": {
                  height: 40,
                  background: "#F4F4F2",
                  border: "1px solid rgba(101, 99, 95, 0.2)",
                  borderRadius: "8px",
                  fontFamily: "Inter",
                  fontSize: 14,
                  fontWeight: 400,
                  color: "#000000",
                },
                "& .MuiInputLabel-root": {
                  fontFamily: "Inter",
                  fontSize: 12,
                  fontWeight: 500,
                  color: "#161412",
                  lineHeight: "18px",
                  transform: "translate(0, -18px)",
                },
              }}
              InputProps={{
                style: {
                  fontSize: "0.875rem",
                  fontWeight: 400,
                  color: formData.landmark ? "#000000" : "#999999",
                },
              }}
            />
          </Box>

          <FormControlLabel
            control={
              <Checkbox
                checked={formData.saveAsDefault}
                name="saveAsDefault"
                onChange={handleChange}
                color="primary"
                size="small"
                sx={{
                  color: "#333333",
                  "&.Mui-checked": { color: "#000000" },
                  "& .MuiSvgIcon-root": {
                    fontSize: 16,
                    borderRadius: "2px",
                    border: "1px solid #333333",
                    backgroundColor: formData.saveAsDefault
                      ? "#000000"
                      : "#FFFFFF",
                  },
                }}
              />
            }
            label={
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontSize: "11px",
                  fontWeight: 400,
                  color: "#161412",
                  lineHeight: "16px",
                }}
              >
                Save as default shipping address
              </Typography>
            }
            sx={{ mt: "16px" }}
          />

          <Box
            sx={{
              mt: "24px",
              bgcolor: "#FFFFFF",
              border: "1px solid rgba(101, 99, 95, 0.1)",
              borderRadius: "8px",
              padding: "24px",
              boxSizing: "border-box",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "21px",
                color: "#161412",
              }}
            >
              Shopping Preferences
            </Typography>

            <FormControl
              size="small"
              sx={{
                width: "100%",
                mt: "24px",
                "& .MuiInputBase-root": {
                  height: 40,
                  background: "#F4F4F2",
                  border: "1px solid rgba(101, 99, 95, 0.2)",
                  borderRadius: "6px",
                  fontFamily: "Inter",
                  fontSize: 13,
                  fontWeight: 400,
                  color: "#000000",
                },
                "& .MuiInputLabel-root": {
                  fontFamily: "Inter",
                  fontSize: 12,
                  fontWeight: 500,
                  color: "#161412",
                  lineHeight: "18px",
                  transform: "translate(0, -18px)",
                },
              }}
            >
              <InputLabel>Preferred Language</InputLabel>
              <Select
                name="language"
                value={formData.language}
                onChange={handleChange}
                label="Preferred Language"
                IconComponent={() => (
                  <KeyboardArrowDownIcon sx={{ color: "#000000" }} />
                )}
              >
                {languages.map((lang) => (
                  <MenuItem
                    key={lang}
                    value={lang}
                    sx={{
                      fontFamily: "Inter",
                      fontSize: 13,
                      fontWeight: 400,
                      color: "#000000",
                    }}
                  >
                    {lang}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: "12px",
                lineHeight: "18px",
                color: "#161412",
                mt: "24px",
              }}
            >
              Shopping Interests (Optional)
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                mt: "16px",
              }}
            >
              {interests.map((interest, index) => {
                const paddingMap = {
                  "Home & Kitchen": "4px 12px",
                  Toys: "4px 12px",
                  Electronics: "4px 12px",
                  Fashion: "4px 12px",
                  Books: "4px 12px",
                  Sports: "4px 12px",
                  Beauty: "4px 12px",
                  Automotive: "4px 12px",
                  Health: "4px 12px",
                };
                return (
                  <FormControlLabel
                    key={interest}
                    control={
                      <Checkbox
                        checked={formData.selectedInterests.includes(interest)}
                        onChange={() => handleInterestToggle(interest)}
                        size="small"
                        color="primary"
                        sx={{ display: "none" }}
                      />
                    }
                    label={
                      <Box
                        sx={{
                          padding: paddingMap[interest],
                          bgcolor: "#FFFFFF",
                          border: "1px solid rgba(101, 99, 95, 0.2)",
                          borderRadius: "4px",
                          cursor: "pointer",
                          "&:hover": { bgcolor: "#F4F4F2" },
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "Inter",
                            fontSize: 10,
                            fontWeight: 500,
                            lineHeight: "15px",
                            color: "#65635F",
                            textAlign: "center",
                          }}
                        >
                          {interest}
                        </Typography>
                      </Box>
                    }
                    sx={{ m: 0 }}
                  />
                );
              })}
            </Box>

            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "10px",
                lineHeight: "15px",
                color: "#65635F",
                mt: "16px",
              }}
            >
              Select categories you're interested in for personalized
              recommendations
            </Typography>

            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.receiveOffers}
                  name="receiveOffers"
                  onChange={handleChange}
                  color="primary"
                  size="small"
                  sx={{
                    color: "#333333",
                    "&.Mui-checked": { color: "#000000" },
                    "& .MuiSvgIcon-root": {
                      fontSize: 16,
                      borderRadius: "2px",
                      border: "1px solid #333333",
                      backgroundColor: formData.receiveOffers
                        ? "#000000"
                        : "#FFFFFF",
                    },
                  }}
                />
              }
              label={
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontSize: "11px",
                    fontWeight: 400,
                    color: "#161412",
                    lineHeight: "16px",
                  }}
                >
                  Receive latest deals, order updates, and personalized offers
                </Typography>
              }
              sx={{ mt: "16px" }}
            />
          </Box>

          <Box
            sx={{
              bgcolor: "rgba(101, 99, 95, 0.05)",
              border: "1px solid rgba(101, 99, 95, 0.1)",
              borderRadius: "6px",
              padding: "12px 16px",
              mt: "24px",
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.acceptedTerms}
                  name="acceptedTerms"
                  onChange={handleChange}
                  required
                  color="primary"
                  size="small"
                  sx={{
                    color: "#666666",
                    "&.Mui-checked": { color: "#000000" },
                    "& .MuiSvgIcon-root": {
                      fontSize: 16,
                      borderRadius: "2px",
                      border: "1px solid #666666",
                      backgroundColor: formData.acceptedTerms
                        ? "#000000"
                        : "#FFFFFF",
                    },
                  }}
                />
              }
              label={
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontSize: "11px",
                    fontWeight: 400,
                    color: "#161412",
                    lineHeight: "16px",
                  }}
                >
                  I agree to the Terms & Conditions and Privacy Policy
                </Typography>
              }
            />
            {errors.acceptedTerms && (
              <Typography
                variant="caption"
                color="error"
                sx={{ mt: 0.5, fontFamily: "Inter", fontSize: 10 }}
              >
                {errors.acceptedTerms}
              </Typography>
            )}
          </Box>

          <Button
            type="submit"
            variant="contained"
            sx={{
              width: "100%",
              height: "44px",
              mt: "24px",
              bgcolor: "#65635F",
              borderRadius: "8px",
              textTransform: "none",
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "14px",
              lineHeight: "21px",
              color: "#FFFFFF",
              "&:hover": { bgcolor: "#555450" },
            }}
          >
            Create Account & Continue
          </Button>

          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: 400,
              fontSize: "11px",
              lineHeight: "16px",
              textAlign: "center",
              color: "#65635F",
              mt: "16px",
            }}
          >
            By creating an account, you'll enjoy faster checkout and
            personalized shopping experience
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default RegistrationAddress;
