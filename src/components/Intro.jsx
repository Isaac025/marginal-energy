import Reveal from "./Reveal";
import { intro } from "../data/content";

export default function Intro() {
  return (
    <section className="me-band">
      <Reveal className="me-wrap me-two">
        <h2>{intro.heading}</h2>
        <p className="me-lead">{intro.body}</p>
      </Reveal>
    </section>
  );
}
