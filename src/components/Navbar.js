import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
    <div className='fixed top-0 left-0 right-0 z-50 bg-white shadow-md'>
      <nav className='flex items-center justify-between px-6 py-4'>
        <a
          href='/'
          className='text-2xl font-bold transition-transform duration-300 hover:scale-105'
        >
          Ashapu Mohan
        </a>

        <ul className='hidden md:flex space-x-15 font-semibold text-lg'>
          <li>
            <span
              className='cursor-pointer hover:text-blue-400 transition-colors'
              onClick={() => handleNavClick('home')}
            >
              Home
            </span>
          </li>
          <li>
            <span
              className='cursor-pointer hover:text-blue-400 transition-colors'
              onClick={() => handleNavClick('skills')}
            >
              Skills
            </span>
          </li>
          <li>
            <Link
              className='hover:text-blue-400 transition-colors'
              to='/projects'
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li>
            <span
              className='cursor-pointer hover:text-blue-400 transition-colors'
              onClick={() => handleNavClick('contact')}
            >
              Contact
            </span>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className='md:hidden z-50'>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className='absolute top-full left-0 w-full bg-white text-black text-center py-4 flex flex-col gap-4 text-lg font-semibold md:hidden'>
            <li><span onClick={() => handleNavClick('home')}>Home</span></li>
            <li><span onClick={() => handleNavClick('skills')}>Skills</span></li>
            <li><Link to='/projects' onClick={() => setMenuOpen(false)}>Projects</Link></li>
            <li><span onClick={() => handleNavClick('contact')}>Contact</span></li>
          </ul>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
