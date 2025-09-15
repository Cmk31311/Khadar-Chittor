import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [errors, setErrors] = useState({})
  const [focusedField, setFocusedField] = useState(null)

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setErrors({})
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-responsive relative z-10">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <h2 className="section-title animate-slide-up">Wave Hello to me!</h2>
        
        {/* Contact Form */}
        <div className="card max-w-2xl mx-auto animate-fade-in">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="group">
              <label htmlFor="name" className="block text-sm font-semibold mb-2 text-white group-focus-within:text-cyan-400 transition-colors duration-300">
                Name *
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-4 py-3 bg-black/50 border rounded-lg text-white placeholder-white/60 focus:outline-none transition-all duration-300 ${
                    errors.name 
                      ? 'border-red-400/50 focus:border-red-400' 
                      : focusedField === 'name' 
                        ? 'border-cyan-400/50 focus:border-cyan-400' 
                        : 'border-white/10 focus:border-cyan-400/50'
                  }`}
                  placeholder="Your Name"
                />
                {focusedField === 'name' && (
                  <div className="absolute inset-0 border border-cyan-400/30 rounded-lg pointer-events-none animate-pulse"></div>
                )}
              </div>
              {errors.name && (
                <p className="mt-1 text-sm text-red-400 flex items-center">
                  <span className="mr-1">⚠️</span>
                  {errors.name}
                </p>
              )}
            </div>
            
            {/* Email Field */}
            <div className="group">
              <label htmlFor="email" className="block text-sm font-semibold mb-2 text-white group-focus-within:text-cyan-400 transition-colors duration-300">
                Email *
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-4 py-3 bg-black/50 border rounded-lg text-white placeholder-white/60 focus:outline-none transition-all duration-300 ${
                    errors.email 
                      ? 'border-red-400/50 focus:border-red-400' 
                      : focusedField === 'email' 
                        ? 'border-cyan-400/50 focus:border-cyan-400' 
                        : 'border-white/10 focus:border-cyan-400/50'
                  }`}
                  placeholder="your.email@example.com"
                />
                {focusedField === 'email' && (
                  <div className="absolute inset-0 border border-cyan-400/30 rounded-lg pointer-events-none animate-pulse"></div>
                )}
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-400 flex items-center">
                  <span className="mr-1">⚠️</span>
                  {errors.email}
                </p>
              )}
            </div>
            
            {/* Message Field */}
            <div className="group">
              <label htmlFor="message" className="block text-sm font-semibold mb-2 text-white group-focus-within:text-cyan-400 transition-colors duration-300">
                Message * ({formData.message.length} characters)
              </label>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  rows={6}
                  className={`w-full px-4 py-3 bg-black/50 border rounded-lg text-white placeholder-white/60 focus:outline-none transition-all duration-300 resize-none ${
                    errors.message 
                      ? 'border-red-400/50 focus:border-red-400' 
                      : focusedField === 'message' 
                        ? 'border-cyan-400/50 focus:border-cyan-400' 
                        : 'border-white/10 focus:border-cyan-400/50'
                  }`}
                  placeholder="Tell me about your project, collaboration ideas, or just say hello!"
                />
                {focusedField === 'message' && (
                  <div className="absolute inset-0 border border-cyan-400/30 rounded-lg pointer-events-none animate-pulse"></div>
                )}
              </div>
              {errors.message && (
                <p className="mt-1 text-sm text-red-400 flex items-center">
                  <span className="mr-1">⚠️</span>
                  {errors.message}
                </p>
              )}
            </div>
            
            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
            >
              <div className="relative z-10 flex items-center justify-center space-x-2">
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </>
                )}
              </div>
              {isSubmitting && (
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 animate-pulse"></div>
              )}
            </button>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="text-center p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                <div className="flex items-center justify-center space-x-2 text-green-400 font-medium">
                  <span className="text-lg">✅</span>
                  <span>Thank you for your message! I'll get back to you soon.</span>
                </div>
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="text-center p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                <div className="flex items-center justify-center space-x-2 text-red-400 font-medium">
                  <span className="text-lg">❌</span>
                  <span>Sorry, there was an error sending your message. Please try again.</span>
                </div>
              </div>
            )}
          </form>
          
          {/* Resume Download */}
          <div className="text-center mt-8">
            <button 
              onClick={() => window.open('/resume.pdf', '_blank')}
              className="btn-secondary"
            >
              Download Resume
            </button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-8 mt-8">
            {/* GitHub Button */}
            <a
              href="https://github.com/Cmk31311"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-lg border border-gray-600/20 rounded-xl text-white transition-all duration-400 hover:scale-105 hover:shadow-xl hover:shadow-gray-500/15 hover:border-gray-400/40"
            >
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-600/5 to-gray-500/5 rounded-xl blur-sm group-hover:from-gray-500/15 group-hover:to-gray-400/15 transition-all duration-400"></div>
              
              {/* GitHub Icon */}
              <div className="relative z-10">
                <svg className="w-5 h-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              
              {/* Text */}
              <span className="relative z-10 font-semibold group-hover:text-gray-200 transition-colors duration-300">
                GitHub
              </span>
              
              {/* Hover effect particles */}
              <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 w-0 h-0 bg-gray-400/15 rounded-full transform -translate-x-1/2 -translate-y-1/2 group-hover:w-16 group-hover:h-16 transition-all duration-600"></div>
              </div>
            </a>
            
            {/* LinkedIn Button */}
            <a
              href="https://www.linkedin.com/in/khadarc/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-blue-600/30 to-blue-700/30 backdrop-blur-lg border border-blue-500/20 rounded-xl text-white transition-all duration-400 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/15 hover:border-blue-400/40"
            >
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-400/5 rounded-xl blur-sm group-hover:from-blue-400/15 group-hover:to-blue-300/15 transition-all duration-400"></div>
              
              {/* LinkedIn Icon */}
              <div className="relative z-10">
                <svg className="w-5 h-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              
              {/* Text */}
              <span className="relative z-10 font-semibold group-hover:text-blue-200 transition-colors duration-300">
                LinkedIn
              </span>
              
              {/* Hover effect particles */}
              <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 w-0 h-0 bg-blue-400/15 rounded-full transform -translate-x-1/2 -translate-y-1/2 group-hover:w-16 group-hover:h-16 transition-all duration-600"></div>
              </div>
            </a>
          </div>
        </div>
        
        {/* Contact Info */}
        <div className="text-center mt-12">
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
                className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-sm hover:from-cyan-500/30 hover:to-purple-500/30 transition-all duration-300"
              >
                📧 cmkadhar3@gmail.com
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
