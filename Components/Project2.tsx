import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function Project2({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
        

        <div className="px-0 md:px-10">
            <h4 className="text-2xl font-light mt-1">ChatGPT Clone</h4>
            <p className="font-bold text-1xl mt-3 ">VIT UNIVERSITY</p>
            <div className="flex space-x-5 mt-2 ">
                <img className="h-10 w-10 rounded-full " src="https://camo.githubusercontent.com/3aa42ee93eafa8f736bac662e8ca536350dad790ba36f2f0cb1783aa2be42f6d/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f6e6578746a732d322e737667" alt="" />
                <img className="h-10 w-10 rounded-full " src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="" />
                <img className="h-10 w-10 rounded-full " src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="" />
                <img className="h-10 w-10 rounded-full " src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="" />
                <img className="h-10 w-10 rounded-full " src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="" />
                <img className="h-10 w-10 rounded-full " src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="" />
                <img className="h-10 w-10 rounded-full " src="https://camo.githubusercontent.com/5734d0669fe22ce04a1cb989a156cd32c379875f6bca56d5210c9432824856d9/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f7461696c77696e646373732f7461696c77696e646373732d69636f6e2e737667" alt="" />

            </div>
            <p className="uppercase py-5 text-gray-300">Jan 2023 - Present</p>
            <p>Built and Deployed my own ChatGPT AI Application using JavaScript. Tools used: Node js, Vanilla js, json, Github, OpenAI .</p>
            <span className="underline decoration-[#F7AB0A]/50"><a href="https://github.com/nikhilkumar293/Harnik_AI_BOT">GITHUB LINK</a></span>
        </div>
    </article>
  )
}

export default Project2