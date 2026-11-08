import PageHero from "../components/PageHero";
import Intro from "../components/Intro";
import Commitment from "../components/Commitment";

export default function OurCommitment() {
  return (
    <>
      <PageHero kicker="Commitment" title="Our Commitment" lead="Powering more responsibly" />
      <Intro />
      <Commitment />
    </>
  );
}
