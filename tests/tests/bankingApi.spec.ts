import { test, expect } from '@playwright/test';

test.describe('Banking Domain - REST API Automation Suite', () => {

  const BASE_URL = 'https://parabank.parasoft.com/parabank/services/bank';
  let fromAccountId: string;
  let toAccountId: string;

  test('POST /login - Validate Banking Authentication', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/login/john/demo`, {
      headers: { 'Accept': 'application/json' }
    });

    expect(response.status()).toBe(200);
    const userData = await response.json();
    console.log('Customer Details:', userData);

    expect(userData).toHaveProperty('id');
    expect(userData.firstName).toBe('John');
  });

  test('GET /customers/{id}/accounts - Verify Active Accounts & Balances', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/customers/12212/accounts`, {
      headers: { 'Accept': 'application/json' }
    });

    expect(response.status()).toBe(200);
    const accounts = await response.json();
    console.log('Active Accounts Count:', accounts.length);

    expect(Array.isArray(accounts)).toBeTruthy();
    expect(accounts.length).toBeGreaterThanOrEqual(2);
    
    // Capture real active account IDs for downstream testing
    fromAccountId = accounts[0].id.toString();
    toAccountId = accounts[1].id.toString();
    console.log(`Saved dynamic accounts: From ${fromAccountId} -> To ${toAccountId}`);
  });

  test('POST /transfer - Execute Money Transfer Between Accounts', async ({ request }) => {
    // Use dynamic account IDs captured from previous step, with real account fallbacks
    const sourceAccount = fromAccountId || '13344';
    const targetAccount = toAccountId || '13677';
    const amount = '50';

    const response = await request.post(
      `${BASE_URL}/transfer?fromAccountId=${sourceAccount}&toAccountId=${targetAccount}&amount=${amount}`,
      {
        headers: { 'Accept': 'application/json' }
      }
    );

    expect(response.status()).toBe(200);
    const responseText = await response.text();
    console.log('Transfer Result:', responseText);

    expect(responseText).toContain('Successfully transferred');
  });

});