const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login.page');
const { ProductsPage } = require('../pages/products.page');

test('should add an item to the cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);

  // Step 1: Login
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  // Step 2: Add to Cart
  await productsPage.addBackpackToCart();

  // Step 3: Assertion (Validation)
  // We check if the cart badge now shows "1"
  await expect(productsPage.cartBadge).toHaveText('1');
});