import "./about.css";
import "./governance.css";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Accordion from "../components/Accordion";
import CtaBand from "../components/CtaBand";
import Icon from "../components/Icon";
import { governance } from "../data/content";

export default function Governance() {
  const { intro, principles, overview, recognition } = governance;
  // Marquee words repeat to fill the strip
  const words = Array.from({ length: 4 }).flatMap(() => intro.keywords);

  return (
    <div className="about gv">
      <PageHero
        kicker="About"
        title="Corporate Governance"
        lead={governance.lead}
      />

      {/* Keyword marquee */}
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

      {/* Commitment */}
      <section className="me-band me-tint">
        <Reveal progress className="me-wrap gv-split">
          <figure className="gv-frame ab-ph sq" style={{ "--k": 70 }}>
            <img src={intro.image} alt="" loading="lazy" />
          </figure>
          <div>
            <h2>{intro.heading}</h2>
            {intro.paragraphs.map((p) => (
              <p key={p} className="me-lead spaced">
                {p}
              </p>
            ))}
            <ul className="gv-keys">
              {intro.keywords.map((k) => (
                <li key={k}>{k}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* Principles */}
      <section className="me-band">
        <Reveal className="me-wrap gv-head">
          <h2>{principles.heading}</h2>
          <p className="me-lead">{principles.lead}</p>
        </Reveal>
        <Reveal progress className="me-wrap gv-split gv-principles">
          <div>
            <Accordion items={principles.items} />
          </div>
          <figure className="gv-frame ab-ph tall" style={{ "--k": -60 }}>
            <img src={principles.image} alt="" loading="lazy" />
          </figure>
        </Reveal>
      </section>

      {/* Overview: three steps */}
      <section className="me-band me-dark gv-overview">
        <Reveal className="me-wrap">
          <h2>{overview.heading}</h2>
          <p className="me-lead">{overview.lead}</p>
          <ol className="gv-steps">
            {overview.steps.map((s, i) => (
              <li key={s.title} style={{ "--i": i }}>
                <span className="gv-node" aria-hidden="true" />
                <span className="gv-num" aria-hidden="true">
                  {i + 1}
                </span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </section>

      {/* Recognition */}
      <section className="me-band">
        <Reveal className="me-wrap gv-head">
          <h2>{recognition.heading}</h2>
          <p className="me-lead">{recognition.lead}</p>
        </Reveal>
        <Reveal progress className="me-wrap gv-recog">
          <div className="gv-badges">
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
          <figure className="gv-frame ab-ph wide" style={{ "--k": 80 }}>
            <img src={recognition.image} alt="" loading="lazy" />
          </figure>
        </Reveal>
      </section>

      <CtaBand
        title="Questions about how we operate?"
        text="Get in touch and we will point you to the right person."
        to="/contact"
        label="Contact us"
      />
    </div>
  );
}
