const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login.page');
const { ProductsPage } = require('../pages/products.page');
const { CartPage } = require('../pages/cart.page');
const { CheckoutPage } = require('../pages/checkout.page');

test('should complete a full purchase flow', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  // 1. Setup: Login and add item
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await productsPage.addBackpackToCart();
  
  // 2. Navigation: Go to Cart -> Checkout
  await productsPage.cartLink.click();
  await cartPage.goToCheckout();

  // 3. Action: Fill out info and Finish
  await checkoutPage.fillInformation('John', 'Doe', '12345');
  await checkoutPage.completePurchase();

  // 4. Verification: Did we win?
  await expect(checkoutPage.successMessage).toHaveText('Thank you for your order!');
});