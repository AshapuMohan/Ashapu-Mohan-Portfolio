import { FaTrophy, FaMedal, FaGraduationCap, FaAward } from "react-icons/fa"
import { motion } from "framer-motion"

const certificates = [
  {
    certificate_type: "Web Development Fundamentals",
    certificate_name: "IBM Skillbuild",
    date: "2025",
  },
  {
    certificate_type: "Web Development in React.js: Development Basics",
    certificate_name: "Coursera",
    date: "2025",
  },
  {
    certificate_type: "MongoDB Node.js Developer Path for SmartBridge Course",
    certificate_name: "MongoDB",
    date: "2025",
  },
  {
    certificate_type: "What Is Generative AI? Course",
    certificate_name: "Linkedin Learning",
    date: "2025",
  },
]

const experience = [
  {
    simulation_name: "Front-End Software Engineering Job Simulation",
    company_name: "SkyScanner",
    year: "2025",
  },
  {
    simulation_name: "Advanced Software Engineering Job Simulation",
    company_name: "Walmart Global Tech",
    year: "2025",
  },
  {
    simulation_name: "Data Visualisation: Business Insights Simulation",
    company_name: "TATA",
    year: "2025",
  },
  {
    simulation_name: "Salesforce Developer Virtual Internship",
    company_name: "Salesforce",
    year: "2023",
  },
]

const SectionHeader = ({ icon, title }) => (
  <div className="flex items-center gap-3 mb-6 sm:mb-8">
    <div className="text-3xl sm:text-4xl text-blue-600">{icon}</div>
    <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">{title}</h2>
  </div>
)

const Item = ({ icon, title, subtitle, date }) => (
  <motion.li
    whileHover={{ scale: 1.03, boxShadow: "0 6px 12px rgba(0,0,0,0.1)" }}
    transition={{ type: "spring", stiffness: 250 }}
    className="bg-white rounded-xl p-4 sm:p-5 flex gap-4 items-center cursor-pointer shadow-md"
  >
    <div className="text-yellow-400 text-2xl sm:text-3xl flex-shrink-0">{icon}</div>
    <div>
      <h3 className="text-base sm:text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-blue-600 font-medium">{subtitle}</p>
      <p className="text-xs text-gray-500 mt-1">{date}</p>
    </div>
  </motion.li>
)

const Projects = () => {
  return (
    <section className="bg-gradient-to-tr from-blue-50 to-indigo-50 py-12 px-4 sm:px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            Achievements & Experience
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
            Recognitions, certifications, and professional journey that have shaped my career.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-6 sm:p-8"
          >
            <SectionHeader icon={<FaMedal />} title="Certificates & Achievements" />
            <ul className="space-y-5 sm:space-y-6">
              {certificates.map((cert, idx) => (
                <Item
                  key={idx}
                  icon={<FaGraduationCap />}
                  title={cert.certificate_type}
                  subtitle={cert.certificate_name}
                  date={cert.date}
                />
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-6 sm:p-8"
          >
            <SectionHeader icon={<FaAward />} title="Professional Experience" />
            <ul className="space-y-6 sm:space-y-6">
              {experience.map((exp, idx) => (
                <Item
                  key={idx}
                  icon={<FaTrophy />}
                  title={exp.simulation_name}
                  subtitle={exp.company_name}
                  date={exp.year}
                />
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Projects
