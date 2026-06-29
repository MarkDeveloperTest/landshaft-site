let scriptMounted = false;

function hasAnalytics() {
  return Boolean(import.meta.env.VITE_PLAUSIBLE_DOMAIN);
}

export function mountAnalyticsScript() {
  if (!hasAnalytics() || scriptMounted || typeof document === "undefined") {
    return;
  }

  const existing = document.querySelector('script[data-landshaft-analytics="true"]');
  if (existing) {
    scriptMounted = true;
    return;
  }

  const script = document.createElement("script");
  script.defer = true;
  script.dataset.domain = import.meta.env.VITE_PLAUSIBLE_DOMAIN;
  script.dataset.landshaftAnalytics = "true";
  script.src = "https://plausible.io/js/script.outbound-links.js";
  document.head.append(script);
  scriptMounted = true;
}

export function trackPageView(url) {
  if (!hasAnalytics() || typeof window === "undefined") {
    return;
  }

  mountAnalyticsScript();

  if (typeof window.plausible === "function") {
    window.plausible("pageview", { u: url });
  }
}

export function trackOutboundLead(channel) {
  if (!hasAnalytics() || typeof window === "undefined") {
    return;
  }

  if (typeof window.plausible === "function") {
    window.plausible("Outbound Lead", { props: { channel } });
  }
}
