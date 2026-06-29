import { Link } from "react-router-dom";
import { ArrowIcon } from "../components/Icons";
import { Meta } from "../components/Meta";
import { Reveal } from "../components/Reveal";
import { pageSeo, siteMeta } from "../content/siteContent";

export function NotFoundPage() {
  const seo = pageSeo.notFound;

  return (
    <>
      <Meta
        title={seo.title}
        description={seo.description}
        path="/404"
        image={siteMeta.uk.ogImage}
      />

      <section className="not-found shell">
        <Reveal className="not-found__inner">
          <h1>Сторінку не знайдено.</h1>
          <p>
            Можливо, посилання застаріло або сторінка була переміщена. Поверніться
            на головну та продовжіть перегляд.
          </p>
          <Link className="button button--solid" to="/">
            На головну
            <ArrowIcon className="icon icon--arrow" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
