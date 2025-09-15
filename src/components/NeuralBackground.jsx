import React, { useEffect, useRef, useState } from 'react'

const NeuralBackground = () => {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorTrail, setCursorTrail] = useState([])
  const mouseFrameRef = useRef(null)
  const lastMouseUpdateRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationId

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Optimized mouse tracking with requestAnimationFrame
    let fadeTimeout = null
    
    const handleMouseMove = (e) => {
      if (mouseFrameRef.current) {
        cancelAnimationFrame(mouseFrameRef.current)
      }
      
      // Clear any existing fade timeout
      if (fadeTimeout) {
        clearTimeout(fadeTimeout)
      }
      
             mouseFrameRef.current = requestAnimationFrame(() => {
               const now = performance.now()
               if (now - lastMouseUpdateRef.current < 32) return // 30fps cap for better performance
               lastMouseUpdateRef.current = now
        
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

    // Animation variables
    let time = 0
    const nodes = []
    const connections = []
    
           // Create nodes (optimized for performance)
           for (let i = 0; i < 8; i++) {
             nodes.push({
               x: Math.random() * canvas.width,
               y: Math.random() * canvas.height,
               vx: (Math.random() - 0.5) * 0.05,
               vy: (Math.random() - 0.5) * 0.05,
               radius: Math.random() * 0.8 + 0.4,
               pulse: Math.random() * Math.PI * 2,
               originalRadius: Math.random() * 0.8 + 0.4
             })
           }

    // Animation loop (optimized)
    let frameCount = 0
    const animate = () => {
      frameCount++
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Reduce animation frequency for better performance
      if (frameCount % 3 === 0) {
        time += 0.003
      }

      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Move nodes less frequently
        if (frameCount % 3 === 0) {
          node.x += node.vx
          node.y += node.vy
          
          // Very gentle mouse interaction - minimal movement
          const dx = mousePosition.x - node.x
          const dy = mousePosition.y - node.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 100) {
            const force = (100 - distance) / 100 * 0.001 // Extremely gentle force
            node.vx += dx * force * 0.0005 // Very small multiplier
            node.vy += dy * force * 0.0005
          }
          
          // Bounce off edges
          if (node.x <= 0 || node.x >= canvas.width) node.vx *= -1
          if (node.y <= 0 || node.y >= canvas.height) node.vy *= -1
          
          // Keep nodes in bounds
          node.x = Math.max(0, Math.min(canvas.width, node.x))
          node.y = Math.max(0, Math.min(canvas.height, node.y))
        }
        
        // Very subtle mouse interaction for visual effects only
        const dx = mousePosition.x - node.x
        const dy = mousePosition.y - node.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        let radius = node.originalRadius
        let alpha = 0.3
        let color = '0, 255, 255'
        
        if (distance < 60) {
          const intensity = (60 - distance) / 60 * 0.2 // Very subtle scaling
          radius += intensity * 0.5 // Minimal size change
          alpha += intensity * 0.1 // Minimal opacity change
          color = `${255 * intensity * 0.1}, ${255 - 20 * intensity}, ${255}` // Very subtle color change
        }
        
        // Simplified pulsing effect
        const pulse = Math.sin(time * 2 + node.pulse) * 0.3 + 0.7
        alpha += pulse * 0.3
        
        // Draw node
        ctx.beginPath()
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${color}, ${alpha})`
        ctx.fill()
        
        // Draw connections less frequently
        if (frameCount % 3 === 0) {
          for (let j = i + 1; j < nodes.length; j++) {
            const other = nodes[j]
            const dx = other.x - node.x
            const dy = other.y - node.y
            const distance = Math.sqrt(dx * dx + dy * dy)
            
            if (distance < 100) {
              const connectionAlpha = (1 - distance / 100) * 0.1
              ctx.beginPath()
              ctx.moveTo(node.x, node.y)
              ctx.lineTo(other.x, other.y)
              ctx.strokeStyle = `rgba(255, 0, 255, ${connectionAlpha})`
              ctx.lineWidth = 0.3
              ctx.stroke()
            }
          }
        }
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
      if (mouseFrameRef.current) {
        cancelAnimationFrame(mouseFrameRef.current)
      }
      if (fadeTimeout) {
        clearTimeout(fadeTimeout)
      }
    }
  }, [])

  return (
    <div className="fixed inset-0 z-0">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ willChange: 'transform' }}
      />
      
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
              stroke="url(#neuralGradient)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="4 6"
              opacity="0.9"
            />
            <defs>
              <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(0,255,255,1)" />
                <stop offset="50%" stopColor="rgba(255,255,255,0.8)" />
                <stop offset="100%" stopColor="rgba(0,255,255,0.6)" />
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
                background: `radial-gradient(circle, rgba(0,255,255,${opacity}), rgba(255,255,255,${opacity * 0.7}), transparent)`,
                boxShadow: `0 0 ${size * 2}px rgba(0,255,255,${opacity * 0.8})`,
                transform: 'translate(-50%, -50%)',
                willChange: 'transform, opacity',
                zIndex: 1 - index
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

export default NeuralBackground
