const { BasePage } = require('./BasePage');

class ProfilePage extends BasePage {
  constructor(page) {
    super(page);

    this.pageTitle = page.locator('[data-test="page-title"]');

    // Update profile
    this.firstNameInput = page.locator('[data-test="first-name"]');
    this.lastNameInput = page.locator('[data-test="last-name"]');
    this.emailInput = page.locator('[data-test="email"]');
    this.phoneInput = page.locator('[data-test="phone"]');
    this.streetInput = page.locator('[data-test="street"]');
    this.cityInput = page.locator('[data-test="city"]');
    this.stateInput = page.locator('[data-test="state"]');
    this.countrySelect = page.locator('[data-test="country"]');
    this.postalCodeInput = page.locator('[data-test="postal_code"]');
    this.updateProfileSubmit = page.locator('[data-test="update-profile-submit"]');

    // Change password
    this.currentPasswordInput = page.locator('[data-test="current-password"]');
    this.changePasswordSubmit = page.locator('[data-test="change-password-submit"]');

    // Two-factor authentication (TOTP) setup
    this.totpSecret = page.locator('[data-test="totp-secret"]');
    this.totpCodeInput = page.locator('[data-test="totp-code"]');
    this.verifyTotpBtn = page.locator('[data-test="verify-totp"]');
    this.totpSuccess = page.locator('[data-test="totp-success"]');
    this.totpError = page.locator('[data-test="totp-error"]');
  }

  async goto() {
    await super.goto('/account/profile');
  }

  async updateProfile({ firstName, lastName, email, phone, street, city, state, country, postalCode }) {
    if (firstName !== undefined) await this.firstNameInput.fill(firstName);
    if (lastName !== undefined) await this.lastNameInput.fill(lastName);
    if (email !== undefined) await this.emailInput.fill(email);
    if (phone !== undefined) await this.phoneInput.fill(phone);
    if (street !== undefined) await this.streetInput.fill(street);
    if (city !== undefined) await this.cityInput.fill(city);
    if (state !== undefined) await this.stateInput.fill(state);
    if (country !== undefined) await this.countrySelect.selectOption(country);
    if (postalCode !== undefined) await this.postalCodeInput.fill(postalCode);
    await this.updateProfileSubmit.click();
  }

  async verifyTotp(code) {
    await this.totpCodeInput.fill(code);
    await this.verifyTotpBtn.click();
  }
}

module.exports = { ProfilePage };
