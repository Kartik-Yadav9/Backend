let express = require("express");
let app = express();
let mongoose = require("mongoose");
let cors = require("cors");
const userRoutes = require("./App/routes/web/userRoutes");
const cookieParser = require("cookie-parser");
const authRoutes = require("./App/routes/web/authRoutes");
require("dotenv").config();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000"], //-------------Only allow this frontend
    credentials: true, //---------------------------Allow cookies to be sent for authentication
    // methods: ["GET", "POST", "PUT", "DELETE"],
    // allowedHeaders: ["Content-Type", "Authorization"], //Allowed request headers
  })
);
app.use("/website/api/auth/", authRoutes); // Auth routes first (no middleware)
app.use("/website/api/", userRoutes);

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
