import React from 'react'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-14 flex flex-col md:flex-row items-center gap-14 mb-28'>

        <img
          className='w-full md:max-w-[480px] rounded-2xl shadow-sm'
          src={assets.contact_img}
          alt="Contact SustainaMart"
        />

        <div className='flex flex-col justify-center gap-6 md:w-2/5'>

          <div>
            <p className='font-semibold text-xl text-gray-800 mb-1'>Our Store</p>
            <p className='text-gray-600 leading-relaxed'>
              Sector 63 <br />
              Noida, Uttar Pradesh, India

            </p>
          </div>

          <div>
            <p className='text-gray-600 leading-relaxed'>
              <span className='font-medium text-gray-700'>Tel:</span> (414) 55-0132 <br />
              <span className='font-medium text-gray-700'>Email:</span> connect@sustainamart.com
            </p>
          </div>

          <div className='pt-4'>
            <p className='font-semibold text-xl text-gray-800 mb-1'>
              Careers at SustainaMart
            </p>
            <p className='text-gray-600 leading-relaxed'>
              Join our mission to build a sustainable and eco-conscious future.
            </p>
          </div>

          <button
            className='mt-4 inline-flex items-center justify-center w-fit
            border border-green-700 text-green-700
            px-8 py-3 text-sm font-semibold rounded-full
            hover:bg-green-700 hover:text-white
            transition-all duration-300'
          >
            Explore Jobs
          </button>

        </div>
      </div>

      <NewsletterBox />

    </div>
  )
}

export default Contact

