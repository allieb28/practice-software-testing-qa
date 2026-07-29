const { BasePage } = require('./BasePage');

class FavoritesPage extends BasePage {
  constructor(page) {
    super(page);

    this.pageTitle = page.locator('[data-test="page-title"]');
    this.productName = page.locator('[data-test="product-name"]');
    this.productDescription = page.locator('[data-test="product-description"]');
    this.deleteBtn = page.locator('[data-test="delete"]');
  }

  async goto() {
    await super.goto('/account/favorites');
  }

  favorite(favoriteId) {
    return this.page.locator(`[data-test="favorite-${favoriteId}"]`);
  }
}

module.exports = { FavoritesPage };
