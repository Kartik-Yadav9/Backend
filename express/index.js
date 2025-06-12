let express= require("express")

let app= express()
app.use(express.json());      //for body



//middleware
let myToken= 2944     //custom

// let checkToken= (req, res, next)=>{
//     console.log("until we pass next(), nothing will go through");
//     next()
// }

let checkToken= (req, res, next)=>{
    if(req.query.token === undefined || req.query.token === ""){
        return res.send({
            status:0,
            msg: "no data"
        })
    }
     if(Number(req.query.token) !== myToken){
        return res.send({
          status: 0,
          msg: "no data",
        });
     }
    next()
}

app.use(checkToken)

app.get("/",((req, res)=>{
    res.send("home")
}))

app.get("/kartik", (req, res)=>{
    res.send("kartik Yadav")
})

app.get("/json", (req, res)=>{
    res.send({id:1, name:"kartik"})
})

//--------------------------------------POST----------------------------------------

app.post("/post",(req, res)=>{
    
    console.log(req.body);
    
    
    
    res.send({
      bodydata: req.body, //body params data routing
      querydata: req.query, //query data data routing
    });   

    


    //------------Different way of sending response--------------
    
//     res.status(200).json({
//         bodydata: req.body, //body params data routing
//       querydata: req.query, //query data data routing 
// })
    
})


//-------------------Dynamic Params----------------------------

app.get("/dynamic/:id",(req, res)=>{
    let currentId= req.params.id
    res.send("serials"+ currentId)
})

app.listen("5000")