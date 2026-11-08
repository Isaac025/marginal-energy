import { Link } from "react-router-dom";
import { hero } from "../data/content";

function Wordmark({ text }) {
  // Letters rise in one by one, then a light sweep loops across the word.
  return (
    <h1 className="me-wordmark" aria-label={text}>
      {text.split("").map((char, i) => (
        <span key={i} aria-hidden="true" style={{ animationDelay: `${0.15 + i * 0.07}s` }}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
}

export default function Hero() {
  return (
    <section className="me-hero">
      <div className="me-rings" aria-hidden="true"><i /><i /><i /></div>
      <div className="me-hero-inner">
        <p className="me-kicker">{hero.kicker}</p>
        <Wordmark text={hero.title} />
        <p className="me-tag">{hero.tagline}</p>
        <div className="me-hero-cta">
          <Link className="me-btn leaf" to="/services">Our services</Link>
          <Link className="me-btn ghost" to="/our-commitment">Our commitment</Link>
        </div>
      </div>
      <div className="me-scroll" aria-hidden="true" />
    </section>
  );
}
