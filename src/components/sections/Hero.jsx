const Hero = () => {
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
    </section>
  )
}

export default Hero
