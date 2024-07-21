// Footer.js
import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';


const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: '#A91D3A',
        color:'white',
       
          
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Resources
            </Typography>
            <ul>
              <li>
                <Link href="#" variant="body2" sx={{textDecoration : 'none' , color : 'white'}}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" variant="body2" sx={{textDecoration : 'none' , color : 'white'}}>
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" variant="body2" sx={{textDecoration : 'none' , color : 'white'}}>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <ul>
              <li>
                <Link href="mailto:contact@company.com" variant="body2" sx={{textDecoration : 'none' , color : 'white'}}>
                  Email : Echo2024Blog@yahoo.com
                </Link>
              </li>
              <li>
                <Link href="tel:+123456789" variant="body2" sx={{textDecoration : 'none' , color : 'white'}}>
                  Phone : 1234567890
                </Link>
              </li>
              <li>
                <Link href="#" variant="body2" sx={{textDecoration : 'none' , color : 'white'}}>
                  Address : Echo Blog ,<br/>
1234 Elm Street ,<br/>
Apt 56 ,<br/>
Springfield, IL 62704 ,<br/>
United States<br/>
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <ul>
              <li>
                <Link href="#" variant="body2" sx={{textDecoration : 'none' , color : 'white'}}>
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="#" variant="body2" sx={{textDecoration : 'none' , color : 'white'}}>
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" variant="body2" sx={{textDecoration : 'none' , color : 'white'}}>
                  Instagram
                </Link>
              </li>
            </ul>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="textSecondary" align="center" sx={{textDecoration : 'none' , color : 'white'}}>
            {'Copyright © '}
            <Link color="inherit" href="#">
              EchoBlog
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
