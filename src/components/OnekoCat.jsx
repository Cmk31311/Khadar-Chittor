import React, { useState, useEffect, useRef } from 'react';

const OnekoCat = () => {
  const [isSleeping, setIsSleeping] = useState(true);
  const [bedPosition, setBedPosition] = useState({ x: 0, y: 0 });
  const bedRef = useRef();
  const mousePosRef = useRef({ x: 0, y: 0 });
  const isSleepingRef = useRef(isSleeping);
  const bedPositionRef = useRef(bedPosition);
  const catCreatedRef = useRef(false);

  // Update refs when state changes
  useEffect(() => {
    isSleepingRef.current = isSleeping;
  }, [isSleeping]);

  useEffect(() => {
    bedPositionRef.current = bedPosition;
  }, [bedPosition]);

  // Calculate bed position relative to the navigation section
  useEffect(() => {
    const updateBedPosition = () => {
      // Find the navigation button with the name "Khadar Chittor"
      let navButton = document.querySelector('button span[class*="neural-gradient"]');
      
      // Fallback: try to find the button containing "Khadar Chittor"
      if (!navButton) {
        const buttons = document.querySelectorAll('button');
        for (let button of buttons) {
          if (button.textContent.includes('Khadar Chittor')) {
            navButton = button;
            break;
          }
        }
      }
      
      if (navButton) {
        const rect = navButton.getBoundingClientRect();
        // Position couch to the right of the name in navigation
        setBedPosition({
          x: rect.right + 35, // 35px to the right of the name
          y: rect.top + rect.height / 2  // Vertically centered with the name
        });
      }
    };

    // Initial positioning
    updateBedPosition();
    
    // Update position on scroll and resize
    const handleUpdate = () => {
      setTimeout(updateBedPosition, 10); // Small delay to ensure DOM is updated
    };
    
    window.addEventListener('resize', handleUpdate);
    window.addEventListener('scroll', handleUpdate);
    
    // Also update periodically to catch any navigation changes
    const interval = setInterval(updateBedPosition, 1000);
    
    return () => {
      window.removeEventListener('resize', handleUpdate);
      window.removeEventListener('scroll', handleUpdate);
      clearInterval(interval);
    };
  }, []);

  // Custom oneko implementation - only create cat after bed position is ready
  useEffect(() => {
    const isReducedMotion = window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;
    if (isReducedMotion) return;

    // Don't create cat until bed position is properly set
    if (!bedPosition.x || bedPosition.x === 0) {
      return;
    }

    // Only create cat once
    if (catCreatedRef.current) {
      return;
    }
    catCreatedRef.current = true;

    // Remove existing oneko if it exists
    const existingOneko = document.getElementById('oneko');
    if (existingOneko) {
      existingOneko.remove();
    }

    const cleanup = createCat();

    function createCat() {
    // Make sure we use the current bed position
    const currentBedX = bedPosition.x;
    const currentBedY = bedPosition.y;
    
    // Update the ref to ensure it's synchronized
    bedPositionRef.current = { x: currentBedX, y: currentBedY };

    const nekoEl = document.createElement("div");
    nekoEl.id = "oneko";
    nekoEl.ariaHidden = true;
    nekoEl.style.width = "32px";
    nekoEl.style.height = "32px";
    nekoEl.style.position = "fixed";
    nekoEl.style.pointerEvents = "auto";
    nekoEl.style.imageRendering = "pixelated";
    nekoEl.style.zIndex = "999999";
    nekoEl.style.backgroundImage = "url('/oneko.gif')";
    nekoEl.style.backgroundRepeat = "no-repeat";
    nekoEl.style.backgroundSize = "auto";
    nekoEl.style.cursor = "pointer";

    // Initialize cat position directly at bed position
    let nekoPosX = currentBedX;
    let nekoPosY = currentBedY;
    let mousePosX = currentBedX;
    let mousePosY = currentBedY;
    let frameCount = 0;
    let idleTime = 0;
    let idleAnimation = null;
    let idleAnimationFrame = 0;

    const nekoSpeed = 2;
    const spriteSets = {
      idle: [[-3, -3]],
      alert: [[-7, -3]],
      scratchSelf: [
        [-5, 0],
        [-6, 0],
        [-7, 0],
      ],
      scratchWallN: [
        [0, 0],
        [0, -1],
      ],
      scratchWallS: [
        [-7, -1],
        [-6, -2],
      ],
      scratchWallE: [
        [-2, -2],
        [-2, -3],
      ],
      scratchWallW: [
        [-4, 0],
        [-4, -1],
      ],
      tired: [[-3, -2]],
      sleeping: [
        [-2, 0],
        [-2, -1],
      ],
      N: [
        [-1, -2],
        [-1, -3],
      ],
      NE: [
        [0, -2],
        [0, -3],
      ],
      E: [
        [-3, 0],
        [-3, -1],
      ],
      SE: [
        [-5, -1],
        [-5, -2],
      ],
      S: [
        [-6, -3],
        [-7, -2],
      ],
      SW: [
        [-5, -3],
        [-6, -1],
      ],
      W: [
        [-4, -2],
        [-4, -3],
      ],
      NW: [
        [-1, 0],
        [-1, -1],
      ],
    };

    let nekoState = isSleepingRef.current ? "sleeping" : "idle";
    let nekoDirection = "E";
    let nekoFrame = 0;
    
    // Set initial position and sprite immediately
    nekoEl.style.left = `${nekoPosX - 16}px`;
    nekoEl.style.top = `${nekoPosY - 16}px`;
    
    // Set initial sleeping sprite if sleeping
    if (isSleepingRef.current) {
      const [x, y] = spriteSets.sleeping[0];
      nekoEl.style.backgroundPosition = `${x * 32}px ${y * 32}px`;
    }

    function updateNekoState() {
      if (isSleepingRef.current) {
        // Check if cat is close to bed position
        const bedDeltaX = bedPositionRef.current.x - nekoPosX;
        const bedDeltaY = bedPositionRef.current.y - nekoPosY;
        const bedDistance = Math.sqrt(bedDeltaX * bedDeltaX + bedDeltaY * bedDeltaY);
        
        if (bedDistance > 12) {
          // Cat needs to walk to bed first
          // Determine direction to bed
          if (Math.abs(bedDeltaX) > Math.abs(bedDeltaY)) {
            nekoDirection = bedDeltaX > 0 ? "E" : "W";
          } else {
            nekoDirection = bedDeltaY > 0 ? "S" : "N";
          }
          
          nekoState = nekoDirection;
          nekoFrame = Math.floor(frameCount / 15) % spriteSets[nekoDirection].length;
          const [x, y] = spriteSets[nekoDirection][nekoFrame];
          nekoEl.style.backgroundPosition = `${x * 32}px ${y * 32}px`;
          
          // Move towards bed with very smooth movement
          const speed = Math.min(nekoSpeed / bedDistance, 0.03);
          nekoPosX += bedDeltaX * speed;
          nekoPosY += bedDeltaY * speed;
          return;
        } else {
          // Cat is at bed, now sleep - center the cat on the couch
          nekoPosX = bedPositionRef.current.x;
          nekoPosY = bedPositionRef.current.y;
          nekoState = "sleeping";
          nekoFrame = Math.floor(frameCount / 30) % spriteSets.sleeping.length;
          const [x, y] = spriteSets.sleeping[nekoFrame];
          nekoEl.style.backgroundPosition = `${x * 32}px ${y * 32}px`;
          return;
        }
      }

      const deltaX = mousePosX - nekoPosX;
      const deltaY = mousePosY - nekoPosY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      if (distance < 48) {
        nekoState = "idle";
        nekoFrame = 0;
        const [x, y] = spriteSets.idle[nekoFrame];
        nekoEl.style.backgroundPosition = `${x * 32}px ${y * 32}px`;
        return;
      }

      // Determine direction
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        nekoDirection = deltaX > 0 ? "E" : "W";
      } else {
        nekoDirection = deltaY > 0 ? "S" : "N";
      }

      nekoState = nekoDirection;
      nekoFrame = Math.floor(frameCount / 15) % spriteSets[nekoDirection].length;
      const [x, y] = spriteSets[nekoDirection][nekoFrame];
      nekoEl.style.backgroundPosition = `${x * 32}px ${y * 32}px`;

      // Move towards mouse with smooth interpolation
      if (distance > 8) {
        const speed = Math.min(nekoSpeed / distance, 0.03); // Very slow for smoothest movement
        nekoPosX += deltaX * speed;
        nekoPosY += deltaY * speed;
      }
    }

    function animate() {
      frameCount++;
      updateNekoState();
      
      // Position the cat (no longer forcing to bed position)
      nekoEl.style.left = `${nekoPosX - 16}px`;
      nekoEl.style.top = `${nekoPosY - 16}px`;
      
      requestAnimationFrame(animate);
    }

    function handleMouseMove(e) {
      // Only track mouse when cat is awake (not sleeping)
      if (!isSleepingRef.current) {
        mousePosX = e.clientX;
        mousePosY = e.clientY;
        mousePosRef.current = { x: e.clientX, y: e.clientY };
      }
    }
    
    function handleCatClick() {
      setIsSleeping(prev => !prev);
    }

    document.body.appendChild(nekoEl);
    window.addEventListener('mousemove', handleMouseMove);
    nekoEl.addEventListener('click', handleCatClick);
    animate();

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        nekoEl.removeEventListener('click', handleCatClick);
        if (nekoEl.parentNode) {
          nekoEl.parentNode.removeChild(nekoEl);
        }
        catCreatedRef.current = false;
      };
    }

    return cleanup;
  }, [bedPosition.x, bedPosition.y]); // Only create cat when bed position is set

  const toggleCatMode = () => {
    setIsSleeping(!isSleeping);
  };

  return (
    <>
      {/* Cat Couch */}
      <div 
        ref={bedRef}
        className="fixed z-50 cursor-pointer group"
        style={{
          left: `${bedPosition.x}px`,
          top: `${bedPosition.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
        onClick={toggleCatMode}
        title={isSleeping ? "Click to wake up the cat" : "Click to send cat to sleep"}
      >
        <div className="relative">
          {/* Couch Base */}
          <div className="relative">
            {/* Main Couch - Neural/Cyberpunk Design */}
            <div className={`w-10 h-8 bg-gradient-to-b from-gray-800/80 to-gray-900/90 rounded-full shadow-lg border border-cyan-500/30 group-hover:shadow-2xl group-hover:shadow-cyan-500/50 group-hover:scale-105 transition-all duration-500 ${isSleeping ? 'animate-pulse' : ''}`}>
              {/* Couch Base with Neural Texture */}
              <div className="absolute inset-0 bg-gradient-to-b from-gray-800/60 to-gray-900/80 rounded-full">
                {/* Neon Accent Lines */}
                <div className="absolute top-1 left-1 right-1 h-px bg-cyan-400/30 rounded-full"></div>
                <div className="absolute top-2 left-1 right-1 h-px bg-purple-400/20 rounded-full"></div>
                <div className="absolute top-3 left-1 right-1 h-px bg-cyan-400/20 rounded-full"></div>
                <div className="absolute top-4 left-1 right-1 h-px bg-purple-400/30 rounded-full"></div>
                
                {/* Cyberpunk Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 rounded-full"></div>
              </div>
              
              {/* Couch Back - Neon Edges */}
              <div className="absolute -top-1 left-0 right-0 h-2 bg-gradient-to-b from-gray-700/80 to-gray-800/90 rounded-t-full shadow-md border border-cyan-500/40 shadow-cyan-500/20">
                {/* Back Cushion with Neural Glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-gray-700/60 to-gray-800/80 rounded-t-full">
                  <div className="absolute top-0.5 left-1 right-1 h-px bg-cyan-400/40 rounded-full"></div>
                  <div className="absolute top-1 left-1 right-1 h-px bg-purple-400/30 rounded-full"></div>
                </div>
              </div>
              
              {/* Neon Edge Accents */}
              <div className="absolute top-1 left-1 w-1 h-2 bg-cyan-400/40 rounded-full shadow-sm shadow-cyan-400/50"></div>
              <div className="absolute top-1 right-1 w-1 h-2 bg-purple-400/40 rounded-full shadow-sm shadow-purple-400/50"></div>
            </div>
            
            {/* Neural Glow Shadow */}
            <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-8 h-1.5 bg-cyan-500/20 rounded-full blur-sm"></div>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-purple-500/20 rounded-full blur-sm"></div>
          </div>
          
        </div>
      </div>

    </>
  );
};

export default OnekoCat;