import logo from "../assets/just-cm-svg.svg";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return ( 
    <nav className="flex items-center justify-between bg-[#FBFBFB] py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:py-4">
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
      <div className="flex space-x-4">
        <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" className="text-black text-2xl hover:text-gray-700 transition duration-200">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer" className="text-black text-2xl hover:text-gray-700 transition duration-200">
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
