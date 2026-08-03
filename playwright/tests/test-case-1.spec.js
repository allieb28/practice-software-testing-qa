const { test, expect } = require("@playwright/test");
const { BasePage } = require("../pages/BasePage.js");
const { ProductDetailPage } = require("../pages/ProductDetailPage.js");
const { CartPage } = require("../pages/CartPage.js");

test.describe("Test Case 1: Add and Remove Item from Cart", () => {
	test("Add and Remove Item from Cart", async ({ page }) => {
		const basePage = new BasePage(page);
		const productDetailPage = new ProductDetailPage(page);
		const cartPage = new CartPage(page);
		await basePage.goto(basePage.sprint5withBugsUrl);
		await basePage.categoriesMenu.click();
		await basePage.handToolsLink.click();
		const hammerProductImage = page.locator(
			'[src="assets/img/products/hammer02.jpeg"]',
		);
		await hammerProductImage.click();
		await productDetailPage.addToCartBtn.click();
		await basePage.cartLink.click();
		await cartPage.removeItemByTitle("Hammer");
		await expect(
			page.locator('[data-test="product-title"]', { hasText: /^Hammer$/ }),
		).not.toBeVisible();
	});
});
