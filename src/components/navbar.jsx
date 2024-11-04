import logo from "../assets/just-cm-svg.svg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { useState } from "react";


const Navbar = () => {
  return ( 
    <nav className="sticky top-0 left-0 flex items-center justify-between bg-[#FBFBFB] py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:py-4">
      <div className="flex items-center">
        <img className="m-0 h-10" src={logo} alt="logo" />
        {/* Navigation Links */}
        <ul className="flex space-x-6 ml-4">
          <li><a href="#home" className="text-black hover:text-gray-700 transition duration-200">Home</a></li>
          <li><a href="#about" className="text-black hover:text-gray-700 transition duration-200">About</a></li>
          <li><a href="#work" className="text-black hover:text-gray-700 transition duration-200">Work</a></li>
          {/* Add more links as needed */}
        </ul>
      </div>

      {/* Social Media Links */}
      <div className="mr-4 flex space-x-4">
        <a href="https://github.com/caidenm11" target="_blank" rel="noopener noreferrer" className="text-black text-2xl hover:text-gray-700 transition duration-200">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/caiden-merklin-80b37624/" target="_blank" rel="noopener noreferrer" className="text-black text-2xl hover:text-gray-700 transition duration-200">
          <FaLinkedin />
        </a>
        <a target="_blank" rel="noopener noreferrer" className="text-black text-2xl hover:text-gray-700 transition duration-200">
            {/* TODO MAKE THIS A PROPER PAGE -> NOT ADDING my email here, should be a proper contact page or else my email will be scraped. */}
          <CgMail />
        </a>
        
      </div>
    </nav>
  );
};

export default Navbar;
