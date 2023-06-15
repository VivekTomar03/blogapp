const express = require("express")
const cors = require("cors")
const { connection } = require("./config/db")
const { userRouter } = require("./routes/userRoute")
const { blogRouter } = require("./routes/blogRoute")
const { userauth } = require("./middleware/userauth")
require("dotenv").config()
const app = express()
app.use(cors())
app.use(express.json())
const PORT = process.env.PORT || 8080
app.use("/api" , userRouter)

app.use("/api", blogRouter)
app.listen(PORT, async()=> {
    try {
        await connection
        console.log("you are connected to db")
        
    } catch (error) {
        console.log(error)
    }
    console.log("server running at PORT",PORT)
})
