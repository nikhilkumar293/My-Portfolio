import { motion } from 'framer-motion'
import React from 'react'
import Project1 from './Project1'
import Project2 from './Project2'
import Project3 from './Project3'
import Project4 from './Project4'

type Props = {}

function Project({}: Props) {
   
  return (
    <motion.div
    initial={{ opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration:1.5}}

    
    className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-5 py-0 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Projects</h3>
        <div className="w-full flex space-x-5 overflow-x-scroll snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 ">
            <Project1 />
            <Project2 />
            <Project3 />
            <Project4 />


        </div>
    </motion.div>
  )
}

export default Project