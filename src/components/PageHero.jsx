import { Link } from "react-router-dom";
import { ArrowIcon } from "./Icons";
import { ResponsiveImage } from "./ResponsiveImage";
import { Reveal } from "./Reveal";

function HeroAction({ action, variant = "solid" }) {
  if (!action) {
    return null;
  }

  const className =
    variant === "secondary" ? "button button--outline" : "button button--solid";
  const content = (
    <>
      {action.label}
      {action.showArrow === false ? null : <ArrowIcon className="icon icon--arrow" />}
    </>
  );

  if (action.to) {
    return (
      <Link className={className} to={action.to} onClick={action.onClick}>
        {content}
      </Link>
    );
  }

  return (
    <a
      className={className}
      href={action.href}
      aria-label={action.ariaLabel}
      onClick={action.onClick}
      target={action.target ?? "_blank"}
      rel={action.rel ?? "noreferrer"}
    >
      {content}
    </a>
  );
}

export function PageHero({
  eyebrow,
  title,
  body,
  primaryAction,
  secondaryAction,
  details = [],
  media,
  mediaSizes = "(min-width: 960px) 52vw, 100vw",
  priority = false,
  className = "",
  children,
}) {
  const heroClassName = `page-hero section-frame section-frame--hero${
    media ? " page-hero--with-media" : " page-hero--compact"
  }${className ? ` ${className}` : ""}`;

  return (
    <Reveal className={heroClassName} variant="scale">
      <div className="page-hero__content">
        {eyebrow ? <p className="page-hero__eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        {body ? <p className="page-hero__body">{body}</p> : null}

        {details.length > 0 ? (
          <dl className="page-hero__details">
            {details.map((detail) => (
              <div key={detail.label} className="page-hero__detail">
                <dt>{detail.label}</dt>
                <dd>{detail.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}

        {children ? <div className="page-hero__support">{children}</div> : null}

        {primaryAction || secondaryAction ? (
          <div className="page-hero__actions">
            <HeroAction action={primaryAction} />
            <HeroAction action={secondaryAction} variant="secondary" />
          </div>
        ) : null}
      </div>

      {media ? (
        <ResponsiveImage
          asset={media}
          className="page-hero__media"
          imageClassName="media-frame media-frame--wide"
          priority={priority}
          sizes={mediaSizes}
        />
      ) : null}
    </Reveal>
  );
}
