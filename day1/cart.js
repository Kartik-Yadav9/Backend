let add=()=>{
    return "added"
}

let dlt=()=>{
    return 'deleted'
}

function test(a,b){
    return a+b
}

let named= 203

// module.exports = add;           //default export
module.exports= {add, dlt, named, test}         //named export