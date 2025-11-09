let express = require("express");
const mongoose = require("mongoose");
let dotenv = require("dotenv");
// const enquiryModel = require("./App/models/enquiry.model");
const { insertQuery, queryList, deleteQuery, updateQuery } = require("./App/controllers/web/userEnquiryController");
dotenv.config(); // cofig to use it

//connect to Mongodb

let app = express();
app.use(express.json());
//--------------------------------------------POST---------------------------------------------------------------------------
app.post("/api/insert-query", insertQuery);
                                            //  {
                                            //     "sName":"kartik",
                                            //     "sEmail": "a@gmail.com",
    //use this in body of postman           //     "sNumber": "983372",
                                            //     "sMessage": "hi"
                                            // }


//--------------------------------------------GET---------------------------------------------------------------------------
app.get("/api/query-data", queryList)

//--------------------------------------------Delete---------------------------------------------------------------------------
app.delete("/api/delete-query/:id", deleteQuery)

//--------------------------------------------Update---------------------------------------------------------------------------
app.put("/api/update-query/:id", updateQuery)

mongoose
  .connect(process.env.DBURL)
  .then(() => console.log("connected to mongodb"));

app.listen(process.env.PORT, () => {
  console.log("server is running on port", process.env.PORT);
});
