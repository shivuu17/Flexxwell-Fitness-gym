# 🏋️ FLEXXWELL FITNESS - Premium Gym Website

**A modern, high-energy fitness website with dark + neon theme**

![Flexxwell Fitness](https://img.shields.io/badge/Status-Live-success)
![Version](https://img.shields.io/badge/Version-1.0-blue)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 🎯 Overview

Flexxwell Fitness is a premium, modern gym website featuring a stunning dark theme with red and blue neon accents. The UI has been ported to **React 18 + Vite** while preserving the original HTML/CSS/JS design and interactions.

## ✨ Features

### 🎨 Design
- **Dark + Neon Theme**: Black background with red/blue neon accents
- **Glassmorphism Effects**: Modern frosted glass cards
- **Smooth Animations**: Fade-in, slide-in, and parallax effects
- **Glowing Buttons**: Hover effects with neon glow
- **Bold Typography**: Premium font combinations
- **Fully Responsive**: Mobile, tablet, and desktop optimized

### 📄 Pages/Sections

1. **Home (Hero Section)**
   - Full-screen background with gym imagery
   - Animated headline and CTA buttons
   - Live counter stats (members, trainers, years, success rate)
   - Motivational quote overlay

2. **About Us**
   - Gym story, mission, and values
   - Coach/trainer cards with photos and specializations
   - Motivational quote banners

3. **Services/Programs**
   - 8 service cards with icons:
     - Weight Training
     - Cardio Training
     - CrossFit
     - Fat Loss Program
     - Muscle Gain
     - Yoga
     - Zumba
     - Personal Training
   - "Book Session" buttons for each service
   - Service options: Online classes, Outdoor, On-site

4. **Gallery**
   - Masonry grid layout
   - Filter buttons (All, Workout Area, Machines, Trainers, Members, Events)
   - Lightbox preview with navigation
   - Motivational quote strip

5. **Membership Plans**
   - 3 pricing tiers: Basic, Pro (Most Popular), Elite
   - Feature comparison lists
   - Payment options (Google Pay, UPI, Cards, Cash)

6. **Testimonials**
   - Member review slider
   - Auto-play with manual controls
   - 5-star ratings and member photos

7. **Contact Us**
   - Contact form (Name, Phone, Email, Message)
   - Gym information (Address, Phone, WhatsApp, Email)
   - Opening hours
   - Google Maps embed
   - Facility amenities list

8. **Footer**
   - Social media links
   - Quick navigation links
   - Opening hours
   - Gym slogan: "Discipline Beats Motivation"

### 🚀 Interactive Features

- **Sticky Navbar**: Fixed navigation with scroll effect
- **Mobile Menu**: Responsive hamburger menu
- **Smooth Scrolling**: Seamless navigation
- **Animated Counters**: Stats count up on scroll
- **Gallery Filters**: Dynamic image filtering
- **Lightbox**: Full-screen image viewer with keyboard navigation
- **Testimonial Slider**: Auto-rotating reviews with manual controls
- **Floating Buttons**: 
  - "Join Now" button (bottom right)
  - WhatsApp chat button (bottom right)
- **Scroll to Top**: Quick return to top button
- **Parallax Effects**: Hero section background movement
- **Form Validation**: Contact form with basic validation

## 🛠️ Technologies Used

- **React 18** with functional components & hooks
- **Vite 5** for dev/build tooling
- **Vanilla CSS** (original design preserved)
- **Font Awesome 6.4.0** for icons
- **Google Fonts** (Bebas Neue, Montserrat, Oswald)

## 📁 File Structure

```
Flexxwell-Fitness-gym/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── components/
│       ├── common/     # Navbar, Footer, FloatingButtons, ScrollTop
│       └── sections/   # Hero, About, Services, Gallery, Plans, Testimonials, Contact
├── index-react.html    # React/Vite entry html used for dev/build
├── index.html          # Legacy static page (kept for reference)
├── public/
│   ├── dumbbell.svg    # Favicon/logo
│   └── gallery/        # Drop gallery images (served at /gallery/...)
├── legacy/
│   └── index.html      # Frozen static HTML reference (loads ../styles.css and ../script.js)
├── styles.css          # Legacy static CSS (reference only)
├── script.js           # Legacy static JS (reference only)
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run the dev server** (opens `index-react.html` automatically)
   ```bash
   npm run dev
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Preview the build**
   ```bash
   npm run preview
   ```

### Customizing Content (React)
- **Brand name & nav links**: update `src/components/Navbar.jsx`
- **Hero counters & highlights**: tweak data in `src/components/Hero.jsx`
- **Coaches**: edit the `coaches` array in `src/components/About.jsx`
- **Services**: edit the `services` array in `src/components/Services.jsx`
- **Gallery images**: drop files into `public/gallery` and point the `images` array in `src/components/Gallery.jsx` to `/gallery/<file>`
- **Plans/pricing**: edit `src/components/Plans.jsx`
- **Testimonials**: edit `src/components/Testimonials.jsx`
- **Contact info & map**: edit `src/components/Contact.jsx`
- **WhatsApp number**: update `src/components/FloatingButtons.jsx`
- **Colors & spacing**: adjust CSS variables in `src/index.css` under the `:root` block

### Deploy
- **Netlify / Vercel**: run `npm run build` and deploy the `dist/` folder
- **Static hosting**: upload `dist/` contents to your host after `npm run build`
- **GitHub Pages**: build, then deploy `dist/` to `gh-pages` (or use an action)

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Alt text for images (update as needed)
- High contrast color scheme

## 🎨 Color Palette

| Color | Hex Code | Usage |
|-------|----------|-------|
| Neon Red | `#ff0844` | Primary accent, buttons |
| Neon Blue | `#00d4ff` | Secondary accent |
| Dark BG | `#0a0a0a` | Main background |
| Dark Card | `#1a1a1a` | Card backgrounds |
| Text Primary | `#ffffff` | Main text |
| Text Secondary | `#b0b0b0` | Secondary text |

## 🔧 Customization Tips

- **Hero background & counters**: update the image URL and stats in `src/components/Hero.jsx`
- **Pricing**: edit plan amounts and features in `src/components/Plans.jsx`
- **Services**: add/remove items in the `services` array inside `src/components/Services.jsx`
- **Gallery**: add files to `public/gallery` and point `src/components/Gallery.jsx` at them
- **Animation timing**: tweak counter/testimonial intervals in `src/components/Hero.jsx` and `src/components/Testimonials.jsx`

## 📊 Performance

- Optimized CSS and JavaScript
- Lazy loading images (add `loading="lazy"` to img tags)
- Minimal external dependencies
- Fast load times

## 🐛 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📝 To-Do List

- [ ] Add your gym photos to public/gallery
- [ ] Update all placeholder text with your gym's information
- [ ] Replace phone numbers and email addresses
- [ ] Update Google Maps embed with your location
- [ ] Test contact form and implement backend (if needed)
- [ ] Add your social media links
- [ ] Optimize images for web
- [ ] Set up analytics (Google Analytics, etc.)

## 🤝 Support

For questions or issues:
- Check the code comments in each file
- Refer to the inline documentation
- Review public/gallery/README.md for image guidelines

## 📄 License

This project is open source and available for personal and commercial use.

## 🌟 Credits

- **Design**: Modern fitness industry standards
- **Icons**: Font Awesome
- **Fonts**: Google Fonts
- **Images**: Unsplash (replace with your own)

---

## 💪 Motivational Quotes Featured

- "Train Hard. Stay Strong."
- "The only bad workout is the one that didn't happen."
- "Success isn't always about greatness. It's about consistency."
- "Your body can stand almost anything. It's your mind you have to convince."
- "No Pain. No Gain."
- "Start Today. Not Tomorrow."
- "Discipline Beats Motivation."

---

**Built with 💪 for Flexxwell Fitness**

*Transform Your Body. Transform Your Life.*