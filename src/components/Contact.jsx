import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Thank you, ${formData.name}! We've received your message and will contact you soon at ${formData.phone} or ${formData.email}.`)
    setFormData({ name: '', phone: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">CONTACT <span className="neon-text">US</span></h2>
          <div className="title-underline"></div>
        </div>

        <div className="contact-quote">
          <i className="fas fa-quote-left"></i>
          <p>"Start Today. Not Tomorrow."</p>
          <i className="fas fa-quote-right"></i>
        </div>

        <div className="contact-content">
          <div className="contact-form-container glass-card">
            <h3>Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name"><i className="fas fa-user"></i> Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone"><i className="fas fa-phone"></i> Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Your phone number"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email"><i className="fas fa-envelope"></i> Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message"><i className="fas fa-comment"></i> Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                  placeholder="Tell us about your fitness goals..."
                ></textarea>
              </div>
              <button type="submit" className="submit-btn glow-btn">
                <i className="fas fa-paper-plane"></i> Send Message
              </button>
            </form>
          </div>

          <div className="contact-info-container">
            <div className="contact-info glass-card">
              <h3>Visit Us</h3>
              <div className="info-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h4>Address</h4>
                  <p>123 Fitness Street, MG Road<br />Bangalore, Karnataka 560001</p>
                </div>
              </div>
              <div className="info-item">
                <i className="fas fa-phone"></i>
                <div>
                  <h4>Phone</h4>
                  <p>+91 98765 43210</p>
                </div>
              </div>
              <div className="info-item">
                <i className="fab fa-whatsapp"></i>
                <div>
                  <h4>WhatsApp</h4>
                  <p>+91 98765 43210</p>
                </div>
              </div>
              <div className="info-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h4>Email</h4>
                  <p>info@flexxwellfitness.com</p>
                </div>
              </div>
              <div className="info-item">
                <i className="fas fa-clock"></i>
                <div>
                  <h4>Opening Hours</h4>
                  <p>Mon - Sat: 5:00 AM - 11:00 PM<br />Sunday: 6:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>

            <div className="amenities-info glass-card">
              <h3>Facilities</h3>
              <div className="amenities-list">
                <div className="amenity"><i className="fas fa-wifi"></i> Free WiFi</div>
                <div className="amenity"><i className="fas fa-parking"></i> Free Parking</div>
                <div className="amenity"><i className="fas fa-restroom"></i> Clean Restrooms</div>
                <div className="amenity"><i className="fas fa-lock"></i> Secure Lockers</div>
                <div className="amenity"><i className="fas fa-shower"></i> Shower Facilities</div>
                <div className="amenity"><i className="fas fa-water"></i> Water Station</div>
              </div>
            </div>
          </div>
        </div>

        <div className="map-container glass-card">
          <h3><i className="fas fa-map"></i> Find Us on Map</h3>
          <div className="map-wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10159.116979502023!2d77.34494371666256!3d28.55540136361657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce59294364cb3%3A0x7f339823d97ef392!2sPower%20point%20unisex%20gym!5e0!3m2!1sen!2sin!4v1769350783116!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
