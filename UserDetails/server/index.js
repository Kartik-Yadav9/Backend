let express = require("express");
let app = express();
let mongoose = require("mongoose");
let cors= require("cors")
const userRoutes = require("./App/routes/web/userRoutes");
require("dotenv").config();

app.use(express.json())
app.use(cors())
app.use("/website/api/", userRoutes)

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("db has been connected");
    app.listen(process.env.PORT, () => {
      console.log(`server is running on port ${process.env.PORT} `);
    });
  })
  .catch((err) => {
    console.log("db not connected", err);
  });
