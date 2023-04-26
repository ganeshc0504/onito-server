const router = require("express").Router();

const {createUser,fetchAllUser}= require("../controller/user.controller")

router.post("/", createUser)// create user
router.get("/",fetchAllUser)// fetch all user

module.exports = router;

