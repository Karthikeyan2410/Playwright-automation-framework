import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import testUsers from '../data/users.json';

for (const user of testUsers) {
  test(`Login validation for user: ${user.username}`, async ({ page }) => {
    // Extend timeout for slow network/headed execution to 60 seconds
    test.setTimeout(60000);

    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(user.username, 'secret_sauce');

    if (user.shouldPass) {
      await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    } else {
      const errorMsg = page.locator('[data-test="error"]');
      await expect(errorMsg).toBeVisible({ timeout: 10000 });
    }
  });
}