const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
require('dotenv').config();

const fileSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        
    },
    tags:{
        type:String,
        
    },
    email:{
        type:String,   
    },
})  

//post middelware
fileSchema.post("save",async function(doc){
    try {
        console.log("doc",doc);
        //trasporter
        let transporter = nodemailer.createTransport({
        host:process.env.MAIL_HOST,
        auth:{
            user:process.env.MAIL_USER,
            pass:process.env.MAIL_PASS,
        },
        })
        //send mail
        let info = await transporter.sendMail({
            from:"'Priyanshu' <rashup198@gmail.com>",
            to:doc.email,
            subject:`Hello ${doc.name}! File uploaded successfully`,
            html:`<h1>hello ${doc.name}</h1> <h1>File uploaded successfully</h1> view your file here <a href=${doc.imageUrl}>click here</a>`
        })
        console.log(info);

        } catch (error) {
        console.log(error);
    }
})
module.exports = mongoose.model('File', fileSchema);