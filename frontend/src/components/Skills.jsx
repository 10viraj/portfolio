import React from 'react';
import {
  FaReact,
  FaNode,
  FaPhp,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaDatabase,
  FaLock,
  FaServer,
  FaExchangeAlt,
} from 'react-icons/fa';
import {
  SiLaravel,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiPostman,
  SiStripe,
  SiRazorpay,
  SiSocketdotio,
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      description: 'Building responsive, user-friendly, component-driven client applications.',
      skills: [
        { name: 'React.js', icon: <FaReact className="text-[#61DAFB]" /> },
        { name: 'React Native', icon: <FaReact className="text-[#61DAFB]" /> },
        { name: 'JavaScript (ES6+)', icon: <FaJsSquare className="text-[#F7DF1E]" /> },
        { name: 'HTML5', icon: <FaHtml5 className="text-[#E34F26]" /> },
        { name: 'CSS3', icon: <FaCss3Alt className="text-[#1572B6]" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      ],
    },
    {
      title: 'Backend & APIs',
      description: 'Architecting scalable server-side systems, MVC business logic, and RESTful APIs.',
      skills: [
        { name: 'Node.js', icon: <FaNode className="text-[#339933]" /> },
        { name: 'Express.js', icon: <SiExpress className="text-slate-800" /> },
        { name: 'Laravel', icon: <SiLaravel className="text-[#FF2D20]" /> },
        { name: 'PHP', icon: <FaPhp className="text-[#777BB4]" /> },
        { name: 'REST APIs', icon: <FaServer className="text-blue-600" /> },
        { name: 'JWT Authentication', icon: <FaLock className="text-amber-500" /> },
        { name: 'CRUD Operations', icon: <FaExchangeAlt className="text-indigo-600" /> },
        { name: 'MVC Architecture', icon: <FaServer className="text-teal-600" /> },
        { name: 'Socket.io', icon: <SiSocketdotio className="text-slate-900" /> },
      ],
    },
    {
      title: 'Databases & Modeling',
      description: 'Structuring relational and document databases with optimized queries.',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
        { name: 'Mongoose', icon: <SiMongodb className="text-[#880000]" /> },
        { name: 'MySQL', icon: <SiMysql className="text-[#4479A1]" /> },
        { name: 'Database Design', icon: <FaDatabase className="text-blue-700" /> },
      ],
    },
    {
      title: 'Development Tools',
      description: 'Version control, API testing, and UI handoff tools used daily.',
      skills: [
        { name: 'Git', icon: <FaGitAlt className="text-[#F05032]" /> },
        { name: 'GitHub', icon: <FaGithub className="text-slate-900" /> },
        { name: 'Postman', icon: <SiPostman className="text-[#FF6C37]" /> },
        { name: 'Figma', icon: <FaFigma className="text-[#F24E1E]" /> },
      ],
    },
    {
      title: 'Integrations & Services',
      description: 'Third-party payment gateways and external REST services.',
      skills: [
        { name: 'Stripe', icon: <SiStripe className="text-[#635BFF]" /> },
        { name: 'Razorpay', icon: <SiRazorpay className="text-[#0C2340]" /> },
        { name: 'API Integration', icon: <FaExchangeAlt className="text-emerald-600" /> },
      ],
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200/70">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60">
            Technical Stack
          </span>
          <h2 className="text-headline-lg mt-3 mb-4">Skills & Technologies</h2>
          <p className="text-body-lg">
            A categorized overview of the tools, frameworks, and languages I use to build complete web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((cat, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs hover:shadow-md transition-shadow ${
                index === 1 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="mb-4">
                <h3 className="text-lg font-bold text-slate-900">
                  {cat.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200/80 text-xs sm:text-sm font-medium text-slate-700 transition-colors"
                  >
                    <span className="text-base flex-shrink-0">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
