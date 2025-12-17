import express from 'express'
import {upload} from '../controllers/toursImageController.js';
import { createTours, deleteTours, detailTour, getAllTours, updateTour } from '../controllers/toursController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const toursRoute = express.Router();

toursRoute.get('/tours', authMiddleware, getAllTours)
toursRoute.post(
  "/tours/create",
  authMiddleware,
  upload.single("image"),
  createTours
);
toursRoute.get('/tours/:id', authMiddleware, detailTour)
toursRoute.delete('/tours/delete/:id', authMiddleware, deleteTours)
toursRoute.patch('/tours/update/:id', authMiddleware, updateTour)
toursRoute.get('/', (req, res) => {
    res.send('Welcome to Tours Route')
})

export default toursRoute;