import React from 'react';
import { FaCode, FaRocket, FaLightbulb } from 'react-icons/fa';

const About = () => {
  const highlights = [
    { icon: <FaCode />, title: 'Backend Development', desc: 'Expert in PHP, Laravel, and MySQL' },
    { icon: <FaRocket />, title: 'Performance Focused', desc: 'Building fast, scalable APIs' },
    { icon: <FaLightbulb />, title: 'Problem Solver', desc: 'Creative solutions for complex challenges' },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-headline-lg mb-8 text-center text-white">About Me</h2>
          <p className="text-body-lg text-slate-300 mb-8 animate-fade-in-up">
            I'm a dedicated Backend Developer with a passion for building scalable, reliable web applications. With expertise in the Laravel ecosystem, I've successfully delivered projects ranging from complex APIs to data-intensive backend platforms.
          </p>
          <p className="text-body-lg text-slate-300 animate-fade-in-up">
            My approach combines clean code practices, MVC architecture patterns, and a deep understanding of database design. I believe in continuous learning and staying ahead of technology trends to deliver innovative solutions.
          </p>
        </div>
          
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div key={index} className="card-professional group animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="text-4xl text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">{item.title}</h3>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
