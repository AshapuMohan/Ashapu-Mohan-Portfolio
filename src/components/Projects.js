import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, X, Github, ExternalLink, Calendar, Building2 } from "lucide-react"

const experience = [
  {
    simulation_name: "Full Stack Internship",
    company_name: "UptoSkills",
    year: "Oct ‘25 – Jan ‘26",
    icon: "/uptoskills.png",
    des: "Currently working as a Full Stack intern, developing full-stack web applications using React, Node.js, Express, Postgres sql, and implementing APIs, authentication, and UI enhancements."
  },
  {
    simulation_name: "Mern Stack Internship",
    company_name: "Smartbridge",
    year: "May ‘25 – Jul ‘25",
    icon: "/smartbridge.png",
    des: "Completed a MERN Stack internship focused on building real-time project with CRUD operations, API integration, Git-based collaboration, and responsive UI development."
  },
  {
    simulation_name: "Salesforce Developer Virtual Internship",
    company_name: "Salesforce",
    year: "Nov ‘23 – Jan ‘24",
    icon: "/salesforce.png",
    des: "Completed a Salesforce Developer Virtual Internship working on CRM customization, automation using Flows and Apex basics, and understanding cloud-based business logic."
  }
]

const projects = [
  {
    title: 'eCard Generator',
    image: '/images/eCard.png',
    description: `An interactive web platform where creativity comes to life, allowing users to design heartfelt electronic greeting cards. With an easy-to-use interface, users can effortlessly create, share, and download unique eCards tailored for every special moment.`,
    techStack: ['Next.js', 'Tailwind CSS', 'React+TypeScript'],
    detailsLink: '',
    githubLink: 'https://github.com/AshapuMohan/eCard',
  },
  {
    title: 'VendorSync',
    image: '/images/vendorsync.png',
    description: `VendorSync is a full-stack web application designed to assist users in finding the best vendors for their needs and also online tendor bidding.`,
    techStack: ['Next.js', 'MongoDB', 'Tailwind CSS'],
    detailsLink: '',
    githubLink: 'https://github.com/AshapuMohan/VendorSync',
  },
  {
    title: 'EduMatrix Website',
    image: '/images/edumatrix.png',
    description: `a full-stack web application designed to streamline student learning, task submissions, and mentor interactions. This platform helps bridge the gap between students and mentors in project-based learning environments like internships and academic programs.`,
    techStack: ['React', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    detailsLink: 'https://edu-matrix-pied.vercel.app/stu-home',
    githubLink: 'https://github.com/AshapuMohan/EduMatrix',
  },
  {
    title: 'VehicleAid Website',
    image: '/images/miniproject.png',
    description: `It is a demo web app that simulates how users can locate and request help from nearby mechanics during vehicle breakdowns. It showcases user-mechanic interaction flow using mock data, with login panels and service history using MongoDB.`,
    techStack: ['React', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    detailsLink: 'https://vehicle-aid-pi.vercel.app/userHome',
    githubLink: 'https://github.com/AshapuMohan/VehicleAid',
  },
  {
    title: 'Personal Portfolio',
    image: '/images/portfolio.png',
    description: `a modern, interactive developer portfolio built to highlight technical skills, showcase real-time projects, and enhance professional visibility. This platform presents my work with dynamic UI features like dark mode, animations, and SEO optimisation for engaging user experience.`,
    techStack: ['React', 'Tailwind CSS', 'Framer Motion'],
    detailsLink: 'https://mohanashapu.onrender.com',
    githubLink: 'https://github.com/AshapuMohan/MohanAshapuPortfolio',
  },
  {
    title: 'Linkedin UI Clone',
    image: '/images/linkedin-clone.png',
    description: `This project is a frontend-only clone of LinkedIn, built using React and Tailwind CSS. It replicates the key user interface components and layout of LinkedIn, focusing on responsive design, clean component structure, and UI/UX consistency.`,
    techStack: ['React', 'Tailwind CSS'],
    detailsLink: 'https://linkedinclone-o7l9.onrender.com',
    githubLink: 'https://github.com/AshapuMohan/Linkedinclone',
  }
];

const ExperienceItem = ({ icon, title, subtitle, date, des }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group relative flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10"
  >
    <div className="flex-shrink-0">
      <div className="w-16 h-16 rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 p-2 border border-zinc-200 dark:border-zinc-700 group-hover:scale-105 transition-transform duration-300">
        <img src={icon} alt={subtitle} className="w-full h-full object-contain" />
      </div>
    </div>

    <div className="flex-grow space-y-2">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
        <div>
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-indigo-500 transition-colors">
            {title}
          </h3>
          <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 font-medium">
            <Building2 className="w-4 h-4" />
            <span>{subtitle}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-500 bg-zinc-100 dark:bg-zinc-800/50 px-3 py-1 rounded-full whitespace-nowrap">
          <Calendar className="w-4 h-4" />
          {date}
        </div>
      </div>
      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm tablet:text-base">
        {des}
      </p>
    </div>
  </motion.div>
)

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-24 dark:bg-black min-h-screen">

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6 tracking-tight"
        >
          Featured Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto"
        >
          A collection of projects that demonstrate my passion for building clean, performant, and interactive web experiences.
        </motion.p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-32">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setSelectedProject(project)}
            className="group relative aspect-video bg-zinc-100 dark:bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-700 cursor-pointer hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay" />
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 p-6 z-20 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <div className="flex justify-between items-end">
                <div className="flex-1 mr-4">
                  <span className="text-white text-xs font-bold uppercase tracking-wider mb-2 block">
                    {project.techStack[0]},{project.techStack[1]}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-zinc-300 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {project.description}
                  </p>
                </div>
                <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 shadow-lg">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Experience Section */}
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4"
          >
            Professional Experience
          </motion.h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full" />
        </div>

        <div className="space-y-6">
          {experience.map((exp, idx) => (
            <ExperienceItem
              key={idx}
              icon={exp.icon}
              title={exp.simulation_name}
              subtitle={exp.company_name}
              date={exp.year}
              des={exp.des}
            />
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            <motion.div
              layoutId={`project-${selectedProject.title}`}
              className="relative w-full max-w-6xl bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl z-50 flex flex-col max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors backdrop-blur-md"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col md:flex-row h-full overflow-y-auto md:overflow-hidden">
                {/* Image Section */}
                <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-contain pl-3 rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2 p-6 md:p-8 lg:p-10 flex flex-col h-full overflow-y-auto bg-white dark:bg-zinc-900">
                  <div className="mb-6">
                    <span className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide text-sm uppercase">
                      Featured Project
                    </span>
                    <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mt-2 mb-4">
                      {selectedProject.title}
                    </h2>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-medium rounded-full border border-zinc-200 dark:border-zinc-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-lg mb-8">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div className="mt-auto flex gap-4">
                    {selectedProject.detailsLink && (
                      <a
                        href={selectedProject.detailsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-medium transition-all group"
                      >
                        Visit Site
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    )}
                    {selectedProject.githubLink && (
                      <a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white px-6 py-3 rounded-xl font-medium transition-all border border-zinc-200 dark:border-zinc-700"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
