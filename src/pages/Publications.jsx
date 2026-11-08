import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { publications } from "../data/content";

export default function Publications() {
  return (
    <>
      <PageHero kicker="Media & Blog" title="Publications" lead={publications.lead} />
      <section className="me-band">
        <Reveal as="ul" className="me-wrap me-pubs">
          {publications.items.map((p) => (
            <li key={p.href}>
              <a href={p.href} target="_blank" rel="noreferrer">
                <span className="meta">{p.source}<br />{p.date}</span>
                <span className="body">
                  <strong>{p.title}</strong>
                  <span>{p.text}</span>
                </span>
                <span className="go">Read article</span>
              </a>
            </li>
          ))}
        </Reveal>
      </section>
    </>
  );
}
