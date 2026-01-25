const FloatingButtons = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      <a onClick={scrollToContact} className="floating-join-btn" style={{ cursor: 'pointer' }}>
        <i className="fas fa-bolt"></i> Join Now
      </a>
      <a href="https://wa.me/YOUR_PHONE_NUMBER" target="_blank" rel="noopener noreferrer" className="whatsapp-btn" title="Chat with us on WhatsApp">
        <i className="fab fa-whatsapp"></i>
      </a>
    </>
  )
}

export default FloatingButtons
