let express = require("express");
let mongoose = require("mongoose");
let dotenv = require("dotenv");
const userModel = require("./models/user.model");

dotenv.config();
let app = express();
app.use(express.json())


app.post("/api/enquiry-insert",(req, res)=>{

    const {sName, sEmail, sNumber, sAge}= req.body
    console.log(sName, sEmail, sNumber, sAge);
    
    let enquiry= new userModel({
        name: sName,
        email:sEmail,
        number: sNumber,
        age: sAge
    })
    enquiry.save().then(()=>{
        res.send({status:1, message:"data sended successfully"})
    }).catch((err)=>{
        res.send({ status: 0, message: "error", err });
    })


    
})
mongoose.connect(process.env.DB_URL).then(() => {
    console.log("mongodb connected")

  app.listen(process.env.PORT || 2000, () => {
    console.log(`running on port ` + process.env.PORT);
  })
});
