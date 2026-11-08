// Compact hero for inner pages. Title words rise out of a mask on load.
export default function PageHero({ kicker, title, lead }) {
  return (
    <section className="me-pagehero">
      <div className="me-rings small" aria-hidden="true"><i /><i /></div>
      <div className="me-wrap">
        {kicker && <p className="me-kicker">{kicker}</p>}
        <h1 className="me-ptitle" aria-label={title}>
          {title.split(" ").map((w, i) => (
            <span key={i} className="w" aria-hidden="true">
              <span style={{ animationDelay: `${0.1 + i * 0.09}s` }}>{w}</span>
            </span>
          ))}
        </h1>
        {lead && <p className="me-plead">{lead}</p>}
      </div>
    </section>
  );
}
