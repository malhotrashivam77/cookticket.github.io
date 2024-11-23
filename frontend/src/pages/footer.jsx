import React from 'react';
import { Container, Grid, Typography, Link, IconButton, Box } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn, GitHub, Google } from '@mui/icons-material';
import '../assets/styles/footer.css'; // Assuming you will add styles for the footer here

const Footer = () => {
  return (
    <footer className="footer">
      <Container maxWidth="lg">
        {/* Social Media Icons */}
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
          <IconButton href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook sx={{ color: 'white', fontSize: 30 }} />
          </IconButton>
          <IconButton href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter sx={{ color: 'white', fontSize: 30 }} />
          </IconButton>
          <IconButton href="https://google.com" target="_blank" rel="noopener noreferrer">
            <Google sx={{ color: 'white', fontSize: 30 }} />
          </IconButton>
          <IconButton href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram sx={{ color: 'white', fontSize: 30 }} />
          </IconButton>
          {/* <IconButton href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <LinkedIn sx={{ color: 'white', fontSize: 30 }} />
          </IconButton>
          <IconButton href="https://github.com" target="_blank" rel="noopener noreferrer">
            <GitHub sx={{ color: 'white', fontSize: 30 }} />
          </IconButton> */}
        </Box>

        {/* Contact Information */}
        <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ mt: 2 }}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="white" gutterBottom>
              Contact Information
            </Typography>
            <Typography color="white">Address: Dehradun</Typography>
            <Typography color="white">
              Email:{' '}
              <Link href="mailto:info@yourcompany.com" color="primary">
                info@cookticket.com
              </Link>
            </Typography>
            <Typography color="white">
              Phone:{' '}
              <Link href="tel:+1234567890" color="secondary">
                +91 7500068589
              </Link>
            </Typography>
          </Grid>
        </Grid>

        {/* Copyright Information */}
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="body2" color="textSecondary">
            &copy; {new Date().getFullYear()} cookticket. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
