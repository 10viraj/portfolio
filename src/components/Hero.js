import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 relative overflow-hidden pt-24 pb-24">
      {/* Decorative background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-6 w-96 h-96 bg-blue-600/6 rounded-full blur-3xl animate-soft-float" />
        <div className="absolute bottom-10 -left-20 w-72 h-72 bg-cyan-500/6 rounded-full blur-3xl animate-soft-float" style={{ animationDelay: '1.6s' }} />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left: Content */}
          <div className="md:col-span-7 text-center md:text-left">
            <div className="inline-block mb-6 animate-fade-in-up">
              <span className="badge">Welcome to my portfolio</span>
            </div>

            <h1 className="mb-4 animate-fade-in-up text-white">
              <span className="block text-3xl md:text-4xl font-light">Hi, I'm</span>
              <span className="block text-5xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">Viraj Somani</span>
            </h1>

            <p className="text-lg md:text-2xl text-slate-300 mb-6 animate-fade-in-up font-medium tracking-wide">Full Stack Developer — React & Node.js Specialist</p>

            <p className="text-base md:text-lg text-slate-400 max-w-2xl mb-8 animate-fade-in-up leading-relaxed">
              Building elegant, scalable web solutions with modern technologies. I focus on intuitive user experiences and robust backend systems to deliver measurable results.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-4 sm:gap-6 animate-fade-in-up">
              <a href="#contact" className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-3 rounded-xl shadow-2xl transform hover:-translate-y-0.5 transition">
                Get In Touch
                <FaArrowRight className="ml-1" />
              </a>

              <a href="#projects" className="inline-flex items-center justify-center border border-slate-700 text-slate-200 px-5 py-3 rounded-xl hover:bg-slate-800 transition">View My Work</a>
            </div>
          </div>

          {/* Right: Decorative card */}
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-white/4 to-white/2 backdrop-blur-lg border border-white/6 shadow-xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-400/8 to-transparent opacity-60 animate-shimmer" />
             <img loading="lazy" className="w-50 h-50 rounded-full border-9 border-white/20 " src="/viraj1.jpg" alt="Viraj Somani" />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
