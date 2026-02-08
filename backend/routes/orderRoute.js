import express from "express";
import {placeOrder,placeOrderStripe,placeOrderRazorpay,allOrders,userOrders,updateStatus} from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js";
import authUser from'../middleware/auth.js'

const router = express.Router();


//Admin features
orderRouter.post('/list', adminAuth,allOrders)
orderRouter.post('/status',adminAuth,updateStatus)

//payment Features
orderRouter.post('/place',authUser,placeOrder)


//User Feature
orderRouter.post('/userorders',authUser,userOrders)

export default orderRouter