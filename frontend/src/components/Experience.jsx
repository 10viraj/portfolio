import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';

const Experience = () => {
  const bulletPoints = [
    'Developed Laravel MVC applications and reusable CRUD modules for core business logic.',
    'Built and integrated REST APIs for frontend client applications with structured responses.',
    'Worked with MySQL, Eloquent relationships, database queries, migrations, and robust data validation.',
    'Implemented authentication, authorization, and API security protocols using JWT.',
    'Debugged backend issues and optimized database queries using Laravel development tools and Postman.',
  ];

  const toolsUsed = [
    'Laravel',
    'PHP',
    'MySQL',
    'REST APIs',
    'JWT Authentication',
    'Postman',
    'Eloquent ORM',
    'Git & GitHub',
  ];

  return (
    <section className="py-20 sm:py-24 bg-white border-b border-slate-200/70">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60">
            Work History
          </span>
          <h2 className="text-headline-lg mt-3 mb-4">Development Experience</h2>
          <p className="text-body-lg">
            Hands-on software development experience gained in an industry setting.
          </p>
        </div>

        {/* Experience Timeline Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-9 hover:border-blue-300 transition-colors">
            
            {/* Top row: Role, Company, and Duration badge */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div className="flex items-start gap-4">
                <div className="p-3.5 bg-blue-50 text-blue-600 rounded-xl border border-blue-100 flex-shrink-0">
                  <FaBriefcase size={22} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Laravel Backend Developer Intern
                  </h3>
                  <p className="text-base font-semibold text-blue-600 mt-0.5">
                    Vibrant Coders
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-1.5 sm:gap-1 text-xs sm:text-sm text-slate-600">
                <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 font-semibold px-3 py-1 rounded-full border border-blue-200/70">
                  <FaCalendarAlt className="text-xs text-blue-600" />
                  8 Months Internship
                </span>
                <span className="flex items-center gap-1 text-slate-500 text-xs mt-0.5">
                  <FaMapMarkerAlt className="text-slate-400" />
                  Ahmedabad, Gujarat, India
                </span>
              </div>
            </div>

            {/* Middle: Professional Responsibilities / Impact */}
            <div className="py-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
                Key Responsibilities & Deliverables
              </h4>
              <ul className="space-y-3.5">
                {bulletPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                    <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0 text-sm" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom: Stack Badges */}
            <div className="pt-6 border-t border-slate-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Technologies & Tools Applied
              </h4>
              <div className="flex flex-wrap gap-2">
                {toolsUsed.map((tool, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center text-xs font-medium px-3 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
