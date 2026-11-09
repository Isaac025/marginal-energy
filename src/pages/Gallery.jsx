import { useEffect, useState } from "react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { gallery, galleryPage } from "../data/content";

export default function Gallery() {
  const [idx, setIdx] = useState(null);
  const cur = idx === null ? null : gallery[idx];

  useEffect(() => {
    if (idx === null) return undefined;

    const previousOverflow = document.body.style.overflow;
    const onKey = (event) => {
      if (event.key === "Escape") setIdx(null);
      if (event.key === "ArrowRight")
        setIdx((current) => (current + 1) % gallery.length);
      if (event.key === "ArrowLeft")
        setIdx((current) => (current - 1 + gallery.length) % gallery.length);
    };

    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [idx]);

  return (
    <>
      <PageHero
        kicker="Media & Blog"
        title="Gallery"
        lead="Moments from our work and our communities."
      />

      <section
        className="me-gallery-banner"
        aria-label="Powering more responsibly"
      >
        <img src={galleryPage.banner} alt="Powering more responsibly" />
        <span aria-hidden="true">
          Ideas into impact <i>↗</i>
        </span>
      </section>

      <section
        className="me-band me-gallery-section"
        aria-labelledby="gallery-heading"
      >
        <div className="me-wrap">
          <Reveal className="me-gallery-intro">
            <div>
              <p className="me-careers-eyebrow me-careers-eyebrow--green">
                Our work, in focus
              </p>
              <h2 id="gallery-heading">{galleryPage.heading}</h2>
            </div>
            <p>{galleryPage.lead}</p>
          </Reveal>

          <Reveal className="me-gallery me-gallery-grid">
            {gallery.map((photo, index) => (
              <button
                key={photo.title}
                type="button"
                className={`me-shot me-gallery-shot me-gallery-shot--${index + 1}`}
                onClick={() => setIdx(index)}
                aria-label={`View photo: ${photo.title}`}
              >
                <img src={photo.src} alt={photo.alt} loading="lazy" />
                <span className="me-gallery-shot__caption">
                  <small>{String(index + 1).padStart(2, "0")}</small>
                  <strong>{photo.title}</strong>
                  <i aria-hidden="true">↗</i>
                </span>
              </button>
            ))}
          </Reveal>
          <p className="me-gallery-note">
            A closer look at the people, places, and ideas behind responsible
            energy.
          </p>
        </div>
      </section>

      {cur && (
        <div
          className="me-lightbox me-gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
          onClick={() => setIdx(null)}
        >
          <figure onClick={(event) => event.stopPropagation()}>
            <img src={cur.src} alt={cur.alt} />
            <figcaption>
              <span>
                {String(idx + 1).padStart(2, "0")} /{" "}
                {String(gallery.length).padStart(2, "0")}
              </span>
              {cur.title}
            </figcaption>
          </figure>
          <button
            type="button"
            className="lb-close"
            aria-label="Close image viewer"
            onClick={() => setIdx(null)}
          >
            Close <span aria-hidden="true">×</span>
          </button>
          <button
            type="button"
            className="lb-nav prev"
            aria-label="Previous photo"
            onClick={(event) => {
              event.stopPropagation();
              setIdx((idx - 1 + gallery.length) % gallery.length);
            }}
          >
            ←
          </button>
          <button
            type="button"
            className="lb-nav next"
            aria-label="Next photo"
            onClick={(event) => {
              event.stopPropagation();
              setIdx((idx + 1) % gallery.length);
            }}
          >
            →
          </button>
        </div>
      )}
    </>
  );
}
