// components/TechStack.js
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Section from './Section'
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiTypescript,
  SiTailwindcss,
  SiGraphql,
  SiMongodb,
  SiAmazon,
  SiDocker,
  SiKubernetes,
  SiFigma,
  SiJavascript,
  SiVuedotjs,
  SiAngular,
  SiPostgresql,
  SiRedis,
  SiTerraform,
  SiJenkins,
  SiGithubactions,
  SiFirebase,
  SiSupabase,
  SiPrisma,
  SiVercel,
  SiNetlify,
  SiWebpack,
  SiBabel,
  SiJest,
  SiCypress
} from 'react-icons/si'
import { DiMysql } from 'react-icons/di'

const technologies = [
  { name: 'React', icon: SiReact, color: '#61DAFB', category: 'Frontend' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000', category: 'Frontend' },
  { name: 'Vue.js', icon: SiVuedotjs, color: '#42B883', category: 'Frontend' },
  { name: 'Angular', icon: SiAngular, color: '#DD0031', category: 'Frontend' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933', category: 'Backend' },
  { name: 'Python', icon: SiPython, color: '#3776AB', category: 'Backend' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', category: 'Languages' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', category: 'Languages' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', category: 'Styling' },
  { name: 'GraphQL', icon: SiGraphql, color: '#E10098', category: 'API' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248', category: 'Database' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', category: 'Database' },
  { name: 'MySQL', icon: DiMysql, color: '#4479A1', category: 'Database' },
  { name: 'Redis', icon: SiRedis, color: '#DC382D', category: 'Database' },
  { name: 'AWS', icon: SiAmazon, color: '#FF9900', category: 'Cloud' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED', category: 'DevOps' },
  { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5', category: 'DevOps' },
  { name: 'Terraform', icon: SiTerraform, color: '#7B42BC', category: 'DevOps' },
  { name: 'Jenkins', icon: SiJenkins, color: '#D33833', category: 'CI/CD' },
  { name: 'GitHub Actions', icon: SiGithubactions, color: '#2088FF', category: 'CI/CD' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E', category: 'Design' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28', category: 'Backend' },
  { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E', category: 'Backend' },
  { name: 'Prisma', icon: SiPrisma, color: '#2D3748', category: 'ORM' },
  { name: 'Vercel', icon: SiVercel, color: '#000000', category: 'Hosting' },
  { name: 'Netlify', icon: SiNetlify, color: '#00C7B7', category: 'Hosting' },
  { name: 'Webpack', icon: SiWebpack, color: '#8DD6F9', category: 'Build Tools' },
  { name: 'Babel', icon: SiBabel, color: '#F9DC3E', category: 'Build Tools' },
  { name: 'Jest', icon: SiJest, color: '#C21325', category: 'Testing' },
  { name: 'Cypress', icon: SiCypress, color: '#17202C', category: 'Testing' }
]

const categories = ['All', 'Frontend', 'Backend', 'Database', 'DevOps', 'Cloud', 'Design', 'Testing', 'Languages', 'API', 'Styling', 'CI/CD', 'ORM', 'Hosting', 'Build Tools']

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [hoveredTech, setHoveredTech] = useState(null)

  const filteredTech = activeCategory === 'All' 
    ? technologies 
    : technologies.filter(tech => tech.category === activeCategory)

  return (
    <Section title="Technologies We Use" subtitle="Tech Stack" bg="gradient">
      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setActiveCategory(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
              activeCategory === category
                ? 'bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--primary-light))] text-white shadow-lg'
                : 'bg-[rgba(var(--border),0.1)] text-[rgb(var(--text-secondary))] hover:bg-[rgba(var(--primary),0.1)] hover:text-[rgb(var(--primary))]'
            }`}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Technologies Grid */}
      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4"
      >
        {filteredTech.map((tech, index) => {
          const IconComponent = tech.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              whileHover={{ y: -5 }}
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
              className="relative group"
            >
              <div className="relative bg-[rgba(var(--bg),0.8)] backdrop-blur-sm border border-[rgba(var(--border),0.3)] rounded-xl p-4 text-center transition-all duration-300 hover:shadow-xl overflow-hidden">
                {/* Animated Gradient Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--primary))] to-[rgb(var(--accent))] opacity-0"
                  whileHover={{ opacity: 0.1 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Icon Container */}
                <motion.div
                  className="relative mb-2 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.3 }}
                >
                  <div 
                    className="text-3xl transition-all duration-300"
                    style={{ color: tech.color }}
                  >
                    <IconComponent />
                  </div>
                </motion.div>
                
                {/* Tech Name */}
                <h3 className="font-semibold text-[rgb(var(--text))] text-xs mb-1">
                  {tech.name}
                </h3>
                
                {/* Category Badge */}
                <span className="inline-block px-1.5 py-0.5 bg-[rgba(var(--primary),0.1)] text-[rgb(var(--primary))] text-[10px] rounded-md">
                  {tech.category}
                </span>

                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute -inset-px rounded-xl bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))] opacity-0"
                  whileHover={{ opacity: 0.5 }}
                  transition={{ duration: 0.3 }}
                  style={{ zIndex: -1 }}
                />
              </div>

              {/* Tooltip on Hover */}
              {hoveredTech === tech.name && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black/90 text-white text-[10px] rounded whitespace-nowrap z-10 pointer-events-none"
                >
                  {tech.name}
                </motion.div>
              )}
            </motion.div>
          )
        })}
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {[
          { label: 'Technologies', value: technologies.length, icon: '🚀' },
          { label: 'Years Experience', value: '5+', icon: '📅' },
          { label: 'Projects Delivered', value: '50+', icon: '💼' },
          { label: 'Happy Clients', value: '98%', icon: '😊' }
        ].map((stat, idx) => (
          <div
            key={idx}
            className="bg-[rgba(var(--bg),0.6)] backdrop-blur-sm rounded-xl p-3 text-center border border-[rgba(var(--border),0.3)]"
          >
            <div className="text-2xl mb-1">{stat.icon}</div>
            <div className="text-xl font-bold text-[rgb(var(--primary))]">{stat.value}</div>
            <div className="text-[10px] text-[rgb(var(--text-muted))]">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Expertise Note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-8 text-center"
      >
        <p className="text-xs text-[rgb(var(--text-secondary))] max-w-2xl mx-auto">
          We stay up-to-date with the latest technologies and best practices to deliver 
          cutting-edge solutions that meet modern business requirements.
        </p>
      </motion.div>
    </Section>
  )
}