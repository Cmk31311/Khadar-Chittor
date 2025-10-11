import React from 'react'

const Skills = () => {
  const skillCategories = [
    {
      icon: '💻',
      title: 'Programming Languages',
      skills: 'Python, TypeScript, JavaScript (ES6+), C#, SQL, HTML, CSS (SASS/SCSS)'
    },
    {
      icon: '⚙️',
      title: 'Backend, APIs & Databases',
      skills: 'Django, DRF, FastAPI, Flask, Node.js, REST, GraphQL, PostgreSQL, SQL Server, Oracle, API integration (Postman)'
    },
    {
      icon: '⚛️',
      title: 'Frontend',
      skills: ' React, Next.js, React Native, Tailwind CSS, responsive design, accessibility, state management (Redux / Context API)'
    },
    {
      icon: '🤖',
      title: 'GenAI',
      skills: 'RAG pipelines, embeddings, LangChain, OpenAI / Google GenAI APIs, vector databases (pgvector), safety & guardrails'
    },
    {
      icon: '☁️',
      title: 'Cloud, DevOps & Automation',
      skills: 'AWS (EC2, S3, Lambda, RDS), Docker, Terraform, Jenkins, CI/CD, Vercel, Kubernetes, GitLab CI, GitHub Actions, Vercel'
    },
    {
      icon: '🧪',
      title: 'ML & Data',
      skills: 'Pandas, NumPy, scikit-learn, NLTK, data preprocessing, analytics dashboards, model evaluation'
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
      </div>
    </section>
  )
}

export default Skills
