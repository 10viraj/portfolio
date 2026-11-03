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
  FaPaperPlane,
  FaCopy,
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
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('virajsomani10@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ submitting: false, success: false, error: 'Please fill out all fields.' });
      return;
    }

    setStatus({ submitting: true, success: false, error: null });

    try {
      // Primary: Send to built-in Vite/Vercel /api/contact handler
      const response = await fetch('/api/contact', {
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

      const result = await response.json().catch(() => ({}));

      if (response.ok && result.success) {
        setStatus({ submitting: false, success: true, error: null });
        setFormData({ name: '', email: '', message: '' });
        return;
      }

      // If primary endpoint fails, try secondary direct delivery
      throw new Error(result.error || 'Primary endpoint failed, attempting fallback...');
    } catch (err) {
      console.warn('Primary dispatch failed, using direct cloud delivery...', err);

      try {
        const fallbackRes = await fetch('https://formsubmit.co/ajax/virajsomani10@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            message: formData.message.trim(),
            _subject: `[Portfolio Contact] Message from ${formData.name.trim()}`,
          }),
        });

        const fallbackData = await fallbackRes.json().catch(() => ({}));

        if (fallbackRes.ok && (fallbackData.success === 'true' || fallbackData.success === true)) {
          setStatus({ submitting: false, success: true, error: null });
          setFormData({ name: '', email: '', message: '' });
          return;
        }
      } catch (fallbackErr) {
        console.error('All dispatch methods exhausted:', fallbackErr);
      }

      // If both fail, let the user know
      setStatus({
        submitting: false,
        success: false,
        error: 'Unable to send message right now. Please email virajsomani10@gmail.com directly.',
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
            Looking for a dedicated Full-Stack or Backend Developer? Send a message and it will be delivered directly to my email address.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Left Column: Direct Recruiter Contact Details */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                Direct Contact Details
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                All messages sent through this form arrive directly in my personal inbox.
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

                {/* Email with copy button */}
                <div className="p-3 rounded-xl hover:bg-slate-50 transition-colors border border-slate-100">
                  <div className="flex items-start justify-between gap-2">
                    <a
                      href="mailto:virajsomani10@gmail.com"
                      className="flex items-start gap-3.5 group"
                    >
                      <div className="p-2.5 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
                        <FaEnvelope size={18} />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Email Address</h4>
                        <p className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                          virajsomani10@gmail.com
                        </p>
                      </div>
                    </a>

                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="p-2 text-slate-400 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                      title="Copy email to clipboard"
                      aria-label="Copy email"
                    >
                      {copied ? <FaCheck className="text-emerald-600 text-xs" /> : <FaCopy className="text-xs" />}
                    </button>
                  </div>
                  {copied && (
                    <p className="text-2xs text-emerald-600 font-semibold mt-1 pl-12 animate-fade-in">
                      Copied virajsomani10@gmail.com to clipboard!
                    </p>
                  )}
                </div>

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
                  Professional Profiles
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

          {/* Right Column: Instant Working Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                Fill in the form below and your message will be sent directly to <strong>virajsomani10@gmail.com</strong>.
              </p>

              {/* Status banner: Success */}
              {status.success && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center gap-3 animate-fade-in">
                  <FaCheckCircle className="text-emerald-600 flex-shrink-0 text-base" />
                  <div>
                    <p className="font-bold">Message Sent Successfully!</p>
                    <p className="text-xs text-emerald-700 mt-0.5">Your email was delivered directly to virajsomani10@gmail.com. I will get back to you shortly.</p>
                  </div>
                </div>
              )}

              {/* Status banner: Error */}
              {status.error && (
                <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs sm:text-sm animate-fade-in">
                  <p className="font-semibold">{status.error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Your Name / Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 bg-white border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="e.g. John Doe / Tech Recruiter / Company Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Your Email Address <span className="text-red-500">*</span>
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

                <div className="space-y-3">
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
                        <span>Sending Directly to virajsomani10@gmail.com...</span>
                      </>
                    ) : status.success ? (
                      <>
                        <FaCheck />
                        <span>Sent!</span>
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="text-xs" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-2xs text-slate-400">
                    Sends directly to virajsomani10@gmail.com &bull; No permissions needed
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
