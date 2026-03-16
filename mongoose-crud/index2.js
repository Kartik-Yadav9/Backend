let express = require("express");
const mongoose = require("mongoose");
let dotenv = require("dotenv");
// const enquiryModel = require("./App/models/enquiry.model");
const { insertQuery, queryList, deleteQuery, updateQuery } = require("./App/controllers/web/userEnquiryController");
const enquiryRoutes = require("./App/routes/admin/enquiryRoutes");
dotenv.config(); // cofig to use it

//connect to Mongodb

let app = express();
app.use(express.json());

app.use("/api/enquiry", enquiryRoutes)
//new url to see list ........http://localhost:8000/api/enquiry/query-data 

mongoose
  .connect(process.env.DBURL)
  .then(() => console.log("connected to mongodb"));

app.listen(process.env.PORT, () => {
  console.log("server is running on port", process.env.PORT);
});
