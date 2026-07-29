const { BasePage } = require('./BasePage');

class InvoicesPage extends BasePage {
  constructor(page) {
    super(page);

    this.pageTitle = page.locator('[data-test="page-title"]');
  }

  async goto() {
    await super.goto('/account/invoices');
  }
}

class InvoiceDetailsPage extends BasePage {
  constructor(page) {
    super(page);

    this.invoiceNumber = page.locator('[data-test="invoice-number"]');
    this.invoiceDate = page.locator('[data-test="invoice-date"]');
    this.paymentMethod = page.locator('[data-test="payment-method"]');
    this.offerPrice = page.locator('[data-test="offer-price"]');
    this.ecoDiscount = page.locator('[data-test="eco-discount"]');
    this.total = page.locator('[data-test="total"]');

    this.street = page.locator('[data-test="street"]');
    this.city = page.locator('[data-test="city"]');
    this.state = page.locator('[data-test="state"]');
    this.country = page.locator('[data-test="country"]');
    this.postalCode = page.locator('[data-test="postal_code"]');

    this.downloadInvoiceBtn = page.locator('[data-test="download-invoice"]');
  }

  async goto(invoiceId) {
    await super.goto(`/account/invoices/${invoiceId}`);
  }
}

module.exports = { InvoicesPage, InvoiceDetailsPage };
