import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { careers, company, culture } from "../data/content";

export default function Careers() {
  return (
    <>
      <PageHero kicker="Careers" title="Careers" lead={careers.lead} />

      <section
        className="me-careers-culture"
        style={{ "--careers-cover": `url("${culture.coverImage}")` }}
        aria-labelledby="careers-culture-title"
      >
        <div className="me-careers-culture__shade" aria-hidden="true" />
        <Reveal className="me-wrap me-careers-culture__content">
          <p className="me-careers-eyebrow">People are our greatest strength</p>
          <h2 id="careers-culture-title">{culture.heading}</h2>
          <p>{culture.text}</p>
          <a className="me-careers-scroll" href="#how-we-recruit">
            Explore life at Marginal Energy <span aria-hidden="true">↓</span>
          </a>
        </Reveal>
        <span className="me-careers-index" aria-hidden="true">
          01 / 03
        </span>
      </section>

      <section className="me-band me-careers-recruit" id="how-we-recruit">
        <div className="me-wrap me-careers-recruit__grid">
          <Reveal className="me-careers-recruit__copy">
            <p className="me-careers-eyebrow me-careers-eyebrow--green">
              A fair path forward
            </p>
            <h2>{culture.recruitHeading}</h2>
            <p className="me-careers-recruit__lead">{culture.recruitText}</p>
            <ul
              className="me-careers-pillars"
              aria-label="Our recruitment principles"
            >
              {culture.pillars.map((pillar, index) => (
                <li key={pillar} style={{ "--pillar-index": index }}>
                  {pillar}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="me-careers-photo">
            <img
              src={culture.recruitImage}
              alt="Colleagues working together in an energy environment"
              loading="lazy"
            />
            <span className="me-careers-photo__caption">
              Talent. Purpose. Progress.
            </span>
          </Reveal>
        </div>
      </section>

      <section
        className="me-careers-cta"
        aria-labelledby="careers-launch-title"
      >
        <Reveal className="me-wrap me-careers-cta__inner">
          <div>
            <p className="me-careers-eyebrow">Build what comes next</p>
            <h2 id="careers-launch-title">{culture.launchHeading}</h2>
          </div>
          <div className="me-careers-cta__action">
            <p>{culture.launchText}</p>
            <a className="me-btn leaf" href="#careers-opportunities">
              {culture.button}
              <span aria-hidden="true"> ↗</span>
            </a>
          </div>
          <span className="me-careers-cta__orb" aria-hidden="true" />
        </Reveal>
      </section>

      <section
        className="me-band me-tint me-careers-opportunities"
        id="careers-opportunities"
      >
        <Reveal className="me-wrap narrow">
          <p className="me-careers-eyebrow me-careers-eyebrow--green">
            Find your next opportunity
          </p>
          <h2>Open roles</h2>
          {careers.roles.length === 0 ? (
            <div className="me-empty me-careers-empty">
              <span className="me-careers-empty__mark" aria-hidden="true">
                ✳
              </span>
              <div>
                <h3>
                  Nothing open today. Your next chapter can still start here.
                </h3>
                <p>
                  There are no open roles listed right now. Send your CV and a
                  short note about the work you want to do, and we will keep it
                  on file.
                </p>
                <a
                  className="me-btn"
                  href={`mailto:${company.email}?subject=Open%20application`}
                >
                  Email your CV <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          ) : (
            <ul className="me-roles me-careers-roles">
              {careers.roles.map((role) => (
                <li key={role.title}>
                  <a href={role.href}>
                    <strong>{role.title}</strong>
                    <span>
                      {role.location} · {role.type}
                    </span>
                    <span
                      className="me-careers-roles__arrow"
                      aria-hidden="true"
                    >
                      ↗
                    </span>
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
