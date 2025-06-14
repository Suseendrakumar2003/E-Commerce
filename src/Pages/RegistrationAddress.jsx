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
//   Chip,
//   OutlinedInput,
//   Grid,
// } from '@mui/material';

// const addressTypes = ['Home', 'Work', 'Other'];
// const countries = ['India'];
// const states = ['Tamil Nadu', 'Kerala', 'Karnataka', 'Maharashtra', 'Delhi'];
// const languages = ['English', 'Tamil', 'Hindi'];
// const interests = [
//   'Electronics', 'Fashion', 'Books', 'Home & Kitchen', 'Sports',
//   'Beauty', 'Automotive', 'Toys', 'Health'
// ];

// const RegistrationAddress = () => {
//   const [formData, setFormData] = useState({
//     addressType: '',
//     pincode: '',
//     addressLine1: '',
//     addressLine2: '',
//     area: '',
//     country: 'India',
//     state: '',
//     city: '',
//     landmark: '',
//     language: 'English',
//     selectedInterests: [],
//     saveAsDefault: true,
//     receiveOffers: true,
//     acceptedTerms: false
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   const handleMultiSelect = (event) => {
//     const {
//       target: { value },
//     } = event;
//     setFormData(prev => ({
//       ...prev,
//       selectedInterests: typeof value === 'string' ? value.split(',') : value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!formData.acceptedTerms) {
//       alert("You must accept Terms & Conditions.");
//       return;
//     }
//     console.log("Submitted data: ", formData);
//     // You can integrate your API POST call here
//   };

//   return (
//     <Box maxWidth="md" mx="auto" p={4}>
//       <Typography variant="h5" fontWeight="bold" gutterBottom>
//         Create Account
//       </Typography>
//       <Typography variant="body2" gutterBottom>
//         Join ArtMarket and discover amazing artworks
//       </Typography>

//       <form onSubmit={handleSubmit}>
//         <Box mt={3}>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>
//               <FormControl fullWidth required>
//                 <InputLabel>Address Type</InputLabel>
//                 <Select
//                   name="addressType"
//                   value={formData.addressType}
//                   onChange={handleChange}
//                   label="Address Type"
//                 >
//                   {addressTypes.map(type => (
//                     <MenuItem key={type} value={type}>{type}</MenuItem>
//                   ))}
//                 </Select>
//               </FormControl>
//             </Grid>

//             <Grid item xs={12} sm={6}>
//               <TextField
//                 label="Pincode / ZIP"
//                 name="pincode"
//                 fullWidth
//                 required
//                 value={formData.pincode}
//                 onChange={handleChange}
//               />
//             </Grid>

//             <Grid item xs={12}>
//               <TextField
//                 label="Address Line 1"
//                 name="addressLine1"
//                 fullWidth
//                 required
//                 value={formData.addressLine1}
//                 onChange={handleChange}
//               />
//             </Grid>

//             <Grid item xs={12}>
//               <TextField
//                 label="Address Line 2"
//                 name="addressLine2"
//                 fullWidth
//                 value={formData.addressLine2}
//                 onChange={handleChange}
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
//                 <InputLabel>Country</InputLabel>
//                 <Select
//                   name="country"
//                   value={formData.country}
//                   onChange={handleChange}
//                   label="Country"
//                 >
//                   {countries.map(c => (
//                     <MenuItem key={c} value={c}>{c}</MenuItem>
//                   ))}
//                 </Select>
//               </FormControl>
//             </Grid>

//             <Grid item xs={12} sm={6}>
//               <FormControl fullWidth required>
//                 <InputLabel>State</InputLabel>
//                 <Select
//                   name="state"
//                   value={formData.state}
//                   onChange={handleChange}
//                   label="State"
//                 >
//                   {states.map(s => (
//                     <MenuItem key={s} value={s}>{s}</MenuItem>
//                   ))}
//                 </Select>
//               </FormControl>
//             </Grid>

//             <Grid item xs={12} sm={6}>
//               <TextField
//                 label="City"
//                 name="city"
//                 fullWidth
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
//               />
//             </Grid>

//             <Grid item xs={12}>
//               <FormControlLabel
//                 control={
//                   <Checkbox
//                     checked={formData.saveAsDefault}
//                     name="saveAsDefault"
//                     onChange={handleChange}
//                   />
//                 }
//                 label="Save as default shipping address"
//               />
//             </Grid>
//           </Grid>

//           {/* Preferences */}
//           <Box mt={4}>
//             <Typography variant="subtitle1" fontWeight="bold">
//               Shopping Preferences
//             </Typography>

//             <FormControl fullWidth margin="normal">
//               <InputLabel>Preferred Language</InputLabel>
//               <Select
//                 name="language"
//                 value={formData.language}
//                 onChange={handleChange}
//                 label="Preferred Language"
//               >
//                 {languages.map(lang => (
//                   <MenuItem key={lang} value={lang}>{lang}</MenuItem>
//                 ))}
//               </Select>
//             </FormControl>

//             <FormControl fullWidth margin="normal">
//               <InputLabel>Shopping Interests</InputLabel>
//               <Select
//                 multiple
//                 value={formData.selectedInterests}
//                 onChange={handleMultiSelect}
//                 input={<OutlinedInput label="Shopping Interests" />}
//                 renderValue={(selected) => (
//                   <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
//                     {selected.map((value) => (
//                       <Chip key={value} label={value} />
//                     ))}
//                   </Box>
//                 )}
//               >
//                 {interests.map((interest) => (
//                   <MenuItem key={interest} value={interest}>
//                     {interest}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </FormControl>

//             <FormControlLabel
//               control={
//                 <Checkbox
//                   checked={formData.receiveOffers}
//                   name="receiveOffers"
//                   onChange={handleChange}
//                 />
//               }
//               label="Receive latest deals, order updates, and personalized offers"
//             />
//           </Box>

//           {/* Terms */}
//           <FormControlLabel
//             control={
//               <Checkbox
//                 checked={formData.acceptedTerms}
//                 name="acceptedTerms"
//                 onChange={handleChange}
//               />
//             }
//             label="I agree to the Terms & Conditions and Privacy Policy"
//           />

//           {/* Submit */}
//           <Box mt={3}>
//             <Button
//               type="submit"
//               variant="contained"
//               color="primary"
//               fullWidth
//               disabled={!formData.acceptedTerms}
//             >
//               Create Account & Continue
//             </Button>
//           </Box>
//         </Box>
//       </form>
//     </Box>
//   );
// };

// export default RegistrationAddress;


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
//   Chip,
//   OutlinedInput,
//   Grid,
//   useTheme,
// } from '@mui/material';
// import { motion } from 'framer-motion';

// const addressTypes = ['Home', 'Work', 'Other'];
// const countries = ['India'];
// const states = ['Tamil Nadu', 'Kerala', 'Karnataka', 'Maharashtra', 'Delhi'];
// const languages = ['English', 'Tamil', 'Hindi'];
// const interests = [
//   'Electronics', 'Fashion', 'Books', 'Home & Kitchen', 'Sports',
//   'Beauty', 'Automotive', 'Toys', 'Health'
// ];

// const RegistrationAddress = () => {
//   const theme = useTheme();

//   const [formData, setFormData] = useState({
//     addressType: '',
//     pincode: '',
//     addressLine1: '',
//     addressLine2: '',
//     area: '',
//     country: 'India',
//     state: '',
//     city: '',
//     landmark: '',
//     language: 'English',
//     selectedInterests: [],
//     saveAsDefault: true,
//     receiveOffers: true,
//     acceptedTerms: false
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   const handleMultiSelect = (event) => {
//     const {
//       target: { value },
//     } = event;
//     setFormData(prev => ({
//       ...prev,
//       selectedInterests: typeof value === 'string' ? value.split(',') : value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!formData.acceptedTerms) {
//       alert("You must accept Terms & Conditions.");
//       return;
//     }
//     console.log("Submitted data: ", formData);
//   };

//   return (
//     <Box
//       component={motion.div}
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       sx={{
//         maxWidth: 800,
//         mx: 'auto',
//         p: { xs: 2, md: 4 },
//         backgroundColor: theme.palette.background.paper,
//         borderRadius: 4,
//         boxShadow: 3
//       }}
//     >
//       <Typography variant="h4" fontWeight="bold" gutterBottom>
//         Create Account
//       </Typography>
//       <Typography variant="body1" gutterBottom sx={{ mb: 3 }}>
//         Join ArtMarket and discover amazing artworks
//       </Typography>

//       <form onSubmit={handleSubmit}>
//         <Grid container spacing={2}>
//           {/* Address Type + Pincode */}
//           <Grid item xs={12} sm={6}>
//             <FormControl fullWidth required>
//               <InputLabel>Address Type</InputLabel>
//               <Select
//                 name="addressType"
//                 value={formData.addressType}
//                 onChange={handleChange}
//                 label="Address Type"
//               >
//                 {addressTypes.map(type => (
//                   <MenuItem key={type} value={type}>{type}</MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//           </Grid>

//           <Grid item xs={12} sm={6}>
//             <TextField
//               label="Pincode / ZIP"
//               name="pincode"
//               fullWidth
//               required
//               value={formData.pincode}
//               onChange={handleChange}
//             />
//           </Grid>

//           {/* Address Lines */}
//           <Grid item xs={12}>
//             <TextField
//               label="Address Line 1"
//               name="addressLine1"
//               fullWidth
//               required
//               value={formData.addressLine1}
//               onChange={handleChange}
//             />
//           </Grid>

//           <Grid item xs={12}>
//             <TextField
//               label="Address Line 2"
//               name="addressLine2"
//               fullWidth
//               value={formData.addressLine2}
//               onChange={handleChange}
//             />
//           </Grid>

//           <Grid item xs={12}>
//             <TextField
//               label="Area / Locality"
//               name="area"
//               fullWidth
//               value={formData.area}
//               onChange={handleChange}
//             />
//           </Grid>

//           {/* Country and State */}
//           <Grid item xs={12} sm={6}>
//             <FormControl fullWidth required>
//               <InputLabel>Country</InputLabel>
//               <Select
//                 name="country"
//                 value={formData.country}
//                 onChange={handleChange}
//                 label="Country"
//               >
//                 {countries.map(c => (
//                   <MenuItem key={c} value={c}>{c}</MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//           </Grid>

//           <Grid item xs={12} sm={6}>
//             <FormControl fullWidth required>
//               <InputLabel>State</InputLabel>
//               <Select
//                 name="state"
//                 value={formData.state}
//                 onChange={handleChange}
//                 label="State"
//               >
//                 {states.map(s => (
//                   <MenuItem key={s} value={s}>{s}</MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//           </Grid>

//           {/* City and Landmark */}
//           <Grid item xs={12} sm={6}>
//             <TextField
//               label="City"
//               name="city"
//               fullWidth
//               value={formData.city}
//               onChange={handleChange}
//             />
//           </Grid>

//           <Grid item xs={12} sm={6}>
//             <TextField
//               label="Landmark"
//               name="landmark"
//               fullWidth
//               value={formData.landmark}
//               onChange={handleChange}
//             />
//           </Grid>

//           {/* Save Address */}
//           <Grid item xs={12}>
//             <FormControlLabel
//               control={
//                 <Checkbox
//                   checked={formData.saveAsDefault}
//                   name="saveAsDefault"
//                   onChange={handleChange}
//                 />
//               }
//               label="Save as default shipping address"
//             />
//           </Grid>
//         </Grid>

//         {/* Shopping Preferences */}
//         <Box mt={4}>
//           <Typography variant="h6" fontWeight="bold" gutterBottom>
//             Shopping Preferences
//           </Typography>

//           <FormControl fullWidth margin="normal">
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

//           <FormControl fullWidth margin="normal">
//             <InputLabel>Shopping Interests</InputLabel>
//             <Select
//               multiple
//               value={formData.selectedInterests}
//               onChange={handleMultiSelect}
//               input={<OutlinedInput label="Shopping Interests" />}
//               renderValue={(selected) => (
//                 <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
//                   {selected.map((value) => (
//                     <Chip key={value} label={value} />
//                   ))}
//                 </Box>
//               )}
//             >
//               {interests.map((interest) => (
//                 <MenuItem key={interest} value={interest}>
//                   {interest}
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>

//           <FormControlLabel
//             control={
//               <Checkbox
//                 checked={formData.receiveOffers}
//                 name="receiveOffers"
//                 onChange={handleChange}
//               />
//             }
//             label="Receive latest deals, order updates, and personalized offers"
//           />
//         </Box>

//         {/* Terms & Submit */}
//         <FormControlLabel
//           control={
//             <Checkbox
//               checked={formData.acceptedTerms}
//               name="acceptedTerms"
//               onChange={handleChange}
//             />
//           }
//           label="I agree to the Terms & Conditions and Privacy Policy"
//         />

//         <Box mt={3}>
//           <Button
//             type="submit"
//             variant="contained"
//             color="primary"
//             fullWidth
//             size="large"
//             disabled={!formData.acceptedTerms}
//             sx={{
//               fontWeight: 'bold',
//               py: 1.5,
//               borderRadius: 2,
//               textTransform: 'none'
//             }}
//           >
//             Create Account & Continue
//           </Button>
//         </Box>
//       </form>
//     </Box>
//   );
// };

// export default RegistrationAddress;


import React, { useState } from 'react';
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
  Chip,
  OutlinedInput,
  Grid,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';

const addressTypes = ['Home', 'Work', 'Other'];
const countries = ['India'];
const states = ['Tamil Nadu', 'Kerala', 'Karnataka', 'Maharashtra', 'Delhi'];
const languages = ['English', 'Tamil', 'Hindi'];
const interests = [
  'Electronics', 'Fashion', 'Books', 'Home & Kitchen', 'Sports',
  'Beauty', 'Automotive', 'Toys', 'Health'
];

const RegistrationAddress = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    addressType: '',
    pincode: '',
    addressLine1: '',
    addressLine2: '',
    area: '',
    country: 'India',
    state: '',
    city: '',
    landmark: '',
    language: 'English',
    selectedInterests: [],
    saveAsDefault: true,
    receiveOffers: true,
    acceptedTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleMultiSelect = (event) => {
    const {
      target: { value },
    } = event;
    setFormData(prev => ({
      ...prev,
      selectedInterests: typeof value === 'string' ? value.split(',') : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.acceptedTerms) {
      alert("You must accept Terms & Conditions.");
      return;
    }
    console.log("Submitted data: ", formData);
  };

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      sx={{
        maxWidth: 800,
        mx: 'auto',
        p: { xs: 2, md: 4 },
        backgroundColor: theme.palette.background.paper,
        borderRadius: 4,
        boxShadow: 3
      }}
    >
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Create Account
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ mb: 3 }}>
        Join ArtMarket and discover amazing artworks
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth required>
              <InputLabel>Address Type</InputLabel>
              <Select
                name="addressType"
                value={formData.addressType}
                onChange={handleChange}
                label="Address Type"
              >
                {addressTypes.map(type => (
                  <MenuItem key={type} value={type}>{type}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Pincode / ZIP"
              name="pincode"
              fullWidth
              required
              value={formData.pincode}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Address Line 1"
              name="addressLine1"
              fullWidth
              required
              value={formData.addressLine1}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Address Line 2"
              name="addressLine2"
              fullWidth
              value={formData.addressLine2}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Area / Locality"
              name="area"
              fullWidth
              value={formData.area}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth required>
              <InputLabel>Country</InputLabel>
              <Select
                name="country"
                value={formData.country}
                onChange={handleChange}
                label="Country"
              >
                {countries.map(c => (
                  <MenuItem key={c} value={c}>{c}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth required>
              <InputLabel>State</InputLabel>
              <Select
                name="state"
                value={formData.state}
                onChange={handleChange}
                label="State"
              >
                {states.map(s => (
                  <MenuItem key={s} value={s}>{s}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="City"
              name="city"
              fullWidth
              value={formData.city}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Landmark"
              name="landmark"
              fullWidth
              value={formData.landmark}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.saveAsDefault}
                  name="saveAsDefault"
                  onChange={handleChange}
                />
              }
              label="Save as default shipping address"
            />
          </Grid>
        </Grid>

        <Box mt={4}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Shopping Preferences
          </Typography>

          <FormControl fullWidth margin="normal">
            <InputLabel>Preferred Language</InputLabel>
            <Select
              name="language"
              value={formData.language}
              onChange={handleChange}
              label="Preferred Language"
            >
              {languages.map(lang => (
                <MenuItem key={lang} value={lang}>{lang}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal">
            <InputLabel>Shopping Interests</InputLabel>
            <Select
              multiple
              value={formData.selectedInterests}
              onChange={handleMultiSelect}
              input={<OutlinedInput label="Shopping Interests" />}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
            >
              {interests.map((interest) => (
                <MenuItem key={interest} value={interest}>
                  {interest}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControlLabel
            control={
              <Checkbox
                checked={formData.receiveOffers}
                name="receiveOffers"
                onChange={handleChange}
              />
            }
            label="Receive latest deals, order updates, and personalized offers"
          />
        </Box>

        <FormControlLabel
          control={
            <Checkbox
              checked={formData.acceptedTerms}
              name="acceptedTerms"
              onChange={handleChange}
            />
          }
          label="I agree to the Terms & Conditions and Privacy Policy"
        />

        <Box mt={3}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            disabled={!formData.acceptedTerms}
            sx={{
              fontWeight: 'bold',
              py: 1.5,
              borderRadius: 2,
              textTransform: 'none'
            }}
          >
            Create Account & Continue
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default RegistrationAddress;
