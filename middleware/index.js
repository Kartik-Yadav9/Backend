let express = require("express");
let app = express();
let port = 7000;

//inbuilt middleware
app.use(express.json());
  
//---------------------------application level middleware------------------------------
const loggingMiddleware = (req, res, next) => {
  console.log("logging");
  next();
};

const authMiddleware = (req, res, next) => {
  console.log("authorization");
//   res.send("end it here");   it will now not go forward
  
  next();
};

const validationMiddleware = (req, res, next) => {
  console.log("validation");
  next();
};

app.use(loggingMiddleware);
app.use(authMiddleware)
app.use(validationMiddleware)

//---------------------------application level middleware------------------------------


app.get("/", (req, res) => {
  console.log(req.body);

  res.send("hello world");
});

app.listen(port, () => {
  console.log("port is running");
});
