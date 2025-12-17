import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    tourId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tour", // Assuming the model name is 'Tour' in toursModel.js, I should check that.
        required: true
    },
    tourName: { type: String, required: true },
    price: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    status: {
        type: String,
        default: "pending",
        enum: ["pending", "confirmed", "cancelled"]
    }
}, { timestamps: true });

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;
