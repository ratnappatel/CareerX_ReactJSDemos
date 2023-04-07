// Main entry point of our web-application

const express=require('express');
const bodyParser=require('body-parser');
// Driver module for Mongodb Connec support
const mongoose=require('mongoose');
const cors=require('cors');

//Create Definition of an Object[MongoDB Document] which is getting retrieved from DB
const FruitSchema=mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    name: String,
    quantity:Number,
    price:Number,
    imageUrl:String
});

const fruit=mongoose.model('Fruit',FruitSchema);

//Creating New WebApplication as Middleware
const app=express();

//allow any domain URL to communicate 
app.use(cors());

// Connect to MongoDB Database
mongoose.connect('mongodb://localhost:27017/store',{useNewUrlParser:true})
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


//Get All Item ==> Read
app.get('/fruits',(req,res)=>{
    console.log('In get All Request.')
    fruit.find().then(fruits=>{
        res.send(fruits);
    }).catch(err=>{
        res.status(500).send({message:"Data Could not retrieved.."})
    })
})

app.get('/fruits/:fruitId',(req,res)=>{
    var id=req.params.fruitId;
    // To Find by MongoDB assigned ObjectID
     fruit.findById(id).then(result=>{
        res.send(result);
    }).catch(err=>{
        res.status(500).send({message:"Could not Find Data"})
    }) 
})

// Add new Item  ==> Create
app.post('/fruits',(req,res)=>{
   console.log(req.body);
    if(!req.body)
        return res.status(400).send({
            message:"Item Content are missing"
        });
        const data=new fruit({
            name:req.body.name ||'Undefined fruitName',
            price:req.body.price || 0,
            quantity:req.body.quantity|| 0,
            imageUrl:req.body.imageUrl || ''
        })
        console.log(data);
        data.save()
        .then(d=>{
            res.send(d);
        })
        .catch(err=>{
            res.status(500).send({
                message:err
            })
        });
})

app.put('/fruits/:fruitId',(req,res)=>{
    if(!req.body)
        return res.status(400).send({
            message:"Item Content are missing"
        });
        // Without fail Create simple JSON-Object for modified values.
        const data={
            name:req.body.name ||'Undefined fruitName',
            price:req.body.price || 0,
            quantity:req.body.quantity|| 0,
            imageUrl:req.body.imageUrl || ''
        }
        var id=req.params.fruitId;
        fruit.findByIdAndUpdate(id,data,{new:true,upsert:true}).then(updatedItem=>{
           res.status(200).send(updatedItem)
        })
        .catch(err=>{
            res.status(500).send({message:err})
        })
})
app.delete('/fruits/:fruitId',(req,res)=>{
    var id=req.params.fruitId;
    fruit.findByIdAndDelete(id,{new:true,upsert:true}).then(()=>{
        res.status(200).send('Fruit Deleted Successfully..')
     })
     .catch(err=>{
         res.status(500).send({message:err})
     })
})

app.listen(4000,()=>{
    console.log('Server is Listening on port 4000');
})