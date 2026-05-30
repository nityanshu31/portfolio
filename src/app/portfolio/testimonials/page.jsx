// app/portfolio/testimonials/page.jsx
'use client'

import { useState } from 'react'
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight,
  ThumbsUp,
  Briefcase,
  Calendar,
  Award,
  Users,
  TrendingUp,
  MessageCircle,
  Heart,
  Filter
} from 'lucide-react'

// Mock data - easily replaceable with API calls
const getTestimonialsData = () => ({
  companyName: "CentrionYX Technologies",
  overallRating: 4.9,
  totalTestimonials: 156,
  satisfaction: 98,
  repeatClients: 72,
  
  testimonials: [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Chief Technology Officer",
      company: "TechSolve India",
      industry: "Enterprise Software",
      project: "Cloud Migration & DevOps Implementation",
      rating: 5,
      content: "CentrionYX transformed our entire infrastructure. Their team's expertise in cloud architecture and DevOps practices helped us achieve 99.9% uptime and reduce our operational costs by 40%. They didn't just deliver a project; they became an integral part of our technology journey.",
      image: "/assets/testimonials/priya-sharma.jpg",
      date: "March 15, 2024",
      verified: true,
      projectImages: []
    },
    {
      id: 2,
      name: "James Wilson",
      role: "Chief Executive Officer",
      company: "GlobalMart International",
      industry: "E-Commerce Retail",
      project: "E-Commerce Platform Development",
      rating: 5,
      content: "Working with CentrionYX has been a game-changer for our business. Their team delivered a robust e-commerce platform that handles 100K+ daily transactions with zero downtime. The AI-powered recommendations alone increased our conversion rate by 150%. Absolutely outstanding work!",
      image: "/assets/testimonials/james-wilson.jpg",
      date: "February 28, 2024",
      verified: true,
      projectImages: []
    },
    {
      id: 3,
      name: "Neha Gupta",
      role: "Product Manager",
      company: "InnovateCorp Solutions",
      industry: "SaaS & Technology",
      project: "Mobile App Development - MedTrack",
      rating: 5,
      content: "The most reliable development partner we've ever worked with. CentrionYX understood our vision perfectly and delivered a healthcare app that exceeded all our expectations. Their attention to detail, commitment to quality, and post-launch support have been exceptional.",
      image: "/assets/testimonials/neha-gupta.jpg",
      date: "January 20, 2024",
      verified: true,
      projectImages: []
    },
    {
      id: 4,
      name: "Michael Chen",
      role: "Director of Engineering",
      company: "FinTech Innovations Ltd",
      industry: "Financial Services",
      project: "Real-time Investment Dashboard",
      rating: 5,
      content: "CentrionYX's technical expertise is second to none. They built a real-time dashboard that processes millions of data points daily with sub-second latency. Their team's problem-solving skills and proactive communication made the entire development process smooth and enjoyable.",
      image: "/assets/testimonials/michael-chen.jpg",
      date: "December 10, 2023",
      verified: true,
      projectImages: []
    },
    {
      id: 5,
      name: "Sarah Johnson",
      role: "Chief Marketing Officer",
      company: "SocialPulse Media",
      industry: "Social Media Marketing",
      project: "Social Media Analytics Platform",
      rating: 5,
      content: "The team at CentrionYX didn't just build an app; they built a solution that transformed how we serve our clients. Their understanding of social media analytics and user experience design resulted in a product our customers love. Highly recommended!",
      image: "/assets/testimonials/sarah-johnson.jpg",
      date: "November 5, 2023",
      verified: true,
      projectImages: []
    },
    {
      id: 6,
      name: "Rajiv Mehta",
      role: "Founder & CEO",
      company: "HomeHunt Realty",
      industry: "Real Estate",
      project: "Real Estate Portal Development",
      rating: 5,
      content: "From concept to launch, CentrionYX was with us every step of the way. Their team's creativity, technical skill, and dedication to our success made them feel like true partners. Our real estate platform has seen over 200K property views in just 3 months!",
      image: "/assets/testimonials/rajiv-mehta.jpg",
      date: "October 18, 2023",
      verified: true,
      projectImages: []
    },
    {
      id: 7,
      name: "Emily Watson",
      role: "Product Owner",
      company: "SwiftLogistics Inc.",
      industry: "Logistics & Supply Chain",
      project: "Logistics Management System",
      rating: 4,
      content: "Great experience working with the CentrionYX team. They delivered a complex logistics platform on time and within budget. The route optimization feature alone saved us 25% on fuel costs. Would definitely work with them again!",
      image: "/assets/testimonials/emily-watson.jpg",
      date: "September 22, 2023",
      verified: true,
      projectImages: []
    },
    {
      id: 8,
      name: "Dr. Vikram Singh",
      role: "Medical Director",
      company: "Apollo Healthcare",
      industry: "Healthcare",
      project: "Healthcare Management System",
      rating: 5,
      content: "CentrionYX built a HIPAA-compliant healthcare system that has streamlined our operations significantly. Their understanding of healthcare regulations and patient data security was impressive. The system has been adopted by 50+ clinics across the country.",
      image: "/assets/testimonials/vikram-singh.jpg",
      date: "August 30, 2023",
      verified: true,
      projectImages: []
    }
  ],
  
  stats: [
    { icon: Award, label: "5-Star Ratings", value: "94%", description: "of clients rate us 5 stars" },
    { icon: Users, label: "Client Retention", value: "92%", description: "repeat business rate" },
    { icon: TrendingUp, label: "Growth Impact", value: "156%", description: "average client growth" },
    { icon: Heart, label: "Client Love", value: "98%", description: "would recommend us" }
  ],
  
  industries: [
    "E-Commerce",
    "Healthcare",
    "FinTech",
    "Real Estate",
    "Logistics",
    "SaaS",
    "Marketing",
    "Enterprise"
  ]
})

export default function TestimonialsPage() {
  const testimonialsData = getTestimonialsData()
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedIndustry, setSelectedIndustry] = useState("All")
  const [selectedRating, setSelectedRating] = useState(0)
  const testimonialsPerPage = 6

  // Filter testimonials
  const filteredTestimonials = testimonialsData.testimonials.filter(testimonial => {
    const matchesIndustry = selectedIndustry === "All" || testimonial.industry === selectedIndustry
    const matchesRating = selectedRating === 0 || testimonial.rating === selectedRating
    return matchesIndustry && matchesRating
  })

  // Pagination
  const indexOfLastTestimonial = currentPage * testimonialsPerPage
  const indexOfFirstTestimonial = indexOfLastTestimonial - testimonialsPerPage
  const currentTestimonials = filteredTestimonials.slice(indexOfFirstTestimonial, indexOfLastTestimonial)
  const totalPages = Math.ceil(filteredTestimonials.length / testimonialsPerPage)

  // Get unique industries for filter
  const industries = ["All", ...new Set(testimonialsData.testimonials.map(t => t.industry))]

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'fill-current' : ''}`}
        style={{ color: i < rating ? `rgba(var(--primary), 1)` : `rgba(var(--border), 0.5)` }}
      />
    ))
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: `rgba(var(--bg), 1)` }}>
      
      {/* Hero Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-4">
              <span className="text-sm font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: `rgba(var(--primary), 0.1)`, color: `rgba(var(--primary), 1)` }}>
                Client Testimonials
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: `rgba(var(--text), 1)` }}>
              What Our{' '}
              <span style={{ color: `rgba(var(--primary), 1)` }}>Clients Say</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto" style={{ color: `rgba(var(--text-secondary), 1)` }}>
              Don't just take our word for it — hear from the businesses we've helped transform
            </p>
          </div>
        </div>
      </section>

      {/* Overall Rating Section */}
      <section className="py-12" style={{ backgroundColor: `rgba(var(--bg-secondary), 1)` }}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center md:text-left">
                <div className="flex justify-center md:justify-start items-baseline gap-2 mb-3">
                  <span className="text-5xl md:text-6xl font-bold" style={{ color: `rgba(var(--primary), 1)` }}>
                    {testimonialsData.overallRating}
                  </span>
                  <span className="text-xl" style={{ color: `rgba(var(--text-muted), 1)` }}>/5</span>
                </div>
                <div className="flex justify-center md:justify-start gap-1 mb-3">
                  {renderStars(Math.floor(testimonialsData.overallRating))}
                </div>
                <p className="text-sm" style={{ color: `rgba(var(--text-muted), 1)` }}>
                  Based on {testimonialsData.totalTestimonials} client reviews
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 rounded-xl" style={{ backgroundColor: 'white', border: `1px solid rgba(var(--border), 0.5)` }}>
                  <div className="text-2xl font-bold mb-1" style={{ color: `rgba(var(--primary), 1)` }}>{testimonialsData.satisfaction}%</div>
                  <div className="text-xs" style={{ color: `rgba(var(--text-muted), 1)` }}>Client Satisfaction</div>
                </div>
                <div className="text-center p-4 rounded-xl" style={{ backgroundColor: 'white', border: `1px solid rgba(var(--border), 0.5)` }}>
                  <div className="text-2xl font-bold mb-1" style={{ color: `rgba(var(--primary), 1)` }}>{testimonialsData.repeatClients}%</div>
                  <div className="text-xs" style={{ color: `rgba(var(--text-muted), 1)` }}>Repeat Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {testimonialsData.stats.map((stat, idx) => {
              const Icon = stat.icon
              return (
                <div key={idx} className="text-center p-6 rounded-xl transition-all hover:shadow-lg" style={{ backgroundColor: 'white', border: `1px solid rgba(var(--border), 0.5)` }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: `rgba(var(--primary), 0.1)` }}>
                    <Icon className="w-6 h-6" style={{ color: `rgba(var(--primary), 1)` }} />
                  </div>
                  <div className="text-2xl font-bold mb-1" style={{ color: `rgba(var(--primary), 1)` }}>{stat.value}</div>
                  <div className="font-semibold text-sm mb-1" style={{ color: `rgba(var(--text), 1)` }}>{stat.label}</div>
                  <div className="text-xs" style={{ color: `rgba(var(--text-muted), 1)` }}>{stat.description}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              <div className="flex items-center gap-2 mr-2">
                <Filter className="w-4 h-4" style={{ color: `rgba(var(--text-muted), 1)` }} />
                <span className="text-sm font-medium" style={{ color: `rgba(var(--text), 1)` }}>Filter by:</span>
              </div>
              <select
                value={selectedIndustry}
                onChange={(e) => {
                  setSelectedIndustry(e.target.value)
                  setCurrentPage(1)
                }}
                className="px-3 py-1.5 rounded-lg text-sm cursor-pointer focus:outline-none"
                style={{ backgroundColor: `rgba(var(--border), 0.2)`, border: `1px solid rgba(var(--border), 0.5)`, color: `rgba(var(--text), 1)` }}
              >
                {industries.map(industry => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
              <select
                value={selectedRating}
                onChange={(e) => {
                  setSelectedRating(Number(e.target.value))
                  setCurrentPage(1)
                }}
                className="px-3 py-1.5 rounded-lg text-sm cursor-pointer focus:outline-none"
                style={{ backgroundColor: `rgba(var(--border), 0.2)`, border: `1px solid rgba(var(--border), 0.5)`, color: `rgba(var(--text), 1)` }}
              >
                <option value={0}>All Ratings</option>
                <option value={5}>5 Stars</option>
                <option value={4}>4 Stars</option>
                <option value={3}>3 Stars</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {currentTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="relative rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl"
                style={{ backgroundColor: 'white', border: `1px solid rgba(var(--border), 0.5)` }}
              >
                <Quote className="absolute top-6 right-6 w-12 h-12 opacity-10" style={{ color: `rgba(var(--primary), 1)` }} />
                
                <div className="p-6">
                  {/* Rating */}
                  <div className="flex gap-0.5 mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  {/* Content */}
                  <p className="mb-6 leading-relaxed" style={{ color: `rgba(var(--text-secondary), 1)` }}>
                    "{testimonial.content}"
                  </p>
                  
                  {/* Client Info */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `rgba(var(--primary), 0.1)` }}>
                      <span className="text-lg font-bold" style={{ color: `rgba(var(--primary), 1)` }}>
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold" style={{ color: `rgba(var(--text), 1)` }}>{testimonial.name}</h4>
                      <p className="text-sm" style={{ color: `rgba(var(--primary), 1)` }}>{testimonial.role}</p>
                      <p className="text-xs" style={{ color: `rgba(var(--text-muted), 1)` }}>{testimonial.company}</p>
                    </div>
                  </div>
                  
                  {/* Project Info */}
                  <div className="pt-4 border-t" style={{ borderColor: `rgba(var(--border), 0.3)` }}>
                    <div className="flex flex-wrap gap-4 text-xs">
                      <span className="flex items-center gap-1" style={{ color: `rgba(var(--text-muted), 1)` }}>
                        <Briefcase className="w-3 h-3" />
                        {testimonial.project}
                      </span>
                      <span className="flex items-center gap-1" style={{ color: `rgba(var(--text-muted), 1)` }}>
                        <Calendar className="w-3 h-3" />
                        {testimonial.date}
                      </span>
                    </div>
                    {testimonial.verified && (
                      <div className="mt-3 flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: `rgba(var(--primary), 1)` }} />
                        <span className="text-xs" style={{ color: `rgba(var(--primary), 1)` }}>Verified Client</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredTestimonials.length === 0 && (
            <div className="text-center py-12">
              <MessageCircle className="w-16 h-16 mx-auto mb-4 opacity-30" style={{ color: `rgba(var(--text-muted), 1)` }} />
              <h3 className="text-xl font-semibold mb-2" style={{ color: `rgba(var(--text), 1)` }}>No testimonials found</h3>
              <p style={{ color: `rgba(var(--text-muted), 1)` }}>Try adjusting your filters</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-12">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg transition-all disabled:opacity-50"
                style={{ backgroundColor: `rgba(var(--border), 0.2)`, border: `1px solid rgba(var(--border), 0.5)` }}
              >
                <ChevronLeft className="w-5 h-5" style={{ color: `rgba(var(--text), 1)` }} />
              </button>
              {[...Array(totalPages)].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx + 1)}
                  className={`w-10 h-10 rounded-lg font-medium transition-all ${
                    currentPage === idx + 1 ? 'text-white' : ''
                  }`}
                  style={{
                    backgroundColor: currentPage === idx + 1 ? `rgba(var(--primary), 1)` : `rgba(var(--border), 0.2)`,
                    color: currentPage === idx + 1 ? 'white' : `rgba(var(--text), 1)`,
                    border: currentPage === idx + 1 ? 'none' : `1px solid rgba(var(--border), 0.5)`
                  }}
                >
                  {idx + 1}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg transition-all disabled:opacity-50"
                style={{ backgroundColor: `rgba(var(--border), 0.2)`, border: `1px solid rgba(var(--border), 0.5)` }}
              >
                <ChevronRight className="w-5 h-5" style={{ color: `rgba(var(--text), 1)` }} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16" style={{ backgroundColor: `rgba(var(--bg-secondary), 1)` }}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: `rgba(var(--text), 1)` }}>
              Trusted by Businesses Across Industries
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {testimonialsData.industries.map((industry, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-full text-sm"
                  style={{ backgroundColor: 'white', border: `1px solid rgba(var(--border), 0.5)`, color: `rgba(var(--text-secondary), 1)` }}
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16" style={{ backgroundColor: `rgba(var(--primary), 1)` }}>
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <ThumbsUp className="w-12 h-12 mx-auto mb-4 text-white" />
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to Join Our Happy Clients?</h2>
            <p className="text-lg mb-8" style={{ color: `rgba(255,255,255,0.9)` }}>
              Let's create something amazing together and add your success story to our growing list of satisfied clients.
            </p>
            <button className="px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 inline-flex items-center gap-2" style={{ backgroundColor: 'white', color: `rgba(var(--primary), 1)` }}>
              Start Your Project
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}