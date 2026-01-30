import React from 'react'
import logo from '../assets/logo.jpeg'

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
                <div>
                    <img src={logo} className='mb-5 w-32' alt="" />
                    <p className='w-full md:w-2/3 text-gray-600'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ex eaque voluptatibus minus. Autem sed ab quo libero, molestiae sint alias consequatur commodi!
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
                    <ul  className='flex flex-col gap-1 text-gray-600'>
                        <li>8657575848</li>
                        <li>meenakshi@gmail.com</li>

                    </ul>
                </div>
            </div>
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2026@ SustainaMart.in - All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer