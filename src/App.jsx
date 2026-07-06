import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Certificate from './components/Certificate';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulasi loading - bisa disesuaikan dengan kebutuhan
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // Loading selama 4 detik agar lebih menarik

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="bg-slate-900 text-slate-100 font-sans antialiased min-h-screen">

      <Navbar />

      <main>

        <Hero />

        <About />

        <Education />

        <Projects />

        <Certificate />

        <Contact />

      </main>

      <footer className="py-8 text-center text-xs text-slate-500 border-t border-slate-800">
        <p>
          Dibuat dengan ❤️ menggunakan React & Tailwind. © 2026
        </p>
      </footer>

    </div>
  );
}