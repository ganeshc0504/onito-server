const UserModel = require("../models/user.model")

class UserCtrl {
    static createUser(req,res){
        const user = req.body;

        if(!user.email) return res.status(500).send({message:"user email is required", error: null});

        new userModel(user)
        .save()
        .then(result=>{
            res.status(201).send({message: "User is Created", data: result})
        })
        .catch((err)=>{
            console.log(err);
            res.status(500).send({message: "User is Not Created", error: err})
        })

    }// createUser

    static fetchAllUser(req,res){
        UserModel
        .find()
        .then(result=>{
            res.status(200).send({message: "all users", data: result})
        })
        .catch(err=>{
            res.status(404).send({message: "not available", error: err})
        })
    }// fetch All users

}

module.exports = UserCtrl
