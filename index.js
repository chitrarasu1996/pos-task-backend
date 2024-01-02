require("dotenv").config()
const cors=require("cors")
const express=require("express")
const db=require("./db/connect")

const app=express();

const port=process.env.PORT;

const productRoutes=require("./routes/products.routes")
const userRoutes=require("./routes/user.routes")
const offersRoutes=require("./routes/offers.routes")
const ordersRoutes=require("./routes/order.routes")
db()
app.use(express.json())
app.use(cors())
app.use("/products",productRoutes)
app.use("/users",userRoutes)
app.use("/offers",offersRoutes)
app.use("/orders",ordersRoutes)
app.get("/",(req,res)=>{
res.status(200).send({message:"pos-task"})
})
app.listen(port,()=>{
console.log(`${port} is running`)
})


