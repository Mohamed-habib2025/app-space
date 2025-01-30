import React from 'react'
import { FaReact } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { FaShuttleSpace, FaSpaceAwesome } from 'react-icons/fa6'
import wave from "../img/wave Gif.gif"


function Servies() {
  return (
    <div className='bg-black relative z-50'>
      <div className='w-[95%] mx-auto pt-20'>
        <div className=' min-h-[400px]'>
          <div className=' grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10 text-white'>
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 1 }}
              transition={{
                type: "spring",
                stiffness: 30,
                damping: 10,
                delay: 0.4,
              }}
              className=' py-8 px-3 w-full lg:w-[300px] mx-auto bg-sky-900/60 rounded-xl backdrop-blur-sm text-center text-lg space-y-2 min-h-[180px]'>
              <FaReact className='text-7xl mx-auto' />
              <h1 className=' text-2xl '>HST</h1>
              <span className='text-2xl'>300-1500Km</span>
              <p className='text-darkGray text-sm'>Used for astronomical observations, capturing stunning images of the universe.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 1 }}
              transition={{
                type: "spring",
                stiffness: 30,
                damping: 10,
                delay: 0.6,
              }}
              className=' py-8 px-3 w-full lg:w-[300px] mx-auto bg-sky-900/60 rounded-xl backdrop-blur-sm text-center space-y-2 min-h-[180px]'>
              <FaShuttleSpace className='text-7xl mx-auto'/>
              <h1 className=' text-2xl  '>ISS</h1>
              <span className='text-2xl'>500-1500Km</span>
              <p className='text-darkGray text-sm'>it's a habitable artificial satellite orbiting Earth and serves as a space environment research laboratory.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 1 }}
              transition={{
                type: "spring",
                stiffness: 30,
                damping: 10,
                delay: 0.8,
              }}
              className=' py-8 px-3 w-full lg:w-[300px] mx-auto bg-sky-900/60 rounded-xl backdrop-blur-sm text-center space-y-2 min-h-[180px]'>
              <FaSpaceAwesome className='text-7xl mx-auto'/>
              <h1 className=' text-2xl '>GPS</h1>
              <span className='text-2xl'>300-1500Km</span>
              <p className='text-darkGray text-sm'>Part of the Global Positioning System (GPS) used for navigation.</p>
            </motion.div>
          </div>
          <img className='mx-auto h-[220px] w-full object-cover -translate-y-24 ' src={wave} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Servies
