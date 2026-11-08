import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import CtaBand from "../components/CtaBand";
import { people } from "../data/content";

export default function OurEmployees() {
  return (
    <>
      <PageHero kicker="Commitment" title="Our Employees" lead={people.lead} />
      <section className="me-band">
        <Reveal className="me-wrap me-cards three">
          {people.items.map((s) => (
            <article key={s.title} className="me-card">
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </Reveal>
      </section>
      <CtaBand title="Build your career with us" text="See current openings or send us your CV." to="/careers" label="Careers" />
    </>
  );
}
