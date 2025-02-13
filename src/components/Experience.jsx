import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'Tech Corp',
      period: '2022 - Present',
      description: 'Lead development of enterprise applications using React and Node.js',
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions',
      period: '2020 - 2022',
      description: 'Built scalable web applications and managed client relationships',
    },
    {
      title: 'Junior Developer',
      company: 'StartUp Inc',
      period: '2019 - 2020',
      description: 'Developed and maintained company website and internal tools',
    },
  ];

  return (
    <section id="experience" className="py-20">
      <h2 className="text-3xl font-bold mb-12">Experience</h2>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
            <p className="text-gray-400 mb-4">{exp.company} - {exp.period}</p>
            <p className="text-gray-300">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
