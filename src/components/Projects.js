import {  FaProjectDiagram } from "react-icons/fa"
import { motion } from "framer-motion"
import { FaGithub, FaGlobe } from "react-icons/fa6";

const experience = [
  {
    simulation_name: "Full Stack Internship",
    company_name: "UptoSkills",
    year: "Oct ‘25 – Present",
    icon: <img src="/uptoskills.png" alt="UptoSkills Logo" className="w-15 h-10 rounded object-fill" />,
    des: "Currently working as a Full Stack intern, developing full-stack web applications using React, Node.js, Express, Postgres sql, and implementing APIs, authentication, and UI enhancements."
  },
  {
    simulation_name: "Mern Stack Internship",
    company_name: "Smartbridge",
    year: "May ‘25 – Jul ‘25",
    icon: <img src="/smartbridge.png" alt="Smartbridge Logo" className="w-15 h-10 rounded object-fill" />,
    des: "Completed a MERN Stack internship focused on building real-time project with CRUD operations, API integration, Git-based collaboration, and responsive UI development."
  },
  {
    simulation_name: "Salesforce Developer Virtual Internship",
    company_name: "Salesforce",
    year: "Nov ‘23 – Jan ‘24",
    icon: <img src="/salesforce.png" alt="Salesforce Logo" className="w-15 h-10 rounded object-fill" />,
    des: "Completed a Salesforce Developer Virtual Internship working on CRM customization, automation using Flows and Apex basics, and understanding cloud-based business logic."
  }
]

const projects = [
  {
    title: 'EduMatrix Website',
    image: '/edumatrix.png',
    description: `a full-stack web application designed to streamline student learning, task submissions, and mentor interactions. This platform helps bridge the gap between students and mentors in project-based learning environments like internships and academic programs.`,
    techStack: ['React', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    detailsLink: 'https://edu-matrix-pied.vercel.app',
    githubLink: 'https://github.com/AshapuMohan/EduMatrix',
  }, {
    title: 'Personal Portfolio',
    image: '/portfolio.png',
    description: `a modern, interactive developer portfolio built to highlight technical skills, showcase real-time projects, and enhance professional visibility. This platform presents my work with dynamic UI features like dark mode, animations, and SEO optimisation for engaging user experience.`,
    techStack: ['React', 'Tailwind CSS', 'Framer Motion'],
    detailsLink: 'https://mohanashapu.onrender.com',
    githubLink: 'https://github.com/AshapuMohan/MohanAshapuPortfolio',
  },
  {
    title: 'Waste Management Website',
    image: '/srp.png',
    description: `Responsive platform designed to educate users on sustainable waste management and environmental responsibility. Features seamless Google QR Code Scanner integration to enhance accessibility, along with interactive sections, informative content to promote eco-friendly habits.`,
    techStack: ['HTML', 'CSS', 'JavaScript', 'Qr Scanner'],
    detailsLink: 'https://waste-management-six.vercel.app',
    githubLink: 'https://github.com/AshapuMohan/Waste-Management',
  },
  {
    title: 'Linkedin UI Clone',
    image: '/linkedin-clone.png',
    description: `This project is a frontend-only clone of LinkedIn, built using React and Tailwind CSS. It replicates the key user interface components and layout of LinkedIn, focusing on responsive design, clean component structure, and UI/UX consistency.`,
    techStack: ['React', 'Tailwind CSS'],
    detailsLink: 'https://linkedinclone-o7l9.onrender.com',
    githubLink: 'https://github.com/AshapuMohan/Linkedinclone',
  }, {
    title: 'World Hive',
    image: '/worldhive.png',
    description: `A React.js and Tailwind-powered project showcasing country data dynamically fetched from the REST Countries API, featuring a fully responsive interface, search option, smooth UI interactions for an intuitive global exploration experience.`,
    techStack: ['React', 'Tailwind CSS', 'REST API'],
    detailsLink: 'https://worldhive2025.onrender.com',
    githubLink: 'https://github.com/AshapuMohan/worldhive',
  },
  {
    title: 'VehicleAid Website',
    image: '/miniproject.png',
    description: `It is a demo web app that simulates how users can locate and request help from nearby mechanics during vehicle breakdowns. It showcases user-mechanic interaction flow using mock data, with login panels and service history using MongoDB.`,
    techStack: ['React', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    detailsLink: 'https://vehicle-aid-pi.vercel.app/',
    githubLink: 'https://github.com/AshapuMohan/VehicleAid',
  }
];
const Item = ({ icon, title, subtitle, date, des }) => (
  <motion.div
    className="bg-white dark:bg-zinc-800 border border-blue-200 dark:border-blue-900 rounded-xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-sm cursor-pointer text-black dark:text-white transition-colors duration-300"
  >
    <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-8">
      <span>
        {icon}
      </span>
      <div>
        <p className="text-xl font-bold text-gray-900 dark:text-white">{title}</p>
        <p className="text-blue-500 dark:text-blue-400 font-semibold">{subtitle}</p>
        <p className="mt-2 text-gray-700 dark:text-gray-300">{des}</p>
      </div>
    </div>
    <div className="text-right whitespace-nowrap">
      <p className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
        {date}
      </p>
    </div>

  </motion.div>
)

const Projects = () => {
  return (
    <section className="py-12 px-4 sm:px-8 md:px-12 lg:px-24">
      <div className="flex flex-col items-center pt-15 px-4 sm:px-6 lg:px-10 mb-20 bg-white dark:bg-zinc-900 text-black dark:text-white transition-colors duration-500">
        <div className="flex items-center justify-center mb-6 gap-4">
          <div className="divider-gradient flex-1" />
          <div className="p-4 dark:bg-black text-blue-600 rounded-full mb-4">
            <FaProjectDiagram className="text-xl" />
          </div>
          <div className="divider-gradient flex-1" />
        </div>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-2">My Projects</h2>
          <p className="text-center text-gray-700 dark:text-gray-300 max-w-xl mb-10">
            Browse through my portfolio of projects, showcasing my skills in web development, design, and problem-solving.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative flex flex-col bg-white dark:bg-zinc-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-lg transition duration-300 p-4 group text-black dark:text-white"
            >
              <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full z-10 shadow">
                Featured
              </span>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56   rounded-md"
              />
              <div className="pt-4 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-700 text-base">{project.description}</p>
                <ul className="flex flex-wrap gap-2 mt-4">
                  {project.techStack.map((tech, i) => (
                    <li key={i} className="tech-stack-item bg-gray-100 text-gray-800 dark:bg-black dark:text-white font-medium text-xs px-2 py-1 rounded">
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center mt-auto pt-4">
                  <a
                    href={project.detailsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-50 flex items-center dark:bg-white dark:text-black text-blue-500 px-3 py-1 rounded text-sm font-medium hover:bg-blue-100 transition"
                  >
                    <FaGlobe className="mr-1"/> Link
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 flex items-center text-gray-600 hover:text-black bg-blue-50 p-1 px-2 rounded transition text-sm"
                  >
                    <FaGithub className="mr-1"/> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex items-center justify-center mb-6 gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-400"></div>
          <span className="px-4 py-2 text-blue-500 text-sm font-semibold bg-blue-50 rounded-full whitespace-nowrap">
            Showcasing My
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-400"></div>
        </div>
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Achievements & Experience
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
            Recognitions and professional journey that have shaped my career.
          </p>
        </div>
        <div className="max-w-6xl mx-auto flex flex-col gap-8">
          {experience.map((exp, idx) => (
            <Item
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
    </section>
  )
}

export default Projects
