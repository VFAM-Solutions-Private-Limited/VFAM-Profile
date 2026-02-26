import { Canvas } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { Menu, Server, ShieldCheck, X, Zap } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Particles from './assets/medusae';
import logo from './assets/LOGO.png';
import './App.css';

// function App() {
//   return (
//     <div style={{ width: "100vw", height: "100vh", background: "#000000" }}>
//       <Canvas camera={{ position: [0, 0, 5] }}>
//         <color attach="background" args={["#000000"]} />
//         <Particles />
//       </Canvas>


//     </div>
//   );
// }


function App() {
  const contactFormRef = useRef(null);
  const isSubmittingRef = useRef(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  const handleContactSubmit = async (event) => {
    event.preventDefault();
    if (!contactFormRef.current || isSubmittingRef.current) return;

    isSubmittingRef.current = true;

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        contactFormRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      contactFormRef.current.reset();
      alert('Thanks! Your message has been sent.');
    } catch (error) {
      console.error('EmailJS error:', error);
      alert('Sorry, something went wrong. Please try again.');
    } finally {
      isSubmittingRef.current = false;
    }
  };

  return (
    <>
      <div className="hero-wrapper">
        {/* 🔹 Background Animation */}
        <Canvas className="hero-canvas" camera={{ position: [0, 0, 5] }} dpr={1} gl={{ alpha: true }}>
          <Particles />
        </Canvas>

        {/* 🔹 Overlay Content */}
        <div className="hero-overlay">
          <header className={`site-header ${isMobileNavOpen ? 'mobile-nav-open' : ''}`}>
            <div className="site-header-inner">
              <div className="brand">
                <img className="brand-logo" src={logo} alt="VFAM Solutions logo" />
                <span className="brand-name">VFAM SOLUTIONS</span>
              </div>

              <nav className="site-nav desktop-nav" aria-label="Upcoming sections">
                <a className="nav-link" href="#about">What we build</a>
                <a className="nav-link" href="#why-vfam">Why VFAM</a>
                <a className="nav-link" href="#contact">Contact</a>
              </nav>

              <div className="header-cta desktop-cta">
                <a href="#contact" className="btn header-cta-btn">Book a demo</a>
              </div>

              <button
                type="button"
                className="mobile-nav-toggle"
                aria-label={isMobileNavOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isMobileNavOpen}
                aria-controls="mobile-nav-panel"
                onClick={() => setIsMobileNavOpen((previous) => !previous)}
              >
                {isMobileNavOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
              </button>
            </div>

            <nav
              id="mobile-nav-panel"
              className={`mobile-nav-panel ${isMobileNavOpen ? 'is-open' : ''}`}
              aria-label="Mobile navigation"
            >
              <a className="mobile-nav-link" href="#about" onClick={closeMobileNav}>What we build</a>
              <a className="mobile-nav-link" href="#why-vfam" onClick={closeMobileNav}>Why VFAM</a>
              <a className="mobile-nav-link" href="#contact" onClick={closeMobileNav}>Contact</a>
              <a className="btn mobile-nav-cta" href="#contact" onClick={closeMobileNav}>Book a demo</a>
            </nav>
          </header>

          <main id="top">
            <section className="hero" aria-labelledby="hero-title">
              <div className="hero-content">
                <p className="eyebrow">Product-Based SaaS Engineering</p>

                <h1 id="hero-title">
                  <span className="hero-title-line">Build Smarter.</span>
                  <span className="hero-title-line">Scale Faster.</span>
                </h1>

                <p className="hero-subtitle">
                  VFAM Solutions delivers high-performance SaaS platforms engineered
                  for growth, security, and seamless scalability.
                </p>

                <div className="hero-ctas">
                  <a href="#contact" className="btn btn-primary">Get started</a>
                  {/* <a href="#contact" className="btn btn-secondary">Book a demo</a> */}
                </div>

                {/* <div className="hero-meta">
                  <span>Enterprise-ready from day zero</span>
                  <span className="divider-dot"></span>
                  <span>API-first. Cloud-native. Secure by design.</span>
                </div> */}
              </div>
            </section>
          </main>
        </div>
      </div>

      <main className="sections-wrapper">
        <section id="about" className="content-section section--light section--about">
          <div className="section-inner">
            <p className="section-eyebrow">What we build</p>
            <h2>Product-Driven SaaS Architecture</h2>
            <p className="section-lede">
              Platforms that stay stable under pressure, integrate cleanly, and keep shipping as your
              product and teams scale.
            </p>
            <div className="build-cards">
              <article className="build-card">
                <div className="build-icon" aria-hidden="true">
                  <Server />
                </div>
                <h3>Scalable Infrastructure</h3>
                <p>
                  Cloud-native architecture designed for predictable growth, multi-tenant control,
                  and global availability.
                </p>
              </article>
              <article className="build-card">
                <div className="build-icon" aria-hidden="true">
                  <ShieldCheck />
                </div>
                <h3>Enterprise Security</h3>
                <p>
                  Built-in security posture with encryption, role-based access, auditability, and
                  compliance-ready foundations.
                </p>
              </article>
              <article className="build-card">
                <div className="build-icon" aria-hidden="true">
                  <Zap />
                </div>
                <h3>Intelligent Automation</h3>
                <p>
                  Automate onboarding, billing, and operations to remove manual friction and keep
                  teams focused on product.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="why-vfam" className="content-section section--dark section--why">
          <div className="section-inner">
            <div className="section-split">
              <div className="section-split-left">
                <p className="section-eyebrow">Why VFAM</p>
                <h2>Why leading teams choose VFAM</h2>
                <p className="section-lede">
                  A clean foundation matters more than flashy features. We prioritize clarity,
                  performance, and predictable delivery—so you can scale with confidence.
                </p>
              </div>

              <div className="section-split-right">
                <div className="why-cards">
                  <article className="why-card">
                    <h3>Engineering excellence</h3>
                    <p>
                      Senior engineers who care about clean, maintainable systems rather than quick wins.
                    </p>
                  </article>

                  <article className="why-card">
                    <h3>Predictable delivery</h3>
                    <p>
                      Lightweight process, clear milestones, and honest trade‑offs so you always know where things stand.
                    </p>
                  </article>

                  <article className="why-card">
                    <h3>Secure foundations</h3>
                    <p>
                      Cloud‑native patterns with security, observability, and resilience designed in from day one.
                    </p>
                  </article>

                  <article className="why-card">
                    <h3>Long‑term thinking</h3>
                    <p>
                      Architectures that are easy to evolve as your product and team grow—not throw‑away builds.
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="content-section section--light contact-section">
          <div className="section-inner">
            <p className="section-eyebrow">Contact</p>
            <h2>Tell us what you&apos;re building</h2>
            <p>
              Share a short overview of your product, timelines, and what you need from a platform
              partner. We&apos;ll get back to you with a focused next step.
            </p>
            <div className="contact-grid">
              <form className="contact-form" ref={contactFormRef} onSubmit={handleContactSubmit}>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="contact-name">Name</label>
                    <input id="contact-name" type="text" name="name" placeholder="" required />
                  </div>
                  <div className="form-field">
                    <label htmlFor="contact-email">Work email</label>
                    <input id="contact-email" type="email" name="email" placeholder="" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="contact-company">Company</label>
                    <input id="contact-company" type="text" name="company" placeholder="" required />
                  </div>
                  <div className="form-field">
                    <label htmlFor="contact-role">Role</label>
                    <input id="contact-role" type="text" name="role" placeholder="" required />
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="contact-intent">What are you looking to build?</label>
                  <select id="contact-intent" name="intent" required>
                    <option value="">Select an option</option>
                    <option value="saas">New SaaS platform</option>
                    <option value="modernize">Modernize existing product</option>
                    <option value="data">Data + AI enablement</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="contact-context">Context</label>
                  <textarea
                    id="contact-context"
                    name="message"
                    rows="5"
                    placeholder="Short description of your product, current stack, and timelines."
                    required
                  />
                </div>
                <div className="form-footer">
                  <button type="submit" className="btn btn-primary submit-btn">Submit</button>
                  <p className="form-note">
                    We only use this information to respond to your enquiry.
                  </p>
                </div>
              </form>
              <aside className="contact-aside">
                <div className="contact-aside-block">
                  <h3>Built for conversations that matter</h3>
                  <p>
                    No sales sequences. You speak directly with the engineers and designers who
                    shape VFAM&apos;s platforms.
                  </p>
                </div>
                <div className="contact-aside-block">
                  <h4>Typical next steps</h4>
                  <ul>
                    <li>Lightweight discovery call</li>
                    <li>Architecture notes tailored to your stack</li>
                    <li>Clear recommendation on whether VFAM is a fit</li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <img className="footer-logo" src={logo} alt="VFAM Solutions logo" />
              <div className="footer-brand-text">
                <span className="footer-brand-name">VFAM Solutions</span>
                <span className="footer-brand-name">Private Limited</span>
              </div>
            </div>

            <div className="footer-columns">
              <div className="footer-col">
                <h3>Company</h3>
                <ul>
                  <li><a href="#about">Overview</a></li>
                  <li><a href="#about">What we build</a></li>
                  <li><a href="#why-vfam">Why VFAM</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h3>Contact</h3>
                <ul>
                  <li><a href="#contact">Contact form</a></li>
                  <li><a href="mailto:vfamsolutions@gmail.com">Email</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-meta">
              <span>© 2026 VFAM Solutions Private Limited.</span>
              <span className="footer-divider" aria-hidden="true"></span>
              <a className="footer-link" href="#">Privacy Policy</a>
              <span className="footer-divider" aria-hidden="true"></span>
              <a className="footer-link" href="#">Terms</a>
            </div>
                {/* <a className="footer-social" href="#" aria-label="VFAM social">
                  <span className="social-icon" aria-hidden="true"></span>
                </a> */}
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
