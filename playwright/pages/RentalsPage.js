const { BasePage } = require('./BasePage');

class RentalsPage extends BasePage {
  constructor(page) {
    super(page);

    this.pageTitle = page.locator('[data-test="page-title"]');
  }

  async goto() {
    await super.goto('/rentals');
  }

  product(productId) {
    return this.page.locator(`[data-test="product-${productId}"]`);
  }
}

module.exports = { RentalsPage };
