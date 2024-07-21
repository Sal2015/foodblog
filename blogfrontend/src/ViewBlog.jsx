import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Typography, Paper, Grid, CardMedia } from '@mui/material';
import NavIn from './NavIn';

const ViewBlog = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:4000/blog/${id}`)
      .then(response => {
        setPost(response.data);
      })
      .catch(error => {
        console.error('Error fetching post:', error);
      });
  }, [id]);

  if (!post) return <Typography>Loading...</Typography>;

  return (
    <>
      <NavIn />
      <Paper sx={{ padding: '1rem', margin: '1rem' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <CardMedia
              component="img"
              image={post.imageurl}
              alt="image not available"
              sx={{ height: 'auto', objectFit: 'cover', borderRadius: '20px' }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" component="div" sx={{ padding: '1rem' }}>
              {post.title}
            </Typography>
            <Typography variant="h6" component="div" sx={{ padding: '1rem' }}>
              {post.summary}
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              dangerouslySetInnerHTML={{ __html: post.content }}
              sx={{ padding: '1rem' }}
            />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default ViewBlog;
