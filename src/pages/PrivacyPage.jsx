import { Link } from "react-router-dom";
import { ArrowIcon } from "../components/Icons";
import { Meta } from "../components/Meta";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { pageCopy, pageSeo, siteMeta } from "../content/siteContent";

export function PrivacyPage() {
  const seo = pageSeo.privacy;
  const copy = pageCopy.privacy;

  return (
    <>
      <Meta
        title={seo.title}
        description={seo.description}
        path="/privacy"
        image={siteMeta.uk.ogImage}
      />

      <section className="page-intro shell">
        <PageHero
          eyebrow={copy.hero.kicker}
          title={copy.hero.title}
          body={copy.hero.body}
          primaryAction={{ label: copy.hero.cta, to: "/contact" }}
          secondaryAction={{ label: copy.hero.secondaryCta, to: "/" }}
        />
      </section>

      <section className="section shell">
        <Reveal className="legal-copy section-frame">
          {copy.sections.map((section) => (
            <article key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </article>
          ))}
        </Reveal>
      </section>

      <section className="section shell">
        <Reveal className="inline-cta">
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
