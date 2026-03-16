let express = require("express");
let mongoose = require("mongoose");
let dotenv = require("dotenv");
let cors= require("cors")
const enquiryRouter = require("./App/routes/web/enquiryRoutes");

dotenv.config();
let app = express();
app.use(express.json())
app.use(cors()) // so that api can work easily in frontend

app.use("/api/website/enquiry", enquiryRouter)

// connect to mongoDB
mongoose.connect(process.env.DBURL).then(() => {
  console.log("mongodb is connected");
  app.listen(process.env.PORT || 3000, () => {
    console.log("server is running");
  });
}).catch((err)=>{
    console.log("error", err);
    
})
