const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const hotelSchema = new Schema({
    hotelNumber: {
        type: String,
        required: true
    },
    hotelName: {
        type: String,
        required: true
    },
    hotelDescription: {
        type: String,
    },
    hotelLocation: {
        type: String,
        required: true
    },
    hotelAddress: {
        type: String,
        required: true
    },
    hotelImage: {
        type: String,
        required: true
    },
    breakfast: {
        type: Number,
    },
    meal: {
        type: Number,
    },
    gym: {
        type: Number,
    },
    pool: {
        type: Number,
    },
    parking: {
        type: Number,
    },
    hotelCharge: {
        type: Number,
    },
    weekendCharge: {
        type: Number,
    },
    holidayCharge: {
        type: Number,
    },
    seasonCharge: {
        type: Number,
    },
    extraGuestCharge:{
        type: Number,
    }

}, {
    timestamps: true,
});

const hotelModel = mongoose.model('Hotel', hotelSchema);

module.exports = hotelModel;
