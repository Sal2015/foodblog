import React, { useEffect, useState } from 'react'
import NavIn from './NavIn'
import AdminNavin from './AdminNavin'
import LatestBlogs from './LatestBlogs'
import { useNavigate } from 'react-router-dom'
import SubBar from './SubBar'
import { Card, CardContent, CardActions, Typography, Button, Grid, Paper, CardMedia } from '@mui/material';
import axios from 'axios'

const AdminHome = () => {

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


  return (
    <>
    <AdminNavin/>
    
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
                        dangerouslySetInnerHTML={{ __html: val.content }}
                      />
  
                    </Grid>
                    <Grid item xs={4}>
                      <CardMedia
                        component="img"
                        image={val.imageurl}
                        alt="image not available"
                        sx={{ height: '100%', objectFit: 'cover', borderRadius : '20px' }}
                      />
                    </Grid>
                  </Grid>
                </CardContent>
                {/* <CardActions>
                  <Button
                    variant="contained"
                    onClick={() => value(val._id)}
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
                </CardActions> */}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </>
  )
}

export default AdminHome