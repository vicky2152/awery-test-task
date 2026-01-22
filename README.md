# Awery Test Suite

This project contains automated end-to-end tests for the Awery support form using Cypress.

## Project Structure

```
cypress/
├── e2e/                    # End-to-end test files
│   ├── formFields.cy.js    # Form field tests
│   └── support.cy.js       # Support form tests
├── fixtures/               # Test data files
│   └── example.json
└── support/                # Support files and page objects
    ├── commands.js         # Custom Cypress commands
    ├── e2e.js              # E2E support setup
    ├── testCases.txt       # Test case documentation
    └── pages/
        ├── formFieldsPage.js    # Form fields page object
        └── supportPage.js       # Support page object
```

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository
2. Install dependencies (including Cypress):
   ```bash
   npm install
   ```
   This will automatically install Cypress and all other required packages listed in `package.json`.

## Running Tests

### Run all tests
```bash
npm run cypress:run
```

### Open Cypress Test Runner
```bash
npm run cypress:open
```

### Run specific test file
```bash
npx cypress run --spec "cypress/e2e/support.cy.js"
```

## Dependencies

- **Cypress** - End-to-end testing framework
- **@faker-js/faker** - Fake data generation for testing

## Test Cases

### Support Form Tests (support.cy.js)
- **TC01** - User submits form filling out mandatory fields only
- **TC02** - Required field validation (Problem Description)
- **TC03** - Email field format validation
- **TC04** - Form is submitted with all fields filled in

## Configuration

The project is configured in `cypress.config.js`. Tests are set to run against:
- https://awery.aero/support


When adding new tests:
1. Use page objects for better maintainability
2. Use Faker for generating test data
3. Follow the existing test naming convention (TC## – Description)
