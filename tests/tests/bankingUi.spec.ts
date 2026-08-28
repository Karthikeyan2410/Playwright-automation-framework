import { test, expect } from '@playwright/test';
import { ParaBankLoginPage } from '../../pages/ParaBankLoginPage';

test.describe('Banking Domain - UI Automation Suite', () => {

  test('Verify Customer Login & Accounts Overview Dashboard', async ({ page }) => {
    const loginPage = new ParaBankLoginPage(page);

    // Step 1: Navigate and log in
    await loginPage.navigate();
    await loginPage.login('john', 'demo');

    // Step 2: Validate UI Dashboard elements using precise role locator
    await expect(page.getByRole('heading', { name: 'Accounts Overview' })).toBeVisible();
    await expect(page.locator('#accountTable')).toBeVisible();

    // Step 3: Assert user greeting
    const welcomeMessage = page.locator('.smallText');
    await expect(welcomeMessage).toContainText('Welcome John Smith');
  });

});