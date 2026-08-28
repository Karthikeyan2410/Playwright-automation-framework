import {test,expect}from "@playwright/test";
test("Verify IRCTC Title", async ({page}) => {
await page.goto("https://www.irctc.co.in");
await expect(page).toHaveTitle(/irctc/i);
});

