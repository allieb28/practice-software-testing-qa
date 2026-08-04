const { test, expect } = require("@playwright/test");
const {
	BasePage,
} = require("../pages/BasePage.js");

test.describe("Test Case 3: Chainsaw Category Page Load", () => {

	test("Navigate to Chainsaw Category Page", async ({ page }) => {
		const basePage = new BasePage(page);
		await basePage.goto(basePage.sprint5UrlwithBugs);
		await basePage.categoriesMenu.click();
		await basePage.chainsawsLink.click();
		await expect(basePage.page).toHaveURL(/\/#\/chainsaws/);
		await expect(basePage.page).toHaveTitle(/Category: Chainsaws/);
	});
});