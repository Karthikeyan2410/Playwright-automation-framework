import { test, expect } from '@playwright/test';

test('GET API Request - Verify Users List', async ({ request }) => {
  // 1. Send HTTP GET request (No browser UI needed)
  const response = await request.get('https://reqres.in/api/users?page=2');

  // 2. Assert HTTP Status Code 200 OK
  expect(response.status()).toBe(200);

  // 3. Parse JSON response body and assert data payload
  const responseBody = await response.json();
  expect(responseBody.page).toBe(2);
  expect(responseBody.data.length).toBeGreaterThan(0);
  expect(responseBody.data[0]).toHaveProperty('email');
});

test('POST API Request - Create New User', async ({ request }) => {
  // 1. Send HTTP POST request with payload
  const response = await request.post('https://reqres.in/api/users', {
    data: {
      name: 'morpheus',
      job: 'leader'
    }
  });

  // 2. Assert HTTP Status Code 201 Created
  expect(response.status()).toBe(201);

  // 3. Verify response payload properties
  const responseBody = await response.json();
  expect(responseBody.name).toBe('morpheus');
  expect(responseBody.job).toBe('leader');
  expect(responseBody).toHaveProperty('id');
  expect(responseBody).toHaveProperty('createdAt');
});