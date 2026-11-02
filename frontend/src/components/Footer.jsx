import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200 py-12 text-slate-600">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand & Summary */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              Viraj Somani
            </h3>
            <p className="text-sm font-medium text-blue-600 mb-3">
              Full-Stack Developer &bull; React.js &bull; Node.js &bull; Laravel &bull; PHP
            </p>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md leading-relaxed">
              Equipped with 8 months of development internship experience and BCA + MCA degrees. Immediate joiner ready to contribute to engineering teams.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm">
              <li><a href="#home" className="hover:text-blue-600 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-blue-600 transition-colors">About</a></li>
              <li><a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a></li>
              <li><a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Connect & Resume */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
              Connect
            </h4>
            <div className="flex items-center gap-3 mb-4">
              <a
                href="https://github.com/10viraj"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 rounded-lg transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={16} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={16} />
              </a>
              <a
                href="mailto:virajsomani10@gmail.com"
                className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-blue-600 rounded-lg transition-colors"
                aria-label="Email"
              >
                <FaEnvelope size={16} />
              </a>
            </div>

            <a
              href="/Viraj_Somani_Resume.pdf"
              download="Viraj_Somani_Resume.pdf"
              className="inline-flex items-center text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline"
            >
              &darr; Download Resume (PDF)
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {currentYear} Viraj Somani. Built with React, Vite & Tailwind CSS.
          </p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <FaArrowUp size={11} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
