const { BasePage } = require('./BasePage');

class ProductDetailPage extends BasePage {
  constructor(page) {
    super(page);

    this.productName = page.locator('[data-test="product-name"]');
    this.productDescription = page.locator('[data-test="product-description"]');
    this.unitPrice = page.locator('[data-test="unit-price"]');
    this.offerPrice = page.locator('[data-test="offer-price"]');
    this.outOfStock = page.locator('[data-test="out-of-stock"]');
    this.ecoBadge = page.locator('[data-test="eco-badge"]');
    this.co2RatingBadge = page.locator('[data-test="co2-rating-badge"]');

    this.quantityInput = page.locator('[data-test="quantity"]');
    this.increaseQuantity = page.locator('[data-test="increase-quantity"]');
    this.decreaseQuantity = page.locator('[data-test="decrease-quantity"]');

    this.addToCartBtn = page.locator('[data-test="add-to-cart"]');
    this.addToFavoritesBtn = page.locator('[data-test="add-to-favorites"]');
    this.addToCompareBtn = page.locator('[data-test="add-to-compare"]');
    this.comparisonBar = page.locator('[data-test="comparison-bar"]');
    this.compareLink = page.locator('[data-test="compare-link"]');
    this.clearComparison = page.locator('[data-test="clear-comparison"]');

    this.specsTitle = page.locator('[data-test="specs-title"]');
    this.specRows = page.locator('[data-test="spec-row"]');
    this.specName = page.locator('[data-test="spec-name"]');
    this.specValue = page.locator('[data-test="spec-value"]');
    this.specValueText = page.locator('[data-test="spec-value-text"]');
    this.specUnit = page.locator('[data-test="spec-unit"]');
  }

  async goto(productId) {
    await super.goto(`/product/${productId}`);
  }

  async setQuantity(value) {
    await this.quantityInput.fill(String(value));
  }

  async addToCart() {
    await this.addToCartBtn.click();
  }
}

module.exports = { ProductDetailPage };
