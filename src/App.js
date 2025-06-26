import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
    <div className="relative bg-gradient-to-tr from-blue-50 to-indigo-50 text-black">
      <SEO />
      <Navbar />

      <div id="home" className='pt-15'>
        <HeroSection />
      </div>

      <div id="skills" className="scroll-mt-16">
        <Skills />
      </div>

      <div id="projects" className="scroll-mt-35">
        <Projects />
      </div>

      <div id="contact" className="scroll-mt-20">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

function ProjectsPage() {
  return (
    <div className=" flex flex-col min-h-screen relative bg-gradient-to-tr from-blue-50 to-indigo-50 text-black">
      <Navbar />
      <main className="flex-grow scroll-mt-100">
        <Project/>
      </main>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}
function CertificatesPage() {
  return (
    <div className=" flex flex-col min-h-screen relative bg-whitesome text-black">
      <Navbar />
      <main className="flex-grow scroll-mt-200">
        <Certificates/>
      </main>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path='/certificates' element={<CertificatesPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
