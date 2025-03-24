let express= require('express')

let server= express()
let port = 4000

server.get('/',(req, res)=>{
    res.end('home')
})

server.get('/about',(req, res)=>{
    res.end('about us')
})

server.get('/blog', (req, res)=>{
    res.end('blog page')
})

server.listen(port, function(){
    "server started"
})