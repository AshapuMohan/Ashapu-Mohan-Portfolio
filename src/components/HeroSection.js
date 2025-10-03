import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, Phone } from "lucide-react";
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function HeroSection() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (id) => {
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
    <section className="bg-gradient-to-tr from-blue-50 to-indigo-50 relative min-h-screen flex flex-col justify-center items-center overflow-hidden pb-5">
      <div className="relative z-10 items-center flex flex-col justify-center text-center max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="relative mt-16"
        >
          <div className="relative">
            <img
              src="/Mohan-suite1.png"
              alt="Mohan"
              className="w-[250px] sm:w-[100px] lg:w-[250px] rounded-2xl object-cover"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight"
        >
          Crafting{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-600 via-slate-600 to-slate-600">
          Digital Experiences
        </span>


        {" "}
          with Code & Design
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto"
        >
          I’m <span className="font-semibold text-gray-900">Ashapu Mohan</span>, 
          a Fullstack Developer blending engineering & design to build interfaces that feel{" "}
          <span className="italic text-violet-600">beautiful, fast, and human.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-10 flex justify-center gap-6"
        >
          <span
            onClick={() => handleNavClick('contact')}
            className="px-8 py-3 rounded-full font-semibold bg-black text-white hover:scale-105 transition-transform shadow-xl"
          >
            Let’s Talk
          </span>
          <Link
            to="/projects"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3 rounded-full font-semibold border border-gray-300 text-gray-700 hover:bg-gray-50 transition shadow-sm"
          >
            My Work
          </Link>
        </motion.div>

        <motion.div
          className="flex gap-6 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <a href="https://github.com/AshapuMohan" className="text-gray-700 hover:text-violet-600 transition">
            <Github size={28} />
          </a>
          <a href="https://www.linkedin.com/in/mohan-ashapu-724aba258/" className="text-gray-700 hover:text-violet-600 transition">
            <Linkedin size={28} />
          </a>
          <a href="mailto:ashapumohan123@gmail.com" className="text-gray-700 hover:text-violet-600 transition">
            <Mail size={28} />
          </a>
          <a href="tel:+917989909756" className="text-gray-700 hover:text-violet-600 transition">
            <Phone size={28} />
          </a>
          <a href="https://x.com/MohanAshapu" className="text-gray-700 hover:text-violet-600 transition">
            <Twitter size={28} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
