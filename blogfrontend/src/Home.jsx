import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardActions, Typography, Button, Grid, Paper, CardMedia } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SubBar from './SubBar';
import End from './End';
import EndBar from './EndBar';
import Navbar from './Navbar';

const Home = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <SubBar />
      
      <EndBar />
      <End />
    </>
  );
}

export default Home;
