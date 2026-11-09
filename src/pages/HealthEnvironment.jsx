import "./about.css";
import "./health-environment.css";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import ScrollText from "../components/ScrollText";
import CtaBand from "../components/CtaBand";
import Icon from "../components/Icon";
import { hse } from "../data/content";

export default function HealthEnvironment() {
  // Marquee repeats the practice names to fill the strip
  const words = Array.from({ length: 2 }).flatMap(() =>
    hse.items.map((i) => i.title),
  );

  return (
    <div className="about he">
      <PageHero kicker="Commitment" title="Health & Environment" />

      {/* Practice names marquee */}
      <div className="ab-marquee" aria-hidden="true">
        <div className="track">
          {[0, 1].map((g) => (
            <div key={g} className="group">
              {words.map((w, i) => (
                <span key={i}>{w}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Intro: words light up on scroll, then the site photo wipes in */}
      <section className="me-band he-intro">
        <div className="me-wrap ab-center">
          <Reveal>
            <h2>{hse.heading}</h2>
          </Reveal>
          <ScrollText text={hse.body} />
        </div>
        <Reveal progress className="me-wrap he-photo">
          <figure className="he-frame ab-ph" style={{ "--k": 50 }}>
            <img src={hse.image} alt={hse.imageAlt} loading="lazy" />
          </figure>
        </Reveal>
      </section>

      {/* Key HSE practices */}
      <section className="me-band me-tint he-practices">
        <Reveal className="me-wrap he-split">
          <div className="he-sticky">
            <h2>{hse.practicesHeading}</h2>
            <p className="me-lead">{hse.practicesLead}</p>
            <span className="he-rule" aria-hidden="true" />
          </div>
          <ul className="he-grid">
            {hse.items.map((p, i) => (
              <li key={p.title} className="he-card" style={{ "--i": i }}>
                <span className="ab-ico">
                  <Icon name={p.icon} />
                </span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* Certifications and recognition */}
      <section className="me-band he-certs">
        <Reveal progress className="me-wrap he-certs-grid">
          <div>
            <h2>{hse.certsHeading}</h2>
            <p className="me-lead">{hse.certsLead}</p>
            <div className="he-cert-list">
              {hse.certs.map((c, i) => (
                <article key={c.title} className="he-cert" style={{ "--i": i }}>
                  <span className="ab-ico">
                    <Icon name={c.icon} />
                  </span>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </article>
              ))}
            </div>
          </div>
          <figure className="he-frame he-tall ab-ph" style={{ "--k": -60 }}>
            <img src={hse.certsImage} alt={hse.certsImageAlt} loading="lazy" />
          </figure>
        </Reveal>
      </section>

      <CtaBand
        title="See our wider commitment"
        text="Scholarships, training and jobs for host communities."
        to="/our-commitment"
        label="Our Commitment"
      />
    </div>
  );
}
