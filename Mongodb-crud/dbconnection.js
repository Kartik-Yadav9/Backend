const {MongoClient}= require("mongodb")

let dbConnectionUrl = "mongodb://localhost:27017"; //https://www.npmjs.com/package/mongodb
// let dbConnectionUrl = "mongodb://127.0.0.1:27017";  incase localhost dont work

const client = new MongoClient(dbConnectionUrl); //making connection 

let dbConnection= async()=>{  //bring promise that's why using async await
    await client.connect()  //connecting client
    let db= client.db("mongodbfile") //making/mentioning db
    return db //will return where ever it will be used
}

module.exports= {dbConnection}