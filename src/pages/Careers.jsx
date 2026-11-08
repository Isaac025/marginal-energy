import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { careers, company, people } from "../data/content";

export default function Careers() {
  return (
    <>
      <PageHero kicker="Careers" title="Careers" lead={careers.lead} />
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
      <section className="me-band me-tint">
        <Reveal className="me-wrap narrow">
          <h2>Open roles</h2>
          {careers.roles.length === 0 ? (
            <div className="me-empty">
              <p>There are no open roles listed right now. Send your CV and a short note about the work you want to do, and we will keep it on file.</p>
              <a className="me-btn" href={`mailto:${company.email}?subject=Open%20application`}>Email your CV</a>
            </div>
          ) : (
            <ul className="me-roles">
              {careers.roles.map((r) => (
                <li key={r.title}>
                  <a href={r.href}>
                    <strong>{r.title}</strong>
                    <span>{r.location} · {r.type}</span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </Reveal>
      </section>
    </>
  );
}
