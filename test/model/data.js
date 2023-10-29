const mongoose = require('mongoose');
const nodemailer = require('nodemailer');

const dataSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true,
    },
})




const Data = mongoose.model('Data',dataSchema);
