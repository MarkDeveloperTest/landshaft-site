import { ContactChannels } from "../components/ContactChannels";
import { Meta } from "../components/Meta";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import {
  contactChannels,
  media,
  pageCopy,
  pageSeo,
  siteMeta,
} from "../content/siteContent";
import { useIsMobile } from "../hooks/useIsMobile";
import { trackOutboundLead } from "../lib/analytics";

export function ContactPage() {
  const seo = pageSeo.contact;
  const isMobile = useIsMobile();
  const copy = pageCopy.contact;
  const heroDetails = isMobile
    ? []
    : [
        {
          label: copy.notes.geographyLabel,
          value: siteMeta.uk.serviceArea,
        },
        {
          label: copy.notes.startLabel,
          value: copy.notes.startBody,
        },
      ];

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
            <PageHero
              eyebrow={copy.hero.kicker}
              title={copy.hero.title}
              body={copy.hero.body}
              primaryAction={{
                label: copy.hero.primaryCta,
                href: contactChannels[0].href,
                ariaLabel: `${contactChannels[0].label}: ${contactChannels[0].handle}`,
                onClick: () => trackOutboundLead(contactChannels[0].label),
              }}
              secondaryAction={{
                label: copy.hero.secondaryCta,
                href: contactChannels[1].href,
                ariaLabel: `${contactChannels[1].label}: ${contactChannels[1].handle}`,
                onClick: () => trackOutboundLead(contactChannels[1].label),
              }}
              details={heroDetails}
              media={media.projectCourtyard}
              mediaSizes="100vw"
              priority
            />
          </section>

          <section className="mobile-section">
            <Reveal className="mobile-card" delay={60}>
              <SectionHeading
                title={copy.channels.title}
                body={copy.channels.body}
              />
            </Reveal>
            <Reveal className="mobile-card mobile-card--contact" delay={100}>
              <ContactChannels channels={contactChannels} />
            </Reveal>
          </section>

          <section className="mobile-section">
            <Reveal className="detail-list detail-list--faq" delay={140}>
              {copy.faq.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
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
        <PageHero
          eyebrow={copy.hero.kicker}
          title={copy.hero.title}
          body={copy.hero.body}
          primaryAction={{
            label: copy.hero.primaryCta,
            href: contactChannels[0].href,
            ariaLabel: `${contactChannels[0].label}: ${contactChannels[0].handle}`,
            onClick: () => trackOutboundLead(contactChannels[0].label),
          }}
          secondaryAction={{
            label: copy.hero.secondaryCta,
            href: contactChannels[1].href,
            ariaLabel: `${contactChannels[1].label}: ${contactChannels[1].handle}`,
            onClick: () => trackOutboundLead(contactChannels[1].label),
          }}
          details={heroDetails}
          media={media.projectCourtyard}
          priority
        />
      </section>

      <section className="section shell">
        <Reveal className="contact-page-grid section-frame">
          <div>
            <SectionHeading
              title={copy.channels.title}
              body={copy.channels.body}
            />
          </div>

          <ContactChannels channels={contactChannels} />
        </Reveal>
      </section>

      <section className="section shell">
        <Reveal className="detail-list detail-list--faq section-frame section-frame--compact">
          {copy.faq.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </Reveal>
      </section>
    </>
  );
}
