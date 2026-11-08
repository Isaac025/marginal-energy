import "./health-environment.css";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import CtaBand from "../components/CtaBand";
import { hse } from "../data/content";

const practiceNumbers = ["01", "02", "03", "04", "05", "06"];

export default function HealthEnvironment() {
  const practices = hse.items;
  const intro = hse.intro || hse.lead;

  return (
    <main className="he-page">
      <PageHero kicker="Commitment" title="Health & Environment" lead={intro} />

      <section className="me-band he-intro">
        <Reveal className="me-wrap he-intro-grid">
          <div className="he-intro-copy">
            <p className="he-eyebrow">People. Places. Responsibility.</p>
            <h2>
              {hse.heading ||
                "Protecting people and the environments where we work"}
            </h2>
            <p>
              {hse.body ||
                "Our Health, Safety and Environmental framework is guided by clear standards, proactive risk management and continuous improvement. We work to protect our employees, host communities and the ecosystems in which we operate."}
            </p>
          </div>
          <figure className="he-image">
            <img
              src={
                hse.image ||
                "https://marginal-energy.com/wp-content/uploads/2026/02/750pxx370px_Dec5.jpg"
              }
              alt={hse.imageAlt || "Industrial operations under a clear sky"}
              loading="lazy"
            />
            <figcaption>
              Health, safety and environmental stewardship in every operation
            </figcaption>
          </figure>
        </Reveal>
      </section>

      <section className="me-band he-practices">
        <div className="me-wrap">
          <Reveal className="he-heading">
            <p className="he-eyebrow">A practical framework</p>
            <h2>{hse.practicesHeading || "Key HSE practices"}</h2>
            <p>
              {hse.practicesLead ||
                "We build a culture of safety excellence and environmental responsibility through consistent everyday action."}
            </p>
          </Reveal>
          <div className="he-grid">
            {practices.map((practice, index) => (
              <Reveal
                key={practice.title}
                className="he-reveal-card"
                style={{ "--he-index": index }}
              >
                <article className="he-card">
                  <span className="he-number" aria-hidden="true">
                    {practiceNumbers[index] ||
                      String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="he-card-mark" aria-hidden="true">
                    {practice.icon || "＋"}
                  </span>
                  <h3>{practice.title}</h3>
                  <p>{practice.text}</p>
                  <span className="he-card-line" aria-hidden="true" />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="me-band me-dark he-promise">
        <Reveal className="me-wrap he-promise-inner">
          <p className="he-eyebrow">Our commitment</p>
          <h2>
            {hse.closingHeading ||
              "Committed to safety. Dedicated to the planet."}
          </h2>
          <p>
            {hse.closing ||
              "We keep strengthening our practices to protect people, reduce environmental impacts and support responsible operations."}
          </p>
          <div className="he-orbit" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </Reveal>
      </section>

      <CtaBand
        title="See our wider commitment"
        text="Scholarships, training and jobs for host communities."
        to="/our-commitment"
        label="Our Commitment"
      />
    </main>
  );
}
