import { ContactChannels } from "../components/ContactChannels";
import { Meta } from "../components/Meta";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { contactChannels, pageSeo, siteMeta } from "../content/siteContent";
import { useIsMobile } from "../hooks/useIsMobile";

export function ContactPage() {
  const seo = pageSeo.contact;
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <>
        <Meta
          title={seo.title}
          description={seo.description}
          path="/contact"
          image={siteMeta.uk.ogImage}
        />

        <div className="mobile-page shell">
          <section className="mobile-section">
            <Reveal className="mobile-card mobile-card--hero" variant="scale">
              <p className="mobile-kicker">Контакти</p>
              <h1>Почнімо розмову про майбутній сад.</h1>
              <p>
                Найшвидший шлях до першого діалогу — кілька фото ділянки, орієнтовні
                побажання та референси. Для цього ми тримаємо два зручні прямі
                канали зв&apos;язку.
              </p>
            </Reveal>
          </section>

          <section className="mobile-section">
            <Reveal className="mobile-card" delay={60}>
              <SectionHeading
                title="Напишіть там, де вам природніше."
                body="Instagram зручний для збережених референсів і візуального настрою. Telegram краще підходить для швидкого старту, фото ділянки та короткого брифу."
              />
              <div className="contact-page__notes">
                <p>
                  <strong>Географія:</strong> {siteMeta.uk.serviceArea}
                </p>
                <p>
                  <strong>На старті корисно:</strong> площа ділянки, кілька фото,
                  побажання до функцій та бажаний рівень участі в реалізації.
                </p>
              </div>
            </Reveal>
            <Reveal className="mobile-card mobile-card--contact" delay={100}>
              <ContactChannels channels={contactChannels} />
            </Reveal>
          </section>

          <section className="mobile-section">
            <Reveal className="detail-list detail-list--faq" delay={140}>
              <article>
                <h3>Коли звертатися?</h3>
                <p>
                  Найкраще — до початку активних будівельних робіт на ділянці або
                  паралельно з архітектурним проєктом будинку.
                </p>
              </article>
              <article>
                <h3>Чи можна прийти з готовим запитом?</h3>
                <p>
                  Так. Якщо вже є креслення, візуалізації чи список побажань, ми
                  інтегруємо їх у перший етап аналізу.
                </p>
              </article>
              <article>
                <h3>Чи берете ви сад у супровід після реалізації?</h3>
                <p>
                  Так, якщо формат і масштаб ділянки відповідають сервісному
                  календарю Landshaft.
                </p>
              </article>
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
        path="/contact"
        image={siteMeta.uk.ogImage}
      />

      <section className="page-intro shell">
        <Reveal className="page-intro__grid section-frame section-frame--compact">
          <div>
            <h1>Почнімо розмову про майбутній сад.</h1>
          </div>
          <p>
            Найшвидший шлях до першого діалогу — кілька фото ділянки, орієнтовні
            побажання та референси. Для цього ми тримаємо два зручні прямі
            канали зв'язку.
          </p>
        </Reveal>
      </section>

      <section className="section shell">
        <Reveal className="contact-page-grid section-frame">
          <div>
            <SectionHeading
              title="Напишіть там, де вам природніше."
              body="Instagram зручний для збережених референсів і візуального настрою. Telegram краще підходить для швидкого старту, фото ділянки та короткого брифу."
            />
            <div className="contact-page__notes">
              <p>
                <strong>Географія:</strong> {siteMeta.uk.serviceArea}
              </p>
              <p>
                <strong>На старті корисно:</strong> площа ділянки, кілька фото,
                побажання до функцій та бажаний рівень участі в реалізації.
              </p>
            </div>
          </div>

          <ContactChannels channels={contactChannels} />
        </Reveal>
      </section>

      <section className="section shell">
        <Reveal className="detail-list detail-list--faq section-frame section-frame--compact">
          <article>
            <h3>Коли звертатися?</h3>
            <p>
              Найкраще — до початку активних будівельних робіт на ділянці або
              паралельно з архітектурним проєктом будинку.
            </p>
          </article>
          <article>
            <h3>Чи можна прийти з готовим запитом?</h3>
            <p>
              Так. Якщо вже є креслення, візуалізації чи список побажань, ми
              інтегруємо їх у перший етап аналізу.
            </p>
          </article>
          <article>
            <h3>Чи берете ви сад у супровід після реалізації?</h3>
            <p>
              Так, якщо формат і масштаб ділянки відповідають сервісному
              календарю Landshaft.
            </p>
          </article>
        </Reveal>
      </section>
    </>
  );
}
