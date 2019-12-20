const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    foods: [{
        food: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Food',
        }
    }],
    address: {
        type: String,
        required: true,
        trim: true,
    },
    delivered: {
        type: Boolean,
        default: false,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
}, {
    timestamps: true,
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
