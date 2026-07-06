import React, { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [displayText, setDisplayText] = useState('');
  const fullName = 'MUGNI LABIIB'; // Ganti dengan nama Anda
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    
    // Typing effect - lebih lambat agar terlihat jelas
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setDisplayText(fullName.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 250); // Kecepatan typing (ms per karakter) - diperlambat dari 150ms ke 250ms

    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900 overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative text-center">
        {/* Nama dengan typing effect */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-7xl font-bold tracking-wider">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text animate-gradient">
              {displayText}
            </span>
            <span className={`inline-block w-1 h-16 ml-2 bg-cyan-400 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}></span>
          </h1>
        </div>

        {/* Loading indicator */}
        <div className="space-y-4">
          <p className="text-slate-400 text-sm tracking-widest uppercase animate-pulse">
            Loading Experience
          </p>
          
          {/* Animated dots */}
          <div className="flex justify-center space-x-2">
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>

          {/* Progress bar */}
          <div className="mt-8 w-80 mx-auto">
            <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-progress-fill"></div>
            </div>
          </div>
        </div>

        {/* Rotating circle decoration */}
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-40 h-40 border-2 border-cyan-400/20 rounded-full animate-spin-slow"></div>
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-32 h-32 border-2 border-blue-400/20 rounded-full animate-spin-slow-reverse"></div>
      </div>
    </div>
  );
}
