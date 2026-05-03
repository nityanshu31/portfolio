// src/components/home/ServiceCard.js
'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function ServiceCard({ 
  title, 
  description, 
  href, 
  imageUrl,
  price,
  popular = false,
  delay = 0
}) {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [imageError, setImageError] = useState(false)
  const cardRef = useRef(null)
  
  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setMousePosition({ x, y })
  }

  const getTiltStyle = () => {
    if (!isHovered || !cardRef.current) return {}
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = (mousePosition.y - centerY) / 30
    const rotateY = (centerX - mousePosition.x) / 30
    
    return {
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    }
  }

  // Fallback image if the provided image fails to load
  const fallbackImage = (title) => {
    const fallbacks = {
      'Web Development': 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
      'Mobile Apps': 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      'Cloud Solutions': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
      'AI & ML': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      'UI/UX Design': 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
      'Digital Marketing': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
    }
    return fallbacks[title] || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop'
  }

  const finalImageUrl = imageError || !imageUrl ? fallbackImage(title) : imageUrl

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <Link href={href}>
        <div
          ref={cardRef}
          className="relative group cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseMove={handleMouseMove}
          style={getTiltStyle()}
        >
          {/* Animated Border */}
          <div className={`absolute -inset-0.5 bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))] rounded-2xl opacity-0 blur-xl transition-all duration-500 ${isHovered ? 'opacity-100 group-hover:opacity-50' : ''}`} />
          
          {/* Main Card */}
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-2xl">
            
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={finalImageUrl}
                alt={title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                onError={() => setImageError(true)}
                priority={delay === 0}
              />
            </div>

            {/* Gradient Overlay - Much lighter at bottom to show image clearly */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            
            {/* Low opacity overlay at bottom only - greatly reduced opacity */}
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

            {/* Popular Badge */}
            {popular && (
              <div className="absolute top-4 right-4 z-10">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))] rounded-full blur-md opacity-75" />
                  <div className="relative bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))] text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Sparkles size={10} />
                    Most Popular
                  </div>
                </div>
              </div>
            )}

            {/* Content at Bottom - Decreased font sizes */}
            <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
              {/* Title - decreased from text-2xl to text-lg */}
              <motion.h3 
                className="text-lg font-bold text-white mb-1.5 transition-all duration-300 drop-shadow-lg"
                animate={{ y: isHovered ? -3 : 0 }}
              >
                {title}
              </motion.h3>

              {/* Description - decreased from text-sm to text-xs */}
              <motion.p 
                className="text-white/90 text-xs leading-relaxed mb-2 line-clamp-2 drop-shadow-md"
                animate={{ opacity: isHovered ? 1 : 0.9 }}
              >
                {description}
              </motion.p>

              {/* CTA Button - decreased text size */}
              <motion.div
                className="flex items-center justify-between pt-2 border-t border-white/30"
                animate={{ y: isHovered ? 0 : 3, opacity: isHovered ? 1 : 0.9 }}
              >
                <span className="text-xs font-semibold text-white drop-shadow-md">Get Started</span>
                <motion.div
                  className="flex items-center gap-1.5 text-white font-medium text-xs drop-shadow-md"
                  animate={{ x: isHovered ? 4 : 0 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span>Learn More</span>
                  <ArrowRight size={12} />
                </motion.div>
              </motion.div>
            </div>

            {/* Hover Overlay Effect - Lighter on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--primary))]/10 to-transparent pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}