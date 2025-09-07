
const projects = [
  {
    title: 'Waste Management Website',
    image: '/srp.png',
    description: `A responsive web application focused on sustainable waste management practices. The platform educates users about recyclable and non-recyclable waste, provides detailed waste categorisation, and includes a QR code scanner for quick access to waste disposal guidelines. The system features login and signup functionality for personalised engagement and supports awareness campaigns.`,
    keyfeatures: [
      'Login/Signup system for users',
      'Categorisation of recyclable and non-recyclable waste',
      'QR code scanner for easy access to waste disposal information',
      'Responsive design for mobile and desktop',
      'Informative content to promote eco-friendly practices',
    ],
    techStack: ['HTML', 'CSS', 'JavaScript', 'Qr Scanner'],
    detailsLink: 'https://waste-management-six.vercel.app',
    githubLink: 'https://github.com/AshapuMohan/Waste-Management',
  },
  {
    title: 'Personal Portfolio',
    image: '/portfolio.png',
    description: `A responsive and interactive personal portfolio built using modern frontend technologies. The website showcases skills, projects, education, and contact details in a clean and professional layout. It features subtle animations, icons, and sections like Skills, Projects (with achievements & certificates), and a “Hire Me” call-to-action. It also includes SEO optimization to improve visibility.`,
    keyfeatures: [
      'SEO optimization to improve visibility',
      'Modern design with Tailwind CSS and React Icons',
      'Smooth animations with Framer Motion',
      'Dedicated sections for skills, projects, and education',
      'Responsive layout optimised for all devices',
    ],
    techStack: ['React', 'Tailwind CSS', 'Framer Motion'],
    detailsLink: 'https://ashapumohanportfolio.netlify.app',
    githubLink: 'https://github.com/AshapuMohan/MohanAshapuPortfolio',
  },
  {
    title: 'Collegetips Photo Gallery',
    image: '/collegetips.png',
    description: `A frontend photo gallery website designed for students to explore and share pictures. The application allows browsing through images in different categories, with a responsive and clean interface. This project demonstrates frontend design skills with focus on accessibility and user-friendly navigation.`,
    keyfeatures: [
      'Photo gallery with grid-based layout',
      'Album-style categorisation (static)',
      'Interactive UI elements',
      'Responsive design for mobile and desktop',
      'Clean and modern aesthetics',
    ],
    techStack: ['React', 'Tailwind CSS'],
    detailsLink: 'https://collegetips-tau.vercel.app',
    githubLink: 'https://github.com/AshapuMohan/Collegetips',
  },
  {
    title: 'Linkedin-Clone',
    image: '/linkedin-clone.png',
    description: `A frontend-only implementation of LinkedIn’s interface, showcasing the design and layout of professional networking features. Users can explore a simulated feed, profile page, and post layout. While it doesn’t include backend logic, it demonstrates strong skills in replicating real-world web applications through frontend development.`,
    keyfeatures: [
      'Responsive LinkedIn-style UI',
      'Simulated feed with posts and interactions',
      'Profile page design with user details',
      'Responsive design for mobile and desktop',
      'Interactive elements like likes and comments (frontend only)',
    ],
    techStack: ['React', 'Tailwind CSS'],
    detailsLink: 'https://linkedinclone-o7l9.onrender.com',
    githubLink: 'https://github.com/AshapuMohan/Linkedinclone',
  },{
    title: 'World Hive',
    image: '/worldhive.png',
    description: `WorldHive is a concept-based frontend website that serves as a creative platform design. It focuses on UI/UX, delivering a modern and visually engaging interface. Built with responsive layouts and animations, it highlights your ability to create aesthetic and functional frontend applications.`,
    keyfeatures: [
      'Fetches data from a REST API',
      'Unique and modern UI/UX design',
      'Fully responsive layouts',
      'Smooth transitions and animations',
      'Clean, modular codebase',
    ],
    techStack: ['React', 'Tailwind CSS','REST API'],
    detailsLink: 'https://worldhive2025.onrender.com',
    githubLink: 'https://github.com/AshapuMohan/worldhive',
  },
    {
    title: 'VehicleAid Website',
    image: '/miniproject.png',
    description: `VehicleAid is a MERN stack web application designed to assist users in finding nearby mechanics during vehicle breakdowns. The platform uses location-based services to display mechanic details such as name, phone number, and distance on an interactive map. Users can send service requests directly through the platform, and mechanics can view user details (name, contact, problem) and accept requests. All accepted histories are securely stored in MongoDB for future reference.`,
    keyfeatures: [
      'Location tracking and nearby mechanic search',
      'Interactive map with mechanic details',
      'Request/accept flow between users and mechanics',
      'Login system for both mechanics and users',
      'MongoDB integration for history tracking',
    ],
    techStack: ['HTML', 'CSS', 'JavaScript', 'React', 'Express.js', 'MongoDB'],
    detailsLink: 'https://vehicle-aid-pi.vercel.app/',
    githubLink: 'https://github.com/AshapuMohan/VehicleAid',
  },
  {
    title: 'EduMatrix Website',
    image: '/edumatrix.png',
    description: `EduMatrix is a role-based React application that allows students, teachers, and admins to engage in a structured learning platform. The system integrates external course datasets (e.g., Coursera dataset) along with teacher-uploaded videos stored in MongoDB. Students can explore predefined courses under categories like Fullstack, Cybersecurity, Data Science, and Cloud Computing, while teachers can manage and upload content. Admins oversee all user activities.`,
    keyfeatures: [
      'Role-based access (Student, Teacher, Admin)',
      'Predefined courses from datasets/APIs',
      'Teacher-uploaded videos stored in MongoDB',
      'Category-wise course listing and browsing',
      'Modern and responsive UI',
    ],
    techStack: ['HTML', 'CSS', 'JavaScript', 'React', 'Express.js', 'MongoDB'],
    detailsLink: 'https://edu-matrix-pied.vercel.app/stu-home',
    githubLink: 'https://github.com/AshapuMohan/EduMatrix',
  }
];

const Project = () => {
  return (
    <div className="flex flex-col items-center pt-24 px-4 sm:px-6 lg:px-10 mb-20">
      <div className="p-4 bg-blue-100 text-blue-600 rounded-full mb-4">
        <i className="fa-solid fa-diagram-project text-xl"></i>
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center font-extrabold text-gray-900 tracking-tight pb-5">My Projects</h2>
      <p className="mt-6 mb-15 text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
        Browse through my portfolio of projects, showcasing my skills in web development, design, and problem-solving.
      </p>

      <div className="grid items-center justify-center px-70 w-full gap-30">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-white  border-gray-200 rounded-xl hover:shadow-lg transition duration-300 p-4 group"
          >
            <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full z-10 shadow">
              Featured
            </span>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover rounded-md"
            />
            <div className="pt-4 px-8">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight pb-5">{project.title}</h3>
              <p className="text-gray-700 text-lg">{project.description}</p>
              <p className="mt-2 text-lg font-bold text-gray-800">Key Features:</p>
              <ul className="list-disc list-inside text-gray-600 text-md">
                {project.keyfeatures.map((feature, i) => (
                    <li key={i}>{feature}</li>
                ))}
              </ul>
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
                  className="px-3 bg-black text-white py-1 rounded-full text-sm font-medium transition"
                >
                  {project.detailsLink} <i class="fa-solid fa-up-right-from-square"></i>
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4 text-black hover:text-black transition"
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
