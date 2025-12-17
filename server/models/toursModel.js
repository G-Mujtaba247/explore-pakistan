import mongoose from "mongoose";

const toursSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Tour = mongoose.model('Tour', toursSchema);

export default Tour;