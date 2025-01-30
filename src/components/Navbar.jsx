import React from 'react'
import img1logo from "../img/logo.png"
import { motion } from 'framer-motion'

function Navbar() {
  return (
    <motion.div
      initial ={{opacity: 0 , y: -100}}
      animate = {{opacity: 1 , y:0}}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 100,
        delay: 0.2,
      }}
      className=' fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm '>
      <div className=' w-[95%] mx-auto'>
        <div className=' flex items-center justify-between py-4 lg:py-1 px-6 lg:px-0 '>
          <div className='flex items-center gap-4'>
            <img className=' h-9' src={img1logo} alt="" />
            <h1 className=' text-white font-bold text-2xl '>TCJ-SPACE</h1>
          </div>

          <div className=' hidden md:block text-xl'>
            <ul className=' flex items-center gap-6 py-4'>
              <li><a href="#" className= 'text-white hover:text-blue-400 duration-150 cursor-pointer'>Technology</a></li>
              <li><a href="#" className= 'text-white hover:text-blue-400 duration-150 cursor-pointer'>Galaxy</a></li>
              <li><a href="#" className= 'text-white hover:text-blue-400 duration-150 cursor-pointer'>Satelite</a></li>
              <li><a href="#" className= 'text-white hover:text-blue-400 duration-150 cursor-pointer'>About</a></li>
            </ul>
          </div>

          <div>
            <button className=' cursor-pointer hover:text-blue-500 hover:border-blue-500 duration-200 border-white border-[2px] rounded-md py-1 px-3 text-white text-md'> login </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Navbar
