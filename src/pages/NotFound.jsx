import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";

export default function NotFound() {
  return (
    <>
      <PageHero kicker="Error 404" title="Page not found" lead="That page does not exist or has moved." />
      <section className="me-band">
        <div className="me-wrap">
          <Link className="me-btn" to="/">Back to home</Link>
        </div>
      </section>
    </>
  );
}
