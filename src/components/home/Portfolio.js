// components/home/Portfolio.js
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Section from './Section'
import { 
  ExternalLink, 
  Code2, 
  Smartphone, 
  Cloud, 
  Brain,
  X,
  ZoomIn,
  Calendar,
  User,
  Star
} from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    image: '/assets/portfolio/project1.jpg',
    description: 'Modern e-commerce solution with AI-powered product recommendations and seamless checkout experience.',
    fullDescription: 'A complete e-commerce platform built with Next.js and Stripe, featuring real-time inventory management, AI-powered product recommendations, and a headless CMS for easy content management.',
    technologies: ['React', 'Next.js', 'Stripe', 'Tailwind CSS', 'Prisma'],
    metrics: {
      'Conversion Rate': '+45%',
      'Page Load': '0.8s',
      'Users': '50K+'
    },
    link: '/portfolio/ecommerce',
    date: '2024',
    client: 'Fashion Retail Co.',
    featured: true
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    category: 'Mobile Apps',
    image: '/assets/portfolio/project2.jpg',
    description: 'Secure and user-friendly banking application with biometric authentication and real-time transactions.',
    fullDescription: 'A comprehensive mobile banking solution with face ID authentication, instant money transfers, spending analytics, and investment tracking features.',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Redis', 'AWS'],
    metrics: {
      'Downloads': '100K+',
      'Rating': '4.8★',
      'Transactions': '1M+'
    },
    link: '/portfolio/banking-app',
    date: '2024',
    client: 'Digital Bank Inc.',
    featured: true
  },
  {
    id: 3,
    title: 'Cloud Analytics Dashboard',
    category: 'Cloud Solutions',
    image: '/assets/portfolio/project3.jpg',
    description: 'Real-time data analytics platform with interactive dashboards and predictive insights.',
    fullDescription: 'An enterprise-grade analytics platform that processes millions of data points in real-time, offering customizable dashboards and AI-driven predictions.',
    technologies: ['Python', 'FastAPI', 'React', 'ClickHouse', 'Docker'],
    metrics: {
      'Data Points': '10M+/day',
      'Response Time': '<100ms',
      'Users': '500+'
    },
    link: '/portfolio/analytics',
    date: '2023',
    client: 'Tech Corp',
    featured: false
  },
  {
    id: 4,
    title: 'AI Customer Support',
    category: 'AI & ML',
    image: '/assets/portfolio/project4.jpg',
    description: 'Intelligent chatbot with natural language processing and 24/7 automated support.',
    fullDescription: 'An AI-powered customer support system that reduces response time by 80% and handles complex queries using advanced NLP models.',
    technologies: ['Python', 'TensorFlow', 'FastAPI', 'React', 'PostgreSQL'],
    metrics: {
      'Resolution Rate': '85%',
      'Response Time': '2s',
      'Cost Savings': '60%'
    },
    link: '/portfolio/ai-support',
    date: '2024',
    client: 'SupportPro',
    featured: true
  },
  {
    id: 5,
    title: 'Healthcare Portal',
    category: 'Web Development',
    image: '/assets/portfolio/project5.jpg',
    description: 'Telemedicine platform connecting patients with doctors through video consultations.',
    fullDescription: 'A HIPAA-compliant healthcare platform with video consultations, prescription management, and electronic health records.',
    technologies: ['Next.js', 'WebRTC', 'Node.js', 'MongoDB', 'Twilio'],
    metrics: {
      'Consultations': '10K+',
      'Doctors': '200+',
      'Patients': '15K+'
    },
    link: '/portfolio/healthcare',
    date: '2024',
    client: 'HealthCare Plus',
    featured: false
  },
  {
    id: 6,
    title: 'Logistics Platform',
    category: 'Cloud Solutions',
    image: '/assets/portfolio/project6.jpg',
    description: 'Real-time fleet tracking and route optimization system.',
    fullDescription: 'A cloud-based logistics platform that optimizes delivery routes in real-time, reducing fuel costs by 30%.',
    technologies: ['Go', 'React', 'PostgreSQL', 'Redis', 'GraphQL'],
    metrics: {
      'Efficiency': '+40%',
      'Cost Reduction': '30%',
      'Deliveries': '1M+'
    },
    link: '/portfolio/logistics',
    date: '2023',
    client: 'LogiTech',
    featured: false
  }
]

const categories = ['All', 'Web Development', 'Mobile Apps', 'Cloud Solutions', 'AI & ML']

const categoryIcons = {
  'Web Development': Code2,
  'Mobile Apps': Smartphone,
  'Cloud Solutions': Cloud,
  'AI & ML': Brain
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  const featuredProjects = projects.filter(p => p.featured)

  const openModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
    document.body.style.overflow = 'auto'
  }

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <>
      <Section title="Our Portfolio" subtitle="Recent Projects" bg="light" id="portfolio">
        {/* Featured Projects Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[rgb(var(--text))] mb-2">Featured Work</h3>
            <p className="text-[rgb(var(--text-secondary))]">Some of our best projects that showcase our expertise</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((project, index) => {
              const IconComponent = categoryIcons[project.category]
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[rgba(var(--primary),0.05)] to-[rgba(var(--accent),0.05)] border border-[rgba(var(--border),0.3)] group"
                >
                  <div className="aspect-video relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[rgba(var(--primary),0.1)] to-[rgba(var(--accent),0.1)] flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))] flex items-center justify-center mx-auto mb-3 opacity-20 group-hover:opacity-100 transition-opacity">
                          {IconComponent && <IconComponent className="w-10 h-10 text-white" />}
                        </div>
                        <p className="text-[rgb(var(--text-muted))] text-sm">Project Preview</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="text-[rgb(var(--primary))] text-sm font-semibold mb-1">{project.category}</p>
                        <h3 className="text-xl font-bold text-[rgb(var(--text))] mb-2">{project.title}</h3>
                      </div>
                      <button
                        onClick={() => openModal(project)}
                        className="p-2 rounded-lg bg-[rgba(var(--primary),0.1)] text-[rgb(var(--primary))] hover:bg-[rgb(var(--primary))] hover:text-white transition-all duration-300"
                      >
                        <ZoomIn size={18} />
                      </button>
                    </div>
                    <p className="text-[rgb(var(--text-secondary))] text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-[rgba(var(--primary),0.1)] text-[rgb(var(--primary))] text-xs rounded-md">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-[rgba(var(--border),0.2)] text-[rgb(var(--text-muted))] text-xs rounded-md">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    <Link href={project.link}>
                      <button className="w-full px-4 py-2 bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--primary-light))] text-white rounded-lg font-medium hover:translate-y-[-2px] transition-all duration-300 flex items-center justify-center gap-2">
                        View Project
                        <ExternalLink size={16} />
                      </button>
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--primary-light))] text-white shadow-lg'
                  : 'bg-[rgba(var(--border),0.1)] text-[rgb(var(--text-secondary))] hover:bg-[rgba(var(--primary),0.1)] hover:text-[rgb(var(--primary))]'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => {
              const IconComponent = categoryIcons[project.category]
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative overflow-hidden rounded-2xl bg-white border border-[rgba(var(--border),0.3)] transition-all duration-300 hover:shadow-2xl"
                >
                  {/* Image Container */}
                  <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-[rgba(var(--primary),0.05)] to-[rgba(var(--accent),0.05)]">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center transform transition-transform group-hover:scale-110">
                        {IconComponent && <IconComponent className="w-12 h-12 text-[rgb(var(--primary))] mx-auto mb-2 opacity-50" />}
                        <p className="text-[rgb(var(--text-muted))] text-xs">Click to view</p>
                      </div>
                    </div>
                    
                    {/* Hover Overlay with Quick View */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <button
                        onClick={() => openModal(project)}
                        className="w-full py-2 bg-white/10 backdrop-blur-md text-white rounded-lg font-medium hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <ZoomIn size={16} />
                        Quick View
                      </button>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-2">
                      <p className="text-[rgb(var(--primary))] text-xs font-semibold uppercase tracking-wide">
                        {project.category}
                      </p>
                      <span className="text-[rgb(var(--text-muted))] text-xs">{project.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-[rgb(var(--text))] mb-2 group-hover:text-[rgb(var(--primary))] transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-[rgb(var(--text-secondary))] text-xs line-clamp-2 mb-3">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between pt-3 border-t border-[rgba(var(--border),0.3)]">
                      <div className="flex items-center gap-1 text-[rgb(var(--text-muted))] text-xs">
                        <Calendar size={12} />
                        <span>{project.date}</span>
                      </div>
                      <Link href={project.link}>
                        <button className="text-[rgb(var(--primary))] text-xs font-semibold hover:gap-2 flex items-center gap-1 transition-all">
                          View Details
                          <ExternalLink size={12} />
                        </button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href="/portfolio">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--primary-light))] text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300"
            >
              Browse All Projects
              <ExternalLink size={18} />
            </motion.button>
          </Link>
        </div>
      </Section>

      {/* Project Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-all duration-300"
              >
                <X size={20} />
              </button>

              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-[rgb(var(--primary))] text-sm font-semibold mb-2">{selectedProject.category}</p>
                      <h2 className="text-2xl md:text-3xl font-bold text-[rgb(var(--text))]">{selectedProject.title}</h2>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="text-yellow-400 fill-yellow-400" size={20} />
                      <span className="text-sm font-semibold">Featured</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-[rgb(var(--text-muted))] mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{selectedProject.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      <span>{selectedProject.client}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-[rgb(var(--text))] mb-2">Project Overview</h3>
                  <p className="text-[rgb(var(--text-secondary))] leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-[rgb(var(--text))] mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1.5 bg-[rgba(var(--primary),0.1)] text-[rgb(var(--primary))] text-sm rounded-lg">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="mb-6 p-4 bg-gradient-to-r from-[rgba(var(--primary),0.05)] to-[rgba(var(--accent),0.05)] rounded-xl">
                  <h3 className="text-lg font-bold text-[rgb(var(--text))] mb-3">Key Metrics</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {Object.entries(selectedProject.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-[rgb(var(--primary))]">{value}</div>
                        <div className="text-xs text-[rgb(var(--text-muted))]">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-4">
                  <Link href={selectedProject.link} className="flex-1">
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--primary-light))] text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                      View Live Project
                    </button>
                  </Link>
                  <button
                    onClick={closeModal}
                    className="px-6 py-3 border border-[rgba(var(--border),0.3)] text-[rgb(var(--text-secondary))] rounded-lg font-semibold hover:bg-[rgba(var(--primary),0.05)] transition-all duration-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}