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
  services,
  siteMeta,
} from "../content/siteContent";
import { useIsMobile } from "../hooks/useIsMobile";

export function ServicesPage() {
  const seo = pageSeo.services;
  const isMobile = useIsMobile();
  const copy = pageCopy.services;

  if (isMobile) {
    return (
      <>
        <Meta
          title={seo.title}
          description={seo.description}
          path="/services"
          image={siteMeta.uk.ogImage}
        />

        <div className="mobile-page shell">
          <section className="mobile-section">
            <PageHero
              eyebrow={copy.hero.kicker}
              title={copy.hero.title}
              body={copy.hero.body}
              primaryAction={{ label: copy.hero.cta, to: "/contact" }}
              secondaryAction={{ label: copy.hero.secondaryCta, to: "/process" }}
              media={media.projectCourtyard}
              mediaSizes="100vw"
              priority
            />
          </section>

          <section className="mobile-section">
            <div className="mobile-card-grid">
              {services.map((service, index) => (
                <Reveal key={service.slug} className="mobile-card" delay={90 + index * 35}>
                  <p className="mobile-kicker">{service.kicker}</p>
                  <h2>{service.title}</h2>
                  <p>{service.detail}</p>
                </Reveal>
              ))}
            </div>
          </section>

          <section className="mobile-section">
            <Reveal className="mobile-section__header" delay={180}>
              <SectionHeading
                title={copy.process.title}
                body={copy.process.body}
              />
            </Reveal>

            <div className="mobile-process-list">
              {processSteps.map((step, index) => (
                <Reveal
                  key={step.number}
                  className="mobile-process-item"
                  delay={200 + index * 30}
                >
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </Reveal>
              ))}
            </div>
          </section>

          <section className="mobile-section">
            <Reveal className="mobile-card mobile-card--contact" variant="scale" delay={260}>
              <h2>{copy.contact.title}</h2>
              <p>{copy.contact.body}</p>
              <Link className="button button--solid" to="/contact">
                {copy.contact.cta}
                <ArrowIcon className="icon icon--arrow" />
              </Link>
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
        path="/services"
        image={siteMeta.uk.ogImage}
      />

      <section className="page-intro page-intro--services shell">
        <PageHero
          eyebrow={copy.hero.kicker}
          title={copy.hero.title}
          body={copy.hero.body}
          primaryAction={{ label: copy.hero.cta, to: "/contact" }}
          secondaryAction={{ label: copy.hero.secondaryCta, to: "/process" }}
          media={media.projectCourtyard}
          priority
        >
          <div className="service-outline">
            {services.map((service) => (
              <article key={service.slug} className="service-outline__item">
                <p className="service-outline__index">{service.kicker}</p>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </PageHero>
      </section>

      <section className="section section--services-overview shell">
        <Reveal className="section-frame section-frame--compact">
          <SectionHeading
            title={copy.process.title}
            body={copy.process.body}
          />

          <div className="process-overview">
            {processSteps.map((step) => (
              <article key={step.number} className="process-overview__item">
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="section section--services-articles shell">
        <Reveal className="service-article-list section-frame">
          {services.map((service, index) => (
            <article
              key={service.slug}
              className={`service-article${index % 2 === 0 ? "" : " service-article--reverse"}`}
            >
              <ResponsiveImage
                asset={service.media}
                className="service-article__media"
                imageClassName="media-frame media-frame--standard"
                sizes="(min-width: 960px) 42vw, 100vw"
              />

              <div className="service-article__content">
                <p className="service-article__index">{service.kicker}</p>
                <h2>{service.title}</h2>
                <p>{service.detail}</p>
                <ul className="service-article__list">
                  {service.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </Reveal>
      </section>

      <section className="section section--services-value shell">
        <Reveal className="split-layout split-layout--text-heavy section-frame">
          <SectionHeading
            title={copy.value.title}
            body={copy.value.body}
          />

          <div className="detail-list">
            <article>
              <h3>Ясний задум</h3>
              <p>Кожне рішення перевіряється на масштаб, ритм і зв'язок з архітектурою.</p>
            </article>
            <article>
              <h3>Контроль виконання</h3>
              <p>Матеріали й посадки залишаються вірними початковій логіці проєкту.</p>
            </article>
            <article>
              <h3>Довга перспектива</h3>
              <p>Сад закладається з урахуванням того, як він росте і змінюється в часі.</p>
            </article>
          </div>
        </Reveal>
      </section>

      <section className="section section--contact section--services-contact shell">
        <Reveal className="inline-cta section-frame">
          <div>
            <h2>{copy.contact.title}</h2>
            <p>{copy.contact.body}</p>
          </div>
          <Link className="button button--solid" to="/contact">
            {copy.contact.cta}
            <ArrowIcon className="icon icon--arrow" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
