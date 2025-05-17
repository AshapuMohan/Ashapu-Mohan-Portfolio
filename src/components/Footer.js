export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-5 px-5 rounded-t-3xl">
      <h2 className="text-3xl font-bold text-center mb-6 animate-pulse">Let&apos;s Connect</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left">
        
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-lg font-semibold mb-1 flex items-center gap-2">
            <i className="fa fa-code text-blue-400"></i> Ashapu Mohan
          </h3>
          <p className="text-sm text-gray-300">© 2025 All Rights Reserved</p>
        </div>
        
        {/* Center Links */}
        <div className="flex justify-center gap-6 flex-wrap text-sm uppercase font-medium">
          <a href="/" className="hover:text-blue-400 transition duration-300">Home</a>
          <a href="/projects" className="hover:text-blue-400 transition duration-300">Projects</a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-end gap-4 text-lg">
          <a href="https://www.facebook.com/profile.php?id=100084252888068" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-facebook hover:text-sky-800 hover:scale-150 transition-transform duration-300"></i>
          </a>
          <a href="https://x.com/MohanAshapu" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-x-twitter hover:text-black-500 hover:scale-150 transition-transform duration-300"></i>
          </a>
          <a href="https://www.linkedin.com/in/mohan-ashapu-724aba258" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin hover:text-sky-500 hover:scale-150 transition-transform duration-300"></i>
          </a>
          <a href="https://github.com/AshapuMohan" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github hover:text-black-500 hover:scale-150 transition-transform duration-300"></i>
          </a>
          <a href="mailto:ashapumohan123@gmail.com">
            <i className="fa-solid fa-envelope hover:text-red-500 hover:scale-150 transition-transform duration-300"></i>
          </a>
        </div>
      </div>

      {/* Bottom Note */}
      <p className="text-center mt-8 text-sm text-gray-400">
        Made with <i className="fa-solid fa-heart text-red-500 mx-1 animate-ping"></i> by Ashapu Mohan
      </p>
    </footer>
  );
}
