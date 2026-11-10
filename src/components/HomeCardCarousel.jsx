import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function CarouselControls({ label, index, maxIndex, onMove }) {
  const progress = maxIndex === 0 ? 100 : ((index + 1) / (maxIndex + 1)) * 100;

  return (
    <div className="home-carousel-controls">
      <div
        className="home-carousel-progress"
        role="progressbar"
        aria-label={`${label} carousel position`}
        aria-valuemin={1}
        aria-valuemax={maxIndex + 1}
        aria-valuenow={index + 1}
      >
        <span style={{ width: `${progress}%` }} />
      </div>
      <div className="home-carousel-arrows">
        <button
          type="button"
          onClick={() => onMove(-1)}
          disabled={index === 0}
          aria-label={`Previous ${label.toLowerCase()} card`}
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => onMove(1)}
          disabled={index === maxIndex}
          aria-label={`Next ${label.toLowerCase()} card`}
        >
          →
        </button>
      </div>
    </div>
  );
}

function useCardCarousel(itemCount) {
  const viewportRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(Math.max(0, itemCount - 1));

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return undefined;

    const measure = () => {
      const first = viewport.children[0];
      const second = viewport.children[1];
      if (!first) return;
      const step = second
        ? second.offsetLeft - first.offsetLeft
        : first.offsetWidth;
      const reachable =
        step > 0
          ? Math.ceil((viewport.scrollWidth - viewport.clientWidth) / step)
          : 0;
      setMaxIndex(Math.max(0, reachable));
      setIndex((current) => Math.min(current, Math.max(0, reachable)));
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, [itemCount]);

  const move = useCallback(
    (direction) => {
      const viewport = viewportRef.current;
      if (!viewport) return;
      const nextIndex = Math.max(0, Math.min(maxIndex, index + direction));
      const card = viewport.children[nextIndex];
      if (!card) return;
      viewport.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
      setIndex(nextIndex);
    },
    [index, maxIndex],
  );

  const updateIndex = () => {
    const viewport = viewportRef.current;
    if (!viewport?.children.length) return;
    const first = viewport.children[0];
    const second = viewport.children[1];
    const step = second
      ? second.offsetLeft - first.offsetLeft
      : first.offsetWidth;
    if (step > 0)
      setIndex(Math.min(maxIndex, Math.round(viewport.scrollLeft / step)));
  };

  return { viewportRef, index, maxIndex, move, updateIndex };
}

export function NewsInsightsCarousel({ items }) {
  const { viewportRef, index, maxIndex, move, updateIndex } = useCardCarousel(
    items.length,
  );

  return (
    <section
      className="home-carousel-section home-latest-section"
      aria-labelledby="latest-news-heading"
    >
      <div className="home-container">
        <div className="home-carousel-heading">
          <div>
            <span className="section-label">Stories &amp; updates</span>
            <h2 id="latest-news-heading">Latest news &amp; insights</h2>
          </div>
          <p>Company news, community stories, and a closer look at our work.</p>
        </div>

        <div
          role="region"
          tabIndex={0}
          className="home-carousel-viewport home-news-viewport"
          ref={viewportRef}
          onScroll={updateIndex}
          aria-label="Latest news and insights cards"
        >
          {items.map((item) => (
            <article className="home-news-card" key={item.title}>
              <Link
                className="home-news-card-image"
                to={item.to}
                tabIndex={-1}
                aria-hidden="true"
              >
                <img src={item.image} alt="" loading="lazy" />
              </Link>
              <div className="home-news-card-copy">
                <span className="home-news-card-category">{item.category}</span>
                <h3>
                  <Link to={item.to}>{item.title}</Link>
                </h3>
                <p>{item.summary}</p>
                <Link className="home-news-card-link" to={item.to}>
                  Explore story <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="home-carousel-footer">
          <Link className="home-carousel-view-all" to="/media-blog">
            View all news &amp; insights <span aria-hidden="true">↗</span>
          </Link>
          <CarouselControls
            label="News"
            index={index}
            maxIndex={maxIndex}
            onMove={move}
          />
        </div>
      </div>
    </section>
  );
}

export function RegulatoryNewsCarousel({ items }) {
  const { viewportRef, index, maxIndex, move, updateIndex } = useCardCarousel(
    items.length,
  );

  return (
    <section
      className="home-carousel-section home-regulatory-section"
      aria-labelledby="regulatory-news-heading"
    >
      <div className="home-container">
        <div className="home-carousel-heading">
          <div>
            <span className="section-label">Investor information</span>
            <h2 id="regulatory-news-heading">Regulatory news</h2>
          </div>
          <p>Sample announcement cards ready for your approved notices.</p>
        </div>

        <div
          role="region"
          tabIndex={0}
          className="home-carousel-viewport home-regulatory-viewport"
          ref={viewportRef}
          onScroll={updateIndex}
          aria-label="Regulatory news demo cards"
        >
          {items.map((item) => (
            <article className="home-regulatory-card" key={item.title}>
              <span className="home-regulatory-mark" aria-hidden="true">
                ME.
              </span>
              <div className="home-regulatory-card-copy">
                <span className="home-regulatory-demo">**** notice</span>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <span>{item.date}</span>
              </div>
              <span className="home-regulatory-arrow" aria-hidden="true">
                ↗
              </span>
            </article>
          ))}
        </div>

        <div className="home-carousel-footer">
          <Link className="home-carousel-view-all" to="/media-blog">
            View all regulatory news <span aria-hidden="true">↗</span>
          </Link>
          <CarouselControls
            label="Regulatory news"
            index={index}
            maxIndex={maxIndex}
            onMove={move}
          />
        </div>
      </div>
    </section>
  );
}
