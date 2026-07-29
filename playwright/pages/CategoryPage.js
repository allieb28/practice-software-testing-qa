const { BasePage } = require('./BasePage');

class CategoryPage extends BasePage {
  constructor(page) {
    super(page);

    this.pageTitle = page.locator('[data-test="page-title"]');
    this.filters = page.locator('[data-test="filters"]');
    this.sortSelect = page.locator('[data-test="sort"]');
    this.ecoFriendlyFilter = page.locator('[data-test="eco-friendly-filter"]');
    this.categoryEmpty = page.locator('[data-test="category-empty"]');
    this.productCards = page.locator('[data-test^="product-"]');
    this.compareBtn = page.locator('[data-test="compare-btn"]');
    this.comparisonBar = page.locator('[data-test="comparison-bar"]');
    this.compareLink = page.locator('[data-test="compare-link"]');
    this.clearComparison = page.locator('[data-test="clear-comparison"]');
  }

  async goto(categoryName) {
    await super.goto(`/category/${categoryName}`);
  }

  categoryFilter(categoryId) {
    return this.page.locator(`[data-test="category-${categoryId}"]`);
  }

  brandFilter(brandId) {
    return this.page.locator(`[data-test="brand-${brandId}"]`);
  }

  product(productId) {
    return this.page.locator(`[data-test="product-${productId}"]`);
  }

  async sortBy(value) {
    await this.sortSelect.selectOption(value);
  }
}

module.exports = { CategoryPage };
