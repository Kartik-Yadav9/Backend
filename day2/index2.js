let http= require('http')

let server= http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end("<h1>it starts with us</h1>")
    }

    if(req.url=== '/about'){
        let me={
            name:'kartik',
            age:25
        }
        res.end(JSON.stringify(me))
    }

    if(req.url === '/contact'){
        res.end("9682061221")             //res.end() expects a string or buffer
    }
})

server.listen(9000)
// //  http://localhost:9000








