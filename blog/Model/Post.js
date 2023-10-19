const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },
    body: {
        type: String,
        required: true,
        trim: true,
        maxlength: 1000
    }
});

module.exports = mongoose.model('Post', PostSchema);