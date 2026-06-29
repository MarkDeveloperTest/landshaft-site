import { Link } from "react-router-dom";
import { ContactChannels } from "../components/ContactChannels";
import { ArrowIcon } from "../components/Icons";
import { Meta } from "../components/Meta";
import { ResponsiveImage } from "../components/ResponsiveImage";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
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

      <section className="hero shell">
        <Reveal className="hero__grid">
          <div className="hero__copy">
            <h1>{homeSections.hero.title}</h1>
            <p>{homeSections.hero.body}</p>
            <div className="hero__actions">
              <Link className="button button--solid" to={homeSections.hero.primaryCta.href}>
                {homeSections.hero.primaryCta.label}
                <ArrowIcon className="icon icon--arrow" />
              </Link>
              <Link
                className="button button--outline"
                to={homeSections.hero.secondaryCta.href}
              >
                {homeSections.hero.secondaryCta.label}
              </Link>
            </div>
          </div>

          <ResponsiveImage
            asset={homeSections.hero.media}
            className="hero__media"
            imageClassName="media-frame"
            priority
            sizes="(min-width: 960px) 52vw, 100vw"
          />
        </Reveal>
      </section>

      <section className="home-statement shell">
        <Reveal className="split-layout split-layout--balanced">
          <div>
            <h2>{homeSections.statement.title}</h2>
            <p>{homeSections.statement.body}</p>
            <Link className="text-link" to={homeSections.statement.linkHref}>
              {homeSections.statement.linkLabel}
              <ArrowIcon className="icon icon--arrow" />
            </Link>
          </div>

          <ResponsiveImage
            asset={homeSections.statement.media}
            className="statement-media"
            imageClassName="media-frame media-frame--soft"
            sizes="(min-width: 960px) 40vw, 100vw"
          />
        </Reveal>
      </section>

      <section className="section shell">
        <Reveal>
          <SectionHeading
            title="Продумані ландшафти, точно реалізовані."
            body="Повний цикл роботи з приватним садом: від першого плану до довгого супроводу після завершення реалізації."
          />

          <div className="service-preview">
            {services.map((service) => (
              <article key={service.slug} className="service-preview__item">
                <div className="service-preview__meta">{service.kicker}</div>
                <div className="service-preview__body">
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="section__cta">
            <Link className="text-link" to="/services">
              Усі послуги
              <ArrowIcon className="icon icon--arrow" />
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="section section--flush shell">
        <Reveal>
          <SectionHeading
            title="Проєкти, у яких простір читається спокійно."
            body="Кожен сад збирається навколо одного сильного просторового жесту, а не набору декоративних рішень."
          />

          <div className="project-band-grid">
            {projects.map((project, index) => (
              <article
                key={project.slug}
                className={`project-band project-band--${index % 2 === 0 ? "wide" : "split"}`}
              >
                <ResponsiveImage
                  asset={project.media}
                  className="project-band__media"
                  imageClassName="media-frame"
                  sizes="(min-width: 960px) 48vw, 100vw"
                />
                <div className="project-band__copy">
                  <p className="project-band__index">{project.index}</p>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <p className="project-band__location">{project.location}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="section__cta">
            <Link className="text-link" to="/projects">
              Переглянути всі проєкти
              <ArrowIcon className="icon icon--arrow" />
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="section shell">
        <Reveal>
          <SectionHeading
            title="Чіткий процес від першого брифу до живого саду."
            body="Ми працюємо через ясну послідовність рішень, де архітектура, посадки та догляд не розходяться між собою."
          />

          <div className="process-preview">
            {processSteps.map((step) => (
              <article key={step.number} className="process-preview__item">
                <span>{step.number}</span>
                <h3>{step.title}</h3>
              </article>
            ))}
          </div>

          <div className="section__cta">
            <Link className="text-link" to="/process">
              Детальніше про процес
              <ArrowIcon className="icon icon--arrow" />
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="section section--contact shell">
        <Reveal className="contact-callout">
          <div>
            <SectionHeading
              title={homeSections.contact.title}
              body={homeSections.contact.body}
            />
          </div>
          <ContactChannels channels={contactChannels} />
        </Reveal>
      </section>
    </>
  );
}
