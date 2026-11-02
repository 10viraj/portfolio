import React from 'react';
import { FaDownload, FaFilePdf, FaEye } from 'react-icons/fa';

const ResumeSection = () => {
  return (
    <section id="resume" className="py-16 sm:py-20 bg-white border-b border-slate-200/70">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-50/40 rounded-3xl border border-blue-200/80 p-8 sm:p-12 text-center shadow-xs">
          
          <div className="inline-flex items-center justify-center p-3.5 bg-white text-blue-600 rounded-2xl shadow-xs border border-blue-100 mb-5">
            <FaFilePdf size={28} />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Download My Resume
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto mb-8 leading-relaxed">
            View my experience, technical skills and projects in detail.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/Viraj_Somani_Resume.pdf"
              download="Viraj_Somani_Resume.pdf"
              className="btn-primary"
            >
              <FaDownload className="text-sm" />
              <span>Download Resume</span>
            </a>

            <a
              href="/Viraj_Somani_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <FaEye className="text-sm text-slate-500" />
              <span>View in Browser</span>
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500">
            <span>&bull; Format: PDF</span>
            <span>&bull; Verified 8-Month Experience</span>
            <span>&bull; Immediate Joiner Status</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ResumeSection;

