// let token= 1999   //token coming from env file in line 4

let checktoken= (req,res, next)=>{
    if(req.query.token === undefined || req.query.token === "" || req.query.token !== process.env.testingtoken.toString()){
        return res.send("enter valid token")
    }

    next()
}

module.exports = {checktoken}