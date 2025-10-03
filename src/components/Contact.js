import React from "react";
import { FaGraduationCap, FaCalendar, FaUniversity, FaEnvelope, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
const educationData = [
  {
    degree: "B-Tech in Information Technology",
    institution: "MVGR College Of Engineering",
    duration: "2022 - present",
    description:
      "Focused on core IT subjects including web technologies, data structures, and software engineering.",
  },
  {
    degree: "Intermediate (MPC)",
    institution: "PPR Kaumudi Junior College",
    duration: "2020 - 2022",
    description: "Mathematics, Physics, and Chemistry with emphasis on problem-solving and analytical skills.",
  },
  {
    degree: "High School",
    institution: "ZPH School, Laveru",
    duration: "2015 - 2020",
    description: "General education with a strong academic foundation in all subjects.",
  },
];

const EducationCard = ({ degree, institution, duration, gpa, description }) => (
  <motion.div
    whileHover={{ scale: 1.03, boxShadow: "0 8px 20px rgba(0,0,0,0.15)" }}
    transition={{ type: "spring", stiffness: 300 }}
    className="bg-white border border-blue-200 rounded-xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-sm cursor-pointer"
  >
    <div className="flex items-center gap-5">
      <div className="p-4 bg-blue-100 text-blue-600 rounded-full text-3xl">
        <FaUniversity />
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-900">{degree}</h3>
        <p className="text-blue-600 font-semibold">{institution}</p>
        <p className="mt-2 text-gray-700">{description}</p>
      </div>
    </div>
    <div className="text-right">
      <p className="flex items-center gap-2 text-gray-600 text-sm mb-1">
        <FaCalendar /> {duration}
      </p>
    </div>
  </motion.div>
);

const Contact = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-50 via-blue-50 to-blue-100 py-16 px-6 sm:px-12 lg:px-24 min-h-screen">
      <div className="max-w-5xl mx-auto flex flex-col gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center bg-blue-100 text-blue-600 rounded-full w-16 h-16 mx-auto mb-6 text-4xl">
            <FaGraduationCap />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">Hire Me</h2>
          <p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed mb-6">
            I'm available for full-time positions, internships, and freelance projects. Let's
            create something amazing together!
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <a
              href="/Ashapu Mohan-Resume.pdf"
              className="flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition"
              download
            >
              <FaDownload /> View Resume
            </a>
            <a
              href="mailto:ashapumohan123@gmail.com"
              className="flex items-center gap-3 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-100 transition"
            >
              <FaEnvelope /> Contact Me
            </a>
          </div>
        </motion.div>
        <div>
          <h2 className="text-4xl font-extrabold mb-6 text-gray-900 text-center">Education</h2>
          <p className="text-center my- text-base sm:text-lg text-gray-700 max-w-2xl mx-auto pb-5">
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
          className="text-center mt-20"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Ready to Start Your Next Project?</h2>
          <p className="text-gray-700 mb-6 max-w-xl mx-auto">
            I'm always looking for exciting opportunities to create exceptional digital
            experiences. Let's discuss how we can work together.
          </p>
          <a
            href="mailto:ashapumohan123@gmail.com"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
