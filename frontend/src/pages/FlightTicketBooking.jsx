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
  TextField,
  ThemeProvider,
  createTheme,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
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
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
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

const FlightBookingPage = () => {
  const [fromDestination, setFromDestination] = useState('');
  const [toDestination, setToDestination] = useState('');
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [travelers, setTravelers] = useState(1);
  const [bookingDialogOpen, setBookingDialogOpen] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const destinations = [
    'Mumbai', 'Delhi', 'Bangalore', 'Kolkata', 
    'Chennai', 'Hyderabad', 'Pune', 'Jaipur',
    'Ahmedabad', 'Lucknow'
  ];

  const handleOpenBookingDialog = () => {
    setBookingDialogOpen(true);
  };

  const handleCloseBookingDialog = () => {
    setBookingDialogOpen(false);
  };

  const handleBookingDetailsChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitBooking = () => {
    // Validate inputs
    if (!fromDestination || !toDestination || !departureDate) {
      alert('Please fill in all required flight details.');
      return;
    }

    if (!bookingDetails.name || !bookingDetails.phone) {
      alert('Please provide your name and phone number.');
      return;
    }

    // Prepare booking information
    const bookingInfo = {
      from: fromDestination,
      to: toDestination,
      departureDate: departureDate.toLocaleDateString(),
      returnDate: returnDate ? returnDate.toLocaleDateString() : 'One-way',
      travelers,
      name: bookingDetails.name,
      phone: bookingDetails.phone,
      email: bookingDetails.email
    };

    // Here you would typically send this to a backend service
    console.log('Booking Submitted:', bookingInfo);
    alert('Booking submitted successfully!');
    
    // Reset form
    handleCloseBookingDialog();
    resetForm();
  };

  const resetForm = () => {
    setFromDestination('');
    setToDestination('');
    setDepartureDate(null);
    setReturnDate(null);
    setTravelers(1);
    setBookingDetails({
      name: '',
      phone: '',
      email: ''
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
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

          <Container maxWidth="md" sx={{ flex: 1, py: 4 }}>
            <Paper 
              elevation={6} 
              sx={{ 
                borderRadius: 4, 
                overflow: 'hidden',
                backgroundColor: 'white'
              }}
            >
              {/* Header */}
              <Box 
                sx={{ 
                  background: 'linear-gradient(to right, #f18c4a, #f4a76e)',
                  color: 'white',
                  p: 3,
                  textAlign: 'center'
                }}
              >
                <Typography variant="h4" fontWeight="bold">
                  Flight Ticket Booking
                </Typography>
              </Box>

              {/* Booking Form */}
              <Box sx={{ p: 4 }}>
                <Grid container spacing={3}>
                  {/* From Destination */}
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <InputLabel>From</InputLabel>
                      <Select
                        value={fromDestination}
                        label="From"
                        onChange={(e) => setFromDestination(e.target.value)}
                      >
                        {destinations.map((dest) => (
                          <MenuItem key={dest} value={dest}>
                            {dest}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>

                  {/* To Destination */}
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <InputLabel>To</InputLabel>
                      <Select
                        value={toDestination}
                        label="To"
                        onChange={(e) => setToDestination(e.target.value)}
                      >
                        {destinations.map((dest) => (
                          <MenuItem key={dest} value={dest}>
                            {dest}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>

                  {/* Departure Date */}
                  <Grid item xs={12} md={6}>
                    <DatePicker
                      label="Departure Date"
                      value={departureDate}
                      onChange={(newValue) => setDepartureDate(newValue)}
                      renderInput={(params) => <TextField fullWidth {...params} />}
                      minDate={new Date()}
                    />
                  </Grid>

                  {/* Return Date (Optional) */}
                  <Grid item xs={12} md={6}>
                    <DatePicker
                      label="Return Date (Optional)"
                      value={returnDate}
                      onChange={(newValue) => setReturnDate(newValue)}
                      renderInput={(params) => <TextField fullWidth {...params} />}
                      minDate={departureDate || new Date()}
                    />
                  </Grid>

                  {/* Number of Travelers */}
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <InputLabel>Number of Travelers</InputLabel>
                      <Select
                        value={travelers}
                        label="Number of Travelers"
                        onChange={(e) => setTravelers(e.target.value)}
                      >
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                          <MenuItem key={num} value={num}>
                            {num} Traveler{num > 1 ? 's' : ''}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>

                {/* Submit Booking Button */}
                <Box textAlign="center" mt={3}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleOpenBookingDialog}
                    disabled={!fromDestination || !toDestination || !departureDate}
                    sx={{ 
                      mt: 2,
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      }
                    }}
                  >
                    Continue to Booking
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Container>

          {/* Booking Details Dialog */}
          <Dialog 
            open={bookingDialogOpen} 
            onClose={handleCloseBookingDialog}
            maxWidth="xs"
            fullWidth
          >
            <DialogTitle>Complete Your Booking</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Please provide your contact details to complete the booking.
              </DialogContentText>
              <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid item xs={12}>
                  <TextField
                    autoFocus
                    margin="dense"
                    name="name"
                    label="Full Name"
                    type="text"
                    fullWidth
                    variant="outlined"
                    value={bookingDetails.name}
                    onChange={handleBookingDetailsChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    margin="dense"
                    name="phone"
                    label="Phone Number"
                    type="tel"
                    fullWidth
                    variant="outlined"
                    value={bookingDetails.phone}
                    onChange={handleBookingDetailsChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    margin="dense"
                    name="email"
                    label="Email (Optional)"
                    type="email"
                    fullWidth
                    variant="outlined"
                    value={bookingDetails.email}
                    onChange={handleBookingDetailsChange}
                  />
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseBookingDialog} color="primary">
                Cancel
              </Button>
              <Button onClick={handleSubmitBooking} color="primary" variant="contained">
                Book Now
              </Button>
            </DialogActions>
          </Dialog>

          {/* Why Choose CookTicket Section */}
          <Container maxWidth="md" sx={{ py: 6 }}>
            <Typography 
              variant="h4" 
              align="center" 
              gutterBottom 
              sx={{ 
                fontWeight: 'bold', 
                color: 'text.primary',
                mb: 4 
              }}
            >
              Why Choose COOKTICKET
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Box 
                  sx={{ 
                    textAlign: 'center', 
                    p: 3, 
                    borderRadius: 2,
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: 3
                    }
                  }}
                >
                  <Box 
                    sx={{ 
                      backgroundColor: 'primary.main', 
                      color: 'white', 
                      width: 80, 
                      height: 80, 
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px',
                    }}
                  >
                    <Typography variant="h4">🏆</Typography>
                  </Box>
                  <Typography variant="h6" gutterBottom color="text.primary">
                    Best Prices Guaranteed
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    We offer the most competitive prices in the market. Compare and save big on every booking!
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box 
                  sx={{ 
                    textAlign: 'center', 
                    p: 3, 
                    borderRadius: 2,
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: 3
                    }
                  }}
                >
                  <Box 
                    sx={{ 
                      backgroundColor: 'primary.main', 
                      color: 'white', 
                      width: 80, 
                      height: 80, 
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px',
                    }}
                  >
                    <Typography variant="h4">🛡️</Typography>
                  </Box>
                  <Typography variant="h6" gutterBottom color="text.primary">
                    Secure Bookings
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Advanced security measures to protect your personal and payment information.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box 
                  sx={{ 
                    textAlign: 'center', 
                    p: 3, 
                    borderRadius: 2,
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: 3
                    }
                  }}
                >
                  <Box 
                    sx={{ 
                      backgroundColor: 'primary.main', 
                      color: 'white', 
                      width: 80, 
                      height: 80, 
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px',
                    }}
                  >
                    <Typography variant="h4">🌟</Typography>
                  </Box>
                  <Typography variant="h6" gutterBottom color="text.primary">
                    24/7 Customer Support
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Our dedicated support team is always ready to assist you with any queries or concerns.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>

          {/* Footer */}
          <Footer />
        </Box>
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default FlightBookingPage;