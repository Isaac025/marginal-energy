import "./our-employees.css";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import CtaBand from "../components/CtaBand";
import { people } from "../data/content";

const workplaceCommitments = [
  "Continuous learning and career development",
  "Competitive compensation, benefits, and savings plans",
  "Safe and reliable working conditions",
  "Equal opportunity and non-discrimination",
  "Gender equality and inclusion of persons with disabilities",
];

export default function OurEmployees() {
  return (
    <main className="oe-page">
      <PageHero kicker="Commitment" title="Our Employees" lead={people.lead} />

      <section className="me-band oe-intro">
        <Reveal className="me-wrap oe-intro-inner">
          <p className="oe-eyebrow">People power progress</p>
          <h2>Meet the people powering Marginal Energy’s success</h2>
          <p className="oe-intro-copy">
            Our people are the driving force behind our success. We believe that
            empowering our workforce is essential to achieving safe, innovative,
            and sustainable operations.
          </p>
          <p className="oe-intro-copy">
            We are committed to providing a supportive and inclusive work
            environment that promotes professional growth, fairness, and
            long-term well-being.
          </p>
        </Reveal>
      </section>

      <section className="me-band oe-opportunities">
        <div className="me-wrap">
          <Reveal className="oe-section-heading">
            <p className="oe-eyebrow">How we support our team</p>
            <h2>Room to learn, contribute, and thrive</h2>
          </Reveal>
          <div className="oe-cards">
            {people.items.map((item, index) => (
              <Reveal
                key={item.title}
                className="oe-reveal-card"
                style={{ "--oe-index": index }}
              >
                <article className="oe-card">
                  <span className="oe-index" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="oe-symbol" aria-hidden="true">
                    ✳
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span className="oe-card-accent" aria-hidden="true" />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="me-band me-dark oe-workplace">
        <Reveal className="me-wrap oe-workplace-grid">
          <div>
            <p className="oe-eyebrow">A workplace for everyone</p>
            <h2>Respect, diversity, and collaboration</h2>
            <p className="oe-workplace-lead">
              Together, we build a workplace where everyone can thrive and
              contribute meaningfully.
            </p>
          </div>
          <ul className="oe-points">
            {workplaceCommitments.map((commitment, index) => (
              <li key={commitment} style={{ "--oe-index": index }}>
                <span aria-hidden="true">✓</span>
                {commitment}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <CtaBand
        title="Build your career with us"
        text="See current openings or send us your CV."
        to="/careers"
        label="Careers"
      />
    </main>
  );
}
