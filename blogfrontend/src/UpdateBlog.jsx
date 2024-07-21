import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardActions, Typography, Button, Grid, Paper, TextField } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavIn from './NavIn';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';



const UpdateBlog = () => {
  const navigate = useNavigate();
  const [requests, setRequests] = useState([]);
  const [editingRequest, setEditingRequest] = useState(null); // Initialize as null

  useEffect(() => {
    axios.get("http://localhost:4000/view")
      .then(response => {
        setRequests(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const toggleEdit = (id) => {
    setEditingRequest(id === editingRequest ? null : id);
  }

  const handleUpdate = (id) => {
    const updatedRequest = requests.find(request => request._id === id);
    axios.put(`http://localhost:4000/update/${id}`, updatedRequest)
      .then(response => {
        setRequests(prevRequests => 
          prevRequests.map(request =>
            request._id === id ? { ...request, ...response.data } : request
          )
        );
        setEditingRequest(null);
      })
      .catch(error => {
        console.error(`Error updating post: ${id}`, error);
      });
    // Navigate only on successful update, if needed
    // navigate(`/inhome`);
  };

  const handleChange = (event, field, id) => {
    const updatedValue = event.target.value;
    setRequests(prevRequests =>
      prevRequests.map(request =>
        request._id === id ? { ...request, [field]: updatedValue } : request
      )
    );
  };

  return (
    <>
      <NavIn />
      <Paper sx={{ padding: '1rem' }}>
        <Typography variant="h6" component="div" sx={{ padding: '1rem' }}>
          All Posts
        </Typography>
        <Grid container spacing={2}>
          {requests.map((request) => (
            <Grid item xs={12} sm={12} md={12} key={request._id} sx={{ backgroundColor: '#F7F7F7' }}>
              <Card>
                <CardContent>
                  {editingRequest === request._id ? (
                    <>
                      <TextField
                        label="Title"
                        value={request.title}
                        onChange={(e) => handleChange(e, 'title', request._id)}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                      />
                      <TextField
                        label="Summary"
                        value={request.summary}
                        onChange={(e) => handleChange(e, 'summary', request._id)}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                      />
                      <TextField
                        label="Imageurl"
                        value={request.imageurl}
                        onChange={(e) => handleChange(e, 'imageurl', request._id)}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        multiline
                        rows={4}
                      />




                      <ReactQuill
      value={request.content}
      onChange={(content) => handleChange({ target: { value: content } }, 'content', request._id)}
      modules={{
        toolbar: [
          [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
          [{ 'list': 'ordered' }, { 'list': 'bullet' }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{ 'color': [] }, { 'background': [] }],
          [{ 'align': [] }],
          ['link', 'image', 'video'],
          ['clean']
        ],
      }}
      formats={[
        'header', 'font', 'list', 'bullet',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'color', 'background', 'align',
        'link', 'image', 'video'
      ]}
      style={{ margin: 'normal', variant: 'outlined', minHeight: '200px' }} // Adjust styles as needed
    />




                    </>
                  ) : (
                    <>
                      <Typography variant="h6" component="div">{request.title}</Typography>
                      <Typography variant="body2" color="textSecondary" dangerouslySetInnerHTML={{ __html: request.summary }} />
                      <Typography variant="body2" color="textSecondary" dangerouslySetInnerHTML={{ __html: request.content }} />
                    </>
                  )}
                  <div style={{ marginTop: '10px', textAlign: 'center' }}>
                    {editingRequest === request._id ? (
                      <Button onClick={() => handleUpdate(request._id)} variant="contained" color="primary" style={{ marginRight: '10px' }}>Save</Button>
                    ) : (
                      <Button variant="contained" sx={{
                        mr: 1,
                        backgroundColor: '#151515',
                        '&:hover': {
                          backgroundColor: '#A91D3A',
                          color: 'white'
                        },
                      }} onClick={() => toggleEdit(request._id)}>Edit</Button>
                    )}
                  </div>
                </CardContent>
                {/* {editingRequest !== request._id && (
                  <CardActions>
                    <Button
                      variant="contained"
                      onClick={() => handleUpdate(request._id)}
                      sx={{
                        mr: 1,
                        backgroundColor: '#151515',
                        '&:hover': {
                          backgroundColor: '#A91D3A',
                          color: 'white'
                        },
                      }}
                    >
                      Update
                    </Button>
                  </CardActions>
                )} */}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </>
  );
};

export default UpdateBlog;
