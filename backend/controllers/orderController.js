import { response } from "express";
import orderModel from "../models/orderModel.js";


//placing orders using COD Method
const placeOrder = async (req,res)=>{
       try {

        const{ userId, items,amount,address} = req.body;

        const orderData ={
            userId,
            items,
            address,
            amount,
            paymentMethod: "COD",
            payment: false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId,{cartData:{}})

        res.json({success : true,message:"Order Placed"})

        } catch(error) {
        console.log(error)
        res.json({success:false,message:error.message})

    }


}

// User Order Data For Frontend
const userOrders = async(req,res)=> {
    try {

        const{userId}= req.body
        const orders = await orderModel.find({userId })
        response.json({success:true,orders})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }

}

export {placeOrder, userOrders}