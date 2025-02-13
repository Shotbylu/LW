import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24">
      <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="/api/placeholder/400/400"
            alt="About me"
            className="rounded-lg w-full"
          />
        </div>
        <div>
          <p className="text-lg text-gray-300 mb-4">
            Hello! I'm Lungelo Sibisi, a passionate software engineer and web developer with a knack for creating efficient and scalable web applications. With a background in computer science and years of experience in the industry, I have honed my skills in various programming languages and frameworks.
          </p>
          <p className="text-lg text-gray-300 mb-4">
            I thrive in collaborative environments and enjoy working on projects that challenge me to learn and grow. When I'm not coding, you can find me exploring new technologies, reading tech blogs, or contributing to open-source projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
