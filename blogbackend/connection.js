const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://sal2003naz:salnaz@cluster0.wcuv6bn.mongodb.net/blogapp?retryWrites=true&w=majority&appName=Cluster0")

.then( () =>{
    console.log("connected to blogapp database");
})
.catch( (error) => {
    console.log(error)
})