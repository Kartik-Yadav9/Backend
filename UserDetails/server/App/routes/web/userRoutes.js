let express= require("express")
const { insert } = require("../../controllers/web/UserController")
let userRoutes= express.Router()

userRoutes.post("/insert", insert)

module.exports= userRoutes