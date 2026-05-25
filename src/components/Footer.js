import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter,FaInstagram, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-700/50 text-white py-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">Viraj Somani</h3>
            <p className="text-slate-400 text-sm">Full Stack Developer | React & Node.js</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Quick Links</h4>
            <ul className="text-slate-400 space-y-2 text-sm">
              <li><a href="#home" className="hover:text-blue-400 transition-colors duration-300">Home</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition-colors duration-300">Projects</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors duration-300">Contact</a></li>
              <li><a href="#skills" className="hover:text-blue-400 transition-colors duration-300">Skills</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Follow Me</h4>
            <div className="flex gap-4">
              <a href="https://github.com/10viraj" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 text-xl transition-all duration-300 hover:scale-125 hover:-translate-y-1">
                <FaGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 text-xl transition-all duration-300 hover:scale-125 hover:-translate-y-1">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-300 text-xl transition-all duration-300 hover:scale-125 hover:-translate-y-1">
                <FaTwitter />
              </a>
            <a href="https://www.instagram.com/viraj_somani10/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pink-400 text-xl transition-all duration-300 hover:scale-125 hover:-translate-y-1">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-700/50 pt-8 flex justify-between items-center">
          <p className="text-slate-400 text-sm">&copy; {currentYear} Viraj Somani. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:shadow-lg hover:shadow-blue-500/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            aria-label="Scroll to top"
          >
            <FaArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
