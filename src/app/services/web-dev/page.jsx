// app/services/web-dev/page.jsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Globe,
  Code,
  Layout,
  ShoppingCart,
  Database,
  Cloud,
  Shield,
  Zap,
  Smartphone,
  Server,
  Palette,
  Search,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Clock,
  DollarSign,
  Users,
  Award,
  MessageCircle,
  Rocket 
} from 'lucide-react'

// Mock data - easily replaceable with API calls
const getServicesData = () => ({
  title: "Web Development Services",
  subtitle: "Custom Web Solutions That Drive Results",
  description: "We build powerful, scalable, and high-performance web applications that help businesses grow and succeed in the digital landscape.",
  
  services: [
    {
      id: 1,
      title: "Custom Web Development",
      icon: Code,
      description: "Tailored web applications built from scratch to meet your unique business requirements and scale with your growth.",
      features: [
        "Custom CMS Development",
        "Enterprise Web Applications",
        "API Integration",
        "Third-party Service Integration",
        "Legacy System Migration",
        "Performance Optimization"
      ],
      technologies: ["React", "Node.js", "Python", "PHP", "Ruby on Rails"],
      pricing: "Custom Quote",
      deliveryTime: "4-12 weeks"
    },
    {
      id: 2,
      title: "E-Commerce Development",
      icon: ShoppingCart,
      description: "Feature-rich online stores with seamless payment integration, inventory management, and exceptional user experience.",
      features: [
        "Custom E-commerce Platforms",
        "Shopify Development",
        "WooCommerce Solutions",
        "Payment Gateway Integration",
        "Inventory Management",
        "Order Tracking System"
      ],
      technologies: ["Shopify", "WooCommerce", "Magento", "Stripe", "PayPal"],
      pricing: "Custom Quote",
      deliveryTime: "6-16 weeks"
    },
    {
      id: 3,
      title: "Progressive Web Apps (PWA)",
      icon: Smartphone,
      description: "Fast, reliable, and engaging web apps that work offline and provide native app-like experience across all devices.",
      features: [
        "Offline Functionality",
        "Push Notifications",
        "Home Screen Installation",
        "Fast Loading Times",
        "Mobile-First Design",
        "App-like Experience"
      ],
      technologies: ["React", "Next.js", "Service Workers", "Web App Manifest"],
      pricing: "Custom Quote",
      deliveryTime: "6-10 weeks"
    },
    {
      id: 4,
      title: "Headless CMS Solutions",
      icon: Database,
      description: "Modern headless CMS architecture for flexible content management and omnichannel content delivery.",
      features: [
        "Contentful Integration",
        "Sanity.io Solutions",
        "Strapi Development",
        "GraphQL APIs",
        "Multi-channel Publishing",
        "Content Modeling"
      ],
      technologies: ["Contentful", "Sanity", "Strapi", "GraphQL", "Next.js"],
      pricing: "Custom Quote",
      deliveryTime: "5-10 weeks"
    },
    {
      id: 5,
      title: "Cloud-Native Web Apps",
      icon: Cloud,
      description: "Scalable cloud-native applications built with microservices architecture for maximum performance and reliability.",
      features: [
        "Microservices Architecture",
        "AWS/Azure/GCP Deployment",
        "Auto-scaling Setup",
        "Load Balancing",
        "CDN Integration",
        "High Availability"
      ],
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Serverless"],
      pricing: "Custom Quote",
      deliveryTime: "8-20 weeks"
    },
    {
      id: 6,
      title: "Web Portal Development",
      icon: Users,
      description: "Secure and feature-rich web portals for customers, partners, employees, and stakeholders.",
      features: [
        "Customer Portals",
        "Partner Portals",
        "Employee Dashboards",
        "Role-based Access",
        "Document Management",
        "Real-time Analytics"
      ],
      technologies: ["React", "Vue.js", "Node.js", "PostgreSQL", "Redis"],
      pricing: "Custom Quote",
      deliveryTime: "6-14 weeks"
    }
  ],
  
  process: [
    {
      step: 1,
      title: "Discovery & Planning",
      description: "We understand your business goals, target audience, and technical requirements.",
      duration: "1-2 weeks",
      icon: MessageCircle
    },
    {
      step: 2,
      title: "UI/UX Design",
      description: "Create intuitive, engaging designs that delight users and drive conversions.",
      duration: "2-4 weeks",
      icon: Palette
    },
    {
      step: 3,
      title: "Development",
      description: "Agile development with regular updates, testing, and client feedback loops.",
      duration: "4-12 weeks",
      icon: Code
    },
    {
      step: 4,
      title: "Testing & QA",
      description: "Rigorous testing across devices, browsers, and performance benchmarks.",
      duration: "1-2 weeks",
      icon: Shield
    },
    {
      step: 5,
      title: "Deployment",
      description: "Smooth launch with zero downtime and post-deployment monitoring.",
      duration: "1 week",
      icon: Rocket
    },
    {
      step: 6,
      title: "Maintenance & Support",
      description: "Ongoing support, updates, and performance optimization.",
      duration: "Ongoing",
      icon: Clock
    }
  ],
  
  benefits: [
    { icon: Zap, title: "Lightning Fast", description: "Optimized for speed and performance" },
    { icon: Shield, title: "Secure by Design", description: "Enterprise-grade security measures" },
    { icon: TrendingUp, title: "SEO Optimized", description: "Built for search engine visibility" },
    { icon: Smartphone, title: "Fully Responsive", description: "Perfect on all devices" },
    { icon: Cloud, title: "Scalable", description: "Grows with your business" },
    { icon: DollarSign, title: "Cost Effective", description: "Optimized development costs" }
  ],
  
  technologies: [
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "Vue.js", category: "Frontend" },
    { name: "Angular", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Python/Django", category: "Backend" },
    { name: "PHP/Laravel", category: "Backend" },
    { name: "Ruby on Rails", category: "Backend" },
    { name: "MongoDB", category: "Database" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MySQL", category: "Database" },
    { name: "Redis", category: "Database" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "DevOps" },
    { name: "GraphQL", category: "API" },
    { name: "Tailwind CSS", category: "Styling" }
  ],
  
  stats: [
    { value: "150+", label: "Web Projects", icon: Globe },
    { value: "98%", label: "Client Satisfaction", icon: Award },
    { value: "50+", label: "Expert Developers", icon: Users },
    { value: "24/7", label: "Support Available", icon: Clock }
  ]
})

export default function WebDevServices() {
  const data = getServicesData()
  const [selectedService, setSelectedService] = useState(null)

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
              {data.title}
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto" style={{ color: `rgba(var(--text-secondary), 1)` }}>
              {data.description}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
                style={{ backgroundColor: `rgba(var(--primary), 1)`, color: 'white' }}
              >
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#process"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
                style={{ 
                  backgroundColor: `rgba(var(--bg-secondary), 0.8)`,
                  border: `1px solid rgba(var(--border), 0.5)`,
                  color: `rgba(var(--text), 1)`
                }}
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

     

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: `rgba(var(--text), 1)` }}>
              What We Offer
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: `rgba(var(--text-secondary), 1)` }}>
              Comprehensive web development solutions tailored to your needs
            </p>
          </div>

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
                  className="group rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer"
                  style={{ backgroundColor: 'white', border: `1px solid rgba(var(--border), 0.5)` }}
                  onClick={() => setSelectedService(service)}
                >
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all group-hover:scale-110" style={{ backgroundColor: `rgba(var(--primary), 0.1)` }}>
                      <Icon className="w-6 h-6" style={{ color: `rgba(var(--primary), 1)` }} />
                    </div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: `rgba(var(--text), 1)` }}>{service.title}</h3>
                    <p className="text-sm mb-4" style={{ color: `rgba(var(--text-muted), 1)` }}>{service.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.technologies.slice(0, 3).map((tech, techIdx) => (
                        <span key={techIdx} className="text-xs px-2 py-1 rounded" style={{ backgroundColor: `rgba(var(--primary), 0.1)`, color: `rgba(var(--primary), 1)` }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    <button className="inline-flex items-center gap-1 text-sm font-medium transition-all group-hover:gap-2" style={{ color: `rgba(var(--primary), 1)` }}>
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16" style={{ backgroundColor: `rgba(var(--bg-secondary), 1)` }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: `rgba(var(--text), 1)` }}>
              Why Choose Our Web Development Services?
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: `rgba(var(--text-secondary), 1)` }}>
              We combine technical excellence with business understanding
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {data.benefits.map((benefit, idx) => {
              const Icon = benefit.icon
              return (
                <div key={idx} className="flex items-start gap-3 p-5 rounded-xl" style={{ backgroundColor: 'white', border: `1px solid rgba(var(--border), 0.5)` }}>
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `rgba(var(--primary), 0.1)` }}>
                    <Icon className="w-5 h-5" style={{ color: `rgba(var(--primary), 1)` }} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1" style={{ color: `rgba(var(--text), 1)` }}>{benefit.title}</h3>
                    <p className="text-sm" style={{ color: `rgba(var(--text-muted), 1)` }}>{benefit.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: `rgba(var(--text), 1)` }}>
              Our Development Process
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: `rgba(var(--text-secondary), 1)` }}>
              A structured approach to deliver quality web solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {data.process.map((step, idx) => {
              const Icon = step.icon
              return (
                <div key={step.step} className="relative p-6 rounded-xl" style={{ backgroundColor: 'white', border: `1px solid rgba(var(--border), 0.5)` }}>
                  <div className="absolute -top-3 left-6 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold" style={{ backgroundColor: `rgba(var(--primary), 1)`, color: 'white' }}>
                    {step.step}
                  </div>
                  <div className="mt-4">
                    <Icon className="w-8 h-8 mb-3" style={{ color: `rgba(var(--primary), 1)` }} />
                    <h3 className="text-lg font-bold mb-2" style={{ color: `rgba(var(--text), 1)` }}>{step.title}</h3>
                    <p className="text-sm mb-2" style={{ color: `rgba(var(--text-muted), 1)` }}>{step.description}</p>
                    <span className="text-xs" style={{ color: `rgba(var(--primary), 1)` }}>⏱ {step.duration}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16" style={{ backgroundColor: `rgba(var(--bg-secondary), 1)` }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: `rgba(var(--text), 1)` }}>
              Technologies We Master
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: `rgba(var(--text-secondary), 1)` }}>
              We use the latest and most reliable technologies
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {data.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-full text-sm transition-all hover:scale-105"
                style={{ backgroundColor: 'white', border: `1px solid rgba(var(--border), 0.5)`, color: `rgba(var(--text), 1)` }}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16" style={{ backgroundColor: `rgba(var(--primary), 1)` }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Build Your Web Application?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: `rgba(255,255,255,0.9)` }}>
            Let's discuss your project and turn your vision into reality
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105"
              style={{ backgroundColor: 'white', color: `rgba(var(--primary), 1)` }}
            >
              Start a Project
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105"
              style={{ 
                backgroundColor: `rgba(255,255,255,0.1)`,
                border: `1px solid rgba(255,255,255,0.3)`,
                color: 'white'
              }}
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Service Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(0,0,0,0.8)' }} onClick={() => setSelectedService(null)}>
          <div className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl" style={{ backgroundColor: `rgba(var(--bg), 1)` }} onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 p-4 border-b" style={{ backgroundColor: `rgba(var(--bg), 1)`, borderColor: `rgba(var(--border), 0.5)` }}>
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 rounded-full transition-all hover:scale-110"
                style={{ backgroundColor: `rgba(var(--primary), 0.1)`, color: `rgba(var(--primary), 1)` }}
              >
                ✕
              </button>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `rgba(var(--primary), 0.1)` }}>
                  <selectedService.icon className="w-6 h-6" style={{ color: `rgba(var(--primary), 1)` }} />
                </div>
                <h2 className="text-2xl font-bold" style={{ color: `rgba(var(--text), 1)` }}>{selectedService.title}</h2>
              </div>
            </div>
            
            <div className="p-6">
              <p className="mb-6" style={{ color: `rgba(var(--text-secondary), 1)` }}>{selectedService.description}</p>
              
              <div className="mb-6">
                <h3 className="font-semibold mb-3" style={{ color: `rgba(var(--text), 1)` }}>Key Features</h3>
                <ul className="grid md:grid-cols-2 gap-2">
                  {selectedService.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm" style={{ color: `rgba(var(--text-muted), 1)` }}>
                      <CheckCircle className="w-4 h-4" style={{ color: `rgba(var(--primary), 1)` }} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="font-semibold mb-3" style={{ color: `rgba(var(--text), 1)` }}>Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedService.technologies.map((tech, idx) => (
                    <span key={idx} className="text-sm px-3 py-1 rounded-full" style={{ backgroundColor: `rgba(var(--primary), 0.1)`, color: `rgba(var(--primary), 1)` }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 p-4 rounded-xl" style={{ backgroundColor: `rgba(var(--bg-secondary), 0.5)` }}>
                <div>
                  <p className="text-xs" style={{ color: `rgba(var(--text-muted), 1)` }}>Estimated Timeline</p>
                  <p className="font-semibold" style={{ color: `rgba(var(--text), 1)` }}>{selectedService.deliveryTime}</p>
                </div>
                <div>
                  <p className="text-xs" style={{ color: `rgba(var(--text-muted), 1)` }}>Pricing</p>
                  <p className="font-semibold" style={{ color: `rgba(var(--text), 1)` }}>{selectedService.pricing}</p>
                </div>
              </div>
              
              <div className="mt-6 flex gap-3">
                <Link
                  href="/contact"
                  className="flex-1 text-center px-4 py-2 rounded-lg font-semibold transition-all hover:scale-105"
                  style={{ backgroundColor: `rgba(var(--primary), 1)`, color: 'white' }}
                  onClick={() => setSelectedService(null)}
                >
                  Get a Quote
                </Link>
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-4 py-2 rounded-lg font-medium transition-all"
                  style={{ backgroundColor: `rgba(var(--border), 0.2)`, color: `rgba(var(--text), 1)` }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}