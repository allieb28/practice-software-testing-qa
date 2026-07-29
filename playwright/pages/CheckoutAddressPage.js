const { BasePage } = require('./BasePage');

// Step 3 of checkout (/checkout) — delivery address.
class CheckoutAddressPage extends BasePage {
  constructor(page) {
    super(page);

    this.streetInput = page.locator('[data-test="street"]');
    this.cityInput = page.locator('[data-test="city"]');
    this.stateInput = page.locator('[data-test="state"]');
    this.countrySelect = page.locator('[data-test="country"]');
    this.postalCodeInput = page.locator('[data-test="postal_code"]');
    this.houseNumberInput = page.locator('[data-test="house_number"]');

    this.postcodeLookupHint = page.locator('[data-test="postcode-lookup-hint"]');
    this.postcodeLookupLoading = page.locator('[data-test="postcode-lookup-loading"]');
    this.postcodeLookupError = page.locator('[data-test="postcode-lookup-error"]');

    this.proceedBtn = page.locator('[data-test="proceed-3"]');
  }

  async fill({ street, city, state, country, postalCode, houseNumber }) {
    if (street !== undefined) await this.streetInput.fill(street);
    if (city !== undefined) await this.cityInput.fill(city);
    if (state !== undefined) await this.stateInput.fill(state);
    if (country !== undefined) await this.countrySelect.selectOption(country);
    if (postalCode !== undefined) await this.postalCodeInput.fill(postalCode);
    if (houseNumber !== undefined) await this.houseNumberInput.fill(houseNumber);
  }

  async proceed() {
    await this.proceedBtn.click();
  }
}

module.exports = { CheckoutAddressPage };
