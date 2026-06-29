export function SectionHeading({ eyebrow, title, body, align = "left" }) {
  return (
    <div
      className={`section-heading section-heading--${align}`}
      data-has-body={body ? "true" : "false"}
    >
      {eyebrow ? <p className="section-heading__eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {body ? <p>{body}</p> : null}
    </div>
  );
}
