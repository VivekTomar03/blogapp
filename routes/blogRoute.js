const express = require("express")
const { userauth } = require("../middleware/userauth")
const { BlogModal } = require("../modal/postModal")

const blogRouter = express.Router()
blogRouter.get("/blogs", async(req,res)=> {
    try {
        const data = await BlogModal.find()
        res.send(data)
    } catch (error) {
        res.send("not able get posts")
    }
})

blogRouter.use(userauth)
blogRouter.post("/blogs" , async(req,res) => {
    try {
        const data = new BlogModal(req.body)
    await data.save()
    res.send({
        msg:"post created"

    })
    } catch (error) {
        res.send({
            msg :"something went wrong line 12",
            err:error.message
        })
    }
})


module.exports = {
    blogRouter
}