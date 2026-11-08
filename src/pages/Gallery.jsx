import { useEffect, useState } from "react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { gallery } from "../data/content";

export default function Gallery() {
  const [idx, setIdx] = useState(null);

  useEffect(() => {
    if (idx === null) return;
    const n = gallery.length;
    const onKey = (e) => {
      if (e.key === "Escape") setIdx(null);
      if (e.key === "ArrowRight") setIdx((i) => (i + 1) % n);
      if (e.key === "ArrowLeft") setIdx((i) => (i - 1 + n) % n);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [idx]);

  const cur = idx === null ? null : gallery[idx];

  return (
    <>
      <PageHero kicker="Media & Blog" title="Gallery" lead="Moments from our work and our communities." />
      <section className="me-band">
        <Reveal className="me-wrap me-gallery">
          {gallery.map((g, i) => (
            <button key={g.title} type="button" className={`me-shot tone-${g.tone}`} onClick={() => setIdx(i)}>
              {g.src && <img src={g.src} alt="" loading="lazy" />}
              <span>{g.title}</span>
            </button>
          ))}
        </Reveal>
      </section>

      {cur && (
        <div className="me-lightbox" role="dialog" aria-modal="true" aria-label={cur.title} onClick={() => setIdx(null)}>
          <figure className={`tone-${cur.tone}`} onClick={(e) => e.stopPropagation()}>
            {cur.src && <img src={cur.src} alt={cur.title} />}
            <figcaption>{cur.title}</figcaption>
          </figure>
          <button type="button" className="lb-close" aria-label="Close" onClick={() => setIdx(null)}>Close</button>
          <button type="button" className="lb-nav prev" aria-label="Previous photo" onClick={(e) => { e.stopPropagation(); setIdx((idx - 1 + gallery.length) % gallery.length); }}>Prev</button>
          <button type="button" className="lb-nav next" aria-label="Next photo" onClick={(e) => { e.stopPropagation(); setIdx((idx + 1) % gallery.length); }}>Next</button>
        </div>
      )}
    </>
  );
}
