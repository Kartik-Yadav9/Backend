let express = require("express");
let mongoose = require("mongoose");
let dotenv = require("dotenv");
const userRoute = require("./App/routes/web/userRoutes");


dotenv.config();
let app = express();
app.use(express.json());

app.use("/api/user/", userRoute) //http://localhost:5000/api/user/ ---this is constant url
mongoose.connect(process.env.DB_URL).then(() => {
  console.log("mongodb connected");

  app.listen(process.env.PORT || 2000, () => {
    console.log(`running on port ` + process.env.PORT);
  });
});
