import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Button, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem,
  Paper,
  ThemeProvider,
  createTheme
} from '@mui/material';
import Navbar from '../components/layout/Navbar';
import Footer from './footer';

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#f18c4a', // Your original orange color
    },
    background: {
      default: '#f9f9f9',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
  components: {
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          '&:hover': {
            backgroundColor: 'rgba(241, 140, 74, 0.05)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          textTransform: 'none',
          padding: '12px 24px',
        },
      },
    },
  },
});

const countries = [
  'USA', 'Canada', 'UK', 'Australia', 
  'Germany', 'France', 'Japan', 'Singapore', 
  'New Zealand', 'Netherlands'
];

const VisaServicesPage = () => {
  const [fromCountry, setFromCountry] = useState('India');
  const [toCountry, setToCountry] = useState('');

  const handleEnquiry = () => {
    if (!toCountry) {
      alert('Please select the country you require a visa for.');
      return;
    }
    alert(`Enquiry submitted for a visa from ${fromCountry} to ${toCountry}.`);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box 
        sx={{ 
          minHeight: '100vh', 
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Navbar */}
        <Navbar />

        <Container maxWidth="lg" sx={{ flex: 1, py: 4 }}>
          <Paper 
            elevation={6} 
            sx={{ 
              borderRadius: 4, 
              overflow: 'hidden',
              maxWidth: 800,
              margin: 'auto'
            }}
          >
            {/* Header */}
            <Box 
              sx={{ 
                background: 'linear-gradient(to right, #f18c4a, #ff6b6b)',
                color: 'white',
                p: 3,
                textAlign: 'center'
              }}
            >
              <Typography variant="h4" fontWeight="bold">
                Visa Services
              </Typography>
            </Box>

            {/* Visa Selection Area */}
            <Box sx={{ p: 4, backgroundColor: 'white' }}>
              <Grid container spacing={3}>
                {/* From Country Dropdown */}
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <InputLabel>From Country</InputLabel>
                    <Select
                      value={fromCountry}
                      label="From Country"
                      onChange={(e) => setFromCountry(e.target.value)}
                      sx={{ 
                        borderRadius: 3,
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'rgba(0,0,0,0.23)',
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'primary.main',
                        }
                      }}
                    >
                      <MenuItem value="India">India</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                {/* To Country Dropdown */}
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <InputLabel>Required Visa For</InputLabel>
                    <Select
                      value={toCountry}
                      label="Required Visa For"
                      onChange={(e) => setToCountry(e.target.value)}
                      sx={{ 
                        borderRadius: 3,
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'rgba(0,0,0,0.23)',
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'primary.main',
                        }
                      }}
                    >
                      {countries.map((country) => (
                        <MenuItem key={country} value={country}>
                          {country}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>

              {/* Enquiry Button */}
              <Box textAlign="center" mt={3}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleEnquiry}
                  sx={{ 
                    mt: 2,
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    }
                  }}
                >
                  Submit Enquiry
                </Button>
              </Box>
            </Box>

            {/* Why Choose Us Section */}
            <Box 
              sx={{ 
                backgroundColor: 'rgba(241, 140, 74, 0.05)', 
                p: 4,
                textAlign: 'center'
              }}
            >
              <Typography variant="h5" fontWeight="bold" mb={3}>
                Why Choose Us?
              </Typography>
              <Typography variant="body1" color="text.secondary" mb={3}>
                Our visa services are meticulously designed to provide a seamless and stress-free experience for our valued customers.
              </Typography>

              <Grid container spacing={2} justifyContent="center">
                {[
                  "Expert Guidance Throughout Your Visa Journey",
                  "Lightning-Fast Processing Times",
                  "Transparent Pricing with Zero Hidden Fees",
                  "Round-the-Clock Customer Support"
                ].map((feature, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: 'white',
                        p: 2,
                        borderRadius: 2,
                        boxShadow: 1,
                        gap: 2
                      }}
                    >
                      <Box 
                        sx={{ 
                          width: 8, 
                          height: 8, 
                          backgroundColor: 'primary.main', 
                          borderRadius: '50%' 
                        }} 
                      />
                      <Typography variant="body2">{feature}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Paper>
        </Container>

        {/* Footer */}
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default VisaServicesPage;