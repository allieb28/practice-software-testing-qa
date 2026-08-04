const { test, expect } = require("@playwright/test");
const { BasePage } = require("../pages/BasePage.js");
const { ProductDetailPage } = require("../pages/ProductDetailPage.js");

test.describe("Test Case 2: Increase and Decrease Item Quantity in Cart", () => {
	test("Increase and Decrease Item Quantity in Cart", async ({ page }) => {
		const basePage = new BasePage(page);
		const productDetailPage = new ProductDetailPage(page);
		await basePage.goto(basePage.sprint5withBugsUrl);
		await basePage.categoriesMenu.click();
		await basePage.handToolsLink.click();
		await basePage.hammerImg.click();
		await productDetailPage.increaseQuantity.click();
		await expect(productDetailPage.quantityInput).toHaveValue("2");
		await productDetailPage.decreaseQuantity.click();
		await expect(productDetailPage.quantityInput).toHaveValue("1");
	});
});
