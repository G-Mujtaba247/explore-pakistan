import express from 'express';
import { createBooking, getAllBookings, getUserBookings } from '../controllers/bookingController.js';

const router = express.Router();

router.post('/booking', createBooking);
router.get('/bookings', getAllBookings);
router.get('/booking/user/:id', getUserBookings);

export default router;
