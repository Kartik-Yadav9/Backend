const { error } = require('console');
let fileS= require('fs')


// Define the correct folder and file path
const folderPath = __dirname + '/'

fileS.writeFile( folderPath + 'kartik.txt', 'this is type commonjs', ()=>{
    console.log('cjs');
    fileS.readFile(folderPath+ 'kartik.txt', (error, data)=>{
        console.log(`error: ${error}`);
        console.log(`data: ${data}`);
        
        
    })
    
})