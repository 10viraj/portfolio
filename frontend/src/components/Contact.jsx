import React, { useState } from 'react';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheck,
  FaCheckCircle,
  FaLinkedin,
  FaGithub,
  FaSpinner,
  FaExclamationCircle,
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ submitting: false, success: false, error: 'Please fill out all fields.' });
      return;
    }

    setStatus({ submitting: true, success: false, error: null });

    try {
      // In production or via Vite proxy, endpoint is /api/contact
      const endpoint = import.meta.env?.PROD ? '/api/contact' : 'http://localhost:5000/api/contact';

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus({ submitting: false, success: true, error: null });
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          setStatus((prev) => ({ ...prev, success: false }));
        }, 5000);
      } else {
        setStatus({
          submitting: false,
          success: false,
          error: result.error || 'Failed to send message. Please reach out directly via email.',
        });
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      setStatus({
        submitting: false,
        success: false,
        error: 'Unable to reach backend server. Please email virajsomani10@gmail.com directly.',
      });
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200/70">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60">
            Get In Touch
          </span>
          <h2 className="text-headline-lg mt-3 mb-4">Contact Me</h2>
          <p className="text-body-lg">
            Looking for a dedicated Full-Stack or Backend Developer? Let's talk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Left Column: Direct Recruiter Contact Details */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                Feel free to contact me via email, phone, or LinkedIn.
              </p>

              <div className="space-y-4">
                {/* Availability */}
                <div className="p-3 bg-emerald-50 border border-emerald-200/80 rounded-xl flex items-center gap-3">
                  <FaCheckCircle className="text-emerald-600 text-lg flex-shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-emerald-900">Availability</p>
                    <p className="text-xs text-emerald-700 font-medium">Immediate Joiner</p>
                  </div>
                </div>

                {/* Email */}
                <a
                  href="mailto:virajsomani10@gmail.com"
                  className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                >
                  <div className="p-2.5 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
                    <FaEnvelope size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Email</h4>
                    <p className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                      virajsomani10@gmail.com
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+918780674650"
                  className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                >
                  <div className="p-2.5 bg-cyan-50 text-cyan-600 rounded-lg group-hover:bg-cyan-600 group-hover:text-white transition-colors flex-shrink-0">
                    <FaPhone size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Phone</h4>
                    <p className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                      +91 8780674650
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-3.5 p-3">
                  <div className="p-2.5 bg-purple-50 text-purple-600 rounded-lg flex-shrink-0">
                    <FaMapMarkerAlt size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Location</h4>
                    <p className="text-sm font-semibold text-slate-800">
                      Ahmedabad, Gujarat, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Profiles */}
              <div className="pt-6 mt-6 border-t border-slate-100">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Developer Profiles
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/10viraj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-xs font-semibold text-slate-700 transition-colors"
                  >
                    <FaGithub />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-blue-200 bg-blue-50/50 hover:bg-blue-50 text-xs font-semibold text-blue-700 transition-colors"
                  >
                    <FaLinkedin />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Working Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                Fill in the form below and I will get back to you as soon as possible.
              </p>

              {/* Status messages */}
              {status.success && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center gap-3">
                  <FaCheckCircle className="text-emerald-600 flex-shrink-0 text-base" />
                  <span>Thank you! Your message has been sent successfully. I will respond promptly.</span>
                </div>
              )}

              {status.error && (
                <div className="mb-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs sm:text-sm flex items-start gap-2.5">
                  <FaExclamationCircle className="text-amber-600 mt-0.5 flex-shrink-0 text-base" />
                  <div>
                    <p className="font-semibold">{status.error}</p>
                    <p className="mt-1">
                      You can also email directly to:{' '}
                      <a href="mailto:virajsomani10@gmail.com" className="underline font-bold">
                        virajsomani10@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 bg-white border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="e.g. John Doe / Tech Recruiter"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 bg-white border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="e.g. recruiter@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Message / Opportunity Details <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 bg-white border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about the role, project, or schedule an interview..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status.submitting}
                  className={`btn-primary w-full justify-center ${
                    status.submitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {status.submitting ? (
                    <>
                      <FaSpinner className="animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : status.success ? (
                    <>
                      <FaCheck />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
