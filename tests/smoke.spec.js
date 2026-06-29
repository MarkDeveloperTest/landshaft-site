import { expect, test } from "@playwright/test";

const routes = ["/", "/services", "/projects", "/process", "/contact", "/privacy"];

for (const route of routes) {
  test(`route ${route} renders without framework errors`, async ({ page }) => {
    await page.goto(route);
    await expect(page.locator("body")).toContainText("Landshaft");
    await expect(page.locator("#root")).not.toContainText("Unexpected Application Error");
    await expect(page.locator("body")).not.toContainText("Failed to fetch dynamically imported module");
  });
}

test("primary desktop navigation works", async ({ page, isMobile }) => {
  test.skip(isMobile, "Desktop-only interaction");
  await page.goto("/");
  await page
    .getByLabel("Основна навігація")
    .getByRole("link", { name: "Проєкти" })
    .click();
  await expect(page).toHaveURL(/\/projects$/);
  await page
    .getByLabel("Основна навігація")
    .getByRole("link", { name: "Контакти" })
    .click();
  await expect(page).toHaveURL(/\/contact$/);
});

test("mobile menu works", async ({ page, isMobile }) => {
  test.skip(!isMobile, "Mobile-only interaction");
  await page.goto("/");
  await page.getByRole("button", { name: "Відкрити меню" }).click();
  const nav = page.getByLabel("Мобільна навігація");
  await expect(nav.getByRole("link", { name: "Послуги" })).toBeVisible();
  await nav.getByRole("link", { name: "Процес" }).click();
  await expect(page).toHaveURL(/\/process$/);
});

test("Instagram and Telegram links are present on home and contact", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("link", { name: /Instagram/i }).first()).toBeVisible();
  await expect(page.getByRole("link", { name: /Telegram/i }).first()).toBeVisible();

  await page.goto("/contact");
  await expect(page.getByRole("link", { name: /Instagram/i }).first()).toBeVisible();
  await expect(page.getByRole("link", { name: /Telegram/i }).first()).toBeVisible();
});

test("404 route renders correctly", async ({ page }) => {
  await page.goto("/does-not-exist");
  await expect(page.getByRole("heading", { name: "Сторінку не знайдено." })).toBeVisible();
  await expect(page.getByRole("link", { name: "На головну" })).toBeVisible();
});
