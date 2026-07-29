const { BasePage } = require('./BasePage');

class RegisterPage extends BasePage {
  constructor(page) {
    super(page);

    this.registerForm = page.locator('[data-test="register-form"]');

    this.firstNameInput = page.locator('[data-test="first-name"]');
    this.firstNameError = page.locator('[data-test="first-name-error"]');
    this.lastNameInput = page.locator('[data-test="last-name"]');
    this.lastNameError = page.locator('[data-test="last-name-error"]');
    this.dobInput = page.locator('[data-test="dob"]');
    this.dobError = page.locator('[data-test="dob-error"]');
    this.streetInput = page.locator('[data-test="street"]');
    this.streetError = page.locator('[data-test="street-error"]');
    this.postalCodeInput = page.locator('[data-test="postal_code"]');
    this.postalCodeError = page.locator('[data-test="postal_code-error"]');
    this.cityInput = page.locator('[data-test="city"]');
    this.cityError = page.locator('[data-test="city-error"]');
    this.stateInput = page.locator('[data-test="state"]');
    this.stateError = page.locator('[data-test="state-error"]');
    this.countrySelect = page.locator('[data-test="country"]');
    this.countryError = page.locator('[data-test="country-error"]');
    this.houseNumberInput = page.locator('[data-test="house_number"]');
    this.houseNumberError = page.locator('[data-test="house_number-error"]');
    this.phoneInput = page.locator('[data-test="phone"]');
    this.phoneError = page.locator('[data-test="phone-error"]');
    this.emailInput = page.locator('[data-test="email"]');
    this.emailError = page.locator('[data-test="email-error"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.passwordError = page.locator('[data-test="password-error"]');

    this.postcodeLookupHint = page.locator('[data-test="postcode-lookup-hint"]');
    this.postcodeLookupLoading = page.locator('[data-test="postcode-lookup-loading"]');

    this.registerSubmit = page.locator('[data-test="register-submit"]');
    this.registerError = page.locator('[data-test="register-error"]');
  }

  async goto() {
    await super.goto('/auth/register');
  }

  async fill(fields) {
    if (fields.firstName !== undefined) await this.firstNameInput.fill(fields.firstName);
    if (fields.lastName !== undefined) await this.lastNameInput.fill(fields.lastName);
    if (fields.dob !== undefined) await this.dobInput.fill(fields.dob);
    if (fields.street !== undefined) await this.streetInput.fill(fields.street);
    if (fields.postalCode !== undefined) await this.postalCodeInput.fill(fields.postalCode);
    if (fields.city !== undefined) await this.cityInput.fill(fields.city);
    if (fields.state !== undefined) await this.stateInput.fill(fields.state);
    if (fields.country !== undefined) await this.countrySelect.selectOption(fields.country);
    if (fields.houseNumber !== undefined) await this.houseNumberInput.fill(fields.houseNumber);
    if (fields.phone !== undefined) await this.phoneInput.fill(fields.phone);
    if (fields.email !== undefined) await this.emailInput.fill(fields.email);
    if (fields.password !== undefined) await this.passwordInput.fill(fields.password);
  }

  async submit() {
    await this.registerSubmit.click();
  }
}

module.exports = { RegisterPage };
