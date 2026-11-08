import { useRef } from "react";
import useScrollProgress from "../hooks/useScrollProgress";

// Paragraph whose words light up one by one as it scrolls through the viewport.
export default function ScrollText({ text, className = "" }) {
  const ref = useRef(null);
  useScrollProgress(ref);
  const words = text.split(" ");
  return (
    <p ref={ref} className={`st ${className}`}>
      {words.map((w, i) => (
        <span key={i} className="w" style={{ "--i": i, "--n": words.length }}>
          {w}{" "}
        </span>
      ))}
    </p>
  );
}
