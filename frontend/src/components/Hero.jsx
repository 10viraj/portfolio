import React from 'react';
import { FaArrowRight, FaDownload, FaMapMarkerAlt, FaCheckCircle, FaGithub, FaEnvelope, FaCode } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-white to-white pt-10 pb-16 sm:pt-16 sm:pb-24 border-b border-slate-200/70 overflow-hidden">
      {/* Subtle background decorative shapes */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-slate-100/60 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">
          
          {/* Left Column: Recruiter-Focused Value Proposition */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Immediate Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-semibold mb-6 shadow-xs animate-fade-in">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              Available for Immediate Joining
            </div>

            {/* Greeting & Main Role Heading */}
            <p className="text-base sm:text-lg font-medium text-slate-500 mb-1">
              Hi, I'm <span className="font-bold text-slate-900">Viraj Somani</span>
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
                className="inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors text-sm sm:text-base font-semibold"
              >
                Contact Me
              </a>
            </div>

            {/* Recruiter Trust Markers / Quick Highlights */}
            <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-5 sm:gap-6 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-1.5 font-medium">
                <FaMapMarkerAlt className="text-blue-600" />
                <span>Ahmedabad, India</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <FaCheckCircle className="text-emerald-600" />
                <span>8-Month Laravel Internship</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <FaCode className="text-indigo-600" />
                <span>BCA + MCA Graduate</span>
              </div>
              <div className="flex items-center gap-3 pl-2 sm:border-l sm:border-slate-300">
                <a
                  href="https://github.com/10viraj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-slate-900 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <FaGithub size={19} />
                </a>
                <a
                  href="mailto:virajsomani10@gmail.com"
                  className="text-slate-500 hover:text-blue-600 transition-colors"
                  aria-label="Send Email"
                >
                  <FaEnvelope size={19} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Unified Executive Profile Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[340px] sm:max-w-[370px] bg-white rounded-[2rem] p-4 sm:p-5 shadow-xl border border-slate-200/90 hover:shadow-2xl transition-all duration-300">
              
              {/* Card Header: Immediate Joiner Pill */}
              <div className="flex items-center justify-center pb-3.5">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold tracking-wider uppercase shadow-2xs">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>Immediate Joiner</span>
                </div>
              </div>

              {/* Photo: Clean cropped full-bleed image with elegant rounded corners */}
              <div className="w-full aspect-[434/498] overflow-hidden rounded-[1.25rem] border border-slate-200/60 shadow-inner bg-slate-900">
                <img
                  loading="eager"
                  className="w-full h-full object-cover object-top"
                  src="/viraj-profile.jpg"
                  alt="Viraj Somani - Full-Stack Developer"
                />
              </div>

              {/* Card Footer: Target Engineering Roles */}
              <div className="pt-4 pb-1 text-center">
                <p className="text-2xs font-extrabold uppercase tracking-widest text-slate-400 mb-1">
                  Target Engineering Roles
                </p>
                <p className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                  Full-Stack &bull; MERN &bull; Laravel / PHP &bull; Backend
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
