import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce application with payment integration, product management, and user authentication.',
      github: 'https://github.com/10viraj/E-commerce',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Music Streaming App',
      description: 'Streaming platform with real-time updates, user authentication, and dynamic music library management.',
      github: 'https://github.com/10viraj/vibeStream',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Booking System',
      description: 'Reservation and booking management system with calendar integration and user notifications.',
      github: 'https://github.com/10viraj/Mochat',
      technologies: ['React', 'Node.js', 'MongoDB', 'JWT'],
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto">
        <h2 className="text-headline-lg mb-20 text-center text-white">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card-professional group relative overflow-hidden animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
              
              <div className="relative">
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${project.color} rounded-full blur-3xl opacity-0 group-hover:opacity-15 transition-opacity duration-500`}></div>
                
                <h3 className="text-lg font-bold text-white mb-3 relative z-10 group-hover:text-blue-300 transition-colors">{project.title}</h3>
                <p className="text-slate-400 mb-6 text-sm leading-relaxed relative z-10">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8 relative z-10">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-blue-500/10 text-blue-300 px-3 py-1 rounded-full text-xs font-medium border border-blue-500/20 group-hover:bg-blue-500/20 group-hover:border-blue-500/40 transition-all">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors group/link relative z-10"
                >
                  <FaGithub /> 
                  <span className="group-hover/link:translate-x-1 transition-transform">View Code</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
