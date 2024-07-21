import React from 'react'
import Navbar from './Navbar'
import { Typography, Paper, Box, Container } from '@mui/material';

const AboutUs = () => {
  return (
<>
    <Navbar />
    
    <Container sx={{ marginTop: '2rem' }}>
      <Paper sx={{ padding: '2rem', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'center' }}>
          About Us
        </Typography>
        <Typography variant="h6" component="h2" sx={{ marginBottom: '1rem' }}>
          Our Mission
        </Typography>
        <Typography variant="body1" paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore maiores obcaecati quaerat asperiores unde dolore qui dicta repudiandae, nobis quidem consequatur expedita quo, maxime numquam sed quae veniam saepe at.
        </Typography>
        <Typography variant="h6" component="h2" sx={{ marginBottom: '1rem' }}>
          Our Values
        </Typography>
        <Typography variant="body1" paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolorem mollitia consequuntur cum? Alias ab, porro dolor error impedit officia repellat architecto, excepturi debitis ex laudantium cupiditate culpa placeat sint.
        </Typography>
        <Typography variant="h6" component="h2" sx={{ marginBottom: '1rem' }}>
          Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          If you would like to learn more about us or get in touch, please feel free to contact us at:
        </Typography>
        <Typography variant="body1" paragraph>
          Email: <a href="">randomexample.com</a><br />
          Phone: 11223344556
        </Typography>
      </Paper>
    </Container>
    
</>
  )
}

export default AboutUs