class CheckoutPage {
  constructor(page) {
    this.page = page;
    // Information Step
    this.firstNameInput = page.locator('#first-name');
    this.lastNameInput = page.locator('#last-name');
    this.zipCodeInput = page.locator('#postal-code');
    this.continueButton = page.locator('#continue');

    // Overview Step
    this.finishButton = page.locator('#finish');

    // Final Success Message
    this.successMessage = page.locator('.complete-header');
  }

  async fillInformation(first, last, zip) {
    await this.firstNameInput.fill(first);
    await this.lastNameInput.fill(last);
    await this.zipCodeInput.fill(zip);
    await this.continueButton.click();
  }

  async completePurchase() {
    await this.finishButton.click();
  }
}

module.exports = { CheckoutPage };