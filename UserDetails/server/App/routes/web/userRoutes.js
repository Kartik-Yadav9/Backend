let express = require("express");
const {
  insert,
  list,
  dlt,
  update,
  findData
} = require("../../controllers/web/UserController");
let userRoutes = express.Router();

userRoutes.post("/insert", insert);

userRoutes.get("/list", list);

userRoutes.delete("/delete/:id", dlt);

userRoutes.get("/find/:id", findData)

userRoutes.put("/update/:id", update);

module.exports = userRoutes;
