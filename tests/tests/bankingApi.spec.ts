import { test, expect } from '@playwright/test';

test.describe('Banking Domain - REST API Automation Suite', () => {
  let fromAccountId: string;
  let toAccountId: string;

  test('GET /customers/{id}/accounts - Verify Active Accounts & Balances', async ({ request }) => {
    const response = await request.get('https://parabank.parasoft.com/parabank/services/bank/customers/12212/accounts', {
      headers: { Accept: 'application/json' }
    });

    expect(response.status()).toBe(200);
    const accounts = await response.json();
    console.log('Active Accounts Count:', accounts.length);

    expect(Array.isArray(accounts)).toBeTruthy();
    // Verify customer has at least one active account
    expect(accounts.length).toBeGreaterThan(0);
    
    // Capture real active account IDs dynamically
    fromAccountId = accounts[0].id.toString();
    toAccountId = accounts.length > 1 ? accounts[1].id.toString() : '13677';
  });

  test('POST /transfer - Execute Money Transfer Between Accounts', async ({ request }) => {
    // Ensure prerequisites are set
    const sourceAccount = fromAccountId || '13344';
    const targetAccount = toAccountId || '13677';

    const response = await request.post(`https://parabank.parasoft.com/parabank/services/bank/transfer`, {
      params: {
        fromAccountId: sourceAccount,
        toAccountId: targetAccount,
        amount: 50
      },
      headers: { Accept: 'application/json' }
    });

    expect(response.status()).toBe(200);
    const responseText = await response.text();
    console.log('Transfer Result:', responseText);

    expect(responseText).toContain('Successfully transferred');
  });
});