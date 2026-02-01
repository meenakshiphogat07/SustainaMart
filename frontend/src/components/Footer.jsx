import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
                <div>
                    <img src={assets.logo} className='mb-5 w-48 ' alt="" />
                    <p className='w-full md:w-2/3 text-gray-600'>
                        SustainaMart is your one-stop destination for eco-friendly fashion and lifestyle products.
                        We believe in conscious living, ethical sourcing, and creating a greener future — one sustainable choice at a time.

                    </p>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>

                    </ul>
                </div>
                <div>
                    < p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+91 98765 43210</li>
                        <li>support@sustainamart.com</li>

                    </ul>
                </div>
            </div>
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2026@ SustainaMart.com - All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer