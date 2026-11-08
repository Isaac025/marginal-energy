import { Link } from "react-router-dom";
import { company, footerLinks } from "../data/content";

const Col = ({ title, links }) => (
  <div>
    <h4>{title}</h4>
    <ul>
      {links.map((l) => (
        <li key={l.to}>
          <Link to={l.to}>{l.label}</Link>
        </li>
      ))}
    </ul>
  </div>
);

const fullAddress = company.address.join(" ");

const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;

export default function Footer() {
  return (
    <footer className="me-foot">
      <div className="me-wrap me-foot-grid">
        <div>
          <strong>{company.legalName}</strong>
          <br />
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Locate ${fullAddress} on Google Maps`}
          >
            {company.address[0]}
            <br />
            {company.address[1]}
          </a>
          <p>
            <a href={`mailto:${company.email}`}>{company.email}</a>

            <br />
            <a href={`tel:${company.phoneHref}`}>{company.phone}</a>
          </p>
        </div>
        <Col title="About" links={footerLinks.about} />
        <Col title="Commitment" links={footerLinks.commitment} />
        <Col title="Company" links={footerLinks.company} />
      </div>
      <div className="me-wrap me-foot-base">
        <span>
          © {new Date().getFullYear()} {company.legalName}
        </span>
        <ul>
          {company.social.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
