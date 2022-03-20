const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    bookingNumber:{
        type: String,
        required: true
    },
    userId: {
        type: Number,
        ref: "users"  
    },
    hotelId: {
        type:Number,
        ref: "hotels"  
    },
    roomId: {
        type: Number,
        ref: "rooms"
    },
    roomNumber:{
       type: String,
       required:true
    },
    amount: {
        type: Number,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    guests: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        Enum: ['Success','Fail','Cancelled']
    },
    price: {
        type: Number,
        required: true
    },
    breakfast: {
        type: Boolean,
    },
    gym: {
        type: Boolean,
    },
    pool: {
        type: Boolean,
    },
    parking: {
        type: Boolean,
    },
    meal: {
        type: Boolean,
    },
}, {
  timestamps: true,
});

const bookingModel = mongoose.model("Booking", bookingSchema);

module.exports = bookingModel;
