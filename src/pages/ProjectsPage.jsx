import { Meta } from "../components/Meta";
import { ResponsiveImage } from "../components/ResponsiveImage";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { pageSeo, projects, siteMeta, testimonials } from "../content/siteContent";
import { useIsMobile } from "../hooks/useIsMobile";

export function ProjectsPage() {
  const seo = pageSeo.projects;
  const isMobile = useIsMobile();

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
            <Reveal className="mobile-card mobile-card--hero" variant="scale">
              <p className="mobile-kicker">Проєкти</p>
              <h1>Сади, у яких простір працює тихо й переконливо.</h1>
              <p>
                Ми віддаємо перевагу кільком сильним жестам замість перевантаження
                декоративністю. Саме тому кожен проєкт читається спокійно, але має
                виразний характер.
              </p>
            </Reveal>
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
                    imageClassName="media-frame"
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
                title="Кожен проєкт формується навколо однієї чіткої ідеї."
                body="Ми не збираємо сад із розрізнених ефектів. Вода, камінь, посадки та маршрути мають працювати як одна композиція."
              />
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
        <Reveal className="page-intro__grid">
          <div>
            <h1>Сади, у яких простір працює тихо й переконливо.</h1>
          </div>
          <p>
            Ми віддаємо перевагу кільком сильним жестам замість перевантаження
            декоративністю. Саме тому кожен проєкт читається спокійно, але має
            виразний характер.
          </p>
        </Reveal>
      </section>

      <section className="section shell">
        <Reveal className="project-showcase">
          {projects.map((project, index) => (
            <article
              key={project.slug}
              className={`project-showcase__item${index === 1 ? " is-offset" : ""}`}
            >
              <ResponsiveImage
                asset={project.media}
                className="project-showcase__media"
                imageClassName="media-frame"
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
        <Reveal className="split-layout split-layout--balanced">
          <div>
            <SectionHeading
              title="Кожен проєкт формується навколо однієї чіткої ідеї."
              body="Ми не збираємо сад із розрізнених ефектів. Вода, камінь, посадки та маршрути мають працювати як одна композиція."
            />
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
