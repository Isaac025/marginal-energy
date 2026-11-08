import "./about.css";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import ScrollText from "../components/ScrollText";
import CountUp from "../components/CountUp";
import CtaBand from "../components/CtaBand";
import { about } from "../data/content";

const ICONS = {
  leaf: (
    <>
      <path d="M5 19c0-8 5-13 14-14 0 9-5 14-13 14" />
      <path d="M5 19c3-5 6-8 10-10" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="9" r="5" />
      <path d="M9 13.5L8 21l4-2 4 2-1-7.5" />
    </>
  ),
};

const Icon = ({ name }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    {ICONS[name]}
  </svg>
);

export default function About() {
  const { intro, photos, mv, values, chain, approach, recognition } = about;

  return (
    <div className="about">
      <PageHero kicker="Who we are" title="About" lead={about.tagline} />

      {/* Tagline marquee */}
      <div className="ab-marquee" aria-hidden="true">
        <div className="track">
          {[0, 1].map((g) => (
            <div key={g} className="group">
              {Array.from({ length: 6 }).map((_, i) => (
                <span key={i}>{about.tagline}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Intro: words light up as you scroll */}
      <section className="me-band ab-intro">
        <div className="me-wrap ab-center">
          <Reveal>
            <h2>{intro.heading}</h2>
          </Reveal>
          <ScrollText text={intro.body} />
        </div>
      </section>

      {/* Three photos, staggered, with parallax */}
      <section className="me-band ab-photos-band">
        <Reveal progress className="me-wrap ab-photos">
          {photos.map((p, i) => (
            <figure
              key={p.src}
              className={`ab-ph k${i}`}
              style={{ "--k": [70, -60, 80][i] }}
            >
              <img src={p.src} alt={p.alt} loading="lazy" />
            </figure>
          ))}
        </Reveal>
      </section>

      {/* Mission and vision */}
      <section className="me-band ab-mv">
        <Reveal className="me-wrap ab-mv-grid">
          {mv.map((c) => (
            <article key={c.title} className="ab-mv-card">
              <div className="media">
                <img src={c.image} alt="" loading="lazy" />
              </div>
              <div className="body">
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            </article>
          ))}
        </Reveal>
      </section>

      {/* Core values */}
      <section className="me-band ab-values">
        <Reveal className="me-wrap ab-values-grid">
          <h2>{about.valuesHeading}</h2>
          <ul>
            {values.map((v, i) => (
              <li key={v} style={{ "--i": i }}>
                {v}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* Value chain */}
      <section className="me-band me-dark ab-chain">
        <Reveal className="me-wrap">
          <h2>{chain.heading}</h2>
          <p className="me-lead">{chain.lead}</p>
          <ol className="ab-chain-list">
            {chain.stages.map((s, i) => (
              <li key={s.title} style={{ "--i": i }}>
                <span className="node" aria-hidden="true" />
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </section>

      {/* Approach and numbers */}
      <section className="me-band me-tint ab-lead">
        <Reveal className="me-wrap">
          <div className="ab-lead-head">
            <h2>{approach.heading}</h2>
            <div>
              {approach.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <ul className="ab-stats">
            {approach.stats.map((s) => (
              <li key={s.title}>
                <strong>
                  <CountUp to={s.value} />
                </strong>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* Recognition */}
      <section className="me-band ab-recog">
        <Reveal className="me-wrap">
          <div className="ab-recog-head">
            <h2>{recognition.heading}</h2>
            <p className="me-lead">{recognition.lead}</p>
          </div>
          <div className="ab-recog-grid">
            {recognition.items.map((r, i) => (
              <article key={r.title} className="ab-badge" style={{ "--i": i }}>
                <div className="ab-ico">
                  <Icon name={r.icon} />
                </div>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <CtaBand
        title="See how we give back"
        text="Our programmes support students, families and local businesses around our operations."
        to="/our-commitment"
        label="Our commitment"
      />
    </div>
  );
}
