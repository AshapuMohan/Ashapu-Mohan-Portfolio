import React from 'react';
import { MdCheck } from 'react-icons/md';

function Skills() {
  const skillSet = [
    {
      icon: 'fa-code',
      title: 'Frontend',
      items: ['HTML, CSS, JavaScript', 'Bootstrap, Tailwind CSS', 'React'],
    },
    {
      icon: 'fa-server',
      title: 'Backend',
      items: ['Node.js', 'Express', 'Restful APIs'],
    },
    {
      icon: 'fa-database',
      title: 'Database',
      items: ['MongoDB', 'SQL'],
    },
    {
      icon: 'fa-code',
      title: 'Programming',
      items: ['C, C++', 'Java Development', 'Data Structures & Algorithms', 'Problem Solving'],
    },
    {
      icon: 'fa-laptop-code',
      title: 'Tools',
      items: ['Git & GitHub', 'VS Code', 'Few AI Tools'],
    },
    {
      icon: 'fa-user-tie',
      title: 'Soft Skills',
      items: ['Team Leadership', 'Communication'],
    },
  ];

  return (
    <div className="w-full bg-white text-black px-4 py-10 lg:py-20" id="skills">
      {/* Divider */}
      <div className="flex items-center justify-center mb-4">
        <div className="w-28 sm:w-40 border-t border-black"></div>
        <span className="px-4 text-blue-600 text-sm border border-gray-200 bg-blue-100 rounded-full">
          Expertise
        </span>
        <div className="w-28 sm:w-40 border-t border-black"></div>
      </div>

      <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 tracking-tight">
        Skills & Technologies
      </h2>
      <p className="text-center text-gray-700 font-medium max-w-xl mx-auto">
        A diverse set of skills and technologies I've mastered to deliver exceptional results.
      </p>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {skillSet.map((skill, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 shadow-lg rounded-xl p-6 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            <div className="flex items-center gap-3 mb-4">
              <i className={`fa-solid ${skill.icon} text-xl text-blue-600`}></i>
              <h3 className="text-xl font-semibold">{skill.title}</h3>
            </div>
            <ul className="text-sm space-y-2">
              {skill.items.map((item, i) => (
                <li key={i} className="flex items-start">
                  <MdCheck className="text-blue-600 mt-1 mr-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
