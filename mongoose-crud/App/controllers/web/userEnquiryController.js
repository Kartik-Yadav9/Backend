let insertQuery = (req, res) => {
  let { sName, sEmail, sNumber, sMessage } = req.body;

  // const enquiry = new enquiryModel({ name, email, number, message });
  let enquiry = new enquiryModel({
    name: sName,
    email: sEmail,
    number: sNumber,
    message: sMessage,
  });
  enquiry
    .save()
    .then(() => {
      res.send({ status: 1, message: "data saved" });
    })
    .catch((err) => {
      res.status(400).send({
        status: 0,
        message: "error duplicate",
        error: err,
      });
    });
};




let queryList = async (req, res) => {
  let dataList = await enquiryModel.find();
  res.status(200).json({
    status: 1,
    message: "user-list",
    data: dataList,
  });
};

let deleteQuery = async (req, res) => {
  let deleteId = req.params.id;
  let deletedQuery = await enquiryModel.deleteOne({ _id: deleteId });
  res.send({ status: 1, message: "query deleted", delRes: deletedQuery });
};

let updateQuery = async (req, res) => {
  let updateId = req.params.id;
  let { sName, sEmail, sNumber, sMessage } = req.body;
  let updateObj = {
    name: sName,
    email: sEmail,
    number: sNumber,
    message: sMessage,
  };
  let updateRes = await enquiryModel.updateOne(
    { _id: updateId },
    { $set: updateObj }
  );
  res.status(200).send({ status: 1, message: "updated", updateRes });
};

module.exports= {insertQuery, queryList, deleteQuery, updateQuery}