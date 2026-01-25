import { useState, useEffect, useRef } from 'react'

const Hero = () => {
  const [counts, setCounts] = useState({
    members: 0,
    trainers: 0,
    years: 0,
    success: 0
  })
  const [hasAnimated, setHasAnimated] = useState(false)
  const statsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          animateCounters()
          setHasAnimated(true)
        }
      },
      { threshold: 0.5 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  const animateCounters = () => {
    const targets = { members: 5000, trainers: 50, years: 12, success: 100 }
    const duration = 2000
    const steps = 60

    Object.keys(targets).forEach((key) => {
      const increment = targets[key] / steps
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= targets[key]) {
          setCounts(prev => ({ ...prev, [key]: targets[key] }))
          clearInterval(timer)
        } else {
          setCounts(prev => ({ ...prev, [key]: Math.floor(current) }))
        }
      }, duration / steps)
    })
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-video-overlay"></div>
      <div className="hero-bg">
        <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920" alt="Gym Background" />
      </div>
      <div className="hero-content">
        <div className="hero-text">
          <div className="quote-accent">"Train Hard. Stay Strong."</div>
          <h1 className="hero-title">
            UNLEASH YOUR<br />
            <span className="neon-text">INNER POWER</span>
          </h1>
          <p className="hero-subtitle">Transform Your Body. Transform Your Life.</p>
          <div className="hero-highlights">
            <span>Strength</span>
            <span>•</span>
            <span>Cardio</span>
            <span>•</span>
            <span>CrossFit</span>
            <span>•</span>
            <span>Personal Training</span>
          </div>
          <div className="hero-buttons">
            <button className="btn btn-primary glow-btn" onClick={() => scrollToSection('contact')}>
              <i className="fas fa-bolt"></i> Join Now
            </button>
            <button className="btn btn-secondary" onClick={() => scrollToSection('plans')}>
              <i className="fas fa-gift"></i> Free Trial
            </button>
            <button className="btn btn-outline" onClick={() => scrollToSection('gallery')}>
              <i className="fas fa-images"></i> View Gallery
            </button>
          </div>
        </div>
        <div className="hero-quote-overlay">
          "The only bad workout is the one that didn't happen."
        </div>
      </div>

      <div className="stats-counter" ref={statsRef}>
        <div className="stat-item">
          <div className="stat-number">{counts.members}</div>
          <div className="stat-label">Active Members</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{counts.trainers}</div>
          <div className="stat-label">Expert Trainers</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{counts.years}</div>
          <div className="stat-label">Years Experience</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{counts.success}</div>
          <div className="stat-label">Success Rate %</div>
        </div>
      </div>
    </section>
  )
}

export default Hero
