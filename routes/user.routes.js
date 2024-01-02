const express=require("express");
const { registerUser,loginUser } = require("../controller/user.controller");


const router=express.Router();

router.post("/create-user",registerUser)
router.post("/login-user",loginUser)
module.exports=router