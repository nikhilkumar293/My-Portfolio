import React from 'react'
import { motion } from "framer-motion";

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
        <motion.img 
        initial={{
            y:-100,
            opacity: 0,
        }}
        transition={{duration:1.2}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
        className="w-22 h-22 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center" 
        src="https://media.licdn.com/dms/image/C560BAQFzCzasPGnK2w/company-logo_100_100/0/1602395856559?e=1682553600&v=beta&t=eJAAZj--x3yZSRrP-QlwadcBIK0BFdastLWNjxNs3es" alt="" />

        <div className="px-0 md:px-10">
            <h4 className="text-2xl font-light mt-1">Software Engineer(Intern)</h4>
            <p className="font-bold text-1xl mt-3 ">VOLTAMP TRANSFORMERS LIMITED</p>
            <div className="flex space-x-5 mt-2 ">
                <img className="h-10 w-10 rounded-full " src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="" />
                <img className="h-10 w-10 rounded-full " src="https://repository-images.githubusercontent.com/400161932/257a8be2-bbf2-4218-a55b-219d819578b2" alt="" />
                <img className="h-10 w-10 rounded-full " src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="" />
                <img className="h-10 w-10 rounded-full " src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="" />
                <img className="h-10 w-10 rounded-full " src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="" />
                <img className="h-10 w-10 rounded-full " src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="" />

            </div>
            <p className="uppercase py-5 text-gray-300">04/MAR/2020 - 04/OCT/2020</p>
            <p>Conducted research and presented findings to leadership. Resolved issues to meet customer requirements. Built professional working relationships with peers and supervisors.</p>
        </div>
    </article>
  )
}

export default ExperienceCard