import React from 'react'
import {motion} from "framer-motion";

type Props = {
    directionLeft?: boolean;
};

function Skill6({directionLeft}: Props) {
  return (
    <div className="group relative flex cursor-pointer">
        <motion.img
        initial={{
            x: directionLeft ?-200 : 200,
            opacity: 0,
        }}
        transition={{duration:1}}
        whileInView={{opacity:1,x:0}}
        src="https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667"
        className="rounded-full border border-gray-500 object-cover w-10 h-10 md:w-13 md:h-13 xl:w-20 xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out"

        />
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-10 w-10 md:w-13 md:h-13 xl:w-20 xl:h-20 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
                <p className="text-1xl font-bold text-black opacity-100">70%</p>
            </div>
        </div>
        
    </div>
  )
}

export default Skill6