import { Link } from "react-router-dom";
import { ArrowIcon } from "../components/Icons";
import { Meta } from "../components/Meta";
import { PageHero } from "../components/PageHero";
import { ResponsiveImage } from "../components/ResponsiveImage";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import {
  media,
  pageCopy,
  pageSeo,
  processSteps,
  siteMeta,
  testimonials,
} from "../content/siteContent";
import { useIsMobile } from "../hooks/useIsMobile";

export function ProcessPage() {
  const seo = pageSeo.process;
  const isMobile = useIsMobile();
  const copy = pageCopy.process;

  if (isMobile) {
    return (
      <>
        <Meta
          title={seo.title}
          description={seo.description}
          path="/process"
          image={siteMeta.uk.ogImage}
        />

        <div className="mobile-page shell">
          <section className="mobile-section">
            <PageHero
              eyebrow={copy.hero.kicker}
              title={copy.hero.title}
              body={copy.hero.body}
              primaryAction={{ label: copy.hero.cta, to: "/contact" }}
              secondaryAction={{ label: copy.hero.secondaryCta, to: "/services" }}
            />
          </section>

          <section className="mobile-section">
            <div className="mobile-process-list">
              {processSteps.map((step, index) => (
                <Reveal
                  key={step.number}
                  className="mobile-process-item"
                  delay={50 + index * 35}
                >
                  <span>{step.number}</span>
                  <h2>{step.title}</h2>
                  <p>{step.body}</p>
                </Reveal>
              ))}
            </div>
          </section>

          <section className="mobile-section">
            <Reveal className="mobile-hero__media" variant="scale" delay={200}>
              <ResponsiveImage
                asset={media.projectTerrace}
                imageClassName="media-frame media-frame--wide"
                sizes="100vw"
              />
            </Reveal>
            <Reveal className="mobile-card" delay={240}>
              <SectionHeading
                title={copy.statement.title}
                body={copy.statement.body}
              />
              <Link className="button button--solid" to="/contact">
                {copy.hero.cta}
                <ArrowIcon className="icon icon--arrow" />
              </Link>
            </Reveal>
          </section>

          <section className="mobile-section">
            <Reveal className="quote-block" variant="up" delay={280}>
              <p>{testimonials[0].quote}</p>
              <footer>{testimonials[0].author}</footer>
            </Reveal>
          </section>
        </div>
      </>
    );
  }

  return (
    <>
      <Meta
        title={seo.title}
        description={seo.description}
        path="/process"
        image={siteMeta.uk.ogImage}
      />

      <section className="page-intro shell">
        <PageHero
          eyebrow={copy.hero.kicker}
          title={copy.hero.title}
          body={copy.hero.body}
          primaryAction={{ label: copy.hero.cta, to: "/contact" }}
          secondaryAction={{ label: copy.hero.secondaryCta, to: "/services" }}
        />
      </section>

      <section className="section shell">
        <Reveal className="process-timeline section-frame">
          {processSteps.map((step) => (
            <article key={step.number} className="process-timeline__item">
              <span>{step.number}</span>
              <div>
                <h2>{step.title}</h2>
                <p>{step.body}</p>
              </div>
            </article>
          ))}
        </Reveal>
      </section>

      <section className="section shell">
        <Reveal className="split-layout split-layout--balanced section-frame">
          <div>
            <SectionHeading
              title={copy.statement.title}
              body={copy.statement.body}
            />
            <Link className="button button--solid" to="/contact">
              {copy.hero.cta}
              <ArrowIcon className="icon icon--arrow" />
            </Link>
          </div>

          <ResponsiveImage
            asset={media.projectTerrace}
            className="statement-media"
            imageClassName="media-frame media-frame--wide"
            sizes="(min-width: 960px) 40vw, 100vw"
          />
        </Reveal>
      </section>

      <section className="section shell">
        <Reveal className="section-frame section-frame--compact">
          <blockquote className="quote-block">
            <p>{testimonials[0].quote}</p>
            <footer>{testimonials[0].author}</footer>
          </blockquote>
        </Reveal>
      </section>
    </>
  );
}
