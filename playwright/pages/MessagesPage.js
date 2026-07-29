const { BasePage } = require('./BasePage');

class MessagesPage extends BasePage {
  constructor(page) {
    super(page);

    this.pageTitle = page.locator('[data-test="page-title"]');
  }

  async goto() {
    await super.goto('/account/messages');
  }
}

class MessageDetailPage extends BasePage {
  constructor(page) {
    super(page);

    this.messageBody = page.locator('[data-test="message"]');
    this.backBtn = page.locator('[data-test="back"]');
    this.replySubmitBtn = page.locator('[data-test="reply-submit"]');
  }

  async goto(messageId) {
    await super.goto(`/account/messages/${messageId}`);
  }

  async goBack() {
    await this.backBtn.click();
  }
}

module.exports = { MessagesPage, MessageDetailPage };
