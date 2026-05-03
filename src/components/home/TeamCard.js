// components/TeamCard.js
'use client'

import { useState } from 'react'

export default function TeamCard({ name, role, image, bio, socialLinks = {} }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="group relative bg-[rgba(var(--bg),0.8)] backdrop-blur-sm border border-[rgba(var(--border),0.3)] rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Placeholder */}
      <div className="relative aspect-square bg-gradient-to-br from-[rgba(var(--primary),0.1)] to-[rgba(var(--accent),0.1)] flex items-center justify-center overflow-hidden">
        <div className="text-center">
          <svg className="w-20 h-20 text-[rgb(var(--primary))] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        
        {/* Social Links Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end justify-center pb-6 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex gap-3">
            {socialLinks.twitter && (
              <a href={socialLinks.twitter} className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[rgb(var(--primary))] transition-colors">
                <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.643-8.574c.002-.276.002-.552 0-.828A9.94 9.94 0 0024 4.557z"/>
                </svg>
              </a>
            )}
            {socialLinks.linkedin && (
              <a href={socialLinks.linkedin} className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[rgb(var(--primary))] transition-colors">
                <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.204 0 22.225 0z"/>
                </svg>
              </a>
            )}
            {socialLinks.github && (
              <a href={socialLinks.github} className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[rgb(var(--primary))] transition-colors">
                <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-[rgb(var(--text))] mb-1">{name}</h3>
        <p className="text-[rgb(var(--primary))] font-medium text-sm mb-3">{role}</p>
        <p className="text-[rgb(var(--text-secondary))] text-sm">{bio}</p>
      </div>
    </div>
  )
}