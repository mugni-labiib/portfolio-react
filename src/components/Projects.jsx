import React from 'react';

export default function Projects() {
  const projectList = [
    {
      title: "Al-Quran Digital",
      
      desc: "Aplikasi Al-Quran digital berbasis web yang dilengkapi dengan fitur pencarian surah, pemutar audio per ayat, dan teks terjemahan bahasa Indonesia.",
      tech: ["React", "Vite"],
      
      
      github: "https://github.com/mugni-labiib/al-quran", 
      demo: "https://fascinating-kheer-4e9980.netlify.app" 
    },
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="flex items-center space-x-4">
          <h2 className="text-3xl font-bold text-white">My Projects</h2>
          <div className="h-[1px] bg-slate-700 flex-1"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projectList.map((project, index) => (
            <div key={index} className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-all duration-300 flex flex-col justify-between p-6 space-y-4">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-3xl text-cyan-400">📁</span>
                  <div className="space-x-4 text-slate-400 text-sm font-mono">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-white transition-colors"
                    >
                      GitHub
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-cyan-400 font-semibold transition-colors"
                    >
                      Live Demo ↗
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white hover:text-cyan-400 transition-colors cursor-pointer">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {project.desc}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-400 pt-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="bg-slate-900 px-2 py-1 rounded">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}