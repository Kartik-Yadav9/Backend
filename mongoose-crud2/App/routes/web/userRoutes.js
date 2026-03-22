let express= require("express");
const { insertEnquiry, enquiryList, dltEnquiry, updateEnquiry} = require("../../controllers/web/userController");
let userRoute= express.Router()


userRoute.post("/enquiry-insert", insertEnquiry);
userRoute.get("/enquiry-view", enquiryList);
userRoute.delete("/enquiry-dlt/:id", dltEnquiry);
userRoute.put("/enquiry-update/:id", updateEnquiry);

module.exports= userRoute