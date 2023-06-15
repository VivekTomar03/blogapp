const express = require("express")
const bcrypt = require('bcrypt');
const { UserModal } = require("../modal/userModal");
const jwt = require('jsonwebtoken');
const userRouter = express.Router()


userRouter.post("/register" , async(req,res) => {
    const {email,name,password} = req.body
     try {
        bcrypt.hash(password, 5, async(err, hash)=>  {
            if(err){
                res.send({
                    msg:"not hash line 12"
                })
            }
            else {
                const data = new UserModal({email,password:hash,name})
                await data.save()
                res.send({
                    msg:"user created succesfully"
                })
            }
        })
     } catch (error) {
        res.send({
            msg:"something went wrong line11",
            err:error.message
        })
     }
})


userRouter.post("/login" , async(req,res) => {
    const {email,password} = req.body
    try {
        const user = await UserModal.findOne({email})
        if(user){
           const  token = jwt.sign({ PostID:user._id, owner:user.name }, 'blog');  
           bcrypt.compare(password, user.password, (err, result)=> {
             if(result){
                res.send({
                    msg:"user login succesfully",
                    token

                })
             }
             else {
                res.send({
                    msg:"something went wrong line 50",
                    error:err.message
                })
             }
        })
        }
    } catch (error) {
        res.send({
            msg:"something went wrong line 98",
            err:error.message
        })
    }
})

module.exports = {
    userRouter
}