import React from 'react';
import { Container, Grid, Card, CardContent, CardActions, Typography, Button, Box } from '@mui/material';
import '../assets/styles/Services.css'; // Styles for the services page
import destinationWeddingImg from '../assets/images/destination_wedding.jpeg';
import hotelBookingImg from '../assets/images/hotel_booking.jpeg';
import flightTicketsImg from '../assets/images/flight_tickets.jpeg';
import travelPackagesImg from '../assets/images/travel_packages.jpeg';

const services = [
  {
    title: 'Destination Weddings',
    description: 'Plan your dream wedding in the most exotic destinations.',
    img: destinationWeddingImg,
    buttonText: 'Enquire Now',
  },
  {
    title: 'Hotel Bookings',
    description: 'Comfortable and affordable stays for every traveler.',
    img: hotelBookingImg,
    buttonText: 'Book Now',
  },
  {
    title: 'Flight Tickets',
    description: 'Get the best deals on domestic and international flights.',
    img: flightTicketsImg,
    buttonText: 'Explore Deals',
  },
  {
    title: 'Travel Packages',
    description: 'Curated travel packages to make your vacations unforgettable.',
    img: travelPackagesImg,
    buttonText: 'View Packages',
  },
];

const ServicesPage = () => {
  return (
    <section className="services-section">
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom className="section-title">
          Our Services
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card className="service-card">
                {/* Fixed Image Section */}
                <Box
                  className="service-image"
                  sx={{
                    height: 150,
                    backgroundImage: `url(${service.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                ></Box>

                {/* Card Content */}
                <CardContent sx={{ height: 120, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <Typography variant="h6" component="div" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" noWrap>
                    {service.description}
                  </Typography>
                </CardContent>

                {/* Button Section */}
                <CardActions>
                  <Button variant="contained" color="primary" fullWidth>
                    {service.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default ServicesPage;
