import React from 'react'
import firstimg from '../assets/Section3.1.webp'
import secondimg from '../assets/Section3.2.webp'
import thirdimg from '../assets/Section3.3.webp'
import fourthimg from '../assets/Section3.4.webp'

const Section3 = () => {
  return (
    <section className="px-6 sm:px-10 lg:px-16 py-10">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-20">

        <div>
          <div className="relative h-[360px] sm:h-[300px] lg:h-[460px] rounded-3xl overflow-hidden">
            <img src={firstimg} className="h-full w-full object-cover" alt="" />

            <div className="absolute top-4 right-4 h-10 w-10 bg-white rounded-full flex items-center justify-center">
              <i className="ri-arrow-right-up-long-fill text-black"></i>
            </div>

            <button className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-full font-semibold text-sm">
              2D Animation
            </button>
          </div>

          <h1 className="text-2xl sm:text-3xl mt-6 text-[#8c00ff] font-semibold">
            The Lighthouse
          </h1>

          <p className="text-gray-500 mt-3 max-w-md">
            Adding a new dimension to projects through thoughtfully designed 2D animations
          </p>
        </div>

        <div className='lg: mt-[75px]'>
          <div className="relative h-[360px] sm:h-[300px] lg:h-[460px] rounded-3xl overflow-hidden">
            <img src={secondimg} className="h-full w-full object-cover" alt="" />

            <div className="absolute top-4 right-4 h-10 w-10 bg-white rounded-full flex items-center justify-center">
              <i className="ri-arrow-right-up-long-fill text-black"></i>
            </div>

            <button className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-full font-semibold text-sm">
              Digital Art
            </button>
          </div>

          <h1 className="text-2xl sm:text-3xl mt-6 text-[#8c00ff] font-semibold">
            Digital Dream
          </h1>

          <p className="text-gray-500 mt-3 max-w-md">
            A journey through the abstract mind of AI generated art forms.
          </p>
        </div>

        <div>
          <div className="relative h-[360px] sm:h-[300px] lg:h-[460px] rounded-3xl overflow-hidden">
            <img src={thirdimg} className="h-full w-full object-cover" alt="" />

            <div className="absolute top-4 right-4 h-10 w-10 bg-white rounded-full flex items-center justify-center">
              <i className="ri-arrow-right-up-long-fill text-black"></i>
            </div>

            <button className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-full font-semibold text-sm">
              Architecture
            </button>
          </div>

          <h1 className="text-2xl sm:text-3xl mt-6 text-[#8c00ff] font-semibold">
            Urban Oases
          </h1>

          <p className="text-gray-500 mt-3 max-w-md">
            Redefining city landscapes with sustainable and modern architectural solutions.
          </p>
        </div>

        <div className='lg: mt-[75px]'>
          <div className="relative h-[360px] sm:h-[300px] lg:h-[460px] rounded-3xl overflow-hidden">
            <img src={fourthimg} className="h-full w-full object-cover" alt="" />

            <div className="absolute top-4 right-4 h-10 w-10 bg-white rounded-full flex items-center justify-center">
              <i className="ri-arrow-right-up-long-fill text-black"></i>
            </div>

            <button className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-full font-semibold text-sm">
              Visual Identity
            </button>
          </div>

          <h1 className="text-2xl sm:text-3xl mt-6 text-[#8c00ff] font-semibold">
            Snowscape Haven
          </h1>

          <p className="text-gray-500 mt-3 max-w-md">
            Crafting a visual identity that mirrors the serenity and allure of a winter sanctuary.
          </p>
        </div>

      </div>

    </section>
  )
}

export default Section3
