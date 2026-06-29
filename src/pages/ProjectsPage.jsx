import { Meta } from "../components/Meta";
import { ResponsiveImage } from "../components/ResponsiveImage";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { pageSeo, projects, siteMeta, testimonials } from "../content/siteContent";

export function ProjectsPage() {
  const seo = pageSeo.projects;

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
