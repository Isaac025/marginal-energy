import { Link } from "react-router-dom";
import Reveal from "./Reveal";

export default function CtaBand({ title, text, to, label }) {
  return (
    <section className="me-band me-dark">
      <Reveal className="me-wrap me-cta">
        <h2>{title}</h2>
        <p>{text}</p>
        <Link className="me-btn leaf" to={to}>{label}</Link>
      </Reveal>
    </section>
  );
}
