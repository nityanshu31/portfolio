// app/contact/page.jsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle, 
  Clock, 
  MessageCircle,
  Globe,
  User,
  FileText,
  AlertCircle
} from 'lucide-react'

// Custom Social Media Icons
const LinkedinIcon = ({ size = 20, color = "currentColor" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C0.792 0 0 0.774 0 1.729v20.542C0 23.227 0.792 24 1.771 24h20.451c0.979 0 1.771-0.773 1.771-1.729V1.729C24 0.774 23.204 0 22.225 0z" />
  </svg>
)

const TwitterIcon = ({ size = 20, color = "currentColor" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.68-11.877c0-.212-.005-.424-.015-.636A9.936 9.936 0 0024 4.59z" />
  </svg>
)

const InstagramIcon = ({ size = 20, color = "currentColor" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
)

const GithubIcon = ({ size = 20, color = "currentColor" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.31.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'info@centrionyx.com',
      href: 'mailto:info@centrionyx.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9461840913',
      href: 'tel:+919461840913',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'Gift City, Gandhinagar, GJ 382050',
      href: null,
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Clock,
      label: 'Business Hours',
      value: 'Mon-Fri: 9AM - 6PM',
      href: null,
      color: 'from-purple-500 to-pink-500'
    }
  ]

  const socialLinks = [
    { icon: LinkedinIcon, href: '#', label: 'LinkedIn', color: '#0077B5' },
    { icon: TwitterIcon, href: '#', label: 'Twitter', color: '#1DA1F2' },
    { icon: GithubIcon, href: '#', label: 'GitHub', color: '#333333' },
    { icon: InstagramIcon, href: '#', label: 'Instagram', color: '#E4405F' },
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: `rgb(var(--bg))` }}>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[rgba(var(--primary),0.05)] to-[rgba(var(--accent),0.05)] py-20">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[rgba(var(--primary),0.1)] to-[rgba(var(--accent),0.1)] mb-4 backdrop-blur-sm">
              <MessageCircle size={16} style={{ color: `rgb(var(--primary))` }} />
              <span className="text-sm font-semibold" style={{ color: `rgb(var(--primary))` }}>
                Get In Touch
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{ color: `rgb(var(--text))` }}>
              Let's Start a
              <span className="bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))] bg-clip-text text-transparent">
                {' '}Conversation
              </span>
            </h1>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: `rgb(var(--text-secondary))` }}>
              Have a project in mind? We'd love to hear about it. Get in touch with us 
              and let's create something amazing together.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="sticky top-24">
              <h2 className="text-2xl font-bold mb-4" style={{ color: `rgb(var(--text))` }}>
                Let's Work Together
              </h2>
              <p className="mb-8" style={{ color: `rgb(var(--text-secondary))` }}>
                We're here to answer your questions and discuss how we can help bring your ideas to life.
              </p>
              
              {/* Contact Info Cards */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((info, idx) => {
                  const Icon = info.icon
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="group relative bg-white rounded-2xl p-5 border border-[rgba(var(--border),0.3)] hover:shadow-xl transition-all duration-300"
                    >
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[rgba(var(--primary),0.03)] to-[rgba(var(--accent),0.03)] opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium mb-1" style={{ color: `rgb(var(--text-muted))` }}>
                            {info.label}
                          </p>
                          {info.href ? (
                            <a 
                              href={info.href}
                              className="text-lg font-semibold hover:text-[rgb(var(--primary))] transition-colors"
                              style={{ color: `rgb(var(--text))` }}
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-lg font-semibold" style={{ color: `rgb(var(--text))` }}>
                              {info.value}
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-[rgba(var(--border),0.3)]">
                <h3 className="text-lg font-semibold mb-4" style={{ color: `rgb(var(--text))` }}>
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  {socialLinks.map((social, idx) => {
                    const Icon = social.icon
                    return (
                      <motion.a
                        key={idx}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 rounded-full bg-[rgba(var(--primary),0.1)] flex items-center justify-center hover:shadow-lg transition-all duration-300"
                        style={{ color: social.color }}
                      >
                        <Icon size={20} />
                      </motion.a>
                    )
                  })}
                </div>
              </div>

              {/* Map Section */}
              <div className="mt-8 rounded-2xl overflow-hidden border border-[rgba(var(--border),0.3)]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.234567890123!2d72.67890123456789!3d23.223456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDEzJzI0LjQiTiA3MsKwNDAnNDcuMSJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                />
              </div>
            </div>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-[rgba(var(--border),0.3)]">
              <h2 className="text-2xl font-bold mb-2" style={{ color: `rgb(var(--text))` }}>
                Send us a Message
              </h2>
              <p className="mb-6 text-sm" style={{ color: `rgb(var(--text-secondary))` }}>
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block font-medium mb-2 text-sm" style={{ color: `rgb(var(--text))` }}>
                    Full Name *
                  </label>
                  <div className={`relative transition-all duration-300 ${focusedField === 'name' ? 'transform scale-[1.02]' : ''}`}>
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" style={{ color: `rgb(var(--text-muted))` }} />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-[rgba(var(--bg),0.5)] border border-[rgba(var(--border),0.5)] rounded-xl text-[rgb(var(--text))] focus:outline-none focus:border-[rgb(var(--primary))] transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-medium mb-2 text-sm" style={{ color: `rgb(var(--text))` }}>
                      Email Address *
                    </label>
                    <div className={`relative transition-all duration-300 ${focusedField === 'email' ? 'transform scale-[1.02]' : ''}`}>
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" style={{ color: `rgb(var(--text-muted))` }} />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-[rgba(var(--bg),0.5)] border border-[rgba(var(--border),0.5)] rounded-xl text-[rgb(var(--text))] focus:outline-none focus:border-[rgb(var(--primary))] transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-medium mb-2 text-sm" style={{ color: `rgb(var(--text))` }}>
                      Phone Number
                    </label>
                    <div className={`relative transition-all duration-300 ${focusedField === 'phone' ? 'transform scale-[1.02]' : ''}`}>
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" style={{ color: `rgb(var(--text-muted))` }} />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full pl-10 pr-4 py-3 bg-[rgba(var(--bg),0.5)] border border-[rgba(var(--border),0.5)] rounded-xl text-[rgb(var(--text))] focus:outline-none focus:border-[rgb(var(--primary))] transition-all duration-300"
                        placeholder="+1 234 567 890"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block font-medium mb-2 text-sm" style={{ color: `rgb(var(--text))` }}>
                    Subject *
                  </label>
                  <div className={`relative transition-all duration-300 ${focusedField === 'subject' ? 'transform scale-[1.02]' : ''}`}>
                    <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" style={{ color: `rgb(var(--text-muted))` }} />
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-[rgba(var(--bg),0.5)] border border-[rgba(var(--border),0.5)] rounded-xl text-[rgb(var(--text))] focus:outline-none focus:border-[rgb(var(--primary))] transition-all duration-300"
                      placeholder="Project Inquiry"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-medium mb-2 text-sm" style={{ color: `rgb(var(--text))` }}>
                    Message *
                  </label>
                  <div className={`relative transition-all duration-300 ${focusedField === 'message' ? 'transform scale-[1.02]' : ''}`}>
                    <MessageCircle className="absolute left-3 top-4 w-4 h-4" style={{ color: `rgb(var(--text-muted))` }} />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows="5"
                      className="w-full pl-10 pr-4 py-3 bg-[rgba(var(--bg),0.5)] border border-[rgba(var(--border),0.5)] rounded-xl text-[rgb(var(--text))] focus:outline-none focus:border-[rgb(var(--primary))] transition-all duration-300 resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))] hover:shadow-lg'
                  }`}
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
                      <Send size={18} />
                    </>
                  )}
                </motion.button>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <p className="text-green-500 text-sm">Thank you! We'll get back to you soon.</p>
                  </motion.div>
                )}
              </form>

              {/* Trust Indicators */}
              <div className="mt-6 pt-6 border-t border-[rgba(var(--border),0.3)]">
                <div className="flex items-center justify-center gap-6 text-xs" style={{ color: `rgb(var(--text-muted))` }}>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={14} style={{ color: `rgb(var(--primary))` }} />
                    <span>100% Confidential</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={14} style={{ color: `rgb(var(--primary))` }} />
                    <span>24hr Response</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe size={14} style={{ color: `rgb(var(--primary))` }} />
                    <span>Worldwide Support</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: `rgb(var(--text))` }}>
              Frequently Asked Questions
            </h2>
            <p className="text-sm" style={{ color: `rgb(var(--text-secondary))` }}>
              Find answers to common questions about our services and process
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "What's your typical project timeline?",
                a: "Project timelines vary based on complexity, but typically range from 4-12 weeks for most web development projects."
              },
              {
                q: "Do you offer ongoing support after launch?",
                a: "Yes! We offer various maintenance and support packages to ensure your project continues to run smoothly."
              },
              {
                q: "How do you handle project pricing?",
                a: "We provide transparent pricing based on project scope. Contact us for a custom quote tailored to your needs."
              },
              {
                q: "Can you sign an NDA?",
                a: "Absolutely. We respect client confidentiality and are happy to sign NDAs before discussing project details."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl p-5 border border-[rgba(var(--border),0.3)] hover:shadow-md transition-all duration-300">
                <h3 className="font-semibold mb-2" style={{ color: `rgb(var(--text))` }}>
                  {faq.q}
                </h3>
                <p className="text-sm" style={{ color: `rgb(var(--text-secondary))` }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}