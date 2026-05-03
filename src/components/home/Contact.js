// components/Contact.js
'use client'

import { useState } from 'react'
import Section from './Section'
import Button from './Button'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Section title="Get In Touch" subtitle="Contact Us" bg="gradient" id="contact">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-bold text-[rgb(var(--text))] mb-4">Let's Work Together</h3>
          <p className="text-[rgb(var(--text-secondary))] mb-8">
            Have a project in mind? We'd love to hear about it. Get in touch with us and let's create something amazing together.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[rgba(var(--primary),0.1)] to-[rgba(var(--accent),0.1)] flex items-center justify-center">
                <svg className="w-6 h-6 text-[rgb(var(--primary))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-[rgb(var(--text-muted))]">Email</p>
                <a href="mailto:info@centrionyx.com" className="text-[rgb(var(--text))] hover:text-[rgb(var(--primary))] transition-colors">
                  info@centrionyx.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[rgba(var(--primary),0.1)] to-[rgba(var(--accent),0.1)] flex items-center justify-center">
                <svg className="w-6 h-6 text-[rgb(var(--primary))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-[rgb(var(--text-muted))]">Phone</p>
                <a href="tel:+1234567890" className="text-[rgb(var(--text))] hover:text-[rgb(var(--primary))] transition-colors">
                  +91 9461840913
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[rgba(var(--primary),0.1)] to-[rgba(var(--accent),0.1)] flex items-center justify-center">
                <svg className="w-6 h-6 text-[rgb(var(--primary))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-[rgb(var(--text-muted))]">Address</p>
                <p className="text-[rgb(var(--text))]">Gift City, Gandhinagar, GJ 382050</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-[rgb(var(--text))] font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-[rgba(var(--bg),0.8)] border border-[rgba(var(--border),0.5)] rounded-xl text-[rgb(var(--text))] focus:outline-none focus:border-[rgb(var(--primary))] transition-colors"
              placeholder="Your name"
            />
          </div>
          
          <div>
            <label className="block text-[rgb(var(--text))] font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-[rgba(var(--bg),0.8)] border border-[rgba(var(--border),0.5)] rounded-xl text-[rgb(var(--text))] focus:outline-none focus:border-[rgb(var(--primary))] transition-colors"
              placeholder="your@email.com"
            />
          </div>
          
          <div>
            <label className="block text-[rgb(var(--text))] font-medium mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-3 bg-[rgba(var(--bg),0.8)] border border-[rgba(var(--border),0.5)] rounded-xl text-[rgb(var(--text))] focus:outline-none focus:border-[rgb(var(--primary))] transition-colors resize-none"
              placeholder="Tell us about your project..."
            />
          </div>
          
          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={isSubmitting}
            className="w-full"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12H19M19 12L13 6M19 12L13 18" />
                </svg>
              </>
            )}
          </Button>
          
          {submitted && (
            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 text-center">
              <p className="text-green-500">Thank you! We'll get back to you soon.</p>
            </div>
          )}
        </form>
      </div>
    </Section>
  )
}