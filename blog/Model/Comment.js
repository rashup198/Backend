const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    titel:{
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    }
    ,comment: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
    
});

module.exports = mongoose.model('Comment', commentSchema);