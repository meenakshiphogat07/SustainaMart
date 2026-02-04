import React from 'react'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import NewsletterBox from '../components/NewsletterBox'



const About = () => {


  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600' >
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consectetur fugit enim itaque dignissimos? Eligendi corporis ipsum quaerat fugiat suscipit accusamus accusantium exercitationem corrupti placeat. Obcaecati veritatis itaque sequi doloribus?</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem inventore accusamus vel, aperiam iste necessitatibus quasi molestiae ab quas corrupti. Impedit doloribus exercitationem enim nihil dolor. Quasi vero tempora magnam?</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>To provide sustainable and eco-friendly products that help our customers reduce their environmental impact while maintaining quality and affordability.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16  py-8 sm:py-20 flex flex-col gap-5'>
          <b> Quality Assurance:</b>
          <p className='text-gray-600'>All our products are rigorously tested to ensure they meet the highest quality standards and are safe for use.</p>
        </div>

        <div className='border px-10 md:px-16  py-8 sm:py-20 flex flex-col gap-5'>
          <b> Convenience:</b>
          <p className='text-gray-600'>We offer easy access to eco-friendly products through our online platform and local pickup options.</p>
        </div>


        <div className='border px-10 md:px-16  py-8 sm:py-20 flex flex-col gap-5'>
          <b> Exceptional Customer Service:</b>
          <p className='text-gray-600'>We offer easy access to eco-friendly products through our online platform and local pickup options.</p>
        </div>
      </div>

      <NewsletterBox />

    </div>
  )
}

export default About
