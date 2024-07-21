const mongoose = require('mongoose')

const schema = mongoose.Schema({
    title : String,
    summary : String , 
    content : String,
    imageurl : String
})

const blogModel = mongoose.model("blog" , schema);
module.exports = blogModel ;
