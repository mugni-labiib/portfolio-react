import React from 'react';


import FotoSaya from '../assets/foto.jpg'; 

export default function About() {
  const skills = ['React.js', 'Laravel', 'HTML,CSS', 'Java Script', 'Next.js', 'Git & GitHub'];

  return (
    <section id="about" className="py-24 px-6 bg-slate-800/50">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="flex items-center space-x-4">
          <h2 className="text-3xl font-bold text-white">About</h2>
          <div className="h-[1px] bg-slate-700 flex-1"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2 space-y-4 text-slate-300 leading-relaxed">
            <p> Saya adalah seorang Full Stack Developer yang gemar membangun aplikasi web utuh dari ujung ke ujung. Saya memadukan keindahan antarmuka front-end modern dengan kekuatan arsitektur back-end yang kokoh. Fokus utama saya adalah mengubah ide kompleks menjadi solusi digital yang cepat, aman, mudah diskalakan, serta memberikan pengalaman pengguna yang mulus dan berdampak nyata.
            </p>
            <p>
             Saya adalah seorang Full Stack Developer yang gemar membangun aplikasi web dari UI hingga database. Saya memadukan antarmuka front-end yang modern dengan arsitektur back-end yang kokoh. Melalui pendekatan ini, saya fokus menciptakan solusi digital yang cepat, aman, serta memberikan pengalaman pengguna yang mulus dan optimal.
            </p>
            <p className="pt-2 text-white font-semibold"> Pemrograman Yang Digunakan</p>
            <div className="grid grid-cols-2 gap-2 font-mono text-sm text-cyan-400">
              {skills.map((skill, index) => (
                <div key={index}>
                  <span className="text-xs mr-2">⚡</span>{skill}
                </div>
              ))}
            </div>
          </div>
          
        
          <div className="flex justify-center">
            <div className="relative group">
              
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
              
              
              <div className="relative w-48 h-48 rounded-2xl bg-slate-700 overflow-hidden border border-slate-600 flex items-center justify-center">
                <img 
                  src={FotoSaya} 
                  alt="Foto Profil Saya" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}