import useReveal from "../hooks/useReveal";

// Wrapper whose direct children fade up in sequence when scrolled into view.
export default function Reveal({ as: Tag = "div", className = "", threshold, children }) {
  const [ref, seen] = useReveal(threshold);
  return (
    <Tag ref={ref} className={`reveal ${seen ? "in" : ""} ${className}`}>
      {children}
    </Tag>
  );
}
