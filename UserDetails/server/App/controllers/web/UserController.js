const { response } = require("express");
const UserModel = require("../../models/UserModel");
const e = require("express");

let insert = async (req, res) => {
  try {
    let { name, email, number, message } = req.body;

    if (!name || !email || !number || !message) {
      return res.status(400).json({ status: 0, msg: "all field required" });
    }

    let data = new UserModel({
      name: name,
      email: email,
      number: number,
      message: message,
    });
    let saveRes = await data.save();
    res.status(200).json({ status: 1, msg: "data saved", savedData: saveRes });
  } catch (err) {
    res.status(500).json({ status: 0, msg: "data not saved", error: err });
  }
};


//=====================list
let list= async(req, res)=>{
try{
  let listRes= await UserModel.find()
  res.status(200).json({status:1, msg:"list viewed", list: listRes})
}catch(err){
  res.status(500).json({ status: 0, msg: "error", error:err });

}
}


// ================delete
let dlt= async(req,res)=>{
try{
  let userId= req.params.id
  let delRes= await  UserModel.deleteOne({_id:userId})
  res.status(200).json({status:1, msg:"deleted", dleted:delRes})
}catch(err){
res.status(200).json({ status: 1, msg: "not deleted",error: err });
}
}

//================find
let findData=async(req, res)=>{
  try{
    let id= req.params.id
    let updateRow= await UserModel.findOne({_id:id})
    res.send({ status: 1, msg: "found",row:updateRow})
  }catch(err){
res.send({ status: 0, msg: "not found", error:err});
  }
}


//==================update
let update= async(req, res)=>{
  try{
    let {name, email, number, message}= req.body
    let {id}= req.params
    let newObj= {
      name,
      email,
      number,
      message
      // name:name,
      // email:email,
      // number: number,
      // message:message
    }
    let updateRes= await UserModel.updateOne({_id:id}, {$set:newObj})
    res.status(200).json({status:1, message:"updated", updated:updateRes})
  }catch(err){
res.status(500).json({status:0, message:"not updated"})
  }
}

module.exports = { insert, list, dlt, findData, update};
