// components/Testimonials.js
'use client'

import { useState, useEffect } from 'react'
import Section from './Section'

const testimonials = [
  {
    id: 1,
    name: 'Amit Sharma',
    role: 'CO-Founder, Tatavam Studio.',
    content: 'Centrionyx transformed our digital presence completely. Their team is professional, innovative, and delivered beyond our expectations.',
    rating: 5,
    image: null,
  },
  {
    id: 2,
    name: 'Yash Javiya ',
    role: 'CO-Founder, Tatavam Studio.',
    content: 'The best decision we made was partnering with Centrionyx. Their technical expertise and customer service are unmatched.',
    rating: 5,
    image: null,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Marketing Director, BrandCo',
    content: 'Incredible work! Our new website has increased conversions by 200%. Thank you Centrionyx for your amazing work.',
    rating: 5,
    image: null,
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Founder, StartupHub',
    content: 'Working with Centrionyx was a game-changer for our business. They understood our vision and executed it perfectly.',
    rating: 5,
    image: null,
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <Section title="What Our Clients Say" subtitle="Testimonials" bg="dark" id="testimonials">
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-gradient-to-br from-[rgba(var(--primary),0.05)] to-[rgba(var(--accent),0.05)] rounded-3xl p-8 md:p-12 border border-[rgba(var(--border),0.3)]">
          {/* Quote Icon */}
          <div className="absolute top-6 left-6 text-6xl opacity-10">"</div>
          
          {/* Testimonial Content */}
          <div className="relative z-10">
            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-xl md:text-2xl text-[rgb(var(--text))] leading-relaxed mb-8">
                "{testimonials[currentIndex].content}"
              </p>
              
              {/* Author Info */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))] flex items-center justify-center text-white font-bold">
                  {testimonials[currentIndex].name.charAt(0)}
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-[rgb(var(--text))]">{testimonials[currentIndex].name}</h4>
                  <p className="text-sm text-[rgb(var(--text-muted))]">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[rgba(var(--bg),0.8)] border border-[rgba(var(--border),0.5)] flex items-center justify-center hover:bg-[rgb(var(--primary))] hover:text-white transition-all duration-300"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18L9 12L15 6" />
            </svg>
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[rgba(var(--bg),0.8)] border border-[rgba(var(--border),0.5)] flex items-center justify-center hover:bg-[rgb(var(--primary))] hover:text-white transition-all duration-300"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18L15 12L9 6" />
            </svg>
          </button>
        </div>
        
        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index)
                setIsAutoPlaying(false)
                setTimeout(() => setIsAutoPlaying(true), 10000)
              }}
              className={`transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 h-2 bg-[rgb(var(--primary))] rounded-full'
                  : 'w-2 h-2 bg-[rgba(var(--border),0.5)] rounded-full hover:bg-[rgb(var(--primary))]'
              }`}
            />
          ))}
        </div>
      </div>
    </Section>
  )
}