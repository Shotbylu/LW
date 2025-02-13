import React from 'react';
import { Github, Mail, Linkedin, Phone, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Lungelo Sibisi
            </span>
          </h2>
          <h3 className="text-3xl text-gray-400 mb-6">
            Software Engineer & Web Developer
          </h3>
          <p className="text-lg text-gray-300 mb-8">
            Crafting digital experiences through clean code and creative solutions. 
            Specialized in full-stack development with a passion for emerging technologies.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <a href="#" className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors">
              <Github size={20} />
              <span>Github</span>
            </a>
            <a href="#" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors">
              <Mail size={20} />
              <span>Email</span>
            </a>
            <a href="#" className="flex items-center gap-2 bg-blue-800 hover:bg-blue-900 px-4 py-2 rounded-lg transition-colors">
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a href="#" className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors">
              <Phone size={20} />
              <span>Contact</span>
            </a>
            <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all">
              <Download size={20} />
              <span>Download Resume</span>
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl"></div>
          <img
            src="/api/placeholder/400/400"
            alt="Profile"
            className="relative rounded-2xl w-full"
            width="400"
            height="400"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
