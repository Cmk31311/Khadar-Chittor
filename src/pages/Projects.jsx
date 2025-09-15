import React from 'react'

const Projects = () => {
  const projects = [
    {
      title: 'TaFlo: Task & Flow Dashboard',
      description: 'Next.js (TS) dashboard to capture and track work from intake to done. Reusable components + predictable state, bulk multi-select actions, and Vercel previews for fast, safe releases.',
      tech: 'Next.js (TypeScript), React, Tailwindcss, Vercel, Supabase, React state patterns (hooks/context)',
      link: 'https://ta-flo.vercel.app/',
      icon: 'TaFlo',
      gradient: 'from-blue-500 to-purple-600',
      status: 'Live',
      category: 'Web App'
    },
    {
      title: 'AI Personal Motivator & Quote Generator',
      description: 'Generates goal-aligned motivational write-ups and curated quotes with tone/length/TTS controls. Safety guardrails soften sensitive topics; embeddings match quotes with de-duplication and attribution checks.',
      tech: 'LLM API, embeddings + vector search, content-safety/guardrail middleware, text-to-speech, prompt orchestration',
      link: 'https://ai-personal-motivator-and-quote-generator.streamlit.app/',
      icon: 'AI Motivator',
      gradient: 'from-purple-500 to-pink-600',
      decorations: ['🤖', '💡'],
      status: 'Live',
      category: 'AI Tool'
    },
    {
      title: 'AI FlashCard Maker',
      description: 'Converts PDFs/DOCX/TXT or pasted text into clean Q&A flashcards and quick quizzes. Offers offline or Gemini generation, flip/reveal with progress, and easy JSON/plain-text import/export for sharing.',
      tech: 'Document parsers (PDF/DOCX/TXT), Gemini-powered generation (optional), offline/local generation mode, quiz/flashcard UI, JSON import/export utilities',
      link: 'https://ai-flashcard-maker.streamlit.app/',
      icon: 'AI FlashCard Maker',
      gradient: 'from-green-500 to-blue-600',
      decorations: ['📚', '🤖'],
      status: 'Live',
      category: 'AI Tool'
    }
  ]

  return (
    <section id="projects" className="section-responsive relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="section-title animate-slide-up">Featured Projects</h2>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative card animate-fade-in overflow-hidden" style={{ animationDelay: `${index * 0.2}s` }}>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10"></div>
              
              {/* Project Image/Icon */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} rounded-xl mb-6 flex items-center justify-center text-white text-xl font-bold relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                {/* Animated background pattern */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 group-hover:animate-pulse"></div>
                
                {/* Decorative elements */}
                {project.decorations && (
                  <>
                    <div className="absolute top-4 right-4 text-2xl opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                      {project.decorations[0]}
                    </div>
                    <div className="absolute bottom-4 left-4 text-2xl opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                      {project.decorations[1]}
                    </div>
                  </>
                )}
                
                {/* Status badge */}
                <div className="absolute top-3 left-3 px-2 py-1 bg-green-500/80 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
                  {project.status}
                </div>
                
                {/* Category badge */}
                <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/40 backdrop-blur-sm rounded-full text-xs font-medium text-white/80">
                  {project.category}
                </div>
                
                <div className="text-center group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
              </div>
              
              {/* Project Content */}
              <div className="space-y-4 relative z-20">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold neural-gradient group-hover:neural-glow-text transition-all duration-300">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-white/80 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  {project.description}
                </p>
                
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">Tech Stack:</p>
                  <p className="text-sm text-white/70 leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                    {project.tech}
                  </p>
                </div>
                
                <div className="flex items-center justify-between pt-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center text-white font-semibold border-b-2 border-transparent hover:border-cyan-400 transition-all duration-300 hover:text-cyan-400"
                  >
                    <span>View Project</span>
                    <span className="ml-2 group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                  </a>
                  
                  {/* External link icon */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Corner accent */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 neural-gradient">
              Want to see more?
            </h3>
            <p className="text-white/80 mb-6">
              I'm constantly working on new projects and experimenting with cutting-edge technologies. 
              Check out my GitHub for the latest updates and open-source contributions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/Cmk31311"
                target="_blank"
                rel="noopener noreferrer"
                className="group btn-primary flex items-center justify-center space-x-2"
              >
                <span>View All Projects on GitHub</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
              <a
                href="mailto:cmkadhar3@gmail.com"
                className="group btn-secondary flex items-center justify-center space-x-2"
              >
                <span>Let's Collaborate</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
