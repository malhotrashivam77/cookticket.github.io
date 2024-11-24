import React from 'react';
import { Container, Grid, Typography, TextField, Button, Box, IconButton } from '@mui/material';
import { Phone, Email, LocationOn, WhatsApp } from '@mui/icons-material';
import '../assets/styles/contactus.css'; // Add your CSS styles here

const ContactUs = () => {
  return (
    <section className="contact-us-section">
      <Container maxWidth="md">
        {/* Header Section */}
        <Typography variant="h4" align="center" className="contact-us-title">
          Contact Us
        </Typography>
        <Typography variant="subtitle1" align="center" className="contact-us-subtitle">
          We’d love to hear from you! Reach out to us via phone, WhatsApp, or send us a message below.
        </Typography>

        <Grid container spacing={4} sx={{ marginTop: 4 }}>
          {/* Message Form */}
          <Grid item xs={12} md={6}>
            <Box component="form" noValidate autoComplete="off" className="contact-form">
              <Typography variant="h6" gutterBottom>
                Send Us a Message
              </Typography>
              <TextField
                label="Your Name"
                fullWidth
                margin="normal"
                variant="outlined"
                required
              />
              <TextField
                label="Your Email"
                type="email"
                fullWidth
                margin="normal"
                variant="outlined"
                required
              />
              <TextField
                label="Message"
                multiline
                rows={4}
                fullWidth
                margin="normal"
                variant="outlined"
                required
              />
              <Button variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
                Send Message
              </Button>
            </Box>
          </Grid>

          {/* Contact Details */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Get in Touch
            </Typography>
            <Box display="flex" alignItems="center" marginBottom={2}>
              <Phone color="primary" sx={{ marginRight: 2 }} />
              <Typography>+91 75000 68589</Typography>
            </Box>
            <Box display="flex" alignItems="center" marginBottom={2}>
              <WhatsApp color="success" sx={{ marginRight: 2 }} />
              <Typography>+91 75000 68589</Typography>
            </Box>
            <Box display="flex" alignItems="center" marginBottom={2}>
              <Email color="error" sx={{ marginRight: 2 }} />
              <Typography>info@cookticket.com</Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <LocationOn color="secondary" sx={{ marginRight: 2 }} />
              <Typography>Dehradun, India</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default ContactUs;
