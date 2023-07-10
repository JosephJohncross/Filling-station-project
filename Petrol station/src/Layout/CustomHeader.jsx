import React from 'react'

// image import
import logo from "../assets/images/logo.svg" 
import { Link } from 'react-router-dom'

const CustomHeader = () => {
  return (
    <>
      <nav className='bg-white py-4 shadow-md sticky top-0 z-[1000000]'>
        <div className='container_limiter justify-between flex items-center'>
          <img src={logo} alt='' className='w-24'/>
          <div className='flex space-x-10 items-center font-open font-medium'>
            <Link to={""}>
              <p className=''>Search</p>
            </Link>
            <Link to={""}>
              <p className=''>My Location</p>
            </Link>
            <Link to={""}>
              <p className=''>All Station List</p>
            </Link>
            <Link to={""}>
              <p className=''>About Us</p>
            </Link>
          </div>
        </div>
      </nav>
      {/* <div className='bg-gray-200 h-10'></div> */}
    </>
  )
}

export default CustomHeader