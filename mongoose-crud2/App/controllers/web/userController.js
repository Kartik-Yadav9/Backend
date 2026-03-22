const userModel = require("../../models/user.model");

let insertEnquiry = (req, res) => {
  const { sName, sEmail, sNumber, sAge } = req.body;
  console.log(sName, sEmail, sNumber, sAge);

  let enquiry = new userModel({
    name: sName,
    email: sEmail,
    number: sNumber,
    age: sAge,
  });
  enquiry
    .save()
    .then(() => {
      res.send({ status: 1, message: "data sended successfully" });
    })
    .catch((err) => {
      res.send({ status: 0, message: "error", err });
    });
};

//-------------------------------
let enquiryList= async (req, res) => {
  try {
    let viewRes = await userModel.find();
    res.status(200).json({ status: 1, data: viewRes });
  } catch (err) {
    res.status(500).json({ status: 0, msg: "error", err });
  }
}
//--------------------------------
let dltEnquiry = async (req, res) => {
  try {
    let id = req.params.id;
    let delRes = await userModel.deleteOne({ _id: id });
    res.status(200).json({ status: 1, msg: "data deleted", id: delRes });
  } catch (err) {
    res.status(500).json({ status: 0, message: "error", err });
  }
};
//--------------------------------

let updateEnquiry = async (req, res) => {
  try {
    const { sName, sEmail, sNumber, sAge } = req.body;
    let updateId = req.params.id;
    let updateObj = {
      name: sName,
      email: sEmail,
      number: sNumber,
      age: sAge,
    };
    let updateRes = await userModel.updateOne({ _id: updateId }, updateObj);
    res.status(200).json({
      status: 1,
      message: "updated successfully",
      updatedObj: updateRes,
    });
  } catch (err) {
    res.status(500).json({
      status: 0,
      message: "error",
      err,
    });
  }
};


module.exports= {insertEnquiry, enquiryList, dltEnquiry, updateEnquiry}