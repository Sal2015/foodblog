import { useState } from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import React from 'react'
import Login from './Login'

import Navbar from './Navbar'
import Home from './Home'
import ViewBlog from './ViewBlog'
import Register from './Register'
import AddBlog from './AddBlog'
import SideBar from './SideBar'

import Footer from './Footer'
import Profile from './Profile'
import DeleteBlog from './DeleteBlog'
import './App.css'
import UserList from './UserList'
import AdminHome from './AdminHome'
import InHome from './InHome'
import LatestBlogs from './LatestBlogs'
import AdminLogin from './AdminLogin'
import AdminAddBlog from './AdminAddBlog'
import AdminDeleteBlog from './AdminDeleteBlog'
import AboutUs from './AboutUs'
import UpdateBlog from './UpdateBlog'

const App = () => {
  return (
    <>
    <div className="app">

  
    
    <BrowserRouter>
    <Routes>

      <Route path='/viewblog' element={<ViewBlog />} />
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/add-blog' element={<AddBlog />} />
      <Route path='/delete-blog' element={<DeleteBlog />} />
      <Route path='/update-blog' element={<UpdateBlog />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/users' element={<UserList />} />
      <Route path='/adminhome' element={<AdminHome />} />
      <Route path='/inhome' element={<InHome />} />
      <Route path="/blog/:id" element={<ViewBlog/>} />
      <Route path="latest-blogs" element={<LatestBlogs/>} />
      <Route path="/blog/:id" element={<ViewBlog />} />
      

      <Route path='/adminlogin' element={<AdminLogin />} />
      <Route path='/adminadd-blog' element={<AdminAddBlog />} />
      <Route path='/admindelete-blog' element={<AdminDeleteBlog />} />

      <Route path='/about-us' element={<AboutUs />} />
    </Routes>
    
    </BrowserRouter>
    <Footer />

    </div>
    
    </>
  )
}

export default App
