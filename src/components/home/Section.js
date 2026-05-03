// components/Section.js
'use client'

import { useEffect, useState, useRef } from 'react'

export default function Section({ 
  title, 
  subtitle, 
  children, 
  bg = 'transparent',
  className = '',
  id = ''
}) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const bgStyles = {
    transparent: 'bg-transparent',
    light: 'bg-[rgba(var(--primary),0.03)]',
    gradient: 'bg-gradient-to-b from-transparent via-[rgba(var(--primary),0.05)] to-transparent',
    dark: 'bg-[rgba(var(--bg),0.5)]',
  }

  return (
    <section 
      ref={sectionRef}
      id={id}
      className={`py-16 md:py-24 ${bgStyles[bg]} ${className}`}
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        {(title || subtitle) && (
          <div className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {subtitle && (
              <p className="text-sm md:text-base font-semibold text-[rgb(var(--primary))] uppercase tracking-wider mb-3">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
                <span className="bg-gradient-to-r from-[rgb(var(--text))] to-[rgb(var(--primary))] bg-clip-text text-transparent">
                  {title}
                </span>
              </h2>
            )}
            <div className="w-20 h-1 bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))] rounded-full mx-auto mt-4"></div>
          </div>
        )}
        
        {/* Section Content */}
        <div className={`transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {children}
        </div>
      </div>
    </section>
  )
}