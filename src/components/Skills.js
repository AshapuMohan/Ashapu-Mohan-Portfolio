import { motion } from 'framer-motion'
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaJava,
  FaBootstrap
} from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa6'
import {
  SiTailwindcss,
  SiMongodb,
  SiJavascript,
  SiExpress,
  SiPython,
  SiMysql
} from 'react-icons/si'

const skills = [
  { icon: <FaHtml5 className="text-orange-600 w-7 h-7" />, label: 'HTML' },
  { icon: <FaCss3Alt className="text-blue-600 w-7 h-7" />, label: 'CSS' },
  { icon: <SiJavascript className="text-yellow-400 w-7 h-7" />, label: 'JavaScript' },
  { icon: <SiTailwindcss className="text-teal-400 w-7 h-7" />, label: 'Tailwind' },
  { icon: <FaReact className="text-blue-500 w-7 h-7" />, label: 'React' },
  { icon: <FaGithub className=' w-7 h-7 text-zinc-500' />, label: 'GitHub' },
  { icon: <FaGitAlt className="text-orange-500 w-7 h-7" />, label: 'Git' },
  { icon: <SiPython className="text-yellow-500 w-7 h-7" />, label: 'Python' },
  { icon: <FaBootstrap className="text-purple-600 w-7 h-7" />, label: 'Bootstrap' },
  { icon: <FaNodeJs className="text-green-600 w-7 h-7" />, label: 'Node.js' },
  { icon: <SiExpress className=' w-7 h-7 text-zinc-600' />, label: 'Express.js' },
  { icon: <SiMongodb className="text-green-700 w-7 h-7" />, label: 'MongoDB' },
  { icon: <SiMysql className="w-7 h-7 text-blue-400" />, label: 'SQL' },
  { icon: <FaJava className="text-red-600 w-7 h-7" />, label: 'Java' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-8 md:px-12 lg:px-24 bg-white dark:bg-black text-black dark:text-white transition-colors duration-500">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-center mb-6 gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-400 dark:to-gray-600"></div>
          <span className="px-4 py-2 text-blue-500 dark:text-blue-400 text-sm font-semibold dark:border-blue-500 bg-blue-50 dark:bg-blue-950 rounded-full whitespace-nowrap">
            Explore My
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-400 dark:to-gray-600"></div>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
          Practical Skills
        </h2>
        <p className="text-base sm:text-lg text-gray-600 dark:text-[#627b9b] text-center max-w-2xl mx-auto mb-12">
          A diverse set of skills and technologies I've mastered to deliver exceptional results.
        </p>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.08 } },
            hidden: {},
          }}
        >
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className='flex items-start justify-start gap-3'
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -8 }}
            >
              <div className="text-5xl sm:text-6xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                {skill.icon}
              </div>
              <p className="text-xl tech-stack-item sm:text-2xl font-bold text-black dark:text-zinc-300 leading-tight">
                {skill.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
