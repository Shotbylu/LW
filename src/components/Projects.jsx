import React from 'react';
import { ExternalLink, Code, Star } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Zentry Gaming',
      type: 'Website',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Layers',
      type: 'Website',
      image: '/api/placeholder/400/300',
      technologies: ['Next.js', 'TypeScript', 'Tailwind'],
    },
    {
      title: 'AI Summarizer',
      type: 'Website',
      image: '/api/placeholder/400/300',
      technologies: ['Python', 'TensorFlow', 'Flask'],
    },
  ];

  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm hover:bg-gray-800 transition-colors">
            <div className="relative mb-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg group-hover:opacity-75 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                  <ExternalLink size={20} />
                  View Project
                </button>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.type}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="text-sm bg-gray-700/50 px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between">
              <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                <Code size={20} />
                <span>Source</span>
              </button>
              <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Star size={20} />
                <span>Star</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
