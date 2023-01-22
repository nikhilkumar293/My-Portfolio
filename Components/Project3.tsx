import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function Project3({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
    
    <div className="px-0 md:px-10">
        <h4 className="text-2xl font-light mt-1">Privileged Identity Management:  </h4>
        <p className="font-bold text-1xl mt-3 ">VIT UNIVERSITY</p>
        <div className="flex space-x-5 mt-2 ">
            <img className="h-10 w-10 rounded-full " src="https://camo.githubusercontent.com/6df31a460cb0c38f960e92812c8b6f8bce4c7f13170fb4782f0b31ab8e792ac2/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6d6963726f736f66745f617a7572652f6d6963726f736f66745f617a7572652d69636f6e2e737667" alt="" />
            <img className="h-10 w-10 rounded-full " src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="" />
            <img className="h-10 w-10 rounded-full " src="https://cdn.worldvectorlogo.com/logos/office-2.svg" alt="" />
            <img className="h-10 w-10 rounded-full " src="https://w7.pngwing.com/pngs/5/777/png-transparent-microsoft-launcher-android-windows-phone-cortana-beautifully-arrow.png" alt="" />
            <img className="h-10 w-10 rounded-full " src="https://www.vmware.com/content/dam/digitalmarketing/vmware/en/images/icons/vmw-avatar-corporate.png" alt="" />
            <img className="h-10 w-10 rounded-full " src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Windows_logo_-_2012.svg/1024px-Windows_logo_-_2012.svg.png" alt="" />

        </div>
        <p className="uppercase py-5 text-gray-300">Aug 2022 - Dec 2022</p>
        <p>Privileged identity management provides time-based and approval-based role activation to mitigate the risks of excessive, unnecessary, or misused access permissions on resources that you care about. Tools used:  Microsoft intune, Microsoft Endpoint.</p>
    </div>
</article>
  )
}

export default Project3