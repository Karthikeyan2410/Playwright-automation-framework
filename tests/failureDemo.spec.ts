import { test, expect } from '@playwright/test';

test('Intentional failure to test artifact recording', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  
  // Intentional incorrect title check
  await expect(page).toHaveTitle('Swag Labs');
});