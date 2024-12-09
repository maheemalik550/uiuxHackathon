import { Button } from '@/components/ui/button'
import React from 'react'
import { CiHeart, CiShoppingCart } from 'react-icons/ci'
import { FaBeer, FaEnvelope, FaHeart, FaPhoneAlt, FaSearch, FaShoppingCart, FaSignInAlt, FaUser, FaUserAlt } from 'react-icons/fa'
import { IoCartOutline } from 'react-icons/io5'
import { SlArrowDown } from 'react-icons/sl'

const Navbar = () => {
  return (
    <div>

      <div className="w-full h-[44px] bg-purple overflow-x-auto text-center">
        <div className="flex justify-between items-center px-4 sm:px-6 md:px-8 mt-2">
          {/* Portion One - Contact Information */}
          <div className="flex gap-4 sm:gap-6">
            <div className="flex items-center gap-2">
              <FaEnvelope size={20} color="white" />
              <h2 className="text-white text-xs sm:text-sm md:text-base">maheen@gmail.com</h2>
            </div>

            <div className="flex items-center gap-2">
              <FaPhoneAlt size={20} color="white" />
              <h2 className="text-white text-xs sm:text-sm md:text-base">(12345) 67890</h2>
            </div>
          </div>

          {/* Portion Two - Desktop Menu */}
          <div className="hidden md:flex gap-6 text-white">
            <div className="flex items-center space-x-1">
              <span className="ml-2 text-sm md:text-base ">English</span>
              <SlArrowDown size={20} />

            </div>
            <div className="flex items-center space-x-1">
              <span className="ml-2 text-sm md:text-base">USD</span>
              {/* <FaHeart size={20} /> */}
              <SlArrowDown size={20} />
            </div>
            <div className="flex items-center space-x-1">
              <span className="ml-2 text-sm md:text-base">Login</span>
              <FaUser size={20} />

            </div>
            <div className="flex items-center space-x-1">
              <span className="ml-2 text-sm md:text-base">Whislist</span>
              <CiHeart size={20} />

            </div>
            <div className="flex items-center space-x-1">
              <IoCartOutline size={20} />
            </div>
          </div>

          {/* Portion Two for Mobile (Visible on smaller screens) */}
          <div className="flex md:hidden gap-6 text-white">
            <div className="flex items-center">
              <FaUserAlt size={20} />
            </div>
            <div className="flex items-center">
              <FaHeart size={20} />
            </div>
            <div className="flex items-center">
              <FaShoppingCart size={20} />
            </div>
          </div>
        </div>
      </div>
      {/* navbar */}
     
        <div className='flex mt-[30px] flex-wrap gap-[5px] justify-evenly'>

          <div>
            <h1 className='font-sans text-textPurple font-bold text-[35px] w-[74px] h-[74px]'>Hekto</h1>
          </div>
          <div>
            <div className="hidden md:flex gap-6 text-white">
              <div className="flex items-center space-x-1">
                <span className="ml-2 text-Textpink text-sm md:text-base ">Home</span>
                <SlArrowDown className='text-Textpink' size={20} />

              </div>
              <div className="flex items-center space-x-1">
                <span className="ml-2 text-black text-sm md:text-base ">Pages</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="ml-2 text-black text-sm md:text-base ">Products</span>


              </div>
              <div className="flex items-center space-x-1">
                <span className="ml-2  text-black text-sm md:text-base ">Blog</span>


              </div>
              <div className="flex items-center space-x-1">
                <span className="ml-2 text-black  text-sm md:text-base ">Shop</span>


              </div>
              <div className="flex items-center space-x-1">
                <span className="ml-2 text-black  text-sm md:text-base ">Contact</span>

              </div>

            </div>



          </div>

          <div>
          <div className="relative flex items-center max-w-xs w-full">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 pl-4 pr-10  bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
            <button className="absolute right-0 mr-2 text-pink-500">
              <FaSearch size={20} />
            </button>

          </div>
        </div>

        </div>
      </div>
  

    // <div className='text-secondary'>Navbar</div>
  )
}

export default Navbar