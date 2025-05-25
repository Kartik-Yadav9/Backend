const { name } = require("./typeCjsCart");
const { multiply, add } = require("./typeCjsCart");          //named import
// const add = require("./typeCjsCart");                     //deault import

console.log("hii");

let names=()=>{
    return "Kartik Y"
}
let b= console.log(`My name is ${names()}`);



//foreach

// let ad= [11, 22, 33, 44]

// let ans=0
// ad.forEach(function(array, index){
//  ans=array+2
//  console.log(`ans: ${ans} index:${index}`);
// })







// CJS Import

// console.log(add());
// console.log(name);
// console.log(multiply());






// https

let http = require("http");
let server = http.createServer((req, res) => {

    if(req.url=="/about"){
        res.end("about")
    }

    if(req.url=="/documents"){
        let a= [
            {
                name:"kartik",
                age:"25"
            },
            {
                name:"nalin",
                age: "12"
            }
        ]

        res.end(JSON.stringify(a))
    }

  res.end("this is me");
});

server.listen("5000");

