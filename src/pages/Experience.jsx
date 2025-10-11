import React from 'react'

const Experience = () => {
  const experiences = [
    {
      position: 'IT Student Lead',
      company: 'Auxiliary Services Corporation - CSUF',
      duration: 'August 2024 - Present',
      description: 'I work as an IT Student Lead at California State University, focusing on improving efficiency and reliability in IT operations. I\'ve built automations that cut down repetitive tasks, piloted AI solutions to speed up problem analysis, and mentored a team of student assistants by setting clear standards and workflows. Alongside leadership, I act as the first point of contact for complex technical issues, ensuring minimal disruption for faculty, staff, and students.'
    },
    {
      position: 'IT Student Assistant',
      company: 'Auxiliary Services Corporation - CSUF',
      duration: 'June 2024 – July 2025',
      description: 'Previously, as an IT Student Assistant, I worked on strengthening IT support processes by analyzing large sets of support data to identify recurring issues and sharing insights that helped prevent repeat problems. I also introduced automation to improve ticket creation and routing, making it easier for the team to respond quickly. In addition, I supported the integration of an AI-powered chatbot that handled routine queries, reducing the workload for frontline support. My contributions in these areas led to my promotion as IT Student Lead.'
    },
    {
      position: 'Software Engineer',
      company: 'HCL Technologies',
      duration: 'October 2022 - December 2023',
      description: 'Earlier, I worked as a Software Engineer at HCLTech, contributing to one of the largest bank in Australia. I developed core modules, streamlined workflows through automation, and provided production support for mission-critical systems. I also collaborated with stakeholders across teams and mentored new hires to ensure smooth delivery and knowledge transfer.'
    }
  ]

  return (
    <section id="experience" className="section-responsive relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="section-title animate-slide-up">Professional Experience</h2>
        
        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500/80 via-purple-500/60 to-cyan-500/80 rounded-full"></div>
          
          {/* Experience Items */}
          {experiences.map((exp, index) => (
            <div key={index} className={`flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              {/* Content */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <div className="card card-hover animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <h3 className="text-2xl font-bold mb-2 neural-gradient">
                    {exp.position}
                  </h3>
                  <h4 className="text-xl font-semibold mb-2 text-white/90">
                    {exp.company}
                  </h4>
                  <p className="text-cyan-400/80 text-sm mb-4 italic">
                    {exp.duration}
                  </p>
                  <p className="text-white/80 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile Timeline */}
        <div className="md:hidden">
          <div className="relative pl-8">
            {/* Mobile Timeline Line */}
            <div className="absolute left-8 w-1 h-full bg-gradient-to-b from-cyan-500/80 via-purple-500/60 to-cyan-500/80 rounded-full"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12">
                {/* Mobile Timeline Dot */}
                <div className="absolute left-6 top-0 w-3 h-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full border-2 border-black/80 z-10 neural-pulse"></div>
                
                {/* Mobile Content */}
                <div className="card card-hover animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <h3 className="text-xl font-bold mb-2 neural-gradient">
                    {exp.position}
                  </h3>
                  <h4 className="text-lg font-semibold mb-2 text-white/90">
                    {exp.company}
                  </h4>
                  <p className="text-cyan-400/80 text-sm mb-4 italic">
                    {exp.duration}
                  </p>
                  <p className="text-white/80 leading-relaxed text-sm">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
