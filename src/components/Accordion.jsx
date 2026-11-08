import { useState } from "react";

export default function Accordion({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="acc">
      {items.map((it, i) => (
        <div key={it.title} className={`acc-item ${open === i ? "open" : ""}`}>
          <h3>
            <button type="button" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
              {it.title}
              <i aria-hidden="true" />
            </button>
          </h3>
          <div className="acc-panel"><div><p>{it.body}</p></div></div>
        </div>
      ))}
    </div>
  );
}
