const { BasePage } = require("./BasePage");

// Step 1 of checkout (/checkout) — review cart contents before proceeding.
class CartPage extends BasePage {
	constructor(page) {
		super(page);

		this.productTitles = page.locator('[data-test="product-title"]');
		this.productPrices = page.locator('[data-test="product-price"]');
		this.offerPrices = page.locator('[data-test="offer-price"]');
		this.productQuantities = page.locator('[data-test="product-quantity"]');
		this.linePrices = page.locator('[data-test="line-price"]');

		this.cartSubtotal = page.locator('[data-test="cart-subtotal"]');
		this.cartDiscount = page.locator('[data-test="cart-discount"]');
		this.cartEcoDiscount = page.locator('[data-test="cart-eco-discount"]');
		this.cartTotal = page.locator('[data-test="cart-total"]');

		this.continueShoppingBtn = page.locator('[data-test="continue-shopping"]');
		this.proceedToCheckoutBtn = page.locator('[data-test="proceed-1"]');
		this.removeItemBtns = page.locator(".btn.btn-danger");
	}

	async goto() {
		await super.goto("/checkout");
	}

	async proceedToCheckout() {
		await this.proceedToCheckoutBtn.click();
	}

	async removeItemByTitle(title) {
		const itemRow = this.page.locator("tr").filter({
			has: this.page.locator('[data-test="product-title"]', {
				hasText: title,
			}),
		});
		await itemRow.locator(this.removeItemBtns).click();
	}
}

module.exports = { CartPage };
