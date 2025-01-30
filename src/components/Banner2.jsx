import React from 'react'
import { motion } from 'framer-motion'
import satelite2Img from "../img/satelite2.jpg"

function Banner2() {
  return (
    <div>
      <section className="bg-primary text-white py-12">
        <div className=" w-[95%] mx-auto ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div className="space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800 ">
              <motion.p
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 100,
                  delay: 0.2,
                }}
                className="text-sky-800 uppercase"
              >
                our mission
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 100,
                  delay: 0.6,
                }}
                className="uppercase text-5xl"
              >
                Rapidscat
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 180 }}
                whileInView={{ opacity: 1, y: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 100,
                  delay: 0.8,
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                molestiae reprehenderit expedita corporis, non doloremque.
                Consequatur consectetur quisquam qui sunt. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Eos molestiae reprehenderit
                expedita corporis, non doloremque. Consequatur consectetur
                quisquam qui sunt.
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 100,
                  delay: 0.9,
                }}
                className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
              >
                View All
              </motion.button>
            </div>
            < motion.img
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 100,
                delay: 0.4,
              }}
              src={satelite2Img}
              alt=""
              className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Banner2
