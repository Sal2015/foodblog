import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button } from '@mui/material';
import axios from 'axios';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import UpdateSharpIcon from '@mui/icons-material/UpdateSharp';
import { useNavigate } from 'react-router-dom';
import NavIn from './NavIn';
import AdminNavin from './AdminNavin';


const UserList = () => {
  const [data, setData] = useState([]);
  var navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:4000/viewuser")
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);



  const deluserValue =(id) =>
    {
      console.log(id);
      axios.delete("http://localhost:4000/deleteuser/"+id)
      .then((res)=>{
        alert(res.data.message);
        window.location.reload();
      }) 
  
        
       .catch( (err)=>console.log(err));
        
      };

    const updateValue =(val) =>
      {
        console.log("up clicked");
        navigate("/i",{state:{val}});

      };

  return (
    <>
    <AdminNavin />
    
    <TableContainer component={Paper}>
      <Typography variant="h6" component="div" sx={{ padding: '1rem' }}>
        Data Table
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
           
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
           
            <TableCell>Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((val) => (
            <TableRow key={val.uid}>
              
              <TableCell>{val.name}</TableCell>
              <TableCell>{val.username}</TableCell>
              
              <TableCell>
              <Button 
                  variant="contained" 
                  color="error" 
                  onClick={()=>{deluserValue(val._id) }}
                  startIcon={<DeleteForeverSharpIcon />} 
                  sx={{ mr: 1 , margin : '20px'}}
                >
                  Delete
                </Button>
                {/* <Button 
                  variant="contained" 
                  
                  startIcon={<UpdateSharpIcon />}
                  onClick={()=>{updateValue(val) }}
                  color="dark"
                >
                  Update
                </Button> */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
export default UserList;
