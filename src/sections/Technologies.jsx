import React from 'react'
import {motion } from 'framer-motion';
import Tool from '../components/Tool';

const Technologies = () => {


  return (
    <div id="technologies" className={"bg-white min-h-[100vh] sm:px-6 lg:px-24 px-4"}>

        <div className="max-w-12xl mx-auto x-4  md:mt-0 pt-24 pb-2">
            <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
                Tools & Technologies
            </h2>
        </div>

        <div>
          <motion.div>
            <p className="mt-4 text-xl  text-gray-500 text-center">
                Currently, I'm proficient in a range of tools and technologies that are integral to my field which include:
            </p>
          </motion.div>
          <motion.div className="flex flex-wrap mt-8 flex flex-wrap justify-between">
                
          
                <Tool toolName={"C Language"} toolIconClass="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"/>
                <Tool toolName={"C++"} toolIconClass="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"/>
                <Tool toolName={"Java"} toolIconClass="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"/>
                <Tool toolName={"Python"} toolIconClass=" https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"/>
                <Tool toolName={"Javascript"} toolIconClass="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"/>
                <Tool toolName={"MongoDB"} toolIconClass="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"/>
                <Tool toolName={"Express.js"} toolIconClass="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"/>
                <Tool toolName={"React.js"} toolIconClass="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"/>
                <Tool toolName={"Node.js"} toolIconClass="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"/>
                <Tool toolName={"Redux"} toolIconClass="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"/>
                <Tool toolName={"Bootstrap"} toolIconClass="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg"/>
                <Tool toolName={"Tailwind"} toolIconClass="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"/>
                <Tool toolName={"MySQL"} toolIconClass="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"/>
                <Tool toolName={"Firebase"} toolIconClass="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"/>
                <Tool toolName={"Git"} toolIconClass="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg"/>
                <Tool toolName={"Figma"} toolIconClass="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"/>
                <Tool toolName={"HTML"} toolIconClass="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"/>
                <Tool toolName={"CSS"} toolIconClass="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"/>
                <Tool toolName={"Github"} toolIconClass="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"/>
                <Tool toolName={"PHP"} toolIconClass="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"/>
                
          </motion.div>
        </div>
        
    </div>
  )
}

export default Technologies