// app/portfolio/page.jsx
'use client'

import { useState } from 'react'
import { 
  Globe, 
  Smartphone, 
  Code, 
  ArrowRight,
  ExternalLink,
  
  
  Star,
  Eye,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Filter,
  X
} from 'lucide-react'
import { useEffect } from "react";
// Mock data - easily replaceable with API calls


export default function PortfolioPage() {
  const [projects, setProjects] = useState([]);
 
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 6

  useEffect(() => {
  fetchProjects();
}, []);

const fetchProjects = async () => {
  try {
    const response = await fetch(
      "/api/projects"
    );

    const data = await response.json();

    if (data.success) {
      setProjects(data.projects);
    }

  } catch (error) {
    console.log(error);
  }
};


  // Filter projects based on category
  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  // Pagination logic
  const indexOfLastProject = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject)
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId)
    setCurrentPage(1)
  }

  const handleProjectClick = (project) => {
    setSelectedProject(project)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedProject(null)
    document.body.style.overflow = 'unset'
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: `rgba(var(--bg), 1)` }}>
      
      {/* Hero Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-4">
              <span className="text-sm font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: `rgba(var(--primary), 0.1)`, color: `rgba(var(--primary), 1)` }}>
                Our Portfolio
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: `rgba(var(--text), 1)` }}>
              <span style={{ color: `rgba(var(--primary), 1)` }}>Our Work</span> Speaks for Itself
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto" style={{ color: `rgba(var(--text-secondary), 1)` }}>
              Explore our collection of successful projects that have helped businesses transform their digital presence
            </p>
          </div>
        </div>
      </section>

     
    
          

      {/* Filter Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
            

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {currentProjects.map((project) => (
              <div
                key={project.id}
                className="group rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer"
                style={{ backgroundColor: 'white', border: `1px solid rgba(var(--border), 0.5)` }}
                onClick={() => handleProjectClick(project)}
              >
                {/* Image Placeholder */}
                <div className="relative h-48 overflow-hidden" style={{ backgroundColor: `rgba(var(--primary), 0.1)` }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    {project.category === "web" ? (
                      <Globe className="w-12 h-12" style={{ color: `rgba(var(--primary), 0.5)` }} />
                    ) : (
                      <Smartphone className="w-12 h-12" style={{ color: `rgba(var(--primary), 0.5)` }} />
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  {project.featured && (
                    <span className="absolute top-3 left-3 text-xs px-2 py-1 rounded-full bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--primary-light))] text-white">
                      Featured
                    </span>
                  )}
                </div>
                
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold" style={{ color: `rgba(var(--text), 1)` }}>{project.title}</h3>
                  </div>
                  <p className="text-sm mb-2" style={{ color: `rgba(var(--primary), 1)` }}>{project.subcategory}</p>
                  <p className="text-sm mb-4 line-clamp-2" style={{ color: `rgba(var(--text-muted), 1)` }}>{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 rounded" style={{ backgroundColor: `rgba(var(--primary), 0.1)`, color: `rgba(var(--primary), 1)` }}>
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: `rgba(var(--border), 0.3)`, color: `rgba(var(--text-muted), 1)` }}>
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <button className="inline-flex items-center gap-1 text-sm font-medium transition-all group-hover:gap-2" style={{ color: `rgba(var(--primary), 1)` }}>
                    View Project
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

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
                    currentPage === idx + 1
                      ? 'text-white'
                      : ''
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

      {/* CTA Section */}
      <section className="py-16" style={{ backgroundColor: `rgba(var(--primary), 1)` }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Start Your Project?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: `rgba(255,255,255,0.9)` }}>
            Let's create something amazing together. Get in touch with our team today.
          </p>
          <button className="px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 inline-flex items-center gap-2" style={{ backgroundColor: 'white', color: `rgba(var(--primary), 1)` }}>
            Start a Project
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(0,0,0,0.8)' }} onClick={closeModal}>
          <div className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl" style={{ backgroundColor: `rgba(var(--bg), 1)` }} onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 rounded-full z-10 transition-all hover:scale-110"
              style={{ backgroundColor: `rgba(var(--primary), 0.1)`, color: `rgba(var(--primary), 1)` }}
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 md:p-8">
              {/* Modal Header */}
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: `rgba(var(--text), 1)` }}>{selectedProject.title}</h2>
                <div className="flex flex-wrap gap-3 text-sm">
                  <span className="flex items-center gap-1" style={{ color: `rgba(var(--text-muted), 1)` }}>
                    <Calendar className="w-4 h-4" />
                    {selectedProject.launchDate}
                  </span>
                  <span className="flex items-center gap-1" style={{ color: `rgba(var(--text-muted), 1)` }}>
                    <Clock className="w-4 h-4" />
                    {selectedProject.duration}
                  </span>
                </div>
              </div>

              {/* Modal Content */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: `rgba(var(--text), 1)` }}>Description</h3>
                  <p style={{ color: `rgba(var(--text-secondary), 1)` }}>{selectedProject.description}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: `rgba(var(--text), 1)` }}>Client & Industry</h3>
                  <p style={{ color: `rgba(var(--text-secondary), 1)` }}>{selectedProject.client} • {selectedProject.industry}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: `rgba(var(--text), 1)` }}>Key Features</h3>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm" style={{ color: `rgba(var(--text-secondary), 1)` }}>
                        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: `rgba(var(--primary), 1)` }} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: `rgba(var(--text), 1)` }}>Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span key={idx} className="text-sm px-3 py-1 rounded-full" style={{ backgroundColor: `rgba(var(--primary), 0.1)`, color: `rgba(var(--primary), 1)` }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: `rgba(var(--text), 1)` }}>Key Results</h3>
                  <ul className="space-y-2">
                    {selectedProject.results.map((result, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm" style={{ color: `rgba(var(--text-secondary), 1)` }}>
                        <Star className="w-4 h-4" style={{ color: `rgba(var(--primary), 1)` }} />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4">
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all hover:gap-3"
                    style={{ backgroundColor: `rgba(var(--primary), 1)`, color: 'white' }}
                  >
                    Live Demo
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all hover:gap-3"
                    style={{ backgroundColor: `rgba(var(--border), 0.2)`, color: `rgba(var(--text), 1)`, border: `1px solid rgba(var(--border), 0.5)` }}
                  >
                    View Code
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}