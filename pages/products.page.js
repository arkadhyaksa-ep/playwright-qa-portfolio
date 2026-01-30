class ProductsPage {
  constructor(page) {
    this.page = page;
    // We use a specific ID for the backpack 'Add to Cart' button
    this.backpackAddButton = page.locator('#add-to-cart-sauce-labs-backpack');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.cartLink = page.locator('.shopping_cart_link');
  }

  async addBackpackToCart() {
    await this.backpackAddButton.click();
  }
}

module.exports = { ProductsPage };