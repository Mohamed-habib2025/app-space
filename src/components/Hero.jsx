import React from 'react'
import { motion } from 'framer-motion'
import moon from "../img/moon-surface-hd.png"

function Hero() {
  return (
    <div className=' bg-black/20 h-full relative text-white z-40'>
      <div className=' h-full flex justify-center items-center p-4'>
        <div className='w-[95%] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <div className=' lg:pr-36'>
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 100,
                delay: 0.5,
              }}
              className=' text-5xl uppercase font-bold' > Orbite The Earth</motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 100,
                delay: 0.7,
              }}
              className='my-4 leading-6'>
              Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Totam ea dolorem eius
              accusamus beatae. Nulla quis beatae quo,
              possimus tempora similique dignissimos repellat
              aperiam veniam culpa consequatur repudiandae
              asperiores saepe.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 100,
                delay: 0.8,
              }}
              className='w-28 bg-blue-400 hover:bg-blue-600 duration-200 rounded-md py-2'>
              Learn More
            </motion.button>
          </div>
        </div>
      </div>
      <img src={moon} className=' absolute right-0 bottom-0 w-full brightness-50 z-10' alt="" />
      <div className=' absolute bottom-0 w-full z-30 bg-gradient-to-b from-transparent from-10% to-black to-90% h-[20px] sm:h-[50px] md:h-[60px]'></div>
    </div >
  )
}

export default Hero
