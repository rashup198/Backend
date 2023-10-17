const express = require('express');
const mongoose = require('mongoose')
const app = express();

const port = 3000;

app.listen(port, ()=>{
    console.log(`Server running at port ${port}`);
})

//it is used to parse req.body in the express -> PUT or POST
const bodyParser = require('body-parser');
//parse json data and add it to the request.body obj
app.use(bodyParser.json());

app.get("/", (req,res)=>{
    res.send("hello how are you")
})

app.get('/app',(req,res)=>{
    res.send("hello from app route")
})

app.post('/api/car',(req,res)=>{
   const {
    name,brand
   }= req.body;
   console.log(name);
   console.log(brand);
   res.send("car data submited successfully")
})

mongoose
  .connect("mongodb://localhost:27017/erashu",{
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
  });
