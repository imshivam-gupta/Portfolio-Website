import React from 'react'
import {motion } from 'framer-motion';

const About = () => {
  return (
    <div id="about" className={"bg-gray-100 min-h-[100vh] sm:px-6 lg:px-24 px-4"}>

        <div className="max-w-12xl mx-auto x-4  md:mt-0 pt-24 pb-12 bg-gray-100">
            <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
                About Me
            </h2>
        </div>

        <div>
          <motion.div className='flex flex-row justify-around'>

            <p className="mt-4 text-xl  w-5/6 text-gray-500 text-left">
                Hi, I'm Shivam Gupta, a sophomore at Netaji Subash University of Technology, Delhi, pursuing a major in Computer Science with a specialization in Artificial Intelligence. I'm deeply passionate about all aspects of computer science, and I'm always looking for ways to expand my knowledge and develop my skills.

                I have a strong foundation in Data Structures and am currently learning the MERN stack for web development. With every new project, I'm eager to push the boundaries and create innovative, dynamic web applications. I'm excited about the endless possibilities that web development offers, and I look forward to making a meaningful contribution to this field.

                In addition to my coursework, I've also taken part in several extracurricular activities, such as coding competitions and hackathons. These experiences have helped me develop my skills and deepen my passion for computer science.

                As I move forward in my studies, I'm excited about the opportunities that lie ahead. I'm eager to continue exploring new avenues in computer science and AI and to contribute to innovative solutions that have the potential to change the world.

                </p>
          </motion.div>
        </div>
        
    </div>
  )
}

export default About