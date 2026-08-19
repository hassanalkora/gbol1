import { useEffect, useMemo, useState } from "react";

const IMG = {
  logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/353438915_279887674517898_1335444058489410789_n-Nrl1ceP4porG99E8y4ByU1UMhR1sLk.jpg",
  hero: "https://www.gbologistics.com/container-ship-at-port-with-cargo-containers.jpg",
  founder: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ghinwa-IbRKSOUdCpaTTjxUfsM0Ra0IYjAsTv.png",
  office: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gbo-logistics-3JyCcfBuKcENyD54PcQxA3sITaXryQ.jpeg",
  air: "https://www.gbologistics.com/cargo-airplane-loading-freight-at-airport.jpg",
  sea: "https://www.gbologistics.com/container-ship-at-port-with-cargo-containers.jpg",
  warehouse: "https://www.gbologistics.com/modern-warehouse-with-organized-inventory.jpg",
  customs: "https://www.gbologistics.com/customs-documents-stamps-and-paperwork-on-desk-no-.jpg",
  heavy: "https://www.gbologistics.com/heavy-construction-equipment-on-flatbed-truck.jpg",
  flat: "https://www.gbologistics.com/flat-rack-shipping-container-with-heavy-equipment.jpg",
  glass: "https://www.gbologistics.com/glass-panels-being-carefully-loaded-for-shipping.jpg",
};

const services = [
  {title:"Air Freight", text:"Fast and reliable air cargo services for time-sensitive shipments worldwide with real-time tracking.", img:IMG.air, icon:"✈"},
  {title:"Sea Freight", text:"Cost-effective ocean freight solutions for full container loads (FCL) and less than container loads (LCL).", img:IMG.sea, icon:"⚓"},
  {title:"Warehousing & Distribution", text:"Secure storage facilities and efficient distribution networks to streamline your supply chain.", img:IMG.warehouse, icon:"▦"},
  {title:"Customs Clearance", text:"Expert customs brokerage services ensuring smooth and compliant international trade operations.", img:IMG.customs, icon:"✓"},
];

const specialize = [
  {title:"Heavy Equipment", text:"Expert handling and transportation of heavy machinery, construction equipment, and oversized cargo across Lebanon and internationally.", img:IMG.heavy},
  {title:"Flat Rack & Open Top Containers", text:"Specialized container solutions for oversized and tall cargo that exceeds standard dimensions, perfect for machinery, glass panels, and special equipment.", img:IMG.flat},
  {title:"Glass & Fragile Cargo", text:"Specialized handling and secure transportation of glass, mirrors, and fragile materials with custom packaging and climate-controlled solutions.", img:IMG.glass},
];

const industries = [
  ["Construction & Heavy Machinery","Specialized handling of oversized equipment and construction materials.","🏗️"],
  ["Retail & E-commerce","Fast fulfillment solutions for online retailers and brick-and-mortar stores.","🛍️"],
  ["Technology & Electronics","Secure transport of sensitive electronics with climate-controlled options.","💻"],
  ["Pharmaceuticals & Healthcare","Temperature-controlled logistics for medical supplies and pharmaceuticals.","⚕️"],
  ["Manufacturing & Industrial","Just-in-time delivery solutions for manufacturing supply chains.","⚙️"],
  ["Fashion & Apparel","Efficient distribution networks for seasonal fashion and apparel brands.","👕"],
];

function Count({to,suffix=""}:{to:number;suffix?:string}) {
  const [n,setN]=useState(0);
  useEffect(()=>{let raf=0,start=0; const t=(ts:number)=>{if(!start)start=ts; const p=Math.min((ts-start)/1200,1); setN(Math.round(to*(1-Math.pow(1-p,3)))); if(p<1)raf=requestAnimationFrame(t)};raf=requestAnimationFrame(t);return()=>cancelAnimationFrame(raf)},[to]);
  return <>{n.toLocaleString()}{suffix}</>;
}

function App(){
  const [menu,setMenu]=useState(false);
  const [sent,setSent]=useState(false);
  const [scroll,setScroll]=useState(0);
  useEffect(()=>{const on=()=>setScroll(window.scrollY);window.addEventListener("scroll",on);return()=>window.removeEventListener("scroll",on)},[]);
  const shipX = Math.min(scroll*.13, 180);

  return <div className="site">
    <header className={scroll>40?"scrolled":""}>
      <a className="logo" href="#home"><img src={IMG.logo} alt="GBO Logistics"/><span>GBO <b>LOGISTICS</b></span></a>
      <nav className={menu?"open":""}>
        <a href="#about" onClick={()=>setMenu(false)}>About</a>
        <a href="#services" onClick={()=>setMenu(false)}>Services</a>
        <a href="#specialization" onClick={()=>setMenu(false)}>Specialization</a>
        <a href="#industries" onClick={()=>setMenu(false)}>Industries</a>
        <a href="#contact" onClick={()=>setMenu(false)}>Contact</a>
      </nav>
      <a className="quote-small" href="#contact">Request a Quote</a>
      <button className="menu" onClick={()=>setMenu(!menu)}>{menu?"×":"☰"}</button>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-img" style={{backgroundImage:`url(${IMG.hero})`}}/>
        <div className="hero-overlay"/>
        <div className="hero-lines"/>
        <div className="hero-copy">
          <span className="kicker">GLOBAL FREIGHT FORWARDING • LEBANON</span>
          <h1>Move beyond.<br/><em>Go further.</em></h1>
          <p>Your trusted partner in global freight forwarding. We deliver excellence across air, sea, and land transportation worldwide.</p>
          <div className="hero-actions"><a href="#contact" className="btn primary">Request a Quote <b>↗</b></a><a href="#services" className="btn glass">Explore Services ↓</a></div>
          <div className="hero-stats">
            <div><strong>50+</strong><span>Countries Served</span></div>
            <div><strong>1,000+</strong><span>Shipments</span></div>
            <div><strong>99.8%</strong><span>On-Time Delivery</span></div>
          </div>
        </div>
        <div className="route-line">
          <i className="dot d1"/><i className="dot d2"/><i className="dot d3"/>
          <div className="moving-ship" style={{transform:`translateX(${shipX}px)`}}>▰</div>
        </div>
        <div className="scroll-down"><span>SCROLL TO EXPLORE</span><i/></div>
      </section>

      <section className="intro" id="about">
        <div className="section-tag">01 / ABOUT GBO</div>
        <div className="intro-grid">
          <div><h2>A fresh approach to <span>freight forwarding.</span></h2></div>
          <div className="intro-copy">
            <p className="lead">Combining innovation with specialized expertise in Lebanon.</p>
            <div className="vision-grid">
              <article><b>Our Vision</b><p>To be a global leader in the logistics industry, revolutionizing supply chain management through cutting-edge solutions. We envision a sustainable future where logistics is powered by clean energy and innovative practices.</p></article>
              <article><b>Our Mission</b><p>To deliver exceptional customer service through customized logistics solutions, ensuring safe and timely delivery while embracing technological advancements and strong global partnerships.</p></article>
            </div>
          </div>
        </div>

        <div className="founder-card">
          <div className="founder-image"><img src={IMG.founder} alt="Ghinwa Bou Orm - Founder"/></div>
          <div className="founder-copy"><span>MEET OUR FOUNDER</span><h3>Ghinwa Bou Orm</h3><p>Founded by Ghinwa Bou Orm, GBO Logistics brings a fresh perspective to the freight forwarding industry. With a commitment to excellence and a deep understanding of the Lebanese market, we specialize in handling complex logistics challenges that others shy away from.</p><blockquote>“Going Beyond and Over”</blockquote></div>
          <div className="founder-office"><img src={IMG.office} alt="GBO Logistics Office"/><small>Our Professional Workspace • Lebanon</small></div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="section-head"><div><span className="section-tag">02 / SERVICES</span><h2>Comprehensive<br/>logistics solutions.</h2></div><p>End-to-end freight forwarding services tailored to your business needs.</p></div>
        <div className="service-grid">
          {services.map((s,i)=><article className="service-card" key={s.title}>
            <img src={s.img} alt={s.title}/>
            <div className="shade"/>
            <span className="service-no">0{i+1}</span><div className="service-icon">{s.icon}</div>
            <div className="service-content"><h3>{s.title}</h3><p>{s.text}</p><span className="learn">Learn more ↗</span></div>
          </article>)}
        </div>
      </section>

      <section className="special" id="specialization">
        <div className="section-head dark-head"><div><span className="section-tag">03 / OUR SPECIALIZATION</span><h2>Complex cargo.<br/><span>Handled with precision.</span></h2></div><p>Leading experts in Lebanon for heavy equipment, glass, and specialized cargo transportation using Flat Rack and Open Top containers.</p></div>
        <div className="special-grid">
          {specialize.map((s,i)=><article key={s.title} className="special-card"><div className="image-wrap"><img src={s.img} alt={s.title}/><span>0{i+1}</span></div><h3>{s.title}</h3><p>{s.text}</p></article>)}
        </div>
        <div className="special-note">
          <div><span>Specialized Solutions for Lebanon</span><h3>Built for the cargo others avoid.</h3><p>With deep expertise in the Lebanese market, we understand the unique challenges of transporting heavy equipment, glass, and oversized cargo. Our specialized fleet includes Flat Rack and Open Top containers.</p></div>
          <div className="big-metric"><strong>200+</strong><span>Heavy Equipment Moved</span></div>
          <div className="big-metric"><strong>100%</strong><span>Safe Delivery Rate</span></div>
        </div>
      </section>

      <section className="process">
        <div className="section-tag">04 / HOW IT WORKS</div><h2>From quote to delivery.</h2>
        <div className="process-line">
          {[
            ["01","Request a Quote","Contact us with your shipping requirements and get a competitive quote within 24 hours."],
            ["02","Documentation & Planning","Our team handles paperwork, customs documentation, and creates an optimal shipping plan."],
            ["03","Transportation & Tracking","Your cargo is transported via our global network with real-time tracking at every stage."],
            ["04","Delivery & Confirmation","Safe delivery to destination with full documentation and confirmation of receipt."]
          ].map(([n,t,d])=><article key={n}><b>{n}</b><i/><h3>{t}</h3><p>{d}</p></article>)}
        </div>
      </section>

      <section className="why">
        <div className="why-media"><img src={IMG.warehouse} alt="Logistics operations"/><div className="stamp">GOING<br/>BEYOND<br/>& OVER</div></div>
        <div className="why-copy"><span className="section-tag">05 / WHY GBO</span><h2>Why choose<br/>GBO Logistics?</h2>
          {[
            ["Specialized Expertise","Expert handling of heavy equipment, glass, and special cargo with Flat Rack and Open Top containers."],
            ["Global Network","Extensive partnerships with carriers and agents across 150+ countries."],
            ["Real-Time Tracking","Complete visibility of your shipments from origin to destination."],
            ["24/7 Support","Round-the-clock customer service for all your logistics needs."]
          ].map(([t,d],i)=><div className="why-item" key={t}><b>{String(i+1).padStart(2,"0")}</b><div><h3>{t}</h3><p>{d}</p></div></div>)}
        </div>
      </section>

      <section className="industries" id="industries">
        <div className="section-head"><div><span className="section-tag">06 / INDUSTRIES</span><h2>Built around<br/>your industry.</h2></div><p>Tailored logistics solutions across diverse sectors.</p></div>
        <div className="industry-grid">{industries.map(([t,d,ic])=><article key={t}><span>{ic}</span><h3>{t}</h3><p>{d}</p><i>↗</i></article>)}</div>
      </section>

      <section className="impact">
        <div className="impact-copy"><span>OUR GLOBAL IMPACT</span><h2>Trusted worldwide.<br/>Delivered every day.</h2></div>
        <div className="metrics">
          <div><strong><Count to={50} suffix="+"/></strong><span>Countries Served</span></div>
          <div><strong><Count to={100} suffix="+"/></strong><span>Happy Clients</span></div>
          <div><strong><Count to={1000} suffix="+"/></strong><span>Shipments Completed</span></div>
          <div><strong><Count to={99.8} suffix="%"/></strong><span>On-Time Delivery</span></div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-copy"><span className="section-tag">07 / GET IN TOUCH</span><h2>Ready to move<br/><em>your cargo?</em></h2><p>Tell us what you need to ship and our team will get back to you with a customized logistics solution.</p>
          <div className="contact-lines"><a href="mailto:ghinwa@gboloistics.com">ghinwa@gboloistics.com</a><a href="tel:+96176693278">+961 76 693 278</a><address>3rd floor Rafic Hariri Hospital Street<br/>Office #14, Bldg Mayss 6<br/>Jnah, Beirut</address></div>
        </div>
        <form onSubmit={e=>{e.preventDefault();setSent(true)}} className="contact-form">
          <label>Full Name<input required placeholder="John Doe"/></label>
          <label>Email Address<input required type="email" placeholder="john@company.com"/></label>
          <div className="two"><label>Phone Number<input placeholder="+961 ..."/></label><label>Company<input placeholder="Your Company"/></label></div>
          <label>Message<textarea required rows={5} placeholder="Tell us about your shipment..."/></label>
          <button className="btn primary" type="submit">{sent?"Request Received ✓":"Submit Request ↗"}</button>
          {sent&&<p className="sent">Demo form submitted locally. Connect this form to your preferred email/API endpoint before production.</p>}
        </form>
      </section>
    </main>

    <footer>
      <div className="footer-main">
        <a className="logo footer-logo" href="#home"><img src={IMG.logo} alt="GBO Logistics"/><span>GBO <b>LOGISTICS</b></span></a>
        <p>Your trusted partner in global freight forwarding, delivering excellence across air, sea, and land transportation worldwide.</p>
        <div className="footer-links"><a href="#services">Services</a><a href="#about">About Us</a><a href="#industries">Global Reach</a><a href="#contact">Contact</a></div>
      </div>
      <div className="footer-bottom"><span>© 2026 GBO Logistics. All rights reserved.</span><a href="https://hki-it.com" target="_blank" rel="noreferrer">Developed by HKI IT ↗</a></div>
    </footer>
  </div>
}
export default App;
