// app/services/mobile-dev/page.jsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Smartphone,
  Apple,
  Package,
  Code,
  Layout,
  Database,
  Cloud,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle,
  Clock,
  DollarSign,
  Users,
  Award,
  MessageCircle,
  Rocket,
  ShoppingCart,
  MapPin,
  Video,
  Bell,
  Lock,
  Wifi,
  RefreshCw
} from 'lucide-react'

// Mock data - easily replaceable with API calls
const getServicesData = () => ({
  title: "Mobile App Development Services",
  subtitle: "Native & Cross-Platform Mobile Solutions",
  description: "We build high-performance, user-friendly mobile applications that engage users and drive business growth on iOS and Android platforms.",
  
  services: [
    {
      id: 1,
      title: "iOS App Development",
      icon: Apple,
      description: "Native iOS applications with Swift and SwiftUI that deliver exceptional performance and seamless user experience on iPhones and iPads.",
      features: [
        "Native iOS Development",
        "Swift & SwiftUI",
        "UIKit Applications",
        "App Store Optimization",
        "Apple Pay Integration",
        "Push Notifications",
        "iCloud Integration",
        "ARKit & CoreML"
      ],
      technologies: ["Swift", "SwiftUI", "UIKit", "CoreData", "CloudKit", "Firebase"],
      pricing: "Custom Quote",
      deliveryTime: "8-16 weeks"
    },
    {
      id: 2,
      title: "Android App Development",
      icon: Package,
      description: "Feature-rich Android applications built with Kotlin and Java, optimized for all Android devices and versions.",
      features: [
        "Native Android Development",
        "Kotlin & Java",
        "Material Design",
        "Google Play Optimization",
        "Google Pay Integration",
        "Firebase Integration",
        "Background Services",
        "Offline Support"
      ],
      technologies: ["Kotlin", "Java", "Jetpack Compose", "Room DB", "Firebase", "Google APIs"],
      pricing: "Custom Quote",
      deliveryTime: "8-16 weeks"
    },
    {
      id: 3,
      title: "Cross-Platform Development",
      icon: Smartphone,
      description: "Build once, deploy everywhere with React Native and Flutter - cost-effective solutions for both iOS and Android.",
      features: [
        "React Native Apps",
        "Flutter Development",
        "Single Codebase",
        "Native Performance",
        "Hot Reload",
        "Shared UI Components",
        "Platform-Specific Code",
        "Faster Time to Market"
      ],
      technologies: ["React Native", "Flutter", "Redux", "Bloc", "Firebase", "REST APIs"],
      pricing: "Custom Quote",
      deliveryTime: "6-14 weeks"
    }
  ],
  
  appTypes: [
    {
      title: "E-Commerce Apps",
      icon: ShoppingCart,
      description: "Mobile shopping experiences with secure payments, product catalogs, and order tracking."
    },
    {
      title: "On-Demand Apps",
      icon: MapPin,
      description: "Uber-style apps for services, delivery, and booking with real-time tracking."
    },
    {
      title: "Social Media Apps",
      icon: Users,
      description: "Engaging social platforms with chat, feeds, stories, and media sharing."
    },
    {
      title: "Streaming Apps",
      icon: Video,
      description: "Video/audio streaming apps with offline downloads and playlist management."
    },
    {
      title: "Healthcare Apps",
      icon: Shield,
      description: "HIPAA-compliant health apps with appointment booking and telemedicine."
    },
    {
      title: "FinTech Apps",
      icon: Lock,
      description: "Secure banking, payment, and investment apps with biometric authentication."
    }
  ],
  
  process: [
    {
      step: 1,
      title: "Discovery & Strategy",
      description: "Define goals, target audience, and feature requirements.",
      duration: "1-2 weeks",
      icon: MessageCircle
    },
    {
      step: 2,
      title: "UI/UX Design",
      description: "Create intuitive, engaging mobile-first designs and prototypes.",
      duration: "2-4 weeks",
      icon: Layout
    },
    {
      step: 3,
      title: "Development",
      description: "Agile development with regular builds and testing.",
      duration: "6-12 weeks",
      icon: Code
    },
    {
      step: 4,
      title: "Quality Assurance",
      description: "Rigorous testing on real devices and edge cases.",
      duration: "2-3 weeks",
      icon: Shield
    },
    {
      step: 5,
      title: "Deployment",
      description: "App Store and Google Play submission and approval.",
      duration: "1-2 weeks",
      icon: Rocket
    },
    {
      step: 6,
      title: "Maintenance",
      description: "Ongoing updates, bug fixes, and performance monitoring.",
      duration: "Ongoing",
      icon: RefreshCw
    }
  ],
  
  benefits: [
    { icon: Zap, title: "Fast Performance", description: "Optimized for speed and responsiveness" },
    { icon: Shield, title: "Secure by Design", description: "Enterprise-grade security measures" },
    { icon: Users, title: "User-Centric", description: "Designed for engagement and retention" },
    { icon: Cloud, title: "Cloud Ready", description: "Seamless backend integration" },
    { icon: Wifi, title: "Offline Support", description: "Works without internet connection" },
    { icon: Bell, title: "Push Notifications", description: "Engage users with timely updates" }
  ],
  
  technologies: [
    { name: "Swift", category: "iOS" },
    { name: "SwiftUI", category: "iOS" },
    { name: "Kotlin", category: "Android" },
    { name: "Java", category: "Android" },
    { name: "React Native", category: "Cross-Platform" },
    { name: "Flutter", category: "Cross-Platform" },
    { name: "Firebase", category: "Backend" },
    { name: "Node.js", category: "Backend" },
    { name: "MongoDB", category: "Database" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Redis", category: "Database" },
    { name: "AWS", category: "Cloud" },
    { name: "GraphQL", category: "API" },
    { name: "REST APIs", category: "API" }
  ],
  
  platforms: [
    { name: "iOS", version: "iOS 15+", devices: "iPhone, iPad" },
    { name: "Android", version: "Android 11+", devices: "Phones, Tablets" },
    { name: "Cross-Platform", version: "Both", devices: "All Devices" }
  ]
})

export default function MobileDevServices() {
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
                Mobile Development
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
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-12" style={{ backgroundColor: `rgba(var(--bg-secondary), 1)` }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
            {data.platforms.map((platform, idx) => (
              <div key={idx} className="text-center px-6 py-4 rounded-xl" style={{ backgroundColor: 'white', border: `1px solid rgba(var(--border), 0.5)` }}>
                <Smartphone className="w-8 h-8 mx-auto mb-2" style={{ color: `rgba(var(--primary), 1)` }} />
                <h3 className="font-bold" style={{ color: `rgba(var(--text), 1)` }}>{platform.name}</h3>
                <p className="text-xs" style={{ color: `rgba(var(--text-muted), 1)` }}>{platform.version}</p>
                <p className="text-xs" style={{ color: `rgba(var(--text-muted), 1)` }}>{platform.devices}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: `rgba(var(--text), 1)` }}>
              Development Approaches
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: `rgba(var(--text-secondary), 1)` }}>
              Choose the right approach for your mobile app
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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

      {/* App Types Section */}
      <section className="py-16" style={{ backgroundColor: `rgba(var(--bg-secondary), 1)` }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: `rgba(var(--text), 1)` }}>
              What We Build
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: `rgba(var(--text-secondary), 1)` }}>
              Mobile apps for every industry and use case
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {data.appTypes.map((appType, idx) => {
              const Icon = appType.icon
              return (
                <div key={idx} className="flex items-start gap-3 p-5 rounded-xl" style={{ backgroundColor: 'white', border: `1px solid rgba(var(--border), 0.5)` }}>
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `rgba(var(--primary), 0.1)` }}>
                    <Icon className="w-5 h-5" style={{ color: `rgba(var(--primary), 1)` }} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1" style={{ color: `rgba(var(--text), 1)` }}>{appType.title}</h3>
                    <p className="text-sm" style={{ color: `rgba(var(--text-muted), 1)` }}>{appType.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: `rgba(var(--text), 1)` }}>
              Why Choose Our Mobile Development?
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: `rgba(var(--text-secondary), 1)` }}>
              We deliver apps that users love and businesses trust
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
      <section className="py-16" style={{ backgroundColor: `rgba(var(--bg-secondary), 1)` }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: `rgba(var(--text), 1)` }}>
              Our Development Process
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: `rgba(var(--text-secondary), 1)` }}>
              A proven methodology for successful mobile apps
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: `rgba(var(--text), 1)` }}>
              Technologies We Use
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: `rgba(var(--text-secondary), 1)` }}>
              Cutting-edge tools and frameworks for modern mobile apps
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
          <Smartphone className="w-12 h-12 mx-auto mb-4 text-white" />
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Launch Your Mobile App?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: `rgba(255,255,255,0.9)` }}>
            Let's turn your app idea into reality. Get in touch with our mobile experts today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105"
              style={{ backgroundColor: 'white', color: `rgba(var(--primary), 1)` }}
            >
              Start Your Project
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