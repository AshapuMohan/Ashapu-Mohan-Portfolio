import React from "react";
import { FaGraduationCap, FaUniversity, FaEnvelope, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import { Calendar, Building2 } from "lucide-react";

const educationData = [
  {
    degree: "B-Tech in Information Technology",
    institution: "MVGR College Of Engineering",
    duration: "Oct ‘22 - present",
    description:
      "Focused on core IT subjects including web technologies, data structures, and software engineering.",
    image: "/mvgr.png",
  },
  {
    degree: "Intermediate (MPC)",
    institution: "PPR Kaumudi Junior College",
    duration: "Aug ‘20 – Mar ‘22",
    description: "Mathematics, Physics, and Chemistry with emphasis on problem-solving and analytical skills.",
    image: "/ppr.png",
  },
  {
    degree: "High School",
    institution: "ZPH School, Laveru",
    duration: "Jun ‘15 – Apr ‘20",
    description: "General education with a strong academic foundation in all subjects.",
    icon: FaUniversity, // Component reference, not element
  },
];

const EducationCard = ({ degree, institution, duration, description, image, icon: Icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group relative flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10"
  >
    <div className="flex-shrink-0">
      <div className="w-16 h-16 rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 p-2 border border-zinc-200 dark:border-zinc-700 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
        {image ? (
          <img src={image} alt={institution} className="w-full h-full object-contain" />
        ) : (
          <Icon className="w-8 h-8 text-zinc-500 dark:text-zinc-400 group-hover:text-indigo-500 transition-colors" />
        )}
      </div>
    </div>

    <div className="flex-grow space-y-2">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
        <div>
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-indigo-500 transition-colors">
            {degree}
          </h3>
          <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 font-medium">
            <Building2 className="w-4 h-4" />
            <span>{institution}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-500 bg-zinc-100 dark:bg-zinc-800/50 px-3 py-1 rounded-full whitespace-nowrap">
          <Calendar className="w-4 h-4" />
          {duration}
        </div>
      </div>
      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm tablet:text-base">
        {description}
      </p>
    </div>
  </motion.div>
);

const Contact = () => {
  return (
    <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-24 min-h-screen dark:bg-black text-black dark:text-white transition-colors duration-500">
      <div className="max-w-4xl mx-auto flex flex-col gap-16">
        <div>
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4"
            >
              Education
            </motion.h2>
            <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full" />
            <p className="text-center mt-6 text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              My academic journey that built the foundation for my technical expertise.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {educationData.map((edu, idx) => (
              <EducationCard key={idx} {...edu} />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center pt-10 border-t border-zinc-200 dark:border-zinc-800"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-6">Let's Work Together</h2>
          <p className="max-w-2xl mx-auto text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-10">
            I'm available for full-time positions, internships, and freelance projects.
            Ready to turn ideas into reality?
          </p>

          <div id="contacting" className="flex flex-wrap justify-center gap-5">
            <a
              href="/Ashapu Mohan-Resume.pdf"
              className="flex px-8 py-3 items-center rounded-full font-semibold bg-zinc-900 dark:bg-white text-white dark:text-black hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
              download
            >
              <FaDownload className="text-lg mr-2" /> Resume
            </a>
            <a
              href="mailto:ashapumohan123@gmail.com"
              className="flex px-8 py-3 items-center rounded-full font-semibold border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
            >
              <FaEnvelope className="text-lg mr-2" /> Email Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
