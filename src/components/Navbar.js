import { useState, useRef, useEffect } from 'react';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage first
    const stored = localStorage.getItem('darkMode');
    if (stored !== null) {
      return stored === 'true';
    }
    // Then check if dark class is already on html
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    // Check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
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
      setScrolled(window.scrollY > 5);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.colorScheme = 'light';
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.colorScheme = 'light';
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  const handleNavClick = (id) => {
    setMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        requestAnimationFrame(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        });
      }, 250);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-100 lg:mx-[135px] mt-5 px-4 sm:px-10 rounded-full transition-all duration-500 ${scrolled
          ? 'bg-black/15 dark:bg-white/15 backdrop-blur-md shadow-lg text-gray-900 dark:text-white'
          : 'bg-transparent text-gray-900 dark:text-white'
        }`}
    >
      <nav className="flex w-full items-center justify-between px-3 sm:px-6 py-3 relative">
        <a
          href="/"
          className="nav-brand flex item-center justify-center text-sm sm:text-lg lg:text-2xl font-bold transition-transform duration-300 hover:scale-105 whitespace-nowrap"
        >
          Ashapu Mohan
        </a>

        <ul className="hidden md:flex space-x-8 lg:space-x-15 font-semibold text-base lg:text-lg items-center">
          <li>
            <span
              className={`nav-link cursor-pointer transition-colors duration-300 ${scrolled ? 'hover:text-blue-600 dark:hover:text-blue-400' : 'hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              onClick={() => handleNavClick('home')}
            >
              Home
            </span>
          </li>
          <li>
            <span
              className={`nav-link cursor-pointer transition-colors duration-300 ${scrolled ? 'hover:text-blue-600 dark:hover:text-blue-400' : 'hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              onClick={() => handleNavClick('skills')}
            >
              Skills
            </span>
          </li>
          <li>
            <Link
              className={`nav-link transition-colors duration-300 ${scrolled ? 'hover:text-blue-600 dark:hover:text-blue-400' : 'hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              to="/projects"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className={`nav-link transition-colors duration-300 ${scrolled ? 'hover:text-blue-600 dark:hover:text-blue-400' : 'hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              to="/certificates"
              onClick={() => setMenuOpen(false)}
            >
              Certificates
            </Link>
          </li>
          <li>
            <span
              className={`nav-link cursor-pointer transition-colors duration-300 ${scrolled ? 'hover:text-blue-600 dark:hover:text-blue-400' : 'hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              onClick={() => handleNavClick('contacting')}
            >
              Contact
            </span>
          </li>

          {/* Dark Mode Toggle - Desktop */}
          <li>
            <button
              onClick={toggleDarkMode}
              className={`relative w-12 h-6 rounded-full transition-all duration-300 focus:outline-none ${darkMode ? 'bg-gray-700' : 'bg-gray-300'
                }`}
              aria-label="Toggle dark mode"
            >
              <div
                className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-all duration-300 flex items-center justify-center cursor-pointer ${darkMode ? 'translate-x-3' : 'translate-x-0.5'
                  }`}
              >
                {darkMode ? (
                  <FaMoon className="text-yellow-400 text-xs" />
                ) : (
                  <FaSun className="text-yellow-500 text-xs" />
                )}
              </div>
            </button>
          </li>
        </ul>

        <div className="md:hidden flex items-center gap-3 z-50">
          {/* Dark Mode Toggle - Mobile */}
          <button
            onClick={toggleDarkMode}
            className={`relative w-12 h-6 rounded-full transition-all duration-300 focus:outline-none ${darkMode ? 'bg-gray-700' : 'bg-gray-300'
              }`}
            aria-label="Toggle dark mode"
          >
            <div
              className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-all duration-300 flex items-center justify-center cursor-pointer ${darkMode ? 'translate-x-6' : 'translate-x-0.5'
                }`}
            >
              {darkMode ? (
                <FaMoon className="text-yellow-400 text-xs" />
              ) : (
                <FaSun className="text-yellow-500 text-xs" />
              )}
            </div>
          </button>

          {/* Menu Button */}
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} className='bg-transparent' />}
          </button>
        </div>

        {menuOpen && (
          <ul
            ref={menuRef}
            className="absolute top-[100%] right-0 left-0 w-full 
      bg-black/60 dark:bg-white/10 backdrop-blur-lg rounded-2xl py-6 
      text-white dark:text-white text-center flex flex-col gap-5 text-base sm:text-lg font-semibold md:hidden
      transition-all duration-500 ease-out 
      animate-slide-down"
          >
            <li className="hover:text-blue-300 transition duration-300">
              <span onClick={() => handleNavClick('home')}>Home</span>
            </li>
            <li className="hover:text-blue-300 transition duration-300">
              <span onClick={() => handleNavClick('skills')}>Skills</span>
            </li>
            <li className="hover:text-blue-300 transition duration-300">
              <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
            </li>
            <li className="hover:text-blue-300 transition duration-300">
              <Link to="/certificates" onClick={() => setMenuOpen(false)}>Certificates</Link>
            </li>
            <li className="hover:text-blue-300 transition duration-300">
              <span onClick={() => handleNavClick('contact')}>Contact</span>
            </li>
          </ul>
        )}

      </nav>
    </div>
  );
}

export default Navbar;
