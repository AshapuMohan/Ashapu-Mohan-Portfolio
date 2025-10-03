import React from 'react';

function HeroSection() {
    const TEXT_SIZE = 'text-3xl sm:text-2xl lg:text-4xl xl:text-[5rem]';
  const BASE_CHAR_STYLE = `font-extrabold tracking-tight leading-none ${TEXT_SIZE}`;
  const O_STYLE = 'inline-block bg-black rounded-full aspect-square p-0 m-0';
  const O_SIZE = 'w-[2rem] h-[2rem] sm:w-[3rem] sm:h-[3rem] lg:w-[4.3rem] lg:h-[4.2rem] xl:w-[5rem] xl:h-[5rem]';
  const MOHAN_CONTAINER_STYLE = 'flex items-center space-x-0 mx-auto mt-4';
    return (
        <div className='bg-gradient-to-tr from-blue-50 to-indigo-50'>
            {/* Top section: image and text */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-20 p-10 min-h-screen bg-gradient-to-tr from-blue-50 to-indigo-50">

                {/* Left: Image */}
                <div className="flex flex-col items-center gap-6">
                    <img
                        src="/Mohan-suite1.png"
                        alt="Mohan"
                        className="w-[250px] rounded-xl transition-transform duration-300 hover:scale-105"
                    />
                </div>

                {/* Right: Text Content */}
                <div className="max-w-xl text-center sm:text-left">
                    {/* <h1 className="mb-5 text-4xl sm:text-5xl font-bold">
                        Welcome to{' '}
                        <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-blue-500 transition-transform duration-300 hover:scale-105">
                            <span className="relative text-white dark:text-gray-950 p-1">Mohan's</span>
                        </span>{' '}
                        Portfolio
                    </h1> */}
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Hi, this is</h1>
                    <div className={MOHAN_CONTAINER_STYLE}>
                      {/* M */}
                      <span className={BASE_CHAR_STYLE}>M</span>
                      
                      {/* O (Styled as a circular block) */}
                      <span className={`${O_STYLE} ${O_SIZE} mb-1`} aria-label="O"></span>
                      
                      {/* H */}
                      <span className={BASE_CHAR_STYLE}>H</span>
                      
                      {/* A */}
                      <span className={BASE_CHAR_STYLE}>A</span>
                      
                      {/* N */}
                      <span className={BASE_CHAR_STYLE}>N</span>
                    </div>
                    <h4 className="mb-8 text-lg sm:text-2xl">
                        Aspiring Fullstack Web Developer | Passionate about blending web development and open source to create, innovate, and build amazing digital experiences! 🚀
                    </h4>
                    <a
                        href="/contact"
                        className="inline-block bg-blue-500 text-white font-bold px-4 py-2 rounded-2xl transition-transform duration-300 hover:scale-105"
                    >
                        Contact Me <i className="fa-solid fa-arrow-right"></i>
                    </a>
                    <div className="flex justify-center sm:justify-start items-center gap-5 mt-6 flex-wrap">
                        <a href='https://ashapumohanportfolio.netlify.app/'>
                            <i className="fa-solid fa-globe fa-xl px-2 py-4 hover:bg-gray-300 hover:border hover:border-gray-200 hover:rounded"></i>
                        </a>
                        <a href="mailto:ashapumohan123@gmail.com">
                            <i className="fa-solid fa-envelope fa-xl px-2 py-4 hover:border hover:border-gray-200 hover:bg-gray-300 hover:rounded"></i>
                        </a>
                        <a href='tel:+917989909756'>
                            <i className="fa-solid fa-phone fa-xl px-2 py-4 hover:bg-gray-300 hover:border hover:border-gray-200 hover:rounded"></i>
                        </a>
                        <a href="https://github.com/AshapuMohan">
                            <i className="fa-brands fa-github fa-xl px-2 py-4 hover:border hover:border-gray-200 hover:bg-gray-300 hover:rounded"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/mohan-ashapu-724aba258/">
                            <i className="fa-brands fa-linkedin fa-xl px-2 py-4  hover:bg-gray-300 hover:border hover:border-gray-200 hover:rounded"></i>
                        </a>
                        <a href="https://x.com/MohanAshapu">
                            <i className="fa-brands fa-xa-twitter fa-xl px-2 py-4 hover:border hover:border-gray-200 hover:bg-gray-300 hover:rounded"></i>
                        </a>
                        {/*<a href="https://www.facebook.com/profile.php?id=100084252888068">
                            <i className="fa-brands fa-facebook fa-xl px-2 py-4 hover:bg-gray-300 hover:border hover:border-gray-200 hover:rounded"></i>
                        </a>
                        <a href="https://wa.me/917989909756?text=Hi%2C%20Ashapu%20Mohan">
                            <i className="fa-brands fa-whatsapp fa-xl px-2 py-4 hover:border hover:border-gray-200 hover:bg-gray-300 hover:rounded"></i>
                        </a>
                        <a href="https://www.instagram.com/mr_mohan__7781/">
                            <i className="fa-brands fa-instagram fa-xl px-2 py-4 hover:border hover:border-gray-200 hover:bg-gray-300 hover:rounded"></i>
                        </a> */}
                    </div>
                </div>
            </div>
      {/* GitHub Contribution Graph (centered, only on md and larger screens) */}
      {/* // <h1 className="text-3xl text-center sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
      //   GitHub Contribution Graph
      // </h1>
      // <p className="text-center text-base sm:text-lg text-gray-700 max-w-4xl mx-auto mb-6">
      //   This graph highlights my daily contributions to open-source and personal projects on GitHub. 
      //   Each square represents a day of activity — from writing code and committing changes to collaborating on repositories. 
      //   Consistent contributions reflect my dedication to learning, building, and improving as a developer throughout the year.
      // </p>
      // <div className="hidden md:flex justify-center bg-gradient-to-tr from-blue-50 to-indigo-50 pb-10">
      //   <img
      //     src="/github-contrib (2).png"
      //     alt="GitHub Contribution Streak"
      //     className="w-full max-w-4xl rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
      //   />
      // </div> */}
        </div>
    );
}

export default HeroSection;
