class BasePage {
	constructor(page) {
		this.page = page;
		// Iterative sprint URLs from https://github.com/testsmith-io/practice-software-testing#urls-hosted-versions
		this.sprint1Url = "https://v1.practicesoftwaretesting.com/#/";
		this.sprint2Url = "https://v2.practicesoftwaretesting.com/#/";
		this.sprint3Url = "https://v3.practicesoftwaretesting.com/#/";
		this.sprint4Url = "https://v4.practicesoftwaretesting.com/#/";
		this.sprint5Url = "https://practicesoftwaretesting.com/";
		this.sprint5withBugsUrl = "https://with-bugs.practicesoftwaretesting.com/#";

		// Header / navigation — present on every page
		this.homeLink = page.locator('[data-test="nav-home"]');
		this.categoriesMenu = page.locator('[data-test="nav-categories"]');
		this.handToolsLink = page.locator('[data-test="nav-hand-tools"]');
		this.powerToolsLink = page.locator('[data-test="nav-power-tools"]');
		this.chainsawsLink = page.locator('[data-test="nav-special-tools"]');
		this.otherLink = page.locator('[data-test="nav-other"]');
		this.rentalsLink = page.locator('[data-test="nav-rentals"]');
		this.contactLink = page.locator('[data-test="nav-contact"]');
		this.cartLink = page.locator('[data-test="nav-cart"]');
		this.cartQuantity = page.locator('[data-test="cart-quantity"]');
		this.signInLink = page.locator('[data-test="nav-sign-in"]');
		this.signOutLink = page.locator('[data-test="nav-sign-out"]');
		this.accountMenuToggle = page.locator("#menu"); // opens the account dropdown ("My account", "My favorites", etc. are hidden until this is clicked)
		this.myAccountLink = page.locator('[data-test="nav-my-account"]');
		this.myProfileLink = page.locator('[data-test="nav-my-profile"]');
		this.myFavoritesLink = page.locator('[data-test="nav-my-favorites"]');
		this.myInvoicesLink = page.locator('[data-test="nav-my-invoices"]');
		this.myMessagesLink = page.locator('[data-test="nav-my-messages"]');
		this.menuToggle = page.locator('[data-test="nav-menu"]');
		this.languageSelect = page.locator('[data-test="language-select"]');
		this.pliersImg = page.locator('[src="assets/img/products/pliers02.avif"]');
		this.beltSanderImg = page.locator(
			'[src="assets/img/products/sander02.avif"]',
		);
		this.gogglesImg = page.locator(
			'[src="assets/img/products/goggles01.avif"]',
		);
		this.hammerImg = page.locator('[src="assets/img/products/hammer02.jpeg"]');
	}

	async goto(path = "/") {
		await this.page.goto(path);
	}

	async goToHome() {
		await this.homeLink.click();
	}

	async goToCart() {
		await this.cartLink.click();
	}

	async goToContact() {
		await this.contactLink.click();
	}

	async goToSignIn() {
		await this.signInLink.click();
	}

	async signOut() {
		await this.signOutLink.click();
	}

	async goToAccountOverview() {
		await this.accountMenuToggle.click();
		await this.myAccountLink.click();
	}

	async setLanguage(code) {
		await this.languageSelect.selectOption(code);
	}
}

module.exports = { BasePage };
