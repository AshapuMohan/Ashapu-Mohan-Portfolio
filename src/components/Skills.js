import { motion } from 'framer-motion'
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt
} from 'react-icons/fa'
import {
  SiTailwindcss,
  SiMongodb,
  SiJavascript,
  SiExpress
} from 'react-icons/si'

const skills = [
  { icon: <FaHtml5 className="text-orange-600" />, label: 'HTML' },
  { icon: <FaCss3Alt className="text-blue-600" />, label: 'CSS' },
  { icon: <SiJavascript className="text-yellow-400" />, label: 'JavaScript' },
  { icon: <SiTailwindcss className="text-teal-400" />, label: 'Tailwind CSS' },
  { icon: <FaReact className="text-blue-500" />, label: 'React' },
  { icon: <FaNodeJs className="text-green-600" />, label: 'Node.js' },
  { icon: <SiExpress />, label: 'Express.js' },
  { icon: <SiMongodb className="text-green-700" />, label: 'MongoDB' },
  { icon: <FaGitAlt className="text-orange-500" />, label: 'Git' },
  {
    icon: <img src="/icons/bootstrap.png" alt="Bootstrap" className="w-10 h-10" />,
    label: 'Bootstrap'
  },
  {
    icon: <img src="/icons/mysql.png" alt="SQL" className="w-10 h-10" />,
    label: 'SQL'
  },
  {
    icon: <img src="/icons/c.png" alt="C" className="w-10 h-10" />,
    label: 'C'
  },
  {
    icon: <img src="/icons/cpp.png" alt="C++" className="w-10 h-10" />,
    label: 'C++'
  },
  {
    icon: <img src="/icons/java.png" alt="Java" className="w-10 h-10" />,
    label: 'Java'
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-gray-100 dark:bg-zinc-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
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
      <p className="text-center text-gray-700 font-medium max-w-xl mx-auto m-5">
        A diverse set of skills and technologies I've mastered to deliver exceptional results.
      </p>
        </motion.h2>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {},
          }}
        >
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center bg-white dark:bg-zinc-800 p-4 rounded-xl shadow hover:shadow-lg transition-all duration-300"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <p className="text-sm text-center text-zinc-700 dark:text-zinc-300">
                {skill.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
