// let mytoken= 12345 //will be shifted to env file

let checkToken= (req, res, next)=>{

    if(req.query.token === "" || req.query.token === undefined){
        return res.send({
            status:0,
            data:"please enter token"
        })
    }

    if(req.query.token != process.env.mytoken){
        return res.send({
          status: 0,
          data: "please enter token",
        });
    }

    next()          //if no errors than this next() will work to proceed
 }

 module.exports= {checkToken}