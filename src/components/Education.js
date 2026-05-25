import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      degree: 'Master of Computer Application (MCA)',
      school: 'Lok Jagruti University, Ahmedabad',
      year: 'Graduated',
      icon: '🎓',
    },
    {
      degree: 'Bachelor of Computer Application (BCA)',
      school: 'Lok Jagruti University, Ahmedabad',
      year: 'Completed',
      icon: '📚',
    },
    {
      degree: 'Higher Secondary Education Board (HSC)',
      school: 'Gujarat Secondary and Higher Secondary Education Board',
      year: 'Completed',
      icon: '🏆',
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto">
        <h2 className="text-headline-lg mb-20 text-center text-white">Education</h2>
        <div className="max-w-3xl mx-auto">
          {educationData.map((edu, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="card-professional group mb-6">
                <div className="flex items-start gap-4">
                  <div className="text-4xl group-hover:scale-125 transition-transform duration-300 flex-shrink-0">{edu.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">{edu.degree}</h3>
                    <p className="text-slate-400 text-sm mb-3">{edu.school}</p>
                    <span className="badge">{edu.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
