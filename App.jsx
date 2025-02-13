import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Projects from './components/Projects';
import Experience from './components/Experience';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark-mode bg-[#0a0e27] text-white' : 'light-mode bg-white text-black'}`}>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <main className="max-w-6xl mx-auto px-6 pt-24">
        <Hero />
        <Stats />
        <Projects />
        <Experience />
        <About />
        <Contact />
      </main>
    </div>
  );
};

export default App;
