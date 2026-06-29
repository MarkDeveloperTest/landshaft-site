import { Link } from "react-router-dom";
import { ArrowIcon } from "../components/Icons";
import { Meta } from "../components/Meta";
import { ResponsiveImage } from "../components/ResponsiveImage";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { media, pageSeo, processSteps, services, siteMeta } from "../content/siteContent";

export function ServicesPage() {
  const seo = pageSeo.services;

  return (
    <>
      <Meta
        title={seo.title}
        description={seo.description}
        path="/services"
        image={siteMeta.uk.ogImage}
      />

      <section className="page-intro shell">
        <Reveal className="service-page-hero">
          <div className="service-page-hero__copy">
            <h1>Послуги</h1>
            <p>
              Комплексний підхід до створення садів і просторів, що поєднують
              естетику, функціональність і довговічність.
            </p>

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

            <Link className="text-link" to="/contact">
              Обговорити проєкт
              <ArrowIcon className="icon icon--arrow" />
            </Link>
          </div>

          <ResponsiveImage
            asset={media.projectCourtyard}
            className="service-page-hero__media"
            imageClassName="media-frame"
            priority
            sizes="(min-width: 960px) 52vw, 100vw"
          />
        </Reveal>
      </section>

      <section className="section shell">
        <Reveal>
          <SectionHeading
            title="Процес"
            body="Чітка послідовність етапів і увага до деталей — від першої зустрічі до реалізації та підтримки."
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

      <section className="section shell">
        <Reveal className="service-article-list">
          {services.map((service, index) => (
            <article
              key={service.slug}
              className={`service-article${index % 2 === 0 ? "" : " service-article--reverse"}`}
            >
              <ResponsiveImage
                asset={service.media}
                className="service-article__media"
                imageClassName="media-frame"
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

      <section className="section shell">
        <Reveal className="split-layout split-layout--text-heavy">
          <SectionHeading
            title="Що отримує клієнт на виході."
            body="Чітка просторово-матеріальна система, продуманий цикл реалізації та сад, який не втрачає якості після завершення будівництва."
          />

          <div className="detail-list">
            <article>
              <h3>Ясна композиція</h3>
              <p>
                Кожне рішення перевіряється на масштаб, ритм руху, світло,
                функціональність і зв'язок з архітектурою.
              </p>
            </article>
            <article>
              <h3>Контроль виконання</h3>
              <p>
                Ми супроводжуємо етапи реалізації так, щоб матеріали й посадки
                залишались вірними початковій логіці проєкту.
              </p>
            </article>
            <article>
              <h3>Довгострокова цінність</h3>
              <p>
                Сад закладається з урахуванням часу: як він росте, дозріває і
                змінюється через рік, три та п'ять сезонів.
              </p>
            </article>
          </div>
        </Reveal>
      </section>

      <section className="section section--contact shell">
        <Reveal className="inline-cta">
          <div>
            <h2>Якщо вже є ділянка або перший запит, можна переходити до розмови.</h2>
            <p>
              Найкращий старт для проєкту — кілька фото ділянки, орієнтовні
              побажання і розуміння бажаного масштабу робіт.
            </p>
          </div>
          <Link className="button button--solid" to="/contact">
            Перейти до контактів
            <ArrowIcon className="icon icon--arrow" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
