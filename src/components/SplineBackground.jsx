import React, { useState, useEffect, useRef, useMemo } from 'react'

const SplineBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorTrail, setCursorTrail] = useState([])
  const animationFrameRef = useRef(null)
  const lastUpdateRef = useRef(0)

         // Memoize orb data to prevent recalculation on every render
         const orbData = useMemo(() => {
           return Array.from({ length: 3 }, (_, i) => ({
             id: i,
             size: 60 + Math.random() * 40,
             left: Math.random() * 100,
             top: Math.random() * 100,
             animationDelay: `${i * 1.2}s`,
             animationDuration: `${12 + i * 0.8}s`
           }))
         }, [])

         // Memoize particle data
         const particleData = useMemo(() => {
           return Array.from({ length: 8 }, (_, i) => ({
             id: i,
             left: Math.random() * 100,
             top: Math.random() * 100,
             animationDelay: `${i * 0.3}s`,
             animationDuration: `${6 + i * 0.2}s`
           }))
         }, [])

  useEffect(() => {
    let fadeTimeout = null
    
    const handleMouseMove = (e) => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      
      // Clear any existing fade timeout
      if (fadeTimeout) {
        clearTimeout(fadeTimeout)
      }
      
             animationFrameRef.current = requestAnimationFrame(() => {
               const now = performance.now()
               if (now - lastUpdateRef.current < 32) return // 30fps cap for better performance
               lastUpdateRef.current = now
        
        const newPosition = { x: e.clientX, y: e.clientY }
        setMousePosition(newPosition)
        
        // Short trail that fades quickly
        setCursorTrail(prev => {
          const newTrail = [...prev, { ...newPosition, id: now }]
          return newTrail.slice(-4) // Very short trail
        })
        
        // Set timeout to clear trail when mouse stops moving
        fadeTimeout = setTimeout(() => {
          setCursorTrail([])
        }, 150) // Clear after 150ms of no movement
      })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      if (fadeTimeout) {
        clearTimeout(fadeTimeout)
      }
    }
  }, [])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Modern Dark Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
      
      {/* Cool Color Overlays */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-purple-600/20"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-cyan-500/15 via-transparent to-indigo-600/15"></div>
      
      {/* Live Cursor Trail */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Dotted cursor trail line */}
        {cursorTrail.length > 1 && (
          <svg
            className="absolute inset-0 w-full h-full"
            style={{ zIndex: 1 }}
          >
            <path
              d={`M ${cursorTrail.map(point => `${point.x},${point.y}`).join(' L ')}`}
              stroke="url(#cursorGradient)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="4 6"
              opacity="0.9"
            />
            <defs>
              <linearGradient id="cursorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(59,130,246,1)" />
                <stop offset="50%" stopColor="rgba(147,51,234,0.8)" />
                <stop offset="100%" stopColor="rgba(59,130,246,0.6)" />
              </linearGradient>
            </defs>
          </svg>
        )}
        
        {/* Small trail dots */}
        {cursorTrail.map((point, index) => {
          const opacity = (index + 1) / cursorTrail.length
          const size = 2 + (opacity * 2)
          
          return (
            <div
              key={point.id}
              className="absolute rounded-full transition-opacity duration-100"
              style={{
                left: `${point.x}px`,
                top: `${point.y}px`,
                width: `${size}px`,
                height: `${size}px`,
                background: `radial-gradient(circle, rgba(59,130,246,${opacity}), rgba(147,51,234,${opacity * 0.7}), transparent)`,
                boxShadow: `0 0 ${size * 2}px rgba(59,130,246,${opacity * 0.8})`,
                transform: 'translate(-50%, -50%)',
                willChange: 'transform, opacity',
                zIndex: 1 - index
              }}
            />
          )
        })}
      </div>
      
      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {orbData.map((orb) => {
          // Mouse interaction
          const mouseX = mousePosition.x
          const mouseY = mousePosition.y
          const elementX = (orb.left / 100) * window.innerWidth
          const elementY = (orb.top / 100) * window.innerHeight
          const distance = Math.sqrt((mouseX - elementX) ** 2 + (mouseY - elementY) ** 2)

          const scale = distance < 120 ? 1 + (120 - distance) / 120 * 0.3 : 1
          const opacity = distance < 150 ? 0.4 + (150 - distance) / 150 * 0.2 : 0.4

          return (
            <div
              key={`orb-${orb.id}`}
              className="absolute rounded-full"
              style={{
                width: `${orb.size * scale}px`,
                height: `${orb.size * scale}px`,
                left: `${orb.left}%`,
                top: `${orb.top}%`,
                opacity: opacity,
                background: `radial-gradient(circle at 30% 30%, rgba(59,130,246,0.4), rgba(147,51,234,0.3), rgba(0,0,0,0.1))`,
                border: `1px solid rgba(59,130,246,0.4)`,
                boxShadow: `
                  inset 0 0 50px rgba(59,130,246,0.1),
                  0 0 100px rgba(59,130,246,0.5),
                  0 0 150px rgba(147,51,234,0.3)
                `,
                animationDelay: orb.animationDelay,
                animationDuration: orb.animationDuration,
                transform: `translate(-50%, -50%) scale(${scale})`,
                willChange: 'transform, opacity',
                contain: 'layout style paint'
              }}
            />
          )
        })}
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particleData.map((particle) => {
          const mouseX = mousePosition.x
          const mouseY = mousePosition.y
          const elementX = (particle.left / 100) * window.innerWidth
          const elementY = (particle.top / 100) * window.innerHeight
          const distance = Math.sqrt((mouseX - elementX) ** 2 + (mouseY - elementY) ** 2)

          const scale = distance < 80 ? 1 + (80 - distance) / 80 * 1.5 : 1
          const opacity = distance < 100 ? 0.7 + (100 - distance) / 100 * 0.2 : 0.7

          return (
            <div
              key={`particle-${particle.id}`}
              className="absolute rounded-full"
              style={{
                width: `${4 * scale}px`,
                height: `${4 * scale}px`,
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                opacity: opacity,
                background: `radial-gradient(circle, rgba(59,130,246,0.9), rgba(147,51,234,0.7), transparent)`,
                boxShadow: `0 0 10px rgba(59,130,246,0.8), 0 0 20px rgba(147,51,234,0.4)`,
                animationDelay: particle.animationDelay,
                animationDuration: particle.animationDuration,
                transform: `translate(-50%, -50%) scale(${scale})`,
                willChange: 'transform, opacity',
                contain: 'layout style paint'
              }}
            />
          )
        })}
      </div>
      
             {/* Subtle Grid - optimized */}
             <div className="absolute inset-0 opacity-3">
               <div className="grid grid-cols-6 grid-rows-6 h-full w-full">
                 {[...Array(36)].map((_, i) => (
                   <div
                     key={i}
                     className="border border-blue-500/5"
                     style={{
                       animationDelay: `${(i % 6) * 0.2}s`,
                       animationDuration: `${10 + (i % 6) * 0.3}s`,
                       willChange: 'transform'
                     }}
                   />
                 ))}
               </div>
             </div>
    </div>
  )
}

export default SplineBackground


