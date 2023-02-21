import React, { useState } from 'react'
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import Hamburger from "hamburger-react";

const Navbar = () => {

  const links = [
    { name: "Home",     route: "/" },
    { name: "About",    route: "about"},
    { name: "Technologies",    route: "technologies"},
    { name: "Projects", route: "projects"},
    { name: "Contact",  route: "contact"},
  ];

  const [toggle, setToggle] = useState(false);


  return (
    <div>
      <nav className="bg-white z-1 shadow-xl md:px-10 px-1 fixed w-full top-0">
        <div className="flex justify-between items-center py-2 md:py-4 md:px-2 pl-2 mx-auto">

          <div className="flex items-center cursor-pointer">
            <img src='logo.jpeg' className='rounded-full h-8'alt=''/>
            <div className="text-xl font-medium text-decoration-none whitespace-nowrap text-black">
              &nbsp; Shivam Gupta
            </div>
          </div>
         
          <div className="hidden justify-between items-center w-full md:flex md:w-auto ">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium">
              {links.map((link_item) => (
                <li className="cursor-pointer" key={link_item.route}>

                  <Link
                    to={link_item.route}
                    activeClass={"text-white bg-purple-500"}
                    spy={true}
                    smooth={true}
                    className="block py-2 px-3 text-black hover:bg-purple-500 hover:text-white rounded-md"
                  >
                    {link_item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div  className="flex md:hidden items-center">
            <Hamburger
                toggled={toggle}
                size={22}
                duration={0.8}
                distance={"lg"}
                toggle={setToggle}
                color={"#000000"}
              />
          </div>

        </div>


      </nav>

      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0, transition: { type: "spring" } }}
            exit={{ x: 200, transition: { type: "spring" } }}
            className= "bg-white py-2 px-2 md:p-0 z-50 fixed top-16 mt-2 rounded-lg shadow-lg right-2 block w-40"  
          >
            <ul class="md:hidden md:flex-row md:space-y-8 md:mt-0 md:text-md md:font-medium">
              {links.map((el) => (
                <Link
                  to={el.route}
                  activeClass={"text-white bg-blue-500"}
                  className={
                    "hover:bg-blue-500 text-black block px-3 py-2 rounded-md text-base font-medium mt-1 hover:text-white" 
                  }
                  spy={true}
                  smooth={true}
                  onClick={() => setToggle(false)}
                >
                  <li>{el.name}</li>
                </Link>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}

export default Navbar