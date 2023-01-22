import React from 'react'
import { motion } from "framer-motion";

//
type Props = {}

function About({}: Props) {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-0 py-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            About
        </h3>
        <motion.img
        initial={{
            x:-200,
            opacity: 0,
        }}
        transition={{
            duration:1.2,
        }}
        whileInView={{
            opacity: 1,
            x:0
        }}
        viewport={{ once:true}}
        src="https://avatars.githubusercontent.com/u/71305499?v=4"
        className="-mb-20 md:md-0 flex-shrink-0 w-40 h-40 rounded-full object-cover md:rounded-lg md:w-50 md:h-95 xl:w-[300px] xl:h-[300px]"
        />

        <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-semibold">Here is a <span className="underline decoration-[#F7AB0A]/50">little</span>{" "} background </h4>
            <p className="text-sm">
            Highly motivated and detail-oriented software developer with a strong background in computer science and a passion for creating innovative solutions. Experience in Cloud Automation, Java GUI and Web Development . Seeking a challenging role as a software developer to utilize my skills and gain experience in a professional setting. Also have Strong applied experience.
            Looking forward for a beginner role to enhance and explore my technical knowledge gained at VIT University in the last four years. I have been a team lead for the project development team for a Technical Club(CSI) and developed many interesting projects also.
            </p>


        </div>




    </div>
  )
}

export default About