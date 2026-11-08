import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import CtaBand from "../components/CtaBand";
import { hse } from "../data/content";

export default function HealthEnvironment() {
  return (
    <>
      <PageHero kicker="Commitment" title="Health & Environment" lead={hse.lead} />
      <section className="me-band">
        <Reveal className="me-wrap me-cards three">
          {hse.items.map((s) => (
            <article key={s.title} className="me-card">
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </Reveal>
      </section>
      <CtaBand title="See our wider commitment" text="Scholarships, training and jobs for host communities." to="/our-commitment" label="Our commitment" />
    </>
  );
}
