# Monorepo End-to-End tests

This package contains End-to-End tests for the project. The project uses Cypress version 10.

The test-related files are located inside `cypress` directory:

* `e2e/` contains spec files, the actual tests, that are being run
* `fixtures/` contains mock data for the tests
* `plugins/` contains shared plugins between the tests
* `support/` contains global configuration and commands

## Running the tests

Before running tests, make sure you have the application running on an address specified in `cypress.config.js`.

To run E2E tests interactively:
```
$ pnpm run e2e
```

To run E2E tests in continuous integration:
```
$ pnpm run e2e:ci
```