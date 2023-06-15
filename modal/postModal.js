const mongoose = require("mongoose")


const blogSchema = mongoose.Schema({
    owner:String,
    PostID:String,
    title:String,
    content:String,
    Date:String,
    category:String
 
}, {
    versionKey:false
})

const BlogModal = mongoose.model("blog", blogSchema)
module.exports = {
    BlogModal
}