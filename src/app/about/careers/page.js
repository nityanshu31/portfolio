// app/about/careers/page.jsx
import { 
  Briefcase,
  Clock,
  Mail,
  Bell,
  Users,
  Coffee,
  TrendingUp,
  Award,
  Heart,
  Star,
  Calendar,
  DollarSign,
  Home,
  Wifi,
  BookOpen,
  Gift
} from 'lucide-react';

// Mock data - easily replaceable with API calls
const getCareersData = () => ({
  isHiring: false,
  companyName: "CentrionYX Technologies",
  lastHiringDate: "March 2024",
  expectedHiringDate: "Q4 2024",
  teamSize: 65,
  departments: ["Engineering", "Design", "Product", "Sales", "Marketing", "HR"],
  
  benefits: [
    { icon: Home, title: "Remote-First Culture", description: "Work from anywhere with flexible hours" },
    { icon: DollarSign, title: "Competitive Compensation", description: "Industry-leading salaries and bonuses" },
    { icon: Heart, title: "Health & Wellness", description: "Comprehensive medical coverage for you and family" },
    { icon: TrendingUp, title: "Growth Opportunities", description: "Learning budget and career development programs" },
    { icon: Coffee, title: "Work-Life Balance", description: "Generous PTO and flexible working hours" },
    { icon: Gift, title: "Perks & Benefits", description: "Annual retreats, team outings, and wellness programs" }
  ],
  
  cultureHighlights: [
    "Innovation-driven environment",
    "Collaborative team culture",
    "Flat hierarchy & open communication",
    "Regular knowledge sharing sessions",
    "Diversity & inclusion focus",
    "Continuous learning emphasis"
  ],
  
  futureOpenings: [
    { role: "Senior Full Stack Developer", department: "Engineering", type: "Full-time" },
    { role: "UI/UX Designer", department: "Design", type: "Full-time" },
    { role: "Product Manager", department: "Product", type: "Full-time" },
    { role: "DevOps Engineer", department: "Engineering", type: "Full-time" },
    { role: "Technical Project Manager", department: "Product", type: "Full-time" }
  ],
  
  whyJoinUs: [
    "Work with cutting-edge technologies",
    "Impact millions of users worldwide",
    "Learn from industry experts",
    "Fast-paced growth environment",
    "Ownership and autonomy",
    "Global client exposure"
  ]
});

export default async function CareersPage() {
  const careersData = await getCareersData();
  
  return (
    <div className="min-h-screen" style={{ backgroundColor: `rgba(var(--bg), 1)` }}>
      
      {/* Hero Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-4">
              <span className="text-sm font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: `rgba(var(--primary), 0.1)`, color: `rgba(var(--primary), 1)` }}>
                Careers at {careersData.companyName}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: `rgba(var(--text), 1)` }}>
              Join Our{' '}
              <span style={{ color: `rgba(var(--primary), 1)` }}>Dream Team</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto" style={{ color: `rgba(var(--text-secondary), 1)` }}>
              Build the future with us. We're always looking for passionate individuals who love solving complex problems.
            </p>
          </div>
        </div>
      </section>

      {/* Not Hiring Banner */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="p-8 rounded-2xl text-center relative overflow-hidden" style={{ 
              backgroundColor: `rgba(var(--primary), 0.05)`,
              border: `2px solid rgba(var(--primary), 0.2)`
            }}>
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <Clock className="w-full h-full" style={{ color: `rgba(var(--primary), 1)` }} />
              </div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ backgroundColor: `rgba(var(--primary), 0.1)` }}>
                  <Briefcase className="w-8 h-8" style={{ color: `rgba(var(--primary), 1)` }} />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: `rgba(var(--text), 1)` }}>
                  Currently Not Hiring
                </h2>
                <p className="text-lg mb-4" style={{ color: `rgba(var(--text-secondary), 1)` }}>
                  We're not actively recruiting at the moment, but we're always excited to connect with talented professionals!
                </p>
                <div className="flex flex-wrap gap-4 justify-center text-sm" style={{ color: `rgba(var(--text-muted), 1)` }}>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Last hired: {careersData.lastHiringDate}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    Expected openings: {careersData.expectedHiringDate}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    Team size: {careersData.teamSize}+
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Opportunities Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: `rgba(var(--text), 1)` }}>
              Future Opportunities
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: `rgba(var(--text-secondary), 1)` }}>
              Here's what we typically look for when we're hiring
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {careersData.futureOpenings.map((opening, idx) => (
              <div key={idx} className="p-6 rounded-xl transition-all hover:shadow-lg" style={{ 
                backgroundColor: 'white', 
                border: `1px solid rgba(var(--border), 0.5)` 
              }}>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold" style={{ color: `rgba(var(--text), 1)` }}>{opening.role}</h3>
                  <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: `rgba(var(--primary-light), 0.1)`, color: `rgba(var(--primary), 1)` }}>
                    Future Opening
                  </span>
                </div>
                <p className="text-sm mb-2" style={{ color: `rgba(var(--primary), 1)` }}>{opening.department}</p>
                <p className="text-sm" style={{ color: `rgba(var(--text-muted), 1)` }}>{opening.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16" style={{ backgroundColor: `rgba(var(--bg-secondary), 1)` }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: `rgba(var(--text), 1)` }}>
              What We Offer
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: `rgba(var(--text-secondary), 1)` }}>
              Perks and benefits you'll enjoy when you join our team
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {careersData.benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-4 p-5 rounded-xl" style={{ backgroundColor: 'white', border: `1px solid rgba(var(--border), 0.5)` }}>
                <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `rgba(var(--primary), 0.1)` }}>
                  <benefit.icon className="w-5 h-5" style={{ color: `rgba(var(--primary), 1)` }} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: `rgba(var(--text), 1)` }}>{benefit.title}</h3>
                  <p className="text-sm" style={{ color: `rgba(var(--text-muted), 1)` }}>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6" style={{ color: `rgba(var(--text), 1)` }}>
                  Why Join{' '}
                  <span style={{ color: `rgba(var(--primary), 1)` }}>CentrionYX?</span>
                </h2>
                <div className="space-y-3">
                  {careersData.whyJoinUs.map((reason, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Star className="w-4 h-4" style={{ color: `rgba(var(--primary), 1)` }} />
                      <span style={{ color: `rgba(var(--text-secondary), 1)` }}>{reason}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {careersData.departments.map((dept, idx) => (
                  <div key={idx} className="p-4 rounded-xl text-center" style={{ backgroundColor: `rgba(var(--primary), 0.05)`, border: `1px solid rgba(var(--border), 0.3)` }}>
                    <span className="font-medium" style={{ color: `rgba(var(--primary), 1)` }}>{dept}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16" style={{ backgroundColor: `rgba(var(--bg-secondary), 1)` }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: `rgba(var(--text), 1)` }}>
              Our Culture
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: `rgba(var(--text-secondary), 1)` }}>
              What makes CentrionYX a great place to work
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="p-6 rounded-xl text-center" style={{ backgroundColor: 'white', border: `1px solid rgba(var(--border), 0.5)` }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: `rgba(var(--primary), 0.1)` }}>
                <Wifi className="w-6 h-6" style={{ color: `rgba(var(--primary), 1)` }} />
              </div>
              <h3 className="font-semibold mb-2" style={{ color: `rgba(var(--text), 1)` }}>Remote-First</h3>
              <p className="text-sm" style={{ color: `rgba(var(--text-muted), 1)` }}>Work from anywhere with flexible hours</p>
            </div>
            <div className="p-6 rounded-xl text-center" style={{ backgroundColor: 'white', border: `1px solid rgba(var(--border), 0.5)` }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: `rgba(var(--primary), 0.1)` }}>
                <BookOpen className="w-6 h-6" style={{ color: `rgba(var(--primary), 1)` }} />
              </div>
              <h3 className="font-semibold mb-2" style={{ color: `rgba(var(--text), 1)` }}>Learning Culture</h3>
              <p className="text-sm" style={{ color: `rgba(var(--text-muted), 1)` }}>Continuous learning and development</p>
            </div>
            <div className="p-6 rounded-xl text-center" style={{ backgroundColor: 'white', border: `1px solid rgba(var(--border), 0.5)` }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: `rgba(var(--primary), 0.1)` }}>
                <Award className="w-6 h-6" style={{ color: `rgba(var(--primary), 1)` }} />
              </div>
              <h3 className="font-semibold mb-2" style={{ color: `rgba(var(--text), 1)` }}>Recognition</h3>
              <p className="text-sm" style={{ color: `rgba(var(--text-muted), 1)` }}>Your work gets noticed and rewarded</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stay Updated Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="p-8 rounded-2xl" style={{ backgroundColor: `rgba(var(--primary), 1)` }}>
              <Bell className="w-12 h-12 mx-auto mb-4 text-white" />
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">
                Stay Updated
              </h2>
              <p className="text-lg mb-6" style={{ color: `rgba(255,255,255,0.9)` }}>
                Be the first to know when we start hiring again
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none"
                  style={{ backgroundColor: 'white' }}
                />
                <button 
                  className="px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 whitespace-nowrap"
                  style={{ backgroundColor: 'white', color: `rgba(var(--primary), 1)` }}
                >
                  Notify Me
                </button>
              </div>
              <p className="text-sm mt-4" style={{ color: `rgba(255,255,255,0.7)` }}>
                We'll only email you when new positions open up. No spam.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16" style={{ backgroundColor: `rgba(var(--bg-secondary), 1)` }}>
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4" style={{ color: `rgba(var(--text), 1)` }}>
              Questions About Careers?
            </h2>
            <p className="text-lg mb-6" style={{ color: `rgba(var(--text-secondary), 1)` }}>
              Feel free to reach out to our HR team
            </p>
            <a 
              href="mailto:careers@centrionyx.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
              style={{ backgroundColor: `rgba(var(--primary), 1)`, color: 'white' }}
            >
              <Mail className="w-4 h-4" />
              careers@centrionyx.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}