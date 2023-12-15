require("dotenv").config();
const express = require("express");
const app =  express();
const connectDB = require("./db/connect");

const PORT = process.env.PORT || 3000;

const product_routes = require("./routes/product");

app.get("/",(req,res)=>{
    res.send("Hi,i am live");
});

//middleware
app.use("/api/products", product_routes)

const start = async () =>{
    try{
      await connectDB(process.env.MONGODB_URL);
      app.listen(PORT, () =>{
console.log(`${PORT} YES I AM CONNECTED`);
      });
} catch (error) {
    console.log(error);
}
};

start()