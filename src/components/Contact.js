import React from 'react';
import { FaGraduationCap, FaCalendar,FaUniversity } from 'react-icons/fa';

const educationData = [
  {
    degree: 'B-Tech in Information Technology',
    institution: 'MVGR College Of Engineering',
    duration: '2022 - present',
    gpa: '7.41/10',
    description: 'Focused on core IT subjects including web technologies, data structures, and software engineering.',
  },
  {
    degree: 'Intermediate (MPC)',
    institution: 'PPR Kaumudi Junior College',
    duration: '2020 - 2022',
    gpa: '8.5/10',
    description: 'Mathematics, Physics, and Chemistry with emphasis on problem-solving and analytical skills.',
  },
  {
    degree: 'High School',
    institution: 'ZPH School, Laveru',
    duration: '2015 - 2020',
    gpa: '10/10',
    description: 'General education with a strong academic foundation in all subjects.',
  }
];

const EducationCard = ({ degree, institution, duration, gpa, description }) => (
  <div className="w-full bg-white border border-blue-100 shadow-sm rounded-xl p-5 flex flex-col gap-4 md:flex-row justify-between items-start md:items-center transition-transform hover:scale-[1.01]">
    <div className="flex items-start gap-4">
      <div className="p-3 bg-blue-100 text-blue-600 rounded-full text-xl">
        <FaUniversity />
      </div>
      <div>
        <h3 className="text-lg font-bold text-gray-900">{degree}</h3>
        <p className="text-sm text-blue-600 font-medium">{institution}</p>
        <p className="text-sm text-gray-700 mt-1">{description}</p>
      </div>
    </div>
    <div className="md:mt-0 text-right">
      <p className="flex items-center text-sm text-gray-600 justify-start md:justify-end">
        <FaCalendar className="mr-2" /> {duration}
      </p>
      <span className="mt-1 inline-block text-xs bg-purple-50 text-blue-600 font-semibold px-2 py-1 rounded">
        GPA: {gpa}
      </span>
    </div>
  </div>
);

const Contact = () => {
  return (
    <div className="flex flex-col items-center py-10 px-4 w-full">
      {/* Hire Me Section */}
      <div className='flex flex-col items-center py-10 px-4 w-full text-center'>
        <i className="fa-solid fa-suitcase p-3 bg-blue-100 text-blue-600 rounded-full text-xl"></i>
        <h2 className="p-3 text-3xl md:text-4xl font-bold tracking-tight text-black">Hire Me</h2>
        <p className='text-black max-w-2xl'>
          I'm available for full-time positions, internships, and freelance projects. Let's create something amazing together!
        </p>
        <div className='flex flex-col sm:flex-row items-center justify-center mt-8 gap-4'>
          <a href='/AshapuMohan-Resume.pdf' className='flex items-center bg-blue-600 px-4 py-2 rounded-xl text-white font-semibold'>
            <i className="fa-solid fa-download pr-2"></i>View Resume
          </a>
          <a href='mailto:ashapumohan123@gmail.com' className='flex items-center bg-white border border-blue-600 px-4 py-2 rounded-xl text-blue-600 font-semibold'>
            <i className="fa-solid fa-envelope pr-2"></i>Contact Me
          </a>
        </div>
      </div>
      <p className="p-3 bg-blue-100 text-xl text-blue-600 rounded-full">
        <FaGraduationCap />
      </p>
      <h2 className="p-3 text-3xl md:text-4xl font-bold tracking-tight text-black">Education</h2>
      <p className="text-black max-w-2xl mb-6 text-center">
        My academic journey that built the foundation for my technical expertise.
      </p>
      <div className="flex flex-col gap-6 w-full max-w-4xl">
        {educationData.map((edu, index) => (
          <EducationCard key={index} {...edu} />
        ))}
      </div>
      <h2 className="p-3 text-3xl md:text-4xl mt-15 font-bold tracking-tight text-black">Ready to Start Your Next Project?</h2>
      <p>I'm always looking for exciting opportunities to create exceptional digital experiences. Let's discuss how we can work together.</p>
      <a href='mailto:ashapumohan123@gmail.com' className='bg-blue-500 text-white font-semibold p-2 m-3 rounded'>Get In Touch</a>
    </div>
  );
};

export default Contact;
