import { Link } from "react-router-dom";
import { ArrowIcon } from "../components/Icons";
import { Meta } from "../components/Meta";
import { PageHero } from "../components/PageHero";
import { ResponsiveImage } from "../components/ResponsiveImage";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { pageCopy, pageSeo, projects, siteMeta, testimonials } from "../content/siteContent";
import { useIsMobile } from "../hooks/useIsMobile";

export function ProjectsPage() {
  const seo = pageSeo.projects;
  const isMobile = useIsMobile();
  const copy = pageCopy.projects;

  if (isMobile) {
    return (
      <>
        <Meta
          title={seo.title}
          description={seo.description}
          path="/projects"
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
            <div className="mobile-project-stack">
              {projects.map((project, index) => (
                <Reveal
                  key={project.slug}
                  className="mobile-project-card"
                  variant="scale"
                  delay={60 + index * 45}
                >
                  <ResponsiveImage
                    asset={project.media}
                    className="mobile-project-card__media"
                    imageClassName="media-frame media-frame--standard"
                    sizes="100vw"
                  />
                  <div className="mobile-project-card__body">
                    <p className="mobile-kicker">{project.index}</p>
                    <h2>{project.title}</h2>
                    <p>{project.detail}</p>
                    <p className="mobile-project-card__location">{project.location}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          <section className="mobile-section">
            <Reveal className="mobile-card" delay={220}>
              <SectionHeading
                title={copy.closing.title}
                body={copy.closing.body}
              />
              <Link className="button button--solid" to="/contact">
                {copy.hero.cta}
                <ArrowIcon className="icon icon--arrow" />
              </Link>
            </Reveal>
            <Reveal className="quote-block" variant="up" delay={260}>
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
        path="/projects"
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
        <Reveal className="project-showcase section-frame">
          {projects.map((project, index) => (
            <article key={project.slug} className="project-showcase__item">
              <ResponsiveImage
                asset={project.media}
                className="project-showcase__media"
                imageClassName="media-frame media-frame--wide"
                sizes="(min-width: 960px) 54vw, 100vw"
              />
              <div className="project-showcase__copy">
                <p className="project-showcase__index">{project.index}</p>
                <h2>{project.title}</h2>
                <p>{project.detail}</p>
                <p className="project-showcase__location">{project.location}</p>
              </div>
            </article>
          ))}
        </Reveal>
      </section>

      <section className="section shell">
        <Reveal className="split-layout split-layout--balanced section-frame">
          <div>
            <SectionHeading
              title={copy.closing.title}
              body={copy.closing.body}
            />
            <Link className="button button--solid" to="/contact">
              {copy.hero.cta}
              <ArrowIcon className="icon icon--arrow" />
            </Link>
          </div>

          <blockquote className="quote-block">
            <p>{testimonials[0].quote}</p>
            <footer>{testimonials[0].author}</footer>
          </blockquote>
        </Reveal>
      </section>
    </>
  );
}
