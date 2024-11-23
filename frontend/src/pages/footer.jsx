import React from 'react';
import { Container, Typography, Link, IconButton, Box } from '@mui/material';
import { Facebook, Twitter, Instagram, Google } from '@mui/icons-material';
import '../assets/styles/footer.css'; // Assuming you will add styles for the footer here
import logo from '../assets/images/white_logo_nonbg.png';
// @ts-ignore
import Grid from '@mui/material/Grid';

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: '#FF7043', padding: '20px 0', color: 'white', display: 'flex', justifyContent: 'space-between' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Left Side - Logo */}
          <Grid item xs={12} sm={4}>
            <Box display="flex" justifyContent="center" alignItems="center" height="100%" >
              <img src={logo} alt="CookTicket Logo" style={{ maxWidth: '250px' }} />
            </Box>
          </Grid>

          {/* Right Side - Contact Details and Social Media Icons */}
          <Grid item xs={12} sm={8}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems={{ xs: 'center', sm: 'flex-end' }}
              justifyContent="space-between"
              height="100%"
            >
              {/* Contact Information */}
              

              {/* Social Media Icons */}
              <Box mb={2} display="flex" justifyContent={{ xs: 'center', sm: 'flex-start' }} >
                <IconButton href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook sx={{ color: 'white', fontSize: 38 }} />
                </IconButton>
                <IconButton href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter sx={{ color: 'white', fontSize: 38 }} />
                </IconButton>
                <IconButton href="https://google.com" target="_blank" rel="noopener noreferrer">
                  <Google sx={{ color: 'white', fontSize: 38 }} />
                </IconButton>
                <IconButton href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram sx={{ color: 'white', fontSize: 38 }} />
                </IconButton>
              </Box>

              <Box textAlign={{ xs: 'center', sm: 'left' }}>
                <Typography variant="h5" gutterBottom fontWeight={600} fontSize={{ xs: '1rem', sm: '2.0rem' }}>
                  Contact Information
                </Typography>
                <Typography>Address: Dehradun</Typography>
                <Typography>
                  Email:{' '}
                  <Link href="mailto:cookticket1@gmail.com" color="inherit" underline="hover">
                    cookticket1@gmail.com
                  </Link>
                </Typography>
                <Typography>
                  Phone:{' '}
                  <Link href="tel:+918909408828" color="inherit" underline="hover">
                    +91 8909408828
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Copyright Section */}
        <Box textAlign="center" mt={4}>
          <Typography variant="body2" color="white">
            &copy; {new Date().getFullYear()} CookTicket. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
