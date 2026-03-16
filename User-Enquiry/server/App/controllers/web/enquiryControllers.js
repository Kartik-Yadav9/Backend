const { enquiryModel } = require("../../models/enquiryModel");

let enquiryInsert = (req, res) => {
  let { name, email, number, message } = req.body;
  let enquiry = new enquiryModel({
    name,
    email,
    number,
    message,
  });

  enquiry
    .save()
    .then(() => res.send({ status: "1", message: "data inserted" }))
    .catch((err) => res.send({ status: "0", message: "failed", err }));
};

let enquiryList = async (req, res) => {
  try {
    let list = await enquiryModel.find();
    res.send({ status: "1", list });
  } catch (err) {
    res.send({ status: "0", message: "failed", err });
  }
};

let enquiryDlt = async (req, res) => {
  let id = req.params.id;
  let enquiry = await enquiryModel.deleteOne({ _id: id });
  res.send({ status: "1", message: "deleted", enquiry });
};

let findOneEnquiry = async (req, res) => {
  let id = req.params.id;
  let enquiry = await enquiryModel.findOne({ _id: id });
  res.send({ status: "1", enquiry });
};

let updateOneEnquiry = async (req, res) => {
  let id = req.params.id;
  let { name, email, number, message } = req.body;
  let newObj = {
    name,
    email,
    number,
    message,
  };
  let updateRow= await enquiryModel.updateOne({_id:id}, newObj)
  res.send({ status: "1", updateRow});
};
module.exports = { enquiryInsert, enquiryList, enquiryDlt, findOneEnquiry, updateOneEnquiry};
