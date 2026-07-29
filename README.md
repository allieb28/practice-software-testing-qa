# Practice Software Testing — QA Portfolio

UI and API test automation practice against [Practice Software Testing](https://practicesoftwaretesting.com/),
a demo e-commerce/checkout site with a documented [Swagger API](https://api.practicesoftwaretesting.com/api/documentation).

## Stack

- **Playwright** — UI end-to-end tests (`playwright/`)
- **Postman** — API tests, built and run in the Postman app (`postman/`)

## Structure

```
playwright/
  playwright.config.js
  package.json
  tests/       # spec files go here
  pages/       # page object models go here
  fixtures/    # test data / custom fixtures go here
postman/
  README.md               # setup instructions for the Postman app
  environment.template.json
```

## Getting started (Playwright)

```
cd playwright
npm install
npx playwright install
npm test
```

## Getting started (Postman)

See [postman/README.md](postman/README.md).

## TODO

- [ ] Page objects for key flows (home, product, cart, checkout, account)
- [ ] Playwright specs: browsing/search, cart, checkout, auth
- [ ] Postman collection: auth, products, cart, orders (built in the Postman app)
- [ ] Export Postman collection + environment into `postman/`
- [ ] CI workflow to run Playwright + Newman (Postman CLI runner) on push
