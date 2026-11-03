import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload, FaBolt } from 'react-icons/fa';

const OpenToWork = () => {
  return (
    <section className="py-16 sm:py-20 bg-slate-900 text-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs sm:text-sm font-semibold mb-6">
            <FaBolt className="text-emerald-400" />
            <span>Available for Immediate Joining</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Open to New Opportunities
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            I'm currently looking for Full-Stack, MERN Stack, React.js, Node.js and Laravel/PHP Developer opportunities. Available for immediate joining.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="https://www.linkedin.com/in/viraj-somani-2946a822a"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0A66C2] hover:bg-[#084e96] text-white font-medium px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl transition-colors text-sm sm:text-base shadow-sm"
            >
              <FaLinkedin size={18} />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/10viraj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-medium px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl border border-slate-700 transition-colors text-sm sm:text-base shadow-sm"
            >
              <FaGithub size={18} />
              <span>GitHub</span>
            </a>

            <a
              href="mailto:virajsomani10@gmail.com"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl transition-colors text-sm sm:text-base shadow-sm"
            >
              <FaEnvelope size={16} />
              <span>Email</span>
            </a>

            <a
              href="/Viraj_Somani_Resume.pdf"
              download="Viraj_Somani_Resume.pdf"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-900 font-medium px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl transition-colors text-sm sm:text-base shadow-sm"
            >
              <FaDownload size={15} className="text-blue-600" />
              <span>Download Resume</span>
            </a>
          </div>

          <div className="mt-8 text-xs sm:text-sm text-slate-400">
            📍 Based in Ahmedabad, India &bull; Open to On-site, Hybrid & Remote Roles
          </div>

        </div>
      </div>
    </section>
  );
};

export default OpenToWork;

