const { test, expect } = require("@playwright/test");
const { BasePage } = require("../pages/BasePage.js");

test.describe("Test Case 5: Related Products Section Header Spelling", () => {
	test("Related Products Section Header Spelling", async ({ page }) => {
		const basePage = new BasePage(page);
		await basePage.goto(basePage.sprint5withBugsUrl);
		await basePage.categoriesMenu.click();
		await basePage.handToolsLink.click();
		await basePage.hammerImg.click();
		await expect(basePage.relatedProductsHeader).toHaveText("Related Products");
	});
});
