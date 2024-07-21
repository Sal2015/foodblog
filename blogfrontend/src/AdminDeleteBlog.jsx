import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardActions, Typography, Button, Grid, Paper } from '@mui/material';
import axios from 'axios';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import UpdateSharpIcon from '@mui/icons-material/UpdateSharp';
import { useNavigate } from 'react-router-dom';
import SubBar from './SubBar';
import End from './End';
import EndBar from './EndBar';
import NavIn from './NavIn';
import AdminNavin from './AdminNavin';

const AdminDeleteBlog = () => {
  const [data, setData] = useState([]);
  var navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:4000/view")
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


  const delValue =(id) =>
    {
      console.log(id);
      axios.delete("http://localhost:4000/delete/"+id)
      .then((res)=>{
        alert(res.data.message);
        window.location.reload();
      }) 
  
        
       .catch( (err)=>console.log(err));
        
      };
  

  return (
    <>
    <AdminNavin />
    <Paper sx={{ padding: '1rem' }}>
      <Typography variant="h6" component="div" sx={{ padding: '1rem' }}>
        All Posts
      </Typography>
      <Grid container spacing={2}>
        {data.map((val ,i) => (
          <Grid item xs={12} sm={12} md={12} key={i} sx={{backgroundColor :'#F7F7F7'}}>
            <Card  >
              <CardContent>
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
              </CardContent>
              <Button 
                  variant="contained" 
                  color="error" 
                  onClick={()=>{delValue(val._id) }}
                  startIcon={<DeleteForeverSharpIcon />} 
                  sx={{ mr: 1 , margin : '20px'}}
                >
                  Delete
                </Button>
              {/* <CardActions>
                <Button
                  variant="contained"
                  
                  onClick={() => delValue(val._id)}
                  
                  sx={{ mr: 1 ,backgroundColor : '#151515' ,'&:hover': {
                    backgroundColor: '#A91D3A',color : 'white'
                  },}}
                >
                  Read More
                </Button>
               
              </CardActions> */}
            </Card>
          </Grid>
          
        ))
        }
      </Grid>
    </Paper>
    </>
  );
}

export default AdminDeleteBlog;
