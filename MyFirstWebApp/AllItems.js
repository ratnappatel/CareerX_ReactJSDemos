const exp=require('express');
const app=exp();
const mongoose=require('mongoose');
const MyModel=mongoose.model('Item',
new mongoose.Schema({item: String, price:Number, quantity:Number, date: Date }));

mongoose.connect('mongodb://localhost:27017/groceryDB')
    .then(()=>console.log('Connected To Grocery DB'));

    const result=MyModel.find({});

app.get('/items',(req,res)=>{
    res.send("Items retrieved");
})

app.listen(3004,()=>{
    console.log('Server Started Listening on port 3004')
})