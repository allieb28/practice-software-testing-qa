# Postman Collection

API testing for [Practice Software Testing](https://api.practicesoftwaretesting.com/api/documentation) (Swagger docs).

## Setup in the Postman app

1. Create a new collection: **Practice Software Testing API**.
2. Import `environment.template.json` as a new environment, then fill in `baseUrl`
   (`https://api.practicesoftwaretesting.com` — no `/api` suffix; that prefix only exists on the
   `/api/documentation` docs page, not on the actual API resources) and any auth token variables you add.
3. Suggested folder structure inside the collection, mirroring the Swagger tags:
   - Auth
   - Products
   - Categories
   - Brands
   - Cart
   - Users
   - Orders / Invoices
4. Once the collection has requests and tests, export it here as `collection.json`
   (File > Export in Postman) so it's tracked in version control alongside the environment.

## Files

- `environment.template.json` — starting point for the Postman environment; import and fill in.
- `collection.json` — not created yet; export from Postman once requests/tests are built.
