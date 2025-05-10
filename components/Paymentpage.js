"use client"
import React, { useState,useEffect } from 'react'
import Script from 'next/script'
import { fetchpayments, initiate,fetchuser } from '@/actions/useraction'
import { useSession } from 'next-auth/react'


const Paymentpage = ({ username }) => {

    const [paymentform, setpaymentform] = useState({})
    const [currentuser, setcurrentuser] = useState({})
    const [payments, setpayments] = useState([])

    useEffect(()=>{
        getData()
    
    },[])

    const handlechange = (e) => {
        setpaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }

    const getData=async ()=>{
        let u = await fetchuser(username)
        setcurrentuser(u)
        let dbpayments=await fetchpayments(username)
        setpayments(dbpayments)
    }


    const pay = async (amount) => {
        let a = await initiate(amount, username, paymentform)
        let orderId = a.id;
        var options = {
            "key": "YOUR_KEY_ID", // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "FundMe", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": "http://localhost:3000/api/razorpay",
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }
        var rzp1 = new Razorpay(options);
        rzp1.open();

    }
    return (

        <>
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
            <div className='cover w-full relative'>
                <img className='object-cover w-full h-[400px]' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/2556490/23906e0735f8447e8a9080192d8b1294/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/4.png?token-time=1748995200&amp;token-hash=N0wRaQ7RflDg7_a8I13WeM5Wx8PqnuVQ8MKNGY2j5E0%3D" alt="" elementtiming="Creator Public Page : Base Page" data-is-key-element="true">
                </img>
                <div className='rounded-lg profilepic absolute -bottom-13 right-[46.5%]'>
                    <img width={120} height={120} className='rounded-lg' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/2556490/f657c382b7e647b7a908cf11d5beb6d2/eyJoIjoxMDgwLCJ3IjoxMDgwfQ%3D%3D/2.jpg?token-time=1747699200&amp;token-hash=JgEyFf_feUZ3V7J79M-y1BUNUVuX-jZVlB8cyZGNrE4%3D" alt="" data-tag="creator-public-page-avatar">
                    </img>
                </div>
            </div>
            <div className='info flex justify-center items-center my-19 flex-col gap-2'>
                <div className="font-bold text-2xl">

                    {username}
                </div>
                <div className='text-slate-400'>
                    creating digital art & videos
                </div>
                <div className='text-slate-400'>
                    362 members . 75 Posts
                </div>
                <div className="payment flex gap-3 w-[80%] ">
                    <div className="supporters w-1/2 bg-slate-900 text-white rounded-lg p-8">
                        <h2 className='text-2xl text-center font-bold mb-5'>Supporters</h2>
                        <ul>
                            {payments.map((p,i)=>{
                                return <li key={i} className='my-4 flex gap-2 items-center'>
                                <img width={30} src="/gif/avatar.gif" alt="" />
                                <span>
                                    {p.name} donated <span className='font-bold'>{p.amount}</span> with a message {p.message}
                                </span>
                            </li>
                            })}
                        </ul>
                    </div>
                    <div className="makepaymetn  w-1/2 bg-slate-900 text-white rounded-lg p-8">
                        <h2 className='text-2xl text-center mb-5 font-bold'>Make Payment</h2>
                        <div className='pay flex gap-2 flex-col'>
                            <input onChange={handlechange} value={paymentform.name} className='w-full p-3 bg-slate-800 rounded-lg' type="text" placeholder='Enter Name' />
                            <input onChange={handlechange} value={paymentform.message} className='w-full p-3 bg-slate-800 rounded-lg' type="text" placeholder='Enter Message' />
                            <input onChange={handlechange} value={paymentform.amount} className='w-full p-3 bg-slate-800 rounded-lg' type="text" placeholder='Enter Amount' />
                            <button onClick={()=>pay(Number.parseInt(paymentform.amount)*100)} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pay</button>
                        </div>
                        <div className='flex amount gap-3 mt-5'>
                            <button className='rounded-lg p-3 bg-gray-800 cursor-pointer' onClick={()=>pay(1000)}>Pay ₹10</button>
                            <button className='rounded-lg p-3 bg-gray-800 cursor-pointer' onClick={()=>pay(2000)}>Pay ₹20</button>
                            <button className='rounded-lg p-3 bg-gray-800 cursor-pointer' onClick={()=>pay(5000)}>Pay ₹50</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Paymentpage
