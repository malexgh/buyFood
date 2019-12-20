const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
    },
    place: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Place',
    },
}, {
    timestamps: true,
});

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;
