import { Link } from "react-router-dom";
import { ContactChannels } from "../components/ContactChannels";
import { ArrowIcon } from "../components/Icons";
import { Meta } from "../components/Meta";
import { ProjectCarousel } from "../components/ProjectCarousel";
import { ResponsiveImage } from "../components/ResponsiveImage";
import { Reveal } from "../components/Reveal";
import {
  contactChannels,
  homeSections,
  pageSeo,
  processSteps,
  projects,
  services,
  siteMeta,
} from "../content/siteContent";

export function HomePage() {
  const seo = pageSeo.home;

  return (
    <>
      <Meta
        title={seo.title}
        description={seo.description}
        path="/"
        image={siteMeta.uk.ogImage}
      />

      <section className="homepage-section homepage-section--hero shell">
        <Reveal className="homepage-panel homepage-hero" variant="scale">
          <div className="homepage-hero__copy">
            <h1>{homeSections.hero.title}</h1>
            <p>{homeSections.hero.body}</p>
            <div className="homepage-actions">
              <Link className="button button--solid" to={homeSections.hero.primaryCta.href}>
                {homeSections.hero.primaryCta.label}
                <ArrowIcon className="icon icon--arrow" />
              </Link>
              <Link className="button button--outline" to={homeSections.hero.secondaryCta.href}>
                {homeSections.hero.secondaryCta.label}
              </Link>
            </div>
          </div>

          <ResponsiveImage
            asset={homeSections.hero.media}
            className="homepage-hero__media"
            imageClassName="media-frame media-frame--wide media-frame--hero"
            priority
            sizes="(min-width: 980px) 52vw, 100vw"
          />
        </Reveal>
      </section>

      <section className="homepage-section shell">
        <Reveal className="homepage-panel homepage-statement" delay={80}>
          <div className="homepage-statement__copy">
            <h2>{homeSections.statement.title}</h2>
            <p>{homeSections.statement.body}</p>
            <Link className="text-link text-link--underline" to={homeSections.statement.linkHref}>
              {homeSections.statement.linkLabel}
              <ArrowIcon className="icon icon--arrow" />
            </Link>
          </div>

          <ResponsiveImage
            asset={homeSections.statement.media}
            className="homepage-statement__media"
            imageClassName="media-frame media-frame--wide"
            sizes="(min-width: 980px) 54vw, 100vw"
          />
        </Reveal>
      </section>

      <section className="homepage-section shell">
        <Reveal className="homepage-panel homepage-services" delay={120}>
          <div className="homepage-section-heading">
            <h2>Продумані ландшафти, точно реалізовані.</h2>
            <p>
              Повний цикл послуг для створення та підтримки садів, що залишаються
              красивими роками.
            </p>
          </div>

          <div className="homepage-services__grid">
            {services.map((service) => (
              <article key={service.slug} className="homepage-service-card">
                <Link className="homepage-service-card__link" to="/services" aria-label={service.title}>
                  <ResponsiveImage
                    asset={service.media}
                    className="homepage-service-card__media"
                    imageClassName="media-frame media-frame--standard"
                    sizes="(min-width: 980px) 28vw, 100vw"
                  />
                  <div className="homepage-service-card__body">
                    <h3>{service.title}</h3>
                    <p>{service.summary}</p>
                    <span className="homepage-arrow-link" aria-hidden="true">
                      <ArrowIcon className="icon icon--arrow" />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="homepage-section shell">
        <Reveal className="homepage-panel homepage-projects" delay={160}>
          <div className="homepage-projects__intro">
            <h2>Проєкти, у яких простір читається спокійно.</h2>
            <Link className="text-link text-link--underline" to="/projects">
              Дивитися проєкти
              <ArrowIcon className="icon icon--arrow" />
            </Link>
          </div>

          <ProjectCarousel projects={projects} />
        </Reveal>
      </section>

      <section className="homepage-section shell">
        <Reveal className="homepage-panel homepage-process" delay={200}>
          <div className="homepage-process__intro">
            <h2>Чіткий процес від першого брифу до живого саду.</h2>
          </div>

          <div className="homepage-process__grid">
            {processSteps.map((step) => (
              <article key={step.number} className="homepage-process-card">
                <span className="homepage-process-card__number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="homepage-section homepage-section--contact shell">
        <Reveal className="homepage-panel homepage-contact" delay={220}>
          <div className="homepage-contact__intro">
            <h2>{homeSections.contact.title}</h2>
          </div>
          <ContactChannels channels={contactChannels} compact />
        </Reveal>
      </section>
    </>
  );
}
