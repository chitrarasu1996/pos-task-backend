
const express=require("express");
const { orderProduct, gettingAllOrders } = require("../controller/orders.controller");
const router=express.Router();
router.get("/get-all-orders",gettingAllOrders)
router.post("/orders-details",orderProduct)
module.exports=router