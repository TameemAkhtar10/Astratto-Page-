import React from 'react'
import LeftNav from './LeftNav'
import Centernav from './Centernav'
import Rightnav from './Rightnav'



const NavBar = () => {
  return (
    <div className='nav flex justify-between items-center border-b border-grey-300 p-2 md:px-4 lg:px-8  lg:py-4'>
      <LeftNav />
      <Centernav />
      <Rightnav />
    </div>
  )
}

export default NavBar
