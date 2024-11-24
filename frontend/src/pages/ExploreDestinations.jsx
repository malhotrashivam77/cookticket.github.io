import React from 'react';
import { Box, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import Slider from 'react-slick'; // Make sure to install `react-slick` and `slick-carousel`
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../assets/styles/ExploreDestinations.css'; // Add your styles here
import maldives from '../assets/images/maldives.jpeg';
import paris from '../assets/images/paris.jpeg';
import dubai from '../assets/images/dubai.jpeg';
import newyork from '../assets/images/newyork.jpeg';

const destinations = [
    {
        image: paris,
        title: 'Paris',
        description: 'Discover the city of love and lights with stunning architecture and rich culture.',
    },
    {
        image: maldives,
        title: 'Maldives',
        description: 'Experience the serene beauty of crystal-clear waters and exotic beaches.',
    },
    {
        image: dubai,
        title: 'Dubai',
        description: 'Explore the modern marvels and luxury shopping experiences in Dubai.',
    },
    {
        image: newyork,
        title: 'New York',
        description: 'Dive into the vibrant energy of the Big Apple, a city that never sleeps.',
    },
];

const ExploreDestinations = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section className="explore-destinations">
            <Typography variant="h4" align="center" gutterBottom className="section-title">
                Explore Destinations with Us
            </Typography>
            <Slider {...sliderSettings}>
                {destinations.map((destination, index) => (
                    <Card key={index} className="destination-card">
                        <CardMedia
                            component="img"
                            height="200"
                            image={destination.image}
                            alt={destination.title}
                            className="card-media"
                        />
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                {destination.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                {destination.description}
                            </Typography>
                            <Button
                                variant="contained"
                                fullWidth
                                sx={{
                                    marginTop: 2,
                                    background: 'linear-gradient(135deg, rgb(241, 140, 74) 0%, rgb(225, 100, 50) 50%, rgb(200, 60, 20) 100%)',
                                    color: '#fff',
                                    '&:hover': {
                                        background: 'linear-gradient(135deg, rgb(225, 100, 50) 0%, rgb(200, 60, 20) 50%, rgb(175, 30, 10) 100%)',
                                    },
                                }}
                            >
                                Enquire Now
                            </Button>

                        </CardContent>
                    </Card>
                ))}
            </Slider>
        </section>
    );
};

export default ExploreDestinations;
