//Go to URL https://with-bugs.practicesoftwaretesting.com/#
//click on "categories" drop down menu | there should be 5 options "Hand Tools", "Power Tools", "Other", "Special Tools", and "Rentals"
const { test, expect } = require("@playwright/test");
const { BasePage } = require("../pages/BasePage.js");

test.describe("Test Case 4: Categories Drop Down Menu Options", () => {
	test("Categories Drop Down Menu Options", async ({ page }) => {
		const basePage = new BasePage(page);
		await basePage.goto(basePage.sprint5withBugsUrl);
		await basePage.categoriesMenu.click();

		await expect(basePage.handToolsLink).toBeVisible();
		await expect(basePage.otherLink).toBeVisible();
	});
});
