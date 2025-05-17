import React from 'react';
import { FaTrophy, FaMedal, FaGraduationCap, FaAward } from 'react-icons/fa';

const certificates = [
  {
    certificate_type: 'Web Development Fundamentals',
    certificate_name: 'IBM Skillbuild',
    date: '2025',
  },
  {
    certificate_type: 'CCNAv7: Introduction to Networks',
    certificate_name: 'Cisco Networking Academy',
    date: '2024',
  },
  {
    certificate_type: 'Cloud Computing',
    certificate_name: 'NPTEL',
    date: '2024',
  },
  {
    certificate_type: 'Macroeconomics: Theory and Policy',
    certificate_name: 'edX',
    date: '2024',
  },
];

const experience = [
  {
    simulation_name: 'Front-End Software Engineering Job Simulation',
    company_name: 'SkyScanner',
    year: '2025',
  },
  {
    simulation_name: 'Advanced Software Engineering Job Simulation',
    company_name: 'Walmart Global Tech',
    year: '2025',
  },
  {
    simulation_name: 'Data Visualisation: Business Insights Simulation',
    company_name: 'TATA',
    year: '2025',
  },
  {
    simulation_name: 'Salesforce Developer Virtual Internship',
    company_name: 'Salesforce',
    year: '2023',
  },
];

const SectionHeader = ({ icon, title }) => (
  <div className="flex items-center gap-3 mb-5">
    <div className="text-3xl text-blue-500">{icon}</div>
    <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
  </div>
);

const Item = ({ icon, title, subtitle, date }) => (
  <li className="p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-all">
    <div className="flex items-start gap-3">
      <div className="text-yellow-400 text-2xl">{icon}</div>
      <div className="flex-1">
        <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
        <p className="text-sm text-blue-600 font-medium">{subtitle}</p>
        <p className="text-sm font-semibold text-gray-600">{date}</p>
      </div>
    </div>
  </li>
);

const Projects = () => {
  return (
    <section className="bg-slate-50 py-10 px-4 sm:px-6 lg:px-20">
      {/* Divider */}
      <div className="flex items-center justify-center mb-4">
        <div className="w-28 sm:w-40 border-t border-black"></div>
        <span className="px-4 text-sm border border-gray-200 bg-blue-100 text-blue-600 rounded-full">
          Milestones
        </span>
        <div className="w-28 sm:w-40 border-t border-black"></div>
      </div>

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-black">
        Achievements & Experience
      </h2>
      <p className="text-center text-gray-700 mt-2 font-medium max-w-2xl mx-auto">
        Recognitions, certifications, and professional journey that have shaped my career.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
        {/* Certificates */}
        <div className="shadow-lg rounded-xl p-6 hover:shadow-xl transition-all">
          <SectionHeader icon={<FaMedal />} title="Certificates & Achievements" />
          <ul className="space-y-3">
            {certificates.map((cert, index) => (
              <Item
                key={index}
                icon={<FaGraduationCap />}
                title={cert.certificate_type}
                subtitle={cert.certificate_name}
                date={cert.date}
              />
            ))}
          </ul>
        </div>

        {/* Experience */}
        <div className="shadow-lg rounded-xl p-6 hover:shadow-xl transition-all">
          <SectionHeader icon={<FaAward />} title="Professional Experience" />
          <ul className="space-y-3">
            {experience.map((exp, index) => (
              <Item
                key={index}
                icon={<FaTrophy />}
                title={exp.simulation_name}
                subtitle={exp.company_name}
                date={exp.year}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
