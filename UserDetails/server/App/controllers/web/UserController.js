const UserModel = require("../../models/UserModel");

let insert = async (req, res) => {
  try {
    let { sName, sEmail, sNumber, sMessage } = req.body;

    if (!sName || !sEmail || !sNumber || !sMessage) {
      res.status(400).json({ status: 0, msg: "all field required" });
    }

    let data = new UserModel({
      name: sName,
      email: sEmail,
      number: sNumber,
      message: sMessage,
    });
    let saveRes = await data.save();
    res.status(200).json({ status: 1, msg: "data saved", savedData: saveRes });
  } catch (err) {
    res.status(500).json({ status: 0, msg: "data not saved", error: err });
  }
};

module.exports = { insert };
