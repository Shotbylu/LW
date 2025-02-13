import React from 'react';

const Stats = () => {
  const stats = [
    { value: '20+', label: 'Projects Completed' },
    { value: '3', label: 'Years Experience' },
    { value: '15+', label: 'Technologies' },
    { value: '98%', label: 'Client Satisfaction' },
  ];

  return (
    <section id="stats" className="py-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm">
            <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">
              {stat.value}
            </p>
            <p className="text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
