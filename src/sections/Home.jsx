import React from 'react'
import Typewriter from 'typewriter-effect';
import {motion } from 'framer-motion';
import Coderbg from "../images/person-coding.png";
import { AiFillGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { SiLeetcode } from 'react-icons/si';
import { SiCodechef } from 'react-icons/si';


// new Typewriter('#typewriter', {
//   strings: ['Hello', 'World'],
//   autoStart: true,
// });

const Home = () => {
  return (
    <div id="/" className='flex flex-col md:flex-row items-center justify-around  min-h-screen px-8 sm:px-6 lg:px-18'>

    <div >
        <div className="sm:text-center lg:text-left">
            <h2 className="text-3xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-5xl">
                <span className="block text-black">
                    Hi there<span className="wave">👋</span>,  I am Shivam
                </span>
            
            <span className="block text-themeColor z-0 lg:inline">
                <Typewriter 
                    options={{
                        strings: [
                            'Full Stack Web Developer', 
                            'Competitive Programmer',
                            'Problem Solver'
                        ],
                        autoStart: true,
                        loop: true,
                        pauseFor: 2000,
                        delay:150
                    }}
                />
            </span>
            </h2>

            <p className="mt-3 text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              I am a Full Stack Web Developer. I am currently studying at Netaji Subash University of Technology and pursuing Computer Science with specialization in Artifical Intelligence
            </p>

            <div className="flex md:justify-start ">
             
                <a href={"/"} className="mr-5 cursor-pointer mt-8 hover:scale-125">
                  <AiFillGithub className='text-4xl'/>
                </a>
                <a href={"/"} className="mr-5 cursor-pointer mt-8 hover:scale-125">
                  <BsLinkedin className='text-4xl'/>
                </a>
                <a href={"/"} className="mr-5 cursor-pointer mt-8 hover:scale-125">
                  <SiLeetcode className='text-4xl'/>
                </a>
                <a href={"/"} className="mr-5 cursor-pointer mt-8 hover:scale-125">
                  <SiCodechef className='text-4xl'/>
                </a>

            </div>
        </div>

    </div>

    <motion.img
        initial="hidden"
        whileInView={"visible"}
        variants={{
        visible: {
            y: 0,
            opacity: 1,
            transition: {
            type: "spring",
            },
        },
        hidden: { opacity: 1, y: 80 },
        }}
        src={Coderbg}
        alt=""
        className="md:w-2/5 hidden sm:block person-coding -z-50"
    />


    </div>
  )
}

export default Home