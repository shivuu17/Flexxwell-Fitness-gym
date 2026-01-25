import { useState, useEffect } from 'react'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const testimonials = [
    { text: "Flexxwell transformed my life! I lost 25kg in 6 months. The trainers are incredibly supportive and the community is amazing. Best decision I ever made!", author: "Amit Verma", role: "Weight Loss Journey", image: "https://i.pravatar.cc/150?img=12" },
    { text: "The personal training sessions are worth every penny. My trainer understood my goals and created a perfect plan. I've gained 8kg of muscle and feel stronger than ever!", author: "Rahul Khanna", role: "Muscle Gain Program", image: "https://i.pravatar.cc/150?img=33" },
    { text: "As someone new to fitness, I was nervous. But the inclusive and welcoming environment at Flexxwell made me feel at home immediately. The yoga classes are my favorite!", author: "Sneha Reddy", role: "Yoga & Wellness", image: "https://i.pravatar.cc/150?img=45" },
    { text: "The CrossFit program here is intense but incredibly effective. I've improved my endurance and strength dramatically. The coaches push you to your limits in the best way possible!", author: "Vikram Singh", role: "CrossFit Enthusiast", image: "https://i.pravatar.cc/150?img=68" },
    { text: "The Zumba classes are so much fun! I never thought I could enjoy working out this much. Lost weight while dancing - what more could I ask for?", author: "Pooja Mehta", role: "Zumba Regular", image: "https://i.pravatar.cc/150?img=20" }
  ]

  useEffect(() => {
    const interval = setInterval(() => setCurrentIndex((prev) => (prev + 1) % testimonials.length), 5000)
    return () => clearInterval(interval)
  }, [currentIndex])

  const nextTestimonial = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  const prevTestimonial = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  const goToTestimonial = (index) => setCurrentIndex(index)

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Success Stories</span>
          <h2 className="section-title">WHAT OUR <span className="neon-text">MEMBERS SAY</span></h2>
          <div className="title-underline"></div>
        </div>

        <div className="testimonial-quote-bg">
          <i className="fas fa-quote-left"></i>
          <p>"No Pain. No Gain."</p>
          <i className="fas fa-quote-right"></i>
        </div>

        <div className="testimonials-slider">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`testimonial-card glass-card ${index === currentIndex ? 'active' : ''}`}>
              <div className="stars">{[...Array(5)].map((_, i) => (<i key={i} className="fas fa-star"></i>))}</div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <img src={testimonial.image} alt={testimonial.author} />
                <div>
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="slider-nav">
          <button className="slider-btn prev-btn" onClick={prevTestimonial}><i className="fas fa-chevron-left"></i></button>
          <div className="slider-dots">
            {testimonials.map((_, index) => (
              <span key={index} className={`dot ${index === currentIndex ? 'active' : ''}`} onClick={() => goToTestimonial(index)}></span>
            ))}
          </div>
          <button className="slider-btn next-btn" onClick={nextTestimonial}><i className="fas fa-chevron-right"></i></button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
