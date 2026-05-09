let express = require("express");
const {
  insert,
  list,
  dlt,
  update,
  findData,
} = require("../../controllers/web/UserController");
const authenticate = require("../../middleware/authMiddleware");
let userRoutes = express.Router();

//Protect all routes
userRoutes.use(authenticate);

userRoutes.post("/insert", insert);

userRoutes.get("/list", list);

userRoutes.delete("/delete/:id", dlt);

userRoutes.get("/find/:id", findData);

userRoutes.put("/update/:id", update);

module.exports = userRoutes;
