import { useState } from "react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { company } from "../data/content";

const EMPTY = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [f, setF] = useState(EMPTY);
  const [err, setErr] = useState({});
  const [sent, setSent] = useState(false);

  const on = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const er = {};
    if (!f.name.trim()) er.name = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(f.email)) er.email = "Enter a valid email address.";
    if (f.message.trim().length < 10) er.message = "Write a short message, at least 10 characters.";
    setErr(er);
    if (Object.keys(er).length) return;

    // No backend yet: this opens the visitor's email app with the message filled in.
    // Swap for a fetch() to your form service (Formspree, Netlify Forms, your API) when ready.
    const body = `${f.message}\n\nFrom: ${f.name} (${f.email})`;
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(f.subject || "Website enquiry")}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <>
      <PageHero kicker="Contact" title="Contact Us" lead="Tell us how we can help and we will get back to you." />
      <section className="me-band">
        <Reveal className="me-wrap me-two">
          <div className="me-contact-info">
            <h2>Head office</h2>
            <p className="me-lead">
              <strong>{company.legalName}</strong><br />
              {company.address[0]}<br />{company.address[1]}
            </p>
            <p className="me-lead">
              <a href={`mailto:${company.email}`}>{company.email}</a><br />
              <a href={`tel:${company.phoneHref}`}>{company.phone}</a>
            </p>
          </div>

          {sent ? (
            <div className="me-empty">
              <h3>Your message is ready to send</h3>
              <p>We opened your email app with the message filled in. Press send there to finish.</p>
              <button type="button" className="me-btn" onClick={() => { setF(EMPTY); setSent(false); }}>Write another message</button>
            </div>
          ) : (
            <form className="me-form" onSubmit={submit} noValidate>
              <label>
                Name
                <input value={f.name} onChange={on("name")} autoComplete="name" aria-invalid={!!err.name} />
                {err.name && <em>{err.name}</em>}
              </label>
              <label>
                Email
                <input type="email" value={f.email} onChange={on("email")} autoComplete="email" aria-invalid={!!err.email} />
                {err.email && <em>{err.email}</em>}
              </label>
              <label>
                Subject
                <input value={f.subject} onChange={on("subject")} />
              </label>
              <label>
                Message
                <textarea rows="6" value={f.message} onChange={on("message")} aria-invalid={!!err.message} />
                {err.message && <em>{err.message}</em>}
              </label>
              <button type="submit" className="me-btn">Send message</button>
            </form>
          )}
        </Reveal>
      </section>
    </>
  );
}
