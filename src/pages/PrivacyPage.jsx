import { Meta } from "../components/Meta";
import { Reveal } from "../components/Reveal";
import { pageSeo, siteMeta } from "../content/siteContent";

export function PrivacyPage() {
  const seo = pageSeo.privacy;

  return (
    <>
      <Meta
        title={seo.title}
        description={seo.description}
        path="/privacy"
        image={siteMeta.uk.ogImage}
      />

      <section className="page-intro shell">
        <Reveal className="page-intro__grid section-frame section-frame--compact">
          <div>
            <h1>Ми збираємо мінімум даних і не використовуємо власні форми.</h1>
          </div>
          <p>
            Сайт Landshaft працює як інформаційна платформа та направляє
            користувача у зовнішні канали зв'язку. Нижче — коротко про те, які
            дані можуть з'являтися під час користування сайтом.
          </p>
        </Reveal>
      </section>

      <section className="section shell">
        <Reveal className="legal-copy section-frame">
          <article>
            <h2>1. Контактні звернення</h2>
            <p>
              Ми не зберігаємо звернення через вбудовану форму, оскільки у v1
              сайту немає власного механізму відправки даних. Коли ви переходите
              до Instagram або Telegram, подальша обробка даних регулюється
              політиками відповідних сервісів.
            </p>
          </article>

          <article>
            <h2>2. Аналітика</h2>
            <p>
              Якщо для сайту увімкнена Plausible-аналітика, ми фіксуємо лише
              базові події перегляду сторінок та переходів у контактні канали.
              Персональні форми, профілі користувачів або рекламні трекери не
              використовуються.
            </p>
          </article>

          <article>
            <h2>3. Технічні дані</h2>
            <p>
              Хостинг-провайдер може автоматично зберігати журнали доступу,
              включно з IP-адресою, типом браузера та часом звернення. Ці дані
              потрібні для безпеки та стабільності роботи сайту.
            </p>
          </article>

          <article>
            <h2>4. Оновлення політики</h2>
            <p>
              Якщо структура сайту або набір сервісів зміниться, ця сторінка
              буде оновлена. Актуальна версія політики публікується саме тут.
            </p>
          </article>
        </Reveal>
      </section>
    </>
  );
}
