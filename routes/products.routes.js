const express=require("express");
const { addProducts, getAllProducts} = require("../controller/products.controller");

const router=express.Router();


router.post("/add-products",addProducts)
router.get("/get-allProducts",getAllProducts)

module.exports=router