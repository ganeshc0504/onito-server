const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/onito"

mongoose.connect(url,(err)=>{
    if(err) console.log("could not connected to db",err);
    else console.log("connected to db");
});

const conn = mongoose.connection;

conn.on("connected",()=>{
    console.log("connected to db");
})

conn.on("disconnected",()=>{
    console.log("disconnected from db");
})

conn.on("error",()=>{
    console.log("could not connected to db");
})
