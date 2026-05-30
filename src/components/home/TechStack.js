// components/TechStack.js
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Section from './Section'

const technologies = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB', category: 'Frontend' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', color: '#000000', category: 'Frontend' },
  { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', color: '#42B883', category: 'Frontend' },
  { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', color: '#DD0031', category: 'Frontend' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#339933', category: 'Backend' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#3776AB', category: 'Backend' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: '#F7DF1E', category: 'Languages' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: '#3178C6', category: 'Languages' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', color: '#06B6D4', category: 'Styling' },
  { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg', color: '#E10098', category: 'API' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: '#47A248', category: 'Database' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '#4169E1', category: 'Database' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', color: '#4479A1', category: 'Database' },
  { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', color: '#DC382D', category: 'Database' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg', color: '#FF9900', category: 'Cloud' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ED', category: 'DevOps' },
  { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', color: '#326CE5', category: 'DevOps' },
  { name: 'Terraform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg', color: '#7B42BC', category: 'DevOps' },
  { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg', color: '#D33833', category: 'CI/CD' },
  { name: 'GitHub Actions', icon: 'https://github.githubassets.com/images/modules/site/icons/actions.svg', color: '#2088FF', category: 'CI/CD' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', color: '#F24E1E', category: 'Design' },
  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', color: '#FFCA28', category: 'Backend' },
  { name: 'Supabase', icon: 'https://avatars.githubusercontent.com/u/54469796?s=200&v=4', color: '#3ECF8E', category: 'Backend' },
  { name: 'Prisma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg', color: '#2D3748', category: 'ORM' },
  { name: 'Vercel', icon: 'https://assets.vercel.com/image/upload/v1662134759/vercel-logotype-dark.png', color: '#000000', category: 'Hosting' },
  { name: 'Netlify', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg', color: '#00C7B7', category: 'Hosting' },
  { name: 'Webpack', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg', color: '#8DD6F9', category: 'Build Tools' },
  { name: 'Babel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg', color: '#F9DC3E', category: 'Build Tools' },
  { name: 'Jest', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg', color: '#C21325', category: 'Testing' },
  { name: 'Cypress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypressio/cypressio-original.svg', color: '#17202C', category: 'Testing' }
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
        {filteredTech.map((tech, index) => (
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
                className="relative mb-2 flex items-center justify-center h-12"
                whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={tech.icon}
                  alt={tech.name}
                  className="w-10 h-10 object-contain transition-all duration-300"
                  style={{ 
                    filter: `drop-shadow(0 0 5px ${tech.color}80)`
                  }}
                />
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
        ))}
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
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="bg-[rgba(var(--bg),0.6)] backdrop-blur-sm rounded-xl p-3 text-center border border-[rgba(var(--border),0.3)] transition-all duration-300"
          >
            <div className="text-2xl mb-1">{stat.icon}</div>
            <div className="text-xl font-bold text-[rgb(var(--primary))]">{stat.value}</div>
            <div className="text-[10px] text-[rgb(var(--text-muted))]">{stat.label}</div>
          </motion.div>
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