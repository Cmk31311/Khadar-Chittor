import React, { useState, Suspense, lazy } from 'react'
import Navigation from './components/Navigation'
import NeuralBackground from './components/NeuralBackground'
import SplineBackground from './components/SplineBackground'
import BackgroundToggle from './components/BackgroundToggle'
import LoadingSpinner from './components/LoadingSpinner'

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Experience = lazy(() => import('./pages/Experience'))
const Projects = lazy(() => import('./pages/Projects'))
const Skills = lazy(() => import('./pages/Skills'))
const Contact = lazy(() => import('./pages/Contact'))

function App() {
  const [showSpline, setShowSpline] = useState(false) // Start with neural background

  const handleBackgroundToggle = (isSplineActive) => {
    setShowSpline(isSplineActive)
  }

  return (
    <div className="min-h-screen bg-black text-white font-roboto overflow-x-hidden relative">
      {/* 3D Spline Background */}
      {showSpline && <SplineBackground />}
      
      {/* Neural Network Background */}
      {!showSpline && <NeuralBackground />}
      
      <Navigation />
      
      {/* Background Toggle */}
      <BackgroundToggle onToggle={handleBackgroundToggle} />
      
      {/* Single Page Scrollable Layout */}
      <main className="relative z-10">
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <LoadingSpinner size="large" />
              <p className="mt-4 text-white/80">Loading amazing content...</p>
            </div>
          </div>
        }>
          <Home />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </Suspense>
      </main>
    </div>
  )
}

export default App
