import React from 'react'

const Skills = () => {
  const skillCategories = [
    {
      icon: '💻',
      title: 'Programming Languages',
      skills: 'Python, TypeScript, JavaScript (ES6+)'
    },
    {
      icon: '⚙️',
      title: 'Backend, APIs & Databases',
      skills: 'Django, DRF, FastAPI, Node.js, REST, GraphQL, PostgreSQL, SQL Server'
    },
    {
      icon: '⚛️',
      title: 'Frontend',
      skills: 'React, Next.js, HTML5, CSS3, Material UI, Responsive Design, Accessibility (WCAG 2.1 AA)'
    },
    {
      icon: '🤖',
      title: 'GenAI',
      skills: 'RAG & embeddings, function/tool calling, LangChain, pgvector, OpenAI & Google GenAI APIs, safety/guardrails, text-to-speech'
    },
    {
      icon: '☁️',
      title: 'Cloud, DevOps & Automation',
      skills: 'AWS (EC2, S3, Lambda, RDS), Docker, Terraform, Jenkins, Git, CI/CD, Vercel, Google Apps Script, ServiceNow'
    },
    {
      icon: '🧪',
      title: 'Testing',
      skills: 'Jest, React Testing Library, Cypress, Postman'
    }
  ]

  return (
    <section id="skills" className="section-responsive relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="section-title animate-slide-up">My Skills</h2>
        
        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="group card card-hover animate-fade-in hover-glow" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-center relative">
                {/* Skill Icon */}
                <span className="text-4xl mb-4 block group-hover:scale-110 group-hover:rotate-5 transition-all duration-300 hover-glow">
                  {category.icon}
                </span>
                
                {/* Skill Title */}
                <h3 className="text-xl font-bold mb-4 neural-gradient group-hover:neural-glow-text transition-all duration-300">
                  {category.title}
                </h3>
                
                {/* Skills List */}
                <p className="text-white/80 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  {category.skills}
                </p>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                
                {/* Corner accent */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 neural-gradient">
              Continuous Learning
            </h3>
            <p className="text-white/80 leading-relaxed mb-6">
              Technology evolves rapidly, and so do I. I'm always exploring new frameworks, tools, and methodologies 
              to stay current with industry best practices and deliver cutting-edge solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-sm">
                Always Learning
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-sm">
                Industry Best Practices
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 border border-pink-500/30 rounded-full text-sm">
                Cutting-Edge Solutions
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
