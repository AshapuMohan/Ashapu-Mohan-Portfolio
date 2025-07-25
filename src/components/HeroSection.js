import React from 'react';

function HeroSection() {
  return (
    <div className='bg-gradient-to-tr from-blue-50 to-indigo-50'>
      {/* Top section: image and text */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-20 p-10 min-h-screen bg-gradient-to-tr from-blue-50 to-indigo-50">
        
        {/* Left: Image */}
        <div className="flex flex-col items-center gap-6">
        <img
    src="/Mohan1.jpg"
    alt="Mohan"
    className="
      transition-transform duration-300 hover:scale-105
      w-[150px] rounded-full
      md:w-[100px] md:rounded-full
      lg:w-[250px] lg:rounded-xl
    "
  />
</div>

        {/* Right: Text Content */}
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="mb-5 text-4xl sm:text-5xl font-bold">
            Welcome to{' '}
            <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-blue-500 transition-transform duration-300 hover:scale-105">
              <span className="relative text-white dark:text-gray-950 p-1">Mohan's</span>
            </span>{' '}
            Portfolio
          </h1>
          <h4 className="mb-8 text-lg sm:text-2xl">
            Aspiring Fullstack Web Developer | Passionate about blending web development and open source to create, innovate, and build amazing digital experiences! 🚀
          </h4>
          <a
            href="/contact"
            className="inline-block bg-blue-500 text-white font-bold px-6 py-3 rounded-2xl transition-transform duration-300 hover:scale-105"
          >
            Contact Me <i className="fa-solid fa-arrow-right"></i>
          </a>
          <div className="flex justify-center sm:justify-start items-center gap-5 mt-4">
            <a href="https://www.linkedin.com/in/mohan-ashapu-724aba258/">
              <i className="fa-brands fa-linkedin fa-lg transition-transform duration-300 hover:scale-130"></i>
            </a>
            <a href="mailto:ashapumohan123@gmail.com">
              <i className="fa-solid fa-envelope fa-lg transition-transform duration-300 hover:scale-130"></i>
            </a>
            <a href="https://wa.me/917989909756?text=Hi%2C%20Ashapu%20Mohan">
              <i className="fa-brands fa-whatsapp fa-lg transition-transform duration-300 hover:scale-130"></i>
            </a>
          </div>
        </div>
      </div>

      {/* GitHub Contribution Graph (centered, only on md and larger screens) */}
      <h1 className="text-3xl text-center sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
        GitHub Contribution Graph
      </h1>
      <p className="text-center text-base sm:text-lg text-gray-700 max-w-4xl mx-auto mb-6">
        This graph highlights my daily contributions to open-source and personal projects on GitHub. 
        Each square represents a day of activity — from writing code and committing changes to collaborating on repositories. 
        Consistent contributions reflect my dedication to learning, building, and improving as a developer throughout the year.
      </p>
      <div className="hidden md:flex justify-center bg-gradient-to-tr from-blue-50 to-indigo-50 pb-10">
        <img
          src="/github-contrib (2).png"
          alt="GitHub Contribution Streak"
          className="w-full max-w-4xl rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
        />
      </div>

    </div>
  );
}

export default HeroSection;
