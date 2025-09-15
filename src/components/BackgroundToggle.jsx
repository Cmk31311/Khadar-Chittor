import React, { useState } from 'react'

const BackgroundToggle = ({ onToggle }) => {
  const [isSplineActive, setIsSplineActive] = useState(false) // Start with Neural (false)

  const handleToggle = () => {
    const newState = !isSplineActive
    setIsSplineActive(newState)
    onToggle(newState)
  }

  return (
    <div className="fixed top-20 right-4 z-50">
      <button
        onClick={handleToggle}
        className="group relative flex items-center space-x-3 px-5 py-3 bg-gradient-to-r from-black/50 to-gray-900/50 backdrop-blur-xl border border-cyan-400/30 rounded-full text-white transition-all duration-500 hover:scale-105 hover:border-cyan-300/50 hover:shadow-lg hover:shadow-cyan-500/20"
        title={`Switch to ${isSplineActive ? 'Neural Network' : 'Geometric'} background`}
      >
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-sm group-hover:from-cyan-400/10 group-hover:to-purple-400/10 transition-all duration-500"></div>
        
        {/* Icon */}
        <div className="relative z-10">
          {isSplineActive ? (
            <div className="w-4 h-4 flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse"></div>
            </div>
          ) : (
            <div className="w-4 h-4 flex items-center justify-center">
              <div className="relative">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full absolute top-0 left-0 animate-pulse"></div>
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full absolute bottom-0 right-0 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="w-1 h-1 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          )}
        </div>

        {/* Text */}
        <span className="relative z-10 text-sm font-semibold tracking-wide">
          {isSplineActive ? 'Geometric' : 'Neural'}
        </span>

        {/* Enhanced toggle switch */}
        <div className="relative z-10 w-9 h-5 bg-white/20 rounded-full transition-all duration-300 group-hover:bg-white/30">
          <div 
            className={`absolute top-0.5 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full transition-all duration-300 shadow-md ${
              isSplineActive ? 'translate-x-4' : 'translate-x-0.5'
            }`}
          />
        </div>
      </button>
    </div>
  )
}

export default BackgroundToggle
