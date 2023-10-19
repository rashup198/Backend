const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 100
    },
    body: {
        type: String,
        required: true,
        maxlength: 1000
    },
    likes:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Like'
    }],
    Comments:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
});

module.exports = mongoose.model('Post', PostSchema);