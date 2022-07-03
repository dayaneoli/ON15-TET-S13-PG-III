const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    filmId: mongoose.Schema.Types.ObjectId,
    prizes: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    },

});

module.exports = mongoose.model('tag', tagSchema);