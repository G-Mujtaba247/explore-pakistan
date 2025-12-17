import Booking from "../models/bookingModel.js";

// Create a new booking
export const createBooking = async (req, res) => {
    try {
        const { userId, tourId, tourName, price } = req.body;

        const newBooking = new Booking({
            userId,
            tourId,
            tourName,
            price
        });

        await newBooking.save();

        res.status(201).json({
            success: true,
            message: "Booking created successfully",
            data: newBooking
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to create booking",
            error: error.message
        });
    }
};

// Get all bookings (Admin)
export const getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find().populate("userId", "name email");
        res.status(200).json({
            success: true,
            count: bookings.length,
            data: bookings
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch bookings",
            error: error.message
        });
    }
};

// Get bookings for a specific user
export const getUserBookings = async (req, res) => {
    try {
        const { id } = req.params;
        const bookings = await Booking.find({ userId: id });

        res.status(200).json({
            success: true,
            count: bookings.length,
            data: bookings
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            message: "not found",
            error: error.message
        });
    }
};
