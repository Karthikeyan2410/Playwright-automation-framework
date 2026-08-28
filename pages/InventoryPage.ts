import { Page, Locator } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly addBackpackBtn: Locator;
  readonly cartBadge: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addBackpackBtn = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  async addBackpackToCart() {
    await this.addBackpackBtn.click();
  }

  async getCartCount() {
    return await this.cartBadge.textContent();
  }
}