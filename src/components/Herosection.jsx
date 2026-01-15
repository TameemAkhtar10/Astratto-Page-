import React from 'react'
import heroleft from '../assets/hero.left.png'
import herocenter from '../assets/hero.center.png'
import heroright from '../assets/hero.right.png'

const Herosection = () => {
  return (
    <div className="relative pt-6 pb-24 overflow-hidden">

<div
  className="
    relative
    flex justify-center gap-2 mt-4
    sm:absolute sm:right-6 sm:top-6
    sm:flex-col sm:items-end
  "
>
  <button className="bg-[#8C00FF] px-4 py-2 rounded-full text-white text-xs sm:text-sm font-semibold">
    Via della Creatività, 23
  </button>

  <button className="bg-[#8C00FF] px-4 py-2 rounded-full text-white text-xs sm:text-sm font-semibold">
    20121 Milano
  </button>
</div>


      <p className="text-center font-semibold mt-16 text-base sm:text-xl text-gray-500">
        Igniting the Spark of Inspiration
      </p>

      <img
        src={heroleft}
        alt=""
        className="hidden lg:block absolute top-[40%] left-[6%] rotate-[-10deg] rounded-2xl w-48 h-48 xl:w-64 xl:h-64"
      />

      <div className="text-center mt-6">
        <h1 className="text-4xl sm:text-6xl lg:text-8xl tracking-tighter">
          Unleash Your
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-4 text-4xl sm:text-6xl lg:text-8xl tracking-tighter">
          <span>Brand</span>
          <img
            src={herocenter}
            alt=""
            className="h-10 w-10 sm:h-14 sm:w-14 lg:h-20 lg:w-20"
          />
          <span>With Our</span>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-3 mt-8">
        <span className="py-2 px-3 rounded rotate-3 text-4xl sm:text-6xl lg:text-8xl bg-[#FFF588] text-[#8C00FF] font-semibold">
          Magico
        </span>
        <span className="text-4xl sm:text-6xl lg:text-8xl font-semibold">
          Designs
        </span>
      </div>

      <img
        src={heroright}
        alt=""
        className="hidden lg:block absolute top-[58%] right-[10%] rotate-[-10deg] rounded-2xl w-48 h-48 xl:w-64 xl:h-64"
      />

      <div className="flex justify-center mt-12">
        <button className="px-6 py-3 text-base sm:text-xl rounded-full border-2 border-[#FED4B5] rotate-[-5deg]">
          Create Magic
        </button>
      </div>

    </div>
  )
}

export default Herosection
