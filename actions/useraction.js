"use server"

import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import User from "@/models/User"
import connectDB from "@/db/connectDB"

export const initiate = async (amount, to_username, paymentform) => {
    await connectDB();
    var instance = new Razorpay({ key_id: 'YOUR_KEY_ID', key_secret: 'YOUR_SECRET' })
    let options={
        amount: Number.parseInt(amount),
        currency: "INR",
    }

    let x=await instance.orders.create(options)

    await Payment.create({oid:x.id,amount:amount,to_user:to_username,name:paymentform.name,message:paymentform.message})

    return x
}


export const fetchuser=async (username)=>{
    await connectDB()
    let u=await User.findOne({username: username})
    let user=u.toObject({flattenObjectsIds:true})
    return user
}

export const fetchpayments=async (username)=>{
    await connectDB()
    let p=await Payment.find({to_user:username}).sort({amount:-1}).lena()
    return p
}