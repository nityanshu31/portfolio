// app/services/page.jsx
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Globe,
  Smartphone,
  Bug,
  ArrowRight,
  Code,
  Layout,
  Database,
  Cloud,
  Shield,
  Zap
} from 'lucide-react'

// Mock data - easily replaceable with API calls
const getServicesData = () => ({
  services: [
    {
      id: 1,
      title: "Web Development",
      slug: "web-dev",
      icon: Globe,
      description: "Custom web applications, e-commerce platforms, CMS websites, and enterprise portals built with modern technologies.",
      features: [
        "Custom Web Applications",
        "E-commerce Development",
        "CMS Websites",
        "Enterprise Portals",
        "Progressive Web Apps",
        "API Development & Integration"
      ],
      technologies: ["React", "Next.js", "Node.js", "Python", "PHP", "MongoDB", "PostgreSQL"],
      href: "/services/web-dev"
    },
    {
      id: 2,
      title: "Mobile App Development",
      slug: "mobile-dev",
      icon: Smartphone,
      description: "Native and cross-platform mobile applications for iOS and Android with stunning UI/UX and seamless performance.",
      features: [
        "iOS App Development",
        "Android App Development",
        "Cross-Platform Apps",
        "React Native Apps",
        "Flutter Development",
        "App Maintenance & Support"
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
      href: "/services/mobile"
    },
    {
      id: 3,
      title: "Software Testing & QA",
      slug: "testing",
      icon: Bug,
      description: "Comprehensive testing solutions to ensure your applications are bug-free, secure, and perform optimally.",
      features: [
        "Manual Testing",
        "Automation Testing",
        "Performance Testing",
        "Security Testing",
        "API Testing",
        "Mobile App Testing"
      ],
      technologies: ["Selenium", "Jest", "Cypress", "Postman", "JMeter", "Appium"],
      href: "/services/testing"
    }
  ]
})

export default function ServicesPage() {
  const data = getServicesData()

  return (
    <div className="min-h-screen" style={{ backgroundColor: `rgba(var(--bg), 1)` }}>
      
      {/* Hero Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-4">
              <span className="text-sm font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: `rgba(var(--primary), 0.1)`, color: `rgba(var(--primary), 1)` }}>
                Our Services
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: `rgba(var(--text), 1)` }}>
              What We Do
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: `rgba(var(--text-secondary), 1)` }}>
              We provide end-to-end digital solutions to help businesses grow and succeed
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {data.services.map((service, idx) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl"
                  style={{ backgroundColor: 'white', border: `1px solid rgba(var(--border), 0.5)` }}
                >
                  <div className="p-6">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all group-hover:scale-110 group-hover:rotate-3" style={{ backgroundColor: `rgba(var(--primary), 0.1)` }}>
                      <Icon className="w-7 h-7" style={{ color: `rgba(var(--primary), 1)` }} />
                    </div>
                    
                    {/* Title */}
                    <h2 className="text-2xl font-bold mb-3" style={{ color: `rgba(var(--text), 1)` }}>
                      {service.title}
                    </h2>
                    
                    {/* Description */}
                    <p className="mb-4 leading-relaxed" style={{ color: `rgba(var(--text-secondary), 1)` }}>
                      {service.description}
                    </p>
                    
                    {/* Features List */}
                    <div className="mb-4">
                      <h3 className="text-sm font-semibold mb-2" style={{ color: `rgba(var(--text), 1)` }}>
                        Key Features:
                      </h3>
                      <ul className="grid grid-cols-2 gap-x-3 gap-y-1">
                        {service.features.slice(0, 4).map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-1 text-sm" style={{ color: `rgba(var(--text-muted), 1)` }}>
                            <span className="w-1 h-1 rounded-full" style={{ backgroundColor: `rgba(var(--primary), 1)` }} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Technologies */}
                    <div className="mb-5">
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.slice(0, 4).map((tech, tIdx) => (
                          <span key={tIdx} className="text-xs px-2 py-1 rounded" style={{ backgroundColor: `rgba(var(--primary), 0.1)`, color: `rgba(var(--primary), 1)` }}>
                            {tech}
                          </span>
                        ))}
                        {service.technologies.length > 4 && (
                          <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: `rgba(var(--border), 0.3)`, color: `rgba(var(--text-muted), 1)` }}>
                            +{service.technologies.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Link Button */}
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 font-medium transition-all group-hover:gap-3"
                      style={{ color: `rgba(var(--primary), 1)` }}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}