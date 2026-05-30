'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileDropdownState, setMobileDropdownState] = useState(null)
  const [windowWidth, setWindowWidth] = useState(0)
  const timeoutRef = useRef(null)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      if (window.innerWidth > 1024) {
        setIsOpen(false)
        setMobileDropdownState(null)
        setActiveDropdown(null)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setActiveDropdown(null)
    setMobileDropdownState(null)
  }, [pathname])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleDropdownEnter = useCallback((href) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setActiveDropdown(href)
  }, [])

  const handleDropdownLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
  }, [])

  const handleDropdownItemClick = useCallback((href) => {
    setActiveDropdown(null)
    router.push(href)
  }, [router])

  const handleMobileLinkClick = useCallback((link) => {
    if (link.dropdown && link.dropdown.length > 0) {
      setMobileDropdownState(mobileDropdownState === link.href ? null : link.href)
    } else {
      setIsOpen(false)
      router.push(link.href)
    }
  }, [mobileDropdownState, router])

  const handleMobileDropdownClick = useCallback((href) => {
    setIsOpen(false)
    router.push(href)
  }, [router])

  const navLinks = [
    {
      href: '/',
      label: 'Home',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9.5L12 3L21 9.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5Z" />
          <path d="M9 21V12h6v9" />
        </svg>
      )
    },
    {
      href: '/about',
      label: 'About',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="8" r="4" />
          <path d="M5.5 20v-2a6.5 6.5 0 0 1 13 0v2" />
        </svg>
      ),
      dropdown: [
        { href: '/about', label: 'Our Company' },
        { href: '/about/team', label: 'Leadership Team' },
        // { href: '/about/careers', label: 'Careers', badge: 'We\'re hiring' },
      ]
    },
    {
      href: '/services',
      label: 'Services',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
      dropdown: [
        { href: '/services/web-dev', label: 'Web Development' },
        { href: '/services/mobile', label: 'Mobile Apps' },
        { href: '/services/testing', label: 'Testing Services' },
        // { href: '/services/ai', label: 'AI & Machine Learning', new: true },
      ]
    },
    {
      href: '/portfolio',
      label: 'Portfolio',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8" />
          <path d="M12 17v4" />
        </svg>
      ),
      dropdown: [
        { href: '/portfolio', label: 'Our Work' },
        { href: '/portfolio/testimonials', label: 'Testimonials' },
      ]
    },
    {
      href: '/contact',
      label: 'Contact',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 6.5L12 13L2 6.5" />
          <rect x="2" y="4" width="20" height="16" rx="2" />
        </svg>
      )
    },
  ]

  const isMobile = windowWidth < 768
  const isTablet = windowWidth >= 768 && windowWidth < 1024
  const isDesktop = windowWidth >= 1024

  return (
    <>
      <style jsx global>{`
        @keyframes slideIn {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 20px;
            opacity: 1;
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .nav-link:hover {
          color: rgb(var(--primary)) !important;
          background: rgba(var(--primary), 0.05) !important;
        }
        
        .btn-primary:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 20px rgba(var(--primary), 0.4) !important;
        }
        
        .dropdown-item:hover {
          background: rgba(var(--primary), 0.05) !important;
          color: rgb(var(--primary)) !important;
        }
        
        .mobile-nav-link:hover {
          background: rgba(var(--primary), 0.08) !important;
          color: rgb(var(--primary)) !important;
        }
        
        .logo-wrapper:hover .logo-icon {
          transform: scale(1.05) rotate(5deg) !important;
        }
        
        .mobile-menu-btn:hover {
          background: rgba(var(--primary), 0.1) !important;
          transform: scale(1.05) !important;
        }
        
        .mobile-btn-primary:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 4px 12px rgba(var(--primary), 0.3) !important;
        }
        
        /* Smooth scrolling for mobile menu */
        .mobile-menu::-webkit-scrollbar {
          width: 4px;
        }
        
        .mobile-menu::-webkit-scrollbar-track {
          background: rgba(var(--border), 0.1);
        }
        
        .mobile-menu::-webkit-scrollbar-thumb {
          background: rgba(var(--primary), 0.3);
          border-radius: 4px;
        }

        /* Dropdown container styles */
        .dropdown-container {
          position: relative;
        }

        .dropdown-menu {
          position: absolute;
          top: calc(100% + 8px);
          left: 0;
          min-width: ${isTablet ? '200px' : '240px'};
          background: rgba(var(--bg), 0.98);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(var(--border), 0.5);
          border-radius: 12px;
          box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.15);
          overflow: hidden;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all 200ms ease-in-out;
          pointer-events: none;
          z-index: 100;
        }

        .dropdown-container:hover .dropdown-menu,
        .dropdown-menu.visible {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
          pointer-events: auto;
        }

        /* Ensure dropdown stays open when hovering over menu items */
        .dropdown-menu:hover {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
          pointer-events: auto;
        }
      `}</style>

      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out backdrop-blur-[20px] bg-[rgba(var(--bg),0.98)] border-b-[rgba(var(--border),0.8)] shadow-md border-b`}>
        <div className={`max-w-[1400px] mx-auto ${isMobile ? 'px-4' : isTablet ? 'px-6' : 'px-8'}`}>
          <div className={`flex justify-between items-center ${isMobile ? 'h-16' : 'h-20'}`}>
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 md:gap-3 transition-all duration-300 cursor-pointer z-50">
              <div className="logo-icon flex items-center justify-center transition-all duration-300">
                <Image
                  src="/assets/logo/logo.png"
                  width={isMobile ? 56 : 72}
                  height={isMobile ? 56 : 72}
                  alt="Centrionyx Logo"
                  priority
                  className="w-full h-auto"
                />
              </div>
              <div className="flex flex-col">
                <span className={`font-extrabold tracking-[-0.02em] text-[rgb(var(--primary))] ${isMobile ? 'text-xl' : 'text-3xl'}`}>
                  Centrionyx
                </span>
                <span className={`text-[10px] font-medium tracking-[0.03em] text-[rgb(var(--text-muted))] ${isMobile ? 'hidden' : 'block'}`}>
                  Digital Solutions
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className={`${isDesktop ? 'flex' : 'hidden'} gap-1 md:gap-4 items-center`}>
              {navLinks.map((link) => {
                const isActive = pathname === link.href || pathname?.startsWith(link.href + '/')
                const hasDropdown = link.dropdown && link.dropdown.length > 0

                if (hasDropdown) {
                  return (
                    <div
                      key={link.href}
                      className="dropdown-container"
                      onMouseEnter={() => handleDropdownEnter(link.href)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <Link
                        href={link.href}
                        className={`nav-link relative ${isActive ? 'text-[rgb(var(--primary))] bg-[rgba(var(--primary),0.08)]' : 'text-[rgb(var(--text-secondary))]'} font-medium ${isTablet ? 'text-[13px] px-3 py-1.5' : 'text-sm px-4 py-2'} rounded-lg transition-all duration-200 cursor-pointer flex items-center gap-1.5 md:gap-2 whitespace-nowrap`}
                      >
                        {link.icon}
                        {link.label}
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-0.5">
                          <path d="M6 9L12 15L18 9" />
                        </svg>
                        {isActive && (
                          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))] rounded-full"></span>
                        )}
                      </Link>

                      <div className={`dropdown-menu ${activeDropdown === link.href ? 'visible' : ''}`}>
                        {link.dropdown.map((item) => (
                          <button
                            key={item.href}
                            onClick={() => handleDropdownItemClick(item.href)}
                            className="dropdown-item w-full flex justify-between items-center no-underline text-[rgb(var(--text-secondary))] transition-all duration-200 cursor-pointer hover:bg-[rgba(var(--primary),0.05)] hover:text-[rgb(var(--primary))]"
                          >
                            <span className={isTablet ? 'py-2 px-3.5 text-[13px]' : 'py-2.5 px-4 text-sm'}>{item.label}</span>
                            {item.badge && <span className="text-[10px] py-0.5 px-1.5 bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))] text-white rounded-full font-semibold mr-2">{item.badge}</span>}
                            {item.new && <span className="text-[9px] py-0.5 px-1.5 bg-[rgba(var(--accent),0.2)] text-[rgb(var(--accent))] rounded-full font-bold uppercase mr-2">New</span>}
                          </button>
                        ))}
                      </div>
                    </div>
                  )
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`nav-link relative ${isActive ? 'text-[rgb(var(--primary))] bg-[rgba(var(--primary),0.08)]' : 'text-[rgb(var(--text-secondary))]'} font-medium ${isTablet ? 'text-[13px] px-3 py-1.5' : 'text-sm px-4 py-2'} rounded-lg transition-all duration-200 cursor-pointer flex items-center gap-1.5 md:gap-2 whitespace-nowrap`}
                  >
                    {link.icon}
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))] rounded-full"></span>
                    )}
                  </Link>
                )
              })}
            </div>

            {/* Desktop CTA */}
            <div className={`${isDesktop ? 'flex' : 'hidden'} gap-3 items-center`}>
              <button 
                onClick={() => router.push('/get-started')}
                className="btn-primary inline-flex items-center gap-2 bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--primary-light))] text-white font-semibold rounded-xl shadow-[0_2px_8px_rgba(var(--primary),0.2)] whitespace-nowrap transition-all duration-300 py-2.5 px-6 text-sm"
              >
                Get Started
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12H19M19 12L13 6M19 12L13 18" />
                </svg>
              </button>
            </div>

            {/* Mobile Menu Button - Hamburger */}
            <button
              className={`${isDesktop ? 'hidden' : 'flex'} items-center justify-center bg-[rgba(var(--border),0.2)] border border-[rgba(var(--border),0.5)] cursor-pointer rounded-xl text-[rgb(var(--text))] transition-all duration-200 z-50 ${isMobile ? 'p-2.5' : 'p-3'}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {isOpen ? (
                  <path d="M6 18L18 6M6 6L18 18" />
                ) : (
                  <path d="M4 6H20M4 12H20M4 18H20" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Separate from navbar */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-all duration-300 z-50"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Menu - Separate from navbar with higher z-index */}
      <div
        className={`fixed top-0 right-0 bottom-0 ${isMobile ? 'w-[85%]' : 'w-[400px]'} bg-[rgba(var(--bg),0.98)] backdrop-blur-[20px] transition-all duration-300 ease-in-out z-50 overflow-y-auto shadow-[-4px_0_20px_rgba(0,0,0,0.1)] ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className={`flex flex-col gap-2 ${isMobile ? 'p-5 pt-20' : 'p-6 pt-24'}`}>
          {/* Close button inside menu */}
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 p-2 rounded-lg bg-[rgba(var(--border),0.2)] text-[rgb(var(--text))] z-50"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 18L18 6M6 6L18 18" />
            </svg>
          </button>

          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname?.startsWith(link.href + '/')
            const hasDropdown = link.dropdown && link.dropdown.length > 0
            const isDropdownOpen = mobileDropdownState === link.href

            return (
              <div key={link.href}>
                <div
                  className={`mobile-nav-link flex items-center gap-3 rounded-xl cursor-pointer transition-all duration-200 ${isActive
                      ? 'text-[rgb(var(--primary))] bg-[rgba(var(--primary),0.1)]'
                      : 'text-[rgb(var(--text-secondary))] bg-transparent'
                    } ${isMobile ? 'py-3 px-3.5 text-[15px]' : 'py-3.5 px-4 text-base'} font-medium`}
                  onClick={() => handleMobileLinkClick(link)}
                >
                  {link.icon}
                  {link.label}
                  {hasDropdown && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`ml-auto transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}>
                      <path d="M6 9L12 15L18 9" />
                    </svg>
                  )}
                </div>

                {hasDropdown && (
                  <div className={`flex flex-col gap-1 overflow-hidden transition-all duration-300 ${isDropdownOpen ? 'max-h-[300px]' : 'max-h-0'}`} style={{ paddingLeft: isMobile ? 40 : 48 }}>
                    {link.dropdown.map((item) => (
                      <button
                        key={item.href}
                        onClick={() => handleMobileDropdownClick(item.href)}
                        className={`flex justify-between items-center text-[rgb(var(--text-secondary))] transition-all duration-200 w-full text-left ${isMobile ? 'py-2.5 px-3.5 text-[15px]' : 'py-2.5 px-4 text-sm'}`}
                        style={{ paddingLeft: isMobile ? 40 : 48 }}
                      >
                        <span>{item.label}</span>
                        {item.badge && <span className="text-[10px] py-0.5 px-1.5 bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--accent))] text-white rounded-full font-semibold">{item.badge}</span>}
                        {item.new && <span className="text-[9px] py-0.5 px-1.5 bg-[rgba(var(--accent),0.2)] text-[rgb(var(--accent))] rounded-full font-bold uppercase">New</span>}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
          <button
            className="mobile-btn-primary w-full py-3.5 md:py-4 px-4 bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--primary-light))] text-white font-semibold rounded-xl text-center transition-all duration-300 mt-4"
            onClick={() => {
              setIsOpen(false)
              router.push('/get-started')
            }}
          >
            Get Started
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="inline-block ml-2">
              <path d="M5 12H19M19 12L13 6M19 12L13 18" />
            </svg>
          </button>
        </div>
      </div>

      <div className={`${isMobile ? 'h-16' : 'h-20'}`} />
    </>
  )
}