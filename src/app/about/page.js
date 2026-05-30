// app/about/page.jsx
import { 
  Target, 
  Heart, 
  Lightbulb,
  Award,
  Clock,
  Coffee,
  TrendingUp,
  Quote,
  Mail,
  MapPin,
  Phone,
  Calendar,
  Globe,
  Rocket,
  Users
} from 'lucide-react';

// Mock data - easily replaceable with API calls
const getCompanyData = () => ({
  name: "CentrionYX Technologies",
  shortName: "CentrionYX",
  founded: 2026,
  founder: "",
  headquarters: "Gandhinagar, India",
  locations: ["Ahmedabad"],
  teamSize: 4,
  projectsCompleted: 2,
  countriesServed: 1,
  clientSatisfaction: 97,
  description: "CentrionYX Technologies is a next-generation digital solutions provider specializing in web development, mobile applications, and enterprise software. We combine cutting-edge technology with creative excellence to help businesses thrive in the digital economy.",
  story: "Founded in 2026, CentrionYX Technologies began with a bold vision: to bridge the gap between innovative technology and business success. What started as a passionate team of three developers in a small Bangalore office has evolved into a global technology partner trusted by over 200 businesses across three continents. Our name 'CentrionYX' symbolizes our centric approach to client success, combining technical excellence with unwavering commitment to quality.",
  mission: "To empower businesses of all sizes with enterprise-grade digital solutions that drive growth, streamline operations, and create meaningful connections with their audience. We're committed to making advanced technology accessible, scalable, and impactful for every client we serve.",
  vision: "To become a globally recognized leader in digital transformation, setting new benchmarks for innovation, reliability, and client success. We envision a future where every business, regardless of size, has access to world-class technology solutions that fuel their growth journey.",
  values: [
    { icon: Lightbulb, title: "Innovation at Core", description: "We constantly explore emerging technologies and push boundaries to deliver cutting-edge solutions." },
    { icon: Users, title: "Client-Centric Approach", description: "Your success is our success. We build lasting partnerships through transparency and dedication." },
    { icon: Award, title: "Excellence Always", description: "We never compromise on quality, ensuring every project exceeds industry standards." }
  ],
  journey: [
    { year: 2026, title: "The Beginning", description: "Started with 3 founders in Bangalore", milestone: true },
  ],
  culture: [
    { icon: Coffee, title: "Creative Freedom", description: "We encourage innovation and independent thinking" },
    { icon: Clock, title: "Work-Life Balance", description: "Flexible hours and remote work options available" },
    { icon: TrendingUp, title: "Growth Mindset", description: "Continuous learning and professional development" }
  ],
  testimonials: [
    // { 
    //   id: 1,
    //   text: "CentrionYX transformed our digital presence completely. Their technical expertise and dedication to quality is outstanding. They didn't just build a product; they became our trusted technology partner.",
    //   author: "Priya Sharma",
    //   role: "CTO, TechSolve India",
    //   rating: 5
    // },
    // { 
    //   id: 2,
    //   text: "Working with CentrionYX has been a game-changer for our business. Their team's ability to understand our needs and deliver exceptional solutions within deadlines is remarkable.",
    //   author: "James Wilson",
    //   role: "CEO, GlobalMart",
    //   rating: 5
    // },
    // { 
    //   id: 3,
    //   text: "The most reliable development partner we've ever worked with. Their attention to detail and commitment to excellence sets them apart from other agencies.",
    //   author: "Neha Gupta",
    //   role: "Product Manager, InnovateCorp",
    //   rating: 5
    // }
  ],
  stats: [
    { value: "4+", label: "Team Members", icon: Users, description: "Passionate professionals" },
    { value: "1+", label: "Projects Completed", icon: Rocket, description: "Successfully delivered" },
    { value: "100%", label: "Client Satisfaction", icon: Heart, description: "Happy clients worldwide" },
    { value: "1", label: "Countries Served", icon: Globe, description: "Global presence" }
  ],
  contact: {
    email: "info@centrionyx.com",
    phone: "+91 80 1234 5678",
    address: "Gandhinagar, India",
    socials: {
      linkedin: "https://linkedin.com/company/centrionyx",
      twitter: "https://twitter.com/centrionyx",
      github: "https://github.com/centrionyx"
    }
  }
});

export default async function AboutPage() {
  // Simulating DB fetch - replace with actual API call
  const companyData = await getCompanyData();
  
  return (
    <div className="min-h-screen" style={{ backgroundColor: `rgba(var(--bg), 1)` }}>
      
      {/* Hero Section - Company Introduction */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4">
              <span className="text-sm font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: `rgba(var(--primary), 0.1)`, color: `rgba(var(--primary), 1)` }}>
                About Us
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: `rgba(var(--text), 1)` }}>
              About <span style={{ color: `rgba(var(--primary), 1)` }}>{companyData.name}</span>
            </h1>
            <div className="w-20 h-1 rounded-full mb-8" style={{ backgroundColor: `rgba(var(--primary), 1)` }} />
            
            <div className="space-y-6 text-lg leading-relaxed" style={{ color: `rgba(var(--text-secondary), 1)` }}>
              <p>{companyData.description}</p>
              <p>{companyData.story}</p>
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 pt-6 border-t" style={{ borderColor: `rgba(var(--border), 0.5)` }}>
              <div>
                <p className="text-sm" style={{ color: `rgba(var(--text-muted), 1)` }}>Founded</p>
                <p className="font-semibold text-lg" style={{ color: `rgba(var(--text), 1)` }}>{companyData.founded}</p>
              </div>
              <div>
                <p className="text-sm" style={{ color: `rgba(var(--text-muted), 1)` }}>Headquarters</p>
                <p className="font-semibold text-lg" style={{ color: `rgba(var(--text), 1)` }}>{companyData.headquarters}</p>
              </div>
              <div>
                <p className="text-sm" style={{ color: `rgba(var(--text-muted), 1)` }}>Team Size</p>
                <p className="font-semibold text-lg" style={{ color: `rgba(var(--text), 1)` }}>{companyData.teamSize}+ Experts</p>
              </div>
              <div>
                <p className="text-sm" style={{ color: `rgba(var(--text-muted), 1)` }}>Locations</p>
                <p className="font-semibold text-lg" style={{ color: `rgba(var(--text), 1)` }}>{companyData.locations.length} Cities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16" style={{ backgroundColor: `rgba(var(--bg-secondary), 1)` }}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {companyData.stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-3" style={{ backgroundColor: `rgba(var(--primary), 0.1)` }}>
                  <stat.icon className="w-6 h-6" style={{ color: `rgba(var(--primary), 1)` }} />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-1" style={{ color: `rgba(var(--text), 1)` }}>{stat.value}</div>
                <div className="font-medium mb-1" style={{ color: `rgba(var(--primary), 1)` }}>{stat.label}</div>
                <div className="text-sm" style={{ color: `rgba(var(--text-muted), 1)` }}>{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: `rgba(var(--text), 1)` }}>
              Our Journey
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: `rgba(var(--text-secondary), 1)` }}>
              The milestones that shaped {companyData.shortName}
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {companyData.journey.map((item, idx) => (
              <div key={idx} className="flex gap-4 mb-8 last:mb-0">
                <div className="flex-shrink-0 w-24">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" style={{ color: `rgba(var(--primary), 1)` }} />
                    <span className="text-lg font-bold" style={{ color: `rgba(var(--primary), 1)` }}>{item.year}</span>
                  </div>
                </div>
                <div className="flex-1 pb-8 border-l-2 pl-6" style={{ borderColor: `rgba(var(--border), 1)` }}>
                  <h3 className="text-lg font-semibold mb-1" style={{ color: `rgba(var(--text), 1)` }}>{item.title}</h3>
                  <p style={{ color: `rgba(var(--text-muted), 1)` }}>{item.description}</p>
                  {item.milestone && (
                    <span className="inline-block mt-2 text-xs px-2 py-1 rounded" style={{ backgroundColor: `rgba(var(--primary), 0.1)`, color: `rgba(var(--primary), 1)` }}>
                      Milestone
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16" style={{ backgroundColor: `rgba(var(--bg-secondary), 1)` }}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-2xl" style={{ backgroundColor: 'white', border: `1px solid rgba(var(--border), 0.5)` }}>
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: `rgba(var(--primary), 0.1)` }}>
                <Target className="w-7 h-7" style={{ color: `rgba(var(--primary), 1)` }} />
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: `rgba(var(--text), 1)` }}>Our Mission</h3>
              <p className="leading-relaxed" style={{ color: `rgba(var(--text-secondary), 1)` }}>{companyData.mission}</p>
            </div>
            <div className="p-8 rounded-2xl" style={{ backgroundColor: 'white', border: `1px solid rgba(var(--border), 0.5)` }}>
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: `rgba(var(--accent), 0.1)` }}>
                <Globe className="w-7 h-7" style={{ color: `rgba(var(--accent), 1)` }} />
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: `rgba(var(--text), 1)` }}>Our Vision</h3>
              <p className="leading-relaxed" style={{ color: `rgba(var(--text-secondary), 1)` }}>{companyData.vision}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: `rgba(var(--text), 1)` }}>
              Our Core Values
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: `rgba(var(--text-secondary), 1)` }}>
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {companyData.values.map((value, idx) => (
              <div key={idx} className="p-6 rounded-xl text-center" style={{ backgroundColor: 'white', border: `1px solid rgba(var(--border), 0.5)` }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: `rgba(var(--primary-light), 0.1)` }}>
                  <value.icon className="w-6 h-6" style={{ color: `rgba(var(--primary), 1)` }} />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: `rgba(var(--text), 1)` }}>{value.title}</h3>
                <p className="text-sm" style={{ color: `rgba(var(--text-muted), 1)` }}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-16" style={{ backgroundColor: `rgba(var(--bg-secondary), 1)` }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4" style={{ color: `rgba(var(--text), 1)` }}>
                Life at {companyData.shortName}
              </h2>
              <p className="text-lg" style={{ color: `rgba(var(--text-secondary), 1)` }}>
                More than just work — we're a family
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {companyData.culture.map((culture, idx) => (
                <div key={idx} className="flex items-start gap-3 p-5 rounded-xl" style={{ backgroundColor: 'white', border: `1px solid rgba(var(--border), 0.5)` }}>
                  <culture.icon className="w-5 h-5 mt-0.5" style={{ color: `rgba(var(--primary), 1)` }} />
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: `rgba(var(--text), 1)` }}>{culture.title}</h4>
                    <p className="text-sm" style={{ color: `rgba(var(--text-muted), 1)` }}>{culture.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: `rgba(var(--text), 1)` }}>
              What Our Clients Say
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: `rgba(var(--text-secondary), 1)` }}>
              Trusted by businesses worldwide
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {companyData.testimonials.map((testimonial) => (
              <div key={testimonial.id} className="p-6 rounded-xl relative" style={{ backgroundColor: 'white', border: `1px solid rgba(var(--border), 0.5)` }}>
                <Quote className="w-8 h-8 absolute top-4 right-4 opacity-20" style={{ color: `rgba(var(--primary), 1)` }} />
                <p className="mb-4 leading-relaxed" style={{ color: `rgba(var(--text-secondary), 1)` }}>"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold" style={{ color: `rgba(var(--text), 1)` }}>{testimonial.author}</p>
                  <p className="text-sm" style={{ color: `rgba(var(--text-muted), 1)` }}>{testimonial.role}</p>
                  <div className="flex gap-0.5 mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} style={{ color: `rgba(var(--primary), 1)` }}>★</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-16" style={{ backgroundColor: `rgba(var(--primary), 1)` }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Want to know more about us?</h2>
            <p className="text-lg mb-8 opacity-90">
              We'd love to share our story and discuss how we can help your business grow.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>{companyData.contact.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>{companyData.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{companyData.contact.address}</span>
              </div>
            </div>
            <button className="px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105" style={{ backgroundColor: 'white', color: `rgba(var(--primary), 1)` }}>
              Get in Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}