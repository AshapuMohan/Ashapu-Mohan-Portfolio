import React from 'react';

function HeroSection() {
  return (
    <div className='flex flex-col sm:flex-row items-center justify-center gap-40 p-10 min-h-screen bg-slate-50'>
      <img
        src='/Mohan1.jpg'
        alt='Mohan'
        className='w-[300px] rounded-xl transition-transform duration-300 hover:scale-105'
      />
      <div className='max-w-xl text-center sm:text-left'>
        <h1 className='mb-5 text-4xl sm:text-5xl font-bold'>
          Welcome to <span class="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-blue-500 transition-tranform duration-300 hover:scale-105">
          <span class="relative text-white dark:text-gray-950 ">Mohan's</span></span> Portfolio
        </h1>
        <h4 className='mb-8 text-lg sm:text-2xl'>
          Aspiring Fullstack Web Developer | Passionate about blending web development and open source to create, innovate, and build amazing digital experiences! 🚀
        </h4>
        <a
          href='/contact'
          className='inline-block bg-blue-500 text-white font-bold px-6 py-3 rounded-2xl transition-transform duration-300 hover:scale-105'
        >
          Contact Me <i className='fa-solid fa-arrow-right'></i>
        </a>
        <a className='px-6' href='https://www.linkedin.com/in/mohan-ashapu-724aba258/'><i class="fa-brands fa-linkedin transition-transform duration-300 hover:scale-180"></i></a>
        <a href='mailto:ashapumohan123@gmail.com'><i class="fa-solid fa-envelope transition-transform duration-300 hover:scale-180"></i></a>
        <a href='https://wa.me/917989909756?text=Hi%2C%20Ashapu%20Mohan,%20I%27m%20interested%20in%20your%20services.'><i class="fa-brands fa-whatsapp transition-transform duration-300 hover:scale-180 p-5"></i></a>
      </div>
    </div>
  );
}

export default HeroSection;
