let mongoose= require("mongoose")

let userDataSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique:true
  },
  number: {
    type: String,
    require: true,
  },
  age: {
    type: String,
    require: true,
  },
});

let userModel= mongoose.model("user", userDataSchema)
module.exports= userModel