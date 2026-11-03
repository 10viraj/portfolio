import React, { useState } from 'react';
import { FaBars, FaTimes, FaDownload } from 'react-icons/fa';

const Header = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="container mx-auto flex items-center justify-between h-16">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left group flex items-center gap-2 cursor-pointer focus:outline-none"
          aria-label="Viraj Somani Home"
        >
          <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
            Viraj Somani
          </span>
          {/* <span className="hidden sm:inline-flex items-center text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200/60">
            Full-Stack Developer
          </span> */}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="px-3 py-1.5 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-all"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/Viraj_Somani_Resume.pdf"
            download="Viraj_Somani_Resume.pdf"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-blue-600 px-3.5 py-1.5 rounded-lg border border-slate-300 hover:border-blue-400 bg-white transition-all shadow-xs"
          >
            <FaDownload className="text-xs text-blue-600" />
            <span>Resume</span>
          </a>

          <button
            onClick={() => handleNavClick('contact')}
            className="inline-flex items-center text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-4 py-1.5 rounded-lg transition-colors shadow-xs"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="/Viraj_Somani_Resume.pdf"
            download="Viraj_Somani_Resume.pdf"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-600 px-2.5 py-1 rounded-md border border-blue-200 bg-blue-50"
          >
            <FaDownload className="text-2xs" />
            Resume
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-700 hover:text-blue-600 rounded-lg hover:bg-slate-100 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-3 shadow-lg animate-fade-in">
          <nav className="flex flex-col space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-left w-full px-3 py-2.5 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="/Viraj_Somani_Resume.pdf"
                download="Viraj_Somani_Resume.pdf"
                className="w-full text-center inline-flex items-center justify-center gap-2 text-sm font-medium py-2 rounded-lg border border-slate-300 text-slate-700 bg-slate-50"
              >
                <FaDownload className="text-xs text-blue-600" />
                Download Resume (PDF)
              </a>
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full text-center text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 py-2 rounded-lg"
              >
                Contact Me
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
