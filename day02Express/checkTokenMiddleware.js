// require("dotenv").config();
let token = process.env.MY_TOKEN;

let checkToken = (req, res, next) => {
  if (req.query.token === undefined || req.query.token === "") {
    return res.send({ status: 0, data: "no" });
  } else if (req.query.token !== token) {
    return res.send({ status: 0, data: "no" });
  }

  next();
};
module.exports = { checkToken };
