global.foodData = require('./db')(function call(err, data, CatData) {
    // console.log(data)
    if(err) console.log(err);
    global.foodData = data;
    global.foodCategory = CatData;
  })




const express = require("express");
const app = express();
const port=5000;
const mongoDb=require("./db")

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

app.use(express.json())
mongoDb();
app.get('/',(req,res)=>{
    res.send("hello world")
})
app.use('/api/food', require('./routes/createUser'));
app.listen(port,()=>{
    console.log("running")
})