let express = require("express");
let mongoose = require("mongoose");
let dotenv = require("dotenv");
let app = express();

dotenv.config();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
  console.log(req.body);
});

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("mongodb connected");

    app.listen(process.env.PORT || 3000, () => {
      console.log("port is running");
    });
  })
  .catch((err) => console.log(err));
