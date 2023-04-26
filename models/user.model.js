const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    personalDetails:{
        userId: Number,
        name: String,
        mobile: {type: String, unique: true, required:true},
        age:Number,
        sex: String,
        govIdType:String,
        govIdNumber:String,
    },
    contactDetails:{
        guardianDetails: String,
        guardianName: String,
        email:String,
        emergancyNumber:String,
    },
    address:{
        address:String,
        state:String,
        city:String,
        country:String,
        pincode:Number,
    },
    otherDetails:{
        occupation:String,
        religion:String,
        marital:String,
        bloodGroup:String,
        nationality:String,
    }
})

module.exports = mongoose.model("User",userSchema,"users")
