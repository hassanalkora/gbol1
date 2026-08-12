import { useEffect, useState } from "react";
import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom";

const services = [
  ["Air Freight", "/assets/air.jpg", "Fast and reliable air cargo services for time-sensitive shipments worldwide with real-time tracking."],
  ["Sea Freight", "/assets/hero-ship.jpg", "Cost-effective ocean freight solutions for full container loads (FCL) and less than container loads (LCL)."],
  ["Warehousing & Distribution", "/assets/warehouse.jpg", "Secure storage facilities and efficient distribution networks to streamline your supply chain."],
  ["Customs Clearance", "/assets/customs.jpg", "Expert customs brokerage services ensuring smooth and compliant international trade operations."],
];

const specializations = [
  ["Heavy Equipment", "/assets/heavy-equipment.jpg", "Expert handling and transportation of heavy machinery, construction equipment, and oversized cargo across Lebanon and internationally."],
  ["Flat Rack & Open Top Containers", "/assets/flat-rack.jpg", "Specialized container solutions for oversized and tall cargo that exceeds standard dimensions."],
  ["Glass & Fragile Cargo", "/assets/glass.jpg", "Specialized handling and secure transportation of glass, mirrors, and fragile materials with custom packaging solutions."],
];

const industries = [
  ["Construction & Heavy Machinery", "/assets/construction.jpg", "Specialized handling of oversized equipment and construction materials."],
  ["Retail & E-commerce", "/assets/ecommerce.jpg", "Fast fulfillment solutions for online retailers and brick-and-mortar stores."],
  ["Technology & Electronics", "/assets/electronics.jpg", "Secure transport of sensitive electronics with climate-controlled options."],
  ["Pharmaceuticals & Healthcare", "/assets/pharma.jpg", "Temperature-controlled logistics for medical supplies and pharmaceuticals."],
  ["Manufacturing & Industrial", "/assets/manufacturing.jpg", "Just-in-time delivery solutions for manufacturing supply chains."],
  ["Fashion & Apparel", "/assets/fashion.jpg", "Efficient distribution networks for seasonal fashion and apparel brands."],
];

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
  window.scrollTo({ top: 0, behavior: "auto" });
}, [pathname]);;
  return null;
}

function Logo() { return <img className="logo" src="/assets/logo.jpg" alt="GBO Logistics" />; }

function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <>
    <ScrollToTop />
    <header className="header">
      <Link to="/" onClick={close}><Logo /></Link>
      <nav className={open ? "nav open" : "nav"} aria-label="Primary navigation">
        <NavLink to="/about" onClick={close}>About</NavLink>
        <NavLink to="/services" onClick={close}>Services</NavLink>
        <NavLink to="/specialized-cargo" onClick={close}>Specialized</NavLink>
        <NavLink to="/global-reach" onClick={close}>Global Reach</NavLink>
        <NavLink to="/contact" onClick={close}>Contact</NavLink>
      </nav>
      <div className="header-actions"><a className="phone" href="tel:+96176693278">☎ <span>+961 76 693 278</span></a><Link className="button" to="/contact">Get a Quote</Link></div>
      <button className="menu-button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}><span/><span/><span/></button>
    </header>
    <main>{children}</main>
    <Footer />
  </>;
}

function PageHero({ kicker, title, text }) {
  return <section className="page-hero"><div><p className="kicker light">{kicker}</p><h1>{title}</h1><p>{text}</p></div></section>;
}

function Heading({ kicker, title, text }) {
  return <div className="section-heading"><p className="kicker">{kicker}</p><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

function CardGrid({ items, className = "four", feature = false }) {
  return <div className={`card-grid ${className}`}>{items.map(([title,image,text]) => <article className={feature ? "feature-card" : "image-card"} key={title}><img src={image} alt={title}/><div className={feature ? "" : "card-body"}><h3>{title}</h3><p>{text}</p></div></article>)}</div>;
}

function Home() {
  return <>
    <section className="hero"><div className="hero-background"/><div className="route-line one"/><div className="route-line two"/><div className="hero-content"><h1>Going Beyond<br/>and Over</h1><div className="mode-icons"><span>✈</span><span>⚓</span><span>▣</span></div><p>Your trusted partner in global freight forwarding. We deliver excellence across air, sea, and land transportation worldwide.</p><div className="hero-actions"><Link className="button large" to="/contact">Request a Quote <span>→</span></Link><Link className="button outline large" to="/services">▷ <span>Our Services</span></Link></div></div></section>
    <section className="about section"><Heading kicker="Who We Are" title="Logistics without limits" text="A fresh approach to freight forwarding, combining innovation with specialized expertise in Lebanon."/><div className="vision-grid"><article><span className="number">01</span><h3>Our Vision</h3><p>To be a global leader in logistics, revolutionizing supply chains through practical, sustainable solutions.</p></article><article><span className="number">02</span><h3>Our Mission</h3><p>To deliver customized logistics solutions with safe, timely service, strong partnerships and responsive support.</p></article></div><div className="center-action"><Link className="button large" to="/about">Discover GBO Logistics →</Link></div></section>
    <section className="services section soft"><Heading kicker="What We Do" title="Comprehensive Logistics Solutions" text="End-to-end freight forwarding services tailored to your business needs."/><CardGrid items={services}/><div className="center-action"><Link className="text-link" to="/services">Explore all services →</Link></div></section>
    <section className="specialized section"><Heading kicker="Our Core Strength" title="Specialized Cargo Experts" text="Solutions for heavy equipment, fragile materials and oversized cargo."/><CardGrid items={specializations} className="three" feature/><div className="lebanon-banner"><div><p className="kicker light">Local knowledge. Global capability.</p><h3>Specialized Solutions for Lebanon</h3><p>Our Flat Rack and Open Top expertise ensures safe delivery for your most challenging shipments.</p></div><div className="mini-stats"><span><strong>200+</strong>Heavy Equipment Moved</span><span><strong>100%</strong>Safe Delivery Rate</span></div></div></section>
    <Impact />
  </>;
}

function About() {
  return <><PageHero kicker="Who We Are" title="About GBO Logistics" text="A fresh logistics company built on specialized expertise, strong relationships and a determination to go beyond."/><section className="section"><div className="vision-grid"><article><span className="number">01</span><h3>Our Vision</h3><p>To be a global leader in the logistics industry, revolutionizing supply chain management through cutting-edge solutions and responsible practices.</p></article><article><span className="number">02</span><h3>Our Mission</h3><p>To deliver exceptional customer service through customized logistics solutions, ensuring safe and timely delivery through technology and global partnerships.</p></article></div><div className="founder-grid"><div className="founder-copy"><p className="kicker">Leadership</p><h2>Meet Our Founder</h2><p>Founded by <strong>Ghinwa Bou Orm</strong>, GBO Logistics brings a fresh perspective to freight forwarding. With a commitment to excellence and a deep understanding of the Lebanese market, we specialize in complex logistics challenges.</p><p>Our expertise in heavy equipment, glass transportation and specialized container solutions sets us apart. We leverage technology and strong global partnerships to deliver reliable services tailored to your needs.</p><blockquote><strong>“Going Beyond and Over”</strong><span>Our commitment to exceeding expectations and overcoming every logistics challenge.</span></blockquote></div><div className="founder-image"><img src="/assets/founder.png" alt="Ghinwa Bou Orm, founder of GBO Logistics"/></div></div><div className="workspace-card"><img src="/assets/office.jpeg" alt="GBO Logistics office in Beirut"/><div><p className="kicker">Our Headquarters</p><h3>Our Professional Workspace</h3><p>From our modern Lebanon office, our team coordinates shipments and keeps customers informed from origin to final delivery.</p></div></div></section></>;
}

function Services() {
  const steps = [["1","Request a Quote","Share your shipping requirements and receive a competitive quote."],["2","Documentation & Planning","We handle the paperwork and build the optimal shipping plan."],["3","Transportation & Tracking","Your cargo moves through our network with updates at every stage."],["4","Delivery & Confirmation","Safe delivery with documentation and confirmation of receipt."]];
  return <><PageHero kicker="What We Do" title="Our Logistics Services" text="Flexible freight-forwarding solutions for air, sea, customs, storage and final distribution."/><section className="section"><CardGrid items={services}/></section><section className="process section soft"><Heading kicker="Simple & Transparent" title="How It Works" text="A streamlined process from quote to delivery."/><div className="process-grid">{steps.map(([n,t,x])=><article key={n}><span>{n}</span><div><h3>{t}</h3><p>{x}</p></div></article>)}</div><div className="why-grid"><div><p className="kicker">The GBO Difference</p><h2>Why Choose<br/>GBO Logistics</h2><p>International capability combined with attentive local service.</p></div><div className="why-list"><article><span>01</span><h3>Specialized Expertise</h3><p>Expert handling of heavy equipment, glass and special cargo.</p></article><article><span>02</span><h3>Global Network</h3><p>Carrier and agent partnerships across more than 150 countries.</p></article><article><span>03</span><h3>Shipment Visibility</h3><p>Clear communication from origin to destination.</p></article><article><span>04</span><h3>Responsive Support</h3><p>Dependable help throughout your shipment.</p></article></div><img src="/assets/operations-logistics.png" alt="GBO Logistics freight operations"/></div></section></>;
}

function Specialized() { return <><PageHero kicker="Our Core Strength" title="Specialized Cargo" text="Purpose-built solutions for cargo that demands more planning, care and expertise."/><section className="section"><CardGrid items={specializations} className="three" feature/><div className="lebanon-banner"><div><p className="kicker light">Built for complex moves</p><h3>From planning to secure delivery</h3><p>We coordinate suitable equipment, loading procedures, documentation and routes for oversized, heavy and fragile cargo.</p></div><div className="mini-stats"><span><strong>200+</strong>Equipment Moves</span><span><strong>100%</strong>Safe Delivery Rate</span></div></div></section><section className="section soft"><Heading kicker="Our Experience" title="Industries We Serve" text="Tailored logistics solutions across diverse sectors."/><CardGrid items={industries} className="three industries-grid"/></section></> }

function Impact() { return <section className="impact"><div className="section-heading inverse"><p className="kicker light">Worldwide Coverage</p><h2>Our Global Impact</h2><p>Reliable and efficient logistics solutions supported by worldwide connections.</p></div><div className="impact-stats"><div><strong>50+</strong><span>Countries Served</span></div><div><strong>100+</strong><span>Happy Clients</span></div><div><strong>1,000+</strong><span>Shipments Completed</span></div><div><strong>99.8%</strong><span>On-Time Delivery</span></div></div></section> }

function GlobalReach() { const partners=["Magenta Logistics Network","ALNA","Seajet Logistics Network","Frontline Freight","JC Trans","OLO Network","Global Logistics Associates"]; return <><PageHero kicker="Worldwide Coverage" title="Global Reach" text="Trusted partners connect your shipment to markets around the world while our Beirut team remains your single point of contact."/><Impact/><section className="partners section"><Heading kicker="Worldwide Connections" title="Our Network Partners" text="Membership in leading logistics networks extends our coverage and service capability."/><div className="partner-grid">{partners.map((name,i)=><div key={name}><span>0{i+1}</span><strong>{name}</strong></div>)}</div></section><section className="section soft"><Heading kicker="Sector Knowledge" title="Industries We Serve"/><CardGrid items={industries} className="three industries-grid"/></section></> }

function Contact() { const [sent,setSent]=useState(false); const submit=e=>{e.preventDefault();setSent(true)}; return <><PageHero kicker="Let's Get Moving" title="Contact GBO Logistics" text="Tell us what you need to move. Our team will prepare a customized logistics solution."/><section className="contact section"><div className="contact-copy"><p className="kicker light">Get in Touch</p><h2>Start your shipment</h2><p>Send your requirements and our team will get back to you within 24 hours.</p><div className="contact-details"><a href="mailto:ghinwa@gboloistics.com"><span>✉</span><div><small>Email</small><strong>ghinwa@gboloistics.com</strong></div></a><a href="tel:+96176693278"><span>☎</span><div><small>Phone</small><strong>+961 76 693 278</strong></div></a><div><span>⌖</span><div><small>Office</small><strong>3rd floor Rafic Hariri Hospital Street, Office #14, Bldg Mayss 6, Jnah, Beirut</strong></div></div></div></div><form className="contact-form" onSubmit={submit}>{sent?<div className="success"><span>✓</span><h3>Request ready</h3><p>This demo does not transmit data. Connect the form to your email or CRM before publishing.</p><button type="button" onClick={()=>setSent(false)}>Send another request</button></div>:<><div className="form-row"><label>Full Name *<input name="name" required/></label><label>Email Address *<input name="email" type="email" required/></label></div><div className="form-row"><label>Phone Number<input name="phone"/></label><label>Company Name<input name="company"/></label></div><label>Message *<textarea name="message" rows="5" required/></label><button className="button large submit" type="submit">Submit Request →</button><small>This source-code demo stores and sends no information.</small></>}</form></section></> }

function NotFound() { return <section className="not-found"><p className="kicker">404</p><h1>Page not found</h1><p>The page you requested does not exist.</p><Link className="button large" to="/">Return Home</Link></section> }

function Footer() { return <footer><div className="footer-grid"><div><Logo/><p>Your trusted partner in global freight forwarding across air, sea and land.</p><a href="mailto:ghinwa@gboloistics.com">ghinwa@gboloistics.com</a><a href="tel:+96176693278">+961 76 693 278</a></div><div><h3>Quick Links</h3><Link to="/services">Services</Link><Link to="/about">About Us</Link><Link to="/global-reach">Global Reach</Link><Link to="/contact">Contact</Link></div><div><h3>Useful Tools</h3><a href="https://www.searates.com/container/tracking/" target="_blank" rel="noreferrer">Container Tracking</a><a href="https://www.searates.com/services/distances-time/" target="_blank" rel="noreferrer">Distance Calculator</a><a href="https://www.customs.gov.lb/" target="_blank" rel="noreferrer">Lebanon Customs</a></div><div><h3>Office</h3><p>3rd floor Rafic Hariri Hospital Street<br/>Office #14, Bldg Mayss 6<br/>Jnah, Beirut</p><a href="https://www.instagram.com/gbologistics" target="_blank" rel="noreferrer">Instagram ↗</a></div></div><div className="copyright"><span>© 2025 GBO Logistics. All rights reserved.</span><span>Developed by <a href="https://hki-it.com/" target="_blank" rel="noreferrer">HKI IT</a></span></div></footer> }

export default function App() { return <Layout><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/services" element={<Services/>}/><Route path="/specialized-cargo" element={<Specialized/>}/><Route path="/global-reach" element={<GlobalReach/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<NotFound/>}/></Routes></Layout> }
