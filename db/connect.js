const mongoose=require("mongoose");
const Mongo_url=process.env.MONGO_URL
const db=async()=>{
    try {
        const connect=await mongoose.connect(Mongo_url)
        console.log("db is connected")
    } catch (error) {
        console.log(error)
    }
}

module.exports=db