import { useState } from "react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { company, contactPage } from "../data/content";

const EMPTY = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const onChange = (field) => (event) => {
    const value = event.target.value;
    setForm((current) => ({ ...current, [field]: value }));
    if (errors[field]) setErrors((current) => ({ ...current, [field]: "" }));
  };

  const submit = (event) => {
    event.preventDefault();
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email))
      nextErrors.email = "Enter a valid email address.";
    if (form.message.trim().length < 10)
      nextErrors.message = "Write a short message, at least 10 characters.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    // No form backend is configured yet. Prepare the message in the visitor's email app.
    const body = `${form.message}\n\nFrom: ${form.name} (${form.email})`;
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(form.subject || "Website enquiry")}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <>
      <PageHero
        kicker="Contact"
        title="Contact Us"
        lead="Tell us how we can help and we will get back to you."
      />

      <section
        className="me-contact-banner"
        aria-label="Powering more responsibly"
      >
        <img src={contactPage.banner} alt="Powering more responsibly" />
        <span aria-hidden="true">
          We’re ready to listen <i>↗</i>
        </span>
      </section>

      <section
        className="me-band me-contact-main"
        aria-labelledby="contact-form-title"
      >
        <div className="me-wrap me-contact-layout">
          <Reveal className="me-contact-intro">
            <p className="me-contact-eyebrow">Start a conversation</p>
            <h2 id="contact-form-title">
              Let’s talk about what matters to you.
            </h2>
            <p>{contactPage.intro}</p>
            <div className="me-contact-direct">
              <a href={`mailto:${company.email}`}>
                <span>Email us</span>
                <strong>{company.email}</strong>
                <i aria-hidden="true">↗</i>
              </a>
              <a href={`tel:${company.phoneHref}`}>
                <span>Call our office</span>
                <strong>{company.phone}</strong>
                <i aria-hidden="true">↗</i>
              </a>
            </div>
          </Reveal>

          <Reveal className="me-contact-form-card">
            {sent ? (
              <div
                className="me-contact-success"
                role="status"
                aria-live="polite"
              >
                <span className="me-contact-success__icon" aria-hidden="true">
                  ✓
                </span>
                <p className="me-contact-eyebrow">Message prepared</p>
                <h3>Your message is ready to send.</h3>
                <p>
                  We opened your email app with the message filled in. Press
                  send there to finish.
                </p>
                <button
                  type="button"
                  className="me-btn"
                  onClick={() => {
                    setForm(EMPTY);
                    setErrors({});
                    setSent(false);
                  }}
                >
                  Write another message
                </button>
              </div>
            ) : (
              <form
                className="me-form me-contact-form"
                onSubmit={submit}
                noValidate
              >
                <div className="me-contact-form__heading">
                  <p className="me-contact-eyebrow">Send an enquiry</p>
                  <h3>How can we help?</h3>
                </div>
                <label htmlFor="contact-name">
                  Name <span aria-hidden="true">*</span>
                  <input
                    id="contact-name"
                    value={form.name}
                    onChange={onChange("name")}
                    autoComplete="name"
                    aria-invalid={!!errors.name}
                    aria-describedby={
                      errors.name ? "contact-name-error" : undefined
                    }
                  />
                  {errors.name && (
                    <em id="contact-name-error">{errors.name}</em>
                  )}
                </label>
                <label htmlFor="contact-email">
                  Email <span aria-hidden="true">*</span>
                  <input
                    id="contact-email"
                    type="email"
                    value={form.email}
                    onChange={onChange("email")}
                    autoComplete="email"
                    aria-invalid={!!errors.email}
                    aria-describedby={
                      errors.email ? "contact-email-error" : undefined
                    }
                  />
                  {errors.email && (
                    <em id="contact-email-error">{errors.email}</em>
                  )}
                </label>
                <label htmlFor="contact-subject">
                  Subject
                  <input
                    id="contact-subject"
                    value={form.subject}
                    onChange={onChange("subject")}
                  />
                </label>
                <label htmlFor="contact-message">
                  Message <span aria-hidden="true">*</span>
                  <textarea
                    id="contact-message"
                    rows="5"
                    value={form.message}
                    onChange={onChange("message")}
                    aria-invalid={!!errors.message}
                    aria-describedby={
                      errors.message ? "contact-message-error" : undefined
                    }
                  />
                  {errors.message && (
                    <em id="contact-message-error">{errors.message}</em>
                  )}
                </label>
                <button type="submit" className="me-btn">
                  Send message <span aria-hidden="true">↗</span>
                </button>
                <p className="me-contact-form__note">
                  Your details will only be used to respond to your enquiry.
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      <section
        className="me-contact-map-section"
        aria-label="Our Lagos office location"
      >
        <div className="me-contact-map-heading me-wrap">
          <div>
            <p className="me-contact-eyebrow">Come say hello</p>
            <h2>Find our office</h2>
          </div>
          <p>
            {company.address[0]} {company.address[1]}
          </p>
        </div>
        <div className="me-contact-map-frame">
          <iframe
            title="Map showing Marginal Energy's office in Victoria Island, Lagos"
            src={contactPage.map}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <a
            className="me-contact-map-card"
            href="https://maps.google.com/?q=Ivie+House,+4+Ajose+Adeogun+Street,+Victoria+Island,+Lagos"
            target="_blank"
            rel="noreferrer"
          >
            <span>Head office</span>
            <strong>{company.legalName}</strong>
            <span>
              {company.address[0]} {company.address[1]}
            </span>
            <i aria-hidden="true">Open in Maps ↗</i>
          </a>
        </div>
      </section>

      <section
        className="me-band me-tint me-contact-details"
        aria-labelledby="contact-details-title"
      >
        <div className="me-wrap">
          <Reveal className="me-contact-details__heading">
            <div>
              <p className="me-contact-eyebrow">Here when you need us</p>
              <h2 id="contact-details-title">Get in touch</h2>
            </div>
            <p>{contactPage.intro}</p>
          </Reveal>
          <div className="me-contact-cards">
            <Reveal className="me-contact-card">
              <span className="me-contact-card__number">01</span>
              <p>Visit us</p>
              <h3>
                {company.address[0]} {company.address[1]}
              </h3>
              <span>{company.legalName}</span>
            </Reveal>
            <Reveal className="me-contact-card">
              <span className="me-contact-card__number">02</span>
              <p>Call us</p>
              <h3>
                <a href={`tel:${company.phoneHref}`}>{company.phone}</a>
              </h3>
              <span>Speak with our team</span>
            </Reveal>
            <Reveal className="me-contact-card">
              <span className="me-contact-card__number">03</span>
              <p>Email us</p>
              <h3>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </h3>
              <span>We’re happy to help</span>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
