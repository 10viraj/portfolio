import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaCheck, FaLayerGroup } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Attendance Management System',
      category: 'Backend / Laravel',
      description: 'A robust web application designed for institutions and companies to manage attendance records, staff roles, and monthly reports.',
      technologies: ['Laravel', 'PHP', 'MySQL', 'REST API', 'Eloquent ORM'],
      features: [
        'Authentication and role-based access control (Admin, Staff, Student)',
        'Attendance tracking with automated monthly calculation and reporting',
        'Normalized MySQL database design with Eloquent relationships & CRUD',
      ],
      github: 'https://github.com/10viraj',
      liveDemo: null,
      highlight: true,
    },
    {
      title: 'Smart Diary',
      category: 'Mobile / Full-Stack',
      description: 'Cross-platform personal journaling application with rich text notes, secure cloud storage, and privacy protection.',
      technologies: ['React Native', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
      features: [
        'Encrypted private diary entries protected by JWT authentication',
        'Media attachments and sketch note support with calendar navigation',
        'Memory search, category tagging, and journaling frequency analytics',
      ],
      github: 'https://github.com/10viraj',
      liveDemo: null,
      highlight: false,
    },
    {
      title: 'Expense Tracker',
      category: 'Full-Stack / MERN',
      description: 'Full-stack financial management web dashboard allowing users to record, categorize, and analyze their daily income and expenses.',
      technologies: ['React.js', 'Express.js', 'REST API', 'JWT', 'Recharts'],
      features: [
        'Complete CRUD expense & income logging with category breakdowns',
        'Interactive financial analytics charts built with Recharts',
        'Secure RESTful API integration with JWT-protected user routes',
      ],
      github: 'https://github.com/10viraj',
      liveDemo: null,
      highlight: false,
    },
    {
      title: 'VibeStream — Music Streaming App',
      category: 'Full-Stack / React',
      description: 'A modern music streaming web application featuring dynamic audio playback, personal library management, and real-time updates.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
      features: [
        'Real-time streaming audio player with queue and volume controls',
        'Dynamic music search and custom user-curated playlists',
        'User authentication with persistent preferences in MongoDB',
      ],
      github: 'https://github.com/10viraj/vibeStream',
      liveDemo: null,
      highlight: false,
    },
    {
      title: 'MyChat — Real-Time Chat Application',
      category: 'Full-Stack / WebSockets',
      description: 'Instant messaging platform supporting one-on-one direct messages, room channels, and active user presence indicators.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Socket.io'],
      features: [
        'Bi-directional real-time communication powered by WebSockets / Socket.io',
        'Private messaging, group channels, and online status detection',
        'JWT user authentication and persistent message history in MongoDB',
      ],
      github: 'https://github.com/10viraj/Mychat',
      liveDemo: null,
      highlight: false,
    },
    {
      title: 'Personal Developer Portfolio',
      category: 'Full-Stack / Production',
      description: 'Clean, recruiter-focused personal portfolio website showcasing real engineering projects, technical stack, and verified experience.',
      technologies: ['React.js', 'Vite', 'Tailwind CSS', 'Node.js', 'Express'],
      features: [
        'High-performance Vite SPA with sub-second load times and clean light UI',
        'Working Node/Express contact form with automated Nodemailer notifications',
        'Responsive mobile-to-desktop design optimized for recruiter reviews',
      ],
      github: 'https://github.com/10viraj/portfolio',
      liveDemo: 'https://portfolio-fryl.vercel.app/',
      highlight: false,
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-white border-b border-slate-200/70">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60">
            Selected Work
          </span>
          <h2 className="text-headline-lg mt-3 mb-4">Featured Projects</h2>
          <p className="text-body-lg">
            Practical full-stack and backend applications highlighting real architectural ability, database design, and API integrations.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-200 flex flex-col justify-between p-6 sm:p-7 relative group"
            >
              {/* Top Meta: Category */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                    <FaLayerGroup className="text-blue-600 text-2xs" />
                    {project.category}
                  </span>
                  {project.highlight && (
                    <span className="text-2xs font-bold uppercase tracking-wide px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Internship Stack
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                  {project.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* 3 Key Features */}
                <div className="py-3 border-t border-slate-100 mb-4">
                  <p className="text-2xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                    Key Features
                  </p>
                  <ul className="space-y-2">
                    {project.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-700 leading-normal">
                        <FaCheck className="text-emerald-500 mt-0.5 flex-shrink-0 text-2xs" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-2xs font-medium px-2 py-0.5 rounded bg-blue-50/70 text-blue-700 border border-blue-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white transition-colors"
                  >
                    <FaGithub size={13} />
                    <span>GitHub</span>
                  </a>
                )}

                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                  >
                    <FaExternalLinkAlt size={11} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom GitHub Callout */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500">
            More open-source repositories and code samples available on{' '}
            <a
              href="https://github.com/10viraj"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-600 hover:underline inline-flex items-center gap-1"
            >
              GitHub / 10viraj &rarr;
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Projects;
