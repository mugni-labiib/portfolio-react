import React from 'react';

import fileCV from '../assets/cv.png'; 

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-6">
      <div className="max-w-4xl text-center space-y-6">
        <p className="text-cyan-400 font-mono tracking-widest text-sm uppercase"></p>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white">
          Mugni Labiib
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-400">
          Saya seorang full stack developer.
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
          Fokus saya adalah membangun aplikasi web utuh yang indah, responsif, dan fungsional dari ujung ke ujung menggunakan ekosistem Full Stack modern.
        </p>
        

        <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
          

          <a 
            href="#projects" 
            className="w-full sm:w-auto inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium px-8 py-3 rounded-full shadow-lg shadow-cyan-500/20 transition-all transform hover:-translate-y-1 text-center"
          >
            Lihat Karya Saya
          </a>


          <a 
            href={fileCV} 
            download="CV_Mugni_Labiib.png" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent border-2 border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 font-medium px-8 py-3 rounded-full transition-all transform hover:-translate-y-1 text-center"
          >
            <span>Download CV</span>

            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>

        </div>
      </div>
    </section>
  );
}