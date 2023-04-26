// npm i express body-parser cors dotenv mongoose mongoose-sequence

const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')

require("dotenv").config();


const mongoose = require("mongoose")
mongoose.set("strictQuery",true)
require("./v1/models/db")

const app = express();
const port = process.env.PORT || 8888

app.use(cors())
app.use(bodyparser.json())

app.use("/",require("./v1/route/user.route"));

// start server
app.listen(port,()=>{
    console.log(`Server is listening on ${port}`);
}); 
