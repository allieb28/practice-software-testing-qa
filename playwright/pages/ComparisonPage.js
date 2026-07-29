const { BasePage } = require('./BasePage');

class ComparisonPage extends BasePage {
  constructor(page) {
    super(page);

    this.comparisonTitle = page.locator('[data-test="comparison-title"]');
    this.comparisonTable = page.locator('[data-test="comparison-table"]');
    this.comparisonEmpty = page.locator('[data-test="comparison-empty"]');
    this.productName = page.locator('[data-test="product-name"]');
    this.compareBrand = page.locator('[data-test="compare-brand"]');
    this.compareCategory = page.locator('[data-test="compare-category"]');
    this.comparePrice = page.locator('[data-test="compare-price"]');
    this.compareDescription = page.locator('[data-test="compare-description"]');
    this.compareEco = page.locator('[data-test="compare-eco"]');
    this.compareCo2 = page.locator('[data-test="compare-co2"]');
    this.compareStock = page.locator('[data-test="compare-stock"]');
    this.compareSpec = page.locator('[data-test="compare-spec"]');
    this.showDifferences = page.locator('[data-test="show-differences"]');
    this.removeProductBtn = page.locator('[data-test="remove-product"]');
    this.clearComparison = page.locator('[data-test="clear-comparison"]');
  }

  async goto() {
    await super.goto('/comparison');
  }

  async toggleShowDifferences() {
    await this.showDifferences.click();
  }
}

module.exports = { ComparisonPage };
