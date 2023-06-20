const mongoose = require("mongoose");

module.exports= async function(callback){
    try {
  
  await mongoose.connect('mongodb://127.0.0.1:27017/food',{useNewUrlParser: true});
  if(mongoose.connection.readyState===1){
    console.log("connected to db")

    const foodCollection = await mongoose.connection.db.collection("items");

 foodCollection.find({}).toArray().then((data)=>{
  const foodCat =  mongoose.connection.db.collection("category");
  foodCat.find({}).toArray().then((catData)=>{
    global.foodData=data
    global.foodCategory=catData
  })
   
  })

   
   
      
        // const categoryCollection = await mongoose.connection.db.collection("category");
        // categoryCollection.find({}).toArray(async function (err, Catdata) {
        //   global.foodData=data
        //   global.foodCategory=Catdata
        //     callback(err, data, Catdata);
        // }
   
    
  }
}
      catch (error) {
        console.log(error)
      }
  
    
    }

