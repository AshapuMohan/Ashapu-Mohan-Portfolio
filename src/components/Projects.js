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
    certificate_type: "MongoDB Node.js Developer Path for SmartBridge",
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

const projects = [
  {
    title: 'Waste Management Website',
    image: '/srp.png',
    description: `Responsive website to promote awareness about recyclable waste and eco-friendly practices. Integrated Google QR Code Scanner for user convenience.`,
    techStack: ['HTML', 'CSS', 'JavaScript', 'Qr Scanner'],
    detailsLink: 'https://waste-management-six.vercel.app',
    githubLink: 'https://github.com/AshapuMohan/Waste-Management',
  },
  {
    title: 'Personal Portfolio',
    image: '/portfolio.png',
    description: `My portfolio presents my projects, skills, and certifications with an interactive UI built using React, Tailwind CSS, and Framer Motion. It also includes SEO optimization to improve visibility.`,
    techStack: ['React', 'Tailwind CSS', 'Framer Motion'],
    detailsLink: 'https://ashapumohanportfolio.netlify.app',
    githubLink: 'https://github.com/AshapuMohan/MohanAshapuPortfolio',
  },
  {
    title: 'Collegetips Photo Gallery',
    image: '/collegetips.png',
    description: `A vibrant and responsive photo gallery showcasing team moments, creative campaigns, and behind-the-scenes fun. Easily filter images by category and explore highlights, including an embedded Instagram post.`,
    techStack: ['React', 'Tailwind CSS'],
    detailsLink: 'https://collegetips-tau.vercel.app',
    githubLink: 'https://github.com/AshapuMohan/Collegetips',
  },
  {
    title: 'Linkedin UI Clone',
    image: '/linkedin-clone.png',
    description: `This project is a frontend-only clone of LinkedIn, built using React and Tailwind CSS. It replicates the key user interface components and layout of LinkedIn, focusing on responsive design, clean component structure, and UI/UX consistency.`,
    techStack: ['React', 'Tailwind CSS'],
    detailsLink: 'https://linkedinclone-o7l9.onrender.com',
    githubLink: 'https://github.com/AshapuMohan/Linkedinclone',
  },{
    title: 'World Hive',
    image: '/worldhive.png',
    description: `WorldHive 2025 – A React.js and Tailwind-powered project showcasing country data dynamically fetched from the REST Countries API, with responsive UI and search functionality.`,
    techStack: ['React', 'Tailwind CSS','REST API'],
    detailsLink: 'https://worldhive2025.onrender.com',
    githubLink: 'https://github.com/AshapuMohan/worldhive',
  },
    {
    title: 'VehicleAid Website',
    image: '/miniproject.png',
    description: `It is a demo web app that simulates how users can locate and request help from nearby mechanics during vehicle breakdowns. It showcases user-mechanic interaction flow using mock data, with login panels and service history using MongoDB.`,
    techStack: ['HTML', 'CSS', 'JavaScript', 'React', 'Express.js', 'MongoDB'],
    detailsLink: 'https://vehicle-aid-pi.vercel.app/',
    githubLink: 'https://github.com/AshapuMohan/VehicleAid',
  },
  {
    title: 'EduMatrix Website',
    image: '/edumatrix.png',
    description: `a full-stack web application designed to streamline student learning, task submissions, and mentor interactions. This platform helps bridge the gap between students and mentors in project-based learning environments like internships and academic programs.`,
    techStack: ['HTML', 'CSS', 'JavaScript', 'React', 'Express.js', 'MongoDB'],
    detailsLink: 'https://edu-matrix-pied.vercel.app',
    githubLink: 'https://github.com/AshapuMohan/EduMatrix',
  }
];

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
      <div className="flex flex-col items-center pt-24 px-4 sm:px-6 lg:px-10 mb-20">
      <div className="p-4 bg-blue-100 text-blue-600 rounded-full mb-4">
        <i className="fa-solid fa-diagram-project text-xl"></i>
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-2">My Projects</h2>
      <p className="text-center text-gray-700 max-w-xl mb-10">
        Browse through my portfolio of projects, showcasing my skills in web development, design, and problem-solving.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition duration-300 p-4 group"
          >
            <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full z-10 shadow">
              Featured
            </span>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover rounded-md"
            />
            <div className="pt-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-700 text-sm">{project.description}</p>
              <ul className="flex flex-wrap gap-2 mt-4">
                {project.techStack.map((tech, i) => (
                  <li key={i} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="flex items-center mt-4">
                <a
                  href={project.detailsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-50 text-blue-700 px-3 py-1 rounded text-sm font-medium hover:bg-blue-100 transition"
                >
                  View Details <i className="fa-solid fa-arrow-right ml-1"></i>
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4 text-gray-600 hover:text-black transition"
                >
                  <i className="fa-brands fa-github text-2xl"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  )
}

export default Projects
