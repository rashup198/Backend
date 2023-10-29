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
        type:Number
    },
})

dataSchema.post('save',async function(doc){

    try {
        console.log(doc);
        // create a transporter which will connect to the smtp server
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIl_PASS
            }
        })
        let info = await transporter.sendMail({
            from: "Dummy ",
            to: doc.email,
            subject: "Dummy",
            html: `<h1>hello</h1> <h2>your details are saved</h2>
            <p>name:${doc.name}</p>
            <p>email:${doc.email}</p>
            <p>phone:${doc.phone}</p>
            `
        })  
        console.log(info);
    } catch (error) {
       console.log(error); 
    }
})

module.exports= mongoose.model('data',dataSchema);
