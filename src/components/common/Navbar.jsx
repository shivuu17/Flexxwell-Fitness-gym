import { useEffect, useRef, useState } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollingUp, setScrollingUp] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    lastScrollY.current = window.scrollY
    const handleScroll = () => {
      const currentY = window.scrollY
      setScrolled(currentY > 100)

      if (currentY !== lastScrollY.current) {
        setScrollingUp(currentY < lastScrollY.current)
        lastScrollY.current = currentY
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
          <i className={`fas fa-dumbbell ${scrollingUp ? 'dumbbell-rotate-half' : ''}`}></i>
          <span>SK Body-First-Gym</span>
        </div>
        <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <span className="nav-link" onClick={() => scrollToSection('home')}>Home</span>
          <span className="nav-link" onClick={() => scrollToSection('about')}>About</span>
          <span className="nav-link" onClick={() => scrollToSection('services')}>Services</span>
          <span className="nav-link" onClick={() => scrollToSection('gallery')}>Gallery</span>
          <span className="nav-link" onClick={() => scrollToSection('plans')}>Plans</span>
          <span className="nav-link" onClick={() => scrollToSection('contact')}>Contact</span>
          <button className="cta-btn" onClick={() => scrollToSection('contact')}>Join Now</button>
        </div>
        <div 
          className={`hamburger ${menuOpen ? 'active' : ''}`} 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
