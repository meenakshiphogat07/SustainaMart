import React from 'react'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div className="bg-white">

      <div className="text-2xl text-center pt-10 border-t">
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className="my-16 flex flex-col md:flex-row gap-16 items-center max-w-7xl mx-auto px-4">
        <img
          className="w-full md:max-w-[450px] rounded-2xl shadow-md hover:shadow-lg transition"
          src={assets.about_img}
          alt=""
        />

        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 leading-relaxed">
          <div className="w-12 h-1 bg-green-600 mb-2"></div>

          <p>
            We believe sustainability should be simple, accessible, and stylish.
            Our products are thoughtfully designed to help you make eco-conscious
            choices without compromising on quality or aesthetics.
          </p>

          <p>
            From everyday essentials to lifestyle upgrades, we curate solutions
            that respect nature, support ethical practices, and promote long-term
            well-being.
          </p>

          <div className="mt-4 p-5 bg-green-50 border-l-4 border-green-600 rounded-lg">
            <b className="text-green-700 block mb-2">Our Mission</b>
            <p className="text-gray-700">
              To provide sustainable and eco-friendly products that help our
              customers reduce their environmental impact while maintaining
              quality and affordability.
            </p>
          </div>
        </div>
      </div>

      <div className="text-xl py-6 text-center">
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-20 max-w-7xl mx-auto px-4">
        <div className="border rounded-xl px-10 py-12 flex flex-col gap-4 hover:shadow-md transition">
          <b className="text-green-700">Quality Assurance</b>
          <p className="text-gray-600 leading-relaxed">
            All our products are carefully tested and sourced to meet high
            quality standards while remaining environmentally responsible.
          </p>
        </div>

        <div className="border rounded-xl px-10 py-12 flex flex-col gap-4 hover:shadow-md transition">
          <b className="text-green-700">Convenience</b>
          <p className="text-gray-600 leading-relaxed">
            Shop eco-friendly essentials effortlessly through our online
            platform with smooth delivery and easy access.
          </p>
        </div>

        <div className="border rounded-xl px-10 py-12 flex flex-col gap-4 hover:shadow-md transition">
          <b className="text-green-700">Exceptional Support</b>
          <p className="text-gray-600 leading-relaxed">
            Our customer support team is always ready to help you make informed,
            sustainable choices with confidence.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default About

