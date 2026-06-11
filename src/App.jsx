import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';


export default function App() {
  return (
    <div className="bg-slate-900 text-slate-100 font-sans antialiased min-h-screen scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8 text-center text-xs text-slate-500 border-t border-slate-800">
        <p>Dibuat dengan ❤️ menggunakan React & Tailwind. © 2026</p>
      </footer>
    </div>
  );
}