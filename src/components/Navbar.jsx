import React from 'react';
import { Moon, Sun } from 'lucide-react';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <nav className="fixed top-0 w-full bg-[#0a0e27]/90 backdrop-blur-sm z-50 border-b border-blue-900/30">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          LS
        </h1>
        <div className="flex gap-8">
          <a className="hover:text-blue-400 transition-colors" href="#home">Home</a>
          <a className="hover:text-blue-400 transition-colors" href="#projects">Projects</a>
          <a className="hover:text-blue-400 transition-colors" href="#experience">Experience</a>
          <a className="hover:text-blue-400 transition-colors" href="#about">About</a>
          <a className="hover:text-blue-400 transition-colors" href="#contact">Contact</a>
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="hover:text-blue-400 transition-colors"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
