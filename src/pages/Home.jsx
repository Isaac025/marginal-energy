import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { hero, home } from "../data/content";
import Reveal from "../components/Reveal";
import "./Home.css";

const slides = [
  {
    title: "Driving Excellence Across the Energy Sector",
    text: "Marginal Energy is committed to powering progress through responsible and reliable energy solutions. We operate at the intersection of innovation, efficiency, and sustainability, delivering energy that fuels growth while respecting the environment and the communities we serve.",
    image: "https://marginal-energy.com/wp-content/uploads/2026/02/Home.png",
    cta: "Discover Our Company",
    to: "/about",
  },
  {
    title: "Powering More, Responsibly",
    text: "In a world that demands greater performance, greater access, and greater progress, the true measure of leadership lies not just in how much we deliver but in how we deliver it. Powering more, responsibly means embracing innovation while staying firmly committed to sustainability, integrity, and long-term impact.",
    image:
      "https://marginal-energy.com/wp-content/uploads/2026/02/Untitled-design-2.png",
    cta: "Our Commitment",
    to: "/our-commitment",
  },
  {
    title: "Leading the Future of Oil & Gas",
    text: "We are entering a new era, one defined by bold ideas, smarter technologies, and a relentless drive to lead. Our commitment is to redefine what leadership looks like in an evolving global energy landscape.",
    image:
      "https://marginal-energy.com/wp-content/uploads/2026/02/Untitled-design-1.png",
    cta: "Explore Our Services",
    to: "/services",
  },
];

const values = [
  "Integrity",
  "Innovation",
  "Sustainability",
  "Excellence",
  "Partnership",
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6500);

    return () => clearInterval(timer);
  }, []);

  const currentSlide = slides[activeSlide];

  return (
    <main className="home-page">
      {/* HERO SLIDER */}
      <section className="home-hero">
        {slides.map((slide, index) => (
          <div
            key={slide.title}
            className={`home-hero-bg ${activeSlide === index ? "active" : ""}`}
            style={{ backgroundImage: `url("${slide.image}")` }}
          />
        ))}

        <div className="home-hero-overlay" />

        <div className="home-hero-content">
          <span className="home-eyebrow">
            <span />
            {hero.kicker}
          </span>

          <h1 key={currentSlide.title} className="hero-heading">
            {currentSlide.title}
          </h1>

          <p key={currentSlide.text} className="hero-description">
            {currentSlide.text}
          </p>

          <Link to={currentSlide.to} className="home-hero-btn">
            {currentSlide.cta}
            <span>↗</span>
          </Link>
        </div>

        <div className="home-hero-footer">
          <div className="hero-pagination">
            {slides.map((slide, index) => (
              <button
                key={slide.title}
                className={activeSlide === index ? "selected" : ""}
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <span className="hero-counter">
            0{activeSlide + 1} <span>/</span> 0{slides.length}
          </span>

          <div className="hero-controls">
            <button
              onClick={() =>
                setActiveSlide(
                  (activeSlide - 1 + slides.length) % slides.length,
                )
              }
              aria-label="Previous slide"
            >
              ←
            </button>
            <button
              onClick={() => setActiveSlide((activeSlide + 1) % slides.length)}
              aria-label="Next slide"
            >
              →
            </button>
          </div>
        </div>

        <div className="hero-side-label">MARGINAL ENERGY LIMITED</div>
      </section>

      {/* COMPANY INTRODUCTION */}
      <section className="home-intro section-padding">
        <Reveal className="home-container intro-grid">
          <div className="intro-heading">
            <span className="section-label">WHO WE ARE</span>
            <h2>
              Powering progress.
              <br />
              <span>Creating lasting value.</span>
            </h2>
          </div>

          <div className="intro-copy">
            <p>{home.statement}</p>

            <p>
              As an integrated energy company, we believe the future of energy
              must balance performance with responsibility. Guided by our
              commitment to responsible growth, we provide essential energy
              resources while continuously improving how we operate, invest, and
              innovate.
            </p>

            <Link to="/about" className="text-link">
              Discover Marginal Energy <span>↗</span>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* NORTH STAR */}
      <section className="home-northstar section-padding">
        <div className="home-container northstar-grid">
          <Reveal className="northstar-image">
            <img
              src="https://marginal-energy.com/wp-content/uploads/2026/02/bright-orange-flames-industrial-flare-stack-large-oil-gas-refinery-complex-under-clear-blue-sky-ai-generated-416546510.webp"
              alt="Industrial oil and gas refinery operations"
            />
            <div className="image-caption">
              <span>01 / OUR DIRECTION</span>
              <span>Built for the future</span>
            </div>
          </Reveal>

          <Reveal className="northstar-content">
            <span className="section-label">OUR NORTH STAR</span>

            <h2>
              Responsible energy.
              <br />
              <span>Meaningful impact.</span>
            </h2>

            <p>
              At Marginal Energy, our mission is to be a responsible provider of
              integrated energy solutions, delivering lasting value across
              Africa and beyond.
            </p>

            <p>
              As an integrated energy company, we believe the future of energy
              must balance performance with responsibility. Our approach ensures
              that economic progress, environmental stewardship, and social
              impact move forward together.
            </p>

            <Link to="/about" className="home-outline-btn">
              Learn more about us <span>↗</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* MISSION AND VISION */}
      <section className="home-purpose section-padding">
        <div className="home-container">
          <Reveal className="purpose-heading">
            <span className="section-label">OUR PURPOSE</span>
            <h2>What drives us forward</h2>
            <p>
              A clear purpose, a shared vision, and a commitment to excellence
              guide everything we do.
            </p>
          </Reveal>

          <div className="purpose-grid">
            <Reveal className="purpose-card mission-card">
              <span className="purpose-number">01</span>
              <div className="purpose-icon">◎</div>
              <span className="section-label">OUR MISSION</span>
              <h3>Creating value through responsible energy.</h3>
              <p>
                At Marginal Energy, our mission is to be a responsible provider
                of integrated energy solutions, delivering lasting value across
                Africa and beyond.
              </p>
            </Reveal>

            <Reveal className="purpose-card vision-card">
              <span className="purpose-number">02</span>
              <div className="purpose-icon">↗</div>
              <span className="section-label">OUR VISION</span>
              <h3>Becoming Africa's energy company of first preference.</h3>
              <p>
                Our vision is to be the energy company of first preference in
                Africa, delivering reliable, impactful, and future-ready
                solutions across the entire energy value chain.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="home-values section-padding">
        <div className="home-container values-layout">
          <Reveal className="values-intro">
            <span className="section-label">WHAT WE STAND FOR</span>
            <h2>
              Our Core
              <br />
              <span>Values.</span>
            </h2>
            <p>
              Our values shape our culture, guide our decisions, and define how
              we build relationships with our partners, stakeholders, and host
              communities.
            </p>
          </Reveal>

          <div className="values-list">
            {values.map((value, index) => (
              <Reveal key={value} className="value-item">
                <span>0{index + 1}</span>
                <h3>{value}</h3>
                <span className="value-arrow">↗</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="home-approach section-padding">
        <div className="home-container approach-grid">
          <Reveal className="approach-content">
            <span className="section-label">OUR APPROACH</span>
            <h2>
              Excellence in every
              <br />
              <span>operation.</span>
            </h2>

            <p>
              At Marginal Energy, our approach is built on excellence,
              responsibility, and long-term value creation.
            </p>

            <p>
              We combine innovative thinking with proven industry practices to
              deliver safe, efficient, and sustainable energy solutions.
              Collaboration, integrity, and environmental responsibility guide
              every decision we make.
            </p>

            <Link to="/our-commitment" className="text-link">
              Explore our commitment <span>↗</span>
            </Link>
          </Reveal>

          <Reveal className="approach-image">
            <img
              src="https://marginal-energy.com/wp-content/uploads/2026/02/A-petroleum-refinery.jpg"
              alt="Petroleum refinery and energy infrastructure"
            />
            <div className="approach-image-overlay">
              <span>POWERING MORE, RESPONSIBLY</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="home-services section-padding">
        <div className="home-container">
          <Reveal className="services-heading">
            <span className="section-label">WHAT WE DO</span>
            <h2>Services as promised.</h2>
            <p>
              Marginal Energy is committed to delivering dependable, efficient,
              and forward-thinking energy solutions. We place our clients at the
              center of everything we do, ensuring operational reliability,
              strict safety standards, and responsible environmental practices.
            </p>
          </Reveal>

          <div className="service-links">
            {home.tiles.map((tile, index) => (
              <Reveal key={tile.to} className="service-link-card">
                <span>0{index + 1}</span>
                <h3>{tile.title}</h3>
                <p>{tile.text}</p>
                <Link to={tile.to}>
                  {tile.cta} <span>↗</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LATEST NEWS */}
      <section className="home-news section-padding">
        <div className="home-container news-content">
          <Reveal>
            <span className="section-label">LATEST DEVELOPMENTS</span>
            <h2>{home.latest.heading}</h2>
            <p>{home.latest.text}</p>
            <Link to={home.latest.to} className="home-hero-btn">
              {home.latest.cta} <span>↗</span>
            </Link>
          </Reveal>

          <div className="news-decoration">ME.</div>
        </div>
      </section>
    </main>
  );
}
