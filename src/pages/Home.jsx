import React from 'react'

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center px-4 relative z-10">
      <div className="max-w-4xl mx-auto animate-fade-in">
        {/* Hero Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 neural-gradient neural-glow-text cursor-pointer hover:scale-105 transition-transform duration-300">
          Khadar Chittor
        </h1>
        
        {/* Hero Subtitle */}
        <p className="text-lg md:text-xl mb-8 text-white/90 hover:text-white transition-all duration-300 hover:scale-105">
          Coding with purpose, passion, and just the right amount of{' '}
          <span className="inline-block hover:scale-125 hover:rotate-12 transition-all duration-300">
            ☕
          </span>{' '}
          caffeine.
        </p>
        
        {/* CTA Button */}
        <button 
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="btn-primary inline-block hover:shadow-2xl hover:shadow-cyan-500/25"
        >
          Take the Tour
        </button>
        
        {/* Social Links */}
        <div className="flex justify-center space-x-8 mt-12">
          {/* GitHub Button */}
          <a
            href="https://github.com/Cmk31311"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-gray-600/30 rounded-2xl text-white transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-gray-500/20 hover:border-gray-400/50"
          >
            {/* Animated background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-600/10 to-gray-500/10 rounded-2xl blur-sm group-hover:from-gray-500/20 group-hover:to-gray-400/20 transition-all duration-500"></div>
            
            {/* GitHub Icon */}
            <div className="relative z-10">
              <svg className="w-6 h-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            
            {/* Text */}
            <span className="relative z-10 font-semibold tracking-wide group-hover:text-gray-200 transition-colors duration-300">
              GitHub
            </span>
            
            {/* Hover effect particles */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
              <div className="absolute top-1/2 left-1/2 w-0 h-0 bg-gray-400/20 rounded-full transform -translate-x-1/2 -translate-y-1/2 group-hover:w-24 group-hover:h-24 transition-all duration-700"></div>
            </div>
            
            {/* Corner accents */}
            <div className="absolute top-2 left-2 w-2 h-2 border-l-2 border-t-2 border-gray-400/60 group-hover:border-gray-300/80 transition-all duration-500"></div>
            <div className="absolute bottom-2 right-2 w-2 h-2 border-r-2 border-b-2 border-gray-400/60 group-hover:border-gray-300/80 transition-all duration-500"></div>
          </a>
          
          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/khadarc/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600/40 to-blue-700/40 backdrop-blur-xl border border-blue-500/30 rounded-2xl text-white transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 hover:border-blue-400/50"
          >
            {/* Animated background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-400/10 rounded-2xl blur-sm group-hover:from-blue-400/20 group-hover:to-blue-300/20 transition-all duration-500"></div>
            
            {/* LinkedIn Icon */}
            <div className="relative z-10">
              <svg className="w-6 h-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            
            {/* Text */}
            <span className="relative z-10 font-semibold tracking-wide group-hover:text-blue-200 transition-colors duration-300">
              LinkedIn
            </span>
            
            {/* Hover effect particles */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
              <div className="absolute top-1/2 left-1/2 w-0 h-0 bg-blue-400/20 rounded-full transform -translate-x-1/2 -translate-y-1/2 group-hover:w-24 group-hover:h-24 transition-all duration-700"></div>
            </div>
            
            {/* Corner accents */}
            <div className="absolute top-2 left-2 w-2 h-2 border-l-2 border-t-2 border-blue-400/60 group-hover:border-blue-300/80 transition-all duration-500"></div>
            <div className="absolute bottom-2 right-2 w-2 h-2 border-r-2 border-b-2 border-blue-400/60 group-hover:border-blue-300/80 transition-all duration-500"></div>
          </a>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
