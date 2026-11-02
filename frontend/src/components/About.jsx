import React from 'react';
import { FaGraduationCap, FaBriefcase, FaServer, FaCode, FaCheck } from 'react-icons/fa';

const About = () => {
  const coreCompetencies = [
    'Frontend & UI with React.js & Tailwind CSS',
    'Backend systems with Node.js/Express & Laravel (PHP)',
    'RESTful API architecture & JWT Authentication',
    'Relational (MySQL) & NoSQL (MongoDB) databases',
    'Secure CRUD operations & MVC design patterns',
    'Version control & collaborative workflows via Git & GitHub',
  ];

  return (
    <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200/70">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60">
            Professional Background
          </span>
          <h2 className="text-headline-lg mt-3 mb-4">About Me</h2>
          <p className="text-body-lg">
            A quick overview of my education, hands-on development experience, and technical foundations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          {/* Main Bio Content */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-9 rounded-2xl border border-slate-200/90 shadow-xs space-y-5">
            <h3 className="text-xl font-bold text-slate-900">
              Passionate Developer Building Practical Web Solutions
            </h3>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              I hold a <strong>Bachelor of Computer Applications (BCA)</strong> and a <strong>Master of Computer Applications (MCA)</strong> from Lok Jagruti University, Ahmedabad. My technical journey combines structured computer science academics with real-world development practices.
            </p>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              During my <strong>8-month development internship</strong> as a Laravel Backend Developer at Vibrant Coders, I gained comprehensive experience building MVC web applications, designing database relationships with MySQL, implementing secure JWT authentication, and creating robust REST APIs.
            </p>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Alongside Laravel and PHP, I actively develop modern web applications with <strong>React.js</strong> and <strong>Node.js</strong>. I am comfortable working across the entire development cycle—from database schema design and server-side CRUD logic to interactive frontend UI integration and Git version control.
            </p>

            <div className="pt-4 border-t border-slate-100">
              <p className="text-sm font-semibold text-slate-800 mb-2">
                Current Goal:
              </p>
              <p className="text-sm text-slate-600">
                I am actively seeking full-time opportunities as a <strong>Full-Stack Developer</strong>, <strong>MERN Stack Developer</strong>, or <strong>Laravel / PHP Developer</strong> in Ahmedabad (or remote), available to join immediately.
              </p>
            </div>
          </div>

          {/* Right Highlights & Fast Facts */}
          <div className="lg:col-span-5 space-y-4">
            {/* Quick Education Card */}
            <div className="bg-white p-5 rounded-xl border border-slate-200/90 shadow-xs flex items-start gap-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-lg flex-shrink-0">
                <FaGraduationCap size={22} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">BCA + MCA Graduate</h4>
                <p className="text-xs text-slate-500 mt-0.5">Lok Jagruti University, Ahmedabad</p>
                <p className="text-xs text-slate-600 mt-1">Strong foundation in data structures, OOP, DBMS & software engineering.</p>
              </div>
            </div>

            {/* Quick Internship Card */}
            <div className="bg-white p-5 rounded-xl border border-slate-200/90 shadow-xs flex items-start gap-4">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg flex-shrink-0">
                <FaBriefcase size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">8-Month Development Internship</h4>
                <p className="text-xs text-slate-500 mt-0.5">Vibrant Coders &bull; Laravel Backend</p>
                <p className="text-xs text-slate-600 mt-1">Production experience building REST APIs, CRUD modules & database queries.</p>
              </div>
            </div>

            {/* Key Checklist Card */}
            <div className="bg-white p-5 rounded-xl border border-slate-200/90 shadow-xs">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Key Technical Strengths
              </h4>
              <ul className="space-y-2">
                {coreCompetencies.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <FaCheck className="text-emerald-500 mt-1 flex-shrink-0 text-xs" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
