//--------------Route Middleware Paticular---------------
require("dotenv").config()            //.config() is used to run the file
let express= require("express")
const { checkToken } = require("./routelvlMiddleware")

let app= express()

app.get("/", (req,res)=>{                              //http://localhost:8000/
  res.send("second home");
})
 
app.get("/about",checkToken, (req,res)=>{          //http://localhost:8000/about?token=12345, here token is required
  res.send("about");
})

// console.log(process.env);           how to check what is inside process


app.listen(process.env.Port || 8000);