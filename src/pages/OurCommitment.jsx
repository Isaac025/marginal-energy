import "./about.css";
import "./commitment.css";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import ScrollText from "../components/ScrollText";
import CtaBand from "../components/CtaBand";
import Icon from "../components/Icon";
import { commitment } from "../data/content";

export default function OurCommitment() {
  const { intro, initiatives, closing } = commitment;
  const words = Array.from({ length: 2 }).flatMap(() =>
    initiatives.items.map((i) => i.text),
  );

  return (
    <div className="about cm">
      <PageHero
        kicker="Commitment"
        title="Our Commitment"
        lead={commitment.lead}
      />

      {/* Initiatives marquee */}
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

      {/* Philosophy: words light up on scroll */}
      <section className="me-band ab-intro">
        <div className="me-wrap ab-center">
          <Reveal>
            <h2>{intro.heading}</h2>
          </Reveal>
          <ScrollText text={intro.body} />
          <Reveal>
            <ul className="cm-keys">
              {intro.keywords.map((k) => (
                <li key={k}>{k}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Initiatives */}
      <section className="me-band me-tint">
        <Reveal progress className="me-wrap cm-split">
          <figure className="cm-frame ab-ph" style={{ "--k": 70 }}>
            <img
              src={initiatives.image}
              alt={initiatives.imageAlt}
              loading="lazy"
            />
          </figure>
          <div>
            <h2>{initiatives.heading}</h2>
            <p className="me-lead">{initiatives.lead}</p>
            <h3>{initiatives.listTitle}</h3>
            <ul className="cm-list">
              {initiatives.items.map((it, i) => (
                <li key={it.text} style={{ "--i": i }}>
                  <span className="ab-ico">
                    <Icon name={it.icon} />
                  </span>
                  {it.text}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* Closing statement */}
      <section className="me-band me-dark cm-closing">
        <Reveal className="me-wrap">
          <p className="cm-quote">{closing.text}</p>
          <ol className="cm-flow">
            {closing.steps.map((s, i) => (
              <li key={s} style={{ "--i": i }}>
                <span className="cm-node" aria-hidden="true" />
                {s}
              </li>
            ))}
          </ol>
        </Reveal>
      </section>

      <CtaBand
        title="See how we keep people and places safe"
        text="Read about our approach to health, safety and the environment."
        to="/health-environment"
        label="Health & Environment"
      />
    </div>
  );
}
