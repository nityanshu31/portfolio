// components/Hero.js
'use client'

import { useEffect, useState } from 'react'
import Button from './Button'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    support: 0
  })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Counter animation effect
  useEffect(() => {
    const targetCounts = {
      projects: 10,
      clients: 10,
      support: 24
    }

    const duration = 2000 // 2 seconds
    const interval = 20 // Update every 20ms
    const steps = duration / interval
    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps
      
      setCounts({
        projects: Math.min(Math.floor(targetCounts.projects * progress), targetCounts.projects),
        clients: Math.min(Math.floor(targetCounts.clients * progress), targetCounts.clients),
        support: Math.min(Math.floor(targetCounts.support * progress), targetCounts.support)
      })

      if (currentStep >= steps) {
        clearInterval(timer)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          key={Math.random()} // Force video reload if needed
        >
          {/* Correct path: video should be in public/assets/ folder */}
          <source src="/assets/18069233-uhd_2160_3840_24fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Background Animation (optional - can remove if video is enough) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[rgb(var(--primary))] rounded-full filter blur-[100px] opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[rgb(var(--accent))] rounded-full filter blur-[100px] opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 w-full text-center z-10">
        <div className={`w-full transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[rgba(var(--primary),0.1)] rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 bg-[rgb(var(--primary))] rounded-full animate-pulse"></span>
            <span className="text-xs font-medium text-[rgb(var(--primary))]">Digital Innovation Hub</span>
          </div>
          
          {/* Main Heading - Centered with decreased font size */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight mb-6">
            <span className="text-[rgb(var(--primary))]">
              Your Tech Partner for
            </span>
            <br />
            <span className="text-white">
              Scalable Business Growth
            </span>
          </h1>
          
          <p className="text-base md:text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            We help businesses thrive in the digital age with cutting-edge solutions, innovative strategies, and exceptional service.
          </p>
          
          {/* Buttons - Centered */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="primary" size="lg" href="/contact">
              Get Started
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12H19M19 12L13 6M19 12L13 18" />
              </svg>
            </Button>
            <Button variant="outline" size="lg" href="/portfolio">
              View Portfolio
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </Button>
          </div>

          {/* Stats with Counter Animation - Centered */}
          <div className="grid grid-cols-3 gap-6 md:gap-12 pt-8 border-t border-white/20 max-w-2xl mx-auto">
            <div>
              <p className="text-2xl md:text-3xl font-bold text-white">
                {counts.projects}+
              </p>
              <p className="text-xs md:text-sm text-gray-300">Projects Completed</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-white">
                {counts.clients}+
              </p>
              <p className="text-xs md:text-sm text-gray-300">Happy Clients</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-white">
                {counts.support}/7
              </p>
              <p className="text-xs md:text-sm text-gray-300">Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 