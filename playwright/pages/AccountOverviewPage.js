const { BasePage } = require('./BasePage');

class AccountOverviewPage extends BasePage {
  constructor(page) {
    super(page);

    this.pageTitle = page.locator('[data-test="page-title"]');
    this.navProfile = page.locator('[data-test="nav-profile"]');
    this.navFavorites = page.locator('[data-test="nav-favorites"]');
    this.navInvoices = page.locator('[data-test="nav-invoices"]');
    this.navMessages = page.locator('[data-test="nav-messages"]');
  }

  async goto() {
    await super.goto('/account');
  }
}

module.exports = { AccountOverviewPage };
