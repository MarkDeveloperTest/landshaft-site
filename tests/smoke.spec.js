import { expect, test } from "@playwright/test";

const routes = ["/", "/services", "/projects", "/process", "/contact", "/privacy"];

for (const route of routes) {
  test(`route ${route} renders without framework errors`, async ({ page }) => {
    await page.goto(route);
    await expect(page.locator("body")).toContainText(/LANDSHAFT/i);
    await expect(page.locator("#root")).not.toContainText("Unexpected Application Error");
    await expect(page.locator("body")).not.toContainText("Failed to fetch dynamically imported module");
  });
}

test("primary desktop navigation works", async ({ page, isMobile }) => {
  test.skip(isMobile, "Desktop-only interaction");
  await page.goto("/");
  await expect(
    page.getByRole("banner").getByRole("link", { name: "Обговорити проєкт" }),
  ).toBeVisible();
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
  const menuButton = page.getByRole("button", { name: "Відкрити меню" });
  await menuButton.click();
  const nav = page.getByLabel("Мобільна навігація");
  const menuPanel = page.locator("#site-mobile-navigation");
  await expect(nav.getByRole("link", { name: "Послуги" })).toBeVisible();
  await expect(menuPanel.getByRole("link", { name: "Обговорити проєкт" })).toBeVisible();
  await expect(
    menuPanel.getByRole("link", { name: /Instagram: @_green_garden_ua/i }),
  ).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(nav).not.toBeVisible();
  await expect(menuButton).toBeFocused();
  await menuButton.click();
  await nav.getByRole("link", { name: "Процес" }).click();
  await expect(page).toHaveURL(/\/process$/);
});

test("skip link targets the main content region", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  const skipLink = page.getByRole("link", { name: "Перейти до основного вмісту" });
  await expect(skipLink).toBeFocused();
  await skipLink.press("Enter");
  await expect(page.locator("#main-content")).toBeFocused();
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
