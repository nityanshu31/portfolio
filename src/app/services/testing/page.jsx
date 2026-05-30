// app/services/testing/page.jsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Bug,
  CheckCircle,
  Code,
  Layout,
  Database,
  Cloud,
  Shield,
  Zap,
  ArrowRight,
  Clock,
  Users,
  Award,
  MessageCircle,
  Rocket,
  Smartphone,
  Globe,
  Server,
  RefreshCw,
  BarChart,
  AlertTriangle,
  Target,
  Activity,
  Cpu,
  Wifi
} from 'lucide-react'

// Mock data - easily replaceable with API calls
const getServicesData = () => ({
  title: "Software Testing & QA Services",
  subtitle: "Ensure Quality, Reliability & Performance",
  description: "We help you deliver bug-free, secure, and high-performance software through comprehensive testing and quality assurance solutions.",
  
  services: [
    {
      id: 1,
      title: "Manual Testing",
      icon: Bug,
      description: "Human-led testing to identify usability issues, visual bugs, and edge cases that automated testing might miss.",
      features: [
        "Exploratory Testing",
        "Usability Testing",
        "Ad-hoc Testing",
        "User Acceptance Testing (UAT)",
        "Smoke Testing",
        "Sanity Testing",
        "Regression Testing",
        "Cross-browser Testing"
      ],
      tools: ["JIRA", "TestRail", "Zephyr", "Trello"],
      pricing: "Custom Quote",
      deliveryTime: "Ongoing"
    },
    {
      id: 2,
      title: "Automation Testing",
      icon: Activity,
      description: "Accelerate testing cycles with automated scripts for regression, functional, and performance testing.",
      features: [
        "Test Script Development",
        "Regression Test Automation",
        "Data-Driven Testing",
        "Keyword-Driven Testing",
        "Cross-browser Automation",
        "Parallel Test Execution",
        "CI/CD Integration",
        "Test Maintenance"
      ],
      tools: ["Selenium", "Cypress", "Playwright", "TestNG", "JUnit", "Robot Framework"],
      pricing: "Custom Quote",
      deliveryTime: "4-8 weeks"
    },
    {
      id: 3,
      title: "Performance Testing",
      icon: BarChart,
      description: "Ensure your application performs optimally under load with comprehensive performance testing.",
      features: [
        "Load Testing",
        "Stress Testing",
        "Endurance Testing",
        "Spike Testing",
        "Volume Testing",
        "Scalability Testing",
        "Infrastructure Testing",
        "Capacity Planning"
      ],
      tools: ["JMeter", "LoadRunner", "Gatling", "k6", "BlazeMeter"],
      pricing: "Custom Quote",
      deliveryTime: "3-6 weeks"
    },
    {
      id: 4,
      title: "Security Testing",
      icon: Shield,
      description: "Protect your application from vulnerabilities with comprehensive security testing and penetration testing.",
      features: [
        "Vulnerability Assessment",
        "Penetration Testing",
        "Security Audits",
        "Risk Assessment",
        "Compliance Testing",
        "Authentication Testing",
        "API Security Testing",
        "Data Security Testing"
      ],
      tools: ["OWASP ZAP", "Burp Suite", "Nessus", "Metasploit", "SonarQube"],
      pricing: "Custom Quote",
      deliveryTime: "4-6 weeks"
    },
    {
      id: 5,
      title: "API Testing",
      icon: Server,
      description: "Validate API functionality, reliability, performance, and security with comprehensive API testing.",
      features: [
        "Functional API Testing",
        "REST API Testing",
        "SOAP API Testing",
        "GraphQL Testing",
        "API Security Testing",
        "API Performance Testing",
        "Contract Testing",
        "Integration Testing"
      ],
      tools: ["Postman", "SoapUI", "REST Assured", "Karate", "Insomnia", "Swagger"],
      pricing: "Custom Quote",
      deliveryTime: "3-5 weeks"
    },
    {
      id: 6,
      title: "Mobile App Testing",
      icon: Smartphone,
      description: "Comprehensive testing for iOS and Android apps across devices, OS versions, and network conditions.",
      features: [
        "Device Compatibility Testing",
        "OS Version Testing",
        "Network Testing",
        "Battery Impact Testing",
        "Installation Testing",
        "Usability Testing",
        "Performance Testing",
        "Security Testing"
      ],
      tools: ["Appium", "BrowserStack", "Sauce Labs", "TestFlight", "Firebase Test Lab"],
      pricing: "Custom Quote",
      deliveryTime: "3-6 weeks"
    }
  ],
  
  testingTypes: [
    {
      title: "Functional Testing",
      icon: CheckCircle,
      description: "Verify that each function works according to requirements."
    },
    {
      title: "Regression Testing",
      icon: RefreshCw,
      description: "Ensure new changes haven't broken existing functionality."
    },
    {
      title: "Integration Testing",
      icon: Cpu,
      description: "Test interactions between different modules and services."
    },
    {
      title: "Unit Testing",
      icon: Code,
      description: "Test individual components or functions in isolation."
    },
    {
      title: "Compatibility Testing",
      icon: Globe,
      description: "Verify application works across browsers and devices."
    },
    {
      title: "Accessibility Testing",
      icon: Target,
      description: "Ensure application is accessible to all users including those with disabilities."
    }
  ],
  
  process: [
    {
      step: 1,
      title: "Requirement Analysis",
      description: "Understand testing requirements and define test strategy.",
      duration: "1-2 weeks",
      icon: MessageCircle
    },
    {
      step: 2,
      title: "Test Planning",
      description: "Create test plans, scenarios, and resource allocation.",
      duration: "1 week",
      icon: Target
    },
    {
      step: 3,
      title: "Test Case Development",
      description: "Write detailed test cases and prepare test data.",
      duration: "2-3 weeks",
      icon: Code
    },
    {
      step: 4,
      title: "Test Execution",
      description: "Execute manual/automated tests and log defects.",
      duration: "2-6 weeks",
      icon: Activity
    },
    {
      step: 5,
      title: "Defect Tracking",
      description: "Track, report, and verify bug fixes.",
      duration: "Ongoing",
      icon: AlertTriangle
    },
    {
      step: 6,
      title: "Test Reporting",
      description: "Generate detailed test reports and quality metrics.",
      duration: "Ongoing",
      icon: BarChart
    }
  ],
  
  benefits: [
    { icon: Shield, title: "Quality Assurance", description: "Ensure flawless user experience" },
    { icon: Zap, title: "Faster Time to Market", description: "Accelerate release cycles" },
    { icon: Award, title: "Cost Savings", description: "Early bug detection reduces costs" },
    { icon: Users, title: "User Satisfaction", description: "Deliver products users trust" },
    { icon: Cloud, title: "24/7 Monitoring", description: "Continuous quality monitoring" },
    { icon: Rocket, title: "Risk Mitigation", description: "Identify issues before production" }
  ],
  
  tools: [
    { name: "Selenium", category: "Automation" },
    { name: "Cypress", category: "Automation" },
    { name: "Playwright", category: "Automation" },
    { name: "JMeter", category: "Performance" },
    { name: "Postman", category: "API Testing" },
    { name: "Appium", category: "Mobile Testing" },
    { name: "OWASP ZAP", category: "Security" },
    { name: "JIRA", category: "Management" },
    { name: "TestRail", category: "Management" },
    { name: "BrowserStack", category: "Cloud Testing" },
    { name: "Sauce Labs", category: "Cloud Testing" },
    { name: "LoadRunner", category: "Performance" },
    { name: "Burp Suite", category: "Security" },
    { name: "GitLab CI", category: "CI/CD" },
    { name: "Jenkins", category: "CI/CD" }
  ],
  
  certifications: [
    "ISTQB Certified",
    "Certified Agile Tester",
    "Security Testing Certified",
    "Performance Testing Expert"
  ],

  industries: [
    "E-Commerce",
    "Healthcare",
    "FinTech",
    "Banking",
    "Insurance",
    "Education",
    "Logistics",
    "Gaming",
    "Social Media",
    "Enterprise Software"
  ]
})

export default function TestingServices() {
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
                QA & Testing
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
                Request a Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Badge */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {data.certifications.map((cert, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-full text-sm font-medium"
                style={{ backgroundColor: `rgba(var(--primary), 0.1)`, color: `rgba(var(--primary), 1)` }}
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: `rgba(var(--text), 1)` }}>
              Our Testing Services
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: `rgba(var(--text-secondary), 1)` }}>
              Comprehensive QA solutions for every need
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
                      {service.tools.slice(0, 3).map((tool, toolIdx) => (
                        <span key={toolIdx} className="text-xs px-2 py-1 rounded" style={{ backgroundColor: `rgba(var(--primary), 0.1)`, color: `rgba(var(--primary), 1)` }}>
                          {tool}
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

      {/* Testing Types Section */}
      <section className="py-16" style={{ backgroundColor: `rgba(var(--bg-secondary), 1)` }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: `rgba(var(--text), 1)` }}>
              Types of Testing We Cover
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: `rgba(var(--text-secondary), 1)` }}>
              Comprehensive coverage across all testing dimensions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {data.testingTypes.map((type, idx) => {
              const Icon = type.icon
              return (
                <div key={idx} className="flex items-start gap-3 p-5 rounded-xl" style={{ backgroundColor: 'white', border: `1px solid rgba(var(--border), 0.5)` }}>
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `rgba(var(--primary), 0.1)` }}>
                    <Icon className="w-5 h-5" style={{ color: `rgba(var(--primary), 1)` }} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1" style={{ color: `rgba(var(--text), 1)` }}>{type.title}</h3>
                    <p className="text-sm" style={{ color: `rgba(var(--text-muted), 1)` }}>{type.description}</p>
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
              Why Choose Our QA Services?
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: `rgba(var(--text-secondary), 1)` }}>
              We ensure your software is production-ready
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
              Our Testing Process
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: `rgba(var(--text-secondary), 1)` }}>
              A systematic approach to quality assurance
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

      {/* Tools Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: `rgba(var(--text), 1)` }}>
              Tools & Technologies
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: `rgba(var(--text-secondary), 1)` }}>
              Industry-leading testing tools and frameworks
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {data.tools.map((tool, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-full text-sm transition-all hover:scale-105"
                style={{ backgroundColor: 'white', border: `1px solid rgba(var(--border), 0.5)`, color: `rgba(var(--text), 1)` }}
              >
                {tool.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16" style={{ backgroundColor: `rgba(var(--bg-secondary), 1)` }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: `rgba(var(--text), 1)` }}>
              Industries We Serve
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: `rgba(var(--text-secondary), 1)` }}>
              Testing expertise across diverse sectors
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {data.industries.map((industry, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-full text-sm font-medium"
                style={{ backgroundColor: 'white', border: `1px solid rgba(var(--border), 0.5)`, color: `rgba(var(--text), 1)` }}
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16" style={{ backgroundColor: `rgba(var(--primary), 1)` }}>
        <div className="container mx-auto px-4 text-center">
          <Shield className="w-12 h-12 mx-auto mb-4 text-white" />
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Ensure Quality?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: `rgba(255,255,255,0.9)` }}>
            Let's help you deliver bug-free, reliable software that your users will love.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105"
              style={{ backgroundColor: 'white', color: `rgba(var(--primary), 1)` }}
            >
              Request a Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105"
              style={{ 
                backgroundColor: `rgba(255,255,255,0.1)`,
                border: `1px solid rgba(255,255,255,0.3)`,
                color: 'white'
              }}
            >
              Talk to QA Expert
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
                <h3 className="font-semibold mb-3" style={{ color: `rgba(var(--text), 1)` }}>Tools Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedService.tools.map((tool, idx) => (
                    <span key={idx} className="text-sm px-3 py-1 rounded-full" style={{ backgroundColor: `rgba(var(--primary), 0.1)`, color: `rgba(var(--primary), 1)` }}>
                      {tool}
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