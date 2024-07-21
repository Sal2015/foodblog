// Navbar.js
import React from 'react';
import { AppBar, Toolbar, Box, Link, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './SubBar.css'

const tabImages = [
  { src: 'https://abeautifulmess.com/wp-content/uploads/2023/04/Fruit-Salad-Recipe.jpg', path: '/' },
  {  src: 'https://www.thespruceeats.com/thmb/ExWf6uQ7Tu4HIwAXx3DgB92rQz8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/homemade-slider-buns-3062253_hero-01-1dcdc448948a4b7caf7368fec7aaa20e.jpg', path: '/' },
  { src: 'https://www.mohalibakers.com/wp-content/uploads/2022/02/Chocolate-Cakes-in-Mohali-Chandigarh-8.jpg', path: '/' },
  {  src: 'https://myfoodstory.com/wp-content/uploads/2023/01/air-fryer-pasta-square-2.jpg', path: '/' },
  { src: 'https://www.12taste.com/in/wp-content/uploads/2020/04/dum-handi-chicken-biryani-is-prepared-earthen-clay-pot-called-haandi-popular-indian-non-vegetarian-food-scaled.jpg', path: '/' },
  {  src: 'https://www.licious.in/blog/wp-content/uploads/2022/06/shutterstock_1339636625-1-600x600.jpg', path: '/' },
  { src: 'https://abeautifulmess.com/wp-content/uploads/2023/04/Fruit-Salad-Recipe.jpg', path: '/' },
  {  src: 'https://www.thespruceeats.com/thmb/ExWf6uQ7Tu4HIwAXx3DgB92rQz8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/homemade-slider-buns-3062253_hero-01-1dcdc448948a4b7caf7368fec7aaa20e.jpg', path: '/' },
  { src: 'https://www.mohalibakers.com/wp-content/uploads/2022/02/Chocolate-Cakes-in-Mohali-Chandigarh-8.jpg', path: '/' },
  {  src: 'https://myfoodstory.com/wp-content/uploads/2023/01/air-fryer-pasta-square-2.jpg', path: '/' },
  { src: 'https://www.12taste.com/in/wp-content/uploads/2020/04/dum-handi-chicken-biryani-is-prepared-earthen-clay-pot-called-haandi-popular-indian-non-vegetarian-food-scaled.jpg', path: '/' },
  {  src: 'https://www.licious.in/blog/wp-content/uploads/2022/06/shutterstock_1339636625-1-600x600.jpg', path: '/' },
];



const imageCards = [
    { title: 'Craving Sauces ?', image: 'https://www.licious.in/blog/wp-content/uploads/2022/06/shutterstock_1339636625-1-600x600.jpg' },
    { title: 'Get Healthy!', image: 'https://abeautifulmess.com/wp-content/uploads/2023/04/Fruit-Salad-Recipe.jpg' },
    { title: 'Just Carbs!', image: 'https://www.thespruceeats.com/thmb/ExWf6uQ7Tu4HIwAXx3DgB92rQz8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/homemade-slider-buns-3062253_hero-01-1dcdc448948a4b7caf7368fec7aaa20e.jpg' },
    { title: 'Take a Break .. !!', image: 'https://www.mohalibakers.com/wp-content/uploads/2022/02/Chocolate-Cakes-in-Mohali-Chandigarh-8.jpg' },
  ];

const SubBar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static" sx={{ backgroundColor: '#F7F7F7' , padding : '20px' , display:'flex' , justifyContent : 'space-between' }}>
      
      <Grid container spacing={4} sx={{ padding: 4 }}>
        
      {imageCards.map((card, index) => (
        <Grid item xs={12} sm={6} md={6} xl={3} key={index}>
          <Card>
            <CardMedia
              component="img"
              height="500"
              image={card.image}
              alt={card.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    <Toolbar>
        <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center' }}>
          {tabImages.map((tab, index) => (
            <Link
              key={index}
              href={tab.path}
              sx={{ mx: 2 }}
              onClick={(e) => {
                e.preventDefault();
                navigate(tab.path);
              }}
            >
              <img src={tab.src} style={{ width: '80px', height: '90px' , borderRadius : '100px', objectFit :'cover' }} />
            </Link>
          ))}
        </Box>
      </Toolbar>


    </AppBar>
  );
};

export default SubBar;
