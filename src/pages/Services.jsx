import { Link } from "react-router-dom";
import "./about.css";
import "./services.css";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import ScrollText from "../components/ScrollText";
import CtaBand from "../components/CtaBand";
import Icon from "../components/Icon";
import { services } from "../data/content";

// Decorative cross-section: layered rock, a drill line, data points.
const wave = (y0, y1, a) =>
  `M0 ${y0} Q100 ${y0 - a} 200 ${y0} T400 ${y0} V${y1} Q300 ${y1 + a} 200 ${y1} T0 ${y1} Z`;
const LAYERS = [
  { y0: 50, y1: 108, fill: "#1d7a52" },
  { y0: 108, y1: 168, fill: "#0e5a3c" },
  { y0: 168, y1: 222, fill: "#0a4a33" },
  { y0: 222, y1: 262, fill: "#ffeb12" }, // reservoir
  { y0: 262, y1: 310, fill: "#0b3828" },
];
const DOTS = [
  [90, 140],
  [315, 195],
  [140, 245],
  [300, 85],
  [255, 285],
];

function Strata() {
  return (
    <svg
      className="sv-strata"
      viewBox="0 0 400 320"
      role="img"
      aria-label="Illustration of rock layers with a drill reaching a reservoir"
    >
      {LAYERS.map((l, i) => (
        <path
          key={i}
          className="sv-layer"
          style={{ "--i": i }}
          d={wave(l.y0, l.y1, 10)}
          fill={l.fill}
        />
      ))}
      <line
        className="sv-drill"
        x1="200"
        y1="0"
        x2="200"
        y2="236"
        pathLength="1"
      />
      <path className="sv-bit" d="M191 236 L209 236 L200 254 Z" />
      {DOTS.map(([x, y], i) => (
        <circle
          key={i}
          className="sv-dot"
          style={{ "--i": i }}
          cx={x}
          cy={y}
          r="4"
        />
      ))}
    </svg>
  );
}

export default function Services() {
  const { intro, items, subsurface, features, commitment, experience } =
    services;
  const names = Array.from({ length: 2 }).flatMap(() =>
    items.map((i) => i.title),
  );

  return (
    <div className="about sv">
      <PageHero kicker="What we do" title="Services" lead={services.lead} />

      {/* Service names marquee */}
      <div className="ab-marquee" aria-hidden="true">
        <div className="track">
          {[0, 1].map((g) => (
            <div key={g} className="group">
              {names.map((n, i) => (
                <span key={i}>{n}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Intro: words light up on scroll */}
      <section className="me-band ab-intro">
        <div className="me-wrap ab-center">
          <Reveal>
            <h2>{intro.heading}</h2>
          </Reveal>
          <ScrollText text={intro.body} />
        </div>
      </section>

      {/* Six services */}
      <section className="me-band sv-gridband">
        <Reveal className="me-wrap sv-grid sv-stagger">
          {items.map((s, i) => (
            <article
              key={s.title}
              className="sv-card sv-item"
              style={{ "--i": i }}
            >
              <div className="ab-ico">
                <Icon name={s.icon} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </Reveal>
      </section>

      {/* Subsurface engineering */}
      <section className="me-band me-dark sv-subband">
        <Reveal className="me-wrap sv-sub">
          <div>
            <h2>{subsurface.heading}</h2>
            <p className="me-lead">{subsurface.text}</p>
            <ul className="sv-tags">
              {subsurface.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <div>
            <Strata />
          </div>
        </Reveal>
      </section>

      {/* Innovation */}
      <section className="me-band me-tint">
        <Reveal className="me-wrap sv-head">
          <h2>{features.heading}</h2>
          <p className="me-lead">{features.lead}</p>
        </Reveal>
        <Reveal className="me-wrap sv-feats">
          {features.items.map((f, i) => (
            <article key={f.title} className="ab-badge" style={{ "--i": i }}>
              <div className="ab-ico">
                <Icon name={f.icon} />
              </div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </article>
          ))}
        </Reveal>
      </section>

      {/* Commitment */}
      <section className="me-band">
        <Reveal progress className="me-wrap sv-split">
          <div>
            <h2>{commitment.heading}</h2>
            <p className="me-lead spaced">{commitment.body}</p>
            <Link className="me-btn" to="/our-commitment">
              {commitment.cta}
            </Link>
          </div>
          <figure className="sv-frame ab-ph" style={{ "--k": 70 }}>
            <img
              src={commitment.image}
              alt="People joining hands over green grass"
              loading="lazy"
            />
          </figure>
        </Reveal>
      </section>

      {/* Experience */}
      <section className="me-band me-tint">
        <Reveal className="me-wrap sv-head center">
          <h2>{experience.heading}</h2>
          <p className="me-lead">{experience.lead}</p>
        </Reveal>
        <Reveal className="me-wrap sv-photos sv-stagger">
          {experience.items.map((x, i) => (
            <article
              key={x.title}
              className="sv-photo sv-item"
              style={{ "--i": i }}
            >
              <div className="pic">
                <img src={x.image} alt={x.alt} loading="lazy" />
              </div>
              <h3>{x.title}</h3>
              <p>{x.text}</p>
            </article>
          ))}
        </Reveal>
        <div className="me-wrap sv-more">
          <Link className="me-btn" to="/media-blog">
            {experience.cta}
          </Link>
        </div>
      </section>

      <CtaBand
        title="Work with us"
        text="Talk to us about partnerships, projects and supply."
        to="/contact"
        label="Contact us"
      />
    </div>
  );
}
