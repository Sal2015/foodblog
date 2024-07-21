require('./connection.js')

const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser');


app.use(express.json());
app.use(cors());
app.use(bodyParser.json());


const user = require('./model/user')
const blog = require('./model/blog')
const admin = require('./model/admin')

  
//add user
app.post('/register' , async(req , res) => {
    try{
        console.log(req.body)
        await user(req.body).save()

        res.send({message : "registered"})
    }
    catch(error){
        console.log(error)
    }

})

// app.post('/registeradmin' , async(req , res) => {
//     try{
//         console.log(req.body)
//         await admin(req.body).save()

//         res.send({message : "adminregistered"})
//     }
//     catch(error){
//         console.log(error)
//     }

// })
// app.get('/viewadmin' , async(req,res) => {
//     try{
//         const data = await admin.find();
//         res.send(data);

//     }
//     catch(error){
//         console.log(error)
        
//     }
// })

app.post('/adminlogin' , async(req , res) => {
    try{

        const {username , password} = req.body;
       await admin.findOne({username : username})
        .then(admin =>{
            if(admin){
                if(admin.password === password) {
                    res.json("Success");
                }
                else{
                    res.json("password incorrect");
                }
            }
            else{
                res.json("no record found");
            }
        })
        
    }
    catch(error){
        console.log(error)
    }

})

app.post('/login' , async(req , res) => {
    try{

        const {username , password} = req.body;
       await user.findOne({username : username})
        .then(user =>{
            if(user){
                if(user.password === password) {
                    res.json("Success");
                }
                else{
                    res.json("password incorrect");
                }
            }
            else{
                res.json("no record found");
            }
        })
        
    }
    catch(error){
        console.log(error)
    }

})

//addblog
app.post('/addblog' , async(req , res) => {
    try{
        
        console.log(req.body)
        await blog(req.body).save()

        res.send({message : "blog added"})
    }
    catch(error){
        console.log(error)
    }

})


//see all blogs
app.get('/view' , async(req,res) => {
    try{
        const data = await blog.find();
        res.send(data);

    }
    catch(error){
        console.log(error)
        
    }
})

//see each blog
app.get('/blog/:id' , async(req,res)=>{
    try{
        console.log(req.params.id) 
        const blogId = req.params.id;
        const data = await blog.findById(blogId);
        res.send(data);
    
    }
    catch(error){
        console.log(error);
    }
    
    })

    // app.get('/view/:id', (req, res) => {
    //     const postId = req.params.id;
    //     Post.findById(postId, (err, post) => {
    //       if (err) return res.status(500).send(err);
    //       if (!post) return res.status(404).send('Post not found');
    //       res.json(post);
    //     });
    //   });

//see all users
app.get('/viewuser' , async(req,res) => {
    try{
        const data = await user.find();
        res.send(data);

    }
    catch(error){
        console.log(error)
        
    }
})


//delete a blog
app.delete('/delete/:id' , async(req,res)=>{
    try{
        console.log(req.params.id) 
        await blog.findByIdAndDelete(req.params.id);
        res.send({message: " blog deleted"});
    
    }
    catch(error){
        console.log(error);
    }
    
    })

//delete a user
app.delete('/deleteuser/:id' , async(req,res)=>{
    try{
        console.log(req.params.id) 
        await user.findByIdAndDelete(req.params.id);
        res.send({message: " user deleted"});
    
    }
    catch(error){
        console.log(error);
    }
    
    })

//edit a blog
// app.put('/update/:id',async(req,res)=>{
//     try {
//           var data = await blog.findByIdAndUpdate(req.params.id,req.body);
//          res.send({message:"blog updated",data})
 
//       } catch (error) {
//           console.log(error)
//      }
//   })



//   app.put('/update/:id', async (req, res) => {
//     try {
//       const { id } = req.params;
//       const updatedData = req.body;
  
//       // Fetch the existing post
//       const existingPost = await blog.findById(id);
//       if (!existingPost) {
//         return res.status(404).send({ message: 'Blog not found' });
//       }
  
//       // Merge updated fields with existing post
//       Object.assign(existingPost, updatedData);
      
//       // Save the updated post
//       const updatedPost = await existingPost.save();
      
//       res.status(200).send({ message: 'Blog updated', data: updatedPost });
//     } catch (error) {
//       console.error('Error updating blog:', error);
//       res.status(500).send({ message: 'Error updating blog', error });
//     }
//   });

app.put('/update/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const updatedRequest = await blog.findByIdAndUpdate(id, req.body, { new: true });
      res.send(updatedRequest);
    } catch (error) {
      console.log("Error in update:", error);
      res.status(500).send({ message: "Error", error });
    }
  });

    //set port
app.listen(4000 , () => {
    console.log("server is up");
});