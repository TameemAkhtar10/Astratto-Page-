import React from 'react'
import card from '../assets/section4.1.png'

const Section4 = () => {
  return (
    <div className="border-2 border-gray-500 rounded-2xl lg:mx-14 lg:mb-10 mx-4 py-10">

      <div
        id="one"
        className="flex flex-col lg:flex-row gap-6 lg:gap-0 justify-between items-start lg:items-center px-4 lg:px-10 pb-8"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal">
          Our services
        </h1>

        <p className="text-gray-500 font-semibold max-w-full lg:max-w-[30%]">
          Discover a wide range of opportunities through a comprehensive range of qualified services.
        </p>
      </div>

      <div
        id="two"
        className="pb-10 px-4 flex flex-col lg:flex-row gap-8 lg:gap-14 justify-center"
      >
        <div className="p-4 w-full lg:w-[32%] rounded-2xl border-2 border-[#7f27ff]">
          <div className="flex justify-between items-center pb-4 border-b border-gray-200">
            <h1 className="text-2xl lg:text-3xl font-semibold">
              Motion Graphics
            </h1>

            <div className="h-12 w-12 lg:h-14 lg:w-14 bg-[#7f27ff] rounded-full flex items-center justify-center shrink-0">
              <i className="ri-arrow-right-up-long-fill text-white text-2xl lg:text-3xl leading-none"></i>
            </div>
          </div>

          <p className="text-base lg:text-lg font-semibold tracking-tight py-3 text-gray-500">
            Bring your ideas to life through dynamic visuals and engaging animations.
          </p>

          <img src={card} alt="" className="rounded-2xl w-full" />
        </div>

        <div className="p-4 w-full lg:w-[32%] rounded-2xl border-2 border-[#7f27ff]">
          <div className="flex justify-between items-center pb-4 border-b border-gray-200">
            <h1 className="text-2xl lg:text-3xl font-semibold">
              3D Design
            </h1>

            <div className="h-12 w-12 lg:h-14 lg:w-14 bg-[#7f27ff] rounded-full flex items-center justify-center shrink-0">
              <i className="ri-arrow-right-up-long-fill text-white text-2xl lg:text-3xl leading-none"></i>
            </div>
          </div>

          <p className="text-base lg:text-lg font-semibold tracking-tight py-3 text-gray-500">
            Crafting immersive three-dimensional worlds for your brand.
          </p>

          <img src={card} alt="" className="rounded-2xl w-full" />
        </div>

        <div className="p-4 w-full lg:w-[32%] rounded-2xl border-2 border-[#7f27ff]">
          <div className="flex justify-between items-center pb-4 border-b border-gray-200">
            <h1 className="text-2xl lg:text-3xl font-semibold">
              Visual Identity
            </h1>

            <div className="h-12 w-12 lg:h-14 lg:w-14 bg-[#7f27ff] rounded-full flex items-center justify-center shrink-0">
              <i className="ri-arrow-right-up-long-fill text-white text-2xl lg:text-3xl leading-none"></i>
            </div>
          </div>

          <p className="text-base lg:text-lg font-semibold tracking-tight py-3 text-gray-500">
            Building strong visual identities that resonate with audiences.
          </p>

          <img src={card} alt="" className="rounded-2xl w-full  " />
        </div>
      </div>

      <div id="three" className="py-14 px-4">
        <p className="text-gray-500 text-lg lg:text-xl text-center font-semibold">
          — About Astratto
        </p>

        <div className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-normal text-center leading-tight">
          <span className="text-black">Our </span>
          <span className="text-gray-500">visionary </span>
          <span className="text-[#D16839]">artisans </span>
          <span className="text-black">collaborate </span>
        </div>

        <div className="text-3xl sm:text-4xl lg:text-5xl font-normal text-center leading-tight">
          <span className="text-[#9E24AD]">seamlessly </span>
          <span className="text-black">to craft inspiring </span>
          <span className="text-gray-500">experiences </span>
        </div>

        <div className="text-3xl sm:text-4xl lg:text-5xl font-normal text-center leading-tight">
          <span className="text-[#D16839]">leaving </span>
          <span className="text-black">lasting </span>
          <span className="text-gray-500">imprints </span>
          <span className="text-black">on </span>
          <span className="text-[#9E24AD]">brands </span>
        </div>

        <div className="text-3xl sm:text-4xl lg:text-5xl font-normal text-center leading-tight flex justify-center items-center gap-3">
          <span className="text-black">and spaces</span>
          <i className="ri-bard-fill text-[#FFCC00] rotate-12 text-4xl"></i>
        </div>
      </div>
    </div>
  )
}

export default Section4
