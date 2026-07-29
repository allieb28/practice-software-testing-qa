const { BasePage } = require('./BasePage');

class HomePage extends BasePage {
  constructor(page) {
    super(page);

    this.searchInput = page.locator('[data-test="search-query"]');
    this.searchSubmit = page.locator('[data-test="search-submit"]');
    this.searchReset = page.locator('[data-test="search-reset"]');
    this.searchCaption = page.locator('[data-test="search-caption"]');
    this.searchResultCount = page.locator('[data-test="search-result-count"]');
    this.sortSelect = page.locator('[data-test="sort"]');
    this.filters = page.locator('[data-test="filters"]');
    this.ecoFriendlyFilter = page.locator('[data-test="eco-friendly-filter"]');
    this.noResults = page.locator('[data-test="no-results"]');
    this.productCards = page.locator('[data-test^="product-"]');
    this.compareBtn = page.locator('[data-test="compare-btn"]');
    this.comparisonBar = page.locator('[data-test="comparison-bar"]');
    this.compareLink = page.locator('[data-test="compare-link"]');
    this.clearComparison = page.locator('[data-test="clear-comparison"]');
  }

  async goto() {
    await super.goto('/');
  }

  async search(term) {
    await this.searchInput.fill(term);
    await this.searchSubmit.click();
  }

  async resetSearch() {
    await this.searchReset.click();
  }

  async sortBy(value) {
    await this.sortSelect.selectOption(value);
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

  async openProduct(productId) {
    await this.product(productId).click();
  }
}

module.exports = { HomePage };
