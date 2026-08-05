# QA Portfolio - Practice Software Testing

End-to-end QA work against [Practice Software Testing](https://practicesoftwaretesting.com/), a demo
e-commerce site built specifically for testing practice (UI + a documented
[REST API](https://api.practicesoftwaretesting.com/api/documentation)). This repo covers the full QA
lifecycle on one target: manual exploratory testing, bug documentation, UI test automation, and API
test automation.

## Skills demonstrated

- **Manual test design & bug reporting** - exploratory testing with structured repro steps, expected
  vs. actual results, and clear bug write-ups (`manual-test-cases/`).
- **UI test automation (Playwright)** - Page Object Model architecture, multi-browser execution
  (Chromium/Firefox/WebKit), web-first assertions, and both isolated regression tests and a full
  chained multi-step user journey with shared session state.
- **API test automation (Postman)** - OpenAPI-spec-driven collection, environment/variable chaining
  across requests, scripted assertions, and multi-step flows (auth → cart → checkout).
- **Bug discovery** - found and documented real defects at both the UI and API layer, including one
  undocumented API bug not covered by the app's own OpenAPI spec (see below).

## Milestones

1. **Manual bug hunting.** Explored the site's intentionally-buggy sprint build
   (`with-bugs.practicesoftwaretesting.com`) and documented six defects with full repro steps.
2. **UI automation, one bug per test.** Converted each manual bug report into an isolated Playwright
   regression test, backed by a Page Object Model covering the entire site surface (navigation, product
   listing/detail, cart, three-step checkout, favorites, account, auth) - 19 page objects in total.
3. **A real end-to-end journey.** Built a single chained test (`sprint5.spec.js`) covering the full
   customer path - register → log in → add items to cart and favorites → remove items → checkout with
   payment - running serially against one shared browser session so each step behaves like a real user
   session rather than isolated fixtures.
4. **API testing, starting from the spec.** Pulled the app's live OpenAPI spec (56 endpoints across 14
   tags), built a Postman collection from it, and layered in real test coverage: auth token capture,
   full cart CRUD (create → add item → verify → remove → verify empty) chained via environment
   variables, and a checkout/invoice flow - including tracking down an undocumented validation
   dependency where invoice creation requires the billing address to exactly match the app's own
   postcode-lookup service.
5. **API bug discovery.** Stress-tested `POST /payment/check` beyond the happy path and found it
   returns an undocumented `404` (instead of a `422`) when required credit-card fields are missing,
   silently accepts invalid/missing `payment_method` values, and that the gift-card payment method is
   entirely non-functional - none of which is called out in the app's own API documentation.

## Notable findings

| Layer | Defect                                                                                          |
| ----- | ----------------------------------------------------------------------------------------------- |
| UI    | Cart line-item delete button ("X") doesn't remove the item                                      |
| UI    | Quantity +/- buttons on product detail page don't increment/decrement                           |
| UI    | "Chainsaws" category link resolves to a 404                                                     |
| UI    | Undefined nav entry in the Categories dropdown, resolving to an incomplete page                 |
| UI    | "Related Products" section header is misspelled ("Reltded products")                            |
| API   | `POST /payment/check` returns `404` (undocumented) instead of `422` for missing required fields |
| API   | `POST /payment/check` never succeeds for the `gift-card` payment method                         |
| API   | `POST /payment/check` doesn't validate the `payment_method` enum at all                         |

## Structure

```
manual-test-cases/   # exploratory testing notes + bug reports, one per defect found
playwright/
  playwright.config.js
  tests/              # spec files - isolated bug regressions + the full user-journey test
  pages/               # Page Object Model, one class per page/section
  fixtures/            # test data / custom fixtures
postman/
  README.md                                        # setup instructions for the Postman app
  environment.template.json                         # environment variable scaffold (no live secrets)
  Toolshop API two end-to-end flows.postman_collection.json   # exported collection with scripted tests
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

## Stack

- **Playwright** (JavaScript) - UI end-to-end tests
- **Postman** - API tests, built and run against the live OpenAPI spec
