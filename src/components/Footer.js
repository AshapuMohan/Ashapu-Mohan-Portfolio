import { useEffect, useState, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Footer() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const footerRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (id) => {
    setMenuOpen(false);

    const scrollToSection = () => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(scrollToSection, 100);
    } else {
      scrollToSection();
    }
  };

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowButton(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    observer.observe(footer);

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      ref={footerRef}
      className="relative bg-neutral-900 text-white py-5 px-5 rounded-t-3xl"
    >
      {showButton && (
        <button
          onClick={scrollToTop}
          title="Back to Top"
          className="absolute -top-6 right-5 bg-gray-600 text-white p-3 rounded-full shadow-lg cursor-pointer animate-bounce"
          style={{ width: '48px', height: '48px' }}
        >
          <i className="fa-solid fa-arrow-up text-xl" />
        </button>
      )}

      <h2 className="text-3xl font-bold text-center mb-6 animate-pulse">Let's Connect</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left">
        {/* Left */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-1 flex items-center gap-2">
            <i className="fa fa-code text-blue-400" /> Ashapu Mohan
          </h3>
          <p className="text-sm text-gray-300">© 2025 All Rights Reserved</p>
        </div>

        {/* Center: Nav */}
        <ul className="flex justify-center gap-6 flex-wrap text-sm uppercase font-medium list-none p-0 m-0">
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

        {/* Right: Social Links */}
        <div className="flex justify-center md:justify-end gap-4 text-lg">
          <a
            href="https://www.facebook.com/profile.php?id=100084252888068"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-facebook hover:text-sky-800 hover:scale-150 transition-transform duration-300" />
          </a>
          <a
            href="https://x.com/MohanAshapu"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-x-twitter hover:text-black hover:scale-150 transition-transform duration-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/mohan-ashapu-724aba258"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin hover:text-sky-500 hover:scale-150 transition-transform duration-300" />
          </a>
          <a
            href="https://github.com/AshapuMohan"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github hover:text-black hover:scale-150 transition-transform duration-300" />
          </a>
          <a href="mailto:ashapumohan123@gmail.com">
            <i className="fa-solid fa-envelope hover:text-red-500 hover:scale-150 transition-transform duration-300" />
          </a>
          <a href="tel:+917989909756">
            <i className="fa-solid fa-phone hover:text-red-500 hover:scale-150 transition-transform duration-300" />
          </a>
        </div>
      </div>

      <p className="text-center mt-8 text-sm text-gray-400">
        Made with <i className="fa-solid fa-heart text-red-500 mx-1 animate-ping" /> by Ashapu Mohan
      </p>
    </footer>
  );
}
