const { BasePage } = require('./BasePage');

class LoginPage extends BasePage {
  constructor(page) {
    super(page);

    this.loginForm = page.locator('[data-test="login-form"]');
    this.emailInput = page.locator('[data-test="email"]');
    this.emailError = page.locator('[data-test="email-error"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.passwordError = page.locator('[data-test="password-error"]');
    this.loginSubmit = page.locator('[data-test="login-submit"]');
    this.loginError = page.locator('[data-test="login-error"]');
    this.forgotPasswordLink = page.locator('[data-test="forgot-password-link"]');
    this.registerLink = page.locator('[data-test="register-link"]');

    // Two-factor authentication (TOTP), shown after a successful password check
    this.totpCodeInput = page.locator('[data-test="totp-code"]');
    this.verifyTotpBtn = page.locator('[data-test="verify-totp"]');
  }

  async goto() {
    await super.goto('/auth/login');
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginSubmit.click();
  }

  async verifyTotp(code) {
    await this.totpCodeInput.fill(code);
    await this.verifyTotpBtn.click();
  }

  async goToRegister() {
    await this.registerLink.click();
  }

  async goToForgotPassword() {
    await this.forgotPasswordLink.click();
  }
}

module.exports = { LoginPage };
