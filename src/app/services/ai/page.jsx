// app/under-development/page.jsx
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Construction, 
  Home,
  ArrowRight,
  Code
} from 'lucide-react'

export default function UnderDevelopment() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: `rgba(var(--bg), 1)` }}>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-10 animate-pulse" style={{ backgroundColor: `rgba(var(--primary), 0.3)` }} />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-10 animate-pulse delay-1000" style={{ backgroundColor: `rgba(var(--accent), 0.2)` }} />
        
        {/* Floating Code Icons */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-20 opacity-20"
        >
          <Code className="w-16 h-16" style={{ color: `rgba(var(--primary), 1)` }} />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 left-20 opacity-20"
        >
          <Construction className="w-16 h-16" style={{ color: `rgba(var(--accent), 1)` }} />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="mb-8"
          >
            <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto" style={{ backgroundColor: `rgba(var(--primary), 0.1)` }}>
              <Construction className="w-12 h-12" style={{ color: `rgba(var(--primary), 1)` }} />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: `rgba(var(--text), 1)` }}
          >
            Page Under{' '}
            <span style={{ color: `rgba(var(--primary), 1)` }}>Development</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl mb-8"
            style={{ color: `rgba(var(--text-secondary), 1)` }}
          >
            We're working hard to bring you something amazing. 
            This page is currently being built and will be available soon.
          </motion.p>

          {/* Back to Home Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 group"
              style={{ backgroundColor: `rgba(var(--primary), 1)`, color: 'white' }}
            >
              <Home className="w-4 h-4" />
              Back to Home
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-sm mt-8"
            style={{ color: `rgba(var(--text-muted), 1)` }}
          >
            Need immediate assistance?{' '}
            <Link href="/contact" className="font-medium hover:underline" style={{ color: `rgba(var(--primary), 1)` }}>
              Contact us
            </Link>
          </motion.p>
        </div>
      </div>
    </div>
  )
}