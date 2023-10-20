const mongoose = require('mongoose');

require("dotenv").config();

const connect = () => {
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log('MongoDB connected to the server');
    })
    .catch((err)=>{
        console.log(err);
    });
}

module.exports = {connect};