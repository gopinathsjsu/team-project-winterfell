const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const roomSchema = new Schema({
    roomNumber: {
        type: String,
        required: true
    },
    hotelNumber: {
        type: String,
        required: true,
        ref: "hotels"
    },
    hotelId: {
        type: Schema.Types.ObjectId,
        ref: "hotels"  
    },
    type: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    description: {
        type: String,
    },
    typeCharge: {
        type: Number,
        required: true
    },
    roomBasePrice: {
        type: Number,
    },
    currentPrice: {
        type: Number,
    }
}, {
  timestamps: true,
});

const roomModel = mongoose.model("Room", roomSchema);

module.exports = roomModel;
