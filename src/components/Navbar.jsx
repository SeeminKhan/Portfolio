import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // For icons

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="text-lg fixed top-0 w-full h-[70px]  bg-[#03001417] backdrop-blur-md z-50 flex items-center px-6 md:px-10 transition-all duration-300">
      {/* Centered Navigation for Desktop */}
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-full max-w-[500px] px-2">
        <div className="flex items-center justify-between w-full shadow-lg shadow-[#4c42d28f]/70 border border-[#4252d2af] bg-[#0300145e] px-5 py-2 rounded-full text-gray-300">
          <a href="#home" className="cursor-pointer hover:text-white transition duration-300">
            Home
          </a>
          <a href="#about" className="cursor-pointer hover:text-white transition duration-300">
            About
          </a>
          <a href="#skills" className="cursor-pointer hover:text-white transition duration-300">
            Skills
          </a>
          <a href="#projects" className="cursor-pointer hover:text-white transition duration-300">
            Projects
          </a>
          <a href="#contact" className="cursor-pointer hover:text-white transition duration-300">
            Contact
          </a>
        </div>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden ml-auto">
        <button onClick={toggleMenu} className="text-gray-300 focus:outline-none">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-[70px] left-0 w-full bg-[#030014e6] backdrop-blur-lg shadow-md"
          >
            <div className="flex flex-col items-center space-y-4 py-6">
              <a
                href="#home"
                className="text-gray-300 hover:text-white transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-300 hover:text-white transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a
                href="#skills"
                className="text-gray-300 hover:text-white transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-gray-300 hover:text-white transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-white transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
