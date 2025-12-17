import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { connectDB } from './config/db.js';
import toursRoute from './routes/toursRoute.js';
import userRoute from './routes/userRoute.js';
import verifyUserRequest from './routes/verifyUserRequest.js';
import bookingRoute from './routes/bookingRoute.js';
import webpageRouter from './routes/webpageRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));

const PORT = process.env.PORT || 5000;
const PREFIX = '/api/v1';


app.get('/', (req, res) => {
    res.send("Hello from server")
});


app.use(PREFIX, userRoute)
app.use(PREFIX, verifyUserRequest)
app.use(PREFIX, toursRoute)
app.use(PREFIX, bookingRoute)
app.use(PREFIX, webpageRouter)

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`)
    });
});

// 5 products (name, description, price, rating, category)