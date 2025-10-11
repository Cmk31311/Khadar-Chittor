import React from 'react'

const Contact = () => {

  return (
    <section id="contact" className="section-responsive relative z-10">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <h2 className="section-title animate-slide-up">Wave Hello to me!</h2>
        
        {/* Contact Info */}
        <div className="text-center">
          <div className="card max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4 neural-gradient">
              Let's Connect!
            </h3>
            <p className="text-white/80 mb-4">
              I'm always interested in hearing about new opportunities, collaborations, or just having a chat about technology and innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="mailto:cmkadhar3@gmail.com"
                className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-sm hover:from-cyan-500/30 hover:to-purple-500/30 transition-all duration-300 hover:scale-105"
              >
                📧 cmkadhar3@gmail.com
              </a>
              <a 
                href="https://www.linkedin.com/in/khadarc/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-full text-sm hover:from-blue-500/30 hover:to-blue-600/30 transition-all duration-300 hover:scale-105"
              >
                💼 LinkedIn
              </a>
              <a 
                href="https://github.com/Cmk31311"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gradient-to-r from-gray-600/20 to-gray-700/20 border border-gray-500/30 rounded-full text-sm hover:from-gray-600/30 hover:to-gray-700/30 transition-all duration-300 hover:scale-105"
              >
                💻 GitHub
              </a>
              <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-sm">
                💬 Always Open to Chat
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
