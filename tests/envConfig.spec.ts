import { test, expect } from '@playwright/test';

test('Login using environment variables', async ({ page }) => {
  // Uses baseURL defined in playwright.config.ts
  await page.goto('/');

  // Pulls credentials from process.env
  await page.getByPlaceholder('Username').fill(process.env.TEST_USER!);
  await page.getByPlaceholder('Password').fill(process.env.TEST_PASS!);
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/.*inventory/);
});