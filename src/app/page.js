// app/page.jsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ComingSoonPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Set launch date (example: 30 days from now)
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 30);
  launchDate.setHours(0, 0, 0, 0);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Simulate API call
      console.log("Notified email:", email);
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  const services = [
    { name: "Website Building", icon: "🌐" },
    { name: "ERP Solutions", icon: "📊" },
    { name: "Software Testing", icon: "🧪" },
    { name: "SEO Optimization", icon: "📈" },
    { name: "IT Consulting", icon: "💡" },
    { name: "Cloud Services", icon: "☁️" },
  ];

  return (
    <div 
      className="min-h-screen overflow-hidden relative"
      style={{ 
        backgroundColor: `rgb(var(--bg))`,
        color: `rgb(var(--text))`
      }}
    >
      {/* Animated Background Elements with Theme Colors */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ backgroundColor: `rgba(var(--primary), 0.3)` }}
        ></div>
        <div 
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"
          style={{ backgroundColor: `rgba(var(--accent-alt), 0.3)` }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-2000"
          style={{ backgroundColor: `rgba(var(--primary-light), 0.2)` }}
        ></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231F5F8B' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat"
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20 min-h-screen flex flex-col justify-between">
        {/* Header / Logo */}
        <div className="flex justify-center md:justify-start">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 backdrop-blur-md px-6 py-3 rounded-2xl shadow-xl"
            style={{ 
              backgroundColor: `rgba(var(--bg-secondary), 0.8)`,
              border: `1px solid rgba(var(--border), 0.5)`
            }}
          >
            <span 
              className="text-3xl font-bold"
              style={{ 
                background: `linear-gradient(to right, rgb(var(--primary)), rgb(var(--primary-light)))`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Centrionyx
            </span>
            <span 
              className="text-sm font-mono"
              style={{ color: `rgba(var(--text-secondary), 0.8)` }}
            >
              | coming soon
            </span>
          </motion.div>
        </div>

        {/* Hero Section */}
        <div className="flex-grow flex flex-col items-center justify-center text-center py-12 md:py-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            {/* Badge */}
            <span 
              className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider rounded-full backdrop-blur-sm"
              style={{ 
                backgroundColor: `rgba(var(--primary), 0.1)`,
                color: `rgb(var(--primary))`,
                border: `1px solid rgba(var(--primary-light), 0.3)`
              }}
            >
              🚀 NEXT-GEN DIGITAL SOLUTIONS
            </span>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span 
                className="bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(to right, rgb(var(--primary)), rgb(var(--primary-light)), rgb(var(--accent)))`,
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text'
                }}
              >
                Something Amazing
              </span>
              <br />
              <span style={{ color: `rgb(var(--text))` }}>Is Coming Soon</span>
            </h1>

            {/* Description */}
            <p 
              className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
              style={{ color: `rgb(var(--text-secondary))` }}
            >
              We're crafting powerful websites, intelligent ERP solutions, and 
              cutting-edge IT services. Get ready to transform your digital presence.
            </p>

            {/* Countdown Timer */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto mb-12">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <motion.div
                  key={unit}
                  whileHover={{ scale: 1.05 }}
                  className="backdrop-blur-md rounded-2xl p-4 md:p-6 shadow-xl"
                  style={{ 
                    backgroundColor: `rgba(var(--bg-secondary), 0.6)`,
                    border: `1px solid rgba(var(--border), 0.3)`
                  }}
                >
                  <div 
                    className="text-3xl md:text-5xl font-bold font-mono"
                    style={{ color: `rgb(var(--primary))` }}
                  >
                    {String(value).padStart(2, "0")}
                  </div>
                  <div 
                    className="text-xs md:text-sm uppercase tracking-wider mt-2"
                    style={{ color: `rgb(var(--text-muted))` }}
                  >
                    {unit}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Email Notification Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="max-w-md mx-auto"
            >
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email for early access"
                  required
                  className="flex-1 px-5 py-3 backdrop-blur-sm rounded-xl transition-all focus:outline-none focus:ring-2"
                  style={{ 
                    backgroundColor: `rgba(var(--bg-secondary), 0.6)`,
                    border: `1px solid rgba(var(--border), 0.5)`,
                    color: `rgb(var(--text))`,
                    placeholderColor: `rgb(var(--text-muted))`
                  }}
                />
                <button
                  type="submit"
                  className="px-6 py-3 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                  style={{ 
                    background: `linear-gradient(to right, rgb(var(--primary)), rgb(var(--primary-light)))`,
                    color: 'white'
                  }}
                >
                  Notify Me
                </button>
              </form>
              <AnimatePresence>
                {isSubmitted && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-sm mt-3"
                    style={{ color: `rgb(var(--primary))` }}
                  >
                    ✓ Thanks! We'll notify you at launch.
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 md:mt-20"
        >
          <div className="text-center mb-8">
            <h2 
              className="text-2xl md:text-3xl font-bold mb-2"
              style={{ color: `rgb(var(--text))` }}
            >
              What We're Building
            </h2>
            <p style={{ color: `rgb(var(--text-secondary))` }}>
              Comprehensive technology services tailored for modern businesses
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {services.map((service, idx) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + idx * 0.05 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="backdrop-blur-sm rounded-xl p-4 text-center transition-all cursor-default"
                style={{ 
                  backgroundColor: `rgba(var(--bg-secondary), 0.5)`,
                  border: `1px solid rgba(var(--border), 0.2)`,
                  hover: { borderColor: `rgba(var(--primary), 0.5)` }
                }}
              >
                <div className="text-3xl mb-2">{service.icon}</div>
                <div 
                  className="text-sm font-medium"
                  style={{ color: `rgb(var(--text-secondary))` }}
                >
                  {service.name}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer / Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm"
          style={{ 
            borderTop: `1px solid rgba(var(--border), 0.5)`,
            color: `rgb(var(--text-muted))`
          }}
        >
          <div className="flex space-x-6">
            {['Twitter', 'LinkedIn', 'GitHub', 'Contact'].map((item) => (
              <a 
                key={item}
                href="#" 
                className="transition-colors"
                style={{ hover: { color: `rgb(var(--primary))` } }}
                onMouseEnter={(e) => e.target.style.color = `rgb(var(--primary))`}
                onMouseLeave={(e) => e.target.style.color = `rgb(var(--text-muted))`}
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center space-x-2">
            <span 
              className="inline-block w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: `rgb(var(--primary))` }}
            ></span>
            <span>Launching in {timeLeft.days} days • © 2026 Centrionyx</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}