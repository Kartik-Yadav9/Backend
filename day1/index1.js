// const add = require("./cart");

const { add,dlt, named, test } = require("./cart");    //for multiple exports

console.log("using commonjs file");

console.log(add());
console.log(dlt());
console.log(named);
console.log(test(2,3));



