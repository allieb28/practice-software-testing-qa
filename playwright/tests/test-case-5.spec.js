const { test, expect } = require("@playwright/test");
const { BasePage } = require("../pages/BasePage.js");

test.describe("Test Case 5: Related Products Section Header Spelling", () => {
	test("Related Products Section Header Spelling", async ({ page }) => {
		const basePage = new BasePage(page);
		await basePage.goto(basePage.sprint5withBugsUrl);
		await basePage.categoriesMenu.click();
		await basePage.handToolsLink.click();
		const hammerProductImage = page.locator(
			'[src="assets/img/products/hammer02.jpeg"]',
		);
		await hammerProductImage.click();
		await expect(basePage.relatedProductsHeader).toHaveText("Related Products");
	});
});

// Go to URL https://with-bugs.practicesoftwaretesting.com/#
//click on "categories" drop down menu
//select "hand tools" from the drop down menu
//select "Hammer" product image
//scroll to "Related Products " section | related products section header should be spelled correctly
