import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const siteUrl = process.env.VITE_SITE_URL || "https://example.com";
const publicDir = resolve(process.cwd(), "public");

if (!process.env.VITE_SITE_URL) {
  console.warn(
    "VITE_SITE_URL is not set. Generated sitemap.xml and robots.txt use https://example.com as a placeholder.",
  );
}

const routes = ["/", "/services", "/projects", "/process", "/contact", "/privacy"];

mkdirSync(publicDir, { recursive: true });

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((route) => {
    const url = new URL(route, siteUrl).toString();
    return `  <url><loc>${url}</loc></url>`;
  })
  .join("\n")}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${new URL("/sitemap.xml", siteUrl).toString()}
`;

writeFileSync(resolve(publicDir, "sitemap.xml"), sitemap, "utf8");
writeFileSync(resolve(publicDir, "robots.txt"), robots, "utf8");
