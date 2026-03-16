let express= require("express")
const { enquiryInsert, enquiryList, enquiryDlt, updateOneEnquiry, findOneEnquiry } = require("../../controllers/web/enquiryControllers")
let enquiryRouter= express.Router()

enquiryRouter.post("/insert", enquiryInsert)

enquiryRouter.get("/list", enquiryList)

enquiryRouter.delete("/delete/:id", enquiryDlt)

enquiryRouter.get("/find/:id", findOneEnquiry)

enquiryRouter.put("/update/:id", updateOneEnquiry)

module.exports= enquiryRouter