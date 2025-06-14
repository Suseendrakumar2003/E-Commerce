// // RegistrationAddress.jsx
// import React, { useState } from 'react';
// import {
//   Box,
//   Typography,
//   TextField,
//   Select,
//   MenuItem,
//   FormControl,
//   InputLabel,
//   Checkbox,
//   FormControlLabel,
//   Button,
//   Grid,
//   Divider,
//   Paper,
//   Step,
//   StepLabel,
//   Stepper
// } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// const RegistrationAddress = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     addressType: 'Home',
//     pincode: '',
//     addressLine1: '',
//     addressLine2: '',
//     area: '',
//     country: 'India',
//     city: '',
//     state: '',
//     landmark: '',
//     language: 'English',
//     selectedInterests: [],
//     saveAsDefault: true,
//     receiveOffers: true,
//     acceptedTerms: false
//   });

//   const addressTypes = ['Home', 'Work', 'Other'];
//   const states = ['Tamil Nadu', 'Kerala', 'Karnataka', 'Maharashtra', 'Delhi'];
//   const languages = ['English', 'Hindi', 'Tamil', 'Telugu', 'Kannada', 'Malayalam'];
//   const interests = [
//     'Home & Kitchen', 'Toys', 'Electronics', 'Fashion', 'Books',
//     'Sports', 'Beauty', 'Automotive', 'Health'
//   ];

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   const handleInterestToggle = (interest) => {
//     setFormData(prev => {
//       const selected = [...prev.selectedInterests];
//       const index = selected.indexOf(interest);
//       if (index === -1) selected.push(interest);
//       else selected.splice(index, 1);
//       return { ...prev, selectedInterests: selected };
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!formData.acceptedTerms) {
//       alert("You must accept Terms & Conditions.");
//       return;
//     }
//     console.log("Submitted: ", formData);
//   };

//   return (
//     <Box sx={{ display: 'flex', justifyContent: 'center', bgcolor: '#f9f9f9', py: 6 }}>
//       <Paper elevation={1} sx={{ width: '100%', maxWidth: 720, px: 4, py: 5, borderRadius: 4 }}>
//         <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
//           <Typography
//             variant="body2"
//             sx={{ cursor: 'pointer', color: '#444' }}
//             onClick={() => navigate('/')}
//           >
//             ← Back
//           </Typography>
//           <Typography variant="body2" sx={{ color: '#777' }}>
//             Already have an account? <span style={{ color: '#1976d2', cursor: 'pointer' }}>Sign In</span>
//           </Typography>
//         </Box>

//         <Box sx={{ textAlign: 'center', mb: 3 }}>
//           <Typography variant="h5" fontWeight="bold">Create Account</Typography>
//           <Typography variant="body2" sx={{ color: 'gray', mt: 1 }}>
//             Join ArtMarket and discover amazing artworks
//           </Typography>
//         </Box>

//         <Stepper activeStep={1} alternativeLabel sx={{ mb: 4 }}>
//           <Step><StepLabel>Account</StepLabel></Step>
//           <Step><StepLabel>Address</StepLabel></Step>
//         </Stepper>

//         <form onSubmit={handleSubmit}>
//           <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 1 }}>
//             Shipping Address & Preferences
//           </Typography>

//           <Typography variant="body1" fontWeight={600} sx={{ mb: 2 }}>
//             Primary Shipping Address
//           </Typography>

//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>
//               <FormControl fullWidth required>
//                 <InputLabel>Address Type *</InputLabel>
//                 <Select
//                   name="addressType"
//                   value={formData.addressType}
//                   onChange={handleChange}
//                   label="Address Type *"
//                 >
//                   {addressTypes.map(type => (
//                     <MenuItem key={type} value={type}>{type}</MenuItem>
//                   ))}
//                 </Select>
//               </FormControl>
//             </Grid>

//             <Grid item xs={12} sm={6}>
//               <TextField
//                 label="Pincode / ZIP *"
//                 name="pincode"
//                 fullWidth
//                 required
//                 value={formData.pincode}
//                 onChange={handleChange}
//                 placeholder="400001"
//               />
//             </Grid>

//             <Grid item xs={12}>
//               <TextField
//                 label="Address Line 1 *"
//                 name="addressLine1"
//                 fullWidth
//                 required
//                 value={formData.addressLine1}
//                 onChange={handleChange}
//                 placeholder="House number, building name"
//               />
//             </Grid>

//             <Grid item xs={12}>
//               <TextField
//                 label="Address Line 2"
//                 name="addressLine2"
//                 fullWidth
//                 value={formData.addressLine2}
//                 onChange={handleChange}
//                 placeholder="Street, area, landmark (optional)"
//               />
//             </Grid>

//             <Grid item xs={12}>
//               <TextField
//                 label="Area / Locality"
//                 name="area"
//                 fullWidth
//                 value={formData.area}
//                 onChange={handleChange}
//               />
//             </Grid>

//             <Grid item xs={12} sm={6}>
//               <FormControl fullWidth required>
//                 <InputLabel>Country *</InputLabel>
//                 <Select
//                   name="country"
//                   value={formData.country}
//                   onChange={handleChange}
//                   label="Country *"
//                 >
//                   <MenuItem value="India">India</MenuItem>
//                 </Select>
//               </FormControl>
//             </Grid>

//             <Grid item xs={12} sm={6}>
//               <FormControl fullWidth required>
//                 <InputLabel>State / Province *</InputLabel>
//                 <Select
//                   name="state"
//                   value={formData.state}
//                   onChange={handleChange}
//                   label="State / Province *"
//                 >
//                   {states.map(state => (
//                     <MenuItem key={state} value={state}>{state}</MenuItem>
//                   ))}
//                 </Select>
//               </FormControl>
//             </Grid>

//             <Grid item xs={12} sm={6}>
//               <TextField
//                 label="City *"
//                 name="city"
//                 fullWidth
//                 required
//                 value={formData.city}
//                 onChange={handleChange}
//               />
//             </Grid>

//             <Grid item xs={12} sm={6}>
//               <TextField
//                 label="Landmark"
//                 name="landmark"
//                 fullWidth
//                 value={formData.landmark}
//                 onChange={handleChange}
//                 placeholder="Near by location"
//               />
//             </Grid>

//             <Grid item xs={12}>
//               <FormControlLabel
//                 control={
//                   <Checkbox
//                     checked={formData.saveAsDefault}
//                     onChange={handleChange}
//                     name="saveAsDefault"
//                     color="primary"
//                     sx={{ p: 0.5 }}
//                   />
//                 }
//                 label={
//                   <Typography variant="body2" sx={{ fontWeight: 500 }}>
//                     Save as default shipping address
//                   </Typography>
//                 }
//               />
//             </Grid>
//           </Grid>

//           <Divider sx={{ my: 4 }} />

//           <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
//             Shopping Preferences
//           </Typography>

//           <FormControl fullWidth>
//             <InputLabel>Preferred Language</InputLabel>
//             <Select
//               name="language"
//               value={formData.language}
//               onChange={handleChange}
//               label="Preferred Language"
//             >
//               {languages.map(lang => (
//                 <MenuItem key={lang} value={lang}>{lang}</MenuItem>
//               ))}
//             </Select>
//           </FormControl>

//           <Box sx={{ mt: 3 }}>
//             <Typography variant="subtitle1" fontWeight={600}>
//               Shopping Interests (Optional)
//             </Typography>
//             <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
//               Select categories you're interested in for personalized recommendations.
//             </Typography>

//             <Grid container spacing={1}>
//               {interests.map(interest => (
//                 <Grid item xs={6} sm={4} key={interest}>
//                   <FormControlLabel
//                     control={
//                       <Checkbox
//                         size="small"
//                         checked={formData.selectedInterests.includes(interest)}
//                         onChange={() => handleInterestToggle(interest)}
//                         color="primary"
//                         sx={{ p: 0.5 }}
//                       />
//                     }
//                     label={<Typography variant="body2">{interest}</Typography>}
//                   />
//                 </Grid>
//               ))}
//             </Grid>
//           </Box>

//           <FormControlLabel
//             control={
//               <Checkbox
//                 checked={formData.receiveOffers}
//                 onChange={handleChange}
//                 name="receiveOffers"
//                 color="primary"
//                 sx={{ p: 0.5 }}
//               />
//             }
//             label={
//               <Typography variant="body2">
//                 Receive latest deals, order updates, and personalized offers
//               </Typography>
//             }
//             sx={{ mt: 3 }}
//           />

//           <FormControlLabel
//             control={
//               <Checkbox
//                 required
//                 checked={formData.acceptedTerms}
//                 onChange={handleChange}
//                 name="acceptedTerms"
//                 color="primary"
//                 sx={{ p: 0.5 }}
//               />
//             }
//             label={
//               <Typography variant="body2">
//                 I agree to the Terms & Conditions and Privacy Policy
//               </Typography>
//             }
//             sx={{ mt: 1 }}
//           />

//           <Button
//             type="submit"
//             variant="contained"
//             fullWidth
//             size="large"
//             disabled={!formData.acceptedTerms}
//             sx={{
//               mt: 3,
//               py: 1.5,
//               fontSize: '1rem',
//               fontWeight: 600,
//               textTransform: 'none',
//               borderRadius: '8px'
//             }}
//           >
//             Create Account & Continue
//           </Button>

//           <Typography variant="caption" display="block" textAlign="center" sx={{ mt: 2, color: '#999' }}>
//             By creating an account, you'll enjoy faster checkout and personalized shopping experience.
//           </Typography>
//         </form>
//       </Paper>
//     </Box>
//   );
// };

// export default RegistrationAddress;


import React, { useState } from 'react';
import { 
  Box, Typography, TextField, Select, MenuItem, FormControl, 
  InputLabel, Checkbox, FormControlLabel, Button, Grid, 
  Divider, RadioGroup, Radio, FormLabel, IconButton 
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    addressType: 'Home',
    addressLine1: '',
    addressLine2: '',
    area: '',
    country: 'India',
    city: '',
    state: '',
    landmark: '',
    selectedInterests: [],
    saveAsDefault: true,
    receiveOffers: true,
    acceptedTerms: false
  });

  const addressTypes = ['Home', 'Work', 'Other'];
  const states = ['Tamil Nadu', 'Kerala', 'Karnataka', 'Maharashtra', 'Delhi'];
  const interests = [
    'Home & Kitchen', 'Toys', 'Electronics', 'Fashion', 'Books',
    'Sports', 'Beauty', 'Automotive', 'Health'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleInterestToggle = (interest) => {
    setFormData(prev => {
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
    if (!formData.acceptedTerms) {
      alert("You must accept Terms & Conditions.");
      return;
    }
    console.log("Submitted data: ", formData);
    alert("Account created successfully!");
  };

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      minHeight: '100vh',
      bgcolor: '#f5f5f5',
      py: 4,
      fontFamily: "'Inter', sans-serif"
    }}>
      <Box sx={{
        width: '100%',
        maxWidth: 800,
        bgcolor: 'white',
        borderRadius: '12px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.08)',
        border: '1px solid rgba(101, 99, 95, 0.1)',
        p: 4
      }}>
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <ArrowBackIcon sx={{ color: '#65635F', fontSize: 20 }} />
            <Typography variant="body2" sx={{ ml: 1, color: '#65635F', fontSize: '0.875rem' }}>
              Back
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ color: '#777', fontSize: '0.875rem' }}>
            Already have an account? <span style={{ color: '#1976d2', cursor: 'pointer', fontWeight: 500 }}>Sign In</span>
          </Typography>
        </Box>

        {/* Main Title */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h4" fontWeight={700} sx={{ 
            fontSize: '1.75rem', 
            letterSpacing: '-0.5px',
            color: '#161412'
          }}>
            Create Account
          </Typography>
          <Typography variant="body1" sx={{ 
            color: '#888', 
            mt: 1, 
            fontSize: '0.95rem',
          }}>
            Join ArtMarket and discover amazing artworks
          </Typography>
        </Box>

        {/* Stepper */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          mb: 4,
          position: 'relative',
          height: '28px'
        }}>
          <Box sx={{
            position: 'absolute',
            width: '28px',
            height: '28px',
            left: 'calc(50% - 134px)',
            background: '#161412',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Typography sx={{ 
              color: '#FFFFFF', 
              fontSize: '0.75rem',
              fontWeight: 500,
            }}>
              1
            </Typography>
          </Box>
          
          <Typography sx={{
            position: 'absolute',
            left: 'calc(50% - 100px)',
            top: '5px',
            fontSize: '0.6875rem',
            fontWeight: 500,
            color: '#161412'
          }}>
            Account
          </Typography>
          
          <Box sx={{
            position: 'absolute',
            width: '50px',
            height: '2px',
            left: 'calc(50% - 25px)',
            top: '13px',
            background: '#161412'
          }} />
          
          <Box sx={{
            position: 'absolute',
            width: '28px',
            height: '28px',
            left: 'calc(50% + 106px)',
            background: '#161412',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Typography sx={{ 
              color: '#FFFFFF', 
              fontSize: '0.75rem',
              fontWeight: 500,
            }}>
              2
            </Typography>
          </Box>
          
          <Typography sx={{
            position: 'absolute',
            left: 'calc(50% + 140px)',
            top: '5px',
            fontSize: '0.6875rem',
            fontWeight: 500,
            color: '#161412'
          }}>
            Address
          </Typography>
        </Box>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" fontWeight={600} sx={{ 
              mb: 2, 
              fontSize: '1.125rem',
              color: '#161412'
            }}>
              Shipping Address & Preferences
            </Typography>

            <Typography variant="subtitle1" fontWeight={600} sx={{ 
              mb: 2, 
              mt: 3, 
              fontSize: '0.875rem',
              color: '#161412'
            }}>
              Primary Shipping Address
            </Typography>

            {/* Address Type */}
            <FormControl component="fieldset" fullWidth sx={{ mb: 3 }}>
              <FormLabel component="legend" sx={{ 
                mb: 1, 
                fontWeight: 500, 
                fontSize: '0.75rem',
                color: '#161412'
              }}>
                Address Type *
              </FormLabel>
              <RadioGroup
                row
                name="addressType"
                value={formData.addressType}
                onChange={handleChange}
                sx={{ gap: 3 }}
              >
                {addressTypes.map(type => (
                  <FormControlLabel 
                    key={type} 
                    value={type} 
                    control={<Radio size="small" sx={{ py: 0.5 }} />} 
                    label={type} 
                    sx={{ 
                      margin: 0, 
                      '& .MuiFormControlLabel-label': { 
                        fontSize: '0.875rem',
                        fontWeight: 400,
                        color: '#000000'
                      } 
                    }}
                  />
                ))}
              </RadioGroup>
            </FormControl>

            {/* Address Line 1 */}
            <TextField
              label="Address Line 1 *"
              name="addressLine1"
              fullWidth
              required
              value={formData.addressLine1}
              onChange={handleChange}
              placeholder="House number, building name"
              size="small"
              sx={{ 
                mb: 2,
                '& .MuiInputBase-root': { 
                  height: 40,
                  background: '#F4F4F2',
                  border: '1px solid rgba(101, 99, 95, 0.2)',
                  borderRadius: '8px',
                },
                '& .MuiInputLabel-root': { 
                  fontSize: '0.75rem',
                  fontWeight: 500
                }
              }}
              InputProps={{
                style: {
                  fontSize: '0.875rem',
                  fontWeight: 400
                }
              }}
            />

            {/* Address Line 2 */}
            <TextField
              label="Address Line 2"
              name="addressLine2"
              fullWidth
              value={formData.addressLine2}
              onChange={handleChange}
              placeholder="Street, area, landmark (optional)"
              size="small"
              sx={{ 
                mb: 2,
                '& .MuiInputBase-root': { 
                  height: 40,
                  background: '#F4F4F2',
                  border: '1px solid rgba(101, 99, 95, 0.2)',
                  borderRadius: '8px',
                },
                '& .MuiInputLabel-root': { 
                  fontSize: '0.75rem',
                  fontWeight: 500
                }
              }}
              InputProps={{
                style: {
                  fontSize: '0.875rem',
                  fontWeight: 400,
                  color: '#999999'
                }
              }}
            />

            {/* Area/Locality */}
            <TextField
              label="Area / Locality"
              name="area"
              fullWidth
              value={formData.area}
              onChange={handleChange}
              placeholder="Enter area, locality"
              size="small"
              sx={{ 
                mb: 2,
                '& .MuiInputBase-root': { 
                  height: 40,
                  background: '#F4F4F2',
                  border: '1px solid rgba(101, 99, 95, 0.2)',
                  borderRadius: '8px',
                },
                '& .MuiInputLabel-root': { 
                  fontSize: '0.75rem',
                  fontWeight: 500
                }
              }}
              InputProps={{
                style: {
                  fontSize: '0.875rem',
                  fontWeight: 400,
                  color: '#999999'
                }
              }}
            />

            {/* Country & State */}
            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid item xs={6}>
                <FormControl fullWidth size="small" sx={{ 
                  '& .MuiInputBase-root': { 
                    height: 40,
                    background: '#F4F4F2',
                    border: '1px solid rgba(101, 99, 95, 0.2)',
                    borderRadius: '8px',
                  },
                  '& .MuiInputLabel-root': { 
                    fontSize: '0.75rem',
                    fontWeight: 500
                  }
                }}>
                  <InputLabel sx={{ fontSize: '0.75rem' }}>Country *</InputLabel>
                  <Select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    label="Country *"
                    IconComponent={KeyboardArrowDownIcon}
                    sx={{
                      fontSize: '0.875rem',
                      fontWeight: 400
                    }}
                  >
                    <MenuItem value="India" sx={{ fontSize: '0.875rem' }}>India</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth size="small" sx={{ 
                  '& .MuiInputBase-root': { 
                    height: 40,
                    background: '#F4F4F2',
                    border: '1px solid rgba(101, 99, 95, 0.2)',
                    borderRadius: '8px',
                  },
                  '& .MuiInputLabel-root': { 
                    fontSize: '0.75rem',
                    fontWeight: 500
                  }
                }}>
                  <InputLabel sx={{ fontSize: '0.75rem' }}>State / Province *</InputLabel>
                  <Select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    label="State / Province *"
                    IconComponent={KeyboardArrowDownIcon}
                    sx={{
                      fontSize: '0.875rem',
                      fontWeight: 400
                    }}
                  >
                    {states.map(s => (
                      <MenuItem key={s} value={s} sx={{ fontSize: '0.875rem' }}>{s}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            {/* City & Landmark */}
            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid item xs={6}>
                <TextField
                  label="City *"
                  name="city"
                  fullWidth
                  required
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter city"
                  size="small"
                  sx={{ 
                    '& .MuiInputBase-root': { 
                      height: 40,
                      background: '#F4F4F2',
                      border: '1px solid rgba(101, 99, 95, 0.2)',
                      borderRadius: '8px',
                    },
                    '& .MuiInputLabel-root': { 
                      fontSize: '0.75rem',
                      fontWeight: 500
                    }
                  }}
                  InputProps={{
                    style: {
                      fontSize: '0.875rem',
                      fontWeight: 400,
                      color: '#999999'
                    }
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Landmark"
                  name="landmark"
                  fullWidth
                  value={formData.landmark}
                  onChange={handleChange}
                  placeholder="Near by location"
                  size="small"
                  sx={{ 
                    '& .MuiInputBase-root': { 
                      height: 40,
                      background: '#F4F4F2',
                      border: '1px solid rgba(101, 99, 95, 0.2)',
                      borderRadius: '8px',
                    },
                    '& .MuiInputLabel-root': { 
                      fontSize: '0.75rem',
                      fontWeight: 500
                    }
                  }}
                  InputProps={{
                    style: {
                      fontSize: '0.875rem',
                      fontWeight: 400,
                      color: '#999999'
                    }
                  }}
                />
              </Grid>
            </Grid>

            {/* Save as default */}
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.saveAsDefault}
                  name="saveAsDefault"
                  onChange={handleChange}
                  color="primary"
                  size="small"
                  sx={{
                    color: '#000000',
                    '&.Mui-checked': {
                      color: '#000000',
                    },
                  }}
                />
              }
              label={
                <Typography variant="body2" sx={{ 
                  fontSize: '0.6875rem',
                  fontWeight: 400,
                  color: '#161412'
                }}>
                  Save as default shipping address
                </Typography>
              }
              sx={{ display: 'block', mt: 1, mb: 3 }}
            />

            <Divider sx={{ my: 4, borderColor: '#e0e0e0' }} />

            {/* Shopping Interests */}
            <Typography variant="h6" fontWeight={600} sx={{ 
              mb: 1, 
              fontSize: '0.75rem',
              color: '#161412'
            }}>
              Shopping Interests (Optional)
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ 
              mb: 2, 
              fontSize: '0.625rem',
              fontWeight: 400,
              color: '#65635F'
            }}>
              Select categories you're interested in for personalized recommendations.
            </Typography>

            <Grid container spacing={1} sx={{ mb: 2 }}>
              {interests.map((interest) => (
                <Grid item xs={6} key={interest}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.selectedInterests.includes(interest)}
                        onChange={() => handleInterestToggle(interest)}
                        size="small"
                        color="primary"
                        sx={{
                          color: '#000000',
                          '&.Mui-checked': {
                            color: '#000000',
                          },
                        }}
                      />
                    }
                    label={
                      <Typography variant="body2" sx={{ 
                        fontSize: '0.625rem',
                        fontWeight: 500,
                        color: '#65635F'
                      }}>
                        {interest}
                      </Typography>
                    }
                  />
                </Grid>
              ))}
            </Grid>

            {/* Offers & Terms */}
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.receiveOffers}
                  name="receiveOffers"
                  onChange={handleChange}
                  color="primary"
                  size="small"
                  sx={{
                    color: '#000000',
                    '&.Mui-checked': {
                      color: '#000000',
                    },
                  }}
                />
              }
              label={
                <Typography variant="body2" sx={{ 
                  fontSize: '0.6875rem',
                  fontWeight: 400,
                  color: '#161412'
                }}>
                  Receive latest deals, order updates, and personalized offers
                </Typography>
              }
              sx={{ display: 'block', mt: 1 }}
            />

            <Box sx={{ 
              mt: 2, 
              mb: 3,
              background: 'rgba(101, 99, 95, 0.05)',
              border: '1px solid rgba(101, 99, 95, 0.1)',
              borderRadius: '6px',
              p: 2
            }}>
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
                      color: '#666666',
                      '&.Mui-checked': {
                        color: '#000000',
                      },
                    }}
                  />
                }
                label={
                  <Typography variant="body2" sx={{ 
                    fontSize: '0.6875rem',
                    fontWeight: 400,
                    color: '#161412'
                  }}>
                    I agree to the Terms & Conditions and Privacy Policy
                  </Typography>
                }
                sx={{ display: 'block' }}
              />
            </Box>

            {/* Submit */}
            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              disabled={!formData.acceptedTerms}
              sx={{ 
                mt: 3, 
                py: 1.5, 
                fontSize: '0.875rem',
                fontWeight: 500,
                backgroundColor: '#65635F',
                borderRadius: '8px',
                textTransform: 'none',
                color: '#FFFFFF',
                '&:hover': { backgroundColor: '#555450' }
              }}
            >
              Create Account & Continue
            </Button>

            <Typography variant="body2" textAlign="center" sx={{ 
              mt: 2, 
              color: '#65635F', 
              fontSize: '0.6875rem',
              fontWeight: 400
            }}>
              By creating an account, you'll enjoy faster checkout and personalized shopping experience.
            </Typography>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default RegistrationForm;
