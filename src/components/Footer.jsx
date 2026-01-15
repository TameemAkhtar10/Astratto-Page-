import React from 'react'

const Footer = () => {
  return (
    <div className="relative px-4 sm:px-6 lg:px-8 py-6 mx-4 sm:mx-8 lg:mx-14 border-2 border-gray-500 rounded-3xl">
      
      {/* TOP */}
      <div className="up border-b-2 border-gray-500 pb-10">
        <p className="text-center font-semibold text-[#8A00F9] text-base sm:text-lg lg:text-xl mt-8">
          Open the door to forging your Pomodoro Timer
        </p>

        <div className="text-center text-3xl sm:text-4xl lg:text-5xl pt-6 font-normal">
          Embark on a Transformative Journey
        </div>

        <div className="text-center text-3xl sm:text-4xl lg:text-5xl pt-4 font-normal leading-tight">
          <span>Shaping </span>
          <span className="px-4 py-2 bg-[#FFCD00] text-white rotate-2 rounded inline-block mx-1">
            Your Brand’s Destiny
          </span>
          <span> through our</span>
        </div>

        <div className="text-center text-3xl sm:text-4xl lg:text-5xl pt-4 font-normal">
          Dedicated Partnership
        </div>

        <div className="flex justify-center pt-8">
          <p className="text-center text-gray-500 text-base sm:text-lg lg:text-xl font-semibold w-full sm:w-[70%] lg:w-[40%]">
            Join us in revolutionizing productivity and achieving your goals with precision and clarity.
          </p>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="down flex flex-col lg:flex-row gap-6 lg:gap-0 justify-between text-gray-500 py-10 items-center text-center lg:text-left">
        
        <div className="one">
          <p className="text-base sm:text-lg  font-semibold">
            Veni Vidi Vici, 25, I came I saw I conquered
          </p>
        </div>

        <div className="two flex gap-5">
          <a href="https://www.instagram.com/tamimm_10/" target="_blank">
            <i className="text-2xl ri-instagram-line"></i>
          </a>
          <a href="https://www.linkedin.com/in/tameem-akhtar-b94117343/" target="_blank">
            <i className="text-2xl  ri-linkedin-line"></i>
          </a>
          <a href="https://github.com/TameemAkhtar10" target="_blank">
            <i className="text-2xl  ri-github-fill"></i>
          </a>
        </div>

        <div className="three flex flex-col sm:flex-row gap-3 text-sm sm:text-base lg:text-lg items-center">
          <p>Privacy Policy</p>
          <p>© 2025 Tameem. All rights reserved.</p>
        </div>
      </div>

    </div>
  )
}

export default Footer
