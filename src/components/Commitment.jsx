import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import { csr } from "../data/content";

export default function Commitment() {
  return (
    <section className="me-band me-tint">
      <Reveal className="me-wrap me-two me-csr">
        <figure className="me-photo">
          <img src={csr.image} alt={csr.imageAlt} loading="lazy" />
        </figure>
        <div>
          <h2>{csr.heading}</h2>
          <p className="me-lead">{csr.body}</p>
          <h3>{csr.listTitle}</h3>
          <ul className="me-list">
            {csr.items.map((item, i) => (
              <li key={item} style={{ transitionDelay: `${0.25 + i * 0.12}s` }}>{item}</li>
            ))}
          </ul>
          <p className="me-note">{csr.closing}</p>
          <Link className="me-btn" to="/our-team">Our employees</Link>
        </div>
      </Reveal>
    </section>
  );
}
