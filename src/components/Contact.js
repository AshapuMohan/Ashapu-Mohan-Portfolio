import React from "react";
import { FaGraduationCap, FaUniversity, FaEnvelope, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
const educationData = [
  {
    degree: "B-Tech in Information Technology",
    institution: "MVGR College Of Engineering",
    duration: "Oct ‘22 - present",
    description:
      "Focused on core IT subjects including web technologies, data structures, and software engineering.",
    icon: <img src="/mvgr.png" alt="MVGR Logo" className="w-15 h-10 rounded object-fill" />,
  },
  {
    degree: "Intermediate (MPC)",
    institution: "PPR Kaumudi Junior College",
    duration: "Aug ‘20 – Mar ‘22",
    description: "Mathematics, Physics, and Chemistry with emphasis on problem-solving and analytical skills.",
    icon: <img src="/ppr.png" alt="PPR Logo" className="w-15 h-10 rounded object-fill" />,

  },
  {
    degree: "High School",
    institution: "ZPH School, Laveru",
    duration: "Jun ‘15 – Apr ‘20",
    description: "General education with a strong academic foundation in all subjects.",
    icon: <FaUniversity className="w-15 h-10 text-blue-600 dark:text-blue-400" />,
  },
];

const EducationCard = ({ degree, institution, duration, icon, description }) => (
  <motion.div
    className="bg-white dark:bg-zinc-800 border border-blue-200 dark:border-blue-900 rounded-xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-sm cursor-pointer text-black dark:text-white transition-colors duration-300"
  >
    <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-5">
      <span>
        {icon}
      </span>
      <div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{degree}</h3>
        <p className="text-blue-500 dark:text-blue-400 font-semibold">{institution}</p>
        <p className="mt-2 text-gray-700 dark:text-[#627b9b]">{description}</p>
      </div>
    </div>
    <div className="text-right items-start">
      <p className="flex items-center gap-2 text-gray-600 dark:text-[#627b9b] text-sm mb-1">
        {duration}
      </p>
    </div>
  </motion.div>
);

const Contact = () => {
  return (
    <section className="py-5 px-6 sm:px-12 lg:px-24 min-h-screen bg-white dark:bg-zinc-900 text-black dark:text-white transition-colors duration-500">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        <div>
          <div className="flex items-center justify-center text-blue-600 rounded-full w-16 h-16 mx-auto mb-4 text-4xl">
            <FaGraduationCap />
          </div>
          <h2 className="text-3xl text-center sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight py-1">Education</h2>
          <p className="text-center my- text-base sm:text-lg text-gray-700 dark:text-[#627b9b] max-w-2xl mx-auto py-3">
            My academic journey that built the foundation for my technical expertise.
          </p>

          <div className="flex flex-col gap-8">
            {educationData.map((edu, idx) => (
              <EducationCard key={idx} {...edu} />
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">Hire Me</h2>
          <p className="max-w-3xl mx-auto text-gray-700 dark:text-[#627b9b] text-lg leading-relaxed">
            I'm available for full-time positions, internships, and freelance projects. Let's
            create something amazing together!
          </p>
        </motion.div>
        <div id="contacting" className=" flex flex-wrap justify-center gap-5">
          <a
            href="/Ashapu Mohan-Resume.pdf"
            className="flex px-8 lg:py-3 py-3 items-center rounded-full font-semibold bg-black dark:bg-white text-white dark:text-black cursor-pointer hover:scale-105 transition-transform shadow-xl"
            download
          >
            <FaDownload className="text-lg mr-1" /> View Resume
          </a>
          <a
            href="mailto:ashapumohan123@gmail.com"
            className="flex px-8 lg:py-3 py-3 items-center rounded-full font-semibold border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-[#627b9b] hover:scale-105 transition shadow-sm"
          >
            <FaEnvelope className="text-lg mr-1" /> Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
