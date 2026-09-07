import React, { useEffect, useMemo, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import {
  ArrowRight,
  Box,
  Building2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Container,
  FileCheck2,
  Globe2,
  Mail,
  MapPin,
  Menu,
  PackageCheck,
  Phone,
  Plane,
  Quote,
  ShieldCheck,
  Ship,
  Sparkles,
  Truck,
  Warehouse,
  X,
  Zap,
} from 'lucide-react'
import './styles.css'

const ASSETS = {
  logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/353438915_279887674517898_1335444058489410789_n-Nrl1ceP4porG99E8y4ByU1UMhR1sLk.jpg',
  hero: 'https://www.gbologistics.com/container-ship-at-port-with-cargo-containers.jpg',
  founder: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ghinwa-IbRKSOUdCpaTTjxUfsM0Ra0IYjAsTv.png',
  office: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gbo-logistics-3JyCcfBuKcENyD54PcQxA3sITaXryQ.jpeg',
  air: 'https://www.gbologistics.com/cargo-airplane-loading-freight-at-airport.jpg',
  sea: 'https://www.gbologistics.com/container-ship-at-port-with-cargo-containers.jpg',
  warehouse: 'https://www.gbologistics.com/modern-warehouse-with-organized-inventory.jpg',
  customs: 'https://www.gbologistics.com/customs-documents-stamps-and-paperwork-on-desk-no-.jpg',
  heavy: 'https://www.gbologistics.com/heavy-construction-equipment-on-flatbed-truck.jpg',
  flatRack: 'https://www.gbologistics.com/flat-rack-shipping-container-with-heavy-equipment.jpg',
  glass: 'https://www.gbologistics.com/glass-panels-being-carefully-loaded-for-shipping.jpg',
}

const services = [
  {
    title: 'Air Freight',
    text: 'Fast international air-cargo solutions for urgent and high-value shipments, supported by shipment visibility and dependable coordination.',
    image: ASSETS.air,
    icon: Plane,
  },
  {
    title: 'Sea Freight',
    text: 'Flexible ocean-freight options for FCL and LCL cargo, planned around your route, schedule, budget, and shipment requirements.',
    image: ASSETS.sea,
    icon: Ship,
  },
  {
    title: 'Warehousing & Distribution',
    text: 'Secure storage and organized distribution support designed to keep inventory moving efficiently through the supply chain.',
    image: ASSETS.warehouse,
    icon: Warehouse,
  },
  {
    title: 'Customs Clearance',
    text: 'Practical customs and documentation support to reduce friction and help international shipments move compliantly and efficiently.',
    image: ASSETS.customs,
    icon: FileCheck2,
  },
]

const specializations = [
  {
    title: 'Heavy Equipment',
    text: 'Planning, handling, and transportation for heavy machinery, construction equipment, oversized loads, and challenging cargo.',
    image: ASSETS.heavy,
    icon: Truck,
  },
  {
    title: 'Flat Rack & Open Top',
    text: 'Special-container planning for cargo that exceeds standard container dimensions, including machinery and tall or oversized loads.',
    image: ASSETS.flatRack,
    icon: Container,
  },
  {
    title: 'Glass & Fragile Cargo',
    text: 'Careful coordination for glass, mirrors, and fragile materials, with suitable securing, packaging, and handling arrangements.',
    image: ASSETS.glass,
    icon: ShieldCheck,
  },
]

const industries = [
  ['Construction & Heavy Machinery', Truck],
  ['Retail & E-commerce', PackageCheck],
  ['Technology & Electronics', Zap],
  ['Pharmaceuticals & Healthcare', ShieldCheck],
  ['Manufacturing & Industrial', Building2],
  ['Fashion & Apparel', Box],
]

const process = [
  ['01', 'Request a Quote', 'Send your shipment details and requirements so the team can prepare the most suitable routing and commercial offer.', Quote],
  ['02', 'Documentation & Planning', 'The shipment plan, paperwork, routing, and customs requirements are coordinated before cargo movement.', FileCheck2],
  ['03', 'Transportation & Tracking', 'Cargo moves through GBO Logistics’ international network with ongoing shipment updates and coordination.', Globe2],
  ['04', 'Delivery & Confirmation', 'The shipment reaches destination with delivery coordination and supporting documentation completed.', PackageCheck],
]

const testimonials = [
  {
    text: 'Responsive communication, careful coordination, and practical freight solutions make the shipping process much easier to manage.',
    name: 'International Trading Client',
    role: 'Supply Chain Management',
  },
  {
    text: 'Their customs and documentation support helps keep shipments organized and reduces avoidable delays during import and export operations.',
    name: 'Regional Importer',
    role: 'Operations',
  },
  {
    text: 'A strong choice when the cargo is unusual, oversized, fragile, or needs more attention than a standard shipment.',
    name: 'Special Cargo Client',
    role: 'Logistics Coordination',
  },
]

const partnerNames = [
  'Magenta Logistics Network',
  'ALNA',
  'Seajet Logistics Network',
  'Frontline Freight',
  'JC Trans',
  'OLO Network',
  'GLA',
]

const navItems = [
  ['About', '#about'],
  ['Services', '#services'],
  ['Specialization', '#specialization'],
  ['Global Reach', '#global'],
  ['Contact', '#contact'],
]

const reveal = {
  hidden: { opacity: 0, y: 42 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

function SectionHeading({ eyebrow, title, text, center = false, light = false }) {
  return (
    <motion.div
      className={`section-heading ${center ? 'center' : ''} ${light ? 'light' : ''}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={reveal}
    >
      <span className="eyebrow"><Sparkles size={15} /> {eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </motion.div>
  )
}

function Counter({ value, suffix = '', label }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.7 })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf
    const duration = 1200
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setCount(Math.round(value * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  return (
    <div className="counter" ref={ref}>
      <strong>{count.toLocaleString()}{suffix}</strong>
      <span>{label}</span>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [testimonial, setTestimonial] = useState(0)
  const [heroIndex, setHeroIndex] = useState(0)
  const heroImages = useMemo(() => [ASSETS.hero, ASSETS.air, ASSETS.heavy], [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const id = setInterval(() => setHeroIndex((i) => (i + 1) % heroImages.length), 5000)
    return () => clearInterval(id)
  }, [heroImages.length])

  useEffect(() => {
    const id = setInterval(() => setTestimonial((i) => (i + 1) % testimonials.length), 6500)
    return () => clearInterval(id)
  }, [])

  const handleContact = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = data.get('name') || ''
    const email = data.get('email') || ''
    const phone = data.get('phone') || ''
    const company = data.get('company') || ''
    const message = data.get('message') || ''
    const subject = encodeURIComponent(`GBO Logistics Website Inquiry - ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}\n\nMessage:\n${message}`)
    window.location.href = `mailto:ghinwa@gboloistics.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="site-shell">
      <header className={`nav-wrap ${scrolled ? 'scrolled' : ''}`}>
        <a className="brand" href="#home" aria-label="GBO Logistics home">
          <img src={ASSETS.logo} alt="GBO Logistics" />
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <a className="nav-cta" href="#contact">Request a Quote <ArrowRight size={16} /></a>
        <button className="menu-btn" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
          {menuOpen ? <X /> : <Menu />}
        </button>
        <AnimatePresence>
          {menuOpen && (
            <motion.div className="mobile-menu" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}>
              {navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
              <a className="mobile-quote" href="#contact" onClick={() => setMenuOpen(false)}>Request a Quote</a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-bg-stack" aria-hidden="true">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={heroIndex}
                className="hero-bg"
                style={{ backgroundImage: `url(${heroImages[heroIndex]})` }}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
              />
            </AnimatePresence>
          </div>
          <div className="hero-grid-overlay" />
          <div className="hero-orb orb-one" />
          <div className="hero-orb orb-two" />
          <div className="hero-route" aria-hidden="true">
            <span className="route-dot dot-a" />
            <span className="route-dot dot-b" />
            <span className="route-dot dot-c" />
            <motion.div className="moving-plane" animate={{ x: [0, 155, 300], y: [0, -40, -8], rotate: [0, 4, -2] }} transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}>
              <Plane size={25} />
            </motion.div>
          </div>

          <div className="container hero-content">
            <motion.div className="hero-copy" initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }}>
              <div className="hero-kicker"><Globe2 size={17} /> Lebanon to the world</div>
              <h1>Freight forwarding that goes <span>beyond</span> every border.</h1>
              <p>GBO Logistics connects air, sea, land, warehousing, customs, and specialized cargo solutions through one responsive logistics partner.</p>
              <div className="hero-actions">
                <a href="#contact" className="btn btn-primary">Request a Quote <ArrowRight size={18} /></a>
                <a href="#services" className="btn btn-ghost">Explore Services</a>
              </div>
              <div className="hero-proof">
                <span><CheckCircle2 size={18} /> Specialized cargo expertise</span>
                <span><CheckCircle2 size={18} /> Global partner network</span>
                <span><CheckCircle2 size={18} /> Lebanon-based support</span>
              </div>
            </motion.div>

            <motion.div className="hero-card" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.15 }}>
              <div className="hero-card-top">
                <span>Going Beyond and Over</span>
                <Globe2 />
              </div>
              <div className="shipment-mini">
                <div><span>Origin</span><strong>Beirut</strong></div>
                <div className="route-line"><span /><Plane size={18} /><span /></div>
                <div><span>Global</span><strong>150+ Countries</strong></div>
              </div>
              <div className="hero-mini-grid">
                <div><Ship /><span>Sea</span></div>
                <div><Plane /><span>Air</span></div>
                <div><Truck /><span>Land</span></div>
                <div><Warehouse /><span>Storage</span></div>
              </div>
              <div className="live-badge"><span /> Logistics in motion</div>
            </motion.div>
          </div>

          <div className="hero-slider-dots" aria-label="Hero slides">
            {heroImages.map((_, index) => <button key={index} className={index === heroIndex ? 'active' : ''} onClick={() => setHeroIndex(index)} aria-label={`Show slide ${index + 1}`} />)}
          </div>
        </section>

        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            {[...services, ...services].map((s, i) => {
              const Icon = s.icon
              return <span key={`${s.title}-${i}`}><Icon size={17} /> {s.title} <b>•</b></span>
            })}
          </div>
        </div>

        <section className="section about" id="about">
          <div className="container about-grid">
            <div>
              <SectionHeading
                eyebrow="About GBO Logistics"
                title="A fresh logistics approach built around complex cargo."
                text="From Lebanon, GBO Logistics combines practical freight expertise, personalized coordination, and international partnerships to move cargo safely and efficiently."
              />
              <div className="vision-grid">
                <motion.article className="info-card" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} variants={reveal}>
                  <Globe2 />
                  <h3>Our Vision</h3>
                  <p>To grow as a forward-looking logistics partner that uses smarter operations, responsible practices, and strong international connectivity to simplify supply chains.</p>
                </motion.article>
                <motion.article className="info-card" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} variants={reveal}>
                  <Zap />
                  <h3>Our Mission</h3>
                  <p>To provide reliable, tailored logistics support with close communication, safe handling, timely delivery, and solutions matched to each client’s cargo requirements.</p>
                </motion.article>
              </div>
            </div>

            <motion.div className="about-visual" initial={{ opacity: 0, scale: .94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: .3 }} transition={{ duration: .75 }}>
              <div className="founder-image-wrap">
                <img src={ASSETS.founder} alt="Founder of GBO Logistics" />
                <div className="founder-tag">
                  <span>Founder</span>
                  <strong>Ghinwa Bou Orm</strong>
                </div>
              </div>
              <div className="office-card">
                <img src={ASSETS.office} alt="GBO Logistics office" />
                <div>
                  <span>Professional Workspace</span>
                  <strong>Jnah, Beirut</strong>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="container">
            <SectionHeading eyebrow="Comprehensive Solutions" title="One logistics partner. Multiple modes. Complete coordination." text="Core freight-forwarding services designed around speed, visibility, flexibility, and reliable execution." center />
            <div className="service-grid">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <motion.article
                    className="service-card"
                    key={service.title}
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: .2 }}
                    transition={{ duration: .55, delay: index * .08 }}
                    whileHover={{ y: -10 }}
                  >
                    <div className="service-image"><img src={service.image} alt={service.title} /></div>
                    <div className="service-icon"><Icon /></div>
                    <div className="service-body">
                      <h3>{service.title}</h3>
                      <p>{service.text}</p>
                      <a href="#contact">Get a quote <ArrowRight size={16} /></a>
                    </div>
                  </motion.article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="section specialization" id="specialization">
          <div className="container">
            <SectionHeading eyebrow="Our Specialization" title="Built for cargo that needs more than standard handling." text="GBO Logistics focuses strongly on heavy equipment, special containers, glass, fragile materials, and other complex freight movements." light />
            <div className="special-grid">
              {specializations.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.article
                    key={item.title}
                    className="special-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: .25 }}
                    transition={{ duration: .6, delay: index * .1 }}
                  >
                    <img src={item.image} alt={item.title} />
                    <div className="special-overlay" />
                    <div className="special-content">
                      <div className="special-icon"><Icon /></div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </motion.article>
                )
              })}
            </div>
            <motion.div className="lebanon-feature" initial="hidden" whileInView="visible" viewport={{ once: true, amount: .3 }} variants={reveal}>
              <div>
                <span className="eyebrow"><MapPin size={15} /> Specialized solutions for Lebanon</span>
                <h3>Local market knowledge. International reach.</h3>
                <p>GBO Logistics understands the operational realities of moving oversized, heavy, and fragile cargo through Lebanon while coordinating with partners abroad.</p>
              </div>
              <div className="micro-stats">
                <Counter value={200} suffix="+" label="Heavy equipment movements" />
                <Counter value={100} suffix="%" label="Focus on safe delivery" />
              </div>
            </motion.div>
          </div>
        </section>

        <section className="section process-section">
          <div className="container">
            <SectionHeading eyebrow="How It Works" title="From quote to delivery, every stage stays connected." text="A clear four-step flow keeps planning, documents, movement, and delivery aligned." center />
            <div className="process-line">
              {process.map(([num, title, text, Icon], index) => (
                <motion.article className="process-step" key={num} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }} transition={{ duration: .5, delay: index * .1 }}>
                  <div className="process-number">{num}</div>
                  <div className="process-icon"><Icon /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="why-section">
          <div className="container why-grid">
            <motion.div className="why-copy" initial="hidden" whileInView="visible" viewport={{ once: true, amount: .3 }} variants={reveal}>
              <span className="eyebrow"><Sparkles size={15} /> Why GBO Logistics</span>
              <h2>Specialized expertise with a hands-on service culture.</h2>
              <p>Complex cargo needs more than a booking. It needs communication, planning, documentation, proper handling, and the right partner network.</p>
              <div className="why-list">
                <div><ShieldCheck /><span><strong>Specialized expertise</strong> in heavy, fragile, and non-standard cargo.</span></div>
                <div><Globe2 /><span><strong>Global network</strong> supporting international routing and local coordination.</span></div>
                <div><Clock3 /><span><strong>Responsive support</strong> throughout the shipment journey.</span></div>
                <div><PackageCheck /><span><strong>Shipment visibility</strong> from origin planning through final delivery.</span></div>
              </div>
            </motion.div>
            <div className="why-visual">
              <div className="world-grid" />
              <motion.div className="orbit orbit-one" animate={{ rotate: 360 }} transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}><Plane /></motion.div>
              <motion.div className="orbit orbit-two" animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}><Ship /></motion.div>
              <div className="globe-core"><Globe2 /></div>
              <div className="country-pill c1">Beirut</div>
              <div className="country-pill c2">Europe</div>
              <div className="country-pill c3">GCC</div>
              <div className="country-pill c4">Asia</div>
            </div>
          </div>
        </section>

        <section className="section industries-section">
          <div className="container">
            <SectionHeading eyebrow="Industries We Serve" title="Logistics solutions shaped around different cargo realities." center />
            <div className="industries-grid">
              {industries.map(([name, Icon], index) => (
                <motion.div className="industry-card" key={name} initial={{ opacity: 0, scale: .96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: .3 }} transition={{ duration: .4, delay: index * .06 }}>
                  <Icon />
                  <span>{name}</span>
                  <ArrowRight size={18} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="global-section" id="global">
          <div className="container">
            <SectionHeading eyebrow="Our Global Impact" title="A growing network built to keep cargo moving." text="International reach supported by freight partners, carriers, and specialized logistics connections." center light />
            <div className="global-stats">
              <Counter value={50} suffix="+" label="Countries served" />
              <Counter value={100} suffix="+" label="Clients supported" />
              <Counter value={1000} suffix="+" label="Shipments coordinated" />
              <Counter value={99} suffix="%" label="Delivery focus" />
            </div>
            <div className="partner-label">Global logistics network connections</div>
            <div className="partner-marquee">
              <div className="partner-track">
                {[...partnerNames, ...partnerNames].map((name, i) => <span key={`${name}-${i}`}><Globe2 size={18} /> {name}</span>)}
              </div>
            </div>
          </div>
        </section>

        <section className="section testimonials-section">
          <div className="container testimonial-layout">
            <div>
              <SectionHeading eyebrow="Client Experience" title="Reliable coordination is what clients remember." text="Service is built around communication, practical solutions, and attention to cargo details." />
              <div className="testimonial-controls">
                <button onClick={() => setTestimonial((testimonial - 1 + testimonials.length) % testimonials.length)} aria-label="Previous testimonial"><ChevronLeft /></button>
                <button onClick={() => setTestimonial((testimonial + 1) % testimonials.length)} aria-label="Next testimonial"><ChevronRight /></button>
              </div>
            </div>
            <div className="testimonial-stage">
              <AnimatePresence mode="wait">
                <motion.article key={testimonial} className="testimonial-card" initial={{ opacity: 0, x: 35 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -35 }} transition={{ duration: .45 }}>
                  <Quote size={38} />
                  <p>“{testimonials[testimonial].text}”</p>
                  <div>
                    <strong>{testimonials[testimonial].name}</strong>
                    <span>{testimonials[testimonial].role}</span>
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-grid">
            <motion.div className="contact-copy" initial="hidden" whileInView="visible" viewport={{ once: true, amount: .3 }} variants={reveal}>
              <span className="eyebrow"><Sparkles size={15} /> Get in touch</span>
              <h2>Ready to move your next shipment?</h2>
              <p>Share your shipping requirement and GBO Logistics can coordinate the best route and solution for your cargo.</p>
              <div className="contact-list">
                <a href="mailto:ghinwa@gboloistics.com"><Mail /> <span><small>Email</small>ghinwa@gboloistics.com</span></a>
                <a href="tel:+96176693278"><Phone /> <span><small>Phone</small>+961 76 693 278</span></a>
                <div><MapPin /> <span><small>Office</small>3rd floor Rafic Hariri Hospital Street, Office #14, Bldg Mayss 6, Jnah, Beirut</span></div>
              </div>
            </motion.div>

            <motion.form className="contact-form" onSubmit={handleContact} initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .65 }}>
              <div className="form-grid">
                <label>Full Name<input name="name" placeholder="John Doe" required /></label>
                <label>Email Address<input name="email" type="email" placeholder="john@company.com" required /></label>
                <label>Phone Number<input name="phone" placeholder="+961 ..." /></label>
                <label>Company Name<input name="company" placeholder="Your company" /></label>
              </div>
              <label>Message<textarea name="message" rows="5" placeholder="Tell us about your shipment, origin, destination, cargo type, weight or dimensions..." required /></label>
              <button className="btn btn-primary submit-btn" type="submit">Submit Request <ArrowRight size={18} /></button>
              <p className="form-note">This version opens the visitor’s email application with the inquiry pre-filled.</p>
            </motion.form>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-grid">
          <div className="footer-brand">
            <img src={ASSETS.logo} alt="GBO Logistics" />
            <p>Your freight-forwarding partner for air, sea, land, warehousing, customs, and specialized cargo solutions.</p>
            <div className="footer-tagline">Going Beyond and Over</div>
          </div>
          <div>
            <h4>Quick Links</h4>
            {navItems.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
          </div>
          <div>
            <h4>Useful Tools</h4>
            <a href="https://www.searates.com/container/tracking/" target="_blank" rel="noreferrer">Container Tracking</a>
            <a href="https://www.searates.com/services/distances-time/" target="_blank" rel="noreferrer">Distance Calculator</a>
            <a href="https://www.icontainers.com/help/incoterms/" target="_blank" rel="noreferrer">Incoterms Guide</a>
            <a href="https://www.xe.com/currencyconverter/" target="_blank" rel="noreferrer">Currency Converter</a>
          </div>
          <div>
            <h4>Contact</h4>
            <a href="mailto:ghinwa@gboloistics.com">ghinwa@gboloistics.com</a>
            <a href="tel:+96176693278">+961 76 693 278</a>
            <p>Jnah, Beirut, Lebanon</p>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 GBO Logistics. All rights reserved.</span>
          <span>Developed by <a href="https://hki-it.com" target="_blank" rel="noreferrer">HKI IT</a></span>
        </div>
      </footer>

      <a className="whatsapp" href="https://wa.me/96176693278?text=Hello%20GBO%20Logistics%2C%20I%20would%20like%20to%20request%20a%20shipping%20quote." target="_blank" rel="noreferrer" aria-label="Chat with GBO Logistics on WhatsApp">
        <span className="whatsapp-pulse" />
        <Phone />
        <b>WhatsApp</b>
      </a>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
