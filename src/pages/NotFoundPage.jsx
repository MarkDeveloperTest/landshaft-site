import { Meta } from "../components/Meta";
import { PageHero } from "../components/PageHero";
import { pageCopy, pageSeo, siteMeta } from "../content/siteContent";

export function NotFoundPage() {
  const seo = pageSeo.notFound;
  const copy = pageCopy.notFound;

  return (
    <>
      <Meta
        title={seo.title}
        description={seo.description}
        path="/404"
        image={siteMeta.uk.ogImage}
        noIndex
      />

      <section className="not-found shell">
        <PageHero
          eyebrow={copy.kicker}
          title={copy.title}
          body={copy.body}
          primaryAction={{ label: copy.cta, to: "/" }}
          secondaryAction={{ label: copy.secondaryCta, to: "/projects" }}
          className="not-found__hero"
        />
      </section>
    </>
  );
}
