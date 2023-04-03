// Main entry point of our web-application

const express=require('express');
const bodyParser=require('body-parser');
// Driver module for Mongodb Connec support
const mongoose=require('mongoose');

//Create Definition of an Object[MongoDB Document] which is getting retrieved from DB
const ItemSchema=mongoose.Schema({
    item: String,
    price: Number,
    quantity:Number,
    date: Date
});

const item=mongoose.model('Item',ItemSchema);

//Creating New WebApplication as Middleware
const app=express();

// Connect to MongoDB Database
mongoose.connect('mongodb://localhost:27017/groceryDB',{useNewUrlParser:true})
.then(()=>{
    console.log('DB Connected Successfully.')
})
.catch(()=>{
    console.log('Could not Connect to DB..');
    process.exit();
})

//extended=true==> accept data as Array/Objects only
app.use(bodyParser.urlencoded({extended:true}))

//parse requests of content-type = application/json
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.json({"message": 'Welcome to ToDo Application Development'});
})

//Get All Item ==> Read
app.get('/items',(req,res)=>{
    item.find().then(items=>{
        res.send(items);
    }).catch(err=>{
        res.status(500).send({message:"Data Could not retrieved.."})
    })
})

app.get('/items/:itemId',(req,res)=>{
    var id=req.params.itemId;
    // To Find by MongoDB assigned ObjectID
     item.findById(id).then(result=>{
        res.send(result);
    }).catch(err=>{
        res.status(500).send({message:"Could not Find Data"})
    }) 
})

// Add new Item  ==> Create
app.post('/items',(req,res)=>{
   // console.log(req.body);
    if(!req.body)
        return res.status(400).send({
            message:"Item Content are missing"
        });
        const data=new item({
            item:req.body.item ||'Undefined Item',
            price:req.body.price || 0,
            quantity:req.body.quantity|| 0,
            date:req.body.date || new Date()
        })
        data.save()
        .then(d=>{
            res.send(d);
        })
        .catch(err=>{
            res.status(500).send({
                message:"Could not save Item.."
            })
        });
})

app.put('/items/:itemId',(req,res)=>{
    if(!req.body)
        return res.status(400).send({
            message:"Item Content are missing"
        });
        // Without fail Create simple JSON-Object for modified values.
        const data={
            item:req.body.item ||'Undefined Item',
            price:req.body.price || 0,
            quantity:req.body.quantity|| 0,
            date:req.body.date || new Date()
        }
        var id=req.params.itemId;
        item.findByIdAndUpdate(id,data,{new:true,upsert:true}).then(updatedItem=>{
           res.status(200).send(updatedItem)
        })
        .catch(err=>{
            res.status(500).send({message:err})
        })
})


app.delete('/items/:itemId',(req,res)=>{
    var id=req.params.itemId;
    item.findByIdAndDelete(id,{new:true,upsert:true}).then(()=>{
        res.status(200).send('Item Deleted Successfully..')
     })
     .catch(err=>{
         res.status(500).send({message:err})
     })
})


app.listen(3004,()=>{
    console.log('Server is Listening on port 3004');
})