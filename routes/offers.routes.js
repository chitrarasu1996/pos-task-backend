const express=require("express");
const { createOffers, getAllOffers, createBundle } = require("../controller/offers.controller");
const router=express.Router();

router.post("/create-offers",createOffers)
router.get("/all-offers",getAllOffers)
router.post("/create-bundle-products/:productId",createBundle)
module.exports=router
