import { useEffect, useState } from "react";
import useReveal from "../hooks/useReveal";

// Number that counts up once when it scrolls into view.
export default function CountUp({ to, duration = 1800 }) {
  const [ref, seen] = useReveal(0.6);
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!seen) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(to);
      return;
    }
    let raf, t0;
    const tick = (t) => {
      if (!t0) t0 = t;
      const k = Math.min(1, (t - t0) / duration);
      setN(Math.round(to * (1 - Math.pow(1 - k, 3))));
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, to, duration]);

  return <span ref={ref}>{n}</span>;
}
