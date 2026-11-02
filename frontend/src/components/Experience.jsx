import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: 'Laravel Backend Developer Intern',
      company: 'Vibrant Coders',
      duration: '8 Months',
      startDate: '2023',
      description: [
        'Developed and maintained backend applications using Laravel (PHP framework)',
        'Worked with MySQL database for data modeling, query optimization, and efficient data handling',
        'Implemented authentication & authorization using JWT',
        'Collaborated with frontend developers to ensure smooth API integration',
        'Debugged and resolved backend issues to improve application performance and reliability',
        'Followed MVC architecture and best coding practices for scalable development',
        'Used Git for version control and collaborated in a team environment',
      ],
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto">
        <h2 className="text-headline-lg mb-20 text-center text-white">Work Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="animate-fade-in-up">
              <div className="card-professional group">
                <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
                  <div className="flex items-start gap-4">
                    <div className="text-blue-400 text-4xl group-hover:scale-125 transition-transform duration-300 flex-shrink-0">
                      <FaBriefcase />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-blue-300 transition-colors">{exp.title}</h3>
                      <p className="text-cyan-400 text-sm font-medium">{exp.company}</p>
                    </div>
                  </div>
                  <div className="badge">{exp.duration}</div>
                </div>
                <ul className="space-y-3">
                  {exp.description.map((point, i) => (
                    <li key={i} className="flex gap-3 text-slate-300">
                      <span className="text-blue-400 mt-1 flex-shrink-0">▸</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
