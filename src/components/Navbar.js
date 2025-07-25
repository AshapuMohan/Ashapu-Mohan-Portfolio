import { useState, useRef, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (id) => {
    setMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-100 transition-colors duration-500 ${
        scrolled ? 'bg-white shadow-md' : 'bg-gradient-to-tr from-blue-50 to-indigo-50'
      }`}
    >
      <nav className="flex items-center justify-between px-6 py-4 relative">
        <a
          href="/"
          className="flex item-center justify-center text-2xl font-bold transition-transform duration-300 hover:scale-105"
        >
          <div className="relative w-8 h-8 mr-1">
            <div className="absolute inset-0 rounded-full" />
            <img
              src="/head.png"
              alt="Profile"
              className="relative z-10 rounded-full w-8 h-8 object-cover"
            />
          </div>
          Ashapu Mohan
        </a>

        <ul className="hidden md:flex space-x-15 font-semibold text-lg">
          <li>
            <span
              className="cursor-pointer hover:text-blue-400"
              onClick={() => handleNavClick('home')}
            >
              Home
            </span>
          </li>
          <li>
            <span
              className="cursor-pointer hover:text-blue-400"
              onClick={() => handleNavClick('skills')}
            >
              Skills
            </span>
          </li>
          <li>
            <Link
              className="hover:text-blue-400"
              to="/projects"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-blue-400"
              to="/certificates"
              onClick={() => setMenuOpen(false)}
            >
              Certificates
            </Link>
          </li>
          <li>
            <span
              className="cursor-pointer hover:text-blue-400"
              onClick={() => handleNavClick('contact')}
            >
              Contact
            </span>
          </li>
        </ul>


        <div className="md:hidden z-50">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {menuOpen && (
          <ul
            ref={menuRef}
            className="absolute top-full left-0 w-full bg-slate-100 text-black text-center py-4 flex flex-col gap-4 text-lg font-semibold md:hidden"
          >
            <li>
              <span onClick={() => handleNavClick('home')}>Home</span>
            </li>
            <li>
              <span onClick={() => handleNavClick('skills')}>Skills</span>
            </li>
            <li>
              <Link to="/projects" onClick={() => setMenuOpen(false)}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/certificates" onClick={() => setMenuOpen(false)}>
                Certificates
              </Link>
            </li>
            <li>
              <span onClick={() => handleNavClick('contact')}>Contact</span>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
