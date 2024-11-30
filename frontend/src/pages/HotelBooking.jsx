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

// Create a custom theme (same as flight booking page)
const theme = createTheme({
  palette: {
    primary: {
      main: '#4a7bf1', // Changed to a blue tone for hotel bookings
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
            backgroundColor: 'rgba(74, 123, 241, 0.05)',
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

const HotelBookingPage = () => {
  const [destination, setDestination] = useState('');
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [guests, setGuests] = useState(1);
  const [roomType, setRoomType] = useState('');
  const [bookingDialogOpen, setBookingDialogOpen] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const destinations = [
    'Mumbai', 'Delhi', 'Bangalore', 'Kolkata', 
    'Chennai', 'Hyderabad', 'Pune', 'Jaipur',
    'Ahmedabad', 'Goa'
  ];

  const roomTypes = [
    'Standard Room', 
    'Deluxe Room', 
    'Suite', 
    'Family Room', 
    'Executive Suite'
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
    if (!destination || !checkInDate || !checkOutDate || !roomType) {
      alert('Please fill in all required hotel booking details.');
      return;
    }

    if (!bookingDetails.name || !bookingDetails.phone) {
      alert('Please provide your name and phone number.');
      return;
    }

    // Prepare booking information
    const bookingInfo = {
      destination,
      checkInDate: checkInDate.toLocaleDateString(),
      checkOutDate: checkOutDate.toLocaleDateString(),
      guests,
      roomType,
      name: bookingDetails.name,
      phone: bookingDetails.phone,
      email: bookingDetails.email
    };

    // Here you would typically send this to a backend service
    console.log('Booking Submitted:', bookingInfo);
    alert('Hotel booking submitted successfully!');
    
    // Reset form
    handleCloseBookingDialog();
    resetForm();
  };

  const resetForm = () => {
    setDestination('');
    setCheckInDate(null);
    setCheckOutDate(null);
    setGuests(1);
    setRoomType('');
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
                  background: 'linear-gradient(to right, #4a7bf1, #6e93f4)',
                  color: 'white',
                  p: 3,
                  textAlign: 'center'
                }}
              >
                <Typography variant="h4" fontWeight="bold">
                  Hotel Booking
                </Typography>
              </Box>

              {/* Booking Form */}
              <Box sx={{ p: 4 }}>
                <Grid container spacing={3}>
                  {/* Destination */}
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <InputLabel>Destination</InputLabel>
                      <Select
                        value={destination}
                        label="Destination"
                        onChange={(e) => setDestination(e.target.value)}
                      >
                        {destinations.map((dest) => (
                          <MenuItem key={dest} value={dest}>
                            {dest}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>

                  {/* Room Type */}
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <InputLabel>Room Type</InputLabel>
                      <Select
                        value={roomType}
                        label="Room Type"
                        onChange={(e) => setRoomType(e.target.value)}
                      >
                        {roomTypes.map((room) => (
                          <MenuItem key={room} value={room}>
                            {room}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>

                  {/* Check-in Date */}
                  <Grid item xs={12} md={6}>
                    <DatePicker
                      label="Check-in Date"
                      value={checkInDate}
                      onChange={(newValue) => setCheckInDate(newValue)}
                      renderInput={(params) => <TextField fullWidth {...params} />}
                      minDate={new Date()}
                    />
                  </Grid>

                  {/* Check-out Date */}
                  <Grid item xs={12} md={6}>
                    <DatePicker
                      label="Check-out Date"
                      value={checkOutDate}
                      onChange={(newValue) => setCheckOutDate(newValue)}
                      renderInput={(params) => <TextField fullWidth {...params} />}
                      minDate={checkInDate || new Date()}
                    />
                  </Grid>

                  {/* Number of Guests */}
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <InputLabel>Number of Guests</InputLabel>
                      <Select
                        value={guests}
                        label="Number of Guests"
                        onChange={(e) => setGuests(e.target.value)}
                      >
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                          <MenuItem key={num} value={num}>
                            {num} Guest{num > 1 ? 's' : ''}
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
                    disabled={!destination || !checkInDate || !checkOutDate || !roomType}
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
              Why Choose COOKTICKET?
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
                    <Typography variant="h4">💰</Typography>
                  </Box>
                  <Typography variant="h6" gutterBottom color="text.primary">
                    Best Prices Guaranteed
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Unbeatable rates and exclusive deals on hotel bookings across India.
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
                    <Typography variant="h4">🏨</Typography>
                  </Box>
                  <Typography variant="h6" gutterBottom color="text.primary">
                    Wide Range of Hotels
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    From budget stays to luxury resorts, we have options for every traveler.
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
                    Our dedicated support team is always ready to help with your bookings.
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

export default HotelBookingPage;
