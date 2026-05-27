import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCheck } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Something went wrong! Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-32 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto">
        <h2 className="text-headline-lg mb-20 text-center text-white">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <h3 className="text-headline-sm text-white mb-12">Let's Connect</h3>
            <div className="space-y-8">
              <a href="tel:+918780674650" className="flex items-start gap-4 group p-4 rounded-xl hover:bg-slate-700/30 transition-all duration-300">
                <div className="text-blue-400 text-3xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <FaPhone />
                </div>
                <div>
                  <h4 className="font-semibold text-white group-hover:text-blue-300 transition-colors text-sm">Phone</h4>
                  <p className="text-slate-400 group-hover:text-slate-300 transition-colors text-sm mt-1">+91 8780674650</p>
                </div>
              </a>
              <a href="mailto:virajsomani10@gmail.com" className="flex items-start gap-4 group p-4 rounded-xl hover:bg-slate-700/30 transition-all duration-300">
                <div className="text-cyan-400 text-3xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="font-semibold text-white group-hover:text-cyan-300 transition-colors text-sm">Email</h4>
                  <p className="text-slate-400 group-hover:text-slate-300 transition-colors text-sm mt-1">virajsomani10@gmail.com</p>
                </div>
              </a>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-700/20">
                <div className="text-purple-400 text-3xl flex-shrink-0">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">Location</h4>
                  <p className="text-slate-400 text-sm mt-1">Ahmedabad, Gujarat, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 animate-slide-in-right">
            <div>
              <label className="block text-white font-semibold mb-3 text-sm">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-white font-semibold mb-3 text-sm">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-white font-semibold mb-3 text-sm">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting || submitted}
              className={`btn-primary w-full justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? (
                'Sending...'
              ) : submitted ? (
                <>
                  <FaCheck /> Message Sent!
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
