import { test, expect } from '@playwright/test';

test('1. Mock API 500 Error - Verify UI error handling', async ({ page }) => {
  // Intercept the API call and force a 500 Internal Server Error
  await page.route('**/api/users*', async (route) => {
    await route.fulfill({
      status: 500,
      contentType: 'application/json',
      body: JSON.stringify({ message: 'Internal Server Error' }),
    });
  });

  // Action: Navigate to target page
  const response = await page.goto('https://reqres.in/api/users?page=2');
  
  // Assert: Verify the server response status is 500
  expect(response?.status()).toBe(500);
});

test('2. Mock API Response Data - Inject fake user payload', async ({ page }) => {
  // Intercept the API call and return customized mock JSON
  await page.route('**/api/users?page=2', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        page: 2,
        data: [
          {
            id: 999,
            email: 'test.automation@playwright.dev',
            first_name: 'Automation',
            last_name: 'Engineer',
            avatar: 'https://reqres.in/img/faces/1-image.jpg'
          }
        ]
      }),
    });
  });

  // Fetch the intercepted endpoint directly
  const response = await page.goto('https://reqres.in/api/users?page=2');
  const responseData = await response?.json();

  // Assert: Verify custom injected payload returned
  expect(responseData.data[0].first_name).toBe('Automation');
  expect(responseData.data[0].id).toBe(999);
});