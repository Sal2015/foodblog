import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardActions, Typography, Button, Grid, Paper, CardMedia } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SubBar from './SubBar';
import End from './End';
import EndBar from './EndBar';
import NavIn from './NavIn';

const Home = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:4000/view")
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleReadMore = (id) => {
    navigate(`/blog/${id}`);
  };

  const truncateContent = (content, maxLength) => {
    return content.length > maxLength ? content.substring(0, maxLength) + '...' : content;
  };
  return (
    <>
      <NavIn />
      <SubBar />
      <Paper sx={{ padding: '1rem' }}>
        <Typography variant="h6" component="div" sx={{ padding: '1rem' }}>
          Latest Posts
        </Typography>
        <Grid container spacing={2}>
          {data.map((val, i) => (
            <Grid item xs={12} sm={12} md={12} key={i} sx={{ backgroundColor: '#F7F7F7' }}>
              <Card>
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={8}>
                      <Typography variant="h6" component="div">
                        <h2>{val.title}</h2>
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        dangerouslySetInnerHTML={{ __html: val.summary }}
                      />
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        dangerouslySetInnerHTML={{ __html:truncateContent( val.content , 500) }}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <CardMedia
                        component="img"
                        image={val.imageurl}
                        alt="image not available"
                        sx={{ height: '100%', objectFit: 'cover', borderRadius: '20px' }}
                      />
                    </Grid>
                  </Grid>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    onClick={() => handleReadMore(val._id)}
                    sx={{ 
                      mr: 1, 
                      backgroundColor: '#151515',
                      '&:hover': {
                        backgroundColor: '#A91D3A', 
                        color: 'white'
                      },
                    }}
                  >
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
      <EndBar />
      <End />
    </>
  );
}

export default Home;
