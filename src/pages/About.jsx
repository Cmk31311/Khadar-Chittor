import React from 'react'

const About = () => {
  const highlights = [
    {
      icon: '🌟',
      title: 'Upgrading My Neural Network',
      description: 'Outside of coding, you\'ll usually find me learning something new (currently geeking out on 🤖 GenAI), or exploring ways technology can inspire creativity.'
    },
    {
      icon: '💡',
      title: 'How I Function()',
      description: 'I write code the way I make coffee - strong, slightly chaotic, but it gets the job done.'
    },
    {
      icon: '🚀',
      title: 'My Tech Inventory',
      description: 'Python, Next.js, React, GenAI, ML, Tailwind CSS, Cloud deployment, and always exploring new technologies to stay ahead of the curve.'
    },
    {
      icon: '🤝',
      title: 'Ping Me IRL (aka Let\'s Connect!)',
      description: 'When I’m not building or breaking things, I’m probably sipping coffee or diving into a new tech rabbit hole. Always down to collaborate, brainstorm, or geek out over cool ideas — let’s make something awesome together.👇'
    }
  ]

  return (
    <section id="about" className="section-responsive relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="section-title animate-slide-up">About Me</h2>
        
        {/* About Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h3 className="text-4xl font-bold mb-4 neural-gradient hover:scale-105 transition-transform duration-300">
            Hello!, I'm Khadar Chittor
          </h3>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            I'm a developer who loves turning ideas into interactive, real-world apps. From building interactive web apps to creating{' '}
            <span className="inline-block hover:scale-110 transition-transform duration-300">🤖</span>{' '}
            AI-powered tools in Python and deploying on the cloud, I thrive on crafting solutions that are both functional and fun!
          </p>
        </div>
        
        {/* About Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Journey Card */}
          <div className="group card card-hover animate-slide-left hover-glow">
            <div className="relative">
              <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center text-2xl opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 hover-rotate">
                💻
              </div>
              <h4 className="text-2xl font-bold mb-4 neural-gradient group-hover:neural-glow-text transition-all duration-300">The Origin Story (No Superpowers Yet)</h4>
              <p className="text-white/90 leading-relaxed group-hover:text-white transition-colors duration-300">
              I kicked off my career at HCL Tech, building enterprise tools for one of Australia’s biggest banks. 
              These days, I’m an IT Student Lead at CSUF, leading student teams, keeping tech running, and constantly leveling up my skills like it’s a side quest.
              </p>
              
              {/* Animated corner accent */}
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
          
          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <div key={index} className="group card card-hover animate-slide-right hover-scale" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-center relative">
                  <span className="text-3xl mb-3 block group-hover:scale-110 group-hover:rotate-5 transition-all duration-300 hover-glow">
                    {highlight.icon}
                  </span>
                  <h5 className="text-lg font-bold mb-2 neural-gradient group-hover:neural-glow-text transition-all duration-300">
                    {highlight.title}
                  </h5>
                  <p className="text-sm text-white/80 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                    {highlight.description}
                  </p>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
