import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import CtaBand from "../components/CtaBand";
import { services } from "../data/content";

export default function Services() {
  return (
    <>
      <PageHero kicker="What we do" title="Our Services" lead={services.lead} />
      <section className="me-band">
        <Reveal className="me-wrap me-cards">
          {services.items.map((s) => (
            <article key={s.title} className="me-card">
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </Reveal>
      </section>
      <CtaBand title="Work with us" text="Talk to us about partnerships, projects and supply." to="/contact" label="Contact us" />
    </>
  );
}
