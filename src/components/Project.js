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
    description: `Responsive and animated portfolio site showcasing resume, projects, and contact information.`,
    techStack: ['React', 'Tailwind CSS', 'JavaScript'],
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
    title: 'Linkedin-Clone',
    image: '/linkedin-clone.png',
    description: `This project is a frontend-only clone of LinkedIn, built using React and Tailwind CSS. It replicates the key user interface components and layout of LinkedIn, focusing on responsive design, clean component structure, and UI/UX consistency.`,
    techStack: ['React', 'Tailwind CSS'],
    detailsLink: 'https://linkedinclone-o7l9.onrender.com',
    githubLink: 'https://github.com/AshapuMohan/Linkedinclone',
  },{
    title: 'World Hive',
    image: '/worldhive.png',
    description: `WorldHive 2025 – A React.js and Tailwind-powered project showcasing country data dynamically fetched from the REST Countries API, with responsive UI and search functionality.`,
    techStack: ['React', 'Tailwind CSS'],
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
  }
];

const Project = () => {
  return (
    <div className="flex flex-col items-center pt-24 px-4 sm:px-6 lg:px-10 mb-20">
      <div className="p-4 bg-blue-100 text-blue-600 rounded-full mb-4">
        <i className="fa-solid fa-diagram-project text-xl"></i>
      </div>
      <h2 className="text-4xl font-bold text-center text-black mb-2">My Projects</h2>
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
  );
};

export default Project;
