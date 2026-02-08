const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login.page');
const { ProductsPage } = require('../pages/products.page');
const { CartPage } = require('../pages/cart.page');
const { CheckoutPage } = require('../pages/checkout.page');
// 1. Import your data
const testData = require('../data/users.json');

// 2. Loop through each user in the JSON file
for (const user of testData) {
  test(`Complete purchase for: ${user.desc}`, async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    
    await productsPage.addBackpackToCart();
    await productsPage.cartLink.click();
    
    await cartPage.goToCheckout();

    // 3. Use the dynamic data from the JSON
    await checkoutPage.fillInformation(user.firstName, user.lastName, user.zip);
    await checkoutPage.completePurchase();

    await expect(checkoutPage.successMessage).toHaveText('Thank you for your order!');
  });
}