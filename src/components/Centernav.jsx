import React from 'react'
import headerimg from '../assets/header.center.jpg'

const Centernav = () => {
  return (
    <div className='flex items-center gap-2'>
<img
  className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12"
  src={headerimg}
  alt=""
/>
      <h1 className='text-xl font-bold md:text-3xl lg:text-3xl'>Astratto</h1>
    </div>
  )
}

export default Centernav
