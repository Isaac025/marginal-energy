import PageHero from "../components/PageHero";
import { company } from "../data/content";

export default function Privacy() {
  return (
    <>
      <PageHero kicker="Legal" title="Privacy Policy & Cookies Policy" />
      <section className="me-band">
        <div className="me-wrap narrow">
          {/* Replace with the approved policy text from Marginal Energy Limited. */}
          <p className="me-lead">
            The privacy and cookies policy of {company.legalName} will be published here. For questions about how we handle personal
            information, email <a href={`mailto:${company.email}`}>{company.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
