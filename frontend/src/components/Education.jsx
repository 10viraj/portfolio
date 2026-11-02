import React from 'react';
import { FaGraduationCap, FaUniversity, FaAward } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      degree: 'Master of Computer Application (MCA)',
      school: 'Lok Jagruti University, Ahmedabad',
      status: 'Graduated',
      description: 'Advanced coursework in software engineering, distributed systems, full-stack web development, DBMS, and application architecture.',
      icon: <FaGraduationCap size={22} className="text-blue-600" />,
    },
    {
      degree: 'Bachelor of Computer Application (BCA)',
      school: 'Lok Jagruti University, Ahmedabad',
      status: 'Completed',
      description: 'Core foundation in Object-Oriented Programming (OOP), Data Structures, C/C++, Java, PHP, and Relational Database Management Systems (MySQL).',
      icon: <FaUniversity size={20} className="text-indigo-600" />,
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      school: 'Gujarat Secondary and Higher Secondary Education Board',
      status: 'Completed',
      description: 'Higher secondary education completed with focus on general science and mathematics.',
      icon: <FaAward size={20} className="text-amber-600" />,
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200/70">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60">
            Academic Background
          </span>
          <h2 className="text-headline-lg mt-3 mb-4">Education</h2>
          <p className="text-body-lg">
            My formal computer application degrees establishing structured software fundamentals.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-3xl mx-auto space-y-5">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs hover:shadow-md transition-shadow flex items-start gap-4 sm:gap-5"
            >
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 flex-shrink-0">
                {edu.icon}
              </div>

              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {edu.degree}
                  </h3>
                  <span className="inline-block w-fit text-2xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                    {edu.status}
                  </span>
                </div>

                <p className="text-xs sm:text-sm font-semibold text-slate-700 mb-2">
                  {edu.school}
                </p>

                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
