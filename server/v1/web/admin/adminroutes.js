const express = require('express');
const adminAuth = require('../../../helper/adminAuth');
const adminController = require('../../../Controllers/admin/adminController');
const upload = require('../../../helper/multer');

const adminRouter = express.Router();

adminRouter.post('/signup', adminController.signup);
adminRouter.post('/signin', adminController.signin);
adminRouter.post('/updateProfile', adminAuth, adminController.updateProfile);
adminRouter.post('/getProfile', adminAuth, adminController.getProfile);

adminRouter.post('/addHotel', adminAuth, adminController.addHotel);
adminRouter.post('/updateHotel', adminAuth, adminController.updateHotel);
adminRouter.post('/deleteHotel', adminController.deleteHotel);
adminRouter.post('/getAllHotels', adminController.getAllHotels);
adminRouter.post('/getHotel', adminController.getHotel);
adminRouter.post('/getHotelFromLocationAndDates', adminController.getHotelFromLocationAndDates);
adminRouter.post('/getHotelFromLocation/', adminController.getHotelFromLocation);

adminRouter.post('/addRoom', adminController.addRoom);
adminRouter.post('/updateRoom', adminController.updateRoom);
adminRouter.post('/deleteRoom', adminController.deleteRoom);
adminRouter.post('/getAllRooms',adminController.getAllRooms);
adminRouter.post('/getRoomFromHotel',adminController.getRoomFromHotel);
adminRouter.post('/getPriceFromRoomNumber',adminController.getPriceFromRoomNumber);
adminRouter.post('/getRoom',adminController.getRoom);

adminRouter.post('/calculatePrice',adminController.calculatePrice);

adminRouter.post('/addBooking',adminController.addBooking);
adminRouter.post('/updateBooking',adminController.updateBooking);
adminRouter.post('/getBookingFromUserId',adminController.getBookingFromUserId);
adminRouter.post('/getBookingFromBookingNumber',adminController.getBookingFromBookingNumber);
adminRouter.post('/getAllBookings',adminController.getAllBookings);
adminRouter.post('/deleteBookingFromId',adminController.deleteBookingFromId);

module.exports = adminRouter;