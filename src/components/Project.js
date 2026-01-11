import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, X, Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: 'eCard Generator',
    image: '/images/eCard.png',
    description: `An interactive web platform where creativity comes to life, allowing users to design heartfelt electronic greeting cards. With an easy-to-use interface, users can effortlessly create, share, and download unique eCards tailored for every special moment.`,
    keyfeatures: [
      'User-friendly eCard design interface',
      'Customizable templates for various occasions',
      'Options to share eCards via email or social media',
      'Downloadable eCards in multiple formats',
      'Responsive design for all devices',
    ],
    techStack: ['Next.js', 'Tailwind CSS', 'React'],
    detailsLink: '',
    githubLink: 'https://github.com/AshapuMohan/eCard',
  },
  {
    title: 'VendorSync',
    image: '/images/vendorsync.png',
    description: `VendorSync is a full-stack web application designed to assist users in finding the best vendors for their needs and also online tendor bidding.`,
    keyfeatures: [
      'User-friendly interface',
      'Vendor search',
      'Service scheduling'
    ],
    techStack: ['Next.js', 'MongoDB', 'Tailwind CSS'],
    detailsLink: '',
    githubLink: 'https://github.com/AshapuMohan/VendorSync',
  },
  {
    title: 'VehicleAid Website',
    image: '/images/miniproject.png',
    description: `VehicleAid is a MERN stack web application designed to assist users in finding nearby mechanics during vehicle breakdowns.`,
    keyfeatures: [
      'Location tracking',
      'Mechanic search',
      'Service scheduling'
    ],
    techStack: ['React', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    detailsLink: 'https://vehicle-aid-pi.vercel.app/userHome',
    githubLink: 'https://github.com/AshapuMohan/VehicleAid',
  },
  {
    title: 'EduMatrix Website',
    image: '/images/edumatrix.png',
    description: `EduMatrix is a role-based React application that allows students, teachers, and admins to engage in a structured learning platform.`,
    keyfeatures: ['Role-based access', 'Course Management'],
    techStack: ['React', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    detailsLink: 'https://edu-matrix-pied.vercel.app/stu-home',
    githubLink: 'https://github.com/AshapuMohan/EduMatrix',
  },
  {
    title: 'Personal Portfolio',
    image: '/images/portfolio.png',
    description: `A responsive and interactive personal portfolio built using modern frontend technologies.`,
    keyfeatures: [
      'SEO optimization',
      'Modern design',
      'Framer Motion Animations'
    ],
    techStack: ['React', 'Tailwind CSS', 'Framer Motion'],
    detailsLink: 'https://mohanashapu.onrender.com',
    githubLink: 'https://github.com/AshapuMohan/MohanAshapuPortfolio',
  },
  {
    title: 'Linkedin UI Clone',
    image: '/images/linkedin-clone.png',
    description: `A frontend-only implementation of LinkedIn’s interface, showcasing the design and layout of professional networking features.`,
    keyfeatures: ['Responsive UI', 'Pixel-perfect clone'],
    techStack: ['React', 'Tailwind CSS'],
    detailsLink: 'https://linkedinclone-o7l9.onrender.com',
    githubLink: 'https://github.com/AshapuMohan/Linkedinclone',
  }, {
    title: 'World Hive',
    image: '/images/worldhive.png',
    description: `WorldHive is a concept-based frontend website that serves as a creative platform design.`,
    keyfeatures: ['REST API Integration', 'Data Visualization'],
    techStack: ['React', 'Tailwind CSS', 'REST API'],
    detailsLink: 'https://worldhive2025.onrender.com',
    githubLink: 'https://github.com/AshapuMohan/worldhive',
  },
  {
    title: 'CodeViz Website',
    image: '/images/CodeViz.png',
    description: `This project brings together design and functionality to create a developer-focused interface.`,
    keyfeatures: ['Code Editor', 'Live Preview'],
    techStack: ['Next.js', 'TypeScript'],
    detailsLink: 'https://code-editor-visualizer.vercel.app',
    githubLink: 'https://github.com/AshapuMohan/CodeViz-Studio',
  },
  {
    title: 'Myra Voice Assistant',
    image: '/images/myra.png',
    description: `Myra Voice Assistant represents a step forward in hands-free digital interaction.`,
    keyfeatures: ['Voice Recognition', 'AI Commands'],
    techStack: ['Vite', 'React', 'AI SDK'],
    detailsLink: 'https://myra-voice-controller.created.app',
    githubLink: 'https://github.com/AshapuMohan/MYRA',
  },
  {
    title: 'Waste Management',
    image: '/images/srp.png',
    description: `A responsive web application focused on sustainable waste management practices.`,
    keyfeatures: ['Eco-friendly tips', 'Recycling guide'],
    techStack: ['HTML', 'JS'],
    detailsLink: 'https://waste-management-six.vercel.app',
    githubLink: 'https://github.com/AshapuMohan/Waste-Management',
  }
];

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-500">

      {/* Header - Minimalist */}
      <div className="mb-20 text-center md:text-left">
        <h2 className="text-3xl font-semibold text-zinc-900 dark:text-white mb-4 tracking-tight">
          All Projects
        </h2>
        <div className="h-0.5 w-12 bg-amber-500 rounded-full md:mx-0 mx-auto" />
        <p className="mt-6 text-zinc-500 max-w-2xl">
          A comprehensive gallery of my development work.
        </p>
      </div>

      {/* Projects Grid - Clean Gallery Style */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12 mb-32">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer flex flex-col gap-4"
          >
            {/* Image Container */}
            <div className="relative aspect-video rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm transition-all duration-500 group-hover:shadow-md">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>

            {/* Content */}
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <h3 className="text-lg font-medium text-zinc-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-1">
                  {project.description}
                </p>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transform translate-x-[-5px] group-hover:translate-x-0 transition-all duration-300 text-zinc-400 dark:text-zinc-500">
                <ArrowUpRight size={18} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              layoutId={`project-${selectedProject.title}`}
              className="relative w-full max-w-4xl bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl z-50 border border-zinc-200 dark:border-zinc-800"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/50 dark:bg-black/50 hover:bg-white dark:hover:bg-zinc-800 rounded-full transition-colors backdrop-blur-md"
              >
                <X className="w-5 h-5 text-zinc-900 dark:text-white" />
              </button>

              <div className="flex flex-col h-full max-h-[85vh] overflow-y-auto">
                <div className="w-full h-64 sm:h-80 relative flex-shrink-0 pt-3">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="p-8">
                  <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-2">
                    {selectedProject.title}
                  </h2>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 text-xs font-medium rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-base mb-8">
                    {selectedProject.description}
                  </p>

                  {selectedProject.keyfeatures && (
                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-zinc-900 dark:text-white mb-2">Key Features</h4>
                      <ul className="list-disc list-inside text-sm text-zinc-600 dark:text-zinc-400">
                        {selectedProject.keyfeatures.map((f, i) => <li key={i}>{f}</li>)}
                      </ul>
                    </div>
                  )}

                  <div className="flex gap-4">
                    {selectedProject.detailsLink && (
                      <a
                        href={selectedProject.detailsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-black px-6 py-3 rounded-xl font-medium text-sm transition-all hover:opacity-90"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Live
                      </a>
                    )}

                    {selectedProject.githubLink && (
                      <a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white px-6 py-3 rounded-xl font-medium text-sm transition-all"
                      >
                        <Github className="w-4 h-4" />
                        Source Code
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

export default Project
