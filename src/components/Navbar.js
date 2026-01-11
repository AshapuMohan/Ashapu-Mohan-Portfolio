import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('darkMode');
      if (stored) return stored === 'true';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  const location = useLocation();
  const navigate = useNavigate();

  // Handle Dark Mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', action: () => handleNavClick('home') },
    { name: 'Work', to: '/projects' },
    { name: 'Skills', action: () => handleNavClick('skills') },
    { name: 'Contact', action: () => handleNavClick('contacting') },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0, x: "-50%" }}
        animate={{ y: 0, opacity: 1, x: "-50%" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-4 left-1/2 z-50 w-auto max-w-[90%]`}
      >
        <div className={`
            relative px-5 py-2.5 rounded-full 
            bg-white/80 dark:bg-black/80 backdrop-blur-md 
            border border-zinc-200/50 dark:border-white/5 
            shadow-sm
            flex items-center gap-6 lg:gap-8
        `}>
          {/* Brand - Minimal */}
          <Link
            to="/"
            className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-white hover:opacity-70 transition-opacity"
          >
            AM
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link, index) => (
              <li key={index}>
                {link.to ? (
                  <Link
                    to={link.to}
                    className="text-[13px] font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <button
                    onClick={link.action}
                    className="bg-transparent text-[13px] font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                  >
                    {link.name}
                  </button>
                )}
              </li>
            ))}
          </ul>

          {/* Separator */}
          <div className="hidden md:block w-px h-4 bg-zinc-200 dark:bg-white/10" />

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleDarkMode}
              className="bg-transparent text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Moon size={16} /> : <Sun size={16} />}
            </button>

            <button
              className="bg-transparent md:hidden text-zinc-900 dark:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - Minimal Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10, x: "-50%" }}
            animate={{ opacity: 1, scale: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, scale: 0.95, y: -10, x: "-50%" }}
            className="fixed top-20 left-1/2 w-[90%] max-w-sm z-40 md:hidden"
          >
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-2 shadow-xl flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <div key={index} className="w-full">
                  {link.to ? (
                    <Link
                      to={link.to}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-2.5 text-center text-sm text-zinc-600 dark:text-zinc-300 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800/50 rounded-xl transition-colors"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <button
                      onClick={link.action}
                      className="bg-transparent block w-full px-4 py-2.5 text-center text-sm text-zinc-600 dark:text-zinc-300 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800/50 rounded-xl transition-colors"
                    >
                      {link.name}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
