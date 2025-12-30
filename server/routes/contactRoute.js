import express from 'express';
import { getContactDetail, createOrUpdateContact, getContactForWebsite } from '../controllers/contactController.js';

const contactRouter = express.Router();

// Admin routes
contactRouter.get('/contact', getContactDetail);
contactRouter.post('/contact/create', createOrUpdateContact);
contactRouter.patch('/contact/update/:id', createOrUpdateContact);

// Website route - for user-facing contact page
contactRouter.get('/website/contact', getContactForWebsite);

export default contactRouter;
