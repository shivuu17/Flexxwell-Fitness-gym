import { useEffect, useState } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setScrolled(currentY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
      setMenuOpen(false)
    }
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo">
          <img src="/dumbell.png" alt="SK Body First Gym logo" className="logo-img" />
          <span>SK Body-First-Gym</span>
        </div>
        <div className="nav-right">
          <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <span className="nav-link" onClick={() => scrollToSection('home')}>Home</span>
            <span className="nav-link" onClick={() => scrollToSection('about')}>About</span>
            <span className="nav-link" onClick={() => scrollToSection('services')}>Services</span>
            <span className="nav-link" onClick={() => scrollToSection('gallery')}>Gallery</span>
            <span className="nav-link" onClick={() => scrollToSection('plans')}>Plans</span>
            <span className="nav-link" onClick={() => scrollToSection('contact')}>Contact</span>
            <button className="cta-btn" onClick={() => scrollToSection('contact')}>Join Now</button>
          </div>
          <button className="cta-btn mobile-join-btn" onClick={() => scrollToSection('contact')}>Join Now</button>
          <div
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
