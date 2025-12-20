
const projects = [
  {
    title: 'eCard Generator',
    image: '/ecard.png',
    description: `An interactive web platform where creativity comes to life, allowing users to design heartfelt electronic greeting cards. With an easy-to-use interface, users can effortlessly create, share, and download unique eCards tailored for every special moment.`,
    keyfeatures: [
      'User-friendly eCard design interface',
      'Customizable templates for various occasions',
      'Options to share eCards via email or social media',
      'Downloadable eCards in multiple formats',
      'Responsive design for all devices',
    ],
    techStack: ['Next.js', 'Tailwind CSS', 'React+TypeScript'],
    detailsLink: '',
    githubLink: 'https://github.com/AshapuMohan/eCard',
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
    techStack: ['React', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    detailsLink: 'https://vehicle-aid-pi.vercel.app/userHome',
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
    techStack: ['React', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    detailsLink: 'https://edu-matrix-pied.vercel.app/stu-home',
    githubLink: 'https://github.com/AshapuMohan/EduMatrix',
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
    detailsLink: 'https://mohanashapu.onrender.com',
    githubLink: 'https://github.com/AshapuMohan/MohanAshapuPortfolio',
  },
  {
    title: 'Linkedin UI Clone',
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
  }, {
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
    techStack: ['React', 'Tailwind CSS', 'REST API'],
    detailsLink: 'https://worldhive2025.onrender.com',
    githubLink: 'https://github.com/AshapuMohan/worldhive',
  },
  {
    title: 'CodeViz Website',
    image: '/CodeViz.png',
    description: `This project brings together design and functionality to create a developer-focused interface — blending an editor-like workspace with AI assistance and visual feedback. It’s fast, responsive, and accessible — ideal for those who want a modern, browser-based code editing experience.`,
    keyfeatures: [
      'Interactive Code Panels',
      'AI Code Assistant',
      'Responsive Design',
      'Command Palette',
      'Modern and responsive UI',
    ],
    techStack: ['Next.js', 'React+TypeScript', 'Tailwind CSS', '@ai-sdk/groq', 'clsx'],
    detailsLink: 'https://code-editor-visualizer.vercel.app',
    githubLink: 'https://github.com/AshapuMohan/CodeViz-Studio',
  },
  {
    title: 'Myra Voice Controlled Assist Website',
    image: '/myra.png',
    description: `Myra Voice Assistant represents a step forward in hands-free digital interaction, combining AI-driven voice recognition with a clean, accessible interface.
It’s designed to help users perform complex web tasks effortlessly, improve productivity, and enhance accessibility for everyone — from developers to everyday users.`,
    keyfeatures: [
      'Voice Command Recognition',
      'AI-Powered Assistant',
      'Task Automation',
      'Secure Authentication System',
      'Modern and responsive UI',
    ],
    techStack: ['Vite+React', 'Tailwind CSS', '@auth/core', 'PostgreSQL'],
    detailsLink: 'https://myra-voice-controller.created.app',
    githubLink: 'https://github.com/AshapuMohan/MYRA',
  },
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
  }
];

const Project = () => {
  return (
    <div className="flex flex-col items-center pt-24 px-4 sm:px-6 lg:px-10 pb-20 bg-white dark:bg-zinc-900 text-black dark:text-white transition-colors duration-500 w-full">
      {/* Header */}
      <div className="p-4 dark:bg-blue-950 text-blue-600 dark:text-blue-400 rounded-full pb-4">
        <i className="fa-solid fa-diagram-project text-xl"></i>
      </div>
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center font-extrabold text-gray-900 dark:text-white tracking-tight pb-5">
          My Projects
        </h2>
        <p className="mt-6 mb-15 text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-center">
          Browse through my portfolio of projects, showcasing my skills in web development, design, and problem-solving.
        </p>
      </div>
      {/* Single Column Grid */}
      <div className="grid grid-cols-1 gap-10 w-full max-w-3xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-white dark:bg-zinc-800 border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-lg transition duration-300 p-4 flex flex-col text-black dark:text-white"
          >
            {/* Badge */}
            <span className="absolute top-4 left-4 bg-blue-600 dark:bg-blue-700 text-white text-xs px-3 py-1 rounded-full z-10 shadow">
              Featured
            </span>

            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover rounded-md mb-4"
            />

            {/* Project Content */}
            <div className="flex flex-col flex-1">
              <h3 className="text-2xl font-bold text-gray-900 tracking-tight pb-3">
                {project.title}
              </h3>
              <p className="text-gray-700 text-base flex-1">
                {project.description}
              </p>

              {/* Key Features */}
              <p className="mt-3 text-base font-bold text-gray-800">Key Features:</p>
              <ul className="list-disc list-inside text-gray-600 text-sm">
                {project.keyfeatures.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>

              {/* Tech Stack */}
              <ul className="tech-stack-item flex  flex-wrap gap-2 mt-3">
                {project.techStack.map((tech, i) => (
                  <li
                    key={i}
                    className="tech-stack-item bg-gray-100 text-gray-800 dark:bg-black dark:text-white font-medium text-xs px-2 py-1 rounded"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              {/* Links */}
              <div className="flex items-center mt-4">
                <a
                  href={project.detailsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 bg-black text-white py-1 rounded-full text-sm font-medium transition hover:bg-gray-800"
                >
                  Live <i className="fa-solid fa-up-right-from-square ml-1"></i>
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4 tech-stack-item text-black hover:text-gray-700 transition"
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
