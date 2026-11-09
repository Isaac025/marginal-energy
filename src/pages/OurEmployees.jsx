import "./about.css";
import "./our-employees.css";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import CtaBand from "../components/CtaBand";
import Icon from "../components/Icon";
import { employees } from "../data/content";

export default function OurEmployees() {
  const words = Array.from({ length: 3 }).flatMap(() =>
    employees.points.map((p) => p.text),
  );

  return (
    <div className="about oe">
      <PageHero kicker="Commitment" title="Our Employees" />

      {/* Commitments marquee */}
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

      {/* Photo + people-focused approach */}
      <section className="me-band me-tint">
        <Reveal progress className="me-wrap oe-split">
          <figure className="oe-frame ab-ph" style={{ "--k": 70 }}>
            <img
              src={employees.image}
              alt={employees.imageAlt}
              loading="lazy"
            />
          </figure>
          <div>
            <h2>{employees.heading}</h2>
            {employees.paragraphs.map((p) => (
              <p key={p} className="me-lead spaced">
                {p}
              </p>
            ))}
            <ul className="oe-list">
              {employees.points.map((pt, i) => (
                <li key={pt.text} style={{ "--i": i }}>
                  <span className="ab-ico">
                    <Icon name={pt.icon} />
                  </span>
                  {pt.text}
                </li>
              ))}
            </ul>
            <p className="oe-closing">{employees.closing}</p>
          </div>
        </Reveal>
      </section>

      {/* Team photo with the three values */}
      <Reveal as="section" progress className="oe-band">
        <figure className="oe-bg ab-ph" style={{ "--k": 90 }}>
          <img src={employees.photo} alt="" loading="lazy" />
        </figure>
        <div className="me-wrap">
          <ul className="oe-values">
            {employees.values.map((v, i) => (
              <li key={v} style={{ "--i": i }}>
                <span>{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <CtaBand
        title="Build your career with us"
        text="Find out how we recruit and how to apply."
        to="/careers"
        label="Careers"
      />
    </div>
  );
}
