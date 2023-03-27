const exp=require('express');
const app=exp();

app.get('/',(req,res)=>{
    res.send('Hello From My First WebApplication');
});

app.get('/welcome',(req,res)=>{
    res.send('GET with /welcome uri..');
});

app.post('/', (req,res)=>{
    res.send('POST Request Received')
});

app.put('/', (req,res)=>{
    res.send('PUT Request Received')
});

app.delete('/', (req,res)=>{
    res.send('DELETE Request Received')
});

app.listen(3004, ()=>{
    console.log('Server Started Listening on port 3004')
})