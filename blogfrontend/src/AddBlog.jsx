import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import { useNavigate} from 'react-router-dom';
import axios from 'axios';
import './AddBlog.css'

import NavIn from './NavIn';


const AddBlog = () => {

  const[title , setTitle] = useState('')
  const[summary , setSummary] = useState('')
  const[content , setContent] = useState('')
   const [imageurl , setImageurl] = useState('');

  const navigate = useNavigate();

const handleSubmit = async(ev) =>{
   const data = new FormData(ev.currentTarget);
  ev.preventDefault();

  console.log({
    title: data.get('title'),
    summary: data.get('summary'),
    content: data.get('content'),
    imageurl: data.get('imageurl')
  });

  try{
    
    const response = await axios.post("http://localhost:4000/addblog" , {title , summary , content , imageurl});
    console.log(response);
    navigate('/inhome')
  }
  catch(error){
    console.log("addblog error: ", error);
  }
};
  return (
    <>
    <NavIn />
    <h1>
      Found a new taste? That's great!
    </h1>
    <h2>Share Your recipe with others</h2>
    
    <form onSubmit={handleSubmit}>

      <input type='title' 
      placeholder = {'Title'} 
      value={title} 
      onChange={ev => setTitle(ev.target.value)}
      
      />
      <input type='summary' 
      placeholder = {'Summary'}
      value={summary} 
      onChange={ev => setSummary(ev.target.value)}
      />

<input type='imageurl' 
      placeholder = {'ImageURL'}
      value={imageurl} 
      onChange={ev => setImageurl(ev.target.value)}
      />
      

      <ReactQuill  value={content}
      onChange={newValue => setContent(newValue)}
      sx={{margin : '10px',
        height:'30px',
        width : '100%',
        padding :'10px',
    }}
      placeholder='Type Your Recipe Here'
      />
      <button className="btn">Echo Your Post</button>
    </form>
    
    
    </>
  )
}

export default AddBlog
//1:48;0 for adding modules