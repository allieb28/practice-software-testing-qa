const { BasePage } = require('./BasePage');

class ForgotPasswordPage extends BasePage {
  constructor(page) {
    super(page);

    this.forgotPasswordForm = page.locator('[data-test="forgot-password-form"]');
    this.emailInput = page.locator('[data-test="email"]');
    this.emailError = page.locator('[data-test="email-error"]');
    this.submitBtn = page.locator('[data-test="forgot-password-submit"]');
  }

  async goto() {
    await super.goto('/auth/forgot-password');
  }

  async submit(email) {
    await this.emailInput.fill(email);
    await this.submitBtn.click();
  }
}

module.exports = { ForgotPasswordPage };
