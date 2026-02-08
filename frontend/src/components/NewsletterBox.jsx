import React from 'react'

const NewsletterBox = () => {

  const onSubmithandler = (event) => {
    event.preventDefault();

  }
  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'> Subscribe & Earn Eco Rewards 🪙</p>
      <p className='text-gray-400 mt-3 '>
        Join SustainaMart to receive eco-friendly updates, exclusive offers, and EcoPoints rewards—straight to your inbox.
        Be part of a community that shops consciously and gives back to the planet.
      </p>
      <form onSubmit={onSubmithandler} className='w-full sm:1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required />
        <button type='submit' className='bg-green-700 text-white text-xs px-10 py-4'> SUBSCRIBE </button>
      </form>
    </div>
  )
}

export default NewsletterBox