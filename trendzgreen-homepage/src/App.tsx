import { FormEvent, useEffect, useState } from "react";
import {
  ArrowRight, BoxArrowDown, Check, Clock, Cube, EnvelopeSimple, Factory,
  GlobeHemisphereWest, InstagramLogo, Leaf, LinkedinLogo, List, MapPin, Package,
  PaperPlaneTilt, Phone, ShieldCheck, Sparkle, Truck, X,
} from "@phosphor-icons/react";

type InquiryMode = "quote" | "samples" | "custom";

const products = [
  { title: "Cups & Lids", description: "Paper & PLA cups, lids and cold cups for every beverage need.", image: "/assets/category-cups.png" },
  { title: "Food Containers", description: "Bagasse, paper and PLA containers for hot, cold and takeaway food.", image: "/assets/category-containers.png" },
  { title: "Tableware", description: "Wooden and CPLA cutlery, plates, bowls and service accessories.", image: "/assets/category-tableware.png" },
  { title: "Bags & Wraps", description: "Paper bags, sandwich wraps and food-grade greaseproof papers.", image: "/assets/category-bags.png" },
];

const certifications = ["FDA", "FSC", "BPI", "BRCGS", "OK compost", "SGS"];
const materials = ["Bagasse", "Paper", "PLA", "CPLA", "Wood"];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [inquiryMode, setInquiryMode] = useState<InquiryMode | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.body.style.overflow = inquiryMode ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [inquiryMode]);

  function openInquiry(mode: InquiryMode) {
    setSubmitted(false);
    setInquiryMode(mode);
    setMenuOpen(false);
  }

  function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="site-shell">
      <div className="utility-bar">
        <div className="container utility-inner">
          <span>Global B2B Supply · China & Thailand Manufacturing</span>
          <div className="utility-actions">
            <span><GlobeHemisphereWest size={14} /> English</span>
            <a href="mailto:contact@nbtrendz.com"><EnvelopeSimple size={14} /> contact@nbtrendz.com</a>
          </div>
        </div>
      </div>

      <header className="header">
        <div className="container nav-inner">
          <button className="logo-button" onClick={() => scrollToId("top")} aria-label="Back to top">
            <img src="/assets/logo.png" alt="Trendz Green Packaging" />
          </button>
          <nav className={"nav-links " + (menuOpen ? "is-open" : "")} aria-label="Primary navigation">
            <button onClick={() => scrollToId("products")}>Products</button>
            <button onClick={() => scrollToId("markets")}>Solutions</button>
            <button onClick={() => scrollToId("custom")}>Custom Packaging</button>
            <button onClick={() => scrollToId("materials")}>Sustainability</button>
            <button onClick={() => scrollToId("factory")}>About</button>
            <button onClick={() => scrollToId("resources")}>Resources</button>
            <button className="button button-primary nav-cta" onClick={() => openInquiry("quote")}>Request a Quote</button>
          </nav>
          <button className="menu-button" aria-label="Toggle menu" onClick={() => setMenuOpen((value) => !value)}>
            {menuOpen ? <X size={25} /> : <List size={25} />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Eco food packaging for global brands</p>
              <h1>Packaging made better for business — and the planet.</h1>
              <p className="hero-lead">Certified food packaging, custom-built for brands, distributors and foodservice teams worldwide.</p>
              <div className="hero-actions">
                <button className="button button-primary" onClick={() => openInquiry("quote")}>Request a Quote <ArrowRight size={17} /></button>
                <button className="button button-secondary" onClick={() => scrollToId("products")}>Explore Products</button>
              </div>
              <button className="text-link" onClick={() => scrollToId("resources")}><BoxArrowDown size={18} /> Download Catalog</button>
            </div>
            <div className="hero-media"><img src="/assets/hero.png" alt="Trendz Green sustainable food packaging range" /></div>
          </div>
        </section>
        <section className="proof-bar" aria-label="Company facts">
          <div className="container proof-grid">
            <article><ShieldCheck size={30} /><div><strong>16+ Years</strong><span>Manufacturing experience</span></div></article>
            <article><Cube size={30} /><div><strong>800+ Products</strong><span>Complete packaging range</span></div></article>
            <article><GlobeHemisphereWest size={30} /><div><strong>China + Thailand</strong><span>Dual manufacturing bases</span></div></article>
            <article><Clock size={30} /><div><strong>Reply within 12h</strong><span>Fast and reliable support</span></div></article>
          </div>
        </section>

        <section className="section products-section" id="products">
          <div className="container">
            <div className="section-heading centered-heading">
              <p className="eyebrow">Complete packaging range</p>
              <h2>Everything your foodservice business needs.</h2>
              <p>Source across materials and formats from one experienced export partner.</p>
            </div>
            <div className="product-grid">
              {products.map((product) => (
                <article className="product-card" key={product.title}>
                  <div className="product-image"><img src={product.image} alt={product.title} /></div>
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <button onClick={() => openInquiry("quote")}>View range <ArrowRight size={16} /></button>
                </article>
              ))}
            </div>
            <button className="center-link" onClick={() => openInquiry("quote")}>View all products <ArrowRight size={17} /></button>
          </div>
        </section>

        <section className="section trust-section" id="markets">
          <div className="container trust-grid">
            <div className="trust-intro">
              <p className="eyebrow">Built for your market</p>
              <h2>Trusted quality. Global standards.</h2>
              <p>We help brands and distributors deliver safe, reliable and sustainable packaging that meets the world's most recognized requirements.</p>
              <div className="cert-row">{certifications.map((certification) => <span key={certification}>{certification}</span>)}</div>
            </div>
            <div className="trust-list">
              {[
                ["Food-safe & compliant", "Materials and production meet international food contact standards."],
                ["Sustainable by design", "Renewable, compostable and recyclable material options."],
                ["Consistent quality", "Strict QC at every step, from raw material to finished goods."],
                ["Global supply partner", "Serving distributors, chains, supermarkets and private brands worldwide."],
              ].map(([title, copy]) => (
                <article key={title}><span><Check size={17} weight="bold" /></span><div><h3>{title}</h3><p>{copy}</p></div></article>
              ))}
            </div>
          </div>
        </section>
        <section className="section factory-section" id="factory">
          <div className="container factory-grid">
            <div className="factory-image"><img src="/assets/factory.png" alt="Modern food packaging manufacturing line" /></div>
            <div className="factory-copy">
              <p className="eyebrow">Manufacturing you can rely on</p>
              <h2>From concept to container, under one quality system.</h2>
              <div className="feature-grid">
                <article><ShieldCheck size={30} /><h3>Quality first</h3><p>Incoming inspection, in-process control and final audit to ensure stable, reliable quality.</p></article>
                <article><Sparkle size={30} /><h3>OEM / ODM</h3><p>Custom sizes, designs, printing and packaging to build your brand advantage.</p></article>
                <article><Truck size={30} /><h3>On-time delivery</h3><p>Strong production capacity and supply-chain coordination for dependable shipment.</p></article>
              </div>
              <button className="text-link" onClick={() => openInquiry("custom")}>Learn more about manufacturing <ArrowRight size={17} /></button>
            </div>
          </div>
        </section>

        <section className="section process-section" id="custom">
          <div className="container">
            <div className="process-header">
              <div><p className="eyebrow">Custom packaging made simple</p><h2>Your idea. Our process.</h2></div>
              <button className="button button-primary" onClick={() => openInquiry("custom")}>Start a custom project</button>
            </div>
            <div className="process-grid">
              {[
                ["01", "Brief", "Share your requirements, application and target market."],
                ["02", "Sample", "We provide samples and confirm product details together."],
                ["03", "Production", "Mass production with strict quality control."],
                ["04", "Delivery", "Packed securely and delivered to your destination."],
              ].map(([number, title, copy], index) => (
                <article key={number}><span>{number}</span><div className="process-icon">{index === 0 ? <PaperPlaneTilt /> : index === 1 ? <Package /> : index === 2 ? <Factory /> : <Truck />}</div><h3>{title}</h3><p>{copy}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="section materials-section" id="materials">
          <div className="container">
            <div className="section-heading"><p className="eyebrow">Sustainable material options</p><h2>Choose the right material for every market.</h2></div>
            <div className="materials-visual">
              <img src="/assets/materials-strip.png" alt="Bagasse, paper, PLA, CPLA and wooden packaging materials" />
              <div className="material-labels">{materials.map((material) => <span key={material}>{material}</span>)}</div>
            </div>
          </div>
        </section>
        <section className="testimonial-section">
          <div className="container testimonial-inner">
            <span className="quote-mark">“</span>
            <blockquote>Trendz Green has been a reliable partner for our private label program. Consistent quality, thoughtful customization and dependable lead times.</blockquote>
            <p>Procurement Manager · European Foodservice Distributor</p>
          </div>
        </section>

        <section className="section resources-section" id="resources">
          <div className="container resources-grid">
            <article><Leaf size={29} /><h3>Material Guide</h3><p>Compare performance, disposal routes and market fit.</p><button onClick={() => scrollToId("materials")}>Explore materials <ArrowRight size={16} /></button></article>
            <article><ShieldCheck size={29} /><h3>Compliance Support</h3><p>Get the documents your buyers and target markets require.</p><button onClick={() => openInquiry("quote")}>Request documents <ArrowRight size={16} /></button></article>
            <article><BoxArrowDown size={29} /><h3>Product Catalog</h3><p>Review product families, sizes and customization options.</p><button onClick={() => openInquiry("samples")}>Request catalog <ArrowRight size={16} /></button></article>
          </div>
        </section>

        <section className="container final-cta">
          <div><Leaf size={36} weight="fill" /><h2>Tell us what you need.<br />We’ll build the right packaging plan.</h2></div>
          <div><button className="button button-light" onClick={() => openInquiry("quote")}>Request a Quote</button><button className="button button-outline-light" onClick={() => openInquiry("samples")}>Get Free Samples</button></div>
        </section>
      </main>
      <footer className="footer" id="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <img src="/assets/logo.png" alt="Trendz Green Packaging" />
            <p>Certified, customizable food packaging for distributors, foodservice groups and private brands worldwide.</p>
            <div className="footer-contact">
              <a href="mailto:contact@nbtrendz.com"><EnvelopeSimple size={17} /> contact@nbtrendz.com</a>
              <a href="tel:+8618100126181"><Phone size={17} /> +86 181 0012 6181</a>
              <span><MapPin size={17} /> No. 199, Xiangyun North Road, Ningbo, Zhejiang, China</span>
            </div>
          </div>
          <div><h3>Products</h3><button onClick={() => scrollToId("products")}>Cups &amp; Lids</button><button onClick={() => scrollToId("products")}>Food Containers</button><button onClick={() => scrollToId("products")}>Tableware</button><button onClick={() => scrollToId("products")}>Bags &amp; Wraps</button></div>
          <div><h3>Solutions</h3><button onClick={() => scrollToId("custom")}>Custom Packaging</button><button onClick={() => scrollToId("materials")}>Sustainable Materials</button><button onClick={() => scrollToId("markets")}>Compliance Support</button><button onClick={() => scrollToId("factory")}>Manufacturing</button></div>
          <div><h3>Company</h3><button onClick={() => scrollToId("factory")}>About Trendz</button><button onClick={() => scrollToId("resources")}>Resources</button><button onClick={() => openInquiry("samples")}>Request Samples</button><button onClick={() => openInquiry("quote")}>Contact Us</button></div>
        </div>
        <div className="footer-legal">
          <div className="container footer-bottom">
            <p>
              © 2026 ·{" "}
              <a href="https://www.trendzgreen.com/" target="_blank" rel="noopener noreferrer">
                Trendz Green 宁波泉石绿色包装材料有限公司
              </a>
              <br className="footer-mobile-break" />
              {" "}· All Rights Reserved |{" "}
              <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">
                浙ICP备2026004991号
              </a>
            </p>
            <nav className="footer-socials" aria-label="Trendz Green social media">
              <a
                href="https://www.instagram.com/trendzgreen_foodpackaging/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Trendz Green on Instagram"
                title="Instagram"
              >
                <InstagramLogo size={18} weight="bold" />
              </a>
              <a
                href="https://www.linkedin.com/company/trendzgreen/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Trendz Green on LinkedIn"
                title="LinkedIn"
              >
                <LinkedinLogo size={18} weight="bold" />
              </a>
            </nav>
          </div>
        </div>
      </footer>

      {inquiryMode && (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setInquiryMode(null)}>
          <section className="inquiry-modal" role="dialog" aria-modal="true" aria-labelledby="inquiry-title" onMouseDown={(event) => event.stopPropagation()}>
            <button className="modal-close" aria-label="Close inquiry form" onClick={() => setInquiryMode(null)}><X size={22} /></button>
            {!submitted ? (
              <>
                <p className="eyebrow">{inquiryMode === "samples" ? "Sample request" : inquiryMode === "custom" ? "Custom packaging project" : "Business inquiry"}</p>
                <h2 id="inquiry-title">{inquiryMode === "samples" ? "Request your free samples." : inquiryMode === "custom" ? "Tell us about your packaging idea." : "Get a tailored quotation."}</h2>
                <p>Share a few details and our export team will reply within 12 hours.</p>
                <form onSubmit={submitInquiry}>
                  <label>Name<input name="name" autoComplete="name" required /></label>
                  <label>Work email<input name="email" type="email" autoComplete="email" required /></label>
                  <label>Company<input name="company" autoComplete="organization" required /></label>
                  <label>Product interest<select name="interest" defaultValue=""><option value="" disabled>Select a category</option><option>Cups &amp; Lids</option><option>Food Containers</option><option>Tableware</option><option>Bags &amp; Wraps</option><option>Custom / Multiple products</option></select></label>
                  <label className="full-field">Requirements<textarea name="requirements" rows={4} placeholder="Product, size, quantity, target market and timeline" required /></label>
                  <button className="button button-primary full-field" type="submit">Send inquiry <ArrowRight size={17} /></button>
                </form>
              </>
            ) : (
              <div className="success-state">
                <span><Check size={30} weight="bold" /></span>
                <h2>Thank you — we’ve received your request.</h2>
                <p>Our export team will review the details and reply within 12 hours.</p>
                <button className="button button-primary" onClick={() => setInquiryMode(null)}>Back to the website</button>
              </div>
            )}
          </section>
        </div>
      )}
    </div>
  );
}
