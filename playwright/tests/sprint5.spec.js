const { test, expect } = require("@playwright/test");
const { BasePage } = require("../pages/BasePage.js");
const { LoginPage } = require("../pages/LoginPage.js");
const { RegisterPage } = require("../pages/RegisterPage.js");
const { ProductDetailPage } = require("../pages/ProductDetailPage.js");
const { FavoritesPage } = require("../pages/FavoritesPage.js");
const { CartPage } = require("../pages/CartPage.js");
const { CheckoutAddressPage } = require("../pages/CheckoutAddressPage.js");
const { CheckoutLoginPage } = require("../pages/CheckoutLoginPage.js");
const { CheckoutPaymentPage } = require("../pages/CheckoutPaymentPage.js");

test.describe.configure({ mode: "serial" });

test.describe("User Journey: Register, Log In, Shop, Checkout", () => {
	let page;
	let uniqueEmail;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
	});

	test.afterAll(async () => {
		await page.close();
	});

	test("Register New User", async () => {
		const basePage = new BasePage(page);
		const loginPage = new LoginPage(page);
		const registerPage = new RegisterPage(page);
		uniqueEmail = `user${Date.now()}@example.com`;
		await basePage.goto(basePage.sprint5Url);
		await basePage.signInLink.click();
		await loginPage.registerLink.click();
		await registerPage.firstNameInput.fill("allie");
		await registerPage.lastNameInput.fill("doe");
		await registerPage.dobInput.fill("1999-01-03");
		await registerPage.countrySelect.selectOption({
			label: "United States of America (the)",
		});
		await registerPage.postalCodeInput.fill("70772");
		await registerPage.houseNumberInput.fill("22");
		await registerPage.streetInput.fill("Street Rd");
		await registerPage.cityInput.fill("Baton Rouge");
		await registerPage.stateInput.fill("Louisiana");
		await registerPage.phoneInput.fill("2222222223");

		await registerPage.emailInput.fill(uniqueEmail);
		await registerPage.passwordInput.fill("1234567891Aa$");
		await registerPage.registerSubmit.click();
		await page.waitForURL(/\/auth\/login/);
	});

	test("Logging In", async () => {
		const loginPage = new LoginPage(page);
		await loginPage.emailInput.click();
		await loginPage.emailInput.fill(uniqueEmail);
		await loginPage.passwordInput.click();
		await loginPage.passwordInput.fill("1234567891Aa$");
		await loginPage.loginSubmit.click();
		await expect(page.getByText("allie")).toBeVisible({ timeout: 10000 });
	});

	test("Adding Items to Cart and Favorites", async () => {
		const basePage = new BasePage(page);
		const productDetailPage = new ProductDetailPage(page);
		await basePage.categoriesMenu.click();
		await basePage.handToolsLink.click();
		await basePage.pliersImg.click();
		await productDetailPage.increaseQuantity.click();
		await expect(productDetailPage.quantityInput).toHaveValue("2");
		await productDetailPage.addToCart();
		await expect(
			page.getByRole("alert", { name: "Product added to shopping cart." }),
		).toBeVisible(); //This should be moved into product details page
		await basePage.categoriesMenu.click();
		await basePage.powerToolsLink.click();
		await basePage.beltSanderImg.click();
		await productDetailPage.addToCart();
		await basePage.categoriesMenu.click();
		await basePage.otherLink.click();
		await basePage.gogglesImg.click();
		await productDetailPage.addToFavoritesBtn.click();
		await expect(
			page.getByRole("alert", {
				name: "Product added to your favorites list.",
			}),
		).toBeVisible();
	});

	test("Removing Items from Cart and Favorites", async () => {
		const basePage = new BasePage(page);
		const favoritesPage = new FavoritesPage(page);
		const cartPage = new CartPage(page);
		await basePage.accountMenuToggle.click();
		await basePage.myFavoritesLink.click();
		await expect(basePage.gogglesImg).toBeVisible();
		await favoritesPage.deleteBtn.click();
		await expect(favoritesPage.emptyFavoritesMessage).toBeVisible();
		await basePage.cartLink.click(); //check for confirmation pop up
		await cartPage.removeItemByTitle("Pliers");
		await expect(
			page.locator('[data-test="product-title"]', { hasText: /^Pliers$/ }),
		).not.toBeVisible();
	});

	test("Checkout", async () => {
		const cartPage = new CartPage(page);
		const checkoutLoginPage = new CheckoutLoginPage(page);
		const checkoutAddressPage = new CheckoutAddressPage(page);
		const checkoutPaymentPage = new CheckoutPaymentPage(page);
		await cartPage.proceedToCheckoutBtn.click();
		await checkoutLoginPage.proceedBtn.click();
		await checkoutAddressPage.streetInput.fill("Street Rd");
		await checkoutAddressPage.cityInput.fill("Baton Rouge");
		await checkoutAddressPage.stateInput.fill("Louisiana");
		await checkoutAddressPage.countrySelect.selectOption({
			label: "United States of America (the)",
		});
		await checkoutAddressPage.postalCodeInput.fill("70772");
		await checkoutAddressPage.houseNumberInput.fill("22");
		await checkoutAddressPage.proceedBtn.click();
		await checkoutPaymentPage.selectPaymentMethod(
			CheckoutPaymentPage.PAYMENT_METHOD.CREDIT_CARD,
		);
		await checkoutPaymentPage.creditCardNumberInput.fill("1111-1111-1111-1111");
		await checkoutPaymentPage.expirationDateInput.fill("01/2032");
		await checkoutPaymentPage.cvvInput.fill("123");
		await checkoutPaymentPage.cardHolderNameInput.fill("Allie");
		await checkoutPaymentPage.finishBtn.click();
		await expect(checkoutPaymentPage.paymentSuccessMessage).toBeVisible();
	});
});
