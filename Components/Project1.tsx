import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function Project1({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
       

        <div className="px-0 md:px-10">
            <h4 className="text-2xl font-light mt-1">Calculating Susceptibility of the Ship</h4>
            <p className="font-bold text-1xl mt-3 ">INDIAN NAVY</p>
            <div className="flex space-x-5 mt-2 ">
                <img className="h-10 w-10 rounded-full " src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="" />
                <img className="h-10 w-10 rounded-full " src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="" />
                <img className="h-10 w-10 rounded-full " src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="" />
                <img className="h-10 w-10 rounded-full " src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="" />
                <img className="h-10 w-10 rounded-full " src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="" />
                <img className="h-10 w-10 rounded-full " src="https://repository-images.githubusercontent.com/400161932/257a8be2-bbf2-4218-a55b-219d819578b2" alt="" />

            </div>
            <p className="uppercase py-5 text-gray-300">Oct 2020 - Mar 2021</p>
            <p>With the use of the java GUI and the website, the user can easily check whether the ship is susceptible to ocean currents or not. Tools used: Java, HTML/CSS, Javascript and Java GUI(Java FX)</p>
            <span className="underline decoration-[#F7AB0A]/50"><a href="https://github.com/nikhilkumar293/Parametric-roll-Web">GITHUB LINK</a></span>
        </div>
    </article>
  )
}

export default Project1