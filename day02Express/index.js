let express = require("express");
require("dotenv").config()
const { checkToken } = require("./checkTokenMiddleware");

let app = express();
// let token = "1221";
let password = "kartik";
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome express");
});

// let checkToken = (req, res, next) => {
//   if (req.query.token === undefined || req.query.token === "") {
//    return res.send({ status: 0, data: "no" });
//   } else if (req.query.token !== token) {
//    return res.send({ status: 0, data: "no" });
//   }

//   next();
// };

// app.use(checkToken);
// app.use((req, res, next) => {
//   if (req.query.pass === undefined || req.query.pass === "") {
//    return res.send({ status: 0, data: "no pass" });
//   } else if (req.query.pass !== password) {
//    return res.send({ status: 0, data: "no pass" });
//   }
//   next();
// });

app.get("/about",checkToken, (req, res) => {
  let obj = {
    status: 1,
    data: { name: "kartikn" },
  };
  res.send(obj);
});

app.get("/about/:id", (req, res) => {
  let currentId = req.params.id;
  res.send("hello" + currentId);
});
//route level middleware
app.post("/login", (req, res) => {
  console.log(req.body);
  console.log(req.query);

  res.send({
    status: 1,
    post: "created",
    //=========================body api====================================================
    bodydata: req.body,
    //================query api, mainly seacrhing, http://localhost:4000/login?userid=kartik@&pswd=11223344==========================================
    queyData: req.query,
  });
});

//   ALTERNATE
// res.status(200).json({
//   status: 1,
//   post: "created",
//   bodydata: req.body,
//   queyData: req.query,
// });

app.listen(process.env.PORT || 5000);
