var jwt = require('jsonwebtoken');
const userauth = async(req,res,next)=> {
    const token = (req.headers.authorization)
    var decoded = jwt.verify(token, 'blog');
    if(decoded){
        req.body.PostID=decoded.PostID
        req.body.owner= decoded.owner
        next()
    }
    else {
        res.send({
            msg:"auth fail line 12"
        })
    }
}

module.exports = {
    userauth
}