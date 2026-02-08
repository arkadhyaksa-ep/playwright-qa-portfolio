const { test, expect } = require('@playwright/test');

test('Login page should look visually correct', async ({ page }) => {
  // 1. Go to the site
  await page.goto('https://www.saucedemo.com/');

  // 2. The Visual Comparison
  // This single line takes a screenshot and compares it to the stored version
  await expect(page).toHaveScreenshot('login-page.png', {
    maxDiffPixels: 100, // Allows for tiny variations in rendering
    threshold: 0.2     // Sensitivity level
  });
});