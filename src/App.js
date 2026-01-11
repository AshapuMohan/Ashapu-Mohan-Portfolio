import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Project from './components/Project';
import SEO from './components/SEO';
import Certificates from './components/Certificates';
function MainPage() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-500">
      <SEO />
      <Navbar />

      <div id="home" className='pt-15 bg-white dark:bg-black'>
        <HeroSection />
      </div>

      <div id="skills" className="scroll-mt-16 bg-white dark:bg-black">
        <Skills />
      </div>

      <div id="projects" className="scroll-mt-35 bg-white dark:bg-black">
        <Projects />
      </div>

      <div id="contact" className="scroll-mt-20 bg-white dark:bg-black">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

function ProjectsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col min-h-screen relative bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <Navbar />
      <main className="flex-grow">
        <Project />
      </main>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}
function CertificatesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col min-h-screen relative bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <Navbar />
      <main className="flex-grow">
        <Certificates />
      </main>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}

function App() {
  useEffect(() => {
    // Initialize dark mode from localStorage or system preference
    const isDarkMode = localStorage.getItem('darkMode') === 'true' ||
      (!localStorage.getItem('darkMode') &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);

    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path='/certificates' element={<CertificatesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
