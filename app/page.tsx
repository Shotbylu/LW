'use client';
import Image from 'next/image';
import { useState } from 'react';
import Footer from './components/Footer';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.className = isDarkMode ? 'light-mode' : 'dark-mode';
  };

  return (
    <div className={`${isDarkMode ? 'dark-mode' : 'light-mode'} min-h-screen flex flex-col justify-between`}>
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
              className="hover:text-blue-400 transition-colors"
              onClick={toggleTheme}
            >
              <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
            </button>
          </div>
        </div>
      </nav>
      <Footer />
    </div>
  );
}
