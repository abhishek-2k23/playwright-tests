# Playwright Test Suite

Assignment tests for authentication workflows using Playwright.

## Prerequisites

- Node.js (v18 or higher)
- pnpm

## Installation

```bash
pnpm install
```

## Configuration

Create a `.env` file in the project root with required environment variables:

```
BASE_URL=<your_application_url>
```

## Running Tests

Run all tests:
```bash
pnpm exec playwright test
```

Run tests in specific browser:
```bash
pnpm exec playwright test --project=chromium
```

Run tests with UI mode:
```bash
pnpm exec playwright test --ui
```

Run specific test file:
```bash
pnpm exec playwright test <filename>
```

## Test Coverage

- **login.spec.ts** - Valid login credentials
- **login_incorrect_email.spec.ts** - Login with incorrect email
- **logout.spec.ts** - Logout functionality
- **register.spec.ts** - User registration
- **register_existing_mail.spec.ts** - Registration with existing email
- **passmark_incorrect_login.spec.ts** - Passmark login with invalid credentials

## Reports

HTML test reports are generated in `playwright-report/` directory after test execution.

View the report:
```bash
pnpm exec playwright show-report
```

## Technologies

- Playwright Test
- TypeScript
- dotenv
- Passmark
