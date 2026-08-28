# 🎭 Enterprise Playwright (TypeScript) Test Automation Framework

[![Playwright Tests](https://github.com/Karthikeyan2410/Playwright-automation-framework/actions/workflows/playwright.yml/badge.svg)](https://github.com/Karthikeyan2410/Playwright-automation-framework/actions/workflows/playwright.yml)
[![Live Execution Report](https://img.shields.io/badge/Playwright_Report-Live-green?style=for-the-badge&logo=github)](https://karthikeyan2410.github.io/Playwright-automation-framework/)

An end-to-end multi-domain test automation framework built with **Playwright** and **TypeScript**. Designed around the **Page Object Model (POM)** pattern, dynamic API data chaining, network mocking, and automated GitHub Actions CI/CD execution reporting hosted via GitHub Pages.

---

### 🛠️ Architecture & Tech Stack

* **Language & Framework**: TypeScript, Node.js, Playwright Test Runner
* **Design Pattern**: Page Object Model (POM)
* **API Testing**: Native Playwright `request` context with dynamic response data chaining
* **CI/CD Pipeline**: GitHub Actions automated pipeline with Linux container execution
* **Reporting**: Automated HTML report generation published directly to GitHub Pages

---

### 🧪 Test Automation Coverage

**1. 🏦 Banking Domain Suite (`ParaBank`)**
* **REST API Automation (`tests/tests/bankingApi.spec.ts`)**:
  * Validates backend authentication endpoints and active account retrieval.
  * Dynamically extracts live `accountId` variables from JSON response payloads to parameterize downstream transaction endpoints.
* **UI Automation (`tests/tests/bankingUi.spec.ts`)**:
  * Implements POM architecture (`ParaBankLoginPage.ts`) for customer authentication.
  * Leverages Playwright strict-mode resilient locators (`getByRole`) for DOM elements.

**2. 🛒 E-Commerce Domain Suite (`SauceDemo`)**
* **UI Workflows**: Automated catalog navigation, shopping cart interactions, and end-to-end checkout flows.
* **Network Mocking**: Intercepts network routes to mock API payloads, server error codes ($500\text{ Internal Error}$), and custom latency.

---

### 🏃 How to Run Tests Locally

```bash
# 1. Clone repository
git clone [https://github.com/Karthikeyan2410/Playwright-automation-framework.git](https://github.com/Karthikeyan2410/Playwright-automation-framework.git)
cd Playwright-automation-framework

# 2. Install dependencies & Playwright browsers
npm install
npx playwright install --with-deps

# 3. Run all test suites
npx playwright test

# 4. Run UI test in headed browser mode
npx playwright test tests/tests/bankingUi.spec.ts --headed

# 5. Open local HTML report
npx playwright show-report
