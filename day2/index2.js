let http= require('http')

let server= http.createServer((req,res)=>{
    res.end("<h1>it starts with us</h1>")
})

server.listen(5000)
//  http://localhost:5000