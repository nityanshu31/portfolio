'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '/features' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'API', href: '/api' },
        { label: 'Documentation', href: '/docs' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Blog', href: '/blog' },
        { label: 'Careers', href: '/careers' },
        { label: 'Press', href: '/press' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Community', href: '/community' },
        { label: 'Support', href: '/support' },
        { label: 'Status', href: '/status' },
        { label: 'Security', href: '/security' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy', href: '/privacy' },
        { label: 'Terms', href: '/terms' },
        { label: 'Cookie Policy', href: '/cookies' },
        { label: 'Licenses', href: '/licenses' },
      ],
    },
  ]

  const socialLinks = [
    {
      name: 'Twitter',
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
      href: 'https://twitter.com',
    },
    {
      name: 'GitHub',
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
      href: 'https://github.com',
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      href: 'https://linkedin.com',
    },
  ]

  const footerStyle = {
    background: 'rgb(var(--bg))',
    borderTop: '1px solid rgba(var(--border), 0.5)',
    marginTop: 'auto',
  }

  const containerStyle = {
    maxWidth: 1280,
    margin: '0 auto',
    padding: '64px 32px 32px',
  }

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr',
    gap: 32,
    marginBottom: 48,
  }

  const brandStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  }

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    textDecoration: 'none',
    transition: 'transform 0.2s ease',
  }

  const logoIconStyle = {
    width: 40,
    height: 40,
    background: 'linear-gradient(135deg, rgb(var(--primary)), rgb(var(--primary-light)))',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  }

  const logoTextStyle = {
    fontSize: 20,
    fontWeight: 700,
    background: 'linear-gradient(135deg, rgb(var(--text)), rgb(var(--text-secondary)))',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
  }

  const descriptionStyle = {
    color: 'rgb(var(--text-secondary))',
    lineHeight: 1.6,
    fontSize: 14,
  }

  const socialStyle = {
    display: 'flex',
    gap: 16,
  }

  const socialLinkStyle = {
    width: 36,
    height: 36,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    background: 'rgba(var(--border), 0.2)',
    color: 'rgb(var(--text-secondary))',
    transition: 'all 0.2s ease',
    cursor: 'pointer',
  }

  const sectionTitleStyle = {
    fontSize: 14,
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    color: 'rgb(var(--text))',
    marginBottom: 20,
  }

  const linksStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  }

  const linkStyle = {
    color: 'rgb(var(--text-secondary))',
    textDecoration: 'none',
    fontSize: 14,
    transition: 'color 0.2s ease',
    cursor: 'pointer',
  }

  const newsletterStyle = {
    padding: '32px 0',
    marginBottom: 32,
    borderTop: '1px solid rgba(var(--border), 0.5)',
    borderBottom: '1px solid rgba(var(--border), 0.5)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 32,
    flexWrap: 'wrap',
  }

  const newsletterContentStyle = {
    flex: 1,
  }

  const newsletterTitleStyle = {
    fontSize: 16,
    fontWeight: 600,
    color: 'rgb(var(--text))',
    marginBottom: 8,
  }

  const newsletterDescStyle = {
    fontSize: 14,
    color: 'rgb(var(--text-muted))',
  }

  const formStyle = {
    display: 'flex',
    gap: 12,
    minWidth: 300,
  }

  const inputStyle = {
    flex: 1,
    padding: '12px 16px',
    border: '1px solid rgba(var(--border), 0.8)',
    borderRadius: 8,
    background: 'white',
    color: 'rgb(var(--text))',
    fontSize: 14,
    transition: 'all 0.2s ease',
  }

  const buttonStyle = {
    padding: '12px 24px',
    background: 'rgb(var(--primary))',
    color: 'white',
    border: 'none',
    borderRadius: 8,
    fontWeight: 600,
    fontSize: 14,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    whiteSpace: 'nowrap',
  }

  const bottomStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 32,
    flexWrap: 'wrap',
    gap: 16,
  }

  const copyrightStyle = {
    fontSize: 12,
    color: 'rgb(var(--text-muted))',
  }

  const bottomLinksStyle = {
    display: 'flex',
    gap: 32,
  }

  const bottomLinkStyle = {
    fontSize: 12,
    color: 'rgb(var(--text-muted))',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
    cursor: 'pointer',
  }

  return (
    <>
      <style jsx global>{`
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1.5fr 1fr 1fr !important;
            gap: 32px !important;
          }
          .newsletter-form {
            min-width: 300px !important;
          }
        }
        
        @media (max-width: 768px) {
          .footer-container {
            padding: 48px 24px 24px !important;
          }
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .newsletter-form {
            width: 100% !important;
            flex-direction: column !important;
          }
          .footer-bottom {
            flex-direction: column !important;
            text-align: center !important;
          }
        }
        
        .footer-logo:hover {
          transform: scale(1.02) !important;
        }
        
        .footer-social-link:hover {
          background: rgb(var(--primary)) !important;
          color: white !important;
          transform: translateY(-2px) !important;
        }
        
        .footer-link:hover {
          color: rgb(var(--primary)) !important;
        }
        
        .newsletter-input:focus {
          outline: none !important;
          border-color: rgb(var(--primary)) !important;
          box-shadow: 0 0 0 3px rgba(var(--primary), 0.1) !important;
        }
        
        .newsletter-button:hover {
          background: rgb(var(--primary-light)) !important;
          transform: translateY(-1px) !important;
        }
        
        .footer-bottom-link:hover {
          color: rgb(var(--primary)) !important;
        }
      `}</style>
      
      <footer style={footerStyle}>
        <div className="footer-container" style={containerStyle}>
          {/* Main Footer Content */}
          <div className="footer-grid" style={gridStyle}>
            {/* Brand Section */}
            <div style={brandStyle}>
              <Link href="/" className="footer-logo" style={logoStyle}>
                <div style={logoIconStyle}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span style={logoTextStyle}>Centrionyx</span>
              </Link>
              <p style={descriptionStyle}>
                Transforming ideas into exceptional digital experiences. 
                Building the future with cutting-edge technology and innovative solutions.
              </p>
              <div style={socialStyle}>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link"
                    style={socialLinkStyle}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Links Sections */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 style={sectionTitleStyle}>{section.title}</h3>
                <ul style={linksStyle}>
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="footer-link" style={linkStyle}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Section */}
          <div style={newsletterStyle}>
            <div style={newsletterContentStyle}>
              <h3 style={newsletterTitleStyle}>Subscribe to our newsletter</h3>
              <p style={newsletterDescStyle}>
                Get the latest updates about product features and company news.
              </p>
            </div>
            <form className="newsletter-form" style={formStyle} onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
                style={inputStyle}
                required
              />
              <button type="submit" className="newsletter-button" style={buttonStyle}>
                Subscribe
                <svg style={{ width: 16, height: 16 }} viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom" style={bottomStyle}>
            <p style={copyrightStyle}>
              © {currentYear} Centrionyx. All rights reserved.
            </p>
            <div style={bottomLinksStyle}>
              <Link href="/privacy" className="footer-bottom-link" style={bottomLinkStyle}>
                Privacy Policy
              </Link>
              <Link href="/terms" className="footer-bottom-link" style={bottomLinkStyle}>
                Terms of Service
              </Link>
              <Link href="/cookies" className="footer-bottom-link" style={bottomLinkStyle}>
                Cookie Settings
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}