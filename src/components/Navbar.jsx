import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-slate-900/90 backdrop-blur-md z-50 border-b border-slate-800">
      
      <div className="max-w-full mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20"> {/* Tinggi navbar dinaikkan dari h-16 ke h-20 agar seimbang */}
          
         
          <div className="flex-shrink-0">
            <span className="text-2xl md:text-3xl font-extrabold text-cyan-400 tracking-wider">
              Mugni Labiib.
            </span>
          </div>

          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
             
              <a href="#home" className="text-slate-300 hover:text-white px-3 py-2 text-lg font-semibold transition-colors">
                Home
              </a>
              <a href="#about" className="text-slate-300 hover:text-white px-3 py-2 text-lg font-semibold transition-colors">
                About
              </a>
              <a href="#projects" className="text-slate-300 hover:text-white px-3 py-2 text-lg font-semibold transition-colors">
                Project
              </a>
              <a href="#contact" className="text-slate-300 hover:text-white px-3 py-2 text-lg font-semibold transition-colors">
                Kontak
              </a>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
}