const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const roomType = new Schema({
    hotelId: {
        type: Schema.Types.ObjectId,
        ref: "hotels"  
    },
    type: {
        type: String,
        required: true
    },
    image: {
        type: Image,
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

const roomTypeModel = mongoose.model("RoomType", roomType);

module.exports = roomTypeModel;
