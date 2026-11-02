import React from 'react';
import { FaArrowRight, FaDownload, FaMapMarkerAlt, FaCheckCircle, FaGithub, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-white to-white pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-slate-200/70">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Recruiter-Focused Value Proposition */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Immediate Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-semibold mb-6 shadow-xs animate-fade-in">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              Available for Immediate Joining
            </div>

            {/* Greeting & Main Role Heading */}
            <p className="text-base sm:text-lg font-medium text-slate-600 mb-1">
              Hi, I'm <span className="font-semibold text-slate-900">Viraj Somani</span>
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Full-Stack Developer
            </h1>

            {/* Supporting Tech Stack Line */}
            <p className="text-lg sm:text-xl font-semibold text-blue-600 mb-5 tracking-normal">
              React.js &bull; Node.js &bull; Laravel &bull; PHP &bull; REST APIs
            </p>

            {/* Professional Description */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mb-8 leading-relaxed mx-auto lg:mx-0">
              Full-stack developer with hands-on experience building modern web applications, REST APIs, authentication systems and database-driven applications using React.js, Node.js, Laravel, PHP and MySQL.
            </p>

            {/* Clear CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8">
              <a
                href="#projects"
                className="btn-primary"
              >
                <span>View Projects</span>
                <FaArrowRight className="text-xs" />
              </a>

              <a
                href="/Viraj_Somani_Resume.pdf"
                download="Viraj_Somani_Resume.pdf"
                className="btn-secondary"
              >
                <FaDownload className="text-xs text-blue-600" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors text-sm sm:text-base font-medium"
              >
                Contact Me
              </a>
            </div>

            {/* Quick Highlights / Location / Quick Links */}
            <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-1.5">
                <FaMapMarkerAlt className="text-blue-600" />
                <span>Ahmedabad, Gujarat, India</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FaCheckCircle className="text-emerald-600" />
                <span>8 Months Industry Internship</span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/10viraj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-slate-900 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href="mailto:virajsomani10@gmail.com"
                  className="text-slate-500 hover:text-blue-600 transition-colors"
                  aria-label="Send Email"
                >
                  <FaEnvelope size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Profile Image & Key Metrics */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative">
              {/* Outer clean border container */}
              <div className="p-3 bg-white rounded-3xl shadow-lg border border-slate-200/80">
                <img
                  loading="eager"
                  className="w-56 h-56 sm:w-64 sm:h-64 object-cover rounded-2xl"
                  src="/viraj1.jpg"
                  alt="Viraj Somani - Full-Stack Developer"
                />
              </div>

              {/* Floating Quick Card: Role Focus */}
              <div className="mt-4 bg-white/95 backdrop-blur-sm border border-slate-200/90 rounded-xl p-3.5 shadow-sm max-w-xs text-center sm:text-left">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                  Target Roles
                </p>
                <p className="text-xs sm:text-sm font-medium text-slate-800 leading-snug">
                  Full-Stack &bull; MERN &bull; Laravel/PHP &bull; Backend
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
