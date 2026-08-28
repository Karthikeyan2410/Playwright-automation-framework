import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test('Full E2E Flow using Page Object Model', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  
  await inventoryPage.addBackpackToCart();
  
  const count = await inventoryPage.getCartCount();
  expect(count).toBe('1');
});