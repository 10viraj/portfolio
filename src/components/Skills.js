import React from 'react';
import { FaReact, FaNode, FaDatabase, FaPhp, FaPython, FaGit } from 'react-icons/fa';
import { SiMongodb, SiLaravel, SiDjango, SiTailwindcss } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', icon: <FaReact className="text-blue-400" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: 'React Native', icon: <FaReact className="text-blue-400" /> },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', icon: <FaNode className="text-green-400" /> },
        { name: 'Laravel', icon: <SiLaravel className="text-red-400" /> },
        { name: 'Django', icon: <SiDjango className="text-green-500" /> },
        { name: 'PHP', icon: <FaPhp className="text-purple-400" /> },
      ],
    },
    {
      category: 'Database & Tools',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb className="text-green-400" /> },
        { name: 'SQL & DBMS', icon: <FaDatabase className="text-blue-400" /> },
        { name: 'Git & GitHub', icon: <FaGit className="text-orange-400" /> },
        { name: 'Python', icon: <FaPython className="text-yellow-400" /> },
      ],
    },
    {
      category: 'Specializations',
      skills: [
        'JWT Authentication',
        'Stripe Integration',
        'Razorpay Integration',
        'Socket.io',
      ],
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto">
        <h2 className="text-headline-lg mb-20 text-center text-white">Skills & Technologies</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card-professional animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <h3 className="text-xl font-semibold text-white mb-8 text-center">{category.category}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    {typeof skill === 'object' && skill.icon && (
                      <div className="text-3xl group-hover:scale-110 transition-transform duration-300">{skill.icon}</div>
                    )}
                    <span className="text-slate-300 font-medium group-hover:text-white transition-colors">
                      {typeof skill === 'string' ? skill : skill.name}
                    </span>
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
