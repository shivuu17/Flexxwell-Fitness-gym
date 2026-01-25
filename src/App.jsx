import { useState, useEffect } from 'react'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import FloatingButtons from './components/common/FloatingButtons'
import ScrollTop from './components/common/ScrollTop'

import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Gallery from './components/sections/Gallery'
import Plans from './components/sections/Plans'
import Testimonials from './components/sections/Testimonials'
import Contact from './components/sections/Contact'

function App() {
  return (
    <div className="App">
      <Navbar />
      <FloatingButtons />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Plans />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollTop />
    </div>
  )
}

export default App
