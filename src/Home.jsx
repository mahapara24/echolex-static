import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const logoImage = '/images/logo.png'

function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navigate = useNavigate()

  const handlePolicyLink = (path) => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    navigate(path)
  }

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
            <li><a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
            <li><a href="#features" onClick={() => setIsMobileMenuOpen(false)}>Features</a></li>
            <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a></li>
            <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-background">
          <div className="hero-gradient-orb orb-1"></div>
          <div className="hero-gradient-orb orb-2"></div>
          <div className="hero-gradient-orb orb-3"></div>
        </div>
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-logo">
              <div className="logo-glow"></div>
              <img src={logoImage} alt="Echolex Logo" className="logo-img hero-logo-img" />
            </div>
            <h1 className="hero-title">
              <span className="title-main">ECHOLEX</span>
            </h1>
            <div className="hero-tagline">
              <p className="hero-subtitle">Listen. Understand. Any Language.</p>
              <div className="tagline-underline"></div>
            </div>
          </div>
          <div className="hero-right">
            <p className="hero-description">
              This is Echolex. An ocean of knowledge, spoken in any language. This is how we make stories borderless.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => {
                  const ctaSection = document.querySelector('.cta')
                  if (ctaSection) {
                    ctaSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                <span>Get Started</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="btn btn-secondary">Learn More</button>
            </div>
            <div className="hero-languages">
              <span className="language-badge">🇺🇸 English</span>
              <span className="language-badge">🇮🇳 Hindi</span>
              <span className="language-badge">🇵🇰 Urdu</span>
            </div>
          </div>
        </div>
        <div className="hero-wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z" fill="#151c22" />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2 className="section-title">Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🌍</div>
              <h3>Books in Every Language</h3>
              <p>Access a vast library of books available in multiple languages. Discover stories from around the world in English, Hindi, Urdu, and more.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎙️</div>
              <h3>Human Narrated Audio</h3>
              <p>All audiobooks are narrated by real people, ensuring natural and engaging storytelling that brings every story to life.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h3>Diverse Collection</h3>
              <p>Explore thousands of books across all genres—fiction, non-fiction, classics, and contemporary works—in your preferred language.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Smart Playback</h3>
              <p>Adjust playback speed, set sleep timers, and bookmark your favorite moments. Your listening, your way.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔊</div>
              <h3>High-Quality Audio</h3>
              <p>Professional recording and audio processing ensure crystal-clear narration for the best listening experience, every time.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎧</div>
              <h3>Offline Listening</h3>
              <p>Download your favorite books and listen anywhere, anytime, even without an internet connection. Perfect for commutes and travel.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">About Echolex</h2>
              <p>
                Echolex is an ocean of knowledge, spoken in any language. We've built a platform 
                that makes stories borderless, bringing you books narrated by real people in 
                multiple languages.
              </p>
              <p>
                Our mission is simple: help you access knowledge and stories from around the world 
                in your preferred language. Every audiobook is carefully narrated by professional 
                voice artists, ensuring natural and engaging storytelling that captures the essence 
                of each story.
              </p>
              <div className="stats">
                <div className="stat">
                  <div className="stat-number">50K+</div>
                  <div className="stat-label">Happy Customers</div>
                </div>
                <div className="stat">
                  <div className="stat-number">98%</div>
                  <div className="stat-label">Satisfaction Rate</div>
                </div>
                <div className="stat">
                  <div className="stat-number">4.9★</div>
                  <div className="stat-label">Average Rating</div>
                </div>
              </div>
            </div>
            <div className="about-visual">
              <div className="visual-box">
                <img src={logoImage} alt="Echolex Logo" className="logo-img about-logo-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="reviews">
        <div className="container">
          <h2 className="section-title">What Our Users Say</h2>
          <p className="reviews-subtitle">Join thousands of satisfied users discovering stories in multiple languages</p>
          <div className="reviews-grid">
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">
                "Echolex has completely transformed how I access books. The human-narrated audio in multiple languages is incredibly natural and engaging. Best investment I've made!"
              </p>
              <div className="review-author">
                <div className="review-avatar">SM</div>
                <div className="review-info">
                  <div className="review-name">Sarah Martinez</div>
                  <div className="review-role">Business Consultant</div>
                </div>
              </div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">
                "As someone who loves stories from different cultures, Echolex is a game-changer. I can now enjoy books in multiple languages, all narrated beautifully by real people. It's like having a personal library in every language!"
              </p>
              <div className="review-author">
                <div className="review-avatar">JK</div>
                <div className="review-info">
                  <div className="review-name">James Kim</div>
                  <div className="review-role">Travel Blogger</div>
                </div>
              </div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">
                "The quality of narration is impressive. I listen to books daily in different languages, and the human narrators bring each story to life beautifully."
              </p>
              <div className="review-author">
                <div className="review-avatar">AL</div>
                <div className="review-info">
                  <div className="review-name">Aisha Patel</div>
                  <div className="review-role">Project Manager</div>
                </div>
              </div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">
                "Echolex helped me share stories with my family in their native language. The human narration captures all the emotional nuances perfectly. Truly brings families together!"
              </p>
              <div className="review-author">
                <div className="review-avatar">MC</div>
                <div className="review-info">
                  <div className="review-name">Michael Chen</div>
                  <div className="review-role">Software Engineer</div>
                </div>
              </div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">
                "I've tried many audiobook apps, but Echolex stands out. The quality of human narration and the variety of languages available is unmatched. Highly recommend!"
              </p>
              <div className="review-author">
                <div className="review-avatar">ER</div>
                <div className="review-info">
                  <div className="review-name">Emma Rodriguez</div>
                  <div className="review-role">Language Teacher</div>
                </div>
              </div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">
                "The app is intuitive and the audiobook library is extensive. It's become an essential part of my daily routine. Can't imagine my day without it now!"
              </p>
              <div className="review-author">
                <div className="review-avatar">DT</div>
                <div className="review-info">
                  <div className="review-name">David Thompson</div>
                  <div className="review-role">Marketing Director</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Ready to Explore Stories in Any Language?</h2>
          <p>Join thousands of users discovering books in multiple languages with Echolex. Start your journey today.</p>
          <div className="cta-buttons">
            <a href="#" className="app-store-btn google-play" aria-label="Get it on Google Play">
              <img src="/images/google-play.png" alt="Google Play" className="app-store-icon" />
              <div className="app-store-text">
                <div className="app-store-label">GET IT ON</div>
                <div className="app-store-name">Google Play</div>
              </div>
            </a>
            <a href="#" className="app-store-btn app-store" aria-label="Download on the App Store">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
              </svg>
              <div className="app-store-text">
                <div className="app-store-label">Download on the</div>
                <div className="app-store-name">App Store</div>
              </div>
            </a>
          </div>
        </div>
      </section>

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
                An ocean of knowledge, spoken in any language. 
                Discover books narrated by real people in multiple languages.
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
                <li><a href="#home">Home</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
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

export default Home

