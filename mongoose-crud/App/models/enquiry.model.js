let mongoose = require("mongoose");

let userEnquirySchema = mongoose.Schema({
  //schema is ready on the basis of this fields(table)--------------schema fields
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },
  number: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

//NOW MAKING MODEL
let enquiryModel= mongoose.model("enquiryData", userEnquirySchema) //Mongoose takes the model name ("enquiry") as a collection and schema as fields
module.exports = enquiryModel
