import { Helmet } from "react-helmet-async";
import { contactChannels, siteMeta } from "../content/siteContent";

export function Meta({ title, description, path = "/", image, noIndex = false }) {
  const meta = siteMeta.uk;
  const canonical = meta.siteUrl ? new URL(path, meta.siteUrl).toString() : "";
  const imageUrl =
    meta.siteUrl && image ? new URL(image, meta.siteUrl).toString() : "";
  const structuredData =
    canonical && meta.siteUrl
      ? [
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: title,
            description,
            url: canonical,
            inLanguage: meta.lang,
          },
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: meta.siteName,
            url: meta.siteUrl,
            description: meta.description,
            areaServed: meta.serviceArea,
            sameAs: contactChannels.map((channel) => channel.href),
          },
        ]
      : [];

  return (
    <Helmet>
      <html lang={meta.lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="robots"
        content={noIndex ? "noindex, nofollow" : "index, follow, max-image-preview:large"}
      />
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content={meta.themeColor} />
      <meta property="og:site_name" content={meta.siteName} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={meta.locale} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {canonical ? <link rel="canonical" href={canonical} /> : null}
      {canonical ? <meta property="og:url" content={canonical} /> : null}
      {canonical ? <meta name="twitter:url" content={canonical} /> : null}
      {imageUrl ? <meta property="og:image" content={imageUrl} /> : null}
      {imageUrl ? <meta property="og:image:alt" content={meta.siteName} /> : null}
      {imageUrl ? <meta name="twitter:image" content={imageUrl} /> : null}
      {imageUrl ? <meta name="twitter:image:alt" content={meta.siteName} /> : null}
      {structuredData.length > 0 ? (
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      ) : null}
    </Helmet>
  );
}
