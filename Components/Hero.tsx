import Link from 'next/link'
import React, { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

type Props = {}

export default function Hero({}: Props) {
    const [text,count]=useTypewriter({
        words: [
            "Hi, You finally found me!!!",
            "The-Name-is-Nikhil.tsx",
            "{The_Guy_Who_Love_to_Code}",

        ],
        loop: true,
        delaySpeed: 2000,
    });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        
         <BackgroundCircles></BackgroundCircles>
        
         <img className="relative rounded-full h-32 w-32 mx-auto object-cover"src="https://avatars.githubusercontent.com/u/71305499?v=4" alt="Nikhil's face was here"></img>
         <div className="z-20">
         <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
         </h2>
         <h1 className="text-4xl lg:text-5xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
         </h1>

         <div className="pt-5"> <Link href="#about"><button className="heroButton">About</button></Link>
          <Link href="#experience"><button className="heroButton">Experience</button></Link>
          <Link href="#skills"><button className="heroButton">Skills</button></Link>
          <Link href="#projects"><button className="heroButton">Projects</button></Link>
         </div>
         </div>     
    </div>
    
  )
}