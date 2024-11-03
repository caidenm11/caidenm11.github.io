import logo from "../assets/just-cm-svg.svg"
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";

// TODO -> change this to my logo
// TODO -> follow my mockup with the hyperlinks

const Navbar = () => {
  return ( 
        <nav className="bg-red-700 mb-20 flex items-center justify-between py-3" >
            <div className="flex flex-shrink- items-center">
                <img src={logo} 

                alt="logo" />
            </div>
            <div className = "m-8 flex items-center justify-center gap-4">
                <FaGithub>
                </FaGithub>
                <FaLinkedin></FaLinkedin>

            </div>
        </nav>
    );
};

export default Navbar