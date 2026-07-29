const { BasePage } = require('./BasePage');

class ContactPage extends BasePage {
  constructor(page) {
    super(page);

    this.firstNameInput = page.locator('[data-test="first-name"]');
    this.firstNameError = page.locator('[data-test="first-name-error"]');
    this.lastNameInput = page.locator('[data-test="last-name"]');
    this.lastNameError = page.locator('[data-test="last-name-error"]');
    this.emailInput = page.locator('[data-test="email"]');
    this.emailError = page.locator('[data-test="email-error"]');
    this.subjectSelect = page.locator('[data-test="subject"]');
    this.subjectError = page.locator('[data-test="subject-error"]');
    this.messageInput = page.locator('[data-test="message"]');
    this.messageError = page.locator('[data-test="message-error"]');
    this.attachmentInput = page.locator('[data-test="attachment"]');
    this.attachmentError = page.locator('[data-test="attachment-error"]');
    this.submitBtn = page.locator('[data-test="contact-submit"]');
  }

  async goto() {
    await super.goto('/contact');
  }

  async fill({ firstName, lastName, email, subject, message }) {
    if (firstName !== undefined) await this.firstNameInput.fill(firstName);
    if (lastName !== undefined) await this.lastNameInput.fill(lastName);
    if (email !== undefined) await this.emailInput.fill(email);
    if (subject !== undefined) await this.subjectSelect.selectOption(subject);
    if (message !== undefined) await this.messageInput.fill(message);
  }

  async attachFile(filePath) {
    await this.attachmentInput.setInputFiles(filePath);
  }

  async submit() {
    await this.submitBtn.click();
  }
}

module.exports = { ContactPage };
