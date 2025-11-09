let http= require("http");
const { json } = require("stream/consumers");

let server= http.createServer((req,res)=>{
    if(req.url === "/a"){
        res.end("a");
    }
    if(req.url === "/contact"){
        res.end("contac");
    }

    if(req.url=== "/json"){
        let obj= {
            id:1,
            name:"kartik",
            age: 26
        }
        res.end(JSON.stringify(obj))
    }
    else{
        res.end("welcome 22");
    }
})

server.listen(1000)