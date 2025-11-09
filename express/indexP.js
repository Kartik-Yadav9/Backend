let express = require("express");

let server = express();
server.use(express.json());

server.get("/", (req, res) => {
  res.send("home");
});

server.get("/details", (req, res) => {
  res.send({ name: "kartik", age: 13 });
});

server.post("/form", (req, res) => {
  // console.log(req.body);

  res.send({
    id: 1,
    name: "kartik",
    bodydata: req.body, //we are getting this data in response in Postman--------body data while entering in body(postman)
    querydata: req.query, // entering in query
  });
});

// params
server.get("/dynamic/:idss", (req, res)=>{
    let currentId= req.params.idss
    res.send(`testing route dynamic params ${currentId}`)    //what ever param u write on browser it will come under currentId
    // res.send(`calling without variable params----- ${req.params.idss}`)
})

server.listen(7000);
