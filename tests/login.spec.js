const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login.page');

test('should login successfully with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  // 1. Go to the site
  await loginPage.goto();

  // 2. Perform the action
  await loginPage.login('standard_user', 'secret_sauce');

  // 3. The Assertion (The Proof!)
  // We check if we are redirected to the products inventory page
  await expect(page).toHaveURL(/.*inventory/);
});