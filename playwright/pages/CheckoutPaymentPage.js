const { BasePage } = require('./BasePage');

// Step 4 of checkout (/checkout) — payment method and confirmation.
class CheckoutPaymentPage extends BasePage {
  static PAYMENT_METHOD = {
    BANK_TRANSFER: 'bank-transfer',
    CASH_ON_DELIVERY: 'cash-on-delivery',
    CREDIT_CARD: 'credit-card',
    BUY_NOW_PAY_LATER: 'buy-now-pay-later',
    GIFT_CARD: 'gift-card',
  };

  constructor(page) {
    super(page);

    this.paymentMethodSelect = page.locator('[data-test="payment-method"]');

    // Bank transfer
    this.bankNameInput = page.locator('[data-test="bank_name"]');
    this.accountNameInput = page.locator('[data-test="account_name"]');
    this.accountNumberInput = page.locator('[data-test="account_number"]');

    // Credit card
    this.creditCardNumberInput = page.locator('[data-test="credit_card_number"]');
    this.expirationDateInput = page.locator('[data-test="expiration_date"]');
    this.cvvInput = page.locator('[data-test="cvv"]');
    this.cardHolderNameInput = page.locator('[data-test="card_holder_name"]');

    // Buy now, pay later
    this.monthlyInstallmentsSelect = page.locator('[data-test="monthly_installments"]');

    // Gift card
    this.giftCardNumberInput = page.locator('[data-test="gift_card_number"]');
    this.validationCodeInput = page.locator('[data-test="validation_code"]');

    this.finishBtn = page.locator('[data-test="finish"]');
    this.paymentSuccessMessage = page.locator('[data-test="payment-success-message"]');
    this.paymentErrorMessage = page.locator('[data-test="payment-error-message"]');
  }

  async selectPaymentMethod(method) {
    await this.paymentMethodSelect.selectOption(method);
  }

  async payWithCreditCard({ number, expirationDate, cvv, cardHolderName }) {
    await this.selectPaymentMethod(CheckoutPaymentPage.PAYMENT_METHOD.CREDIT_CARD);
    await this.creditCardNumberInput.fill(number);
    await this.expirationDateInput.fill(expirationDate);
    await this.cvvInput.fill(cvv);
    await this.cardHolderNameInput.fill(cardHolderName);
  }

  async finish() {
    await this.finishBtn.click();
  }
}

module.exports = { CheckoutPaymentPage };
