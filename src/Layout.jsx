import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

const logoImage = '/images/logo.png'

const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const handleHashLink = (hash) => {
    navigate('/')
    setTimeout(() => {
      const element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  const handlePolicyLink = (path) => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    navigate(path)
  }

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) return // Don't hide navbar when mobile menu is open
      
      const currentScrollY = window.scrollY
      
      if (currentScrollY < 10) {
        setIsScrolled(false)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsScrolled(true)
      } else if (currentScrollY < lastScrollY) {
        setIsScrolled(false)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY, isMobileMenuOpen])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`navbar ${isScrolled && !isMobileMenuOpen ? 'navbar-hidden' : ''}`}>
        <div 
          className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
        <div className="nav-container">
          <Link to="/" className="nav-logo" onClick={() => setIsMobileMenuOpen(false)}>
            <img src={logoImage} alt="Echolex Logo" className="logo-img nav-logo-img" />
            <span className="logo-text">ECHOLEX</span>
          </Link>
          <button 
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={`nav-menu ${isMobileMenuOpen ? 'nav-menu-open' : ''}`}>
            <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); handleHashLink('#features'); }}>Features</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); handleHashLink('#about'); }}>About</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); handleHashLink('#contact'); }}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      {children}

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="footer-top-wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 Q300,40 600,20 T1200,40 L1200,120 L0,120 Z" fill="var(--darker-gray)" />
          </svg>
        </div>
        <div className="container">
          <div className="footer-content">
            <div className="footer-section footer-brand">
              <div className="footer-logo">
                <img src={logoImage} alt="Echolex Logo" className="logo-img footer-logo-img" />
                <span className="logo-text">ECHOLEX</span>
              </div>
              <p className="footer-tagline">Listen. Understand. Any Language.</p>
              <p className="footer-description">
                Breaking down language barriers with cutting-edge AI technology. 
                Connect with the world in any language, anywhere, anytime.
              </p>
              <div className="social-links">
                <a href="#" className="social-link social-facebook" aria-label="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
                <a href="#" className="social-link social-twitter" aria-label="Twitter">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                  </svg>
                </a>
                <a href="#" className="social-link social-instagram" aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
                <a href="#" className="social-link social-linkedin" aria-label="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); handleHashLink('#features'); }}>Features</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); handleHashLink('#about'); }}>About</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); handleHashLink('#contact'); }}>Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Product</h4>
              <ul>
                <li><a href="#">How It Works</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Languages</a></li>
                <li><a href="#">API</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <ul>
                <li>
                  <span className="contact-icon">📧</span>
                  <a href="mailto:info@echolex.com">info@echolex.com</a>
                </li>
                <li>
                  <span className="contact-icon">📞</span>
                  <a href="tel:+15551234567">+1 (555) 123-4567</a>
                </li>
                <li>
                  <span className="contact-icon">📍</span>
                  <span>123 Audio St, Sound City</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p>&copy; 2024 Echolex. All rights reserved.</p>
              <div className="footer-legal">
                <a href="#" onClick={(e) => { e.preventDefault(); handlePolicyLink('/privacy-policy'); }}>Privacy Policy</a>
                <span className="separator">|</span>
                <a href="#" onClick={(e) => { e.preventDefault(); handlePolicyLink('/terms-of-service'); }}>Terms of Service</a>
                <span className="separator">|</span>
                <a href="#" onClick={(e) => { e.preventDefault(); handlePolicyLink('/cookie-policy'); }}>Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout

