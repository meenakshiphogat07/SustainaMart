import express from "express";
import { placeOrder, userOrders } from "../controllers/orderController.js";
import authUser from '../middleware/auth.js'

const orderRouter = express.Router();

//payment Features
orderRouter.post('/place', authUser, placeOrder)


//User Feature
orderRouter.post('/userorders', authUser, userOrders)

export default orderRouter