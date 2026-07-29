const { BasePage } = require('./BasePage');

// Step 2 of checkout (/checkout) — sign in, continue as guest, or continue if already signed in.
class CheckoutLoginPage extends BasePage {
  constructor(page) {
    super(page);

    this.emailInput = page.locator('[data-test="email"]');
    this.emailError = page.locator('[data-test="email-error"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.passwordError = page.locator('[data-test="password-error"]');
    this.loginSubmit = page.locator('[data-test="login-submit"]');
    this.loginError = page.locator('[data-test="login-error"]');
    this.forgotPasswordLink = page.locator('[data-test="forgot-password-link"]');
    this.registerLink = page.locator('[data-test="register-link"]');

    this.totpCodeInput = page.locator('[data-test="totp-code"]');
    this.verifyTotpBtn = page.locator('[data-test="verify-totp"]');

    this.guestFirstNameInput = page.locator('[data-test="guest-first-name"]');
    this.guestFirstNameError = page.locator('[data-test="guest-first-name-error"]');
    this.guestLastNameInput = page.locator('[data-test="guest-last-name"]');
    this.guestLastNameError = page.locator('[data-test="guest-last-name-error"]');
    this.guestEmailInput = page.locator('[data-test="guest-email"]');
    this.guestEmailError = page.locator('[data-test="guest-email-error"]');
    this.guestSubmit = page.locator('[data-test="guest-submit"]');

    // Shown when already signed in, or after a successful guest/login submit
    this.proceedBtn = page.locator('[data-test="proceed-2"]');
    this.proceedGuestBtn = page.locator('[data-test="proceed-2-guest"]');
  }

  async loginAsCustomer(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginSubmit.click();
  }

  async verifyTotp(code) {
    await this.totpCodeInput.fill(code);
    await this.verifyTotpBtn.click();
  }

  async continueAsGuest({ firstName, lastName, email }) {
    await this.guestFirstNameInput.fill(firstName);
    await this.guestLastNameInput.fill(lastName);
    await this.guestEmailInput.fill(email);
    await this.guestSubmit.click();
  }

  async proceed() {
    await this.proceedBtn.click();
  }

  async proceedAsGuest() {
    await this.proceedGuestBtn.click();
  }
}

module.exports = { CheckoutLoginPage };
