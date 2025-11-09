let express = require("express");
const { dbConnection } = require("./dbconnection");
const { ObjectId } = require("mongodb");

let app = express();

app.use(express.json()); //data will be in the form of json

// -----------------------------------------------------------------------------------------------------------
app.get("/student-read", async (req, res) => {
  let mydb = await dbConnection();
  let studentCollections = mydb.collection("students");

  resData = await studentCollections.find().toArray();

  let objRes = {
    status: 1,
    msg: "data recieved",
    resData,
  };
  res.send(objRes);
});

// ------------------------------------------------------------------------------------------------------------
app.post("/student-insert", async (req, res) => {
  let mydb = await dbConnection();
  let studentCollections = mydb.collection("students");

  // let obj= {
  //     name: req.body.name,
  //     age: req.body.age
  // }

  let { name, age } = req.body;

  let obj = { name, age };
  console.log(obj);

  //if user with already inserted age is already present to avoid duplicacy
  let existingStudentAge = await studentCollections.findOne({ age });

  if (existingStudentAge) {
    res.send({
      status: 0,
      msg: `${age} user already exist with same age`,
    });
    return;
  }

  let insertRes = await studentCollections.insertOne(obj);

  let objRes = {
    status: 1,
    msg: "data inserted",
    insertRes,
  };

  // res.send("student-insert")
  res.send(objRes);
});

// -----------------------------------------------------------------------------------------------------------
app.delete("/student-delete/:id", async (req, res) => {
  //using dynamic params to dlt
  // let id = req.params.id;
  let { id } = req.params;
  let myDb = await dbConnection();
  let studentCollections = myDb.collection("students");

  let delRes = await studentCollections.deleteOne({ _id: new ObjectId(id) });

  let objRes = {
    status: 1,
    msg: "deleted",
    delRes,
  };

  res.send(objRes);
});


// -----------------------------------------------------------------------------------------------------------
app.put("/student-update/:id", async (req, res)=>{
  let { id } = req.params; //where locates throug id
  let { name, age } = req.body;  //data

  let obj = {};

  if (age !== "" && age !== undefined && age !== null) {
    obj["age"] = age; //object property access
    // obj.age =age
  }

  if (name !== "" && name !== undefined && name !== null) {
    obj["name"] = name; //object property access
    // obj.name =name
  }

  let mydb = await dbConnection();
  let studentCollections = mydb.collection("students");

  let UpdateRes = await studentCollections.updateOne(
    {_id: new ObjectId(id)},{ $set: obj });
  //  _id: new ObjectId(id)}, {$set:{name:name, age}});   // if same in obj, then only name or age can also be written

  let objRes = {
    status: 1,
    msg: "updated",
    UpdateRes,
  };

  res.send(objRes);
})

app.listen("5000");
