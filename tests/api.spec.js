const { test, expect } = require('@playwright/test');

test.describe('API Testing Practice', () => {
  const baseURL = 'https://jsonplaceholder.typicode.com';

  test('should create a new post via API', async ({ request }) => {
    // 1. Send the POST request
    const response = await request.post(`${baseURL}/posts`, {
      data: {
        title: 'QA Portfolio Post',
        body: 'Testing the backend is fun!',
        userId: 1,
      }
    });

    // 2. Assertions
    // Check that the status is 201 (Created)
    expect(response.status()).toBe(201);

    // 3. Verify the data returned by the API
    const responseBody = await response.json();
    expect(responseBody.title).toBe('QA Portfolio Post');
    expect(responseBody.id).toBeTruthy(); // Ensure the API gave us an ID
  });

  test('should fetch an existing post', async ({ request }) => {
    // Send a GET request for post #1
    const response = await request.get(`${baseURL}/posts/1`);
    
    expect(response.ok()).toBeTruthy(); // Status between 200-299
    const responseBody = await response.json();
    expect(responseBody.id).toBe(1);
  });
});