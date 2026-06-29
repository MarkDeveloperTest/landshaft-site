import { Meta } from "../components/Meta";
import { ResponsiveImage } from "../components/ResponsiveImage";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import {
  media,
  pageSeo,
  processSteps,
  siteMeta,
  testimonials,
} from "../content/siteContent";
import { useIsMobile } from "../hooks/useIsMobile";

export function ProcessPage() {
  const seo = pageSeo.process;
  const isMobile = useIsMobile();

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
            <Reveal className="mobile-card mobile-card--hero" variant="scale">
              <p className="mobile-kicker">Процес</p>
              <h1>Від брифу до саду, який добре старіє.</h1>
              <p>
                Ми працюємо не лише над образом майбутнього простору, а й над тим,
                як він буде реалізований, утриманий та прочитаний у повсякденному
                житті через роки.
              </p>
            </Reveal>
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
                imageClassName="media-frame"
                sizes="100vw"
              />
            </Reveal>
            <Reveal className="mobile-card" delay={240}>
              <SectionHeading
                title="Сад має залишатися переконливим і після здачі."
                body="Тому ми відразу думаємо про сервісний цикл, темп росту посадок, сезонні зміни й те, як простір поводиться без штучного ефекту новизни."
              />
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
        <Reveal className="page-intro__grid">
          <div>
            <h1>Від брифу до саду, який добре старіє.</h1>
          </div>
          <p>
            Ми працюємо не лише над образом майбутнього простору, а й над тим,
            як він буде реалізований, утриманий та прочитаний у повсякденному
            житті через роки.
          </p>
        </Reveal>
      </section>

      <section className="section shell">
        <Reveal className="process-timeline">
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
        <Reveal className="split-layout split-layout--balanced">
          <div>
            <SectionHeading
              title="Сад має залишатися переконливим і після здачі."
              body="Тому ми відразу думаємо про сервісний цикл, темп росту посадок, сезонні зміни й те, як простір поводиться без штучного ефекту новизни."
            />
          </div>

          <ResponsiveImage
            asset={media.projectTerrace}
            className="statement-media"
            imageClassName="media-frame"
            sizes="(min-width: 960px) 40vw, 100vw"
          />
        </Reveal>
      </section>

      <section className="section shell">
        <Reveal className="split-layout split-layout--balanced">
          <blockquote className="quote-block">
            <p>{testimonials[0].quote}</p>
            <footer>{testimonials[0].author}</footer>
          </blockquote>

          <div className="detail-list">
            <article>
              <h3>Прозорий ритм роботи</h3>
              <p>
                Клієнт завжди розуміє, на якому етапі перебуває проєкт і які
                рішення приймаються далі.
              </p>
            </article>
            <article>
              <h3>Менше випадковості</h3>
              <p>
                Ми відсікаємо зайве на ранніх етапах, щоб під час реалізації не
                втрачати якість через компроміси.
              </p>
            </article>
            <article>
              <h3>Орієнтація на довгий термін</h3>
              <p>
                Усі матеріали та посадки оцінюються не лише в день здачі, а й у
                перспективі кількох сезонів.
              </p>
            </article>
          </div>
        </Reveal>
      </section>
    </>
  );
}
