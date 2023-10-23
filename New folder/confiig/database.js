const mongoose= require('mongoose');
require("dotenv").config();

exports.connect=()=>{
    mongoose.connect(process.env.MONGO,
        {useNewUrlParser:true,
         useUnifiedTopology:true
        }).then(()=>{
            console.log("Connected to database");
        }).catch((err)=>{
            console.log("Error connecting to database",err);
            process.exit();
        });
}