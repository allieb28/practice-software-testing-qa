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
		const hammerProductImage = page.locator(
			'[src="assets/img/products/hammer02.jpeg"]',
		);
		await hammerProductImage.click();
		await productDetailPage.increaseQuantity.click();
		await expect(productDetailPage.quantityInput).toHaveValue("2");
		await productDetailPage.decreaseQuantity.click();
		await expect(productDetailPage.quantityInput).toHaveValue("1");
	});
});

//Go to URL https://with-bugs.practicesoftwaretesting.com/#
//click on "categories" drop down menu
//select "hand tools" from the drop down menu
//select Pliers product image
//click [+] button to increase or [- ]to decrease quantity | +/- buttons should inc/dec item quantity accordingly
//automation should act as if everything works correctly - you want it to fail due to the bug
