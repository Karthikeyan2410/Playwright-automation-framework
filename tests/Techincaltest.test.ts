import { test, expect } from "@playwright/test";

test("Verify Site Title", async ({ page }) => {
  await page.goto("https://demo.playwright.dev/todomvc");
  await expect(page).toHaveTitle(/React • TodoMVC/i);
});
