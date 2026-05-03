// app/page.js
'use client'

import Hero from '@/components/home/Hero'
import Section from '@/components/home/Section'
import ServiceCard from '@/components/home/ServiceCard'
// import Portfolio from '@/components/home/Portfolio'
// import TeamCard from '@/components/home/TeamCard'
import TechStack from '@/components/home/TechStack'
import Testimonials from '@/components/home/Testimonials'
import Contact from '@/components/home/Contact'
import Button from '@/components/home/Button'

const services = [
  {
    imageUrl: '/assets/web.jpg', // Remove '/public' from path - Next.js serves from public folder
    title: 'Web Development',
    description: 'Modern, responsive websites and web applications built with cutting-edge technologies.',
    href: '/services/web-dev',
    price: '$10k+',
    popular: true
  },
  {
    imageUrl: '/assets/mobile.jpg',
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    href: '/services/mobile',
    price: '$15k+'
  },
  {
    imageUrl: '/assets/cloud.jpg',
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and DevOps solutions for modern businesses.',
    href: '/services/cloud',
    price: '$8k+'
  },
  {
    imageUrl: '/assets/ai.jpg',
    title: 'AI & ML',
    description: 'Intelligent solutions powered by artificial intelligence and machine learning.',
    href: '/services/ai',
    price: 'Custom',
    popular: true
  },
  {
    imageUrl: '/assets/design.jpg',
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive designs that deliver exceptional user experiences.',
    href: '/services/design',
    price: '$5k+'
  },
  {
    imageUrl: '/assets/software-testing.jpg',
    title: 'Quality Analysis',
    description: 'Data-driven marketing strategies to grow your online presence.',
    href: '/services/software testing',
    price: '$3k+'
  },
]

const team = [
  {
    name: 'John Smith',
    role: 'CEO & Founder',
    bio: '15+ years of experience in digital transformation',
    socialLinks: {
      linkedin: '#',
      twitter: '#',
    }
  },
  {
    name: 'Jane Doe',
    role: 'CTO',
    bio: 'Tech visionary with expertise in AI and cloud computing',
    socialLinks: {
      linkedin: '#',
      github: '#',
    }
  },
  {
    name: 'Mike Johnson',
    role: 'Lead Developer',
    bio: 'Full-stack expert passionate about clean code',
    socialLinks: {
      twitter: '#',
      github: '#',
    }
  },
]

export default function Home() {
  return (
    <main>
      <Hero />
      
      <Section title="Our Services" subtitle="What We Do" bg="light">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} delay={index * 0.1} />
          ))}
        </div>
      </Section>
      
      <TechStack />
      
      <Testimonials />
      
      <Contact />
      
      {/* CTA Section */}
      <Section bg="dark">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-[rgb(var(--text-secondary))] mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with our digital solutions.
          </p>
          <Button variant="primary" size="xl" href="/contact">
            Get In Touch
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12H19M19 12L13 6M19 12L13 18" />
            </svg>
          </Button>
        </div>
      </Section>
    </main>
  )
}